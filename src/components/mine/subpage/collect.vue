<template>
  <div>
    <x-header :left-options="{backText: ''}" style="background: transparent;position: fixed;" v-on:click="$router.back()"></x-header>
    <div class="card-demo-flex card-demo-content">
      <div >
        <group>
          <cell title="商家" is-link
                :border-intent="false"
                :arrow-direction="showContent001 ? 'up' : 'down'"
                @click.native="showBusiness">
          </cell>
        </group>
      </div>
      <div >
        <group>
          <cell
            title="菜品"
            is-link
            :border-intent="false"
            :arrow-direction="showContent002 ? 'up' : 'down'"
            @click.native="showDish"></cell>
        </group>
      </div>
      <div>
        <group>
          <cell
            title="文章"
            is-link
            :border-intent="false"
            :arrow-direction="showContent003 ? 'up' : 'down'"
            @click.native="showArticle"></cell>
        </group>
      </div>
    </div>


    <div v-show="is_showContent">
    <!-- 收藏商家页 -->
    <template v-if="showContent001" style="position: fixed">
      <!--<scroller enable-horizontal-swiping=""  :loading="load" >-->
        <swiper :list="list0" :min-moving-distance="20" auto="" style="height:200px;margin: 15px">
        </swiper>
      <!--</scroller>-->
      <p class="B-text">【美味大数据】今天你挑哪家？</p>
      <hr>
      <div style=" position: relative;margin: 10px;overflow: hidden; width: 43%;float: left;height: 150px;" v-for="item in list1">
        <div class="m-img1" :style="{backgroundImage: 'url(' + item.businessImage + ')'}"></div>
          <div slot="content" class="m-title" > </div>
            <p class="m-title">{{item.name}}</p>
      </div>
     </template>

    <!-- 收藏菜品页 -->
    <template  v-if="showContent002" style="position: fixed">
        <!--<swiper :list="list01" :min-moving-distance="100" auto="" height="230px" style="height:230px;margin: 15px 15px 0 15px ">-->
        <!--</swiper>-->
      <swiper loop auto :list="list01"
              :index="list01"></swiper>
　　

      <div style=" position: relative;margin:  21px -8px 13px 13px;overflow: hidden; width: 28%;float: left;height: 140px;" v-for="item in list2" @click="GoDish(item)">
        <!--<p class="F-date">{{item.date}}</p>-->
        <div class="m-img" :style="{backgroundImage: 'url(' + item.dishRecImage + ')'}"></div>
        <div class="m-img"><span v-text="item.dishName"></span></div>
        <div slot="content" class="m-title" ></div>
      </div>

    </template>

    <!-- 收藏文章页 -->
    <template v-if="showContent003">
      <div>
        <scroller enable-horizontal-swiping=""  :loading="load" >
          <swiper :list="list02" :min-moving-distance="20" auto="" style="height:200px;margin: 15px 15px 0 15px ">
          </swiper>
        </scroller>
        <!--11111111111111111-->
        <div class="article" v-for="item in list3">
          <div class="takeSorting">
            <div class="sortingl" :style="{backgroundImage: 'url(' + item.articleUserAvatar + ')'}"></div>
            <div class="sortingr">
              <span class="T-title">{{item.articleUsername}}</span>
              <span class="T-type">{{item.articleContent}}</span>
              <div  class="comment" >
                <p class="add-add2">{{item.articleAddTime}}</p>
                <div style="display:inline-block;float: right;margin-right: 15px">
                  <img :src="comentb" class="comment-img">
                  <a class="comment-text" @click="showcomment (item)">{{item.comment}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    </div>
    <!-- 用户没有收藏则不显示 -->
    <div v-show="!is_showContent">
      <p style="align: center;text-align: center;margin-top: 10px;">
        <img src="../../../assets/images/哭脸.png" style="width: 30px;vertical-align: bottom;"/>
        您还没有收藏过内容呢
      </p>
    </div>
  </div>

</template>

<script>
  import { Swiper, Scroller, FlexboxItem, Flexbox, Divider, CellBox, Card, Masker, XHeader, TransferDom, Group, Cell, Panel, Rater, Badge } from 'vux'
  import img2 from '../../../assets/images/B1-2.png'
  import img3 from '../../../assets/images/B1-3.png'
  import img4 from '../../../assets/images/B1-5.png'
  import img5 from '../../../assets/images/B1-4.png'
  import img1 from '../../../assets/images/B1-1.png'
  import img6 from '../../../assets/images/F2-1.png'
  import img7 from '../../../assets/images/F2-2.png'
  import img8 from '../../../assets/images/F2-3.png'
  import img9 from '../../../assets/images/F2-4.png'
  import img10 from '../../../assets/images/F2-5.png'
  import img11 from '../../../assets/images/F2-6.png'
  import img12 from '../../../assets/images/F2-7.png'
  import img13 from '../../../assets/images/T3-1.png'
  import img14 from '../../../assets/images/T3-2.png'
  import img15 from '../../../assets/images/T3-3.png'
  import img16 from '../../../assets/images/comment.jpg'
  import img17 from '../../../assets/img/commentsb.png'
  import time from '../../../utils/helpers/timeLite'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Masker,
      XHeader,
      Group,
      Cell,
      Card,
      CellBox,
      Panel,
      Rater,
      Badge,
      Divider,
      Flexbox,
      FlexboxItem,
      Scroller,
      Swiper,
      first: {
        template: '<p>电话1{{tel}}</p>'
      },
      second: {
        template: '<p>电话2}</p>'
      },
      third: {
        template: '<p>电话3}</p>'
      }
    },
    data () {
      return {
        is_showContent: true,
        showContent001: false,
        showContent002: false,
        showContent003: false,
        commentimg: img16, /** 评论显示的小图片 */
        comentb: img17,
        tel: 1232132,
        value2: 'vux',
        list0: [{
          url: '../../../assets/images/B1-1.jpg',
          img: img1
        }, {
          url: '../../../assets/images/B1-1.png',
          businessImage: img1
        }],
        list01: [{
          url: '../../../assets/images/F2-1.jpg',
          img: img6
        }],
        list02: [{
          url: '../../../assets/images/T3-1.jpg',
          img: img13
        }],
        list1: [{
          name: '巴西烤肉',
          url: '../../../assets/images/B1-3.png',
          businessImage: img3
        }, {
          name: '窄巷子砂锅',
          url: '../../../assets/images/B1-4.png',
          businessImage: img2
        }, {
          name: '柳香园',
          url: '../../../assets/images/B1-5.png',
          businessImage: img4
        }, {
          name: '外婆的味道',
          url: '../../../assets/images/B1-2.png',
          businessImage: img5
        }, {
          name: '巴西烤肉',
          url: '../../../assets/images/B1-3.png',
          businessImage: img3
        }, {
          name: '窄巷子砂锅',
          url: '../../../assets/images/B1-4.png',
          businessImage: img2
        }, {
          name: '柳香园',
          url: '../../../assets/images/B1-5.png',
          businessImage: img4
        }, {
          name: '外婆的味道',
          url: '../../../assets/images/B1-2.png',
          businessImage: img5
        }
        ],
        list2: [{
          date: '2017年4月17日',
          dishName: '煮蕨菜',
          url: '../../../assets/images/B1-3.png',
          dishRecImage: img12
        }, {
          date: '.',
          dishName: '炒蕨菜',
          url: '../../../assets/images/B1-4.png',
          dishRecImage: img7
        }, {
          date: '.',
          dishName: '烤羊肉',
          url: '../../../assets/images/B1-5.png',
          dishRecImage: img8
        }, {
          date: '2017年4月17日',
          dishName: '油炸肉',
          url: '../../../assets/images/B1-2.png',
          dishRecImage: img9
        }, {
          date: '.',
          dishName: '酸菜洋芋',
          url: '../../../assets/images/B1-3.png',
          dishRecImage: img10
        }, {
          dishName: '麻辣豆腐',
          date: '.',
          url: '../../../assets/images/B1-5.png',
          dishRecImage: img11
        }
        ],
        list3: [{
          articleUserAvatar: img15,
          articleUsername: '小李吃货',
          articleAddTime: '2017年4月17日',
          articleContent: '无意见和同学来到了这家店，菜的味道真心不错，分量足足的，' +
          '而且餐厅很有情调小清新风格工作人员态度热情，这里交通还方便，一定会再来！',
          img1: img14,
          url: '../../../assets/images/T3-2.png',
          name: '湘村馆（七彩俊园）',
          address1: '环城东路',
          address2: '昆明理工大学  新迎校区',
          look: 1314,
          comment: 22,
          list5: [{
            comments1: '评论正解1',
            comments2: '评论正解2',
            comments3: '评论正解3',
            comments4: '评论正解4'
          }]
        }, {
          articleUserAvatar: img15,
          articleUsername: '小李吃货',
          articleAddTime: '2017年4月17日',
          articleContent: '无意见和同学来到了这家店，菜的味道真心不错，分量足足的，' +
          '而且餐厅很有情调小清新风格工作人员态度热情，这里交通还方便，一定会再来！',
          img1: img14,
          url: '../../../assets/images/T3-2.png',
          name: '湘村馆（七彩俊园）',
          address1: '环城东路',
          address2: '昆明理工大学  新迎校区',
          look: 1314,
          comment: 22,
          list5: [{
            comments1: '评论正解1',
            comments2: '评论正解2',
            comments3: '评论正解3',
            comments4: '评论正解4'
          }]
        }]
      }
    },
    mounted () {
      console.info(time.getDate('1495382400000'))
//      this.showArticle()
//      this.get()
    },
    methods: {
      get (type) {
        this.$store.dispatch('getCollections', {
          params: {collectionType: type}
        }).then(() => {
          let data = this.$store.getters.getCollections
          if (data.code !== -1) {
            this.$set(this, 'list1', data.data)
            this.$set(this, 'list2', data.data)
            // 格式化时间
            for (let i = 0; i < data.data.length; i++) {
              data.data[i].articleAddTime = time.getDate(data.data[i].articleAddTime)
            }
            this.$set(this, 'list3', data.data)
            this.is_showContent = true
          } else {
            this.is_showContent = false
          }
          console.info(this.$store.getters.getCollections)
        })
      },
      showcomment (comment) {
        console.info(comment.articleId)
//        this.$router.push({name: 'comments', params: {articleId: comment.articleId}})
        this.$router.push({name: 'comments'})
      },
      business_info (item) {
        alert(item.title)
      },
      showBusiness () {
//        this.get(2)
        this.showContent001 = !this.showContent001
        this.showContent003 = false
        this.showContent002 = false
      },
      showDish () {
//        this.get(1)
        this.showContent002 = !this.showContent002
        this.showContent003 = false
        this.showContent001 = false
      },
      showArticle () {
//        this.get(3)
        this.showContent003 = !this.showContent003
        this.showContent002 = false
        this.showContent001 = false
      },
      GoDish (item) {
        console.info(item)
        this.$router.push({name: 'dishesDetail', params: {dishId: item.dishId}})
      },
      GoBusiness (item) {
        this.$router.push({name: 'business'})
        alert(item.title)
      },
      load (uuid) {
        const _this = this
        setTimeout(function () {
          _this.$broadcast('pulldown:reset', uuid)
        }, 2000)
      },
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      }
    }
  }
