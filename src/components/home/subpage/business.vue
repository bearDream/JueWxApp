<template>
  <div>
    <x-header :left-options="{backText: ''}" v-on:click="$router.back()">取号</x-header>
    <div class="takeSorting">
      <div class="sortingl" :style="{backgroundImage: 'url(' + businessInfo.businessImage + ')'}"></div>
      <div class="sortingr">
        <div style="position:absolute;right:20px;top: -10px;" >
          <img class="a-img" v-if="businessInfo.collectionId === null" v-on:click="collect" src="../../../assets/images/heart_default.png" style="height: 40px; width: 40px; padding: 5px"/>
          <img class="a-img" v-else v-on:click="cancelCollect"  src="../../../assets/images/heart_select_red.png" style="height: 40px; width: 40px; padding: 5px"/>
        </div>
        <h3>{{businessInfo.name}}</h3>
        <rater v-model="businessInfo.level"  slot="value" disabled></rater>
      </div>
    </div>
    <div id="businesstake">
    <grid :rows="3">
      <grid-item>餐桌类型</grid-item>
      <grid-item>等待桌数</grid-item>
      <grid-item>预计等待</grid-item>
    </grid>
    <grid :rows="3">
      <grid-item>小桌</grid-item>
      <grid-item><span class="statuss" v-if="queue.small_table!=undefined">{{queue.small_table}}</span><span class="statuss" v-else>-</span>桌</grid-item>
      <grid-item>约<span class="statuss" v-if="queue.small_table_wait!=undefined">{{queue.small_table_wait}}</span><span class="statuss" v-else> - </span>分钟</grid-item>
    </grid>
    <grid :rows="3">
      <grid-item>中桌</grid-item>
      <grid-item><span class="statuss" v-if="queue.medium_table!=undefined">{{queue.medium_table}}</span><span class="statuss" v-else>-</span>桌</grid-item>
      <grid-item>约<span class="statuss" v-if="queue.medium_table_wait!=undefined">{{queue.medium_table_wait}}</span><span class="statuss" v-else> - </span>分钟</grid-item>
    </grid>
    <grid :rows="3">
      <grid-item>大桌</grid-item>
      <grid-item><span class="statuss" v-if="queue.big_table!=undefined">{{queue.big_table}}</span><span class="statuss" v-else>-</span>桌</grid-item>
      <grid-item>约<span class="statuss" v-if="queue.big_table_wait!=undefined">{{queue.big_table_wait}}</span><span class="statuss" v-else> - </span>分钟</grid-item>
    </grid>

    <grid :rows="2">
      <grid-item>
        <h3>{{now_distance}}</h3>
        <!--<h3>限制距离  {{limit_distance}} km</h3>-->
      </grid-item>
      <grid-item>
        <x-button type="primary" v-if="takebutton" @click.native="takePage">
          <span style="font-size: 15px;"></span>
          {{buttonText}}
        </x-button>
        <div v-if="takePageshow">
          <h3>单号 <span class="statuss">{{number}}</span></h3>
          <h3>还需等待 <span class="waitNum"> {{wait}} </span>桌</h3>
        </div>
        <div v-if="businessInfo.isTake == 0">
          <div>
            <h3 style="color: #c1411a">商家未开通取号 </h3>
            <h3 style="color: darkgray">请耐心等待商家开通哦</h3>
          </div>
        </div>

        <!--<alert v-model="alertConfirm" title="取号" content="确认取号，默认小桌"  @on-hide="onHide"></alert>-->

        <confirm v-model="alertConfirm"  content="确认取号"  @on-confirm="onconfirem" @on-cancel="onCancel">
          <divider>请选择就餐人数{{peopleNum.i}}</divider>
          <checker
            v-model="peopleNum"
            default-item-class="demo5-item"
            selected-item-class="demo5-item-selected">
            <checker-item v-for="i in list01" :key="i"  :value="i" :on-change="checker (peopleNum.i)">{{i.i}}</checker-item>
          </checker>
        </confirm>
      </grid-item>
    </grid>
    <div class="business_foot">
      <h4><x-button type="primary" @click.native="refreshInfo">刷新状态</x-button></h4>
      <!--<h4>{{businessInfo.tel}}</h4>-->
      <!--<h4 @click="openMap">{{businessInfo.address}}(点击查看详细位置)</h4>-->
      <!--<h4>{{time}}</h4>-->
    </div>
      <group>
        <cell title="📢电话"  is-link  :value="businessInfo.tel" style="font-size: 12px;"></cell>
        <cell title="📌位置地址" is-link @click.native="openMap" :value="businessInfo.address" style="font-size: 12px;"></cell>
      </group>
    </div>

    <!--加载进度-->
    <div >
      <loading v-model="loading" text="取票中..."></loading>
    </div>
  </div>
