// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	output: 'server',

	vite: {
		plugins: [tailwindcss()],
	},

	env: {
		schema: {
			SHAREPOINT_TENANT_ID: envField.string({context: 'server', access:'secret' }),
			SHAREPOINT_CLIENT_ID: envField.string({context: 'server', access:'secret' }),
			SHAREPOINT_CLIENT_SECRET: envField.string({context: 'server', access:'secret' }),
			SHAREPOINT_SITE_ID: envField.string({context: 'server', access:'secret' }),
			SHAREPOINT_DRIVE_ID: envField.string({context: 'server', access:'secret', optional: true }),
		}
	}
});
