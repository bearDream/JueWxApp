<template>
  <div style="background-color: #FBF9FE;font-family: 'Adobe Fan Heiti Std B'">
    <div class="head">提交订单</div>
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
    <!--<group>-->
      <!--<div class="takeSorting">-->
        <!--<div class="body">-->
          <!--<div class="center1">-->
            <!--<span class="first">抵用券</span>-->
            <!--<span class="second">￥-{{voucher}}</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</group>-->
      <div class="foot">
        <span class="first">还需支付</span>
        <span class="second" >{{sum}}</span>
      </div>
    <div style="width:100%;position: absolute;bottom:0;">
      <x-button type="primary" class="btn" @click.native="order" :show-loading="orderButtonLoading">提交订单</x-button>
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
      XButton,
      Icon,
      XNumber,
      Panel,
      Indicator,
      Toast
    },
    data () {
      return {
        dishBusiness: '',
        wxJsPay: '',
        orderButtonLoading: false,
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
        businessname: '越南家3人餐',
        price: 68,
        voucher: 3.1,
        subtotal: 0,
        sum: 0
      }
    },
    mounted () {
      if (this.$route.params.dishBusiness === undefined) {
        this.$router.go(-1)
      } else {
        this.dishBusiness = this.$route.params.dishBusiness
        this.get(this.dishBusiness)
      }
    },
    methods: {
      get (dishBusiness) {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        })
        this.$store.dispatch('getDishBusinesss', {
          uri: dishBusiness
        }).then(() => {
          Indicator.close()
          let data = this.$store.getters.getDishBusiness
          if (data.code !== -1) {
            data = data.data
            // 设置商家名片数据
            this.business[0].src = data.business.businessImage
            this.business[0].title = data.business.name
            this.business[0].desc = data.business.address
            this.business[0].businessId = data.business.businessId
            // 设置菜品数据
            this.dishList = data.dishList
            // 计算价钱以及代金券等...
            for (let i = 0; i < this.dishList.length; i++) {
              this.subtotal += this.dishList[i].dishPrice
            }
            this.$set(this, 'sum', this.subtotal)
          }
        })
      },
      order () {
        this.orderButtonLoading = true
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        })
        let data = {
          dishId: this.dishBusiness,
          orderPice: this.sum,
          remark: '今日吃啥订单',
          businessId: this.business[0].businessId
        }
        this.$store.dispatch('submitOrder', {
          data: data
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
        axios.get(consts.API_URL + 'wechat/portal/getWxConfig?url=' + url, {})
          .then(res => {
            let data = res.data
            if (data.code === -1) {
              Toast('获取微信api配置信息失败')
            } else {
              data = data.data
              this.$wechat.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
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
                  },
                  cancel: function (res) {
                    Toast('用户取消支付')
                  }
                })
              })
            }
          })
      },
      payOrder () {
        // 支付成功后发送数据给后台修改订单状态
        axios.get(consts.API_URL + 'order/payNotify', {})
          .then(res => {

          })
      },
      count (val) {
        this.subtotal = this.price * val
        if (val === 0) {
          this.sum = 0
        } else {
          this.sum = this.subtotal - this.voucher
        }
      }
    }
  }
</script>
<style>
  .head{
    text-align: center;
    font-size: 22px;
    background-color: #fff;
    padding: 3% 0;
  }
  .body{
    font-size: 20px;
    padding:2%;
  }
  .body>div{
    width:100%;
    margin-top:2%;
    height:40px;
    line-height: 40px;
  }
  .first{
    margin-left: 3%;
  }
  .second{
    float: right;
    margin-right: 3%;
  }
  .foot{
    width: 100%;
    font-size: 20px;
    background-color: #fff;
    padding: 3% 0;
    position: absolute;
    bottom:60px;
  }
  a.vux-number-selector-plus{
    margin-right:0;
    padding:0;
  }
  a.vux-number-selector-sub{
    padding:0;
  }
  a.vux-number-selector svg{
    fill:#59850b;
  }
  .btn{
    background: #09bb07 !important;
    /*margin-top: 165px;*/
    height: 45px !important;
    border-radius: 0 !important;
    font-size: 20px !important;
  }
  .weui-media-box__title{
    text-align: left;
    font-size: 20px!important;
  }
  .weui-media-box__desc{
    text-align: left;
    font-size: 13px!important;
  }
</style>
