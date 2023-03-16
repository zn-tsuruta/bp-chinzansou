import { defineConfig } from 'astro/config';
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  base: '/chinzansou',
  outDir: './dist/chinzansou',
  integrations: [image()],
  //server:{ port:88, host: '192.168.193.87' }, // wifi
  server:{ port:88, host: '192.168.22.87' } // 有線
});