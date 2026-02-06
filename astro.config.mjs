import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yreh.studio',
  output: 'static',
  integrations: [sitemap()]
});
