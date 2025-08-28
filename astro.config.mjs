// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import compression from 'vite-plugin-compression';
// https://astro.build/config
export default defineConfig({
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
  }
});