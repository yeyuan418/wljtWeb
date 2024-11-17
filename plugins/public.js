import Vue from 'vue'

Vue.prototype.$Nuxt_process = process;
Vue.prototype.$Nuxt_process.client = process.client;
Vue.prototype.$Nuxt_process.server = process.server;

Vue.prototype.$CONFIGInitFun = function () {
  console.log('$Nuxt_process==', Vue.prototype.$Nuxt_process);
  console.log('$Nuxt_process是否来自客户端渲染client==', Vue.prototype.$Nuxt_process.client);
  console.log('$Nuxt_process是否来自服务端渲染server==', Vue.prototype.$Nuxt_process.server);
  if (Vue.prototype.$Nuxt_process.client == true) {
    console.log('来自客户端渲染window==', window);
    /*//////////////////////////////
      这里你可以做一些拿到 window 对象后做的事
    */
  }
};