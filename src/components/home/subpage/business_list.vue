<template>
  <div>
    <!--<x-header v-on:click="$router.back()">取号</x-header>-->
    <!--<x-header :left-options="{backText: ''}" style="background: transparent;position: fixed;left: -10px;top: -2px" v-on:click="$router.back()"></x-header>-->
    <div class="card-demo-flex card-demo-content" style="margin-top: 4px">
      <div >
          <cell style="font-size: 12px!important;"
                title="商家" is-link
                :border-intent="false">
          </cell>
      </div>
    </div>

    <!-- 按照商家星级level排序的list -->
    <mt-loadmore :top-method="loadLevelTop" :bottom-method="loadLevelBottom"
                 :bottom-all-loaded="LevelAllLoaded" ref="loadLevelMore">
      <div v-for="item in list2">
        <div class="takeSorting" style="padding: 0">
          <div style="height: 140px;">
            <div class="allsortingl" @click="GoBusiness (item)" :style="{backgroundImage: 'url(' + item.businessImage + ')'}"></div>
            <div class="allsortingr" @click="GoBusiness (item)">
              <h3 class="businesstitle">{{item.name}}</h3>
              <rater v-model="item.level" slot="value" disabled></rater>
              <br>
              <p class="address2">{{item.address}}</p>
              <span class="addressstel tel" style="top: 80px">
                <i style="color: red">电话</i>
                &nbsp;:&nbsp;&nbsp;&nbsp;{{item.tel}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </mt-loadmore>
  </div>

</template>

<script>
  import { CellBox, Card, Masker, XHeader, TransferDom, Group, Cell, Panel, Rater, Badge } from 'vux'
  import img1 from '../../../assets/img/8.png'
  import { Indicator } from 'mint-ui'
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
      Badge
    },
    data () {
      return {
        dishId: '',
        LevelCurrent: 1,
        LevelAllLoaded: false,
        quename: '排队',
        tel: 1232132,
        list2: [{
          businessImage: img1,
          name: '巴蜀知味重庆老火锅',
          address: '呈贡大学城',
          detailed: '呈贡区洛龙街道朝云街昆明市政府',
          tel: 13067349324
        }, {
          businessImage: img1,
          name: '巴蜀知味重庆老火锅',
          address: '昆明盘龙区',
          detailed: '呈贡区洛龙街道雨花毓秀小区',
          tel: 1234563324
        }]
      }
    },
    mounted () {
      // 进入页面的钩子函数
      if (this.$route.params.dishId === null) {
        this.$router.go(-1)
      }
      this.dishId = this.$route.params.dishId
      this.getsort()
    },
    methods: {
      getsort () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'triple-bounce'
        })
        this.$store.dispatch('getDishBusinesss', {
          params: {
            sort: 'add_time',
            waitSort: 'desc',
            dishId: this.dishId,
            pageNum: 1,
            pageSize: 10
          }
        }).then(() => {
          Indicator.close()
          let data = this.$store.getters.getDishBusinesss
          console.info(data)
          if (data.code !== -1) {
            this.$set(this, 'list2', data.data.levelList.page.list)
          }
        })
      },
      loadLevelTop () {
//        this.getsort()
        this.$refs.loadLevelMore.onTopLoaded()
      },
      loadLevelBottom () {
        this.LevelCurrent++
        Indicator.open({
          text: '加载中...',
          spinnerType: 'triple-bounce'
        })
        this.$store.dispatch('getDishBusinesss', {
          params: {
            sort: 'add_time',
            waitSort: 'desc',
            dishId: this.dishId,
            pageNum: this.LevelCurrent,
            pageSize: 10
          }
        }).then(() => {
          Indicator.close()
          let data = this.$store.getters.getBusinesss
          if (data.code !== -1) {
            let levelList = data.data.levelList
            for (let i = 0; i < levelList.page.list.length; i++) {
              this.list2.push(levelList.page.list[i])
            }
            // 若全部数据都加载完成
            if (levelList.page.lastPage === this.current) {
              this.LevelAllLoaded = true
            }
          }
        })
        this.$refs.loadLevelMore.onBottomLoaded()
      },
      GoBusiness (item) {
        this.$router.push({name: 'businessDish  ', params: { businessId: item.businessId }})
      }
    }
  }
</script>

<style scoped="" lang="less">
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
    /*height:160px;*/
    position: relative;
    /*padding-bottom: 10px;*/
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom:  10px;
    border-bottom: 1px solid #dddbdb;
  }
  .sortingl{
    width: 100px;
    height: 100px;
    /*position: absolute;*/
    background-size: cover;
    background-color: #9b9b9b;
    display: inline-block;
  }
  .sortingr{
    width: 60%;
    height: 120px;
    padding:15px 5px;
    position: absolute;
    top:0;
    right:0;
    display: inline-block;
  }
  .sortingr h3{
    width: 60%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 15px;
    color: #4e5156;
    font-weight: bold;
  }
  .sortingr span{
    margin-right: 20px;
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

  .address , .distance , .TEL{
    color: #5b5b5d;
    font-size: 8px;
  }
  .distance{
    display: inline-block;
    top:18px;
    right: 10px;
    position: absolute;
    color: #c6c7ca;
  }
  .addressdiv{
    display: inline-block;
    width: 70%;
    position: absolute;
    top:51px;
    right: 20px;
  }
  .allsortingl{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 20px;
    left: 25px;
    background-size: cover;
    background-color: #9b9b9b;
    display: inline-block;
  }
  .allsortingr{
    width: 55%;
    height: 160px;
    padding:20px 5px;
    position: absolute;
    top:0;
    right:0;
    display: inline-block;
  }
  h3.businesstitle {
    font-size: 15px;
    color: #1b1b1b;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*border-bottom: 1px solid #c6c7ca;*/
  }
  p.address2{
    /*display: inline-block;*/
    /*padding: 3px 8px;*/
    /*position: absolute;*/
    /*top:15px;*/
    /*left: -5px;*/
    vertical-align: top;
  }
  .addressstel {
    /*position: absolute;*/
    /*top:40px;*/
  }
</style>
