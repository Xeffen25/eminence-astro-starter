// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://eminence-astro-starter.xeffen25.com",
	adapter: cloudflare(),
});
