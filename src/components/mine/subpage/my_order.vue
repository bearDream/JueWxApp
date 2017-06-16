
<template>
  <div style="background-color: #F0F0F0">
    <x-header :left-options="{backText: ''}" style="background: transparent;position: fixed;" v-on:click="$router.back()"></x-header>
    <div>
      <div style="height:44px;width: 100%">
        <sticky scroll-box="vux_view_box_body" :offset="46" :check-sticky-support="false">
          <tab :line-width="1">
            <tab-item selected @click.native="showlist1">全部</tab-item>
            <tab-item @click.native="showlist4">待使用</tab-item>
            <tab-item @click.native="showlist2">待付款</tab-item>
            <tab-item @click.native="showlist3">待评价</tab-item>
          </tab>
        </sticky>
      </div>

      <!-- 验证二维码对话框  QrValue-->
      <x-dialog v-model="QrDialog" hide-on-blur>
        <div style="height: 50px;font-size: 14pt;">
          <p style="padding: 8px 10px 8px 10px;text-align: center;"></p>扫描验证券码
        </div>
        <qrcode :value="QrValue" type="img"></qrcode>
        <div style="height: 20px;"></div>
      </x-dialog>

      <div v-show="showOrder">
        <!-- 全部订单 -->
        <div style="width: 100%;margin-top: 10px;background-color: #fff">
          <div v-show="show01"  style="width: 100%;min-height: 100px;border-bottom: 1px solid #f2eeee" v-for="item in allList">
            <div class="evaluationl" >
              <img :src="item.businessImage">
            </div>
            <div class="evaluationr">
              <h3 >{{item.name}}</h3>
              <p >数量: 3</p>
              <p >总价: ￥{{item.orderPice}} </p>
              <div class="evaluationrType" >
                <p>
                  <span v-if="item.orderStatus === 1">未使用</span>
                  <span v-else-if="item.orderStatus === 2">未评价</span>
                  <span v-else-if="item.orderStatus === 3">完成</span>
                  <span v-else>未支付</span>
                </p>
              </div>
              <div class="evaluationrBox">
                <p  v-if="item.orderStatus !== 0">
                  <span v-if="item.orderStatus === 1" @click="check(item.orderId)">去使用</span>
                  <span v-else-if="item.orderStatus === 2">评论</span>
                  <span v-else-if="item.orderStatus === 3">再来一单</span>
                </p>
                <p v-else @click="pay(item.orderId)">支付</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 待付款 -->
        <div style="width: 100%;margin-top: 10px;background-color: #fff">
          <div v-show="show02"  style="width: 100%;min-height: 100px;border-bottom: 1px solid #f2eeee"
               v-for="item in allList" v-if="item.orderStatus === 0">
            <div class="evaluationl" >
              <img :src="item.businessImage">
            </div>
            <div class="evaluationr">
              <h3 >{{item.name}}</h3>
              <p >数量: 3</p>
              <p >总价: ￥{{item.orderPice}} </p>
              <div class="evaluationrType" >
                <p>未付款</p>
              </div>
              <div class="evaluationrBox" @click="pay(item.orderId)">
                <p>去付款</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 待评价 -->
        <div style="width: 100%;margin-top: 10px;background-color: #fff">
          <div v-show="show03"  style="width: 100%;min-height: 100px;border-bottom: 1px solid #f2eeee"
               v-for="item in allList" v-if="item.orderStatus === 2">
            <div class="evaluationl" >
              <img :src="item.businessImage">
            </div>
            <div class="evaluationr">
              <h3 >{{item.name}}</h3>
              <p >数量: 3</p>
              <p >总价: ￥{{item.orderPice}} </p>
              <div class="evaluationrType" >
                <p>未评价</p>
              </div>
              <div class="evaluationrBox">
                <p>去评价</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 待使用 -->
        <div style="width: 100%;margin-top: 10px;background-color: #fff">
          <div v-show="show04"  style="width: 100%;min-height: 100px;border-bottom: 1px solid #f2eeee"
               v-for="item in allList" v-if="item.orderStatus === 1">
            <div class="evaluationl" >
              <img :src="item.businessImage">
            </div>
            <div class="evaluationr">
              <h3 >{{item.name}}</h3>
              <p >数量: 3</p>
              <p >总价: ￥{{item.orderPice}} </p>
              <div class="evaluationrType" >
                  <p>未使用</p>
              </div>
              <div class="evaluationrBox" @click="check(item.orderId)">
                <p>去使用</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="!showOrder" style="background-color: white">
        <p style="align: center;text-align: center;margin-top: 10px;padding-top: 10px;">
          <img src="../../../assets/images/哭脸.png" style="width: 30px;vertical-align: bottom;"/>
          暂时还没有订单哦
        </p>
      </div>
    </div>
  </div>

