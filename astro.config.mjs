import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Saul-MX.github.io',
  base: '/Libreria-Valeria',
  vite: {
    plugins: [tailwindcss()],
  },
});