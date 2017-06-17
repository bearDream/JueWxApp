<template>
  <div style="">
    <x-header :left-options="{backText: ''}" style="background: transparent;position: fixed;" v-on:click="$router.back()"></x-header>
    <div v-show="showPage">
      <blur :blur-amount=0 :url="url" style="height:180px;">
        <div style="position:relative;min-height:180px;"  >
          <div class="m-img"  :style="{backgroundImage: 'url(' + headImgUrl + ')'}"></div>
          <p style="position:absolute;font-size:20px;top:58%;left:5%;">{{username}}</p>
          <p style="position:relative;">
            <i class="re-address"></i>
            <i style="position:absolute;font-size:14px;font-weight:bold;left:13%;margin-top:43%">{{address}}</i>
         </p>
          <!--<div style="position:absolute;width:60%;min-height:80px;bottom:2%;right:2%">-->
            <span class="me_show">
                发布{{release}}
            </span>
          <!--</div>-->
        </div>
      </blur>
      <div class="body"style="width: 100%;">我的食话</div>
      <div class="foture" v-for="item in list1">
        <img :src="item.recImage"  v-on:click="GoArticle(item.articleId)">
        <p style="text-align: left">{{ item.title }}</p>
        <i style="background-position: 0 -1px;" v-show="item.bad" @click="addgoods(item,item.sum)"></i>
        <i style="background-position: -30px -0px;" v-show="item.good" @click="addgoods(item,item.sum)"></i>
         <a>{{item.sumScore}}</a>
      </div>
    </div>
    <div v-show="!showPage" style="background-color: white;">
      <div style="">
        <p style="align: center;text-align: center;margin-top: 10px;padding-top: 10px;">
          <img src="../../../assets/images/哭脸.png" style="width: 30px;vertical-align: bottom;"/>
          暂时还没有发布任何食话食说图文哦
        </p>
        <div style="padding-left: 20px; padding-right: 20px;margin-top: 100px;">
          <x-button style="margin-top: 10px; " type="primary" @click.native="GoPost">发表</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XHeader, XButton, Flexbox, FlexboxItem, Blur, Masker, Group, Cell, Panel } from 'vux'
  import { Indicator, Toast } from 'mint-ui'

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
      Panel,
      XButton,
      Indicator,
      Toast
    },
    data () {
      return {
        showPage: false,
        bad: false,
        good: false,
        headImgUrl: img1,
        username: '小蕨',
        address: '云南 昆明',
        list1: [{
          articleId: 1,
          recImage: img2,
          title: '藏在昆明小巷子的小清新咖啡馆sdfsdfsdfssdf,藏在昆明小巷子的小清',
          sumScore: 0,
          bad: true,
          sum: 0
        }, {
          articleId: 2,
          recImage: img3,
          title: '昆明网红简约咖啡馆',
          sumScore: 4,
          bad: true,
          sum: 0
        }, {
          articleId: 3,
          recImage: img4,
          title: '这是一个来自pizza爱好者的推荐',
          sumScore: 0,
          bad: true,
          sum: 0
        }, {
          articleId: 4,
          recImage: img5,
          title: '藏在转交的咖啡店',
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
    mounted () {
      this.gets()
    },
    methods: {
      gets () {
        Indicator.open({
          text: '小蕨努力加载中...',
          spinnerType: 'snake'
        })
        this.$store.dispatch('getOwnArticles', {
          uri: 'own'
        }).then(() => {
          Indicator.close()
          console.info(this.$store.getters.getArticles)
          let data = this.$store.getters.getArticles
          if (data.code !== -1) {
            data = data.data
            if (data.length === 0) {
              // 显示友好提示用户没有发布任何内容
              this.showPage = false
            } else {
              this.showPage = true
              this.list1 = data
              this.release = data.length
              this.headImgUrl = data[0].headImgUrl
              this.username = data[0].username
            }
          }
        })
      },
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
      GoArticle (articleId) {
        this.$router.push({name: 'article', params: {articleId: articleId}})
      },
      GoPost () {
        this.$router.push({name: 'postArticle'})
      }
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
    top:20%;
    left:5%;
  }
  .re-address{
    margin-top:38%;
    margin-left:5%;
    display: inline-block;
    width:25px;
    height:35px;
    background: url("../../../assets/img/re-icon.png") no-repeat -56px 10px;
  }
  .me_show{
    display: inline-block;
    position: absolute;
    bottom: 20px;
    right: 20px;
    color:#7d7e83;
  }
  .foture {
    display: inline-block;
    position: relative;
    /*顶部对齐*/
    vertical-align: top;
    width:42%;
    font-size: 15px;
    margin:4%;
    min-height:180px;
  }
  .foture img{
    width: 100%;
  }
  .foture p{
    width:100%;
    top: 82%;
    overflow:hidden;
  }
  .foture i{
    padding-right:30px;
    padding-bottom: 27px;
    /*position: absolute;*/
    /*top: 90%;*/
    /*right: 10%;*/
    /*width:30px;*/
    /*height:25px;*/
    position: absolute;
    display: inline-block;
    right: 13%;
    bottom:-20px;
    background-image: url("../../../assets/img/re-icon.png");
  }
  .foture a{
    position: absolute;
    /*top: 92%;*/
    right: 2%;
    display: inline-block;
    color: #5b5b5d;
    /*margin-left: -7px;*/
    font-size:18px;
    bottom:-20px;
  }
  .body{
   text-align: center;
    font-size:26px;
  }

</style>
