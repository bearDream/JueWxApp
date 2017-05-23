<template>
  <div>
  <x-header v-on:click="$router.back()">设置</x-header>
    <group>
      <cell title='意见反馈'  is-link></cell>
      <cell title='用户帮助' is-link></cell>
    </group>
    <group>
      <cell title="软件关于" @click.native="showPlugin" is-link></cell>
      <div v-transfer-dom>
        <alert v-model="show2" title="关于" @on-hide="onHide" content="Your Message is sent successfully"></alert>
      </div>
      <cell title='清理缓存'  is-link></cell>
      <cell title='软件分享' is-link></cell>
      <cell title="联系我们" @click.native="showPlugin1" is-link></cell>
      <div v-transfer-dom>
        <alert v-model="show1" title="蕨菜客服" @on-hide="onHide" content="400-101-201"></alert>
      </div>
      <cell title='去评价' is-link></cell>
    </group>


  </div>

</template>
<script>

import { XHeader, Alert, Group, Cell, TransferDomDirective as TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Alert,
    Group,
    Cell
  },
  data () {
    return {
      show: false,
      show1: false,
      show2: false
    }
  },
  methods: {
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    showPlugin () {
      this.$set(this, 'show2', true)
    },
    showPlugin1 () {
      this.$set(this, 'show1', true)
    }
  }
}
</script>
