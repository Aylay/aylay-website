export const dynamic = "force-static"; // prérendu au build, servi en statique

const base = "https://lucas-attali.me";
const paths = ["", "a-propos", "parcours", "realisations", "projets/rally"];
const enOnly = ["en/projets/rally/write-up"];

function entry(fr: string, en: string): string {
  const alts = [
    `    <xhtml:link rel="alternate" hreflang="fr" href="${fr}"/>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${fr}"/>`,
  ].join("\n");
  return [
    `  <url>\n    <loc>${fr}</loc>\n${alts}\n  </url>`,
    `  <url>\n    <loc>${en}</loc>\n${alts}\n  </url>`,
  ].join("\n");
}

export function GET() {
  const localized = paths
    .map((p) => {
      const fr = p ? `${base}/${p}` : `${base}/`;
      const en = p ? `${base}/en/${p}` : `${base}/en`;
      return entry(fr, en);
    })
    .join("\n");

  const single = enOnly
    .map((p) => `  <url>\n    <loc>${base}/${p}</loc>\n  </url>`)
    .join("\n");

  const entries = [localized, single].join("\n");

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    entries +
    "\n</urlset>\n";

  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}