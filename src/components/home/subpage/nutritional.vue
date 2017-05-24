<template>
  <div>
    <x-header v-on:click="$router.back()">营养价值</x-header>
    <br>

  </div>
</template>

<script>
  import { Masker, XHeader, TransferDom } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Masker,
      XHeader
    },
    created () {
      // 数据交互：通过this.$route.params或.query取出数据
      console.info(this.$route.params)
    },
    data () {
      return {
      }
    },
    mounted () {
      // 进入页面的钩子函数
    },
    methods: {
    }
  }
</script>

<style lang="less">

</style>
