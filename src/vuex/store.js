import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import home from './modules/home'
import find from './modules/find'
import food from './modules/food'
import mine from './modules/mine'
import business from './modules/business'

import actions from './actions'
Vue.use(Vuex)
// 统一管理接口域名
let apiPublicDomain = '//chiprincess.cn/'
const state = {
  currentLang: 'zh', // 当前使用的语言 zh：简体中文 en:英文 后期需要1
  newMsgCount: 0, // 新消息数量
  currentPageName: '首页', // 用于在wx-header组件中显示当前页标题
  // backPageName: '', //用于在返回按钮出 显示前一页名字 已遗弃
  headerStatus: true, // 显示（true）/隐藏（false）wx-header组件
  tipsStatus: false, // 控制首页右上角菜单的显示(true)/隐藏(false)
  // 所有接口地址 后期需要
  apiUrl: {
    demo: apiPublicDomain + ''
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    home,
    find,
    food,
    mine,
    business
  }
})
