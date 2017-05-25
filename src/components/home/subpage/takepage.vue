<template>
  <div>
    <x-header v-on:click="$router.back()">取号</x-header>

    <div class="card-demo-flex card-demo-content">
      <div >
        <group>
          <cell title="附近" is-link
                :border-intent="false"
                :arrow-direction="showContent001 ? 'up' : 'down'"
                @click.native="show1">
          </cell>
        </group>
      </div>
      <div >
        <group>
          <cell
            title="全部"
            is-link
            :border-intent="false"
            :arrow-direction="showContent002 ? 'up' : 'down'"
            @click.native="show2"></cell>

          <template v-if="showContent002">
            <cell-box :border-intent="false" class="sub-item" is-link>content 001</cell-box>
            <cell-box class="sub-item" is-link>content 001</cell-box>
            <cell-box class="sub-item" is-link>content 001</cell-box>
          </template>
        </group>
      </div>
      <div>
        <group>
          <cell
            title="排序"
            is-link
            :border-intent="false"
            :arrow-direction="showContent003 ? 'up' : 'down'"
            @click.native="show3"></cell>
        </group>
      </div>

    </div>

    <template v-if="showContent001" style="position: fixed">
      <panel :list="list1">
      </panel>
    </template>

    <template v-if="showContent003" style="position: fixed">
      <panel :list="list3">
      </panel>
    </template>




  </div>
</template>

<script>
  import { CellBox, Card, Masker, XHeader, TransferDom, Group, Cell, Panel } from 'vux'
  import img1 from '../../../assets/img/8.png'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Masker,
      XHeader,
      Group,
      Cell,
      Card,
      CellBox,
      Panel
    },
//    created () {
//      // 数据交互：通过this.$route.params或.query取出数据
//      console.info(this.$route.params)
//    },
    data () {
      return {
        showContent001: true,
        showContent002: false,
        showContent003: false,
        list1: [{
          src: img1,
          title: '海底捞11',
          desc: '环城路'
        }],
        list3: [{
          src: img1,
          title: '海底捞',
          desc: '排队'
        }]
      }
    },
    mounted () {
      // 进入页面的钩子函数
    },
    methods: {
      business_info (item) {
        alert(item.title)
      },
      show1 () {
        this.showContent001 = !this.showContent001
        this.showContent003 = false
        this.showContent002 = false
      },
      show2 () {
        this.showContent002 = !this.showContent002
        this.showContent003 = false
        this.showContent001 = false
      },
      show3 () {
        this.showContent003 = !this.showContent003
        this.showContent002 = false
        this.showContent001 = false
      }
    }
  }
</script>

<style scoped="" lang="less">
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01  {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
</style>
