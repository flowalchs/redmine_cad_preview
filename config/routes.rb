# frozen_string_literal: true

get 'cad_previews/:id/file', :to => 'cad_previews#file', :id => /\d+/, :as => 'cad_preview_file'
get 'cad_previews/:id/image', :to => 'cad_previews#image', :id => /\d+/, :as => 'cad_preview_image'
post 'cad_previews/:id/snapshot', :to => 'cad_previews#snapshot', :id => /\d+/, :as => 'cad_preview_snapshot'
get 'cad_previews/:id/dxf', :to => 'cad_previews#dxf', :id => /\d+/, :as => 'cad_preview_dxf'

# Without format with the session of the user (the viewer), with .json with
# an API key, like the API of Redmine
constraints(:id => /\d+/, :name => /[A-Za-z0-9][A-Za-z0-9_-]{0,63}/) do
  scope 'cad_previews/:id' do
    get 'views', :to => 'cad_preview_views#index', :as => 'cad_preview_views'
    get 'views/:name', :to => 'cad_preview_views#show', :as => 'cad_preview_view'
    put 'views/:name', :to => 'cad_preview_views#update'
    delete 'views/:name', :to => 'cad_preview_views#destroy'
  end
end
