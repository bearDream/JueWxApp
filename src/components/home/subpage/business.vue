<template>
  <div>
    <x-header :left-options="{backText: ''}" v-on:click="$router.back()">取号</x-header>
    <div class="takeSorting">
      <div class="sortingl" :style="{backgroundImage: 'url(' + img + ')'}"></div>
      <div class="sortingr">
        <div style="position:absolute;right:20px;top: -10px;" >
          <rater star="♡" active-color="red" slot="value" :max="1"></rater>
        </div>
        <h3>{{title}}</h3>
        <rater v-model="grade"  slot="value" disabled></rater>
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
      <grid-item><span class="statuss">{{small_table}}</span>桌</grid-item>
      <grid-item>约{{small_table_wait}}分钟</grid-item>
    </grid>
    <grid :rows="3">
      <grid-item>中桌</grid-item>
      <grid-item><span class="statuss">{{medium_table}}</span>桌</grid-item>
      <grid-item>约{{medium_table_wait}}分钟</grid-item>
    </grid>
    <grid :rows="3">
      <grid-item>大桌</grid-item>
      <grid-item><span class="statuss">{{big_table}}</span>桌</grid-item>
      <grid-item>约{{big_table_wait}}分钟</grid-item>
    </grid>

    <grid :rows="2">
      <grid-item>
        <h3>当前距离  {{now_distance}} km</h3>
        <h3>限制距离  {{limit_distance}} km</h3>
      </grid-item>
      <grid-item>
        <x-button type="primary" v-if="takebutton" @click.native="takePage">点击取票</x-button>
        <div v-if="takePageshow">当前状态 还有{{num}}位</div>
        <confirm v-model="alertConfirm" title="取号" content="确认取号"  @on-confirm="onconfirem" @on-cancel="onCancel"></confirm>
      </grid-item>
    </grid>
    <div class="business_foot">
      <h4>{{tel}}</h4>
      <h4>{{address}}</h4>
      <h4>{{time}}</h4>
    </div>
    </div>
    <!--加载进度-->
    <div >
      <loading v-model="loading" text="取票中..."></loading>
    </div>

  </div>
</template>
<script>
  import { Confirm, XHeader, Blur, Group, Cell, Rater, Badge, Grid, GridItem, XButton, Alert, Loading } from 'vux'
  import img from '../../../assets/img/8.png'
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
      Confirm
    },
    data () {
      return {
        img: img,
        title: '生物生鲜肉店(同德广场店)',
        grade: 4,
        small_table: 12,
        small_table_wait: 20,
        medium_table: 20,
        medium_table_wait: 30,
        big_table: 3,
        big_table_wait: 5,
        now_distance: 2.2,
        limit_distance: 5.0,
        tel: '8088-80082820',
        address: '盘龙区北京路同德广场',
        time: '早上9:00-晚上10:00  周一至周五',
        takebutton: true,
        num: '5',
        takePageshow: false,
        alertConfirm: false,
        loading: false
      }
    },
    methods: {
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
        setTimeout(() => {
          this.loading = false
          this.takePageshow = !this.takePageshow
        }, 2000)
      },
      onCancel () {
        this.takebutton = !this.takebutton
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
</style>
