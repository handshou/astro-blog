import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: 'https://hansel.co',
    integrations: [mdx({})],
    output: "server",
    adapter: cloudflare()
});
