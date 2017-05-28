<!--<template>-->
  <!--<div style="">-->
    <!--<x-header v-on:click="$router.back()">我的会员</x-header>-->
    <!--<blur :blur-amount=0 :url="url" style="height:180px">-->

      <!--<div style="border-radius: 2px;width: 100%">-->
        <!--<div class="m-buttom" >完善信息，获取积分100></div>-->
        <!--<div class="m-buttom1"></div>-->
        <!--<ul class="me_show">-->
          <!--<li><p>{{attentions}}</p></li>-->
          <!--<li><p>{{sumScore}}分</p></li>-->
          <!--<li><p>{{editedate}}</p></li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</blur>-->
    <!--<div>-->
      <!--<flow>-->
        <!--<flow-state state="1" title="v1" is-done></flow-state>-->
        <!--<flow-line is-done></flow-line>-->

        <!--<flow-state state="2" title="v2" is-done></flow-state>-->
        <!--<flow-line tip="还差300积分到达v3"></flow-line>-->

        <!--<flow-state state="3" title="v3"></flow-state>-->
        <!--<flow-line></flow-line>-->

        <!--<flow-state state="4" title="v4"></flow-state>-->
        <!--<flow-line></flow-line>-->
        <!--<flow-state state="5" title="v5"></flow-state>-->
      <!--</flow>-->
    <!--</div>-->
    <!--<grid>-->
      <!--<grid-item class="icon0">-->
        <!--<p>我的特权</p>-->
      <!--</grid-item>-->
    <!--</grid>-->
    <!--<grid>-->
      <!--<grid-item class="icon1">-->
        <!--<div class="icon" style="background-position: -489px -249px;"></div><p>生日就餐双倍积分</p>-->
      <!--</grid-item>-->
      <!--<grid-item class="icon1">-->
        <!--<div class="icon" style="background-position: -657px -242px;"></div><p>生日就餐优惠卷</p>-->
      <!--</grid-item>-->
    <!--</grid>-->
    <!--<grid>-->
      <!--<grid-item class="icon0">-->
        <!--<p>积分兑换</p>-->
      <!--</grid-item>-->
    <!--</grid>-->
    <!--<grid>-->
      <!--<grid-item class="icon1">-->
        <!--<div class="icon2" style="background-position: -219px -243px;">-->
          <!--50元的代金券5000积分-->
        <!--</div>-->
      <!--</grid-item>-->
      <!--<grid-item class="icon1">-->
        <!--<div class="icon2" style="background-position: -219px -243px;">-->
          <!--100元代金券10000积分-->
        <!--</div>-->
      <!--</grid-item>-->
    <!--</grid>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import { XHeader, Flexbox, FlexboxItem, Blur, Masker, Group, Grid, GridItem, Cell, Panel, Flow, FlowState, FlowLine } from 'vux'-->
  <!--import img from '../../../assets/img/7.png'-->
  <!--import { mapState } from 'vuex'-->
  <!--export default {-->
    <!--components: {-->
      <!--XHeader,-->
      <!--Blur,-->
      <!--Flexbox,-->
      <!--FlexboxItem,-->
      <!--Masker,-->
      <!--Group,-->
      <!--Grid,-->
      <!--GridItem,-->
      <!--Cell,-->
      <!--Panel,-->
      <!--Flow,-->
      <!--FlowState,-->
      <!--FlowLine-->
    <!--},-->
    <!--data () {-->
      <!--return {-->
        <!--url: img,-->
        <!--attentions: '当前积分',-->
        <!--sumScore: 0,-->
        <!--editedate: '积分明细>'-->
      <!--}-->
    <!--},-->
<!--//    methods: {-->
<!--//      GoRankingList () {-->
<!--//        this.$router.push({name: 'RankingList'})-->
<!--//      },-->
<!--//      GoFruit () {-->
<!--//        this.$router.push({name: 'Fruit'})-->
<!--//      },-->
<!--//      GoBreakfast () {-->
<!--//        this.$router.push({name: 'Breakfast'})-->
<!--//      },-->
<!--//      GoLunch () {-->
<!--//        this.$router.push({name: 'Lunch'})-->
<!--//      }-->
<!--//    },-->
    <!--mounted () {-->
      <!--// 进入页面的钩子函数-->
    <!--},-->
    <!--computed: mapState([-->
      <!--'ranking'-->
    <!--])-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->
  <!--div.vux-header{-->
    <!--background:#59850b;-->
  <!--}-->
  <!--div.vux-header+div{-->
    <!--background:#8FC31F;-->
    <!--font-size:18px;-->
    <!--color:#fff;-->
    <!--height:180px !important;-->
    <!--margin-top:-1px;-->
  <!--}-->
  <!--.m-buttom {-->
    <!--display: block;-->
    <!--position: absolute;-->
    <!--width: 100%;-->
    <!--cursor: pointer;-->
    <!--border-radius: 2px;-->
    <!--height: 20%;-->
    <!--background: rgb(255,247,214);-->
    <!--opacity: 1;-->
    <!--top:0%;-->
    <!--text-align:left;-->
    <!--line-height: 40px;-->
    <!--color: rgb(169,120,25);-->
    <!--font-size:20px;-->
  <!--}-->
  <!--.m-buttom1 {-->
    <!--display: block;-->
    <!--position: absolute;-->
    <!--width: 100%;-->
    <!--background-size: cover;-->
    <!--background-position: center center;-->
    <!--cursor: pointer;-->
    <!--border-radius: 2px;-->
    <!--height: 40%;-->
    <!--opacity: 0.8;-->
    <!--bottom: -1px;-->
  <!--}-->
  <!--.me_show{-->
    <!--display: flex;-->
    <!--width: 100%;-->
    <!--height:40%;-->
    <!--position: absolute;-->
    <!--bottom: 5px;-->
    <!--color:#000;-->
  <!--}-->
  <!--.me_show li{-->
    <!--float: left;-->
    <!--padding-left:20px;-->
  <!--}-->
  <!--.me_show li:nth-child(1){-->
    <!--position: absolute;-->
    <!--bottom:100%;-->
    <!--line-height:40px;-->
    <!--padding-right: 20px;-->
    <!--font-size:24px;-->
    <!--color: #ffffff;-->
  <!--}-->
  <!--.me_show li:nth-child(2){-->
    <!--position: absolute;-->
    <!--left: 0;-->
    <!--bottom:15%;-->
    <!--font-size:24px;-->
    <!--color: #ffffff;-->
  <!--}-->
  <!--.me_show li:last-child{-->
    <!--position: absolute;-->
    <!--right: 0;-->
    <!--bottom:15%;-->
    <!--padding-right: 5%;-->
    <!--font-size:15px;-->
    <!--color: #ffffff;-->
  <!--}-->
  <!--.icon{-->
    <!--display:inline-block;-->
    <!--width:100px;-->
    <!--height:100px;-->
    <!--background-image: url("../../../assets/img/tag.png");-->

  <!--}-->
  <!--.icon2{-->
     <!--display:inline-block;-->
     <!--width:110px;-->
     <!--height:90px;-->
     <!--background-image: url("../../../assets/img/tag.png");-->
     <!--line-height:40px;-->
   <!--}-->
  <!--.icon0 {-->
    <!--position: relative;-->
    <!--float: left;-->
    <!--padding: 10px 5px;-->
    <!--width: 100% !important;-->
    <!--box-sizing: border-box;-->
    <!--text-align: left;-->
    <!--font-size:20px;-->
    <!--height: 15% !important;-->
    <!--line-height: 20px;-->
  <!--}-->
  <!--.icon1 {-->
    <!--position: relative;-->
    <!--float: left;-->
    <!--padding:5px;-->
    <!--width: 50% !important;-->
    <!--box-sizing: border-box;-->
    <!--font-size: 15px;-->
    <!--text-align: center;-->
  <!--}-->
<!--</style>-->
