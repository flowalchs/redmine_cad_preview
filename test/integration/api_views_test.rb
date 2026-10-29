# frozen_string_literal: true

require File.expand_path('../test_helper', __dir__)

class CadPreviewApiViewsTest < Redmine::ApiTest::Base
  include RedmineCadPreview::TestHelper

  fixtures :projects, :users, :email_addresses, :roles, :members, :member_roles,
           :enabled_modules, :issues, :trackers, :projects_trackers, :issue_statuses, :enumerations

  STATE = {'version' => 1, 'projection' => 'drawing', 'center' => [0, 0], 'view_width' => 100}.freeze

  def setup
    super
    set_tmp_attachments_directory
    clear_cad_preview_cache
    @attachment = create_cad_attachment('drawing.dxf')
    Role.find(1).add_permission!(:save_cad_preview_views)
  end

  def test_save_and_read_a_view_with_an_api_key
    put("/cad_previews/#{@attachment.id}/views/front.json",
        :params => {:view => {:state => STATE, :image => Base64.strict_encode64(png_image)}}.to_json,
        :headers => {'CONTENT_TYPE' => 'application/json', 'X-Redmine-API-Key' => User.find(2).api_key})
    assert_response :success

    get "/cad_previews/#{@attachment.id}/views.json", :headers => credentials('jsmith')
    assert_response :success
    view = response.parsed_body['views'].first
    assert_equal STATE, view['state']

    # The image with the attachments API of Redmine
    get "/attachments/#{view['image']['id']}.json", :headers => credentials('jsmith')
    assert_response :success
    get "/attachments/download/#{view['image']['id']}", :headers => credentials('jsmith')
    assert_response :success
    assert_equal png_image, response.body
  end

  def test_api_key_without_rest_api_should_be_denied
    Setting.rest_api_enabled = '0'
    @attachment.project.update_column(:is_public, false)

    get "/cad_previews/#{@attachment.id}/views.json", :headers => {'X-Redmine-API-Key' => User.find(2).api_key}
    assert_response :forbidden
  end
end
