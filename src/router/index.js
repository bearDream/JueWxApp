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
      component: resolve => require(['../components/jue/jue_page.vue'], resolve),
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
      path: '/business',
      name: '商家',
      components: {
        'default': resolve => require(['../components/business/business_page.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/business/business',
      name: 'business',
      components: {
        'insidePage': resolve => require(['../components/business/businessList.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/dish',
      name: '美食',
      components: {
        'insidePage': resolve => require(['../components/dish/dish_page.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/me',
      name: '个人中心',
      components: {
        'insidePage': resolve => require(['../components/me/me_page.vue'], resolve)
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
