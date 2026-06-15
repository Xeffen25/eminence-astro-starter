// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import { paraglideVitePlugin } from "@inlang/paraglide-js";

import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import eminencesuite from "eminence-astro-suite";

// https://astro.build/config
export default defineConfig({
  site: "https://eminence-astro-starter.xeffen25.com",
  adapter: cloudflare(),
  output: "server",

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--astro-font-inter",
      // Inter on Google Fonts supports the full range from 100 to 900.
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      styles: ["normal", "italic"],
    },
  ],

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
      tailwindcss(),
    ],
  },
});
