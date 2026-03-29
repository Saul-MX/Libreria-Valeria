// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Saul-MX.github.io',
  base: '/Libreria-Valeria/',
  vite: {
    plugins: [tailwindcss()],
  },
});