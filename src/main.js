// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import store from './vuex/store'
import router from './router'
import { sync } from 'vuex-router-sync'
sync(store, router)

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  ...App
});

export { app, router, store }
