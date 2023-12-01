export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SocialMediaFE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/header.scss',
    '@/assets/scss/banner.scss',
    '@/assets/css/header_color.css',
    'vue-select/dist/vue-select.css',
    '@/assets/scss/slickcarusel.scss',
    '@/assets/scss/services.scss',
    '@/assets/scss/buyservices.scss',
    '@/assets/scss/freetrail.scss',
    '@/assets/scss/advantages.scss',
    '@/assets/scss/faq.scss',
    '@/assets/scss/reviews.scss',
    '@/assets/scss/buyinstagramlikes.scss',
    '@/assets/scss/contact.scss',
    '@/assets/scss/loginform.scss',
    '@/assets/scss/footer.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-select', mode: 'client' },
    '@/plugins/vuesax.js',
    '@/plugins/mixins.js',
    "~/plugins/vee-validate.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  router: {
    middleware: "auth_controller",
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'viewservice',
        path: '/service/:param1/:param2/:param3/:param4:/param5/:param6',
        component: resolve(__dirname, 'pages/services/_buyinstagramlikes.vue'),
      })
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['lodash' , 'vee-validate/dist/rules'],
    
  },
}
