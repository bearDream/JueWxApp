<template>
  <div style="">
    <x-header v-on:click="$router.back()">蕨菜</x-header>
    <blur :blur-amount=0 :url="url" style="height:180px;">
      <div style="position:relative;min-height:180px;" v-for="item in list" >
        <div class="m-img"  :style="{backgroundImage: 'url(' + item.ava + ')'}"></div>
        <p style="position:absolute;font-size:24px;top:58%;left:5%;">{{item.name}}</p>
        <p style="position:relative;">
          <i class="re-address"></i>
          <i style="position:absolute;font-size:14px;font-weight:bold;left:13%;margin-top:43%">{{item.address}}</i>
       </p>
        <div style="position:absolute;width:60%;min-height:80px;top:65%;left:55%">
          <ul class="me_show">
            <li>发布<p style="
    right: 40%;text-align:center">{{release}}</p></li>
            <i style="border-right:1px solid #000;height:25px;margin-top:6%;"></i>
            <li>喜欢<p style="
    right: 20%;text-align:center">{{like}}</p></li>
            <i style="border-right:1px solid #000;height:25px;margin-top:6%;"></i>
            <li>收藏<p style="text-align:center">{{keep}}</p></li>
          </ul>
        </div>
      </div>
    </blur>
    <div class="body"style="width: 100%;">我的发布</div>
    <div class="foture" v-for="item in list1">
      <img :src="item.Nordic"  v-on:click="GoArticle">
      <p style="text-align: left">{{ item.content }}</p>
      <i style="background-position: 0 -1px;" v-show="item.bad" @click="addgoods(item,item.sum)"></i>
      <i style="background-position: -30px -0px;" v-show="item.good" @click="addgoods(item,item.sum)"></i>
       <a>{{item.sumScore}}</a>
    </div>
  </div>
</template>

<script>
  import { XHeader, Flexbox, FlexboxItem, Blur, Masker, Group, Cell, Panel } from 'vux'
  import img from '../../../assets/img/re-top.png'
  import img1 from '../../../assets/img/re-header.png'
  import img2 from '../../../assets/img/re-Nordic.png'
  import img3 from '../../../assets/img/re-coffee.png'
  import img4 from '../../../assets/img/re-pizza.png'
  import img5 from '../../../assets/img/re-corner.png'
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
          ava: img1,
          name: 'Junny',
          address: '云南 昆明'
        }],
        list1: [{
          Nordic: img2,
          content: '藏在昆明小巷子的小清新咖啡馆',
          sumScore: 0,
          bad: true,
          sum: 0
        }, {
          Nordic: img3,
          content: '昆明网红简约咖啡馆',
          sumScore: 4,
          bad: true,
          sum: 0
        }, {
          Nordic: img4,
          content: '这是一个来自pizza爱好者的推荐',
          sumScore: 0,
          bad: true,
          sum: 0
        }, {
          Nordic: img5,
          content: '藏在转交的咖啡店',
          sumScore: 12,
          bad: true,
          sum: 0
        }],
        url: img,
        release: 4,
        like: 123,
        keep: 53
      }
    },
    methods: {
      addgoods (item, sum) {
        if (sum >= 1) {
          item.good = false
          item.bad = true
          item.sumScore -= 1
          item.sum -= 1
        } else {
          item.good = true
          item.bad = false
          item.sumScore += 1
          item.sum += 1
        }
      },
      GoArticle () {
        this.$router.push({name: 'article'})
      }
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
    position: absolute;
    display: inline-block;
    padding-bottom:17%;
    width: 17%;
    border-radius: 50%;
    top:25%;
    left:5%;
  }
  .re-address{
    position:absolute;
    margin-top:40%;
    left:5%;
    display: inline-block;
    width:25px;
    height:35px;
    background: url("../../../assets/img/re-icon.png") no-repeat -62px 4px;
  }
  .me_show{
    display: flex;
    width: 100%;
    height:40%;
    bottom: 5px;
    color:#7d7e83;
  }
  .me_show li{
    float: left;
    padding-left:5%;
    bottom:80%;
    padding-right: 5%;
    font-size:15px;
    color: #000;
  }
  .foture {
    display: inline-block;
    position: relative;
    float: left;
    width:42%;
    font-size: 15px;
    margin:4%;
    min-height:200px;
  }
  .foture img{
    width: 100%;
    position: absolute;
  }
  .foture p{
    width:100%;
    position: absolute;
    top: 82%;
    overflow:hidden;
  }
  .foture i{
    padding-right:5%;
    position: absolute;
    top: 96%;
    right: 10%;
    width:30px;
    height:25px;
    background-image: url("../../../assets/img/re-icon.png");
  }
  .foture a{
    position: absolute;
    top: 100%;
    right: 2%;
    font-size:16px;
  }
  .body{
   text-align: center;
    font-size:26px;
  }

</style>
