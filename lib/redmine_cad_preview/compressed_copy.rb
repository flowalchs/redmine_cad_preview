# frozen_string_literal: true

require 'fileutils'

module RedmineCadPreview
  # gzip-compressed copies of attachments in text formats, sent to the
  # browsers that accept gzip instead of the attachment (see Compression).
  # They are kept next to the converted DWG files:
  #
  #   <digest>_<filesize>.file.gz     the compressed attachment
  #   <digest>_<filesize>.file.plain  compressing does not make the file
  #                                   much smaller (e.g. binary STL or PLY)
  module CompressedCopy
    # Formats that are often text. Binary files of these formats (binary STL
    # and PLY, zipped AMF) are found by the size of the compressed file.
    FORMATS = %w[step iges brep stl obj gltf ply dae vrml amf dxf].freeze
    # Smaller files are sent as they are
    MIN_SIZE = 64.kilobytes
    # The compressed copy is kept only if it is at most this part of the size
    # of the attachment
    MAX_RATIO = 0.8

    class << self
      def path(attachment)
        File.join(DwgConverter.storage_path, "#{key(attachment)}.file.gz")
      end

      def skipped_path(attachment)
        File.join(DwgConverter.storage_path, "#{key(attachment)}.file.plain")
      end

      def candidate?(attachment)
        FORMATS.include?(RedmineCadPreview.format_of(attachment.filename)) && attachment.filesize.to_i >= min_size
      end

      # Returns the path of the compressed copy of the attachment, and creates
      # it if needed. Returns nil if the attachment is sent as it is.
      def for(attachment)
        return nil unless candidate?(attachment)

        path = path(attachment)
        return path if File.file?(path)
        return nil if File.exist?(skipped_path(attachment)) || !File.file?(attachment.diskfile)

        Compression.compress(attachment.diskfile, path)
        return path if File.size(path) <= attachment.filesize * MAX_RATIO

        FileUtils.rm_f(path)
        File.write(skipped_path(attachment), '')
        nil
      rescue StandardError => e
        Rails.logger.error("Could not compress #{attachment.disk_filename}: #{e.message}")
        nil
      end

      def delete(attachment)
        FileUtils.rm_f([path(attachment), skipped_path(attachment)])
      end

      def min_size
        MIN_SIZE
      end

      private

      def key(attachment)
        "#{attachment.digest}_#{attachment.filesize}"
      end
    end
  end
end
