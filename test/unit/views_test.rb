# frozen_string_literal: true

require File.expand_path('../test_helper', __dir__)

class CadPreviewViewsServiceTest < ActiveSupport::TestCase
  include RedmineCadPreview::TestHelper

  fixtures :projects, :users, :email_addresses, :issues, :trackers, :projects_trackers, :issue_statuses,
           :enumerations

  STATE = {'version' => 1, 'projection' => 'perspective'}.freeze

  def setup
    set_tmp_attachments_directory
    clear_cad_preview_cache
    @attachment = create_cad_attachment('model.step')
    @user = User.find(2)
  end

  def test_save_new_view
    view = save('Front')

    assert view.persisted?
    assert_equal 'front', view.name
    assert_equal 0, view.revision
    assert view.is_default?
    assert_equal view, RedmineCadPreview::Views.find(@attachment, 'FRONT')
    assert_equal view, RedmineCadPreview::Views.default(@attachment)
  end

  def test_save_new_view_without_image_should_return_errors
    view = save('front', :image => nil)

    assert_not view.persisted?
    assert view.errors[:image].any?
  end

  def test_save_existing_view_with_revision
    save('front')
    view = save('front', :revision => 0, :state => STATE.merge('projection' => 'orthographic'), :image => png_image(3, 3))

    assert view.errors.empty?
    assert_equal 1, view.revision
    assert_equal 'orthographic', view.reload.state['projection']
  end

  def test_save_existing_view_without_or_with_old_revision_should_raise_conflict
    save('front')
    save('front', :revision => 0)

    [nil, 0, 5].each do |revision|
      assert_raise(RedmineCadPreview::Views::Conflict) { save('front', :revision => revision) }
    end
  end

  def test_save_deleted_view_should_raise_conflict
    assert_raise(RedmineCadPreview::Views::Conflict) { save('front', :revision => 0) }
  end

  def test_set_default_view_without_new_image
    save('front')
    save('detail')

    view = RedmineCadPreview::Views.save(@attachment, 'detail', :user => @user, :revision => 0, :is_default => true)
    assert view.errors.empty?
    assert_equal view, RedmineCadPreview::Views.default(@attachment)
  end

  def test_all
    save('front')
    save('detail')

    assert_equal %w[detail front], RedmineCadPreview::Views.all(@attachment).map(&:name)
  end

  def test_delete
    save('front')

    assert_raise(RedmineCadPreview::Views::Conflict) { RedmineCadPreview::Views.delete(@attachment, 'front', :revision => 1) }
    assert_difference 'CadPreviewView.count', -1 do
      RedmineCadPreview::Views.delete(@attachment, 'Front', :revision => 0)
    end
    assert_raise(RedmineCadPreview::Views::Conflict) { RedmineCadPreview::Views.delete(@attachment, 'front', :revision => 0) }
  end

  private

  def save(name, revision: nil, state: STATE, image: png_image)
    RedmineCadPreview::Views.save(@attachment, name, :user => @user, :revision => revision, :state => state,
                                                     :image => image)
  end
end
