# frozen_string_literal: true

# Sends the files displayed by the CAD viewer. The files are sent here instead
# of by AttachmentsController#download, so that showing a preview does not
# increase the download counter of the attachment.
class CadPreviewsController < ApplicationController
  before_action :find_attachment, :authorize_attachment
  before_action :authorize_snapshot, :only => :snapshot

  # Sends the attachment, or its compressed copy (text formats)
  def file
    send_cad_file @attachment.filename, :plain => @attachment.diskfile,
                                        :compressed => RedmineCadPreview::CompressedCopy.for(@attachment)
  end

  # Sends the DXF file converted from a DWG attachment
  def dxf
    path = RedmineCadPreview::DwgConverter.dxf_for(@attachment)
    if path
      filename = "#{File.basename(@attachment.filename, '.*')}.dxf"
      if RedmineCadPreview::Compression.compressed?(path)
        send_cad_file filename, :compressed => path
      else
        send_cad_file filename, :plain => path
      end
    else
      render_error :status => 422, :message => l(:text_cad_preview_conversion_failed)
    end
  end

  # Sends the image saved in the file (Inventor, Solid Edge, SolidWorks, FreeCAD,
  # 3MF, DXF, DWG)
  def image
    path = RedmineCadPreview::PreviewImage.extract(@attachment)
    return render_404 unless path

    if stale?(:etag => @attachment.digest, :template => false)
      send_file path, :filename => "#{File.basename(@attachment.filename, '.*')}.png",
                      :type => 'image/png', :disposition => 'inline'
    end
  end

  # Stores the snapshot of the viewer that is used for the thumbnail of the
  # attachment. The browser sends it when the preview of an attachment
  # without image is opened.
  def snapshot
    data = request.body.read(RedmineCadPreview::PreviewImage::MAX_SNAPSHOT_SIZE + 1)
    if RedmineCadPreview::PreviewImage.store_snapshot(@attachment, data.to_s)
      head :no_content
    else
      head 422 # rubocop:disable Rails/HttpStatus -- the name of the status differs between Rack versions
    end
  end

  private

  # Only users who can edit the attachment can set its thumbnail
  def authorize_snapshot
    @attachment.editable? ? true : deny_access
  end

  def find_attachment
    @attachment = Attachment.find(params[:id])
    raise ActiveRecord::RecordNotFound unless RedmineCadPreview.previewable?(@attachment)

    @project = @attachment.project
  rescue ActiveRecord::RecordNotFound
    render_404
  end

  def authorize_attachment
    @attachment.visible? ? true : deny_access
  end

  # Sends the compressed file with Content-Encoding: gzip if the client
  # accepts it, and the plain file otherwise. Without plain file, the
  # compressed file is uncompressed while it is sent.
  def send_cad_file(filename, plain: nil, compressed: nil)
    options = {:filename => filename, :type => RedmineCadPreview.content_type_of(filename),
               :disposition => 'attachment'}
    gzip = compressed && RedmineCadPreview::Compression.accepts_gzip?(request.headers['Accept-Encoding'])
    response.headers['Vary'] = 'Accept-Encoding' if compressed
    # The compressed and the plain file must not be mixed up in caches
    return unless stale?(:etag => gzip ? [@attachment.digest, 'gzip'] : @attachment.digest, :template => false)

    if gzip
      response.headers['Content-Encoding'] = 'gzip'
      send_file compressed, options
    elsif plain
      send_file plain, options
    else
      send_file_headers! options
      self.response_body = RedmineCadPreview::Compression::UncompressedBody.new(compressed)
    end
  end
end
