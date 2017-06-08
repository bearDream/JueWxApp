
<template>
  <div style="">
    <x-header v-on:click="$router.back()">我的订单</x-header>
  </div>
</template>

<script>
  import { XHeader, Flexbox, FlexboxItem, Blur, Masker, Group, Grid, GridItem, Cell, Panel, Flow, FlowState, FlowLine } from 'vux'
  export default {
    components: {
      XHeader,
      Blur,
      Flexbox,
      FlexboxItem,
      Masker,
      Group,
      Grid,
      GridItem,
      Cell,
      Panel,
      Flow,
      FlowState,
      FlowLine
    }}
</script>
