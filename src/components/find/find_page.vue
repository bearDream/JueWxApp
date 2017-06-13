<template>
  <div style="height:100%;width:100%;background-color: #eee;margin-top: -20px" >
    <div style="width: 100%;height: 70px;background-color:#fff;">
      <div style="width:100px;position:absolute;margin-top:5%;font-size:20px;left:12%">
          <cell title="商家" is-link
                :border-intent="false"
                :arrow-direction="showContent001 ? 'up' : 'down'"
                @click.native="show1">
          </cell>
      </div>
      <div style="width:100px;;position:absolute;margin-top:5%;font-size:20px;right:12%">
        <cell title="菜品" is-link
              :border-intent="false"
              :arrow-direction="showContent002 ? 'up' : 'down'"
              @click.native="show2">
        </cell>
      </div>
    </div>

    <mt-loadmore v-if="showContent001" :top-method="loadBusinessTop" :bottom-method="loadBusinessBottom" :bottom-all-loaded="BusinessAllLoaded" ref="loadBusinessMore">
      <div v-for="item in businessList" @click="GoBusinessDetail(item)">
        <div style="padding:4% 4%;margin-top:2%;background-color:#fff;">
          <div class="t-img" :style="{backgroundImage: 'url(' + item.businessImage + ')'}">
            <div class="masker" style="background-color: rgba(0, 0, 0, .3);">
              <div class="title">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div style="padding:4% 4%;margin-top:2%;background-color:#fff;">
          <div>
            <div class="e-img" style="margin-right:2%;" :style="{backgroundImage: 'url(' + item.oneDishRecImage + ')'}"></div>
            <div class="e-img" style="margin-left: 2.5%;" :style="{backgroundImage: 'url(' + item.twoDishRecImage + ')'}"></div>
          </div>
        </div>
      </div>
    </mt-loadmore>

    <mt-loadmore v-if="showContent002" :top-method="loadDishTop" :bottom-method="loadDishBottom" :bottom-all-loaded="DishAllLoaded" ref="loadDishMore">
      <!--<ul v-for="item in dishImageList" class="weui-media-box weui-media-box_appmsg" @click="GoDishesDetail(item)">-->
        <!--<div class="weui-media-box__hd" v-if="item.dishRecImage"  @click="GoDishesDetail(item)">-->
          <!--<img class="weui-media-box__thumb" :src="item.dishRecImage" alt="">-->
        <!--</div>-->
        <!--<div class="weui-media-box__bd">-->
          <!--<h6 class="weui-media-box__title">{{item.dishName}}</h6>-->
          <!--<p class="weui-media-box__desc">{{item.dishDesc}}</p>-->
        <!--</div>-->
      <!--</ul>-->

      <div style="width: 100%;min-height: 150px;padding: 10px;background-color: #fff;margin-top: 10px" v-for="item in dishImageList" @click="GoDishesDetail(item)" >
        <div style="width: 30%;display: inline-block;float: left" v-if="item.dishRecImage"  @click="GoDishesDetail(item)" >
          <img style="width: 100%" :src="item.dishRecImage" alt="">
        </div>
        <div style="width: 60%;height:100px;display: inline-block;float: right">
          <span style="font-size: 20px">{{item.dishName}}</span>
          <span style="font-size: 10px;color: #59850b">&nbsp;&nbsp;{{item.typeName}}</span>
          <p style="font-size: 14px">{{item.dishIntroduction}}</p>
          <p style="font-size: 13px; color:#f74c31">{{item.dishHealth}}</p>
        </div>
      </div>

    </mt-loadmore>

    <!--<div style="height:70px;width: 100%;"></div>-->
  </div>
</template>

<script>
  import { Grid, GridItem, Group, Cell } from 'vux'
  import { Indicator } from 'mint-ui'
  import { mapState } from 'vuex'

