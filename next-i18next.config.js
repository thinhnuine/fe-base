/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
