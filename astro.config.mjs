// @ts-check
import { defineConfig } from "astro/config";

import eminence from "eminence-astro-suite/integration";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://eminence-astro-starter.xeffen25.com",
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	adapter: cloudflare(),
	output: "server",
	integrations: [
		eminence({
			sitemap: false,
		}),
	],
});
