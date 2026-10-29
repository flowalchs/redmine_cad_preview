# frozen_string_literal: true

class CreateCadPreviewViews < ActiveRecord::Migration[7.2]
  def up
    create_table :cad_preview_views do |t|
      t.references :attachment, :null => false, :index => false
      t.string :name, :limit => 64, :null => false
      t.boolean :is_default, :default => false, :null => false
      t.text :state, :null => false
      t.string :attachment_digest, :limit => 64, :null => false
      t.references :user, :null => false
      t.integer :lock_version, :default => 0, :null => false
      t.datetime :created_on, :null => false
      t.datetime :updated_on, :null => false
    end
    add_index :cad_preview_views, [:attachment_id, :name], :unique => true
  end

  # Run when the plugin is uninstalled. The images of the views are
  # attachments, which are deleted with their files.
  def down
    Attachment.where(:container_type => 'CadPreviewView').find_each(&:destroy)
    drop_table :cad_preview_views
  end
end
