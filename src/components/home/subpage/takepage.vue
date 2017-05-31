<template>
  <div>
    <x-header v-on:click="$router.back()">取号</x-header>

    <div class="card-demo-flex card-demo-content">
      <div >
        <group>
          <cell title="附近商家" is-link
                :border-intent="false"
                :arrow-direction="showContent001 ? 'up' : 'down'"
                @click.native="show1">
          </cell>
        </group>
      </div>
      <div >
        <group>
          <cell
            title="商家星级"
            is-link
            :border-intent="false"
            :arrow-direction="showContent002 ? 'up' : 'down'"
            @click.native="show2"></cell>
        </group>
      </div>
      <div>
        <group>
          <cell
            title="排队人数"
            is-link
            :border-intent="false"
            :arrow-direction="showContent003 ? 'up' : 'down'"
            @click.native="show3"></cell>
        </group>
      </div>
    </div>

    <!-- 按照距离排序的list -->
    <template v-if="showContent001" style="position: fixed" v-for="item in list1">
      <div class="takeSorting" @click="GoBusiness (item)">
        <div class="sortingl" :style="{backgroundImage: 'url(' + item.businessImage + ')'}"></div>
        <div class="sortingr">
          <h3>{{item.name}}</h3>
          <span class="distance">{{item.distance}}米</span>
          <span class="address">地址&nbsp;:&nbsp;</span>
          <div class="addressdiv">
            <span class="address">{{item.address}}</span>
          </div>
          <br>
          <br>
          <span class="tel">电话&nbsp;:&nbsp;&nbsp;&nbsp;{{item.tel}}</span>
        </div>
      </div>
    </template>
    <!-- 按照商家星级level排序的list -->
    <template v-if="showContent002" v-for="item in list2">
      <div class="takeSorting" @click="GoBusiness (item)">
        <h3 class="businesstitle">{{item.name}}</h3>
        <div class="allsortingl" :style="{backgroundImage: 'url(' + item.businessImage + ')'}"></div>
        <div class="allsortingr">
          <span class="address2">{{item.address}}</span>
          <br>
          <rater v-model="item.level" slot="value" disabled></rater>
          <br>
          <br>
          <span class="addressstel tel" style="top: 80px"><i style="color: red">电话</i>&nbsp;:&nbsp;&nbsp;&nbsp;{{item.tel}}</span>
        </div>
      </div>
    </template>
    <!-- 按照排队人数排序的list -->
    <template  v-if="showContent003" v-for="item in list3" >
      <div class="takeSorting" @click="GoBusiness (item)" >
        <div class="sortingl" :style="{backgroundImage: 'url(' + item.businessImage + ')'}"></div>
        <div class="sortingr">
          <h3>{{item.name}}</h3>
          <rater v-model="item.level" slot="value" disabled></rater>
          <br>
          <span>{{item.type}}</span>
          <span>{{item.address}}</span>
          <br>
          <badge :text="quename"></badge>
          <span v-if="item.wait>0">前方正在排队</span>
          <span v-else>竟然没有人排队</span>
          <span class="statuss">{{item.wait}}</span><span>桌</span>
        </div>
      </div>
    </template>

  </div>

</template>

<script>
  import { CellBox, Card, Masker, XHeader, TransferDom, Group, Cell, Panel, Rater, Badge } from 'vux'
  import img1 from '../../../assets/img/8.png'
  import img2 from '../../../assets/img/5.png'
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
        longtitude: '',
        latitude: '',
        showContent001: false,
        showContent002: true,
        showContent003: false,
        quename: '排队',
        tel: 1232132,
        list1: [{
          businessImage: img2,
          name: '海底捞11',
          distance: 228,
          address: '盘龙区白龙路东华菜市场熟食区六区15商铺',
          tel: '1398702586'
        }, {
          businessImage: img1,
          name: '北京烤鸭',
          distance: 80,
          address: '盘龙区白龙路',
          tel: '1398702586'
        }, {
          businessImage: img1,
          name: '外婆味道',
          distance: 100,
          address: '盘龙区白龙路昆明理工大学',
          tel: '1398702586'
        }],
        list2: [{
          src: img1,
          title: '巴蜀知味重庆老火锅',
          address: '呈贡大学城',
          detailed: '雨花毓秀小区',
          tel: 13067349324
        }, {
          src: img1,
          title: '巴蜀知味重庆老火锅',
          address: '昆明盘龙区',
          detailed: '雨花毓秀小区',
          tel: 1234563324
        }],
        list3: [{
          businessImage: img2,
          name: '海底捞(同德广场)',
          type: '海鲜',
          level: 4,
          address: '233米',
          status: '排队',
          content: '前方正在排队',
          wait: 50,
          url: 'www.baidu.com'
        }, {
          businessImage: img1,
          name: '外婆味道(昆明广场)',
          type: '老味道',
          level: 1,
          address: '2323米',
          status: '排队',
          content: '前方正在排队',
          wait: 20
        }, {
          businessImage: img1,
          name: '5710海鲜(同德广场)',
          type: '海鲜',
          level: 3,
          address: '233米',
          status: '排队',
          content: '前方正在排队',
          wait: 30
        }]
      }
    },
    mounted () {
      // 进入页面的钩子函数
    },
