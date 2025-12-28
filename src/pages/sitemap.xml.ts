import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
	const forms = await getCollection("forms");
	const baseUrl = "https://m-migration.com";

	const urls = [
		{
			loc: baseUrl,
			lastmod: new Date().toISOString(),
			changefreq: "weekly",
			priority: "1.0",
		},
		...forms.map((form: any) => ({
			loc: `${baseUrl}/formularios/${form.slug}`,
			lastmod: new Date().toISOString(),
			changefreq: "monthly",
			priority: "0.8",
		})),
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		({ loc, lastmod, changefreq, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
	)
	.join("\n")}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};
