import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://romariojs94.github.io',
	base: '/social-links-profile',
  integrations: [
		tailwind({
			nesting: true,
		})
	]
});