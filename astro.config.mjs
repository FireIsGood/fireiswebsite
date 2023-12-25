import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 1625
  },
  site: "https://main--unrivaled-daifuku-8bdb99.netlify.app/",
  integrations: [svelte()]
});