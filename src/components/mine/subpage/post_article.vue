<template>
  <div>
    <x-header :left-options="{backText: ''}" style="background: transparent;position: fixed;" v-on:click="$router.back()"></x-header>
    <div>
      <group title="">
        <x-input title="标题" placeholder="快起一个文艺的标题吧" v-model="title"  :show-clear="true" @on-blur="onTitleBlur" placeholder-align="center"></x-input>
        <x-textarea :max="200" name="description" v-model="content"   placeholder="分享有趣的食话食说" @on-blur="onContentBlur"></x-textarea>
      </group>
      <!-- 封面图回显照片区域 -->
      <Upload :action="action" :on-success="handleCoverSuccess"
              v-if="showCoverUpload"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
              :on-format-error="handleFormatError"
              :on-exceeded-size="handleMaxSize"
              :before-upload="handleBeforeUpload">
        <label class="cover">
          <p>+添加封面</p>
        </label>
      </Upload>
      <div style="padding: 5px 20px 5px 20px;" v-else>
        <img style="width:100%;height: 50%;" :src="coverImage">
      </div>
        <!-- iView的upload上传组件 -->
      <divider>上传你想分享的图片</divider>
      <div class="upload">
        <div class="demo-upload-list" v-for="item in uploadList">
          <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
              <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
              <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
          </template>
          <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
          </template>
        </div>
        <Upload
          ref="recUpload"
          :show-upload-list="false"
          :default-file-list="defaultList"
          :on-success="handleSuccess"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          :on-format-error="handleFormatError"
          :on-exceeded-size="handleMaxSize"
          :before-upload="handleBeforeUpload"
          multiple
          type="drag"
          :action="action"
          style="display: inline-block;width:58px;">
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="camera" size="20"></Icon>
          </div>
        </Upload>
      </div>
      <x-button type="primary" :disabled="can_post" :show-loading="submieLoading" @click.native="submit()">发表</x-button>
      <!-- 上传后的图片地址 -->
      <input v-show="false" value="" v-model="recImage"/>
      <input v-show="false" value="" v-model="coverImage"/>
    </div>
  </div>
</template>
<script>
  import {Indicator} from 'mint-ui'
  import { XHeader, Divider, XInput, XTextarea, Group, XButton, XImg } from 'vux'
  import consts from '../../../utils/consts'
  import axios from 'axios'

  export default {
    components: {
      XHeader,
      Divider,
      XInput,
      XTextarea,
      Group,
      XButton,
      XImg
    },
    data () {
      return {
        submieLoading: false,
        showCoverUpload: true,
        can_post: true,
        content: '',
        recImage: '',
        coverImage: '',
        title: '',
        action: '',
        defaultList: [],
        imgName: '',
        visible: false,
        uploadList: []
      }
    },
    mounted () {
      this.uploadList = this.$refs.recUpload.fileList
      let param = '?' + 'type=' + 'article'
      this.$set(this, 'action', consts.UPLOAD_URL + '/singleUpload' + param)
    },
    methods: {
      handleView (name) {
        this.imgName = name
        this.visible = true
      },
      handleRemove (file) {
        // 从 upload 实例删除数据
        const fileList = this.$refs.recUpload.fileList
        this.$refs.recUpload.fileList.splice(fileList.indexOf(file), 1)
      },
      handleSuccess (res, file) {
        if (res.code === -1) {
          this.$vux.toast.show({
            text: '上传失败'
          })
        } else {
          file.url = res.data
          file.name = ''
          // 拼接方形图片url地址
          this.$set(this, 'recImage', file.url + ',' + this.recImage)
          console.info(this.recImage)
          this.checkFiled()
        }
      },
      handleCoverSuccess (res, file) {
        if (res.code === -1) {
          this.$vux.toast.show({
            text: '上传失败'
          })
        } else {
          file.url = res.data
          file.name = ''
          // 设置封面图片url地址
          this.$set(this, 'coverImage', file.url)
          console.info(this.coverImage)
          // 设置upload组件不显示
          // 将img显示出来并把url赋值给他
          this.showCoverUpload = false
          this.checkFiled()
        }
      },
      handleFormatError (file) {
        this.$vux.toast.show({
          text: '文件格式不正确，请上传 jpg 或 png 格式的图片'
        })
      },
      handleMaxSize (file) {
        this.$vux.toast.show({
          text: '超出文件大小限制，不能超过 2M'
        })
      },
      handleBeforeUpload () {
        const check = this.uploadList.length < 5
        if (!check) {
          this.$vux.toast.show({
            text: '上传失败'
          })
        }
        return check
      },
      onTitleBlur () {
        this.checkFiled()
        console.info('blur')
      },
      onContentBlur () {
        this.checkFiled()
        console.info('contentBlur')
      },
      checkFiled () {
        // 校验字段是否都填写
        if (this.title !== '' && this.content !== '' && this.recImage !== '' && this.coverImage !== '') {
          this.can_post = false
        } else {
          this.can_post = true
        }
      },
      submit () {
        // 将recImage的最后一个逗号截取
        this.$set(this, 'recImage', this.recImage.substring(0, this.recImage.length - 1))
        console.info(this.recImage)
        let data = {
          title: this.title,
          content: this.content,
          recImage: this.recImage,
          coverImage: this.coverImage
        }
        // 显示loading弹层和按钮的loading动画
        Indicator.open({
          text: '小蕨努力上传中...',
          spinnerType: 'snake'
        })
        this.submieLoading = true
        // 发送请求提交数据
        axios.post(consts.API_URL + 'article', data).then(res => {
          if (res.code !== -1) {
            // 上传成功，关闭该页面
            this.$router.go(-1)
          } else {
            // 上传失败，不关闭该页面
            this.$vux.toast.text(res.msg, 'middle')
          }
          this.submieLoading = false
          Indicator.close()
        })
      }
    }
  }
</script>
<style>
  .demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>
<style>
  .upload{
    margin: 10px 10px 10px 10px;
  }
  .cover{
    display: block;
    margin: 20px;
    width: 90%;
    height: 100px;
    position: relative;
    border: 2px dashed #c9c9c9;
    z-index: 2;
  }
  .cover p{
    color: #c9c9c9;
    font-size: 20px;
    text-align: center;
    position: absolute;
    top:30px;
    left: 35%;
    z-index: 0;
  }
</style>
