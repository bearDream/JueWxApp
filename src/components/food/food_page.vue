<template>
  <div style="background-color: #f2f2f2;">
    <divider style="margin-top:12%;font-size:16px;background-color: #fff;">看看大家都在吃什么</divider>
      <div v-for="(item,index) in list">
        <div style="background-color: #fff;padding:2% 2%;position: relative;">
          <div class="avatar" :style="{backgroundImage: 'url(' + item.avatar + ')'}"></div>
          <p class="f-name">{{item.name}}</p>
          <p class="f-time">{{item.time}}</p>
          <p class="f-title">{{item.title}}</p>
          <rater v-model="data1" slot="value" star="♡" :max="1" active-color="#59850b" style="position: absolute;top:5%;left:88%;" :font-size="40"></rater>
          <div class="photo">
            <img :src="item.img1">
            <img :src="item.img2">
            <img :src="item.img3">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import { Divider, Rater } from 'vux'
  import { mapState } from 'vuex'
  import ava from '../../assets/img/avatar1.png'
  import food1 from '../../assets/img/food1.png'
  import food2 from '../../assets/img/food2.png'
  import food3 from '../../assets/img/food3.png'

  export default {
    components: {
      Divider,
      Rater
    },
    created () {
    },
    computed: mapState([
      'food'
    ]),
    data () {
      return {
        list: [{
          avatar: ava,
          name: '蕨菜团队',
          time: '2017-5-26',
          title: '好的食物应该大家分享，今天的美食推荐给大家~',
          img1: food1,
          img2: food2,
          img3: food3,
          title1: '营养早餐',
          title2: '美味烧烤',
          title3: '鱼片寿司'
        }, {
          avatar: ava,
          name: '蕨菜团队',
          time: '2017-5-26',
          title: '好的食物应该大家分享，今天的美食推荐给大家~',
          img1: food1,
          img2: food2,
          title1: '营养早餐',
          title2: '美味烧烤'
        }],
        data1: 0
      }
    },
    methods: {
//      gets () {
//        this.$store.dispatch('getBusinessList', {
//          params: {
//          }
//        })
//      }
      load (uuid) {
        const _this = this
        setTimeout(function () {
          _this.$broadcast('pulldown:reset', uuid)
        }, 2000)
      }
    },
    mounted () {
      // 进入页面的钩子函数
    }
  }
</script>

<style scoped lang="less">
  .avatar{
    display: inline-block;
    width:15%;
    border-radius: 50%;
    padding-bottom:15%;
  }
  .f-name{
    position: absolute;
    top:4%;
    left:20%;
    display:inline-block;
    font-size:18px;
    color:#777;
  }
  .f-time{
    position: absolute;
    top:4%;
    left:65%;
    font-size:14px;
    color:#777;
  }
  .f-title{
    position: absolute;
    font-size:12px;
    top:20%;
    left:20%;
    color:#666;
  }
  .photo{
    width: 100%;
  }
  .photo img{
    width: 30%;
    margin-top:1%;
    margin-left:2%;
  }
</style>
