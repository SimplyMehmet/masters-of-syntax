// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "manifest", href: "/favicon/site.webmanifest" },
        { rel: "icon", href: "/favicon/favicon-16x16.png" },
        { rel: "icon", href: "/favicon/favicon-32x32.png" },
        { rel: "apple-touch-icon", href: "/favicon/apple-touch-icon.png" },
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
})
