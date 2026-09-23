// Barranco site (Astro). SITE_URL and BASE_PATH come from the deploy workflow:
//   today:           SITE_URL=https://barranco-life.github.io  BASE_PATH=/Barranco
//   after the move:  SITE_URL=https://barranco.life            BASE_PATH=/   (+ public/CNAME)
// Spanish lives at the root and English under /en/ (prefixDefaultLocale: false), so
// /encuentros/ stays where the printed QR codes point.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://barranco-life.github.io',
  base: process.env.BASE_PATH ?? '/Barranco',
  trailingSlash: 'always',
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
