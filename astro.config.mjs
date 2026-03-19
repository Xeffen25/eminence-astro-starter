// @ts-check
import { defineConfig } from "astro/config";

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
});
