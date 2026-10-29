# frozen_string_literal: true

# A saved view of the CAD viewer: the camera and the appearance of an
# attachment (the state returned by exportView in the browser), with an image
# of the view. The image is an attachment of the view, so that it can be
# downloaded with the attachments API of Redmine. It is visible to the users
# who can see the CAD attachment, and it can only be changed by saving the view.
class CadPreviewView < ApplicationRecord
  # Names are stored in lower case, so that they are found regardless of case
  NAME_FORMAT = /\A[a-z0-9][a-z0-9_-]{0,63}\z/
  PROJECTIONS = %w[perspective orthographic drawing].freeze
  MAX_STATE_SIZE = 10.kilobytes

  belongs_to :attachment
  belongs_to :user
  has_one :image, :class_name => 'Attachment', :as => :container, :dependent => :destroy

  serialize :state, :coder => JSON

  validates :name, :presence => true, :format => {:with => NAME_FORMAT}
  validates :name, :uniqueness => {:scope => :attachment_id}, :if => :name_changed?
  validates :image, :presence => true
  validate :validate_state

  before_validation :set_default, :on => :create
  before_save :set_attachment_digest, :if => :will_save_change_to_state?
  after_save :unset_other_defaults, :if => :is_default?

  scope :sorted, -> { order(:name) }
  scope :named, ->(name) { where(:name => normalize_name(name)) }

  def self.normalize_name(name)
    name.to_s.strip.downcase
  end

  # True if the user can save, change and delete the views of the attachment:
  # the views of all attachments, or of the attachments the user has added
  def self.editable?(attachment, user=User.current)
    project = attachment.project
    return false unless project && attachment.visible?(user)

    user.allowed_to?(:save_cad_preview_views, project) ||
      (attachment.author == user && user.allowed_to?(:save_own_cad_preview_views, project))
  end

  def name=(value)
    super(self.class.normalize_name(value))
  end

  # Replaces the image of the view with the PNG data
  def image_data=(data)
    self.image = Attachment.new(:file => data, :filename => "#{name}.png", :content_type => 'image/png',
                                :author => user)
  end

  # True if the attachment has changed since the view was saved
  def stale?
    attachment_digest != attachment.digest
  end

  def project
    attachment&.project
  end

  # The image can be seen by the users who can see the CAD attachment
  def attachments_visible?(user=User.current)
    attachment.visible?(user)
  end

  # The image is only changed by saving the view
  def attachments_editable?(_user=User.current)
    false
  end

  def attachments_deletable?(_user=User.current)
    false
  end

  private

  def validate_state
    unless state.is_a?(Hash) && state['version'] == 1 && PROJECTIONS.include?(state['projection'])
      errors.add(:state, :invalid)
      return
    end
    errors.add(:state, :too_long, :count => MAX_STATE_SIZE) if state.to_json.bytesize > MAX_STATE_SIZE
  end

  # The first view of an attachment is its default view
  def set_default
    self.is_default = true unless self.class.where(:attachment_id => attachment_id).exists?
  end

  def set_attachment_digest
    self.attachment_digest = attachment.digest
  end

  def unset_other_defaults
    self.class.where(:attachment_id => attachment_id, :is_default => true).where.not(:id => id)
        .update_all(:is_default => false)
  end
end
