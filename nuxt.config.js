export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Eatagram',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~bootstrap/scss/_functions.scss',
    // '~bootstrap/scss/_variables.scss',
    // 'bootstrap/scss/_mixins.scss',
    // 'bootstrap-vue/src/_variables.scss',
    '@/assets/scss/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

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
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  bootstrapVue: {
    bootstrapCSS: false,
    // bootstrapVueCSS: false,
    components: [
      'BContainer',
      'BDropdown',
      'BDropdownItem',
      'BListGroup',
      'BListGroupItem',
      'BFormGroup',
      'BFormInput',
      'BInputGroup',
      'BInputGroupAppend',
      'BInputGroupText',
      'BCard',
      'BImg',
      'BImgLazy',
      'BModal',
      'BButton',
      'BNavbar',
      'BNavbarNav',
      'BSpinner',
      'BIcon',
      'BIconSearch',
      'BIconStarFill',
      'BIconGeoAltFill',
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-bootstrap-typeahead'],
  },
}
