<template>
  <div>
    <x-header v-on:click="$router.back()">取号</x-header>

    <div class="card-demo-flex card-demo-content">
      <div >
        <group>
          <cell title="附近" is-link
                :border-intent="false"
                :arrow-direction="showContent001 ? 'up' : 'down'"
                @click.native="show1">
          </cell>
        </group>
      </div>
      <div >
        <group>
          <cell
            title="全部"
            is-link
            :border-intent="false"
            :arrow-direction="showContent002 ? 'up' : 'down'"
            @click.native="show2"></cell>
        </group>
      </div>
      <div>
        <group>
          <cell
            title="排序"
            is-link
            :border-intent="false"
            :arrow-direction="showContent003 ? 'up' : 'down'"
            @click.native="show3"></cell>
        </group>
      </div>
    </div>

    <template v-if="showContent001" style="position: fixed" v-for="item in list1">
      <div class="takeSorting" @click="GoBusiness (item)">
        <div class="sortingl" :style="{backgroundImage: 'url(' + item.src + ')'}"></div>
        <div class="sortingr">
          <h3>{{item.title}}</h3>
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
    <template v-if="showContent002" v-for="item in list2">
      <div class="takeSorting" @click="GoBusiness (item)">
        <div class="allsortingl" :style="{backgroundImage: 'url(' + item.src + ')'}"></div>
        <div class="allsortingr">
          <h3>{{item.title}}</h3>
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
    <template  v-if="showContent003" v-for="item in list3" >
      <div class="takeSorting" @click="GoBusiness (item)">
        <div class="sortingl" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div class="sortingr">
          <h3>{{item.title}}</h3>
          <rater v-model="item.start" slot="value" disabled></rater>
          <br>
          <span>{{item.type}}</span>
          <span>{{item.address}}</span>
          <br>
          <badge :text="item.status"></badge>
          <span>{{item.content}}</span>
          <span class="statuss">{{item.statuss}}</span><span>桌</span>
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
      Badge,
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
        showContent001: false,
        showContent002: false,
        showContent003: true,
        tel: 1232132,
        list1: [{
          src: img2,
          title: '海底捞11',
          distance: 228,
          address: '盘龙区白龙路东华菜市场熟食区六区15商铺',
          tel: '1398702586'
        }, {
          src: img1,
          title: '北京烤鸭',
          distance: 80,
          address: '盘龙区白龙路',
          tel: '1398702586'
        }, {
          src: img1,
          title: '外婆味道',
          distance: 100,
          address: '盘龙区白龙路昆明理工大学',
          tel: '1398702586'
        }],
        list3: [{
          img: img2,
          title: '海底捞(同德广场)',
          type: '海鲜',
          start: 4,
          address: '233米',
          status: '排队',
          content: '前方正在排队',
          statuss: 50,
          url: 'www.baidu.com'
        }, {
          img: img1,
          title: '外婆味道(昆明广场)',
          type: '老味道',
          start: 1,
          address: '2323米',
          status: '排队',
          content: '前方正在排队',
          statuss: 20
        }, {
          img: img1,
          title: '5710海鲜(同德广场)',
          type: '海鲜',
          start: 3,
          address: '233米',
          status: '排队',
          content: '前方正在排队',
          statuss: 30
        }],
        list2: [{
          src: img1,
          title: '海底捞',
          desc: '排队'
        }]
      }
    },
    mounted () {
      // 进入页面的钩子函数
    },
    methods: {
      business_info (item) {
        alert(item.title)
      },
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
      GoBusiness (item) {
        this.$router.push({name: 'business'})
        alert(item.title)
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
    height:150px;
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
    height: 150px;
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
    width: 150px;
    height: 100px;
    position: absolute;
    top: 25px;
    left: 25px;
    background-size: cover;
    background-color: #9b9b9b;
    display: inline-block;
  }
  .allsortingr{
    width: 40%;
    height: 150px;
    padding:20px 5px;
    position: absolute;
    top:0;
    right:0;
    display: inline-block;
  }
</style>
