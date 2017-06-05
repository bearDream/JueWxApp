<template>
  <div>
    <x-header v-on:click="$router.back()">营养价值详情</x-header>
    <blur :blur-amount=0 :url="url" style="height:220px">

      <div style="border-radius: 2px;width: 100%">
        <div class="m-buttom1"></div>
        <ul class="me_show">
          <li><p>{{attentions}}</p></li>
        </ul>
      </div>
    </blur>

    <template v-if="showContent002 = true" v-for="item in list2">
      <div class="takeSorting" @click="GoBusiness (item)">
        <h3 class="businesstitle">{{item.title}}</h3>
        <div class="allsortingl" :style="{backgroundImage: 'url(' + item.src + ')'}"></div>
        <div class="allsortingr">
          <span class="address2">{{item.address}}</span>
          <span class="tel addressstel">地址&nbsp;:&nbsp;&nbsp;&nbsp;{{item.detailed}}</span>
          <br>
          <br>
          <span class="addressstel tel" style="top: 80px"><i style="color: red">电话</i>&nbsp;:&nbsp;&nbsp;&nbsp;{{item.tel}}</span>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
  import { CellBox, Card, Masker, XHeader, Blur, TransferDom, Group, Cell, Panel, Rater, Badge } from 'vux'
  import img from '../../../assets/images/8.png'
  import img1 from '../../../assets/img/8.png'
//  import img2 from '../../../assets/img/gruel.png'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Masker,
      XHeader,
      Group,
      Cell,
      Card,
      CellBox,
      Panel,
      Rater,
      Badge,
      Blur
    },
    data () {
      return {
        tel: 1232132,
        list2: [{
          src: img1,
          title: '巴蜀知味重庆老火锅',
          address: '呈贡大学城',
          detailed: '雨花毓秀小区',
          tel: 13067349324
        }, {
          src: img1,
          title: '巴蜀知味重庆老火锅',
          address: '昆明盘龙区',
          detailed: '雨花毓秀小区',
          tel: 1234563324
        }],
        url: img,
        attentions: '营养价值分析'
      }
    },
    mounted () {
      // 进入页面的钩子函数
    },
    methods: {
      business_info (item) {
        alert(item.title)
      },
      GoBusiness (item) {
        this.$router.push({name: 'business'})
        alert(item.title)
      }
    }
  }
</script>

<style scoped="" lang="less">
  .takeSorting{
    width: 100%;
    height:160px;
    position: relative;
    margin-bottom: 10px;
    border-bottom: 1px solid #dddbdb;
  }
  .takeSorting3{
    width: 100%;
    height:300px;
    position: relative;
    border: 3px solid #E6E6E6;
  }
  .sortingl{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 25px;
    left: 25px;
    background-size: cover;
    background-color: #9b9b9b;
    display: inline-block;
  }
  .sorting3{
    width: 45%;
    height: 280px;
    position: absolute;

    left: 2%;  top: 2%;
    background-size: cover;
    background-color: #9b9b9b;
    display: inline-block;
  }
  .sortingr{
    width: 60%;
    height: 160px;
    padding:20px 5px;
    position: absolute;
    top:0;
    right:0;
    display: inline-block;
  }
  .sortingr3{
    width: 45%;
    height: 300px;
    position: absolute;
    right:5%;
    display: inline-block;
  }
  .sortingr h3{
    font-size: 20px;
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
  .sortingr .statuss {
    color: red;
    margin-right: 2px;
  }
  .distance{
    display: inline-block;
    padding: 3px 8px;
    border-radius: 5px;
    background-color: #c6c7ca;
    position: absolute;
    top:20px;
    right: 0;
  }
  .address , .distance , .tel{
    color: #5b5b5d;
    font-size: 15px;
  }
  .addressdiv{
    display: inline-block;
    width: 70%;
    position: absolute;
    top:53px;
    right: 10px;
  }
  .allsortingl{
    width: 160px;
    height: 100px;
    position: absolute;
    top: 40px;
    left: 25px;
    background-size: cover;
    background-color: #9b9b9b;
    display: inline-block;
  }
  .allsortingr{
    width: 48%;
    height: 160px;
    padding:25px 5px;
    position: absolute;
    top:0;
    right:0;
    display: inline-block;
  }
  h3.businesstitle {
    padding-left: 25px;
    padding-top: 5px;
    font-size: 16px;
    color: #1b1b1b;
    border-bottom: 1px solid #c6c7ca;
  }
  span.address2{
    display: inline-block;
    padding: 3px 8px;
    border-radius: 5px;
    position: absolute;
    top:5px;
    right: 10px;
  }
  .addressstel {
    position: absolute;
    top:40px;
  }


  .m-buttom1 {
    display: block;
    position: absolute;
    width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
    height: 50px;
    background: #f3f3f5;
    opacity: 0.8;
    bottom: 0;
  }
  .me_show{
    display: flex;
    width: 100%;
    height:40px;
    position: absolute;
    bottom: 5px;
    color:#000;
  }
  .me_show li{
    float: left;
    padding-left:20px;
    line-height:40px;
    font-size:20px;
    margin-left: 30%;
  }
</style>
