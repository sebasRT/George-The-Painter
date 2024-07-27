import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.george-the-painter.com',
  integrations: [tailwind(), react(), icon({
    iconDir: "src/assets/icons"
  })],
  output: "hybrid",
  adapter: vercel()
});