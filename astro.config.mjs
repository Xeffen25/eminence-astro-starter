// @ts-check
import { defineConfig, envField } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://eminence-astro-starter.xeffen25.com",
	security: {
		checkOrigin: true,
		csp: true,
	},
	adapter: cloudflare(),
	output: "server",
	env: {
		schema: {
			CLOUDFLARE_API_KEY: envField.string({
				context: "server",
				access: "secret",
				optional: false,
			}),
			SITE_URL: envField.string({
				context: "server",
				access: "public",
				optional: false,
				url: true,
			}),
		},
	},
});
