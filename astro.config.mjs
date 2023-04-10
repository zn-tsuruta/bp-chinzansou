import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  //base: '/chinzansou',
  outDir: './dist',
  integrations: [image(),relativeLinks()],
 // server:{ port:88, host: '192.168.193.87' }, // wifi
  server:{ port:88, host: '192.168.22.87' } // 有線
});