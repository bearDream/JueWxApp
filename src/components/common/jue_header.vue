<template>
  <!--复兴性高，数据交互比较频繁-->
  <div id="wx-header">
    <div class="center" style="background-color: #59850b;">
      <!-- <transition name="fade">
          <div class="iconfont icon-return-arrow" style="left: 10px;position: absolute;font-size: 16px;" v-on:click="goBack" v-show="$route.path.split('/').length>2"><span>{{$store.state.backPageName}}</span></div>
      </transition>-->
      <!--显示当前页的名字-->
      <span>{{$store.state.currentPageName}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['pageName'],
    data () {
      return {
        // 暂且用不到
        chatCount: true
      }
    },
    methods: {
      // 暂且用不到 先留着
      goBack () {
        this.$router.go(-1)
        // 保证返回操作后正确显示页面名称
        // this.$store.commit("setPageName", this.$store.state.backPageName)
      }
    }
  }
</script>
<style>

</style>
