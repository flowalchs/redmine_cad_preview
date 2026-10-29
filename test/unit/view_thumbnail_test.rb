# frozen_string_literal: true

require File.expand_path('../test_helper', __dir__)

class CadPreviewViewThumbnailTest < ActiveSupport::TestCase
  include RedmineCadPreview::TestHelper

  fixtures :projects, :users, :email_addresses, :issues, :trackers, :projects_trackers, :issue_statuses,
           :enumerations

  STATE = {'version' => 1, 'projection' => 'perspective'}.freeze

  def setup
    skip 'ImageMagick is not available' unless Redmine::Thumbnail.convert_available?

    set_tmp_attachments_directory
    clear_cad_preview_cache
    @thumbnails = Attachment.thumbnails_storage_path
    Attachment.thumbnails_storage_path = Dir.mktmpdir
    @attachment = create_cad_attachment('model.step')
    RedmineCadPreview::PreviewImage.store_snapshot(@attachment, png_image(10, 10))
  end

  def teardown
    return unless @thumbnails

    FileUtils.rm_rf(Attachment.thumbnails_storage_path)
    Attachment.thumbnails_storage_path = @thumbnails
  end

  def test_thumbnail_without_views_should_be_made_from_the_snapshot
    thumbnail = @attachment.thumbnail(:size => 100)

    assert_equal @attachment.send(:thumbnail_path, 100), thumbnail
    assert_equal [10, 10], CadPreviewView.png_dimensions(File.binread(thumbnail))
  end

  def test_thumbnail_should_be_made_from_the_default_view
    save('front', png_image(40, 20))
    save('detail', png_image(30, 30), :is_default => false)

    thumbnail = @attachment.reload.thumbnail(:size => 100)
    image = RedmineCadPreview::Views.default(@attachment).image
    assert_match(/_view#{image.id}_100\.thumb\z/, thumbnail)
    assert_equal [40, 20], CadPreviewView.png_dimensions(File.binread(thumbnail))
  end

  def test_new_default_view_should_get_a_new_thumbnail
    save('front', png_image(40, 20))
    old_thumbnail = @attachment.reload.thumbnail(:size => 100)

    save('detail', png_image(30, 30), :is_default => true)
    assert_not File.exist?(old_thumbnail)
    thumbnail = @attachment.reload.thumbnail(:size => 100)
    assert_not_equal old_thumbnail, thumbnail
    assert_equal [30, 30], CadPreviewView.png_dimensions(File.binread(thumbnail))
  end

  def test_deleting_the_default_view_should_use_the_snapshot_again
    save('front', png_image(40, 20))
    @attachment.reload.thumbnail(:size => 100)

    RedmineCadPreview::Views.delete(@attachment, 'front', :revision => 0)
    assert_empty Dir.glob(File.join(Attachment.thumbnails_storage_path, '*_view*.thumb'))
    assert_equal [10, 10], CadPreviewView.png_dimensions(File.binread(@attachment.reload.thumbnail(:size => 100)))
  end

  private

  def save(name, image, is_default: nil)
    RedmineCadPreview::Views.save(@attachment, name, :user => User.find(2), :state => STATE, :image => image,
                                                     :is_default => is_default)
  end
end
