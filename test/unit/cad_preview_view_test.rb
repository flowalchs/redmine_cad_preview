# frozen_string_literal: true

require File.expand_path('../test_helper', __dir__)

class CadPreviewViewTest < ActiveSupport::TestCase
  include RedmineCadPreview::TestHelper

  fixtures :projects, :users, :email_addresses, :roles, :members, :member_roles, :enabled_modules,
           :issues, :trackers, :projects_trackers, :issue_statuses, :enumerations

  STATE = {'version' => 1, 'projection' => 'perspective', 'position' => [1, 2, 3]}.freeze

  def setup
    set_tmp_attachments_directory
    clear_cad_preview_cache
    @attachment = create_cad_attachment('model.step')
  end

  def test_create_view_with_image
    view = create_view('front')

    assert_equal STATE, view.reload.state
    assert_equal @attachment.digest, view.attachment_digest
    assert_equal User.find(2), view.user
    image = view.image
    assert_equal 'front.png', image.filename
    assert_equal 'image/png', image.content_type
    assert_equal view, image.container
    assert_equal png, File.binread(image.diskfile)
    assert_equal @attachment.project, image.project
  end

  def test_image_should_be_visible_to_the_users_who_can_see_the_attachment
    image = create_view('front').image
    @attachment.project.update_column(:is_public, false)

    assert image.visible?(User.find(2))
    assert_not image.visible?(User.anonymous)
    assert_not image.editable?(User.find(1))
    assert_not image.deletable?(User.find(1))
  end

  def test_first_view_should_be_the_default_view
    front = create_view('front')
    detail = create_view('detail')

    assert front.reload.is_default?
    assert_not detail.reload.is_default?
  end

  def test_saving_a_default_view_should_unset_the_other_default_view
    front = create_view('front')
    detail = create_view('detail', :is_default => true)
    other = create_view('front', :attachment => create_cad_attachment('model.stl'))

    assert_not front.reload.is_default?
    assert detail.reload.is_default?
    assert other.reload.is_default?
  end

  def test_editable_with_permission_for_all_attachments
    Role.find(2).add_permission!(:save_cad_preview_views)

    assert CadPreviewView.editable?(@attachment, User.find(3))
  end

  def test_editable_with_permission_for_own_attachments
    Role.find(2).add_permission!(:save_own_cad_preview_views)

    assert_not CadPreviewView.editable?(@attachment, User.find(3))
    @attachment.update_column(:author_id, 3)
    assert CadPreviewView.editable?(@attachment.reload, User.find(3))
  end

  def test_not_editable_without_permission
    @attachment.update_column(:author_id, 3)

    assert_not CadPreviewView.editable?(@attachment.reload, User.find(3))
    assert_not CadPreviewView.editable?(@attachment, User.anonymous)
  end

  def test_not_editable_if_the_attachment_is_not_visible
    Role.find(2).add_permission!(:save_cad_preview_views)
    Role.find(2).remove_permission!(:view_issues)

    assert_not CadPreviewView.editable?(@attachment, User.find(3))
  end

  def test_name_should_be_valid
    ['', 'front view', '-front', 'a' * 65, 'ä'].each do |name|
      assert_not build_view(name).valid?, "#{name.inspect} should be invalid"
    end
    ['front', 'detail-1', 'top_2', 'a' * 64].each do |name|
      assert build_view(name).valid?, "#{name.inspect} should be valid"
    end
  end

  def test_name_should_be_stored_in_lower_case
    view = create_view(' Front ')

    assert_equal 'front', view.reload.name
    assert_equal view, CadPreviewView.named('FRONT').first
  end

  def test_name_should_be_unique_per_attachment
    create_view('front')

    assert_not build_view('front').valid?
    assert_not build_view('Front').valid?
    assert build_view('front', :attachment => create_cad_attachment('model.stl')).valid?
  end

  def test_state_should_be_valid
    [nil, 'text', {}, STATE.merge('version' => 2), STATE.merge('projection' => 'fisheye'),
     STATE.merge('position' => 'x' * CadPreviewView::MAX_STATE_SIZE)].each do |state|
      assert_not build_view('front', :state => state).valid?, "#{state.inspect.truncate(50)} should be invalid"
    end
    assert build_view('front', :state => {'version' => 1, 'projection' => 'drawing'}).valid?
  end

  def test_image_is_required
    view = CadPreviewView.new(:attachment => @attachment, :name => 'front', :state => STATE, :user => User.find(2))

    assert_not view.valid?
  end

  def test_replacing_the_image_should_delete_the_old_image
    view = create_view('front')
    old_image = view.image

    assert_no_difference 'Attachment.count' do
      view.update!(:image_data => png_image(3, 3))
    end
    assert_not Attachment.exists?(old_image.id)
    assert_equal png_image(3, 3), File.binread(view.reload.image.diskfile)
  end

  def test_image_should_be_a_png_image_with_a_maximum_size
    ['', 'text', png_image(1601, 1), png_image(1, 1601), png_image(0, 1),
     png_image + ("\x00" * CadPreviewView::MAX_IMAGE_SIZE)].each do |data|
      assert_not build_view('front', :image => data).valid?, "#{data.inspect.truncate(30)} should be invalid"
    end
    assert build_view('front', :image => png_image(1600, 1600)).valid?
  end

  def test_image_should_be_allowed_by_the_settings_of_redmine
    with_settings(:attachment_extensions_denied => 'png') do
      assert_not build_view('front').valid?
    end
  end

  def test_new_state_should_need_a_new_image
    view = create_view('front')

    view.state = STATE.merge('position' => [3, 2, 1])
    assert_not view.valid?
    view.image_data = png_image
    assert view.valid?
  end

  def test_view_that_cannot_be_saved_should_keep_its_image
    view = create_view('front')
    image = view.image

    view.update(:name => 'Front View', :image_data => png_image(3, 3))
    assert_equal image, view.reload.image
    assert File.exist?(image.diskfile)
  end

  def test_stale
    view = create_view('front')
    assert_not view.stale?

    @attachment.update_column(:digest, 'changed')
    assert view.reload.stale?

    view.update!(:state => STATE.merge('position' => [3, 2, 1]), :image_data => png_image)
    assert_not view.stale?
  end

  def test_destroying_the_attachment_should_destroy_its_views_and_images
    create_view('front')
    create_view('detail')

    assert_difference 'CadPreviewView.count', -2 do
      # The CAD attachment and the images of its 2 views
      assert_difference 'Attachment.count', -3 do
        @attachment.reload.destroy
      end
    end
  end

  private

  def png
    @png ||= File.binread(File.join(FIXTURES_DIR, 'thumbnail.png'))
  end

  def build_view(name, attachment: @attachment, state: STATE, is_default: false, image: png)
    CadPreviewView.new(:attachment => attachment, :name => name, :state => state, :is_default => is_default,
                       :user => User.find(2), :image_data => image)
  end

  def create_view(name, **)
    build_view(name, **).tap(&:save!)
  end
end
