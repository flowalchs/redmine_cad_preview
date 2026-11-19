# frozen_string_literal: true

require File.expand_path('../test_helper', __dir__)

class CadPreviewCompressionTest < ActiveSupport::TestCase
  include RedmineCadPreview::TestHelper

  fixtures :projects, :users, :email_addresses, :issues, :trackers, :projects_trackers,
           :issue_statuses, :enumerations

  def setup
    set_tmp_attachments_directory
    clear_cad_preview_cache
  end

  def test_accepts_gzip
    compression = RedmineCadPreview::Compression
    assert compression.accepts_gzip?('gzip, deflate, br, zstd')
    assert compression.accepts_gzip?('deflate, GZIP;q=0.5')
    assert compression.accepts_gzip?('x-gzip')
    assert compression.accepts_gzip?('*')
    assert_not compression.accepts_gzip?(nil)
    assert_not compression.accepts_gzip?('')
    assert_not compression.accepts_gzip?('identity')
    assert_not compression.accepts_gzip?('deflate, br')
    assert_not compression.accepts_gzip?('gzip;q=0, deflate')
    assert_not compression.accepts_gzip?('gzip;q=0.0')
  end

  def test_compress_and_open
    source = File.join(RedmineCadPreview::DwgConverter.storage_path, 'source.dxf')
    FileUtils.mkdir_p(File.dirname(source))
    File.write(source, "0\nSECTION\n" * 1000)
    target = RedmineCadPreview::Compression.compress(source, "#{source}.gz")

    assert File.size(target) < File.size(source)
    assert_equal File.read(source), RedmineCadPreview::Compression.open(target, &:read)
    assert_equal File.read(source), RedmineCadPreview::Compression.open(source, &:read)
    assert_equal File.read(source), RedmineCadPreview::Compression::UncompressedBody.new(target).to_enum(:each).to_a.join
  end

  def test_compressed_copy_of_text_file
    RedmineCadPreview::CompressedCopy.stubs(:min_size).returns(0)
    attachment = create_attachment_with("DATA;\n" * 1000, 'model.step')

    path = RedmineCadPreview::CompressedCopy.for(attachment)
    assert_equal RedmineCadPreview::CompressedCopy.path(attachment), path
    assert_equal File.binread(attachment.diskfile), Zlib.gunzip(File.binread(path))
  end

  def test_compressed_copy_of_small_file_should_not_be_made
    attachment = create_cad_attachment('model.step')

    assert_nil RedmineCadPreview::CompressedCopy.for(attachment)
    assert_not File.exist?(RedmineCadPreview::CompressedCopy.path(attachment))
  end

  def test_compressed_copy_of_binary_format_should_not_be_made
    attachment = create_cad_attachment('thumbnail.3mf')
    RedmineCadPreview::CompressedCopy.stubs(:min_size).returns(0)

    assert_nil RedmineCadPreview::CompressedCopy.for(attachment)
    assert_not File.exist?(RedmineCadPreview::CompressedCopy.path(attachment))
  end

  def test_compressed_copy_that_is_not_smaller_should_not_be_kept
    RedmineCadPreview::CompressedCopy.stubs(:min_size).returns(0)
    attachment = create_attachment_with(Random.new(1).bytes(10_000), 'model.stl')

    assert_nil RedmineCadPreview::CompressedCopy.for(attachment)
    assert_not File.exist?(RedmineCadPreview::CompressedCopy.path(attachment))
    # The file is not compressed again
    RedmineCadPreview::Compression.expects(:compress).never
    assert_nil RedmineCadPreview::CompressedCopy.for(attachment)
  end

  def test_upload_of_large_text_file_should_compress_it_in_the_background
    RedmineCadPreview::CompressedCopy.stubs(:min_size).returns(0)
    attachment = create_attachment_with("DATA;\n" * 1000, 'model.step')
    assert File.file?(RedmineCadPreview::CompressedCopy.path(attachment))
  end

  def test_destroying_the_attachment_should_delete_the_compressed_copy
    RedmineCadPreview::CompressedCopy.stubs(:min_size).returns(0)
    attachment = create_attachment_with("DATA;\n" * 1000, 'model.step')
    path = RedmineCadPreview::CompressedCopy.for(attachment)
    assert File.file?(path)

    attachment.destroy
    assert_not File.exist?(path)
  end

  def test_content_type_of
    assert_equal 'model/step', RedmineCadPreview.content_type_of('part.stp')
    assert_equal 'image/vnd.dxf', RedmineCadPreview.content_type_of('plan.DXF')
    assert_equal 'application/octet-stream', RedmineCadPreview.content_type_of('part.brep')
  end
end
