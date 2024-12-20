// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,

  // ========== START:: APP CONFIGURATIONS ========== //
  app: {
    // Start:: Head Configurations //
    head: {
      title: "عيادات الأهرام الدولية",
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }],

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "robots",
          content: `index,follow`,
        },
        {
          hid: "description",
          name: "description",
          content: "عيادات الأهرام الدولية",
        },
      ],

      style: [],

      noscript: [],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@nuxt/image",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en.json",
            dir: "ltr",
          },
          {
            name: "عربي ",
            code: "ar",
            iso: "ar-AR",
            file: "ar.json",
            dir: "rtl",
          },
        ],
        lazy: true,
        langDir: "locales/",
        defaultLocale: "ar",
        precompile: {
          strictMessage: false,
        },
        detectBrowserLanguage: false,
        vueI18nLoader: true,
      },
    ],
    
    "nuxt-aos",
  ],

  tailwindcss: {
    cssPath: "~/assets/style/tailwind.scss",
  },

  // ========== START:: NUXT APP PLUGINS CONFIGURATIONS ========== //

  // ========== END:: NUXT APP PLUGINS CONFIGURATIONS ========== //
  // plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/style/main.scss";`,
        },
      },
    },
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": "postcss-nesting",
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // dev: true,
  devServer: {
    // https: false,

    host: "0.0.0.0",
    port: 4111,
    // url: "http://0.0.0.0:3005",
  },
  build: {
    transpile: ["vue-toastification"],
  },
  experimental: {
    inlineSSRStyles: false,
  },
  compatibilityDate: "2024-08-11",
});
