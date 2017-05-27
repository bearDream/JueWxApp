<template>
  <div style="">
    <x-header v-on:click="$router.back()">蕨菜</x-header>
    <blur :blur-amount=0 :url="url" style="height:180px">
      <div class="tou" style="margin: 4%;height:40px" v-for="item in list" >
        <div class="m-img"  :style="{backgroundImage: 'url(' + item.touxiang + ')'}">
        </div>
        <p style="font-size: 24px;margin-left: 4%">{{item.name}}</p>
       <p style="font-size: 18px;margin-left: 2%;">
         <i style="background-position: -82px -4px;"></i>
         {{item.sumScore}}
       </p>
      </div>
      <div style="border-radius: 2px;width: 100%">
        <div class="m-buttom1"></div>
        <ul class="me_show">
          <li>发布<p>{{fabu}}</p></li>
          <li>喜欢<p>{{like}}</p></li>
          <li>收藏<p>{{shoucang}}</p></li>
        </ul>
      </div>
    </blur>
    <div class="body"style="width: 100%;">我的发布</div>
    <div class="foture" style="margin:4%; height:220px;" v-for="item in list1" >
      <img :src="item.beiou">
      <p>{{ item.content }}
        <i style="background-position: -8px -4px;"  v-show="item.bad"></i>
        <i style="background-position: -50px -4px;" v-show="item.good"></i>
        <span v-model="item.goods"></span>
        {{item.sumScore}}
      </p>
    </div>
  </div>
</template>

<script>
  import { XHeader, Flexbox, FlexboxItem, Blur, Masker, Group, Cell, Panel } from 'vux'
  import img from '../../../assets/img/top.png'
  import img1 from '../../../assets/img/touxiang.png'
  import img2 from '../../../assets/img/beiou.png'
  import img3 from '../../../assets/img/wanghong.png'
  import { mapState } from 'vuex'
  export default {
    components: {
      XHeader,
      Blur,
      Flexbox,
      FlexboxItem,
      Masker,
      Group,
      Cell,
      Panel
    },
    data () {
      return {
        bad: false,
        good: false,
        list: [{
          touxiang: img1,
          name: 'junny',
          sumScore: '云南昆明'
        }],
        list1: [{
          beiou: img2,
          content: '藏在昆明小巷子的小清新咖啡馆',
          sumScore: '赞',
          goods: 1,
          good: true
        }, {
          beiou: img3,
          content: '藏在昆明小巷子的小清新咖啡馆',
          sumScore: '赞',
          goods: 0,
          bad: true
        }, {
          beiou: img3,
          content: '昆明小巷子的小清新咖啡馆',
          sumScore: '赞',
          goods: 0,
          bad: true
        }, {
          beiou: img3,
          content: '昆明小巷子的小清新咖啡馆',
          sumScore: '赞',
          goods: 0,
          bad: true
        }],
        url: img,
        fabu: 4,
        like: 123,
        shoucang: 53
      }
    },
    methods: {
    },
    mounted () {
    },
    computed: mapState([
      'ranking'
    ])
  }
</script>

<style scoped>
  div.vux-header{
    background:#000;
  }
  .m-img {
    padding-bottom:23%;
    width: 23%;
    border-radius: 50%;

  }
  .m-buttom1 {
    display: block;
    position: absolute;
    width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
    height: 40%;
    opacity: 0.8;
    bottom: -1px;
  }
  .me_show{
    display: flex;
    width: 100%;
    height:40%;
    position: absolute;
    bottom: 5px;
    color:#000;
  }
  .me_show li{
    float: left;
    padding-left:20px;
  }
  .me_show li:nth-child(1){
    position: absolute;
    right: 40%;
    bottom:80%;
    padding-right: 5%;
    font-size:15px;
    color: #000;
    border-right:1px solid #000;
  }
  .me_show li:nth-child(2){
    position: absolute;
    right: 20%;
    bottom:80%;
    padding-right: 5%;
    font-size:15px;
    color: #000;
    border-right:1px solid #000;
  }
  .me_show li:nth-child(3){
    position: absolute;
    right: 0%;
    bottom:80%;
    padding-right: 5%;
    font-size:15px;
    color: #000;
  }
  .tou i{
    display: inline-block;
    width:25px;
    height:25px;
    background-image: url("../../../assets/img/tubioa.png");
  }
  .foture {
    display: inline-block;
    float: left;
    width:42%;
    font-size: 15px;
  }
  .foture img{
    width: 100%;
  }
  .foture i{
    float: right;
    display: inline-block;
    width:25px;
    height:25px;
    background-image: url("../../../assets/img/tubioa.png");
  }
  .body{
   text-align: center;
    font-size:30px;
  }

</style>
