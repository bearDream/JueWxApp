<template>
  <div>
    <group :title=" 'Use as a plugin' ">
      <cell :title=" 'Show Me' " @click.native="showPlugin" is-link></cell>
      <cell :title=" 'will auto close in 3s' " @click.native="showPluginAuto" is-link></cell>
    </group>
  </div>
</template>



<script>
  import { Alert, Group, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Alert,
      Group,
      XSwitch,
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
        this.$vux.alert.show({
          title: 'VUX is Cool',
          content: this.$t('Do you agree?'),
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding now')
          }
        })
      },
      showPluginAuto () {
        this.showPlugin()
        setTimeout(() => {
          this.$vux.alert.hide()
        }, 3000)
      }
    }
  }
</script>
