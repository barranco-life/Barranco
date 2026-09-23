// Both languages, all the time (owner, 2026-09-23): every Spanish page under src/pages must have
// an English twin under src/pages/en, and vice versa. Pages that mark themselves with
// "// i18n: redirect" or "// i18n: bilingual" are exempt. Runs before every build.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = 'src/pages';
const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.astro') ? [p] : [];
});
const exempt = (p) => /\/\/ i18n: (redirect|bilingual)/.test(readFileSync(p, 'utf8'));
const all = walk(root).filter((p) => !exempt(p)).map((p) => relative(root, p));
const es = new Set(all.filter((p) => !p.startsWith('en/')));
const en = new Set(all.filter((p) => p.startsWith('en/')).map((p) => p.slice(3)));
const missing = [...[...es].filter((p) => !en.has(p)).map((p) => `en/${p}`), ...[...en].filter((p) => !es.has(p))];
if (missing.length) {
  console.error(`i18n check FAILED: missing counterpart for\n  ${missing.join('\n  ')}`);
  process.exit(1);
}
console.log(`i18n check OK: ${es.size} pages in both languages`);
