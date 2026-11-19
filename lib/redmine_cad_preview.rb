# frozen_string_literal: true

module RedmineCadPreview
  VERSION = '1.3.0'

  # Formats and file extensions. DWG files are converted to DXF on the server.
  # Inventor, Solid Edge and SolidWorks files are shown with the preview image
  # saved in the file (IMAGE_FORMATS).
  FORMATS = {
    'step' => %w[.step .stp],
    'iges' => %w[.iges .igs],
    'brep' => %w[.brep .brp],
    'freecad' => %w[.fcstd],
    'stl' => %w[.stl],
    'obj' => %w[.obj],
    '3mf' => %w[.3mf],
    'gltf' => %w[.gltf],
    'glb' => %w[.glb],
    'ply' => %w[.ply],
    'dae' => %w[.dae],
    'fbx' => %w[.fbx],
    'vrml' => %w[.wrl .vrml],
    'amf' => %w[.amf],
    '3ds' => %w[.3ds],
    'dxf' => %w[.dxf],
    'dwg' => %w[.dwg],
    'inventor' => %w[.ipt .iam .ipn .idw .ide],
    'solid_edge' => %w[.par .asm .psm .pwd .dft],
    'solidworks' => %w[.sldprt .sldasm .slddrw]
  }.freeze

  # Content types of the files sent to the viewer. Other formats are sent as
  # application/octet-stream.
  CONTENT_TYPES = {
    'step' => 'model/step',
    'iges' => 'model/iges',
    'stl' => 'model/stl',
    'obj' => 'model/obj',
    '3mf' => 'model/3mf',
    'gltf' => 'model/gltf+json',
    'glb' => 'model/gltf-binary',
    'dae' => 'model/vnd.collada+xml',
    'vrml' => 'model/vrml',
    'dxf' => 'image/vnd.dxf',
    'dwg' => 'image/vnd.dwg'
  }.freeze

  # Formats read with OpenCASCADE (occt-import-js) in the browser
  OCCT_FORMATS = %w[step iges brep freecad].freeze

  # Formats that cannot be displayed in the viewer, only with the image
  # saved in the file
  IMAGE_FORMATS = %w[inventor solid_edge solidworks].freeze

  DEFAULT_SETTINGS = {
    'material_mode' => 'original',
    'lighting' => 'original',
    'world_axes' => 'true',
    'formats' => FORMATS.keys,
    'max_file_size' => '50',
    'compress_files' => 'true',
    'conversion_timeout' => '30'
  }.freeze

  class << self
    def settings
      Setting.plugin_redmine_cad_preview || {}
    end

    def enabled_formats
      formats = settings['formats']
      formats = DEFAULT_SETTINGS['formats'] unless formats.is_a?(Array)
      formats & FORMATS.keys
    end

    # Maximum file size for the preview in bytes
    def max_file_size
      size = settings['max_file_size'].to_i
      (size > 0 ? size : DEFAULT_SETTINGS['max_file_size'].to_i).megabytes
    end

    # Returns the format of the file, or nil if it is not supported
    def format_of(filename)
      extension = File.extname(filename.to_s).downcase
      FORMATS.find {|_, extensions| extensions.include?(extension)}&.first
    end

    # Attachments in text formats get a compressed copy that is sent to the
    # browser (see CompressedCopy)
    def compress_files?
      settings['compress_files'] != 'false'
    end

    def content_type_of(filename)
      CONTENT_TYPES[format_of(filename)] || 'application/octet-stream'
    end

    def previewable?(attachment)
      format = format_of(attachment.filename)
      return false unless format && enabled_formats.include?(format)
      return false unless attachment.readable? && attachment.filesize <= max_file_size
      return DwgConverter.available? if format == 'dwg'
      # .asm is also the extension of assembler source files
      return CompoundFile.signature?(attachment.diskfile) if format == 'solid_edge'

      true
    end
  end
end
