# frozen_string_literal: true

module RedmineCadPreview
  # Adds the suggestions of CAD files for the macro to the pages (see
  # frontend/src/autocomplete.js)
  class Hooks < Redmine::Hook::ViewListener
    render_on :view_layouts_base_body_bottom, :partial => 'cad_previews/autocomplete'
  end
end
