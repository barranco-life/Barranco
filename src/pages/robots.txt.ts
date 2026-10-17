// robots.txt follows SITE_URL and BASE_PATH, so it stays right after the move to barranco.life.
// While the site lives under /Barranco/, crawlers read the github.io root instead; the file is
// here for the domain move and for anyone who looks.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/?$/, '/')}sitemap-index.xml`, site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
