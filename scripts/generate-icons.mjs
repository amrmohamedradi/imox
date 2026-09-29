// Generates the raster app icons (PNG) from the standalone iMOX logo mark.
// Run with: node scripts/generate-icons.mjs
// Source of truth is public/icon-mark.svg (the brand mark on its gradient tile).
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const publicDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const src = join(publicDir, "icon-mark.svg");

// Home-screen / manifest icons: zoom-crop a touch so the tile bleeds to the
// edges (no transparent corners) since platforms apply their own rounded mask.
const fullBleed = [
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];
for (const { name, size } of fullBleed) {
  const big = Math.round(size * 1.08);
  const off = Math.round((big - size) / 2);
  await sharp(src)
    .resize(big, big, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extract({ left: off, top: off, width: size, height: size })
    .png()
    .toFile(join(publicDir, name));
  console.log("wrote", name, `${size}x${size}`);
}

// Standalone browser-tab favicon: keep the rounded tile as-is (transparent
// corners are fine on a tab).
await sharp(src).resize(32, 32).png().toFile(join(publicDir, "favicon-32.png"));
console.log("wrote favicon-32.png 32x32");
