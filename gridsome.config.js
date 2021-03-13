// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Zebnits',
  pathPrefix: process.env.PATH_PREFIX ? process.env.PATH_PREFIX : '/',
  outputDir: "public",
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'uk-ua',
          'ru-ru'
        ],
        pathAliases: { // path segment alias for each locales
          'uk-ua': 'ua',
          'ru-ru': 'ru'
        },
        fallbackLocale: 'ru-ru', // fallback language
        defaultLocale: 'ru-ru', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
        }
      }
    }
  ],
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
}
