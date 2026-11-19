# frozen_string_literal: true

require 'fileutils'
require 'zlib'

module RedmineCadPreview
  # gzip-compressed copies of the files sent to the viewer. Converted DWG
  # files and text formats (DXF, STEP, IGES, OBJ, ASCII STL...) are usually
  # several times larger than compressed, and web servers do not compress
  # them on the fly, so they are compressed once and sent with
  # Content-Encoding: gzip to the browsers that accept it.
  module Compression
    LEVEL = 6
    CHUNK_SIZE = 1.megabyte

    class << self
      # Compresses the source file to the target file. The target file is
      # written under a temporary name first, so that a partly written file
      # is never sent. Returns the target.
      def compress(source, target)
        FileUtils.mkdir_p(File.dirname(target))
        temporary = "#{target}.#{Process.pid}.#{Thread.current.object_id}.tmp"
        File.open(source, 'rb') do |input|
          Zlib::GzipWriter.open(temporary, LEVEL) do |gz|
            gz.mtime = 0
            while (chunk = input.read(CHUNK_SIZE))
              gz.write(chunk)
            end
          end
        end
        File.rename(temporary, target)
        target
      ensure
        FileUtils.rm_f(temporary) if temporary
      end

      def compressed?(path)
        path.to_s.end_with?('.gz')
      end

      # Opens the file for reading, and uncompresses it if it is compressed
      def open(path, &)
        if compressed?(path)
          Zlib::GzipReader.open(path, &)
        else
          File.open(path, 'rb', &)
        end
      end

      # Returns true if the Accept-Encoding header accepts gzip
      def accepts_gzip?(accept_encoding)
        accept_encoding.to_s.split(',').any? do |entry|
          name, *params = entry.split(';').map(&:strip)
          next false unless %w[gzip x-gzip *].include?(name.to_s.downcase)

          quality = params.find {|p| p.start_with?('q=')}
          quality.nil? || quality.delete_prefix('q=').to_f > 0
        end
      end
    end

    # Response body that uncompresses a compressed file while it is sent,
    # for the clients that do not accept gzip
    class UncompressedBody
      def initialize(path)
        @path = path
      end

      def each
        Zlib::GzipReader.open(@path) do |gz|
          while (chunk = gz.read(CHUNK_SIZE))
            yield chunk
          end
        end
      end
    end
  end
end
