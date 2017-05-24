<template>
  <div>
   <x-header v-on:click="$router.back()">每日签到</x-header>
    <div  style="height:250px;width: 100%">
        <ul class="center">
          <li>{{sumScore}}分</li>
          <li><div class="m-buttom">已签+{{score}}</div></li>
          <li>每签到一次,积分增加{{score}}分</li>
        </ul>
    </div>
    <group>
      <cell title='赚更多积分'  link="subpage/earn"  is-link></cell>
      <cell title='关注微信' link="subpage/concern" is-link></cell>
      <cell title='邀请好友' link="subpage/invite" is-link></cell>
      <cell title='绑定手机' link="subpage/bind" is-link></cell>
    </group>
    <br>
    <br>

  </div>
</template>
<script>
  import { XHeader, Blur, Group, Cell } from 'vux'
  import img from '../../../assets/img/4.png'
  export default {
    components: {
      XHeader,
      Blur,
      Group,
      Cell
    },
    data () {
      return {
        sumScore: 6689,
        score: 10,
        url: img
      }
    }
  }
</script>
<style scoped>
  div.vux-header{
    background:#59850b;
  }
  div.vux-header+div{
    background:#8FC31F;
    font-size:18px;
    color:#fff;
    height:180px !important;
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
</style>
