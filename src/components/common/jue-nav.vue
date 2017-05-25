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
		<router-link to="/ranking" tag="dl">
        <dt class="iconfont icon-ranking" >
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
    background:url('../../assets/img/icon-gray.png') no-repeat -6px -86px;
  }
  .icon-finds{
    background:url('../../assets/img/icon-gray.png') no-repeat -50px -86px;
  }
  .icon-ranking{
    background:url('../../assets/img/icon-gray.png') no-repeat -95px -87px;
  }
  .icon-mine{
    background:url('../../assets/img/icon-gray.png') no-repeat -141px -86px;
  }
  #wx-nav nav dl.router-link-active dt.icon-home{
    background: url('../../assets/img/icon-green.png') no-repeat -6px -86px;
  }
  #wx-nav nav dl.router-link-active dt.icon-finds{
    background: url('../../assets/img/icon-green.png') no-repeat -50px -86px;
  }
  #wx-nav nav dl.router-link-active dt.icon-ranking{
    background: url('../../assets/img/icon-green.png') no-repeat -95px -87px;
  }
  #wx-nav nav dl.router-link-active dt.icon-mine{
    background: url('../../assets/img/icon-green.png') no-repeat -141px -86px;
  }
</style>
