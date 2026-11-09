// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Sitio 100 % estático: `astro build` deja todo en dist/ y GitHub Pages lo sirve.
export default defineConfig({
  site: "https://juanipis.xyz",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", es: "es" } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
