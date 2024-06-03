import { unoConfig } from "./assets/config/uno.config";
import { googleConfig } from "./assets/config//google-fonts.config";
import { particlesConfig } from "./assets/config/particles.config";

export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-particles",
    "@nuxt/image",
  ],
  app: {
    head: {
      link: [
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "icon", href: "/favicon-16x16.png", sizes: "16x16" },
        { rel: "icon", href: "/favicon-32x32.png", sizes: "32x32" },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#FFFAFF" },
      ],
      meta: [
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "default",
        },
        { name: "theme-color", content: "#FFFAFF" },
        { name: "msapplication-TileColor", content: "#FFFAFF"},
        { name: "apple-mobile-web-app-capable", content: "yes" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  ...unoConfig,
  ...googleConfig,
  ...particlesConfig,
});
