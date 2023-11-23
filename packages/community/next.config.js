const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  defaultShowCopyCode: true,
});

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
   i18n: {
    locales: ['en-US', 'uk-UA', 'ru-RU'],
    defaultLocale: 'en-US'
  },
};
