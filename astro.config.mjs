// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
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
        "favicon.ico": {
          sizes: [16, 32, 48],
          tag: { rel: "icon", sizes: "32x32" },
        },
      },
    }),
    svelte(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
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
