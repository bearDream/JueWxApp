<template>
  <div v-on:click="close">
    <msg :title="('请返回进行微信授权登录后再进行操作')" :description="('微信登录未授权')" :buttons="buttons" :icon="icon"></msg>
  </div>
</template>

<script>
import {Msg, Divider, XButton} from 'vux'
export default {
  components: {
    Msg,
    Divider,
    XButton
  },
  data () {
    return {
      description: '请返回进行微信授权登录后再进行操作',
      icon: 'warn',
      buttons: [{
        type: 'primary',
        text: '关闭页面'
      }]
    }
  },
  methods: {
    close () {
      window.opener = null
      window.open('', '_self').close()
    }
  }
}
</script>

<style>
</style>
