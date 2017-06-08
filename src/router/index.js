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
      path: '/home/search',
      name: 'search',
      components: {
        'insidePage': resolve => require(['../components/home/subpage/search.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/home/takepage',
      name: 'takepage',
      components: {
        'insidePage': resolve => require(['../components/home/subpage/takepage.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/home/subpage',
      name: 'nutritionDish',
      components: {
        'insidePage': resolve => require(['../components/home/subpage/nutrition.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/home/subpage/random/',
      name: 'random',
      components: {
        'insidePage': resolve => require(['../components/home/subpage/random.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/home/subpage/NutritionDetail',
      name: 'NutritionDetail',
      components: {
        'insidePage': resolve => require(['../components/home/subpage/NutritionDetail.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/home/subpage/Rankingdetails:dishId',
      name: 'Rankingdetails',
      components: {
        'insidePage': resolve => require(['../components/home/subpage/Rankingdetails.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/home/business',
      name: 'business',
      components: {
        'insidePage': resolve => require(['../components/home/subpage/business.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/home/random',
      name: 'random',
      components: {
        'insidePage': resolve => require(['../components/home/subpage/random.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/home/subpage/business',
      name: 'business',
      components: {
        'insidePage': resolve => require(['../components/home/subpage/business.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/home/article',
      name: 'article',
      components: {
        'insidePage': resolve => require(['../components/home/subpage/article.vue'], resolve)
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
      path: '/find/dd:dishId',
      name: 'dishesDetail',
      components: {
        'insidePage': resolve => require(['../components/find/subpage/dishesDetail.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/food',
      name: '食话食说',
      components: {
        'insidePage': resolve => require(['../components/food/food_page.vue'], resolve)
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
    }, {
      path: '/subpage/editor',
      name: 'editor',
      components: {
        'insidePage': resolve => require(['../components/mine/subpage/editor.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/subpage/site',
      name: 'site',
      components: {
        'insidePage': resolve => require(['../components/mine/subpage/site.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/subpage/post_article',
      name: 'site',
      components: {
        'insidePage': resolve => require(['../components/mine/subpage/post_article.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/subpage/check',
      name: 'check',
      components: {
        'insidePage': resolve => require(['../components/mine/subpage/check.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/subpage/collect',
      name: 'collect',
      components: {
        'insidePage': resolve => require(['../components/mine/subpage/collect.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/subpage/collect/comments:articleId',
      name: 'comments',
      components: {
        'insidePage': resolve => require(['../components/mine/subpage/comments.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/subpage/vip',
      name: 'vip',
      components: {
        'insidePage': resolve => require(['../components/mine/subpage/vip.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/subpage/release',
      name: 'release',
      components: {
        'insidePage': resolve => require(['../components/mine/subpage/release.vue'], resolve)
      },
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/subpage/about',
      name: 'about',
      components: {
        'insidePage': resolve => require(['../components/mine/subpage/about.vue'], resolve)
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
