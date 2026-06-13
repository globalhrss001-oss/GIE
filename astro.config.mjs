import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/** GitHub Pages uses `/GIE/`; Cloudflare Pages uses `/` (set via npm run build:cloudflare). */
const isCloudflare =
  process.env.ASTRO_DEPLOY === 'cloudflare' ||
  process.env.CF_PAGES === '1' ||
  Boolean(process.env.CF_PAGES_URL);

const site = isCloudflare
  ? process.env.CF_PAGES_URL || 'https://gie-48i.pages.dev'
  : 'https://globalhrss001-oss.github.io/GIE/';

const base = isCloudflare ? '/' : '/GIE/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
