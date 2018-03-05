/**
* Created by zhanghao on 2018/2/26.
*/
<template>
  <VerticalLayout hHeightOpen="84px">
    <div slot="header" class="layout-div main-header" style="">
      请根据需求编写内容
    </div>
    <div class="layout-div">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </VerticalLayout>
</template>

<script>
  import HorizontalLayout from '../components/HorizontalLayout.vue'
  import VerticalLayout from '../components/VerticalLayout.vue'

  export default {
    components: {HorizontalLayout, VerticalLayout},
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
