// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "logose.svg" }],
    },
  },
  plugins: ["~/plugins/spline.js"],
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "assets/svg")],
      }),
    ],
  },
  css: ["@/assets/css/index.css", "@/assets/css/tailwind.css","@/assets/css/font.css"],

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],
});
