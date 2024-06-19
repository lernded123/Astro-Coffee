import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4322/',
  output: "server",
  adapter: netlify()
});