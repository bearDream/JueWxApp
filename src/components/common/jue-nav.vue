<template>
  <div id="wx-nav">
	<nav>
    <router-link to="/" tag="dl" exact>
        <dt class="iconfont icon-home">
        </dt>
        <dd>首页</dd>
    </router-link>
		<router-link to="/find" tag="dl">
        <dt class="iconfont icon-finds" >
            <!--<i class="new-msg-count">2</i>-->
        </dt>
        <dd>发现</dd>
    </router-link>
		<router-link to="/food" tag="dl">
        <dt class="iconfont icon-food" >
        </dt>
        <dd>排行</dd>
    </router-link>
		<router-link to="/mine" tag="dl">
        <dt class="iconfont icon-mine" >
        </dt>
        <dd>我的</dd>
    </router-link>
    </nav>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
<style>
    @import "../../assets/css/wx-nav.css";
  .icon-home{
    background:url('../../assets/img/icon-gray1.png') no-repeat -20px -83px;
  }
  .icon-finds{
    background:url('../../assets/img/icon-gray1.png') no-repeat -67px -86px;
  }
  .icon-food{
    background:url('../../assets/img/icon-gray1.png') no-repeat -116px -84px;
  }
  .icon-mine{
    background:url('../../assets/img/icon-gray1.png') no-repeat -168px -82px;
  }
  #wx-nav nav dl.router-link-active dt.icon-home{
    background: url('../../assets/img/icon-green1.png') no-repeat -20px -83px;
  }
  #wx-nav nav dl.router-link-active dt.icon-finds{
    background: url('../../assets/img/icon-green1.png') no-repeat -67px -86px;
  }
  #wx-nav nav dl.router-link-active dt.icon-food{
    background: url('../../assets/img/icon-green1.png') no-repeat -116px -84px;
  }
  #wx-nav nav dl.router-link-active dt.icon-mine{
    background: url('../../assets/img/icon-green1.png') no-repeat -168px -82px;
  }
</style>
