<template>
  <div>
    <x-header v-on:click="$router.back()">发布文章</x-header>
    <Upload
      ref="upload"
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
      action="//jsonplaceholder.typicode.com/posts/"
      style="display: inline-block;width:58px;">
      <div style="width: 58px;height:58px;line-height: 58px;">
        <Icon type="camera" size="20"></Icon>
      </div>
    </Upload>
    <div style="padding: 20px">
      <div class="coverparent" >
        <form action="" style="display: none">
          <input type="file"  accept="image/*" v-on:change="upimgfile" id="imgfile" >
        </form>
        <label class="cover" for="imgfile" >
          +添加封面
        </label>
        <label class="changeimg" for="imgfile">没选好换一张~</label>
      </div>
      <input class="title" style="display: block" placeholder="标题...">
      <div class="upimglabelparent">
        <form action="" style="display: none">
          <input type="file"  accept="image/*" v-on:change="upimgs" id="upimgs" >
        </form>
        <label class="upimglabel" for="upimgs" >
          +上传图片-
        </label>
      </div>
    </div>
  </div>
</template>
<script>
  import { XHeader } from 'vux'
  import { Upload, Icon } from 'iview'
  import avatar from '../../../assets/img/avatar.jpg'
  export default {
    components: {
      XHeader,
      Upload,
      Icon
    },
    data () {
      return {
        defaultList: [
          {
            'name': 'a42bdcc1178e62b4694c830f028db5c0',
            'url': avatar
          },
          {
            'name': 'bc7521e033abdd1e92222d733590f104',
            'url': avatar
          }
        ],
        imgName: '',
        visible: false,
        uploadList: []
      }
    },
    mounted () {
      this.uploadList = this.$refs.upload.fileList
    },
    methods: {
      upimgfile () {
        var fi = document.getElementById('imgfile').files[0]
        var cover = document.getElementsByClassName('cover')[0]
        var coverparent = document.getElementsByClassName('coverparent')[0]
        var changeimg = document.getElementsByClassName('changeimg')[0]
        var title = document.getElementsByClassName('title')[0]
        if (fi) {
          var reader = new FileReader()
          reader.readAsDataURL(fi)
          reader.onload = function (e) {
            coverparent.style.height = '180px'
            coverparent.style.backgroundImage = 'url(' + this.result + ')'
            cover.style.display = 'none'
            changeimg.style.display = 'block'
            title.style.top = '260px'
          }
        }
      },
      upimgs () {
        var upimglabel = document.getElementsByClassName('upimglabel')[0]
        var ui = document.getElementById('upimgs').files[0]
        if (ui) {
          var reader = new FileReader()
          reader.readAsDataURL(ui)
          reader.onload = function (e) {
            var img = document.createElement('img')
            img.style.width = '100px'
            img.src = this.result
            upimglabel.parentNode.appendChild(img)
          }
        }
      },
      handleView (name) {
        this.imgName = name
        this.visible = true
      },
      handleRemove (file) {
        // 从 upload 实例删除数据
        const fileList = this.$refs.upload.fileList
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
      },
      handleSuccess (res, file) {
        // 因为上传过程为实例，这里模拟添加 url
        file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
        file.name = '7eb99afb9d5f317c912f08b5212fd69a'
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
        })
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: '超出文件大小限制',
          desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
        })
      },
      handleBeforeUpload () {
        const check = this.uploadList.length < 5
        if (!check) {
          this.$Notice.warning({
            title: '最多只能上传 5 张图片。'
          })
        }
        return check
      }
    }
  }
</script>
<style>
  .coverparent{
    width: 100%;
    height: 100px;
  }
  .cover {
    display: block;
    height: 100px;
    border: 2px dashed #c9c9c9;
    color: #c9c9c9;
    font-size: 20px;
    text-align: center;
    line-height: 90px;
  }
  .changeimg{
    display: block;
    font-size: 15px;
    padding: 3px 10px 3px;
    color: #fff;
    border-radius: 2px;
    position: fixed;
    background-color: rgba(0,0,0,.2);
    right:20px;
    top: 220px;
    display: none;
  }
  .title{
    /*position: absolute;*/
    color: #7d7e83;
    font-size: 25px;
    margin-right: 0;
    margin-top:20px;
    padding-top: 10px;
    padding-bottom: 30px;
    border:none;
    border-bottom: 1px solid #c9c9c9;
    margin-bottom: 30px;
  }
  .upimglabelparent{
    width: 100%;
  }
  .upimglabel{
    display: inline-block;
    width:100px;
    height: 100px;
    border: 2px dashed #c9c9c9;
    color: #c9c9c9;
    font-size: 16px;
    text-align: center;
    line-height: 90px;
  }
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
