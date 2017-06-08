<template>
  <div >
    <div>
     <div style="width: 10%;float: left">
       <x-header :left-options="{backText: ''}" v-on:click="$router.back()" style="background-color: transparent;font-size: 15px!important;"></x-header>
     </div>
      <div class="inputDiv">
        <icon type="search" style="position: absolute;left: 20px;top: 17px;"></icon>
        <input autofocus="autofocus" v-model="key" type="text" class="inputSearch">
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
    <div style="width: 100%;min-height: 150px;padding: 10px;background-color: #fff;margin-top: 10px" v-for="item in dishImageList" @click="GoDishesDetail(item)" >
      <div style="width: 30%;display: inline-block;float: left" v-if="item.dishRecImage"  @click="GoDishesDetail(item)" >
        <img style="width: 100%" :src="item.dishRecImage" alt="">
      </div>
      <div style="width: 60%;height:100px;display: inline-block;float: right">
        <span style="font-size: 20px">{{item.dishName}}</span>
        <span style="font-size: 10px;color: #59850b">&nbsp;&nbsp;{{item.typeName}}</span>
        <p style="font-size: 14px">{{item.dishIntroduction}}</p>
        <p style="font-size: 13px; color:#f74c31">{{item.dishHealth}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { XHeader, Icon, Rater } from 'vux'
  import img1 from '../../../assets/img/3.png'
  import finddish from '../../../assets/images/F2-7.png'

  export default {
    components: {
      XHeader,
      Icon,
      Rater
    },
    data () {
      return {
        key: '',
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
        ],
        dishImageList: [
          {
            dishName: '宣威小炒肉',
            dishRecImage: finddish,
            typeName: '炒菜',
            dishDesc: '我是正宗的宣威小炒肉',
            dishIntroduction: '潮汕卤鸡是广东潮汕地区汉族传统名菜，属于炒菜系',
            dishHealth: '减肥'
          }, {
            dishName: '宣威小炒肉',
            dishRecImage: finddish,
            typeName: '炒菜',
            dishDesc: '我是正宗的宣威小炒肉',
            dishIntroduction: '潮汕卤鸡是广东潮汕地区汉族传统名菜，属于炒菜系',
            dishHealth: '减肥'
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
