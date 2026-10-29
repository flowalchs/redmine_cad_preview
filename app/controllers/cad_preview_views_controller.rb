# frozen_string_literal: true

# Saved views of CAD attachments as JSON. The viewer uses them with the
# session of the user, other applications with an API key.
class CadPreviewViewsController < ApplicationController
  accept_api_auth :index, :show, :update, :destroy

  before_action :find_attachment, :authorize_attachment
  before_action :authorize_edit, :only => [:update, :destroy]

  def index
    views = RedmineCadPreview::Views.all(@attachment)
    render :json => {:views => views.map {|view| view_json(view)}}
  end

  def show
    view = RedmineCadPreview::Views.find(@attachment, params[:name])
    return render_404 unless view

    render :json => {:view => view_json(view)}
  end

  # Saves a view with the parameters (JSON):
  #   view[state]       state of the viewer
  #   view[image]       PNG image, Base64 encoded
  #   view[is_default]  true for the default view of the attachment
  #   view[revision]    the revision that was read, needed for an existing view
  def update
    attributes = params.to_unsafe_h.fetch('view', {})
    image = decode_image(attributes['image'])
    return render_errors([l(:error_cad_preview_view_image)]) if image == false

    view = RedmineCadPreview::Views.save(
      @attachment, params[:name],
      :user => User.current, :revision => attributes['revision'], :state => attributes['state'], :image => image,
      :is_default => attributes.key?('is_default') ? ActiveModel::Type::Boolean.new.cast(attributes['is_default']) : nil
    )
    if view.errors.any?
      render_errors view.errors.full_messages
    else
      render :json => {:view => view_json(view)}
    end
  rescue RedmineCadPreview::Views::Conflict
    render_conflict
  end

  # Deletes a view with the parameter revision
  def destroy
    RedmineCadPreview::Views.delete(@attachment, params[:name], :revision => params[:revision])
    head :no_content
  rescue RedmineCadPreview::Views::Conflict
    render_conflict
  end

  private

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

  def authorize_edit
    CadPreviewView.editable?(@attachment) ? true : deny_access
  end

  # Returns nil without image, or false if the image is not Base64 encoded
  def decode_image(data)
    return nil if data.nil?

    Base64.strict_decode64(data.to_s)
  rescue ArgumentError
    false
  end

  def view_json(view)
    {
      :name => view.name,
      :is_default => view.is_default,
      :revision => view.revision,
      :stale => view.stale?,
      :state => view.state,
      :image => view.image && {
        :id => view.image.id,
        :filename => view.image.filename,
        :filesize => view.image.filesize,
        :content_url => download_named_attachment_url(view.image, view.image.filename)
      },
      :user => {:id => view.user_id, :name => view.user&.name},
      :created_on => view.created_on,
      :updated_on => view.updated_on
    }
  end

  # rubocop:disable Rails/HttpStatus -- the names of the statuses differ between Rack versions
  def render_errors(messages)
    render :json => {:errors => messages}, :status => 422
  end

  def render_conflict
    render :json => {:errors => [l(:error_cad_preview_view_conflict)]}, :status => 409
  end
  # rubocop:enable Rails/HttpStatus
end
