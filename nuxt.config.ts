// https://nuxt.com/docs/api/configuration/nuxt-config
import { unoConfig } from "./uno.config"
import { googleConfig } from "./google-fonts.config"

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/google-fonts'
  ],
  app: {
    head: {
      link: [
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "icon", href: "/favicon-16x16.png" },
        { rel: "icon", href: "/favicon-32x32.png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ]
    }
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
  ...googleConfig
})
