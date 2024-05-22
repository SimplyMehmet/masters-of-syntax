import { unoConfig } from "./assets/config/uno.config";
import { googleConfig } from "./assets/config//google-fonts.config";
import { particlesConfig } from "./assets/config/particles.config";

export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxtjs/google-fonts", "nuxt-particles"],
  app: {
    head: {
      link: [
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "icon", href: "/favicon-16x16.png" },
        { rel: "icon", href: "/favicon-32x32.png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
      meta: [
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "default",
        },
        { name: "theme-color", content: "#FFFAFF" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
      ],
    },
  },
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
