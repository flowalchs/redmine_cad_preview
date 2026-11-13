// Indicator of the world axes (X red, Y green, Z blue) in the lower right
// corner of 3D views. It follows the orientation of the camera, not the model.

import { Vector3 } from 'three';

// World directions expressed in camera coordinates: independent of the model,
// its origin, dimensions and camera target (including Z-up CAD formats).
// The axes pointing away from the camera come first, so that they are drawn
// below the others.
export function worldAxes(camera) {
  camera.updateMatrixWorld();
  const rotation = camera.getWorldQuaternion(camera.quaternion.clone()).invert();
  return [
    { label: 'X', color: '#c62828', direction: new Vector3(1, 0, 0) },
    { label: 'Y', color: '#2e7d32', direction: new Vector3(0, 1, 0) },
    { label: 'Z', color: '#1565c0', direction: new Vector3(0, 0, 1) }
  ].map((axis) => ({ ...axis, direction: axis.direction.applyQuaternion(rotation) }))
    .sort((a, b) => a.direction.z - b.direction.z);
}

// Draws the indicator in the lower right corner of the context. Images are
// cropped to the model first and the indicator is drawn afterwards, so that
// it does not keep an empty margin of the size of the view.
export function drawWorldAxes(context, camera, width, height, pixelRatio = 1) {
  const size = Math.min(88 * pixelRatio, width, height);
  if (size < 24) return;
  const radius = size * 0.29;
  const x = width - size / 2;
  const y = height - size / 2;
  const lineWidth = Math.max(1, size / 44);

  context.save();
  context.lineCap = 'round';
  context.font = `bold ${size * 0.15}px sans-serif`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  for (const axis of worldAxes(camera)) {
    const dx = axis.direction.x * radius;
    const dy = -axis.direction.y * radius;
    context.strokeStyle = axis.color;
    context.fillStyle = axis.color;
    context.lineWidth = lineWidth;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + dx, y + dy);
    context.stroke();
    // The round tip is still visible when the axis points towards the camera
    context.beginPath();
    context.arc(x + dx, y + dy, size * 0.035, 0, 2 * Math.PI);
    context.fill();

    const labelX = x + axis.direction.x * size * 0.38;
    const labelY = y - axis.direction.y * size * 0.38;
    context.strokeStyle = '#ffffff';
    context.lineWidth = Math.max(2, size / 22);
    context.strokeText(axis.label, labelX, labelY);
    context.fillText(axis.label, labelX, labelY);
  }
  context.restore();
}