</template>

<script>
  import { XHeader, Sticky, Tab, TabItem, XDialog, Qrcode, Divider } from 'vux'
  import { Indicator, Toast } from 'mint-ui'
  import axios from 'axios'
  import consts from '@/utils/consts'
  import imgl from '../../../assets/img/img_01.png'
  export default {
    components: {
      XHeader,
      Sticky,
      Tab,
      XDialog,
      TabItem,
      Qrcode,
      Divider
    },
    data () {
      return {
        wxJsPay: '',
        show01: true,
        show02: false,
        show03: false,
        show04: false,
        showOrder: false,
        QrDialog: false,
        QrValue: '1231231231',
        allList: [{
          businessImage: imgl,
          name: '玫瑰之约-11只蓝色妖姬',
          orderPice: 34,  /** 价格 */
          orderStatus: 1 /** orderStatus 1为已支付 */
        }, {
          businessImage: imgl,
          name: '重庆老火锅',
          orderPice: 58,
          orderStatus: 1
        }, {
          businessImage: imgl,
          name: '涮羊肉',
          orderPice: 168,
          orderStatus: 0
        }, {
          businessImage: imgl,
          name: '海底捞',
          orderPice: 228,
          orderStatus: 1
        }]
      }
    },
    mounted () {
      this.gets()
    },
    methods: {
      gets () {
        this.$store.dispatch('getOrders', {
          uri: 'orders'
        }).then(() => {
          console.info(this.$store.getters.getOrders)
          let res = this.$store.getters.getOrders
          if (res.code !== -1) {
            this.showOrder = true
            let data = res.data
            this.$set(this, 'allList', data)
            console.info(data)
          } else {
            this.showOrder = false
          }
        })
      },
      pay (orderId) {
        this.orderPay(orderId)
      },
      check (orderId) {
        this.QrValue = orderId
        this.QrDialog = true
      },
      orderPay (orderId) {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        })
        let data = {
          orderId: orderId
        }
        this.$store.dispatch('submitOrder', {
          data: data
        }).then(() => {
          Indicator.close()
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
      },
      showlist1 () {
        this.show01 = true
        this.show02 = false
        this.show03 = false
        this.show04 = false
      },
      showlist2 () {
        this.show02 = true
        this.show03 = false
        this.show01 = false
        this.show04 = false
      },
      showlist3 () {
        this.show03 = true
        this.show01 = false
        this.show02 = false
        this.show04 = false
      },
      showlist4 () {
        this.show04 = true
        this.show03 = false
        this.show01 = false
        this.show02 = false
      }
    }
  }
</script>
<style scoped="" lang="less">
  div.evaluationl{
    float: left;width: 100px;height: 100px;overflow: hidden;padding: 10px;
  }

  div.evaluationl img{
    width: 100%;border-radius: 3px;
  }

  div.evaluationr{
    float: right;width: 65%;padding-top: 10px;position:relative;
    color: #7d7e83;
  }
  div.evaluationr>h3{
    font-size: 15px;color: #000;font-weight: bold;overflow: hidden;
    text-overflow: ellipsis;white-space: nowrap;width: 65%;
  }
  div.evaluationrType{
    position: absolute;top: 10px;right: 20px;color: #06C1AF
  }
  div.evaluationrBox{
    position: absolute;bottom: 0;right: 20px;width: 50px;height: 25px;border: 1px solid #F48E2B;border-radius: 3px;color: #f48e2b;text-align: center;line-height: 25px
  }
</style>
