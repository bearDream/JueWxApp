<template>
  <div>
  <div>
    <scroller enable-horizontal-swiping=""  :loading="load" >
      <!--<search @on-submit="onSubmit" :auto-fixed="false" v-model="value2" @on-focus="onFocus" @on-cancel="onCancel"></search>--> <!--height="260px"-->
      <swiper :list="list1" :min-moving-distance="20" auto="" style="height: 180px" >
        <div class="theme">方便生活从蕨菜开始</div>
      </swiper>
      <div class="searchdiv">
       <input type="text" style="padding-left: 60px;" placeholder="搜索菜品、用户、商家" class="inputsearch">
       <div class="searchicon"></div>
      </div>
    </scroller>
    <grid>
      <grid-item>
        <div class="icon" v-on:click="GoTakePage" style="background-position: -69px -3px;"></div><p>在线取号</p>
      </grid-item>
      <grid-item>
        <div class="icon" style="background-position: -130px -4px;" v-on:click="GoNutrition" alt=""></div><p>营养价值</p>
      </grid-item>
      <grid-item>
        <div class="icon" style="background-position: -186px -4px;" v-on:click="GoRandom" alt=""></div><p>今天吃啥</p>
      </grid-item>
    </grid>
    <div style="margin: 10px;overflow: hidden;height:40%;" v-for="item in list2" v-on:click="GoArticle(item)">
      <div class="m-img"  :style="{backgroundImage: 'url(' + item.coverImage + ')'}">
        <div class="outer">
          <div class="masker" style="border-radius:3px;width:90%;height:80%;position:absolute;top:10%;left:5%;  backgroundColor:rgba(255,255,255,.5);">
            <div slot="content" class="m-title">
              {{item.title}}
              <br/>
              <divider style="width: 50%;color: #000;margin:auto;padding:0;">{{item.addrase}}</divider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--随机来几个菜-->
  <div>
    <x-dialog hide-on-blur  :dialog-style="{'max-width': '100%',overflow: 'visible', width: '90%', height: '50%', 'background-color': 'transparent'}" v-model="showHideOnBlur"  >
      <div class="img-box" @touchmove='rotation' @touchstart='touchstart' @touchend='touchend' id="Rotation" >
        <img src="../../assets/img/flow.png" style="position: absolute;width: 70%;top: -60px;left: 40px;z-index: 10">
        <div>
          <div class="businesstitle" v-if="dishname1">{{list3[0].dishName}}</div>
          <img :src="list3[0].dishImage" class="l_mid_r l">
        </div>
        <div>
          <div class="businesstitle" v-if="dishname3">{{list3[1].dishName}}</div>
          <img :src="list3[1].dishImage" class="l_mid_r r">
        </div>
        <div>
          <div class="businesstitle" v-if="dishname2">{{list3[2].dishName}}</div>
          <img :src="list3[2].dishImage" class="l_mid_r mid">
        </div>
        <div class="onlyeat">
          <x-button @click="Refresh" mini style="background-color: #E3E3E3;" >不想吃换一批</x-button>
          <x-button @click="GoOrder" mini style="background-color: #E3E3E3;"  >就是它们了</x-button>
        </div>
        <!--<div class="onlyeat" @click="Refresh">不想吃换一批</div>-->
        <!--<div class="onlyeat" @click="Refresh">sdasdasdasdasdasdas</div>-->
      </div>
      <div @click="showHideOnBlur=false"></div>
    </x-dialog>
  </div>
  <div style="height: 50px;width: 100%;"></div>
  </div>
</template>

<script>
  let start = 0
  let end = 0
  import { Divider, Grid, GridItem, Masker, XInput, Scroller, Swiper, Search, Icon, Alert, XDialog, XButton, Group, TransferDomDirective as TransferDom } from 'vux'
  import { mapState } from 'vuex'
