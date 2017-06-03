<template>
  <div>
    <swiper loop auto :list="photo_list" :index="photo_index" @on-index-change="onIndexChange"></swiper>
    <div v-for="item in list">
      <div style="position: relative;border-bottom:1px solid #ccc">
        <div class="a-photo" :style="{backgroundImage:'url(' + item.ava + ')'}"></div>
        <p class="a-name">{{item.name}}</p>
        <i class="a-like" v-show="item.bad" style="background-position:-6px 0;" :style="{backgroundImage:'url(' + item.img + ')'}" @click="addgoods(item,item.sum)"></i>
        <i class="a-like" v-show="item.goods" style="background-position: -45px 0;" :style="{backgroundImage:'url(' + item.img + ')'}" @click="addgoods(item,item.sum)"></i>
      </div>
      <div style="position: relative;border-bottom: 1px solid #ddd;min-height:240px;">
        <p style="font-size:18px;font-weight:bold;margin:2% 5% 0;text-align:left;">{{item.title}}</p>
        <p style="font-size:14px;text-align:left;margin:1% 5% 0;">{{item.content}}</p>
        <p style="font-size:14px;text-align:left;margin:3% 5% 0;color:#59850b">{{item.recommend}}</p>
      </div>
      <div style="position:relative;">
        <i class="a-info" style="background-position:-5px 0;left:4%" :style="{backgroundImage:'url(' + item.laud + ')'}"></i>
        <i style="color:#555;position:absolute;left:13%;margin-top:3%">{{item.sumScore}}个赞</i>
        <i class="a-info" style="background-position: -66px 0;right:20%" :style="{backgroundImage:'url(' + item.scan + ')'}"></i>
        <i style="color:#555;position:absolute;right:7%;margin-top:3%">{{item.sumScan}}次浏览</i>
        <!--<i class="a-detail" style="margin-top:10%">发布于 {{item.address}}</i>-->
        <i class="a-detail" style="margin-top:20%">{{item.addtime}}</i>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper, Divider } from 'vux'
  import { mapState } from 'vuex'
  import photo from '../../../assets/img/carousel1.png'
  import avatal2 from '../../../assets/img/ava.png'
  import like from '../../../assets/img/user-icon.png'
  import info from '../../../assets/img/info-icon.png'

  const baseList = [{
    img: photo
  }, {
    img: photo
  }, {
    img: photo
  }, {
    img: photo
  }, {
    img: photo
  }, {
    img: photo
  }]

  const urlList = baseList.map((item, index) => ({
    img: item.img
  }))

  export default {
    components: {
      Swiper,
      Divider
    },
    data () {
      return {
        photo_list: urlList,
        photo_index: 0,
        list: [{
          ava: avatal2,
          name: 'Jenny',
          goods: false,
          img: like,
          bad: true,
          sum: 0,
          sumScore: 0,
          sumScan: 0,
          title: '藏在昆明巷子里的北欧小清新咖啡馆',
          content: '意外发现了这家躲在巷子里位置隐蔽但是特别好看的咖啡馆ヾ(o´∀｀o)ﾉ 老板人美态度好，布置精美好看，点了港式奶茶和忘了叫什么名字的甜品。奶茶好喝甜品略微有点酸，但是排出照来很好看啊，在里面拍写真可文艺可网红，也是姐妹聚会赖上一下午的好去处哦~',
          recommend: '#网红美食我来推# #拔草主体咖啡馆# #昆明# #文艺青年聚集地的网红咖啡馆# #少女心爆棚的高颜值咖啡馆#',
          laud: info,
          scan: info,
          address: '昆明市 金星路',
          addtime: '2017-05-28'
        }]
      }
    },
    mounted () {},
    methods: {
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
    width:22%;
    min-height:84px;
    margin-top:3%;
    margin-left:3%;
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
</style>
