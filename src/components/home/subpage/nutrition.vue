<template>
  <div>
    <x-header v-on:click="$router.back()">营养价值</x-header>
    <blur :blur-amount=0 :url="url" style="height:260px">

      <div style="border-radius: 2px;width: 100%">
        <div class="m-buttom" >营养价值分析</div>
        <div class="m-buttom1"></div>
        <ul class="me_show">
          <li><p>{{attentions}}</p></li>
          <li @click="GonutritionDetail"><p>{{editedate}}</p></li>
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
  import { XHeader, Flexbox, FlexboxItem, Blur, Masker, Group, Grid, GridItem, Cell, Panel } from 'vux'
  import img from '../../../assets/images/7.png'
  import img1 from '../../../assets/images/8.png'
  import img2 from '../../../assets/images/9.png'
  import img3 from '../../../assets/images/10.png'
  import { mapState } from 'vuex'
  export default {
    components: {
      XHeader,
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
        // 修改panel源码文件来更改字段名
        list: [{
          dishImage: img1,
          title: 'NO.1',
          dishName: '水果紫米粥'
        }, {
          dishImage: img2,
          title: 'NO.2',
          dishName: '营养*早餐'
        }, {
          dishImage: img3,
          title: 'NO.3',
          dishName: '营养*早餐'
        }],
        url: img,
        attentions: '营养菜品排行',
        editedate: '点击了解详情'
      }
    },
    methods: {
      GonutritionDetail () {
        this.$router.push({name: 'NutritionDetail'})
      },
      GoFruit () {
        this.$router.push({name: 'Fruit'})
      },
      GoBreakfast () {
        this.$router.push({name: 'Breakfast'})
      },
      GoLunch () {
        this.$router.push({name: 'Lunch'})
      },
      gets () {
        this.$store.dispatch('getRankings', {
          params: {
          }
        }).then(() => {
          if (this.$store.getters.getRankings.code !== -1) {
            console.info(this.$store.getters.getRankings.data.page.list)
            this.$set(this, 'list', this.$store.getters.getRankings.data.page.list)
          }
        })
      }
    },
    mounted () {
      // 进入页面的钩子函数
    },
    computed: mapState([
      'ranking'
    ]),
    created () {
      this.gets()
    },
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