</template>
<script>
  let peopleNum
  import { Confirm, XHeader, Blur, Group, Cell, Rater, Badge, Grid, GridItem, XButton, Alert, Loading, Checker, CheckerItem, Divider } from 'vux'
  import { Toast } from 'mint-ui'
  import img from '../../../assets/img/8.png'
  import axios from 'axios'
  import consts from '@/utils/consts'

  export default {
    components: {
      XHeader,
      Blur,
      Group,
      Cell,
      Rater,
      Badge,
      Grid,
      GridItem,
      XButton,
      Alert,
      Loading,
      Confirm,
      Checker,
      CheckerItem,
      Divider
    },
    data () {
      return {
        buttonText: '点击取票',
        peopleNum: 2,
        list01: [
            {i: 2},
            {i: 3},
            {i: 4},
            {i: 6},
            {i: 8},
            {i: 10}
        ],
        businessInfo: {
          businessId: '',
          businessImage: img,
          name: '生物生鲜肉店(同德广场店)',
          isTake: 1, // 0标识未开通取号  1标识开通取号
          level: 4,
          small_table: 12,
          small_table_wait: 20,
          medium_table: 20,
          medium_table_wait: 30,
          big_table: 3,
          big_table_wait: 5,
          tel: '8088-80082820',
          address: '盘龙区北京路同德广场',
          time: '早上9:00-晚上10:00  周一至周五'
        },
        queue: {
          small_table: '',
          medium_table: '',
          big_table: '',
          addTime: '',
          businessId: '',
          isExpired: 2,
          number: '',
          peopleNum: ''
        },
        now_distance: 2.2,
        limit_distance: 5.0,
        takePageshow: false,
        loading: false,
        alertConfirm: false,
        takebutton: true,
        wait: '5',
        number: '1',
        time: '早上9:00-晚上10:00  周一至周五'
      }
    },
    created () {
      console.info(this.$route.params.businessId)
      if (this.$route.params.businessId === '' || this.$route.params.businessId === undefined) {
        this.$router.go(-1)
      }
      this.$set(this.businessInfo, 'businessId', this.$route.params.businessId)
      this.refreshInfo()
    },
    methods: {
      refreshInfo () {
        this.getInfo()
        this.getUserNum()
      },
      getInfo () {
        this.$store.dispatch('getBusiness', {
          params: {
            businessId: this.businessInfo.businessId,
            userLontitude: this.$store.getters.getLontitude,
            userLatitude: this.$store.getters.getLatitude
          }
        }).then(() => {
          let data = this.$store.getters.getBusiness
          console.info(data)
          if (data.code === -1) {
            this.$router.go(-1)
          } else {
            data = data.data
            this.$set(this, 'businessInfo', data.businessInfo)
            this.$set(this, 'queue', data.queue)

            if (this.businessInfo.isTake === 0) {
              console.info('isTake' + this.businessInfo.isTake)
              this.$set(this, 'takebutton', false)
              this.$set(this, 'takePageshow', false)
            }

            if (this.businessInfo.businessId === 64) {
              this.buttonText = '点击抢号'
            }

            if (this.businessInfo.distance === null) {
              this.now_distance = '用户拒绝获取位置信息'
            } else {
              this.now_distance = '当前距离  ' + this.businessInfo.distance + '  km'
            }

            // queue中包含allNums（总排队  等待人数），bigQue（大桌队列）， mediumQue（小桌队列），smallQue（小桌队列）
            this.$set(this.queue, 'small_table', data.queue.smallQue.length)
            this.$set(this.queue, 'medium_table', data.queue.mediumQue.length)
            this.$set(this.queue, 'big_table', data.queue.bigQue.length)
          }
        })
      },
      getUserNum () {
        // 获取用户是否取过号
        this.$store.dispatch('getNumber', {
          params: {
            'businessId': this.businessInfo.businessId
          }
        }).then(() => {
          let data = this.$store.getters.getNumber
          if (data.code === -1) {
//            this.$set(this, 'takebutton', true)
            this.$set(this, 'takePageshow', false)
          } else {
            data = data.data
            console.info('..............')
            console.info(data.number)
            this.$set(this, 'takebutton', false)
            this.$set(this, 'takePageshow', true)
            this.$set(this, 'number', data.myNum.number)
            this.$set(this, 'wait', data.waitNum)
          }
        })
      },
      get (current = 1) {
        this.$set(this, 'current', current)
        this.$store.dispatch('getHomes')
      },
      takePage () {
        this.takebutton = !this.takebutton
        this.$set(this, 'alertConfirm', true)
      },
      onconfirem () {
        this.loading = true
//        let that = this
        // 发送网络请求（排队人数）
        this.$store.dispatch('takeNumber', {
          params: {
            peopleNum: peopleNum,
            businessId: this.businessInfo.businessId
          }
        }).then(() => {
          let data = this.$store.getters.getNumber
          if (data.code === -1) {
            Toast({message: data.msg})
          } else {
            this.getInfo()
            this.getUserNum()
            this.takePageshow = !this.takePageshow
          }
          this.loading = false
        })
      },
      openMap () {
        let longtitude = this.businessInfo.longtitude
        let latitude = this.businessInfo.latitude
        let url = location.href.split('#')[0]
        if (longtitude != null && latitude != null) {
          axios.get(consts.API_URL + 'wechat/portal/getWxConfig?url=' + url, {})
            .then(res => {
              let data = res.data
              if (data.code === -1) {
                console.info(data.msg)
              } else {
                data = data.data
                this.$wechat.config({
                  debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                  appId: data.appId, // 必填，公众号的唯一标识
                  timestamp: data.timestamp, // 必填，生成签名的时间戳
                  nonceStr: data.nonceStr, // 必填，生成签名的随机串
                  signature: data.signature, // 必填，签名，见附录1
                  jsApiList: ['openLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                })
                this.$wechat.ready(() => {
                  this.$wechat.openLocation({
                    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
                    longitude: longtitude, // 经度，浮点数，范围为180 ~ -180。
                    name: this.businessInfo.address, // 位置名
                    address: '', // 地址详情说明
                    scale: 20, // 地图缩放级别,整形值,范围从1~28。默认为最大
                    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
                  })
                })
                this.$wechat.error(function (res) {
                  alert('验证jsapi失败')
                  alert(res)
                  // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                })
              }
            })
        }
      },
      onCancel () {
        this.takebutton = !this.takebutton
      },
      checker (key) {
        peopleNum = 2
//        peopleNum = key
      },
      cancelCollect () {
        this.$store.dispatch('cancelCollections', {
          params: {
            collectionId: this.businessInfo.collectionId
          }
        }).then(() => {
          this.refreshInfo()
          Toast('取消收藏成功')
        })
      },
      collect () {
        this.$store.dispatch('setCollections', {
          data: {
            businessDishId: this.businessInfo.businessId,
            collectionType: 2
          }
        }).then(() => {
          this.refreshInfo()
          Toast('收藏成功')
        })
      }
    }
  }
</script>
<style scoped>
  div.vux-header{
    background:#8FC31F;
  }
  div.vux-header+div{
    background:#8FC31F;
    font-size:18px;
    color:#fff;
    height:120px;
    margin-top:-1px;
  }
  div.m-buttom{
    display:inline-block;
    padding:8px 50px;
    border:1px solid #fff;
    border-radius:15px;
    margin:15px;
  }
  ul.center>li{
    margin-bottom:10px;
  }
  ul.center>li:nth-child(3) {
    font-size:15px;
    margin-top:-5px;
  }

  .takeSorting{
    width: 100%;
    position: relative;
    border-bottom: 1px solid #dddbdb;
  }
  .sortingl{
    width: 100px;
    height: 80px;
    position: absolute;
    top: 20px;
    left: 20px;
    background-size: cover;
    background-color: #9b9b9b;
    display: inline-block;
    border-radius: 10px;
  }
  .sortingr{
    width: 60%;
    height: 150px;
    padding:20px 2px;
    position: absolute;
    top:0;
    right:0;
    display: inline-block;
  }
  .sortingr h3{
    font-size: 18px;
  }
  .sortingr span{
    margin-right: 20px;
  }
  .sortingl p{
    display: inline-block;
  }
  .sortingimg {
    width: 100%;
    height: 100%;
  }
  .statuss {
    color: red;
    margin-right: 3px;
  }
  .business_foot h4{
    padding:20px 20px;
    font-size: 15px;
    color: #5b5b5d;
  }
  .business_foot h4:nth-child(2){
    border-bottom: 1px solid #dddbdb;
    border-top: 1px solid #dddbdb;

  }
  #businesstake{
    font-size: 16px;
  }
  .weui-grid{
    position: static;
  }
  .demo5-item {
    width: 30px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-right: 6px;
  }
  .demo5-item-selected {
    /*background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;*/
    border-color: #ff4a00;
  }
</style>
