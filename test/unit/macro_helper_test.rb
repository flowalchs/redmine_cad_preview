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

  def test_macro_with_full_path_without_default_view_should_show_the_thumbnail
    skip 'ImageMagick is not available' unless Redmine::Thumbnail.convert_available?

    other = create_cad_attachment('model.stl', :container => @issue)
    RedmineCadPreview::PreviewImage.store_snapshot(other, png_image(10, 10))
    html = textilizable('{{cad_preview(model.stl)}}', :object => @issue, :only_path => false)

    assert_include %(src="http://test.host/attachments/thumbnail/#{other.id}/400"), html
  end
end
