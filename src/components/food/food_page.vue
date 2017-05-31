<template>
  <div   @touchstart="getY" @touchend="getMore">
      <load-more  v-if="loadmore" tip="正在加载"></load-more>
      <divider style="margin-top:12%;font-size:16px;background-color: #fff;">看看大家都在吃什么</divider>
      <div v-for="item in list">
        <div  style="background-color: #fff;padding:2% 2%;overflow: hidden;height: 200px;position: relative;">
          <div class="avatar" :style="{backgroundImage: 'url(' + item.avatar + ')'}"></div>
          <p class="f-name">{{item.name}}</p>
          <p class="f-time">{{item.time}}</p>
          <p class="f-title">{{item.title}}</p>
          <rater v-model="item.data1" slot="value" star="♡"  :click="togoods" :max="1" active-color="red" style="position: absolute;top:1%;left:88%;" :font-size="35"></rater>
          <div class="photo3" v-for="i in item.img" v-if="item.img.length===3">
            <img :src="i.img">
          </div>
          <div class="photo2" v-for="i in item.img" v-if="item.img.length===2">
            <img :src="i.img">
          </div>
          <div class="photo4" v-for="i in item.img" v-if="item.img.length===4">
            <img :src="i.img">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  let startY = 0
  let endY = 0
  import { Divider, Rater, LoadMore } from 'vux'
  import { mapState } from 'vuex'
  import ava from '../../assets/img/avatar1.png'
  import food1 from '../../assets/img/food1.png'
  import food2 from '../../assets/img/food2.png'
  import food3 from '../../assets/img/food3.png'

  export default {
    components: {
      Divider,
      Rater,
      LoadMore
    },
    created () {
    },
    computed: mapState([
      'food'
    ]),
    data () {
      return {
        loadmore: false,
        list: [{
          avatar: ava,
          name: '蕨菜团队',
          time: '2017-5-26',
          title: '好的食物应该大家分享，今天的美食推荐给大家~',
          img: [{
            img: food1}, {
              img: food2}, {
                img: food3
              }
          ],
          data1: 0,
          title1: '营养早餐',
          title2: '美味烧烤',
          title3: '鱼片寿司'
        }, {
          avatar: ava,
          name: '蕨菜团队',
          time: '2017-5-26',
          title: '好的食物应该大家分享，今天的美食推荐给大家~',
          img: [{
            img: food1}, {
              img: food2}
          ],
          data1: 0,
          title1: '营养早餐',
          title2: '美味烧烤'
        }, {
          avatar: ava,
          name: '蕨菜团队',
          time: '2017-5-26',
          title: '好的食物应该大家分享，今天的美食推荐给大家~',
          img: [{
            img: food1}, {
              img: food2}, {
                img: food3
              }
          ],
          data1: 0,
          title1: '营养早餐',
          title2: '美味烧烤',
          title3: '鱼片寿司'
        }, {
          avatar: ava,
          name: '蕨菜团队',
          time: '2017-5-26',
          title: '好的食物应该大家分享，今天的美食推荐给大家~',
          img: [{
            img: food1}, {
              img: food2}
          ],
          data1: 0,
          title1: '营养早餐',
          title2: '美味烧烤'
        }, {
          avatar: ava,
          name: '蕨菜团队',
          time: '2017-5-26',
          title: '好的食物应该大家分享，今天的美食推荐给大家~',
          img: [{
            img: food1}, {
              img: food2}, {
                img: food3}, {
                  img: food2}
          ],
          data1: 0,
          title1: '营养早餐',
          title2: '美味烧烤'
        }]
      }
    },
    methods: {
//      gets () {
//        this.$store.dispatch('getBusinessList', {
//          params: {
//          }
//        })
//      }
      getY (e) {
        startY = e.changedTouches[0].clientY
      },
      getMore (e) {
        endY = e.changedTouches[0].clientY
        if (startY < endY) {
          this.loadmore = true
          console.log('加载中')
        }
      },
      togoods () {
        this.data1 = 1
      },
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
  .photo3{
    width: 100%;
  }
  .photo3 img{
    width: 30%;
    float: left;
    margin-top:1%;
    margin-left:3%;
  }
  .photo2{
    width: 100%;
  }
  .photo2 img{
    width: 45%;
    float: left;
    margin-top:1%;
    margin-left:3%;
  }
  .photo4{
    width: 100%;
  }
  .photo4 img{
    width: 20%;
    float: left;
    margin-top:1%;
    margin-left:3%;
  }
</style>
