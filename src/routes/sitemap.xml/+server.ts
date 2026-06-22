import type { RequestHandler } from './$types';

export const prerender = true;

const base = 'https://lucas-attali.me';
const paths = ['', 'a-propos', 'parcours', 'realisations'];

function entry(fr: string, en: string): string {
  const alts = [
    `    <xhtml:link rel="alternate" hreflang="fr" href="${fr}"/>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${fr}"/>`,
  ].join('\n');
  return [
    `  <url>\n    <loc>${fr}</loc>\n${alts}\n  </url>`,
    `  <url>\n    <loc>${en}</loc>\n${alts}\n  </url>`,
  ].join('\n');
}

export const GET: RequestHandler = () => {
  const entries = paths
    .map((p) => {
      const fr = p ? `${base}/${p}` : `${base}/`;
      const en = p ? `${base}/en/${p}` : `${base}/en`;
      return entry(fr, en);
    })
    .join('\n');

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    entries + '\n' +
    `</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
