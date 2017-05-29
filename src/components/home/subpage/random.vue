<template>
  <div>
    <x-header v-on:click="$router.back()">提交订单</x-header>
    <!--<group>-->
      <!--<p class="head">提交订单</p>-->
    <!--</group>-->
    <group>
      <div class="takeSorting" v-for="item in list1">
        <div class="body">
          <div class="center1">
            <span class="first">{{item.name}}</span>
            <span class="second">{{item.price}}</span>
          </div>
          <div class="center1">
            <span class="first">数量</span>
            <div class="second">
          <span>
            <a>+</a>
          </span>
              <span class="count">123</span>
              <span>
            <a>-</a>
          </span>
            </div>
          </div>
          <div>
            <span class="all first">小计</span>
            <span class="second" >{{item.sum}}</span>
          </div>
        </div>
      </div>
    </group>
    <group>
      <div class="takeSorting" v-for="item in list1">
        <div class="body">
          <div class="center1">
            <span class="first">抵用券</span>
            <span class="second">使用抵用券</span>
          </div>
          <div class="center1">
            <span class="first">总价</span>
            <span class="second">{{item.sum}}</span>
          </div>
        </div>
      </div>
    </group>
    <x-button type="primary" class="btn">提交订单</x-button>
  </div>
</template>
<script>
  import { XHeader, Group, XButton, Icon } from 'vux'
  export default {
    components: {
      XHeader,
      Group,
      XButton,
      Icon
    },
    data () {
      return {
        list1: [{
          name: '越南家3人餐',
          price: '￥68',
          sum: '￥68'
        }]
      }
    }
  }
</script>
<style>
  .head{
    text-align: center;
    font-size: 22px;
    margin: 10px;
  }
  .body{
    font-size: 20px;
    /*margin: 30px 0;*/
  }
  .center1{
    border-bottom: 1px solid #dddbdb;
    line-height: 70px;
  }
  .all{
    margin-bottom: 19px;
    display: inline-block;
    margin-top: 21px;
  }
  .first{
    margin-left: 20px;
  }
  .second{
    float: right;
    margin-right: 20px;
  }
  .btn{
    background: #59850B !important;
    margin-top: 165px;
    height: 65px !important;
    border-radius: 0 !important;
  }
  .count{
    border: 1px solid #ddd;
    padding: 5px;
  }
</style>
