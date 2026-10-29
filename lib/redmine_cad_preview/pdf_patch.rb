# frozen_string_literal: true

module RedmineCadPreview
  # The PDF export of Redmine includes only the images attached to the
  # exported object. The images of the saved views and the thumbnails of CAD
  # attachments shown by the macro are included too, if the user can see them.
  module PdfPatch
    def get_image_filename(attrname)
      super || view_image_filename(attrname) || cad_thumbnail_filename(attrname)
    end

    private

    def view_image_filename(attrname)
      return nil unless %r{/attachments/download/(?<id>\d+)/} =~ attrname

      image = Attachment.find_by(:id => id, :container_type => 'CadPreviewView')
      image.diskfile if image&.readable? && image.visible?
    end

    def cad_thumbnail_filename(attrname)
      return nil unless %r{/attachments/thumbnail/(?<id>\d+)/(?<size>\d+)} =~ attrname

      attachment = Attachment.find_by(:id => id)
      return nil unless attachment&.visible? && RedmineCadPreview.format_of(attachment.filename)

      attachment.thumbnail(:size => size)
    end
  end
end
