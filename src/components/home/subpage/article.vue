<template>
  <div>
    <!--<swiper loop auto :list="photo_list" :index="photo_index" @on-index-change="onIndexChange"></swiper>-->
    <swiper loop auto :aspect-ratio="300/800" >
      <swiper-item class="swiper-demo-img swiper-item-image" v-for="(item, index) in photo_list" :key="index"><img :src="item" style="width: 100%"></swiper-item>
    </swiper>
    <div >
      <div style="position: relative;border-bottom:1px solid #ccc">
        <div class="a-photo" style="border-radius: 200px">
          <img :src="list.headImgUrl" style="width: 100%">
        </div>
        <p class="a-name">{{list.username}}</p>
        <i class="a-like" v-show="list.bad" style="background-position:-6px 0;" :style="{backgroundImage:'url(' + list.img + ')'}" @click="addgoods(list,list.sum)"></i>
        <i class="a-like" v-show="list.goods" style="background-position: -45px 0;" :style="{backgroundImage:'url(' + list.img + ')'}" @click="addgoods(list,list.sum)"></i>
      </div>
      <div style="position: relative;border-bottom: 1px solid #ddd;min-height:240px;">
        <p style="font-size:18px;font-weight:bold;margin:2% 5% 0;text-align:left;">{{list.title}}</p>
        <p style="font-size:14px;text-align:left;margin:1% 5% 0;">{{list.content}}</p>
        <p style="font-size:14px;text-align:left;margin:3% 5% 0;color:#59850b">{{list.recommend}}</p>
      </div>
      <div style="position:relative;">
        <i class="a-info" style="background-position:-5px 0;left:4%" :style="{backgroundImage:'url(' + list.laud + ')'}"></i>
        <i style="color:#555;position:absolute;left:13%;margin-top:3%">{{list.praise}}个赞</i>
        <i class="a-info" style="background-position: -66px 0;right:23%" :style="{backgroundImage:'url(' + list.scan + ')'}"></i>
        <i style="color:#555;position:absolute;right:7%;margin-top:3%">12次浏览</i>
        <!--<i class="a-detail" style="margin-top:10%">发布于 {{list.address}}</i>-->
        <i class="a-detail" style="margin-top:20%">{{list.addTime}}</i>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperItem, Divider } from 'vux'
  import { mapState } from 'vuex'
  import avatal2 from '../../../assets/img/ava.png'
  import like from '../../../assets/img/user-icon.png'
  import info from '../../../assets/img/info-icon.png'
  import time from '../../../utils/helpers/timeLite'

  const baseList = [
    'https://static.vux.li/demo/1.jpg',
    'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffee',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/aaffff'
  ]

  export default {
    components: {
      Swiper,
      SwiperItem,
      Divider
    },
    data () {
      return {
        articleId: '',
        photo_list: baseList,
        photo_index: 0,
        list: {
          headImgUrl: avatal2,
          username: 'Jenny',
          goods: false,
          img: like,
          bad: true,
          sum: 0,
          praise: 0,
          sumScan: 12,
          title: '藏在昆明巷子里的北欧小清新咖啡馆',
          content: '意外发现了这家躲在巷子里位置隐蔽但是特别好看的咖啡馆ヾ(o´∀｀o)ﾉ 老板人美态度好，布置精美好看，点了港式奶茶和忘了叫什么名字的甜品。奶茶好喝甜品略微有点酸，但是排出照来很好看啊，在里面拍写真可文艺可网红，也是姐妹聚会赖上一下午的好去处哦~',
          recommend: '#网红美食我来推# #拔草主体咖啡馆# #昆明# #文艺青年聚集地的网红咖啡馆# #少女心爆棚的高颜值咖啡馆#',
          laud: info,
          scan: info,
          address: '昆明市 金星路',
          addTime: '2017-05-28'
        }
      }
    },
    mounted () {
      if (this.$route.params.articleId === '' || this.$route.params.articleId === undefined) {
        this.$router.go(-1)
      }
      this.articleId = this.$route.params.articleId
      this.get()
    },
    methods: {
      get () {
        this.$store.dispatch('getArticle', {
          uri: '/get?articleId=' + this.articleId
        }).then(() => {
          console.info(this.$store.getters.getArticle)
          let data = this.$store.getters.getArticle
          if (data.code !== -1) {
            console.info(data.data.recImage)
            this.$set(this, 'photo_list', data.data.recImage.split(','))
            this.$set(this, 'list', data.data)
            this.$set(this.list, 'addTime', time.getDate(data.data.addTime))
          }
        })
      },
      onIndexChange (index) {
        this.photo_index = index
      },
      addgoods (item, sum) {
        if (sum >= 1) {
          item.goods = false
          item.bad = true
          item.sumScore -= 1
          item.sum -= 1
        } else {
          item.goods = true
          item.bad = false
          item.sumScore += 1
          item.sum += 1
        }
      }
    },
    computed: mapState([
      'ranking'
    ])
  }
</script>

<style scoped>
  .a-photo{
    display:inline-block;
    width:80px;
    height:80px;
    margin-top:3%;
    margin-left:3%;
    overflow: hidden;
  }
  .a-name{
    display:inline-block;
    font-size:28px;
    position: absolute;
    top:33%;
    left:28%;
  }
  .a-like{
    position: absolute;
    width:10%;
    height:30px;
    top:35%;
    right:5%;
  }
  .a-info{
    position:absolute;
    width:10%;
    height:30px;
  }
  .a-detail{
    font-size:12px;
    color:#555;
    position:absolute;
    left:5%;
  }
  .swiper-item-image{
    width: 100%;
    height: 80%;
  }
</style>