//  import { Indicator } from 'mint-ui'
  import banner from '../../assets/images/bg/home1.png'
  import randomdish1 from '../../assets/img/busi1.jpg'
  import randomdish2 from '../../assets/img/busi2.jpg'
  import randomdish3 from '../../assets/img/busi3.jpg'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Masker,
      XInput,
      Scroller,
      Swiper,
      Search,
      Grid,
      GridItem,
      Divider,
      Icon,
      Alert,
      XDialog,
      XButton,
      Group
    },
    created (i) {
      this.i += 1
      console.log(i)
      this.gets()
    },
    computed: mapState([
      'home'
    ]),
    data () {
      return {
        toTake: 'subpage/homeList',
        value2: 'vux',
        showHideOnBlur: false,
        i: 0,
        dishname1: false,
        dishname2: true,
        dishname3: false,
        list1: [{
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&mid=400385458&idx=1&sn=78f6b8d99715384bdcc7746596d88359&scene=19#wechat_redirect',
          img: banner
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&mid=400160890&idx=1&sn=29ef02af25793a11a3f6aec92bfb46c1&scene=19#wechat_redirect',
          img: banner
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&mid=400094682&idx=1&sn=8231a2053b772b2108784fccc254d28c&scene=19#wechat_redirect',
          img: banner
        }],
        list2: [{
          articleId: 1,
          title: '藏在昆明巷子里的北欧小清新咖啡馆',
          addrase: 'by jenny 上海',
          coverImage: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
        }, {
          articleId: 1,
          title: '小翠—— 一个特别"脆"的饭馆',
          addrase: 'by Bubble.yuki from kunmin',
          coverImage: 'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg'
        }, {
          articleId: 1,
          title: '昆明探店——来自pizza爱好者的推荐',
          addrase: 'by Anitalyx tom 昆明',
          coverImage: 'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'
        }],
        list3: [{
          dishId: 1,
          dishName: '麻婆豆腐',
          dishImage: randomdish1,
          businessId: 1
        }, {
          dishId: 2,
          dishName: '青椒炒肉',
          dishImage: randomdish2,
          businessId: 1
        }, {
          dishId: 3,
          dishName: '番茄鸡蛋',
          dishImage: randomdish3,
          businessId: 1
        }
        ]
      }
    },
    methods: {
      Refresh (item) {
        this.item = false
        this.showHideOnBlur = false
        this.GoRandom()
        console.log('换一批')
      },
//      gets () {
//        Indicator.open({
//          text: '加载中...',
//          spinnerType: 'fading-circle'
//        })
//        this.$store.dispatch('getHomes', {
//          params: {
//          }
//        }).then(() => {
//          Indicator.close()
//          if (this.$store.getters.getHomes.code !== -1) {
//            this.$set(this, 'list2', this.$store.getters.getHomes.data.page.list)
//          }
//        })
//      },
      rotation: function (e) {
//        console.log('*****' + e.changedTouches[0].clientX)
//        console.log('xxxxx' + e.changedTouches[0].clientX)
//        let ml = e.changedTouches[0].clientX
//        var img = document.getElementsByClassName('mid')[0]
//        var left = img.clientLeft
//        img.setAttribute(left, e.changedTouches[0].clientX)
//        console.log(document.getElementsByClassName('mid')[0].offsetLeft)
//        document.getElementsByClassName('mid')[0].style.offsetLeft += e.changedTouches[0].clientX - 100 + 'px'
//        this.className('mid').style.left = e.changedTouches[0].clientX - this.className('mid').style.left
//        var start = e.changedTouches[0].clientX
//        var mid = document.getElementsByClassName('mid')[0]
      },
      touchend (e) {
        end = e.changedTouches[0].clientX
        let mid = document.getElementsByClassName('mid')[0]
        let l = document.getElementsByClassName('l')[0]
        let r = document.getElementsByClassName('r')[0]
        if (end > start) {
          mid.className = ''
          mid.classList.add('r')
          l.classList = ''
          l.classList.add('mid')
          r.className = ''
          r.classList.add('l')
          if (this.dishname1 === true) {
            this.dishname3 = true
            this.dishname1 = false
          } else if (this.dishname2 === true) {
            this.dishname1 = true
            this.dishname2 = false
          } else if (this.dishname3 === true) {
            this.dishname2 = true
            this.dishname3 = false
          }
        } else if (end < start) {
          mid.className = ''
          l.classList = ''
          r.className = ''
          mid.classList.add('l')
          l.classList.add('r')
          r.classList.add('mid')
          if (this.dishname1 === true) {
            this.dishname2 = true
            this.dishname1 = false
          } else if (this.dishname2 === true) {
            this.dishname3 = true
            this.dishname2 = false
          } else if (this.dishname3 === true) {
            this.dishname1 = true
            this.dishname3 = false
          }
        } else {
          console.log(123)
//          this.$router.push({name: 'random'})
        }
      },
      touchstart (e) {
        start = e.changedTouches[0].clientX
//        console.log(e.changedTouches[0].clientX)
      },
      load (uuid) {
        const _this = this
        setTimeout(function () {
          _this.$broadcast('pulldown:reset', uuid)
        }, 2000)
      },
      onSubmit (val) {
        this.$vux.toast.show({
          type: '搜索菜品、用户、商家'
        })
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      },
      GoTakePage () {
        this.$router.push({name: 'takepage'})
      },
      GoNutrition () {
        this.$router.push({name: 'nutritionDish'})
      },
      GoRandom () {
        // 获取今天吃啥的数据
        this.$store.dispatch('getRandomDishes', {}).then(() => {
          console.info('..........')
          let data = this.$store.getters.getRandomDishes
          if (data.data.length === 3) {
            this.$set(this, 'list3', data.data)
            console.info(this.$store.getters.getRandomDishes)
          }
        })
        this.showHideOnBlur = true
      },
      GoOrder () {
        this.showHideOnBlur = false
        this.$router.push({name: 'random'})
      },
      GoArticle (item) {
        this.$router.push({name: 'article', params: {articleId: item.articleId}})
      }
    },
    mounted () {
    }
  }
