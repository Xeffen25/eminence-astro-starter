// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import eminencesuite from "eminence-astro-suite";

// https://astro.build/config
export default defineConfig({
	site: "https://eminence-astro-starter.xeffen25.com",
	adapter: cloudflare(),
	output: "server",
	integrations: [
		eminencesuite({
			icons: {
				source: "src/assets/icon.svg",
			},
		}),
	],
});
