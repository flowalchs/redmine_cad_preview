# frozen_string_literal: true

require File.expand_path('../test_helper', __dir__)

class CadPreviewMacroHelperTest < Redmine::HelperTest
  include ApplicationHelper
  include ERB::Util
  include RedmineCadPreview::TestHelper

  fixtures :projects, :users, :email_addresses, :roles, :members, :member_roles, :enabled_modules,
           :issues, :trackers, :projects_trackers, :issue_statuses, :enumerations

  def setup
    super
    set_tmp_attachments_directory
    clear_cad_preview_cache
    @issue = Issue.find(1)
    @attachment = create_cad_attachment('model.step', :container => @issue)
    @view = RedmineCadPreview::Views.save(@attachment, 'front', :user => User.find(2),
                                          :state => {'version' => 1, 'projection' => 'perspective'},
                                          :image => png_image)
  end

  # PDF export and emails, where no viewer can be shown
  def test_macro_with_full_path_should_show_the_image
    html = textilizable('{{cad_preview(model.step)}}', :object => @issue, :only_path => false)

    assert_include %(src="http://test.host/attachments/download/#{@view.image.id}/front.png"), html
    assert_not_include 'data-cad-preview', html
  end

  def test_pdf_export_should_include_the_image_of_a_view
    pdf = Redmine::Export::PDF::ITCPDF.new(current_language)
    # The attachments of the exported object
    pdf.instance_variable_set(:@attachments, [])
    url = "http://test.host/attachments/download/#{@view.image.id}/front.png"

    User.current = User.find(2)
    assert_equal @view.image.diskfile, pdf.get_image_filename(url)
    User.current = User.anonymous
    Project.find(1).update_column(:is_public, false)
    assert_nil pdf.get_image_filename(url)
  end

  def test_macro_with_full_path_without_default_view_should_show_the_thumbnail
    skip 'ImageMagick is not available' unless Redmine::Thumbnail.convert_available?

    other = create_cad_attachment('model.stl', :container => @issue)
    RedmineCadPreview::PreviewImage.store_snapshot(other, png_image(10, 10))
    html = textilizable('{{cad_preview(model.stl)}}', :object => @issue, :only_path => false)

    assert_include %(src="http://test.host/attachments/thumbnail/#{other.id}/400"), html
  end

  def test_pdf_export_should_include_the_thumbnail_of_a_cad_attachment
    skip 'ImageMagick is not available' unless Redmine::Thumbnail.convert_available?

    other = create_cad_attachment('model.stl', :container => @issue)
    RedmineCadPreview::PreviewImage.store_snapshot(other, png_image(10, 10))
    pdf = Redmine::Export::PDF::ITCPDF.new(current_language)
    pdf.instance_variable_set(:@attachments, [])

    User.current = User.find(2)
    assert_equal other.thumbnail(:size => 400), pdf.get_image_filename("http://test.host/attachments/thumbnail/#{other.id}/400")
  end
end
