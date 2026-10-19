// Re-encode the site's JPEGs with mozjpeg, and write AVIF copies. Same names and pixel
// sizes, so no URL changes; a file is rewritten only when that saves at least 15%.
// Run by hand after adding photos: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dirs = ['public/assets/images/barranco', 'public/assets/images/encuentros'];
for (const dir of dirs) {
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.jpg'))) {
    const p = join(dir, f);
    const before = readFileSync(p);
    const after = await sharp(before).jpeg({ quality: 78, mozjpeg: true, progressive: true }).toBuffer();
    if (after.length < before.length * 0.85) {
      writeFileSync(p, after);
      console.log(`${p}: ${Math.round(before.length / 1024)} -> ${Math.round(after.length / 1024)} KiB`);
    }
  }
}

// AVIF copies of the venue photos, used by src/components/Photo.astro. Rewritten when missing or
// older than the JPEG.
const photos = 'public/assets/images/barranco';
for (const f of readdirSync(photos).filter((f) => f.endsWith('.jpg') && !f.includes('-og-'))) {
  const jpg = join(photos, f);
  const avif = jpg.replace(/\.jpg$/, '.avif');
  if (existsSync(avif) && statSync(avif).mtimeMs >= statSync(jpg).mtimeMs) continue;
  await sharp(jpg).avif({ quality: 50 }).toFile(avif);
  console.log(`${avif}: written`);
}
