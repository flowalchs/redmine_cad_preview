# frozen_string_literal: true

require File.expand_path('../test_helper', __dir__)

class CadPreviewAutocompleteTest < Redmine::IntegrationTest
  include RedmineCadPreview::TestHelper

  fixtures :projects, :users, :email_addresses, :roles, :members, :member_roles, :enabled_modules,
           :issues, :trackers, :projects_trackers, :issue_statuses, :enumerations,
           :wikis, :wiki_pages, :wiki_contents

  def setup
    set_tmp_attachments_directory
    clear_cad_preview_cache
  end

  def test_issue_page_should_suggest_the_cad_attachments_of_the_issue
    attachment = create_cad_attachment('model.step', :container => Issue.find(1))
    create_cad_attachment('notes.txt', :container => Issue.find(1))
    %w[front detail].each do |name|
      RedmineCadPreview::Views.save(attachment, name, :user => User.find(2),
                                                      :state => {'version' => 1, 'projection' => 'perspective'},
                                                      :image => png_image)
    end
    create_cad_attachment('model.stl', :container => Issue.find(2))
    log_user('jsmith', 'jsmith')

    get '/issues/1'
    assert_response :success
    assert_select 'div[data-controller=cad-preview-autocomplete][hidden]' do |element|
      assert_equal [{'id' => attachment.id, 'name' => 'model.step', 'views' => %w[detail front]}],
                   JSON.parse(element.first['data-cad-preview-autocomplete-files-value'])
      assert_includes JSON.parse(element.first['data-cad-preview-autocomplete-extensions-value']), '.dwg'
    end
    assert_select 'script[type=module][src*=cad_preview_autocomplete]'
  end

  def test_wiki_page_should_suggest_the_cad_attachments_of_the_page
    page = WikiPage.find(1)
    attachment = create_cad_attachment('model.step', :container => page)
    log_user('jsmith', 'jsmith')

    get "/projects/#{page.project.identifier}/wiki/#{page.title}/edit"
    assert_response :success
    assert_select 'div[data-controller=cad-preview-autocomplete]' do |element|
      assert_equal [{'id' => attachment.id, 'name' => 'model.step', 'views' => []}],
                   JSON.parse(element.first['data-cad-preview-autocomplete-files-value'])
    end
  end

  def test_anonymous_user_should_not_get_suggestions
    get '/issues/1'
    assert_response :success
    assert_select 'div[data-controller=cad-preview-autocomplete]', 0
  end
end
