<template>
  <div style="">

    <blur :blur-amount=0 :url="url" style="height:260px">

      <div style="border-radius: 2px;width: 100%">
        <div class="m-buttom" >营养价值分析</div>
        <div class="m-buttom1"></div>
        <ul class="me_show">
          <li><p>{{attentions}}</p></li>
          <li @click="GoRankingList"><p>{{editedate}}</p></li>
        </ul>
      </div>
    </blur>
    <div @click="GoFruit" >
      <panel :list="list1">
      </panel>
    </div>
    <div @click="GoBreakfast">
      <panel :list="list2">
      </panel>
    </div>
    <div @click="GoLunch">
      <panel :list="list3">
      </panel>
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Blur, Masker, Group, Grid, GridItem, Cell, Panel } from 'vux'
  import img from '../../assets/img/7.png'
  import img1 from '../../assets/img/8.png'
  import img2 from '../../assets/img/9.png'
  import img3 from '../../assets/img/10.png'
  import { mapState } from 'vuex'
  export default {
    components: {
      Blur,
      Flexbox,
      FlexboxItem,
      Masker,
      Group,
      Grid,
      GridItem,
      Cell,
      Panel
    },
    data () {
      return {
        toTake: 'subpage/rankingList',
        list1: [{
          src: img1,
          title: 'NO.1',
          desc: '水果紫米粥'
        }],
        list2: [{
          src: img2,
          title: 'NO.2',
          desc: '营养*早餐'
        }],
        list3: [{
          src: img3,
          title: 'NO.3',
          desc: '爱心*午餐'
        }],
        url: img,
        attentions: '营养菜品排行',
        editedate: '点击了解详情'
      }
    },
    methods: {
      GoRankingList () {
        this.$router.push({name: 'RankingList'})
      },
      GoFruit () {
        this.$router.push({name: 'Fruit'})
      },
      GoBreakfast () {
        this.$router.push({name: 'Breakfast'})
      },
      GoLunch () {
        this.$router.push({name: 'Lunch'})
      }
    },
    mounted () {
      // 进入页面的钩子函数
    },
    computed: mapState([
      'ranking'
    ])
  }
</script>

<style scoped>
  .m-buttom {
    display: block;
    position: absolute;
    width: 40%;
    margin-left: 30%;
    cursor: pointer;
    border-radius: 2px;
    height: 25%;
    background: #f3f3f5;
    opacity: 0.5;
    top:35%;
    margin-bottom: 25%;
    text-align: center;
    line-height: 60px;
    color: #000;
    font-size:20px;
    font-weight: bold;
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
  }
  .me_show li:nth-child(1){
    line-height:40px;
    padding-right: 20px;
    font-size:20px;
  }
  .me_show li:last-child{
    position: absolute;
    right: 0;
    line-height:40px;
    padding-right: 20px;
    font-size:15px;
  }
</style>
