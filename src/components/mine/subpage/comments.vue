<template>
  <div>
    <x-header v-on:click="$router.back()"></x-header>
      <divider style="margin-top:0%;font-size:16px;background-color: #fff;">看看大家都怎么说</divider>
      <div class="header">
        <div style="float: left;margin-left: 20px;color: #303036">评论 {{comment}}</div>
        <div style="float: right;">赞 {{goods}}</div>
      </div>
      <div v-if="is_show">
        <div v-for="item in list" >
          <div class="content" >
            <div class="avatar" :style="{backgroundImage: 'url(' + item.headImgUrl + ')'}"></div>
            <p class="f-name">{{item.username}}</p>
            <p class="f-time">{{item.addTime}}</p>
            <p class="f-title">{{item.content}}</p>
          </div>
        </div>
      </div>
      <div v-else style="text-align: center;">
        <p style="padding: 5px 10px 5px 10px;">还没有人评论呢！快来抢个沙发吧</p>
      </div>

      <div style="height: 50px;width: 100%"></div>
      <div class="footer" >
        <div><img :src="reprintb" >&nbsp;&nbsp;转发</div>

        <div @click="show">
          <img :src="commentsb" style="padding-top: 2px">&nbsp;&nbsp;评论
        </div>

        <div @click="takegoods (goods, goodimg)">
          <img :src="goodb" v-if="goodimg === 0" >
          <img :src="gooda" v-if="goodimg === 1" >赞
        </div>
      </div>

      <x-dialog  v-model="showComment"
                 hide-on-blur
                 :dialog-style="{'max-width': '100%', width: '100%', height: '50px',position: 'fixed',top:'96%',
                 'background-color': 'transparent'}">
        <div class="input_style" >
          <input type="text" v-model="commentText" placeholder="输入评论..." autofocus="autofoucus" style="padding-left: 5px;">
          <span @click="sendComment">发送</span>
        </div>
      </x-dialog>
  </div>
