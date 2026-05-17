// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import eminencesuite from "eminence-astro-suite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://eminence-astro-starter.xeffen25.com",
  adapter: cloudflare(),
  output: "server",

  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  integrations: [
    eminencesuite({
      icons: {
        source: "src/assets/icon.svg",
      },
    }),
    svelte(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