</script>

<style scoped lang="less">
  .icon{
    display:inline-block;
    width:50px;
    height:50px;
    background-image: url("../../assets/img/icon-green.png");
  }
  p{
    color:#59850b;
  }
  .theme{
    width:66%;
    height:35px;
    border:2px solid #fff;
    color:#fff;
    font-size:22px;
    z-index:10;
    position:fixed;
    top:46%;
    left:20%;
    text-align:center;
  }
  .m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
  }
  .outer{
    width: 85%;
    height: 70%;
    position: absolute;
    top: 14%;
    left: 8%;
    border: 2px solid #fff;
    border-radius: 3px;
  }
  .m-title {
    color: #000;
    text-align: center;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
  }
  .m-time {
    font-size: 12px;
    padding-top: 4px;
    border-top: 1px solid #f0f0f0;
    display: inline-block;
    margin-top: 5px;
  }
  a{
    text-align: center;
  }
  .inputsearch{
    color: #4bb94b;
    opacity: .6;
    position: absolute;
    width: 93%;
    right: 2%;
    border-radius: 15px;
    border: none;
    padding: 5px;
    height: 2.4em;
    font-size: 14px;
  }
  .searchdiv{
    position: absolute;
    width:100%;
    text-align: center;
    height: 30px;
    top: 30px;
  }
  .searchicon{
    position:absolute;left: 40px;width:30px;height:30px;
    top:3px;
    background: url("../../assets/img/icon_search.png")no-repeat -48px -108px;
  }
  .img-box{
    position: relative;
    height: 250px;
    width:100%;
    /*overflow: hidden;*/
    background-color: rgba(227,227,227,1);
    border-radius: 5px;
  }
  /*.img-box .l_mid_r{*/
  /*transform: scale(0.8);*/
  /*}*/
  .img-box .mid{
    position: absolute;
    width: 140px;
    height: 140px;
    top: 60px;
    left: 24%;
    z-index: 10;
    transition: all 0.4s;
    transform: scale(1.1);
  }
  .img-box .l{
    position: absolute;
    width: 140px;
    height: 140px;
    top: 60px;
    left: 5%;
    opacity: .5;
    transition: all 0.4s;
    transform: scale(0.8);
  }
  .img-box .r{
    position: absolute;
    width: 140px;
    height: 140px;
    top: 60px;
    left: 45%;
    opacity: .7;
    transition: all 0.4s;
    transform: scale(0.8);
  }
  .businesstitle{
    position: absolute;
    top:15px;
    left: 35%;
    font-size: 20px;
    color: #59850b;
  }
  .onlyeat{
    font-size: 15px;
    color: #59850b;
    position: absolute;
    left: 15%;
    bottom: 5px;
  }
  .show{
    display: block;
  }
</style>
