<template>
  <div id="app">
    <div class="outter" :class="{'hideLeft':$route.path.split('/').length>2}">
    <!--通用头部-->
    <!--<header class="app-header">-->
      <!--<JueHead :pageName="pageName"></JueHead>-->
    <!--</header>-->
    <!--搜索框 只在“微信”和“通讯录”页面下显示-->
    <!--<search v-show="$route.path.indexOf('explore')===-1&&$route.path.indexOf('self')===-1"></search>-->
    <!--四个门面页 “微信” “通讯录” “发现” “我1”-->
    <section class="app-content">
      <keep-alive>
        <router-view name="default"></router-view>
      </keep-alive>
    </section>
      <!--底部导航 路由 -->
    <footer class="app-footer">
      <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
        <JueNav></JueNav>
      </transition>
    </footer>
  </div>
    <!--其他内页集合 有过渡效果-->
    <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
      <router-view name="insidePage"></router-view>
    </transition>
  </div>
</template>

<script>

import JueNav from './components/common/jue-nav'
import JueHead from './components/common/jue_header'
import JueHome from './components/jue/jue_page'
import axios from 'axios'
import consts from '@/utils/consts'

export default {
  name: 'app',
  data () {
    return {
      'pageName': '首页',
      'routerAnimate': false,
      'enterAnimate': '', // 页面进入动效
      'leaveAnimate': '' // 页面离开动效
    }
  },
  components: {
    JueNav,
    JueHead,
    JueHome
  },
  created () {
    console.info('created')
    console.info(this.$wechat)
    // 使用微信获取地理位置
    this.getLocation()
  },
  watch: {
    // 监听 $route 为店内页设置不同的过渡效果
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (toDepth === 2) {
        this.$store.commit('setPageName', to.name)
      }
      // 同一级页面无需设置过渡效果
      if (toDepth === fromDepth) {
        return
      }
      this.enterAnimate = toDepth > fromDepth ? 'animated fadeInRight' : 'animated fadeInLeft'
      this.leaveAnimate = toDepth > fromDepth ? 'animated fadeOutLeft' : 'animated fadeOutRight'
      // 从店面页进入店内页 需要对店内页重新设置离开动效 因为他们处于不同 name 的 router-view
      if (toDepth === 3) {
        this.leaveAnimate = 'animated fadeOutRight'
      }
    }
  },
  methods: {
    getLocation () {
      let that = this
      let url = location.href.split('#')[0]
      axios.get(consts.API_URL + 'wechat/portal/getWxConfig?url=' + url, {})
        .then(res => {
          let data = res.data
          if (data.code === -1) {
            console.info(data.msg)
          } else {
            data = data.data
            this.$wechat.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: data.appId, // 必填，公众号的唯一标识
              timestamp: data.timestamp, // 必填，生成签名的时间戳
              nonceStr: data.nonceStr, // 必填，生成签名的随机串
              signature: data.signature, // 必填，签名，见附录1
              jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            })
            this.$wechat.ready(() => {
              this.$wechat.getLocation({
                type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function (res) {
                  console.info(res)
                  that.$store.dispatch('setLocation', {
                    params: {
                      lontitude: res.longitude,
                      latitude: res.latitude
                    }
                  })
                  console.info(that.$store.getters.getLontitude)
                  console.info(that.$store.getters.getLatitude)
                },
                cancel: function (res) {
                  that.$vux.toast.show({
                    text: '您取消了授权获取地理位置信息',
                    type: 'text'
                  })
                }
              })
            })
            this.$wechat.error(function (res) {
              console.info('验证jsapi失败')
              console.info(res)
              // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            })
          }
        })
    }
  }
}
</script>

<style lang="less">

@import "assets/css/base.css";
@import "assets/css/common.css";
@import "assets/css/wx-header.css";
/*阿里 fonticon*/

@import "assets/css/lib/iconfont.css";
/*过渡效果需要的动画库*/

@import "assets/css/lib/animate.css";
/*weui 样式库 非常适合高仿微信*/

@import "assets/css/lib/weui.min.css";

body {
  background-color: #fbf9fe;
}
</style>
