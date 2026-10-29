# frozen_string_literal: true

require File.expand_path('../test_helper', __dir__)

# The views with the session of the user, as used by the viewer
class CadPreviewViewsSessionTest < Redmine::IntegrationTest
  include RedmineCadPreview::TestHelper

  fixtures :projects, :users, :email_addresses, :roles, :members, :member_roles,
           :enabled_modules, :issues, :trackers, :projects_trackers, :issue_statuses, :enumerations

  STATE = {'version' => 1, 'projection' => 'perspective', 'position' => [1.5, 2, 3]}.freeze

  def setup
    set_tmp_attachments_directory
    clear_cad_preview_cache
    @attachment = create_cad_attachment('model.step')
    Role.find(1).add_permission!(:save_cad_preview_views)
    log_user('jsmith', 'jsmith')
  end

  def test_index
    save_view('front')
    save_view('detail')

    get views_path
    assert_response :success
    views = response.parsed_body['views']
    assert_equal %w[detail front], views.pluck('name')
    front = views.last
    assert_equal true, front['is_default']
    assert_equal 0, front['revision']
    assert_equal false, front['stale']
    assert_equal STATE, front['state']
    assert_equal 'front.png', front['image']['filename']
    assert_match %r{/attachments/download/#{front['image']['id']}/front.png\z}, front['image']['content_url']
    assert_equal 'Redmine Admin', front['user']['name']
  end

  def test_show
    save_view('front')

    get views_path('Front')
    assert_response :success
    assert_equal 'front', response.parsed_body['view']['name']
  end

  def test_show_unknown_view
    get views_path('front')
    assert_response :not_found
  end

  def test_show_should_require_visible_attachment
    @attachment.project.update_column(:is_public, false)
    reset!

    get views_path('front'), :headers => {'Accept' => 'application/json'}
    assert_response :forbidden
  end

  def test_update_should_create_a_view
    assert_difference ['CadPreviewView.count', 'Attachment.count'] do
      put_view('Front')
    end
    assert_response :success
    view = response.parsed_body['view']
    assert_equal 'front', view['name']
    assert_equal 0, view['revision']
    assert_equal STATE, view['state']
    assert_equal png_image, File.binread(Attachment.find(view['image']['id']).diskfile)
    assert_equal User.find(2), CadPreviewView.last.user
  end

  def test_update_should_save_an_existing_view_with_its_revision
    save_view('front')

    put_view('front', :revision => 0, :image => png_image(3, 3))
    assert_response :success
    assert_equal 1, response.parsed_body['view']['revision']
  end

  def test_update_with_old_revision_should_return_a_conflict
    save_view('front')
    RedmineCadPreview::Views.save(@attachment, 'front', :user => User.find(1), :revision => 0, :image => png_image)

    assert_no_difference 'Attachment.count' do
      put_view('front', :revision => 0)
    end
    assert_response :conflict
    assert_equal ['The view has been changed or deleted in the meantime. Reload it and try again.'],
                 response.parsed_body['errors']
  end

  def test_update_should_set_the_default_view
    save_view('front')
    save_view('detail')

    put_view('detail', :view => {:revision => 0, :is_default => true})
    assert_response :success
    assert_equal 'detail', RedmineCadPreview::Views.default(@attachment).name
  end

  def test_update_with_invalid_image_should_return_errors
    ['not base64!', Base64.strict_encode64('text')].each do |image|
      put_view('front', :view => {:state => STATE, :image => image})
      assert_response :unprocessable_content
      assert response.parsed_body['errors'].any?
    end
  end

  def test_update_without_permission_should_be_denied
    reset!
    log_user('dlopper', 'foo')

    put_view('front')
    assert_response :forbidden
  end

  def test_update_with_permission_for_own_attachments
    Role.find(2).add_permission!(:save_own_cad_preview_views)
    reset!
    log_user('dlopper', 'foo')

    put_view('front')
    assert_response :forbidden

    @attachment.update_column(:author_id, 3)
    put_view('front')
    assert_response :success
  end

  def test_destroy
    save_view('front')

    assert_difference ['CadPreviewView.count', 'Attachment.count'], -1 do
      delete views_path('front'), :params => {:revision => 0}
    end
    assert_response :no_content
  end

  def test_destroy_with_old_revision_should_return_a_conflict
    save_view('front')

    delete views_path('front'), :params => {:revision => 1}
    assert_response :conflict
  end

  def test_destroy_without_permission_should_be_denied
    save_view('front')
    reset!
    log_user('dlopper', 'foo')

    delete views_path('front'), :params => {:revision => 0}
    assert_response :forbidden
  end

  private

  def views_path(name=nil)
    "/cad_previews/#{@attachment.id}/views#{"/#{name}" if name}"
  end

  def put_view(name, revision: nil, image: png_image, view: nil)
    view ||= {:state => STATE, :image => Base64.strict_encode64(image), :revision => revision}.compact
    put views_path(name), :params => {:view => view}.to_json, :headers => {'CONTENT_TYPE' => 'application/json'}
  end

  def save_view(name)
    RedmineCadPreview::Views.save(@attachment, name, :user => User.find(1), :state => STATE, :image => png_image)
  end
end
