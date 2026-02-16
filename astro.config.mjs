// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import compression from 'vite-plugin-compression';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter:vercel(),
  site:'https://danielcarce.com',

  vite: {
    plugins: [tailwindcss(), compression({
        algorithm: "gzip",
        ext: ".gz",
      }),
      // Brotli
      compression({
        algorithm: "brotliCompress",
        ext: ".br",
      }) ]
  },

  integrations: [sitemap({
    entryLimit: 10000,
  })]
});