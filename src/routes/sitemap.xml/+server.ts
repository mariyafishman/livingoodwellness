import { site } from '#lib/config/site.ts';

export const prerender = true;

const paths = ['/', '/services', '/about', '/book', '/contact'];

export function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
	.map(
		(path) => `  <url>
    <loc>${site.url}${path === '/' ? '' : path}</loc>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
