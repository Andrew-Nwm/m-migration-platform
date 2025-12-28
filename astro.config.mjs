// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// URL del backend API - cambiar en producción
const API_URL = process.env.PUBLIC_API_URL || 'https://sharepointforms-cvbsdmd0b2g6g6hv.canadacentral-01.azurewebsites.net';

// https://astro.build/config
export default defineConfig({
	site: 'https://m-migration.com',
	output: 'static',
	integrations: [
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		define: {
			'import.meta.env.PUBLIC_API_URL': JSON.stringify(API_URL),
		},
	},
});
