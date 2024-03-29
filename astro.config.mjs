import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/utils/readingTime.mjs';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless"
import prefetch from "@astrojs/prefetch";
import tigris from "@tigrisdata/astro";

export default defineConfig({
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dark-plus',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ['ts', 'js', 'rs'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      drafts: true,
    },
    remarkPlugins: [remarkReadingTime],
    syntaxHighlight: 'shiki',
  },
  integrations: [tailwind(), mdx({ drafts: true }), sitemap(), prefetch(), tigris()],
  site: "https://www.paulvall.dev/",
  output: 'server',
  adapter: vercel(),
});