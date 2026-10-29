// Worker that parses DXF files, so that large drawings do not block the page
// and the other viewers. It does the same as DxfViewer.SetupWorker(), without
// loading the renderer of the viewer.
import { summarizeDxf } from './dxf_solids.js';
import { DxfWorker } from 'dxf-viewer/src/DxfWorker.js';

// The parsed file is sent to the page only as its summary, as copying a large
// parsed file to the page blocks it
const load = DxfWorker.prototype._Load;
DxfWorker.prototype._Load = async function loadSummary(...args) {
  const result = await load.apply(this, args);
  return { ...result, dxf: result.dxf && { summary: summarizeDxf(result.dxf) } };
};

new DxfWorker(self, true);
