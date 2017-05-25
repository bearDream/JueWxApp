<template>
  <div style="height:100%;width:100%;background-color: #f2f2f2;">
    <grid :row="2" style="margin-top:12%;">
      <grid-item v-for="i in 2" :key="i"></grid-item>
    </grid>
    <div style="padding:5% 3%;margin-top:2%;background-color:#fff;">
      <div class="t-img" :style="{backgroundImage: 'url(' + list1.img + ')'}">
        <div class="masker" style="background-color: rgba(255, 255, 255, .5);">
          <div class="title">{{ list1.title }}</div>
        </div>
      </div>
    </div>
    <div style="padding:5% 3%;margin-top:2%;background-color:#fff;">
      <div class="e-img" style="margin-right:2%;" :style="{backgroundImage: 'url(' + list2.img1 + ')'}"></div>
      <div class="e-img" style="margin-left: 2.5%;" :style="{backgroundImage: 'url(' + list2.img2 + ')'}"></div>
    </div>
    <div style="padding:5% 3%;margin-top:2%;background-color:#fff;">
      <div class="b-img":style="{backgroundImage: 'url(' + list3.img + ')'}">
        <div class="masker" style="background-color: rgba(0, 0, 0, .3);">
          <div class="title">{{ list3.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import { Grid, GridItem } from 'vux'
 import { mapState } from 'vuex'
 import find1 from '../../assets/img/find1.png'
 import find2 from '../../assets/img/find2.png'
 import find3 from '../../assets/img/find3.png'
 import find4 from '../../assets/img/find4.png'

 export default {
   components: {
     Grid,
     GridItem
   },
   computed: mapState([
     'find'
   ]),
   data () {
     return {
       list1: {
         title: '今日特价，全部菜系打五折',
         img: find1
       },
       list2: {
         img1: find2,
         img2: find3
       },
       list3: {
         img: find4,
         title: '本店饮品今日买一赠一'
       }
     }
   }
 }
</script>

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
</style>
