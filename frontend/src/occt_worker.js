// Worker that reads STEP, IGES and BREP files with occt-import-js, so that
// large models do not block the page and the other viewers.
//
// Message: {id, method, buffer, script, wasm} with the method of occt-import-js
// (ReadStepFile, ReadIgesFile, ReadBrepFile), the file and the URLs of
// occt-import-js. Answer: {id, result} or {id, error}.

let occt = null;

async function loadOcct(script, wasm) {
  if (!occt) {
    self.importScripts(script);
    // The WebAssembly file is loaded here, as the browser loads it twice if
    // the server does not send it as application/wasm
    const wasmBinary = await (await fetch(wasm, { credentials: 'same-origin' })).arrayBuffer();
    occt = await self.occtimportjs({ wasmBinary });
  }
  return occt;
}

// The arrays of the meshes are sent as typed arrays, which are transferred
// to the page instead of copied
function transferable(result) {
  const transfer = [];
  for (const mesh of result.meshes) {
    for (const attribute of Object.values(mesh.attributes)) {
      attribute.array = Float32Array.from(attribute.array);
      transfer.push(attribute.array.buffer);
    }
    mesh.index.array = Uint32Array.from(mesh.index.array);
    transfer.push(mesh.index.array.buffer);
  }
  return transfer;
}

self.onmessage = async ({ data }) => {
  try {
    const reader = await loadOcct(data.script, data.wasm);
    const result = reader[data.method](new Uint8Array(data.buffer), null);
    const transfer = result.success ? transferable(result) : [];
    self.postMessage({ id: data.id, result }, transfer);
  } catch (error) {
    self.postMessage({ id: data.id, error: error.message });
  }
};
