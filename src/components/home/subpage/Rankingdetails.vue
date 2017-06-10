<template>
  <div>
    <x-header v-on:click="$router.back()">营养价值详情</x-header>
    <blur :blur-amount=0 :url="url" style="height:220px">
        <ul class="me_show">
          <li><p>{{dishName}}</p></li>
        </ul>
    </blur>


      <div class="takeSorting3" @click="GoBusiness (item)">
        <div class="sortingr3">
          <table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
            <tbody class="noneboder">
            <tr>
              <td class="ltd"><span class="spanfontsize">热量</span></td>
              <td>
                <flow>
                  <flow-state state="1" title="0" is-done v-if="scol >=1"></flow-state>
                  <flow-line is-done></flow-line>

                  <flow-state state="2" title="底" is-done v-if="scol >=2"></flow-state>
                  <flow-line></flow-line>

                  <flow-state state="3" title="中" v-if="scol >= 3"></flow-state>
                  <flow-line></flow-line>

                  <flow-state state="4" title="高" v-if="scol=4"></flow-state>
                </flow>
              </td>
            </tr>
            <tr>
              <td class="ltd"><span class="spanfontsize">糖分</span></td>
              <td>{{sugarContent}}</td>
            </tr>
            <tr>
              <td class="ltd"><span class="spanfontsize">营养价值</span></td>
              <td>{{grease}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
</template>
<script>
  import { CellBox, XTable, Card, Masker, XHeader, Blur, TransferDom, Group, Cell, Panel, Rater, Badge,
    Flow, FlowLine, FlowState } from 'vux'
  import img from '../../../assets/images/8.png'
  import img1 from '../../../assets/img/8.png'
  //  import img2 from '../../../assets/img/gruel.png'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Flow,
      FlowLine,
      FlowState,
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
        scol: 4,
        dishId: 1,
        dishName: '水果紫米粥',
        url: img, /** 顶部传进来的图片 */
        dishImage: img1,
        title: '材料营  养价值',
        heat: '抗癌、降脂',
        sugarContent: '抗氧化',
        grease: '去腥味'
      }
    },
    mounted () {
      console.info(this.$route.params)
      if (this.$route.params.dishId === undefined) {
        this.$router.go(-1)
      }
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
  .sortingr3{
    width: 100%;
    height: 300px;
    position: absolute;
    float: right;
    right:0%;
    display: inline-block;
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
    height:50px;
    position: absolute;
    bottom: 0px;
    color:#000;
    background-color: rgba(254,254,254,.5);
    padding: 5px;
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
    width: 70%;
    text-align: left;
    padding-left: 5px;
    padding-right: 0;
    font-size: 14px;
  }
  .noneboder tr td.ltd{
    width: 20%;
    margin-right:20px;
  }
  .noneboder tr td span.spanfontsize{
    font-size: 18px;
  }
  tr.listtitle  td{
    font-size: 20px;padding: 0;padding-left:5px;border: none;text-align: left
  }
</style>
