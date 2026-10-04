// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  // absolute URLs for canonical and og:* tags (Astro.site)
  site: 'https://realhumandevs.com',
  // Pages serves /work/foo/ and 308s /work/foo to it, so build and link the
  // slashed form and skip the redirect
  trailingSlash: 'always',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
