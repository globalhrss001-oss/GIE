import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://antthein.github.io',
  base: '/GIE',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
