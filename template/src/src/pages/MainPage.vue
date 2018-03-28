/**
* Created by zhanghao on 2018/2/26.
*/
<template>
  <VerticalLayout hHeightOpen="84px">
    <div slot="header" class="layout-div main-header" style="">
      <HorizontalLayout lWidthOpen="72px" rWidthOpen="200px" class="main-header-top" style="">
        <div slot="left" class="layout-div">
          <div class="logo">LOGO</div>
        </div>
        <div></div>
        <div slot="right" class="layout-div">
          <div class="logo">
            <el-button @click="addTheme">修改主题</el-button>
          </div>
        </div>
      </HorizontalLayout>
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
  data () {
    return {
      theme: false
    }
  },
  methods: {
    addTheme () {
      if (this.theme) {
        $('#app').removeClass('themeA')
      } else {
        $('#app').addClass('themeA')
      }
      this.theme = !this.theme
    }
  },
  mounted () {
    console.log(123)
    this.$router.push({path: '/api'})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  height: 84px;
  line-height: 84px;
  font-size: 24px;
  color: #fff;
  text-align: center;
}
</style>