</script>

<style scoped="" lang="less">
  .article{
    position: relative;
    width:100%;
  }
  .comment{
  }
  .comment-img{
    width: 20Px;
    right: 45px;
    background-size: cover;
    display: inline-block;
  }
  .comment-text{
    border-radius: 14px;
    color: #5b5b5d;
    font-size: 18px;
  }
  .add-add4{
    color: #878787;
    margin-top: 5px;
    position: absolute;
    top:260px;
    left: 30px;
  }
  .add-add3{
    color: #878787;
    margin-top: 5px;
    position: absolute;
    top:260px;
    left: 0;
  }
  .add-add2{
    display: inline-block;
    color: #878787;
  }
  .add-add1{
    margin-left: 73px;
    font-size:16px;
    color: #878787;
    margin-bottom: 5px;
  }
  .address{
    position: absolute;
    top:137px;
    left: 0;
    margin-top: 15px;
    border: 1px solid #E8E8E8;
    background: #E8E8E8;
  }
  .add-name{
    margin-left: 75px;
    margin-top: 6px;
    font-size: 22px;
    margin-bottom: 10px;
  }
  .address-img{
    width: 60Px;
    height: 60px;
    position: absolute;
    left: 11px;
    top: 10px;
    background-size: cover;
    background-color: #9b9b9b;
    display: inline-block;
  }
  .F-date{
   margin-top: 10px;
  }
  .m-img {
    display: inline-block!important;
    min-width: 90%;
    max-width: 90%;
    height: 110px;
    overflow: hidden;
    background-size: cover;
    cursor: pointer;
    border-radius: 2px;
    margin-left: 10px;

  }
  .m-img1 {
    display: inline-block!important;
    min-width: 100%;
    max-width: 100%;
    height: 150px;
    overflow: hidden;
    background-size: cover;
    cursor: pointer;
    border-radius: 2px;
    /*margin-left: 10px;*/

  }
  /*.m-title {*/
    /*color: #fff;*/
    /*text-align: center;*/
    /*text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);*/
    /*font-weight: 500;*/
    /*font-size: 16px;*/
    /*position: absolute;*/
    /*left: 5%;*/
    /*top: 91%;*/
    /*width: 168px !important;*/
    /*text-align: center;*/
    /*background: rgba(37,37,38,.5);*/
  /*}*/
  p.m-title{
    padding: 3px;
    background-color: rgba(37,37,38,.5);
    font-size: 16px;
    position: absolute;
    top:90%;
    color: #ffffff;
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

  /*********************/
  .B-intru{
    width: 88%;
    margin-top: 34% ;
    margin-left: 12px;
    position: relative;

  }

  .B-text1{
    position: absolute;
    top: 67%;
    left:16%;
    color: #F9F9FA;
    font-size: 20px;
  }
  i{
    position: absolute;
    /*border: 1px solid #0bb20c;*/
    background: rgba(154,153,153,.5);
    width: 43%;
    height: 4%;
    top: 67%;
    left: 3%;
  }
  .B-text{
    font-size: 20px;
    color:#868781 ;
    margin-bottom: 10px;
  }
  .B-img1{
    width: 95%;
    margin: 10px;
  }
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01  {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .takeSorting{
    width: 100%;
    min-height:170px;
    margin-bottom: 20px;
    /*border-bottom: 1px solid #dddbdb;*/
  }
  .sortingl{
    border-radius: 50%;
    width: 50Px;
    height: 50px;
    position: absolute;
    top: 10px;
    left: 25px;
    background-size: cover;
    background-color: #9b9b9b;
    display: inline-block;
  }
  .sortingr{
    width: 78%;
    margin-right: 0px;
    margin-top: 10px;
    height: 150px;
    padding:20px 5px;
    position: absolute;
    top:0;
    right:0;
    display: inline-block;
  }
  .T-title{
    position: absolute;
    top: 5px;
    left: 20px;
    font-size: 18px;
    color: #315D83;
  }
  .T-time{
    font-size: 15px;
    color: #8D8D8D;
    margin-left: 60px;
  }
  .T-type{
    font-size: 15px;
    display: inline-block;
    margin-top: 20px;
  }
  .sortingl p{
    display: inline-block;
  }
  .sortingimg {
    width: 100%;
    height: 100%;
  }
  .sortingr .statuss {
    color: red;
    margin-right: 2px;
  }
</style>
