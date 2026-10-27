# frozen_string_literal: true

module RedmineCadPreview
  # Initial material and lighting of the 3D viewer. The defaults are set in the
  # plugin settings, and other plugins can override them per attachment with a
  # provider. Only the values in CHOICES are used.
  module ViewerOptions
    DEFAULTS = {'material_mode' => 'original', 'lighting' => 'original'}.freeze
    CHOICES = {'material_mode' => %w[original matte], 'lighting' => %w[original studio]}.freeze

    class << self
      # Registers a provider, which returns the options for an attachment, e.g.
      #   RedmineCadPreview::ViewerOptions.register(:my_plugin) {|attachment| {'material_mode' => 'matte'}}
      def register(key, &provider)
        providers[key.to_sym] = provider
      end

      # Options of the plugin settings
      def defaults
        DEFAULTS.merge(valid(RedmineCadPreview.settings))
      end

      # Labels and values for a select box
      def choices(key)
        CHOICES.fetch(key).map {|value| [::I18n.t(:"label_cad_preview_#{value}"), value]}
      end

      # Options for the attachment, from the settings and the providers
      def for(attachment)
        providers.each_value.reduce(defaults) do |options, provider|
          options.merge(valid(provider.call(attachment)))
        end
      end

      private

      def providers
        @providers ||= {}
      end

      def valid(options)
        options.to_h.stringify_keys.select {|key, value| CHOICES[key]&.include?(value)}
      end
    end
  end
end
