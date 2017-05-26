<template>
  <div style="">
    <x-header v-on:click="$router.back()">蕨菜</x-header>
    <blur :blur-amount=0 :url="url" style="height:180px">
      <div style="border-radius: 2px;width: 100%">
        <div class="m-buttom1"></div>
        <ul class="me_show">
          <li><p>{{attentions}}</p></li>
          <li><p>{{sumScore}}分</p></li>
          <li><p>{{editedate}}</p></li>
        </ul>
      </div>
    </blur>
  </div>
</template>

<script>
  import { XHeader, Flexbox, FlexboxItem, Blur, Masker, Group, Cell, Panel } from 'vux'
  import img from '../../../assets/img/top.png'
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
        url: img,
        attentions: 'junny',
        sumScore: '云南昆明',
        editedate: '积分明细>'
      }
    },
//    methods: {
//      GoRankingList () {
//        this.$router.push({name: 'RankingList'})
//      },
//      GoFruit () {
//        this.$router.push({name: 'Fruit'})
//      },
//      GoBreakfast () {
//        this.$router.push({name: 'Breakfast'})
//      },
//      GoLunch () {
//        this.$router.push({name: 'Lunch'})
//      }
//    },
    mounted () {
      // 进入页面的钩子函数
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
    bottom:50%;
    line-height:40px;
    padding-right: 20px;
    font-size:28px;
    color: #000;
  }
  .me_show li:nth-child(2){
    position: absolute;
    left: 0;
    bottom:15%;
    font-size:18px;
    color: #000;
  }
  .me_show li:last-child{
    position: absolute;
    right: 0;
    bottom:15%;
    padding-right: 5%;
    font-size:15px;
    color: #ffffff;
  }
</style>
