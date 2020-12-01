export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  //middleware
  router: {
    middleware: ['auth', 'handle-login-route'],
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
        integrity:
          'sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z',
        crossorigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        integrity:
          'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN',
        crossorigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.datatables.net/1.10.21/css/jquery.dataTables.css',
      },
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
        integrity:
          'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj',
        crossorigin: 'anonymous',
      },
      {
        src:
          'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
        integrity:
          'sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN',
        crossorigin: 'anonymous',
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
        integrity:
          'sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV',
        crossorigin: 'anonymous',
      },
      {
        type: 'text/javascript',
        charset: 'utf8',
        src: 'https://cdn.datatables.net/1.10.21/js/jquery.dataTables.js',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/datepicker', ssr: false },
    { src: '~/plugins/calendar', ssr: false },
    {
      src: '~/plugins/sidebar',
      ssr: false,
    },
  ],

  env: {
    BASE_URL:
      process.env.NODE_ENV == 'development'
        ? 'http://localhost:3000/api'
        : 'https://meteortest-283609.el.r.appspot.com/api',
    PROD_URL: 'https://meteortest-283609.el.r.appspot.com',
    POOL_ID: 'ap-south-1_m5wczZFJo',
    AUTH: 'https://l8yeijc0pc.execute-api.ap-south-1.amazonaws.com/v1/auth',
    ADMIN_AUTH:
      'https://l8yeijc0pc.execute-api.ap-south-1.amazonaws.com/v1/admin-auth',
  },

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  serverMiddleware: ['~/api/index.js'],
  build: {
    extend(config, ctx) {
      config.node = {
        $: true,
        jQuery: true,
        jquery: true,
      }
    },
  },
}
