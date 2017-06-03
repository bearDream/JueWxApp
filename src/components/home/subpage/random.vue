<template>
  <div style="background-color: #FBF9FE;font-family: 'Adobe Fan Heiti Std B'">
    <div class="head">提交订单</div>
    <group>
      <div class="body">
        <div>
          <span class="first">{{businessname}}</span>
          <span class="second">￥{{price}}</span>
        </div>
        <div>
          <x-number class="first" title="数量" :min="0" style="padding:0;margin-right:0;" @on-change="count"></x-number>
        </div>
        <div>
          <span class="first">小计</span>
          <span class="second" >￥{{subtotal}}</span>
        </div>
      </div>
    </group>
    <group>
      <div class="takeSorting">
        <div class="body">
          <div class="center1">
            <span class="first">抵用券</span>
            <span class="second">￥-{{voucher}}</span>
          </div>
        </div>
      </div>
    </group>
      <div class="foot">
        <span class="first">还需支付</span>
        <span class="second" >{{sum}}</span>
      </div>
    <div style="width:100%;position: absolute;bottom:0;">
      <x-button type="primary" class="btn">提交订单</x-button>
    </div>
  </div>
</template>
<script>
  import { Group, XButton, Icon, XNumber } from 'vux'
  export default {
    components: {
      Group,
      XButton,
      Icon,
      XNumber
    },
    data () {
      return {
        businessname: '越南家3人餐',
        price: 68,
        voucher: 3.1,
        subtotal: 0,
        sum: 0
      }
    },
    methods: {
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
    background: #59850B !important;
    margin-top: 165px;
    height: 55px !important;
    border-radius: 0 !important;
    font-size: 20px !important;
  }
</style>
