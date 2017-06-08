<template>
<!--支付成功的页面-->
  <div>
    <msg :title="title" :description="description" :buttons="buttons" :icon="icon"style="margin-top: 100px"></msg>
  </div>
</template>

<script>
import { XButton, Msg, Icon, Panel } from 'vux'
import { Indicator } from 'mint-ui'

export default {
  components: {
    XButton,
    Icon,
    Panel,
    Indicator,
    Msg
  },
  data () {
    return {
      orderId: '',
      prepayId: '',
      title: '支付成功',
      description: '小蕨已经收到您的钱啦，快带上手机前往该店消费吧~',
      icon: '',
      sum: 0,
      buttons: [{
        type: 'primary',
        text: '查看订单',
        onClick: this.lookOrder.bind(this)
      }, {
        type: 'default',
        text: '返回首页',
        onClick: this.close.bind(this)
      }]
    }
  },
  mounted () {
    this.prepayId = this.$route.params.prepayId
    if (this.prepayId === undefined) {
      this.$router.go(-1)
    } else {
      this.get(this.prepayId)
    }
  },
  methods: {
    get () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      })
      // 查询订单状况，如果是已支付则显示支付成功的图标，文字和按钮，否则显示不同的情况
      this.$store.dispatch('getOrder', {
        uri: this.prepayId
      }).then(() => {
        Indicator.close()
        let data = this.$store.getters.getOrder
        if (data.code !== -1 && data.data.orderStatus === 1) {
          this.orderId = data.data.orderId
          this.title = '支付成功'
          this.description = '小蕨已经收到您的钱啦，快带上手机前往该店消费吧~'
          this.button = [{
            type: 'primary',
            text: '查看订单',
            onClick: this.lookOrder.bind(this)
          }, {
            type: 'default',
            text: '返回首页',
            onClick: this.close.bind(this)
          }]
          this.icon = 'success'
        } else {
          this.title = '支付失败'
          this.description = '小蕨很期待你的打赏哦，但主人恐怕要重新支付了哟~'
          this.button = [{
            type: 'primary',
            text: '查看订单',
            onClick: this.lookOrder.bind(this)
          }, {
            type: 'default',
            text: '返回首页',
            onClick: this.close.bind(this)
          }]
          this.icon = 'warn'
          if (data.data !== null) {
            this.orderId = data.data.orderId
          }
        }
      })
    },
    close () {
      this.$router.replace({name: '首页'})
    },
    lookOrder () {
      this.$router.replace({name: 'orderInfo', params: {orderId: this.orderId}})
    }
  }
}
</script>
