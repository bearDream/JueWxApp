<template>
  <div id="jue-nav">
    <p>this is home page ...</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  /* 首页中的逻辑：
      1、先发送请求判断是否登录，如果登录则把用户信息丢给vuex的user对象管理
      2、获取首页信息，丢给vuex的相应模块进行管理
   */
  data () {
    return {
    }
  },
  created () {
    console.info(this)
//    this.$vux.loading.show({
//      text: 'Loading'
//    })
    this.getUser()
  },
  computed: mapState([
    'user'
  ]),
  methods: {
    getUser () {
      this.$store.dispatch('getUserInfo')
    }
  },
  mounted () {
    // 进入页面的钩子函数
  }
}
</script>

<style>
</style>
