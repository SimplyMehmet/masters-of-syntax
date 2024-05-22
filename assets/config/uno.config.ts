import type { UnocssNuxtOptions } from "@unocss/nuxt";

export const unoConfig: Record<string, UnocssNuxtOptions> = {
  unocss: {
    attributify: true,
    icons: true,
    components: false,
    wind: true,
    theme: {
      colors: {
        "c-white": "#FFFAFF",
        "c-black": "#050401",
        "c-gray": "#787888",
        "c-purple": "#39304A",
        "c-dark-blue": "#202030",
        "c-beige": "#7D7461",
      },
      fontFamily: {
        "pt-serif": "PT Serif",
        "league-gothic": "League Gothic",
      },
    },
    shortcuts: {
      container: "px-4 mx-auto",
    },
  },
};