//    created () {
//      console.info(this.$store.getters.getLontitude)
//      console.info(this.$store.getters.getLatitude)
//      this.$set(this, 'longtitude', this.$store.getters.getLontitude)
//      this.$set(this, 'latitude', this.$store.getters.getLatitude)
//      this.getsort()
//    },
    methods: {
      business_info (item) {
        alert(item.title)
      },
//      getsort () {
//        this.$store.dispatch('getBusinesss', {
//          params: {
//            sort: 'add_time',
//            waitSort: 'desc',
//            longtitude: 'longtitude',
//            latitude: 'latitude'
//          }
//        }).then(() => {
//          let data = this.$store.getters.getBusinesss
//          if (data.code !== -1) {
//            console.info(this.$store.getters.getBusinesss.data.takeList)
//            this.$set(this, 'list3', this.$store.getters.getBusinesss.data.takeList)
//            this.$set(this, 'list2', this.$store.getters.getBusinesss.data.levelList)
//          }
//        })
//      },
      show1 () {
        this.showContent001 = !this.showContent001
        this.showContent003 = false
        this.showContent002 = false
      },
      show2 () {
        this.showContent002 = !this.showContent002
        this.showContent003 = false
        this.showContent001 = false
      },
      show3 () {
        this.showContent003 = !this.showContent003
        this.showContent002 = false
        this.showContent001 = false
      },
      GoBusiness () {
        this.$router.push({name: 'business'})
      }
//      GoBusiness (item) {
//        this.$router.push({name: 'business', params: { businessId: item.businessId }})
//      }
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
    height:160px;
    position: relative;
    margin-bottom: 10px;
    border-bottom: 1px solid #dddbdb;
  }
  .sortingl{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 25px;
    left: 25px;
    background-size: cover;
    background-color: #9b9b9b;
    display: inline-block;
  }
  .sortingr{
    width: 60%;
    height: 160px;
    padding:20px 5px;
    position: absolute;
    top:0;
    right:0;
    display: inline-block;
  }
  .sortingr h3{
    font-size: 20px;
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
  .distance{
    display: inline-block;
    padding: 3px 8px;
    border-radius: 5px;
    background-color: #c6c7ca;
    position: absolute;
    top:20px;
    right: 0;
  }
  .address , .distance , .tel{
    color: #5b5b5d;
    font-size: 15px;
  }
  .addressdiv{
    display: inline-block;
    width: 70%;
    position: absolute;
    top:53px;
    right: 10px;
  }
  .allsortingl{
    width: 160px;
    height: 100px;
    position: absolute;
    top: 40px;
    left: 25px;
    background-size: cover;
    background-color: #9b9b9b;
    display: inline-block;
  }
  .allsortingr{
    width: 48%;
    height: 160px;
    padding:25px 5px;
    position: absolute;
    top:0;
    right:0;
    display: inline-block;
  }
  h3.businesstitle {
    padding-left: 25px;
    padding-top: 5px;
    font-size: 16px;
    color: #1b1b1b;
    border-bottom: 1px solid #c6c7ca;
  }
  span.address2{
    display: inline-block;
    padding: 3px 8px;
    border-radius: 5px;
    position: absolute;
    top:5px;
    right: 10px;
  }
  .addressstel {
    position: absolute;
    top:40px;
  }
</style>
