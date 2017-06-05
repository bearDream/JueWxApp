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

    <div  v-if="showContent001" v-for="item in list1">
      <div style="padding:4% 4%;margin-top:2%;background-color:#fff;">
        <div class="t-img" :style="{backgroundImage: 'url(' + item.img1 + ')'}">
          <div class="masker" style="background-color: rgba(0, 0, 0, .3);">
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <div style="padding:4% 4%;margin-top:2%;background-color:#fff;">
        <div>
          <div class="e-img" style="margin-right:2%;" :style="{backgroundImage: 'url(' + item.img2 + ')'}"></div>
          <div class="e-img" style="margin-left: 2.5%;" :style="{backgroundImage: 'url(' + item.img3 + ')'}"></div>
        </div>
      </div>
      <div style="padding:4% 4%;margin-top:2%;background-color:#fff;">
        <div>
          <div class="e-img" style="margin-right:2%;" :style="{backgroundImage: 'url(' + item.img3 + ')'}"></div>
          <div class="e-img" style="margin-left: 2.5%;" :style="{backgroundImage: 'url(' + item.img5 + ')'}"></div>
        </div>
      </div>
    </div>

    <div  v-if="showContent002" v-for="item in list2" @click="GoDishesDetail">
      <div style="padding:4% 4%;margin-top:2%;background-color:#fff;">
        <div class="t-img" :style="{backgroundImage: 'url(' + item.img1 + ')'}">
          <div class="masker" style="background-color: rgba(255, 255, 255, .5);">
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <div style="padding:4% 4%;margin-top:2%;background-color:#fff;">
        <div style="padding:3% 0%;margin-top:2%;background-color:#fff;">
          <div class="e-img" style="margin-right:2%;" :style="{backgroundImage: 'url(' + item.img3 + ')'}"></div>
          <div class="e-img" style="margin-left: 2.5%;" :style="{backgroundImage: 'url(' + item.img4 + ')'}"></div>
        </div>
      </div>
      <div style="padding:4% 4%;margin-top:2%;background-color:#fff;">
        <div class="t-img" :style="{backgroundImage: 'url(' + item.img5 + ')'}">
          <div class="masker" style="background-color: rgba(0, 0, 0, .3);">
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Grid, GridItem, Group, Cell } from 'vux'
  import { mapState } from 'vuex'

  import find1 from '../../assets/img/find1.png'
  import find2 from '../../assets/img/find2.png'
  import find3 from '../../assets/img/find3.png'
  import find4 from '../../assets/img/find4.png'

  import find5 from '../../assets/img/5-1.png'
  import find6 from '../../assets/img/5-2.png'
  import find7 from '../../assets/img/5-3.png'
  import find8 from '../../assets/img/5-4.png'
  import find9 from '../../assets/img/5-5.png'
  import find10 from '../../assets/img/5-6.png'

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
        showContent001: true,
        showContent002: false,
        list1: [
          {
            title: '本店饮品今日买一赠一',
            img5: find5,
            img2: find6,
            img3: find7,
            img4: find8,
            img6: find10,
            img1: find4
          }
        ],
        list2: [
          {
            title: '今日特价，全部菜系打五折',
            img1: find1,
            img3: find2,
            img4: find3,
            img5: find9
          }
        ]
      }
    },
    methods: {
      show1 () {
        this.showContent001 = true
        this.showContent002 = false
      },
      show2 () {
        this.showContent001 = false
        this.showContent002 = true
      },
      GoDishesDetail () {
        this.$router.push({name: 'dishesDetail'})
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
  .weui-cells , .vux-no-group-title{
    border-top: none!important;
    margin-top: 0!important;
  }
</style>
