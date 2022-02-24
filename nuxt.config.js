import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#0073e6",
  },
  router: {
    base: '/docs',
  },
  head: {
    link: [{ rel: "icon", type: "image/x-icon", href: "/docs/favicon.ico" }],
  },
  i18n: {
    locales: () => [
      {
        code: "fr",
        iso: "fr-FR",
        file: "fr-FR.js",
        name: "Français",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
    ],
    defaultLocale: "en",
  },
});
