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
	output: "server",
	site: "https://m-migration.com",

	vite: {
		plugins: [tailwindcss()],
		define: {
			'import.meta.env.PUBLIC_API_URL': JSON.stringify(API_URL),
		},
	},

	env: {
		schema: {
			SHAREPOINT_TENANT_ID: envField.string({
				context: "server",
				access: "secret",
			}),
			SHAREPOINT_CLIENT_ID: envField.string({
				context: "server",
				access: "secret",
			}),
			SHAREPOINT_CLIENT_SECRET: envField.string({
				context: "server",
				access: "secret",
			}),
			SHAREPOINT_SITE_ID: envField.string({
				context: "server",
				access: "secret",
			}),
			SHAREPOINT_DRIVE_ID: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
		},
	},
});
