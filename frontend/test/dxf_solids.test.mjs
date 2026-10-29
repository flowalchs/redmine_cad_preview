import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizeDxf } from '../src/dxf_solids.js';

test('summary of a parsed DXF file', () => {
  const dxf = { header: { $INSUNITS: 4 }, entities: [{ type: 'LINE' }, { type: '3DSOLID' }, { type: 'BODY' }, { type: 'CIRCLE' }] };
  assert.deepEqual(summarizeDxf(dxf), { units: 4, entities: 4, solids: 2 });
  assert.deepEqual(summarizeDxf(undefined), { units: undefined, entities: 0, solids: 0 });
});
