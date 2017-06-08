<template>
<!--订单详细的页面-->
  <div style="background-color: #FBF9FE;font-family: 'Adobe Fan Heiti Std B'">
    <div class="head">订单详情</div>
    <panel :list="business" type="1" style="font-size: 10px;"></panel>
    <group>
      <div class="body">
        <div v-for="item in dishList">
          <span class="first">{{item.dishName}}</span>
          <span class="second">￥{{item.dishPrice}}</span>
        </div>
      </div>
    </group>
    <group>
      <div class="body">
        <span class="first">小计</span>
        <span class="second" >￥{{subtotal}}</span>
      </div>
    </group>
    <div class="foot">
      <span class="first">支付金额</span>
      <span class="second" >{{sum}}</span>
    </div>
    <div style="width:100%;position: absolute;bottom:0;">
      <x-button type="primary" class="btn" @click.native="buttonClick" :show-loading="orderButtonLoading">{{orderStatus}}</x-button>
    </div>
  </div>
</template>

<script>
  import { Group, XButton, Icon, XNumber, Panel } from 'vux'
  import { Indicator, Toast } from 'mint-ui'
  import axios from 'axios'
  import consts from '@/utils/consts'

export default {
    components: {
      Group,
      Toast,
      XNumber,
      XButton,
      Icon,
      Panel,
      Indicator
    },
    data () {
      return {
        orderInfo: '',
        wxJsPay: '',
        orderId: '',
        orderStatus: '待评价',
        sum: 0,
        subtotal: 0,
        dishList: [
          {
            'dishBusinessId': 447,
            'dishId': 29,
            'dishName': '酸笋鸡',
            'businessId': 24,
            'dishType': null,
            'isFavorable': false,
            'isShow': true,
            'isTop': true,
            'orderCount': null,
            'dishPrice': 32,
            'favorablePrice': 9,
            'addtime': null,
            'tagId': null,
            'dishImage': 'http://admin.chiprincess.cn/api/file?url=2542c4f1e0e74806872d40dd9da70bf2.jpg',
            'dishRecImage': 'http://admin.chiprincess.cn/api/file?url=24feb9a71eee4ba8806325d8ebede5f5.jpg',
            'dishDesc': '酸爽可口',
            'dishNutritionStatus': 2,
            'name': null,
            'businessNum': null,
            'favorable': false,
            'show': true,
            'top': true
          },
          {
            'dishBusinessId': 452,
            'dishId': 35,
            'dishName': '干锅鱿鱼',
            'businessId': 24,
            'dishType': null,
            'isFavorable': false,
            'isShow': true,
            'isTop': true,
            'orderCount': null,
            'dishPrice': 35,
            'favorablePrice': 9,
            'addtime': null,
            'tagId': null,
            'dishImage': 'http://admin.chiprincess.cn/api/file?url=1373babd9d4041d990d33b5ab25e5b6e.jpg',
            'dishRecImage': 'http://admin.chiprincess.cn/api/file?url=bab794148f8b4074ac28b54cd0740660.jpg',
            'dishDesc': '干锅鱿鱼尤其鱼肉的鲜美是干锅中的极品菜品之一。',
            'dishNutritionStatus': 2,
            'name': null,
            'businessNum': null,
            'favorable': false,
            'show': true,
            'top': true
          },
          {
            'dishBusinessId': 450,
            'dishId': 50,
            'dishName': '秘制肥牛',
            'businessId': 24,
            'dishType': null,
            'isFavorable': false,
            'isShow': true,
            'isTop': false,
            'orderCount': null,
            'dishPrice': 35,
            'favorablePrice': 9,
            'addtime': null,
            'tagId': null,
            'dishImage': 'http://admin.chiprincess.cn/api/file?url=5bf1edadae5146b5afa80524149ff6e0.jpg',
            'dishRecImage': 'http://admin.chiprincess.cn/api/file?url=4ea04e5697414569907fe251ba1102f6.jpg',
            'dishDesc': '多种吃法，高热量',
            'dishNutritionStatus': 2,
            'name': null,
            'businessNum': null,
            'favorable': false,
            'show': true,
            'top': false
          }
        ],
        business: [{
          'businessId': 24,
          'title': '猫咪记忆',
          'desc': '云南省官渡区昆明市吴井路327号',
          'src': 'http://admin.chiprincess.cn/api/file?url=7f8a484657db40abb79cfef8139da761.jpg'
        }],
        orderButtonLoading: false
      }
    },
    mounted () {
      this.orderId = this.$route.params.orderId
      if (this.orderId === undefined) {
        this.$router.go(-1)
      } else {
        this.get(this.orderId)
      }
    },
    methods: {
      get () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        })
        // 查询订单状况，如果是已支付则显示支付成功的图标，文字和按钮，否则显示不同的情况
        this.$store.dispatch('getOrderInfo', {
          uri: 'get?orderId=' + this.orderId
        }).then(() => {
          Indicator.close()
          let data = this.$store.getters.getOrder
          if (data.code !== -1) {
            data = data.data
            // 设置商家名片数据
            this.business[0].src = data.business.businessImage
            this.business[0].title = data.business.name
            this.business[0].desc = data.business.address
            this.business[0].businessId = data.business.businessId
            // 设置菜品数据
            this.dishList = data.dishList
            // 设置订单信息
            this.orderInfo = data.order
            this.subtotal = data.order.orderPice
            this.sum = data.order.orderPice
            let status = data.order.orderStatus
            switch (status) {
              case 0:
                this.orderStatus = '去支付'
                break
              case 1:
                this.orderStatus = '待消费'
                break
              case 2:
                this.orderStatus = '去评价'
                break
              case 3:
                this.orderStatus = '已完成'
                break
            }
          } else {
            Toast(data.msg)
          }
        })
      },
      close () {
        this.$router.replace({name: '首页'})
      },
      buttonClick () {
        switch (this.orderStatus) {
          case '去支付':
            this.pay()
            break
          case '待消费':
//            alert('待消费')
            break
          case '去评价':
//            alert('去评价')
            break
          case '已完成':
//            alert('已完成')
            break
        }
      },
      pay () {
        this.orderButtonLoading = true
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        })
        this.$store.dispatch('submitOrder', {
          data: this.orderInfo
        }).then(() => {
          Indicator.close()
          this.orderButtonLoading = false
          let data = this.$store.getters.getSubmitOrder
          if (data.code !== -1) {
            this.$set(this, 'wxJsPay', data.data)
            this.onBridge()
          } else {
            Toast(data.msg)
          }
        })
      },
      onBridge () {
        let url = location.href.split('#')[0]
        var that = this
        axios.get(consts.API_URL + 'wechat/portal/getWxConfig?url=' + url, {})
          .then(res => {
            let data = res.data
            if (data.code === -1) {
              Toast('获取微信api配置信息失败')
            } else {
              data = data.data
              this.$wechat.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              })
              this.$wechat.ready(() => {
                this.$wechat.chooseWXPay({
                  timestamp: this.wxJsPay.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                  nonceStr: this.wxJsPay.nonceStr, // 支付签名随机串，不长于 32 位
                  package: this.wxJsPay.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                  signType: this.wxJsPay.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                  paySign: this.wxJsPay.paySign, // 支付签名
                  success: function (res) {
                    // 支付成功后的回调函数
                    Toast('支付成功')
                    let prepayId = that.wxJsPay.package
                    prepayId = prepayId.split('=')[1]
                    that.$router.replace({name: 'payResult', params: {prepayId: prepayId}})
                  },
                  cancel: function (res) {
                    Toast('您取消了支付')
                  },
                  fail: res => {
                    Toast('支付失败')
                    let prepayId = this.wxJsPay.package
                    prepayId = prepayId.split('=')[1]
                    this.$router.push({name: 'payResult', params: {prepayId: prepayId}})
                  }
                })
              })
            }
          })
      }
    }
}
</script>
