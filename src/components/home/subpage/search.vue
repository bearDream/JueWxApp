<template>
  <div style="padding-top: 50px">
    <div style="background-color: #fff;position: fixed;top: 0;border-bottom: 1px solid #f2eeee">
     <div style="width: 10%;float: left">
       <x-header :left-options="{backText: ''}" v-on:click="$router.back()" style="background-color: transparent;font-size: 15px!important;"></x-header>
     </div>
      <div class="inputDiv">
        <icon type="search" style="position: absolute;left: 20px;top: 17px;"></icon>
        <input autofocus="autofocus" v-model="key"  @input="changeInput (key)" type="text" class="inputSearch">
      </div>
    </div>
    <div style="width: 100%" class="search">
      <div class="searchDiv" v-for="item in listbusinessName">
        <icon type="search" style="margin-top: 10px"></icon>
        <p class="businessName">{{item.businessName}}</p>
        <p class="quantity quantityBusiness">
          商家
        </p>
      </div>
      <div class="searchDiv" v-for="item in listdishName">
        <icon type="search" style="margin-top: 10px"></icon>
        <p class="businessName">{{item.dishName}}</p>
        <p class="quantity quantityDish">
          <i class="id"></i>
          菜品
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { XHeader, Icon, Rater } from 'vux'

  export default {
    components: {
      XHeader,
      Icon,
      Rater
    },
    data () {
      return {
        key: '',
        listbusinessName: [
          {
            businessName: '火锅',
            quantity: 12
          }, {
            businessName: '火锅铁板烧',
            quantity: 223
          }, {
            businessName: '火锅自助餐',
            quantity: 2
          }
        ],
        listdishName: [
          {
            dishId: 1,
            dishName: '广东烧猪肉'
          },
          {
            dishId: 2,
            dishName: '红烧肘子肉'
          }
        ]
      }
    },
    methods: {
      changeInput (key) {
        console.log(key)
        console.log(12)
      }
    }
  }
</script>
<style  scoped lang="less">
  div.inputDiv{
    float: right;
    width: 90%;
    height:50px;
    display: inline-block;
    text-align: center;
    padding-top: 10px;
    position: relative;
  }
  input.inputSearch{
    width: 90%;
    border-radius: 3px;
    padding: 2px;
    border: none;
    background-color: #E6E7E8;
    color: #333;
    font-size: 15px;
    padding-left: 30px;
  }
  div.searchDiv{
    width: 100%;height: 35px;padding-left: 15px;border-bottom: 1px solid #f2f2f2;
    position: relative;
  }
  p.businessName{
    position: absolute;top: 7px;left: 40px;font-size: 15px
  }
  p.quantity {
    position: absolute;top: 8px;right: 20px;color: #7d7e83
  }
  p.quantityBusiness{
    color: red;
  }
  p.quantityDish{
    color: #00cc66;
  }
  ib{
    background-image: url("../../../assets/images/商家.png");
  }
  id{
    background-image: url("../../../assets/images/菜品.png");
  }
</style>
