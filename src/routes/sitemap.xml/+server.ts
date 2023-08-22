/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders }) {
	setHeaders({
		'Content-Type': 'application/xml'
	});
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://lucas-attali.me</loc>
      </url>
    </urlset>`;
	return new Response(sitemap);
}