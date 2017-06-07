<template>
  <div >
    <div>
     <div style="width: 10%;float: left">
       <x-header :left-options="{backText: ''}" v-on:click="$router.back()" style="background-color: transparent;font-size: 15px!important;"></x-header>
     </div>
      <div class="inputDiv">
        <icon type="search" style="position: absolute;left: 20px;top: 17px;"></icon>
        <input autofocus="autofocus" type="text" class="inputSearch">
      </div>
    </div>
    <div style="width: 100%;padding: 15px;border-top: 1px solid #E6E7E8;">
      <div style="" v-for="item in list">
        <div class="businessL" >
          <img :src="item.img1" style="width: 100%" alt="">
        </div>
        <div class="businessR">
          <p class="businessName">{{item.businessName}}</p>
          <rater v-model="item.level" slot="value" disabled :font-size="15"></rater>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="businessAddress">{{item.address}}</span><span>米</span>
          <p class="businessMap">{{item.map}}</p>
          <p class="businessTel">{{item.tel}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XHeader, Icon, Rater } from 'vux'
  import img1 from '../../../assets/img/3.png'
  export default {
    components: {
      XHeader,
      Icon,
      Rater
    },
    data () {
      return {
        list: [
          {
            img1: img1,
            businessName: '海鲜碳烤火锅自助',
            level: 3,
            address: 500,
            map: '白龙路昆明理工大学新迎校区',
            tel: 130209022223
          }, {
            img1: img1,
            businessName: '海鲜碳烤火锅自助',
            level: 3,
            address: 500,
            map: '白龙路昆明理工大学新迎校区白龙路昆明理工大学新迎校区',
            tel: 130209022223
          }, {
            img1: img1,
            businessName: '海鲜碳烤火锅自助',
            level: 3,
            address: 500,
            map: '白龙路昆明理工大学新迎校区白龙路昆明理工大学新迎校区',
            tel: 130209022223
          }
        ]
      }
    }
  }
</script>
<style  scoped lang="less">
  div.inputDiv{
    float: right;width: 90%;height:50px;display: inline-block;text-align: center;padding-top: 10px;
    position: relative;
  }
  input.inputSearch{
    width: 90%;
    border-radius: 3px;padding: 2px;border: none;background-color: #E6E7E8;color: #333;font-size: 15px;
    padding-left: 30px;
  }
  .businessName{
    font-size: 15px;
    color: #303036;
  }
  .businessL{
    display: inline-block;
    width: 30%;
    min-height: 110px;
    overflow: hidden;
    float: left;
  }
  .businessR{
    display: inline-block;
    min-height: 110px;
    width: 65%;
    float: right;
  }
  .businessAddress{
    color: red;
    font-size: 10px;
  }
  .businessMap , .businessTel{
    font-size: 12px;
  }
</style>
