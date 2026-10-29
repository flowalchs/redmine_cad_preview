# frozen_string_literal: true

module RedmineCadPreview
  # Saved views of CAD attachments, e.g. for other plugins:
  #
  #   view = RedmineCadPreview::Views.find(attachment, 'front')
  #   view.state           # state of the viewer (Hash)
  #   view.image.diskfile  # PNG image of the view
  #   view.revision        # increased each time the view is saved
  #   view.stale?          # true if the attachment has changed since then
  #
  # The permissions are not checked here (see CadPreviewView.editable?).
  module Views
    # Raised when a view was changed or deleted since it was read
    class Conflict < StandardError; end

    class << self
      def all(attachment)
        attachment.cad_preview_views.sorted.preload(:image, :user)
      end

      # Finds a view by its name, regardless of case
      def find(attachment, name)
        attachment.cad_preview_views.named(name).first
      end

      def default(attachment)
        attachment.cad_preview_views.find_by(:is_default => true)
      end

      # Saves a view. A new view needs the state and the image. An existing
      # view needs the revision that was read, and is saved with a new state
      # only together with a new image. Returns the view, which has errors if
      # it could not be saved, or raises Conflict.
      def save(attachment, name, user:, revision: nil, state: nil, image: nil, is_default: nil)
        view = find(attachment, name)
        check_revision(view, revision)

        view ||= CadPreviewView.new(:attachment => attachment, :name => name)
        view.lock_version = revision.to_i if view.persisted?
        view.user = user
        view.state = state unless state.nil?
        view.image_data = image unless image.nil?
        view.is_default = is_default unless is_default.nil?
        view.save
        view
      rescue ActiveRecord::StaleObjectError, ActiveRecord::RecordNotUnique
        raise Conflict
      end

      # Deletes a view with the revision that was read, or raises Conflict
      def delete(attachment, name, revision:)
        view = find(attachment, name)
        raise Conflict unless view

        check_revision(view, revision)
        view.lock_version = revision.to_i
        view.destroy
      rescue ActiveRecord::StaleObjectError
        raise Conflict
      end

      private

      # The revision is needed to change a view, and must not be given for a
      # new view, which would mean that it was deleted in the meantime
      def check_revision(view, revision)
        current = view&.revision&.to_s
        raise Conflict unless revision.presence&.to_s == current
      end
    end
  end
end
