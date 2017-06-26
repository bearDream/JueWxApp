<template>
  <div>
    <!--<swiper loop auto :list="photo_list" :index="photo_index" @on-index-change="onIndexChange"></swiper>-->
    <swiper loop auto :aspect-ratio="300/800" >
      <swiper-item class="swiper-demo-img swiper-item-image"
                   v-for="(item, index) in photo_list" :key="index">
        <img :src="item" style="width: 100%">
      </swiper-item>
    </swiper>
    <div style="background-color: transparent">
      <div style="position: relative;border-bottom:1px solid #ccc;">
        <div class="a-photo">
          <img :src="list.headImgUrl" style="borderRadius: 50%; width: 70px; height: 70px">
        </div>
        <div>
          <p class="a-name">
            {{list.username}}
          </p>
          <img class="a-img" v-if="list.collectionId === null" v-on:click="collect" src="../../../assets/images/heart_default.png" style="height: 40px; width: 40px; padding: 5px"/>
          <img class="a-img" v-else v-on:click="cancelCollect"  src="../../../assets/images/heart_select.png" style="height: 40px; width: 40px; padding: 5px"/>
          </div>
        <p class="a-name">{{list.username}}</p>
        <i class="a-like" v-if="list.goods === 0" style="background-position:-5px 0;" :style="{backgroundImage:'url(' + list.img + ')'}" @click="addgoods(list,list.sum)"></i>
        <i class="a-like" v-if="list.goods !== 0" style="background-position: -44px 1px;" :style="{backgroundImage:'url(' + list.img + ')'}" @click="addgoods(list,list.sum)"></i>

      </div>
      <div style="position: relative;border-bottom: 1px solid #ddd;">
        <p style="font-size:18px;font-weight:bold;margin:2% 5% 0;text-align:left;">{{list.title}}</p>
        <p style="font-size:14px;text-align:left; margin:1% 5% 0;padding-bottom: 16px;">{{list.content}}</p>
      </div>
      <div style="width: 100%; height: 10px;"></div>
      <div style="position:relative;">
        <i class="a-info" style="background-position:-5px 0;left:4%" :style="{backgroundImage:'url(' + list.laud + ')'}"></i>
        <i style="color:#555;position:absolute;left:13%;margin-top:3%">{{list.praise}}个赞</i>
        <img class="praise-img" v-on:click="praise" src="../../../assets/images/praise_default.png" style="height: 35px; width: 35px; padding: 5px"/>
        <i class="a-info" style="background-position: -66px 0;right:20%" :style="{backgroundImage:'url(' + list.scan + ')'}"></i>
        <i style="color:#555;position:absolute;right:7%;margin-top:3%">12次浏览</i>
        <!--<i class="a-detail" style="margin-top:10%">发布于 {{list.address}}</i>-->
        <i class="a-detail" style="position:absolute;left:28%;margin-top:3%">{{list.addTime}}</i>
      </div>

      <!-- 评论区 -->
      <div style="position: relative;margin-top: 30px;">
        <divider>热评区</divider>
      </div>
      <div v-if="is_show">
        <div v-for="item in commentList" >
          <div class="commentContent" >
            <div class="avatar" :style="{backgroundImage: 'url(' + item.headImgUrl + ')'}"></div>
            <p class="f-name">{{item.username}}</p>
            <p class="f-time">{{item.addTime}}</p>
            <p class="f-title">{{item.content}}</p>
          </div>
        </div>
      </div>
      <div v-else style="text-align: center;">
        <p style="padding: 5px 10px 5px 10px;">还没有人评论呢！快来抢个沙发吧</p>
      </div>

      <div style="position: fixed; bottom: 10px;right: 10px;">
        <img style="border-radius: 50%; width: 40px; height: 40px;" @click="comment" src="../../../assets/images/评论.png"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperItem, Divider, XImg, XButton } from 'vux'
  import { Indicator, Toast } from 'mint-ui'
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
      Divider,
      XImg,
      Toast,
      XButton
    },
    data () {
      return {
        is_show: false,
        articleId: '',
        is_praise: true,
        photo_list: baseList,
        photo_index: 0,
        list: {
          headImgUrl: avatal2,
          username: 'Jenny',
          img: like,
          sum: 0,
          goods: 0, /** 是否点过赞，0代表没有点过 */
          praise: 0,
          sumScan: 12,
          title: '藏在昆明巷子里的北欧小清新咖啡馆',
          content: '意外发现了这家躲在巷子里位置隐蔽但是特别好看的咖啡馆ヾ(o´∀｀o)ﾉ 老板人美态度好，布置精美好看，点了港式奶茶和忘了叫什么名字的甜品。奶茶好喝甜品略微有点酸，但是排出照来很好看啊，在里面拍写真可文艺可网红，也是姐妹聚会赖上一下午的好去处哦~',
          recommend: '#网红美食我来推# #拔草主体咖啡馆# #昆明# #文艺青年聚集地的网红咖啡馆# #少女心爆棚的高颜值咖啡馆#',
          laud: info,
          scan: info,
          address: '昆明市 金星路',
          addTime: '2017-05-28'
        },
        commentList: []
      }
    },
    mounted () {
      if (this.$route.params.articleId === '' || this.$route.params.articleId === undefined) {
        this.$router.go(-1)
      }
      this.articleId = this.$route.params.articleId
      this.get()
      this.getComment()
    },
    methods: {
      get () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'triple-bounce'
        })
        this.$store.dispatch('getArticle', {
          uri: '/get?articleId=' + this.articleId
        }).then(() => {
          Indicator.close()
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
      getComment () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'triple-bounce'
        })
        this.$store.dispatch('getEvaluates', {
          params: {
            objectId: this.articleId,
            evaluateType: 3
          }
        }).then(() => {
          Indicator.close()
          console.info(this.$store.getters.getEvaluates)
          let data = this.$store.getters.getEvaluates
          if (data.code !== -1) {
            this.is_show = true
            for (let i = 0; i < data.data.length; i++) {
              data.data[i].addTime = time.getDate(data.data[i].addTime)
            }
            this.$set(this, 'commentList', data.data)
          } else {
            this.is_show = false
            console.info('没人评价')
          }
        })
      },
      onIndexChange (index) {
        this.photo_index = index
      },
      addgoods (item, sum) {
        if (sum >= 1) {
          item.goods = 0
          item.sumScore -= 1
          item.sum -= 1
          item.praise -= 1
        } else {
          item.goods = 1
          item.sumScore += 1
          item.sum += 1
          item.praise += 1
        }
      },
      cancelCollect () {
        this.$store.dispatch('cancelCollections', {
          params: {
            collectionId: this.list.collectionId
          }
        }).then(() => {
          this.get()
          Toast('取消收藏成功')
        })
      },
      collect () {
        this.$store.dispatch('setCollections', {
          data: {
            businessDishId: this.list.articleId,
            collectionType: 3
          }
        }).then(() => {
          this.get()
          Toast('收藏成功')
        })
      },
      praise () {
        if (!this.is_praise) {
          Toast('你已点过赞了，不可以重复点赞哦')
          return
        }
        this.$store.dispatch('updateArticle', {
          data: {
            articleId: this.list.articleId,
            praise: 1
          }
        }).then(() => {
          this.get()
          this.is_praise = false
          Toast('点赞成功')
        })
      },
      comment () {
        this.$router.push({name: 'comments', params: {articleId: this.articleId, praise: this.list.praise}})
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
    font-size:14pt;
    position: absolute;
    top:33%;
    left:28%;
  }
  .a-img{
    display:inline-block;
    font-size:14pt;
    position: absolute;
    top:33%;
    right:5%;
  }
  .praise-img{
    display:inline-block;
    font-size:14pt;
    position: absolute;
    left:3%;
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
  .content {
    background-color: #fff;
    overflow: scroll ;padding:2% 2%; height:auto;
    position: relative;border-top: 1px solid #e9e9e9
  }
  .avatar{
    display: inline-block;
    width:50px;
    height: 50px;
    border-radius: 50%;
    padding-bottom:15%;
  }
  .f-name{
    position: absolute;
    top:10px;
    left:20%;
    display:inline-block;
    font-size:16px;
    color:#777;
  }
  .f-time{
    position: absolute;
    top:33px;
    left:20%;
    font-size:12px;
    color:#777;
  }
  .f-title{
    font-size:14px;
    margin-top: -10px;
    margin-left:18%;
    margin-right: 10%;
    color:#666;
  }
  .commentContent {
    background-color: #fff;
    overflow: scroll ;padding:2% 2%; height:auto;
    position: relative;border-top: 1px solid #e9e9e9
  }
</style>
