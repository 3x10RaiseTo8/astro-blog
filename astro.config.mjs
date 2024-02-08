import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog-astro4.netlify.app/',
  integrations: [preact()]
});