//  import find1 from '../../assets/img/find1.png'
  import find4 from '../../assets/img/find4.png'

  import find6 from '../../assets/img/5-2.png'
  import find7 from '../../assets/img/5-3.png'
  import finddish from '../../assets/images/F2-7.png'
  export default {
    components: {
      Grid,
      GridItem,
      Group,
      Cell
    },
    computed: mapState([
      'find'
    ]),
    data () {
      return {
        BusinessCurrent: 1,
        DishCurrent: 1,
        BusinessAllLoaded: false,
        DishAllLoaded: false,
        showContent001: true,
        showContent002: false,
        businessList: [
          {
            name: '隔锅香',
            oneDishId: 1,
            oneDishName: '爆炒大猪脚',
            oneDishRecImage: find6,
            twoDishId: 1,
            twoDishName: '爆炒大猪脚',
            twoDishRecImage: find7,
            businessImage: find4
          }
        ],
        dishImageList: [
          {
            dishName: '宣威小炒肉',
            dishRecImage: finddish,
            typeName: '炒菜',
            dishDesc: '我是正宗的宣威小炒肉',
            dishIntroduction: '潮汕卤鸡是广东潮汕地区汉族传统名菜，属于炒菜系',
            dishHealth: '减肥'
          }, {
            dishName: '洋芋丝炒肉',
            dishRecImage: finddish,
            typeName: '炒菜',
            dishDesc: '我是卖洋芋的小炒肉',
            dishIntroduction: '潮汕卤鸡是广东潮汕地区汉族传统名菜，属于炒菜系',
            dishHealth: '标准'
          }
        ]
      }
    },
    mounted () {
//      this.getBusiness()
//      this.getDishes()
    },
    methods: {
      getBusiness () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'triple-bounce'
        })
        this.$store.dispatch('getTopBusinesss', {params: {
          pageNum: 1,
          pageSize: 10
        }}).then(() => {
          Indicator.close()
          let data = this.$store.getters.getTopBusinesss
          if (data.code !== -1) {
            data = data.data
            this.$set(this, 'businessList', data.page.list)
            console.info(this.businessList)
          }
        })
      },
      getDishes () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'triple-bounce'
        })
        this.$store.dispatch('getDishList', {params: {
          pageNum: 1,
          pageSize: 10
        }}).then(() => {
          Indicator.close()
          let data = this.$store.getters.getDishList
          console.info(data)
          if (data.code !== -1) {
            data = data.data
            this.$set(this, 'dishImageList', data.list)
            console.info(data)
          }
        })
      },
      loadBusinessTop () {
        this.BusinessAllLoaded = false
        this.getBusiness()
        this.$refs.loadBusinessMore.onTopLoaded()
      },
      loadBusinessBottom () {
        this.BusinessCurrent++
        // 获取数据
        Indicator.open({
          text: '加载中...',
          spinnerType: 'triple-bounce'
        })
        this.$store.dispatch('getTopBusinesss', {params: {
          pageNum: this.BusinessCurrent,
          pageSize: 10
        }}).then(() => {
          Indicator.close()
          let data = this.$store.getters.getTopBusinesss
          if (data.code !== -1) {
            data = data.data
            for (let i = 0; i < data.page.list.length; i++) {
              this.businessList.push(data.page.list[i])
            }
            if (data.page.lastPage === this.BusinessCurrent) {
              this.BusinessAllLoaded = true// 若数据已全部获取完毕
            }
          }
        })
        this.$refs.loadBusinessMore.onBottomLoaded()
      },
      loadDishTop () {
        this.DishAllLoaded = false
        this.getDishes()
        this.$refs.loadDishMore.onTopLoaded()
      },
      loadDishBottom () {
        this.DishCurrent++
        // 获取数据
        Indicator.open({
          text: '加载中...',
          spinnerType: 'triple-bounce'
        })
        this.$store.dispatch('getDishList', {params: {
          pageNum: this.DishCurrent,
          pageSize: 10
        }}).then(() => {
          Indicator.close()
          let data = this.$store.getters.getDishList
          if (data.code !== -1) {
            data = data.data
            for (let i = 0; i < data.page.list.length; i++) {
              this.dishImageList.push(data.page.list[i])
            }
            if (data.page.lastPage === this.DishCurrent) {
              this.DishAllLoaded = true// 若数据已全部获取完毕
            }
          }
        })
        this.$refs.loadDishMore.onBottomLoaded()
      },
      show1 () {
        this.showContent001 = true
        this.showContent002 = false
      },
      show2 () {
        this.showContent001 = false
        this.showContent002 = true
      },
      GoBusinessDetail (item) {
//        this.$router.push({name: 'business', params: { businessId: item.businessId }})
        this.$router.push({name: 'business'})
      },
      GoDishesDetail (item) {
        console.log(234234)
//        this.$router.push({name: 'dishesDetail', params: {'dishId': item.dishId}})
        this.$router.push({name: 'dishesDetail'})
      }
    }
  }
</script>

<style lang="less">
  @import 'styles/widget/weui_cell/weui_cell_global';
  @import 'styles/widget/weui_cell/weui_access';
  @import 'styles/widget/weui_panel/weui_panel';
  @import 'styles/widget/weui_media_box/weui_media_box';

  .weui-panel .weui-cell:first-child:before {
    display: block;
  }
</style>
<style scoped>
  .t-img{
    padding-bottom: 35%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
  }
  .masker {
    width: 70%;
    height: 70%;
    position: absolute;
    top: 15%;
    left: 18%;
    border-radius: 5px;
  }
  .title{
    color:#fff;
    text-align:center;
    font-size:1.5em;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
  }
  .e-img{
    padding-bottom:40%;
    width:47%;
    display:inline-block;
    text-align:center;
    position: relative;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
  }
  .b-img{
    padding-bottom: 40%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
  }
  .weui-cells , .vux-no-group-title{
    border-top: none!important;
    margin-top: 0!important;
  }
</style>
