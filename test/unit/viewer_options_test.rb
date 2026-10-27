# frozen_string_literal: true

require File.expand_path('../test_helper', __dir__)

class CadPreviewViewerOptionsTest < ActiveSupport::TestCase
  include RedmineCadPreview::TestHelper

  fixtures :attachments

  def teardown
    RedmineCadPreview::ViewerOptions.send(:providers).delete(:test)
  end

  def test_defaults
    with_cad_settings({}) do
      assert_equal({'material_mode' => 'original', 'lighting' => 'studio'},
                   RedmineCadPreview::ViewerOptions.for(Attachment.find(1)))
    end
  end

  def test_defaults_without_saved_options
    # Settings saved before the options were added
    with_settings(:plugin_redmine_cad_preview => {'formats' => ['step']}) do
      assert_equal({'material_mode' => 'original', 'lighting' => 'studio'}, RedmineCadPreview::ViewerOptions.defaults)
    end
  end

  def test_options_of_the_settings
    with_cad_settings({'material_mode' => 'matte', 'lighting' => 'original'}) do
      assert_equal({'material_mode' => 'matte', 'lighting' => 'original'},
                   RedmineCadPreview::ViewerOptions.for(Attachment.find(1)))
    end
  end

  def test_invalid_options_of_the_settings_should_be_ignored
    with_cad_settings({'material_mode' => 'shiny', 'lighting' => 'original'}) do
      assert_equal({'material_mode' => 'original', 'lighting' => 'original'}, RedmineCadPreview::ViewerOptions.defaults)
    end
  end

  def test_provider_should_override_the_settings
    attachment = Attachment.find(1)
    RedmineCadPreview::ViewerOptions.register(:test) do |a|
      assert_equal attachment, a
      {:material_mode => 'matte'}
    end

    with_cad_settings({'lighting' => 'original'}) do
      assert_equal({'material_mode' => 'matte', 'lighting' => 'original'},
                   RedmineCadPreview::ViewerOptions.for(attachment))
    end
  end

  def test_invalid_options_of_a_provider_should_be_ignored
    RedmineCadPreview::ViewerOptions.register(:test) do |_attachment|
      {'material_mode' => 'shiny', 'lighting' => 'original', 'background' => '#000000'}
    end

    with_cad_settings({'material_mode' => 'matte'}) do
      assert_equal({'material_mode' => 'matte', 'lighting' => 'original'},
                   RedmineCadPreview::ViewerOptions.for(Attachment.find(1)))
    end
  end

  def test_provider_returning_nil_should_be_ignored
    RedmineCadPreview::ViewerOptions.register(:test) {|_attachment| nil}

    with_cad_settings({}) do
      assert_equal RedmineCadPreview::ViewerOptions.defaults, RedmineCadPreview::ViewerOptions.for(Attachment.find(1))
    end
  end

  def test_choices
    assert_equal [%w[Original original], %w[Matte matte]], RedmineCadPreview::ViewerOptions.choices('material_mode')
    assert_equal [%w[Studio studio], %w[Original original]], RedmineCadPreview::ViewerOptions.choices('lighting')
  end
end
