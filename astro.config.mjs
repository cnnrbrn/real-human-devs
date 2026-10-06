// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // absolute URLs for canonical and og:* tags (Astro.site)
  site: "https://realhumandevs.com",
  // Pages serves /work/foo/ and 308s /work/foo to it, so build and link the
  // slashed form and skip the redirect
  trailingSlash: "always",
  // the CSS is small, so put it in the page instead of a render-blocking
  // request (it was delaying the hero heading, the LCP element, on mobile)
  build: { inlineStylesheets: "always" },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
