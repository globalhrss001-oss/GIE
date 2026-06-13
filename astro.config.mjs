import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/** Cloudflare Pages serves from `/`; GitHub Pages uses the repo subpath `/GIE/`. */
const isCloudflarePages = process.env.CF_PAGES === '1';

const site = isCloudflarePages
  ? process.env.CF_PAGES_URL || 'https://gie-48i.pages.dev'
  : 'https://globalhrss001-oss.github.io/GIE/';

const base = isCloudflarePages ? '/' : '/GIE/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