</template>
<script>
  import { XHeader, Divider, Rater, XDialog } from 'vux'
  import { mapState } from 'vuex'
  import { Indicator, Toast } from 'mint-ui'
  import ava from '../../../assets/img/avatar1.png'
  import commentsb from '../../../assets/img/commentsb.png'
  import goodb from '../../../assets/img/goodb.png'
  import reprintb from '../../../assets/img/reprintb.png'
  import gooda from '../../../assets/img/gooda.png'
  import time from '../../../utils/helpers/timeLite'
  export default {
    components: {
      XHeader,
      Divider,
      Rater,
      XDialog
    },
    computed: mapState([
      'mine'
    ]),
    data () {
      return {
        articleId: '',
        is_show: false,
        commentsb: commentsb,
        goodb: goodb, /** 点赞之前 */
        gooda: gooda, /** 点赞之后 */
        reprintb: reprintb,
        goodimg: 1,
        comment: 22, /** 评论个数 */
        showComment: false,
        sc: 0,
        commentText: '',
        goods: 30, /** 点赞个数 */
        list: [{
          headImgUrl: ava, /** 用户头像 */
          username: '蕨菜队员', /** 用户名字 */
          addTime: '2017-5-26',
          content: '好的食物应该大家分享，今天的美食推荐给大家~' /** 评论内容 */
        }, {
          headImgUrl: ava, /** 用户头像 */
          username: '波哥', /** 用户名字 */
          addTime: '2017-5-26',
          content: '好的食物应该大家分享，今天的美食推荐给大家~好的食物应该大家分享，今天的美食推荐给大家好的食物应该大家分享，今天的美食推荐给大家好的食物应该大家分享，今天的美食推荐给大家好的食物应该大家分享，今天的美食推荐给大家' /** 评论内容 */
        }, {
          headImgUrl: ava, /** 用户头像 */
          username: '胡歌', /** 用户名字 */
          addTime: '2017-5-26',
          content: '好的食物应该大家分享，今天的美食推荐给大家~' /** 评论内容 */
        }, {
          headImgUrl: ava, /** 用户头像 */
          username: '波哥', /** 用户名字 */
          addTime: '2017-5-26',
          content: '好的食物应该大家分享，今天的美食推荐给大家~好的食物应该大家分享，今天的美食推荐给大家好的食物应该大家分享，今天的美食推荐给大家好的食物应该大家分享，今天的美食推荐给大家好的食物应该大家分享，今天的美食推荐给大家' /** 评论内容 */
        }
        ]
      }
    },
    mounted () {
      if (this.$route.params.articleId === undefined) {
        this.$router.go(-1)
      }
      this.$set(this, 'articleId', this.$route.params.articleId)
      this.get()
    },
    methods: {
      get () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'triple-bounce'
        })
        this.$store.dispatch('getEvaluates', {
          params: {
            objectId: this.articleId,
            evaluateType: 3
          }
        }).then(() => {
          Indicator.close()
          console.info(this.$store.getters.getEvaluates)
          let data = this.$store.getters.getEvaluates
          if (data.code !== -1) {
            this.is_show = true
            for (let i = 0; i < data.data.length; i++) {
              data.data[i].addTime = time.getDate(data.data[i].addTime)
            }
            this.$set(this, 'comment', data.data.length)
            this.$set(this, 'list', data.data)
          } else {
            this.is_show = false
            console.info('没人评价')
          }
        })
      },
      takegoods (goods, goodimg) {
        if (goodimg === 0) {
          this.goodimg += 1
          this.goods += 1
        } else if (goodimg > 0) {
          this.goodimg -= 1
          this.goods -= 1
        }
      },
      show () {
        if (this.sc === 0) {
          this.showComment = true
          this.sc++
        } else if (this.sc === 1) {
          this.showComment = false
          this.sc--
        }
      },
      sendComment () {
        if (this.commentText === '' || this.commentText === undefined) {
          Toast('请输入评论内容')
        }
        Indicator.open({
          text: '发表中...',
          spinnerType: 'triple-bounce'
        })
        this.$store.dispatch('sendEvaluates', {
          data: {
            objectId: this.articleId,
            evaluateType: 3,
            content: this.commentText
          }
        }).then(() => {
          Indicator.close()
          let data = this.$store.getters.getSendEvaluates
          if (data.code !== -1) {
            Toast('发表成功')
            this.showComment = false
          } else {
            Toast('发表失败')
            this.showComment = false
          }
          this.get()
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .avatar{
    display: inline-block;
    width:15%;
    border-radius: 50%;
    padding-bottom:15%;
  }
  .f-name{
    position: absolute;
    top:10px;
    left:20%;
    display:inline-block;
    font-size:16px;
    color:#777;
  }
  .f-time{
    position: absolute;
    top:33px;
    left:20%;
    font-size:12px;
    color:#777;
  }
  .f-title{
    font-size:14px;
    margin-top: -10px;
    margin-left:18%;
    margin-right: 10%;
    color:#666;
  }
  .content {
    background-color: #fff;
    overflow: scroll ;padding:2% 2%; height:auto;
    position: relative;border-top: 1px solid #e9e9e9
  }
  .header{
    width: 100%;height: 30px;font-size: 15px;color: #666
  }
  .header>div{
    height: 30px;width: 70px;
  }
  .footer{
    position: fixed;
    height:50px;
    width:100%;
    bottom: 0;
    display: flex;
    background-color: #FAFAFA;
    justify-content: center;
    font-size: 18px;
    color: #9b9b9b;
  }
  .footer>div{
    height: 50px;
    width: 33%;
    padding-left: 5px;
    border:1px solid #fff;
    text-align: center;
    font-size: 15px;
  }
  .footer div img{
    width: 20px;margin-top: 15px
  }
  .input_style{
    background-color: #F9F9F9;
    /*background-color: #f74c31;*/
    width:100%;height:40px;
    padding-left: 20px;
    font-size: 15px;
    /*color: #9b9b9b;*/
    position: absolute;
    bottom: 0;
  }
  .input_style>input{
    width: 80%;
    height:40px;
    border: none;
    font-size: 12px;
  }
  .input_style>span{
    margin-top: 4px;
    padding: 3px 6px;
    border-radius: 3px;
    /*background-color: #c6c7ca;*/
  }
  </style>
