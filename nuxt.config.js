export default {
  /**
   * Headers of the page
   * See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.APP_NAME || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.APP_DESCRIPTION || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios',
    '~/plugins/directives',
    '~/plugins/mixins',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/generics',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {
      fix: true,
    }],

    // Doc: https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    // Doc: https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    // Doc: https://github.com/nuxt-community/fontawesome-module
    ['@nuxtjs/fontawesome', {
      icons: {
        regular: true,
        solid: true,
        brands: true,
      },
    }],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

    // Doc: https://github.com/acidjazz/tv-toast
    'nuxt-tv-toast',

    // Doc: https://dev.auth.nuxtjs.org/
    '@nuxtjs/auth',

    // Doc: https://i18n.nuxtjs.org/
    ['nuxt-i18n', {
      strategy: 'no_prefix',
      baseUrl: process.env.APP_URL,
      defaultLocale: process.env.DEFAULT_LOCALE || 'nl',
      fallbackLocale: process.env.FALLBACK_LOCALE || 'en',
      lazy: true,
      langDir: 'lang/',
      locales: [
        {
          code: 'en',
          file: 'en.js',
        },
      ],
    }],
  ],

  axios: {
    baseURL: 'http://project-x-be.test/',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'api/login', method: 'post', propertyName: 'data.access_token' },
          logout: { url: 'api/logout', method: 'delete' },
          user: false,
        },
        tokeyType: '',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build#extractcss
    extractCSS: true,

    /**
   * Server Configuration
   */
    server: {
      port: process.env.SERVER_PORT,
      host: process.env.SERVER_HOST || 'localhost',
    },

    /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */

  },
};
