import theme from "@nuxt/content-theme-docs";

export default theme({
  publicRuntimeConfig: {
    projectApp: 'https://app.rootsocket.com',
    projectBlog: 'https://rootsocket.com/blog',
  },
  docs: {
    primaryColor: "#007fff",
  },
  router: {
    base: '/docs',
  },
  head: {
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  i18n: {
    vueI18nLoader: true,
    locales: () => [
      // {
      //   code: "es",
      //   iso: "es-ES",
      //   file: "es-ES.js",
      //   name: "Español",
      // },
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
    ],
    defaultLocale: "en"
  },
  build: {
    splitChunks: {
      layouts: false,
      pages: false,
      commons: false,
    }
  }
});
