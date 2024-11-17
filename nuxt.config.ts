// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  runtimeConfig: {
    // 只在服务器端可用的私有键
    apiSecret: '123',
    // public中的键也可以在客户端使用
    public: {
      apiBase: '/api'
    }
  },
  plugins: [ 
    { src: '@/plugins/public' } 
  ],
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file).
    '@/src/assets/css/jquery.fullpage.min.css',
    '@/src/assets/css/css_whir.css',
  ],
  $development: {
    //
  }
})
