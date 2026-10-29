// Worker that parses DXF files, so that large drawings do not block the page
// and the other viewers. It does the same as DxfViewer.SetupWorker(), without
// loading the renderer of the viewer.
import './dxf_solids.js';
import { DxfWorker } from 'dxf-viewer/src/DxfWorker.js';

new DxfWorker(self, true);
