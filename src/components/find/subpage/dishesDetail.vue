<template>
  <div style="background:#eee">
    <x-header :left-options="{backText: ''}" style="background: transparent;position: absolute;" v-on:click="$router.back()"></x-header>
    <div style="max-height:200px;position:relative;overflow: hidden">
      <img class="bg" :src="dish.dishImage">
      <p class="mask">{{dish.dishName}}</p>
    </div>
    <div style="background-color: #fff;">
      <!--<p class="title">{{title}}</p>-->
      <div class="row">
        <div class="icon" :style="{background:'url('+dishesIcon+') no-repeat -8px 0'}"></div>
        <p class="typetitle" >菜名:</p>
        <p style="font-size:18px;position:absolute;top:30%;left:35%;">{{dish.dishName}}</p>
      </div>
      <div style="border-bottom: 2px solid #eee;">
        <div class="left">
          <span class="icon" :style="{background:'url('+Introduction+')', width: '50%;'}"></span>
          <p class="typetitle" >简介:</p>
          <span class="typecontent">{{dish.dishDesc}}</span>
        </div>
      </div>
      <div style="border-bottom: 2px solid #eee;">
        <div class="left">
          <span class="icon" :style="{background:'url('+ingredients+') no-repeat 5px 0'}"></span>
          <i class="typetitle" >配料:</i>
          <p class="typecontent">{{dish.dishContent}}</p>
        </div>
      </div>
      <div style="border-bottom: 2px solid #eee;">
        <div class="left">
          <span class="icon" :style="{background:'url('+dishheat+') no-repeat -2px 0'}"></span>
          <i class="typetitle" >热量:</i>
          <p class="p"  v-if="dish.heat === 1">大量</p>
          <p class="p"  v-if="dish.heat === 2">适量</p>
          <p class="p"  v-if="dish.heat === 3">微量</p>
          <p class="p"  v-if="dish.heat === 4">无</p>
        </div>
      </div>
      <div style="border-bottom: 2px solid #eee;">
      <div class="left">
        <span class="icon" :style="{background:'url('+dishsugar+')'}"></span>
        <i class="typetitle" >糖分:</i>
        <p class="p" v-if="dish.sugarContent === 1">大量</p>
        <p class="p" v-if="dish.sugarContent === 2">适量</p>
        <p class="p" v-if="dish.sugarContent === 3">微量</p>
        <p class="p"  v-if="dish.sugarContent === 4">无</p>

      </div>
    </div>
    <div style="border-bottom: 2px solid #eee;">
      <div class="left">
        <span class="icon" :style="{background:'url('+analysis+') no-repeat -1px 0px'}"></span>
        <i class="typetitle" >营养价值分析:</i>
        <p class="p" v-text="dish.grease"></p>
      </div>
    </div>
      <x-button type="primary">找商家</x-button>

    </div>
  </div>
</template>

<script>
import { XButton, XHeader } from 'vux'
import dishes from '../../../assets/img/dishes.png'
import icon from '../../../assets/img/dishesicon.png'
import dishhead from '../../../assets/img/dishhead.png'
import dishsugar from '../../../assets/img/sugar.png'
import analysis from '../../../assets/img/analysis.png'
import introduction from '../../../assets/img/Introduction.png'
import ingredients from '../../../assets/img/Ingredients.png'

export default {
  components: {
    XButton,
    XHeader
  },
  data () {
    return {
      dishesIcon: icon,
      dishhead: dishhead,
      dishsugar: dishsugar,
      dishheat: dishhead,
      Introduction: introduction,
      ingredients: ingredients,
      analysis: analysis,
      title: '菜品详情',
      dish: {
        dishId: '',
        dishImage: dishes,
        dishName: '水果串串香',
        dishDesc: '豆腐、西红柿、柠檬、黄瓜、生菜、洋葱',
        dishContent: '食盐、花椒、味精、辣椒粉、香油、冰糖',
        heat: 1, /** 热量，1为低，2为中，3为高 */
        sugarContent: 2, /** 糖分 1为低，2为中，3为高 */
        grease: ''
      }
    }
  },
  mounted () {
//    if (this.$route.params.dishId === undefined) {
//      this.$router.go(-1)
//    }
//    this.$set(this.dish, 'dishId', this.$route.params.dishId)
//    this.get()
  },
  methods: {
    get () {
      this.$store.dispatch('getDish', {
        uri: '/' + this.dish.dishId
      }).then(() => {
        console.info(this.$store.getters.getDish)
        let data = this.$store.getters.getDish
        if (data.code !== -1) {
          data.data.sugarContent = parseInt(data.data.sugarContent)
          data.data.heat = parseInt(data.data.heat)

          this.dish = data.data
        }
      })
    }
  }
}
</script>

<style scoped="" lang="less">
  .bg{
    display: block;
    width:100%;
    background-size: cover;
    background-position: center center;
  }
  .mask{
    width: 100%;
    height:40px;
    padding: 5px 0;
    background-color: rgba(0,0,0,.2);
    font-family:"Microsoft YaHei";
    font-size:18px;
    text-align: center;
    color:#fff;
    position:absolute;
    bottom:0;
  }
  .title{
    height:50px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    font-family:"Adobe Fan Heiti Std B";
    border-bottom: 2px solid #eee;
  }
  .row{
    min-height:50px;
    background: #fff;
    padding:2%;
    padding-top: 0;
    border-bottom: 2px solid #eee;
    position: relative;
  }
  .icon{
    display:inline-block;
    width:50px;
    height:50px;
  }
  .left{
    position: relative;
    background: #fff;
    padding:1%;
    padding-top: 0;
  }
  .typetitle{
    font-size:16px;position: absolute;top: 30%;left: 18%
  }
   .typecontent{
     display: inline-block;font-size:14px;margin-left: 18%;width: 55%;margin-top: -10px;
     padding-top: 0;
  }
  .p{
    position: absolute;left: 35%;top: 33%;font-size: 14px;
  }
</style>
