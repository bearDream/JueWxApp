// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from './vuex/store'
import router from './router/index'
import { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
// 测试接口mock
import dishMock from './utils/mock/dishMock'
import userMock from './utils/mock/userMock'
Vue.use(dishMock)
Vue.use(userMock)

Vue.use(VueRouter, axios)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
