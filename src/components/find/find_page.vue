<template>
  <div style="background-color: #F2F2F2">
    <grid :row="2">

    </grid>
  </div>
</template>

<script>
import {Grid, GridItem, GroupTitle} from 'vux'

export default {
  components: {
    Grid,
    GridItem,
    GroupTitle
  }
}
</script>

<style lang="less">
  grid{
    background:#fff;
  }
</style>
