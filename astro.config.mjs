import { defineConfig } from 'astro/config';
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  base: '/chinzansou',
  outDir: './dist/chinzansou',
  integrations: [image()]
});