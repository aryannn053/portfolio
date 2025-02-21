import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import react from "@astrojs/react";
import astroExpressiveCode from "astro-expressive-code";
import { pluginFrames } from "astro-expressive-code";
import { pluginTextMarkers } from "astro-expressive-code";
// https://astro.build/config
export default defineConfig({
  site: "https://aryan.rweb.site",
  base: "/",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    astroExpressiveCode({
      themes: ["vitesse-black", "vitesse-light"],
      styleOverrides: {
        codeFontFamily: "Iosevka Nerd Font",
        codeFontSize: "16px",
        uiFontFamily: "Geist",
        uiFontSize: "15px",
        codeLineHeight: "1.75",
      },
      plugins: [pluginFrames(), pluginTextMarkers()],
    }),
    mdx(),
    react(),
    tailwind(),
  ],
  vite: {
    ssr: {
      noExternal: ["mafs"],
    },
  },
});
