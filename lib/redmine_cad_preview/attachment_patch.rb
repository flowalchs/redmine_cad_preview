# frozen_string_literal: true

module RedmineCadPreview
  module AttachmentPatch
    def self.included(base)
      base.prepend(Thumbnail)
      base.has_many :cad_preview_views, :dependent => :destroy
      base.after_commit :prepare_cad_preview_later, :on => :create
      base.after_commit :delete_cad_preview, :on => :destroy
    end

    # Thumbnails of CAD files, made from the image of the default view, the
    # image saved in the file or the snapshot of the viewer (see PreviewImage)
    module Thumbnail
      def thumbnailable?
        super || (Redmine::Thumbnail.convert_available? && cad_preview_image.present?)
      end

      def thumbnail(options={})
        source = cad_preview_image
        return super unless source && Redmine::Thumbnail.convert_available?

        size = options[:size].to_i
        size = size > 0 ? [(size / 50.0).ceil * 50, 800].min : Setting.thumbnails_size.to_i
        size = 100 unless size > 0
        Redmine::Thumbnail.generate(source, cad_preview_thumbnail_path(size), size)
      rescue StandardError => e
        Rails.logger.error("An error occurred while generating thumbnail for #{disk_filename}: #{e.message}")
        nil
      end

      private

      def cad_preview_image
        return nil unless RedmineCadPreview.format_of(filename) && RedmineCadPreview.previewable?(self)

        default_view_image&.diskfile || RedmineCadPreview::PreviewImage.path(self)
      end

      def default_view_image
        image = RedmineCadPreview::Views.default(self)&.image
        image if image && File.file?(image.diskfile)
      end

      # The thumbnails of the default view have their own path, as the path is
      # the ETag of the thumbnail: a new default view gets a new thumbnail.
      def cad_preview_thumbnail_path(size)
        image = default_view_image
        return thumbnail_path(size) unless image

        File.join(self.class.thumbnails_storage_path, "#{digest}_#{filesize}_view#{image.id}_#{size}.thumb")
      end
    end

    private

    def prepare_cad_preview_later
      return unless RedmineCadPreview::CadPreviewJob.needed?(self)

      RedmineCadPreview::CadPreviewJob.perform_later(id)
    rescue StandardError => e
      Rails.logger.error("Could not schedule the CAD preview of #{disk_filename}: #{e.message}")
    end

    def delete_cad_preview
      RedmineCadPreview::DwgConverter.delete(self)
      RedmineCadPreview::PreviewImage.delete(self)
    rescue StandardError => e
      Rails.logger.error("Could not remove CAD preview for #{disk_filename}: #{e.message}")
    end
  end
end
