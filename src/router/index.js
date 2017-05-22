import Vue from 'vue'
import Router from 'vue-router'
import {LoadingPlugin} from 'vux'
// import auth from '@/utils/auth'

Vue.use(LoadingPlugin)
// 构造路由器
const router = new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: resolve => require(['../components/home/home_page.vue'], resolve),
      meta: {
        requiresAuth: false
      }
    }, {
      path: '/login',
      name: '微信登录',
      component: resolve => require(['../components/noauth/noauth.vue'], resolve),
      meta: {
        requiresAuth: false
      }
    }, {
      path: '/home/home',
      name: 'home',
      components: {
        'insidePage': resolve => require(['../components/home/subpage/homeList.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/home/subpage',
      name: 'homeList',
      components: {
        'insidePage': resolve => require(['../components/home/subpage/homeList.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/find',
      name: '发现',
      components: {
        'insidePage': resolve => require(['../components/find/find_page.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/ranking',
      name: '排行',
      components: {
        'insidePage': resolve => require(['../components/ranking/ranking_page.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/mine',
      name: '我的',
      components: {
        'insidePage': resolve => require(['../components/mine/mine_page.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!auth.loggedIn()) {
//       next({
//         path: 'login',
//         query: {redirect: to.fullPath}
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
// export default new Router({
//   base: '/',
//   routes
// })
