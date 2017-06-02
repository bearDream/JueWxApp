<template>
  <div>
    <x-header v-on:click="$router.back()">营养价值详情</x-header>
    <blur :blur-amount=0 :url="url" style="height:220px">

      <div style="border-radius: 2px;width: 100%">
        <div class="m-buttom1"></div>
        <ul class="me_show">
          <li><p>{{attentions}}</p></li>
        </ul>
      </div>
    </blur>


    <template  v-if="showContent003 = true" v-model="list3" >
      <div class="takeSorting3">
        <div class="sorting3" :style="{backgroundImage: 'url(' + list3.dishImage + ')'}"></div>
        <div class="sortingr3">
          <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
            <tbody class="noneboder">
            <tr>
              <td ><span class="spanfontsize">热量</span></td>
              <td >{{list3.heat}}</td>
            </tr>
            <tr>
              <td><span class="spanfontsize">糖分</span></td>
              <td>{{list3.sugar_content}}</td>
            </tr>
            <tr>
              <td>{{list3.grease}}</td>
            </tr>
            </tbody>
          </x-table>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
  import { CellBox, XTable, Card, Masker, XHeader, Blur, TransferDom, Group, Cell, Panel, Rater, Badge } from 'vux'
  import img from '../../../assets/images/8.png'
  import img1 from '../../../assets/img/8.png'
  //  import img2 from '../../../assets/img/gruel.png'
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
      Blur,
      XTable
    },
    data () {
      return {
        dishId: '',
        showContent003: true,
        tel: 1232132,
        list3: {
          dishImage: img1,
          title: '材料  营养价值',
          title1: '大米 ',
          address1: '补充营养素',
          heat: '1 ',
          address2: '增强免疫力',
          sugar_content: '2 ',
          address3: '抗癌、降脂',
          grease: '营养价值分析，。。。。。。。。。。。。。。。。。。。。 ',
          address4: '抗氧化',
          title5: '盐 ',
          address5: '去腥味',
          title6: '胡椒 ',
          address6: '防腐调味'
        },
        url: img,
        attentions: '营养价值分析'
      }
    },
    mounted () {
      console.info('dishId: ' + this.$route.params.dishId)
      this.$set(this, 'dishId', this.$route.params.dishId)
      this.get()
    },
    methods: {
      get () {
        this.$store.dispatch('getNutritionDish', {
          uri: '/get?dishId' + this.dishId
        }).then(() => {
          let data = this.$store.getters.getNutritionDish
          if (data.code !== -1) {
            console.info(data.data)
            this.$set(this, 'list3', data.data)
//            this.$set(this.list3, 'heat', data.data.heat)
//            this.$set(this.list3, 'sugar_content', data.data.sugar_content)
//            this.$set(this.list3, 'grease', data.data.grease)
            console.info(this.list3.grease)
          }
        })
      },
      business_info (item) {
        alert(item.title)
      },
      GoBusiness (item) {
        this.$router.push({name: 'business'})
        alert(item.title)
      }
    }
  }
</script>

<style scoped="" lang="less">

  .takeSorting{
    width: 100%;
    height:160px;
    position: relative;
    margin-bottom: 10px;
    border-bottom: 1px solid #dddbdb;
  }
  .takeSorting3{
    width: 100%;
    height:300px;
    top:20px;
    position: relative;
    /*border: 3px solid #E6E6E6;*/
  }
  .sorting3{
    width: 45%;
    height: 295px;
    position: absolute;
    float: left;
    left: 2%;
    background-size: cover;
    background-color: #9b9b9b;
    display: inline-block;
  }
  .sortingr3{
    width: 53%;
    height: 300px;
    position: absolute;
    float: right;
    right:0%;
    display: inline-block;
  }
  .address , .distance , .tel{
    color: #5b5b5d;
    font-size: 15px;
  }


  .m-buttom1 {
    display: block;
    position: absolute;
    width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
    height: 50px;
    background: #f3f3f5;
    opacity: 0.8;
    bottom: 0;
  }
  .me_show{
    display: flex;
    width: 100%;
    height:40px;
    position: absolute;
    bottom: 5px;
    color:#000;
  }
  .me_show li{
    float: left;
    padding-left:20px;
    line-height:40px;
    font-size:20px;
    margin-left: 30%;
  }
  .noneboder tr td{
    border:none;
    width: 45%;
    text-align: left;
    padding-left: 5px;
    padding-right: 0;
    font-size: 14px;
  }
  .noneboder tr td span.spanfontsize{
    font-size: 18px;
  }
  tr.listtitle  td{
    font-size: 20px;padding: 0;padding-left:5px;border: none;text-align: left
  }
</style>
