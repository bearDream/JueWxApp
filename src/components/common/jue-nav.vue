<template>
  <div id="wx-nav">
	<nav>
    <router-link to="/" tag="dl" exact>
        <dt class="iconfont icon-wechat" >
            <i class="new-msg-count"></i>
        </dt>
        <dd>首页</dd>
    </router-link>
		<router-link to="/find" tag="dl">
        <dt class="iconfont icon-contact" >
            <!--<i class="new-msg-count">2</i>-->
        </dt>
        <dd>发现</dd>
    </router-link>
		<router-link to="/ranking" tag="dl">
        <dt class="iconfont icon-find" >
            <i class="new-msg-dot"></i>
        </dt>
        <dd>排行</dd>
    </router-link>
		<router-link to="/mine" tag="dl">
        <dt class="iconfont icon-me" >
            <!--<i class="new-msg-dot"></i>-->
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
</style>
