// 3D solids (ACIS data) cannot be displayed by dxf-viewer, which skips them.
// They are parsed as empty entities, so that the preview can tell that they
// are missing. Imported by the viewer and by the worker that parses DXF files.
import DxfParser from 'dxf-viewer/src/parser/DxfParser.js';

export const SOLID_TYPES = ['3DSOLID', 'BODY', 'REGION', 'SURFACE'];

const SOLID_HANDLERS = SOLID_TYPES.map((type) => {
  function SolidParser() {}
  SolidParser.ForEntityName = type;
  SolidParser.prototype.parseEntity = (scanner) => {
    let group = scanner.next();
    while (group !== 'EOF' && group.code !== 0) group = scanner.next();
    return { type };
  };
  return SolidParser;
});
const registerEntityHandler = DxfParser.prototype.registerEntityHandler;
DxfParser.prototype.registerEntityHandler = function register(handlerType) {
  registerEntityHandler.call(this, handlerType);
  for (const handler of SOLID_HANDLERS) {
    if (!this._entityHandlers[handler.ForEntityName]) registerEntityHandler.call(this, handler);
  }
};
