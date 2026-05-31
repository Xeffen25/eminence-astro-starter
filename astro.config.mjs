// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
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
    svelte(),
  ],

  vite: {
    plugins: [
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
        strategy: ["url", "baseLocale"],
        emitGitIgnore: false,
        emitPrettierIgnore: false,
      }),
    ],
  },
});
