// Barranco site (Astro). SITE_URL and BASE_PATH come from the deploy workflow:
//   today:           SITE_URL=https://barranco-life.github.io  BASE_PATH=/Barranco
//   after the move:  SITE_URL=https://barranco.life            BASE_PATH=/   (+ public/CNAME)
// Spanish lives at the root and English under /en/ (prefixDefaultLocale: false), so
// /encuentros/ stays where the printed QR codes point.
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://barranco-life.github.io',
  base: process.env.BASE_PATH ?? '/Barranco',
  trailingSlash: 'always',
  output: 'static',
  // The stylesheet is small (about 3 KB compressed): inline it so the first paint needs no extra request.
  build: { inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  // Same font files as before, through Astro's fonts API: it writes the @font-face rules, a
  // metric-matched fallback for each family (so text does not jump when the font arrives) and
  // the preload links Base.astro asks for.
  fonts: [
    {
      provider: fontProviders.local(), name: 'Brandon', cssVariable: '--font-brandon', fallbacks: ['sans-serif'],
      options: { variants: [
        { src: ['./src/fonts/Brandon_reg.otf'], weight: 400, style: 'normal' },
        { src: ['./src/fonts/Brandon_reg_it.otf'], weight: 400, style: 'italic' },
        { src: ['./src/fonts/Brandon_med.otf'], weight: 500, style: 'normal' },
        { src: ['./src/fonts/Brandon_bld.otf'], weight: 700, style: 'normal' },
        { src: ['./src/fonts/Brandon_blk.otf'], weight: 900, style: 'normal' },
      ] },
    },
    {
      provider: fontProviders.local(), name: 'Monument', cssVariable: '--font-monument', fallbacks: ['sans-serif'],
      options: { variants: [
        { src: ['./src/fonts/MonumentExtended-Regular.otf'], weight: 400, style: 'normal' },
        { src: ['./src/fonts/MonumentExtended-Ultrabold.otf'], weight: 800, style: 'normal' },
      ] },
    },
    {
      provider: fontProviders.local(), name: 'Whyte Inktrap', cssVariable: '--font-whyte', fallbacks: ['sans-serif'],
      options: { variants: [{ src: ['./src/fonts/WhyteInktrap-Medium.otf'], weight: 500, style: 'normal' }] },
    },
  ],
  integrations: [
    // The old English Encuentros URL is only a redirect, so it stays out of the sitemap.
    sitemap({ filter: (page) => !/\/encuentros\/en\/$/.test(page) }),
  ],
});
