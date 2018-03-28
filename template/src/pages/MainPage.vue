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
            <span @click="addTheme">修改主题</span>
            <span @click="openApi">api说明</span>
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
    },
    openApi () {
      window.open('http://211.101.37.245:9083/dist/index.html')
    }
  },
  mounted () {
    console.log(123)
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
.logo span{
  font-size: 20px;
  cursor: pointer;
}
.logo span:hover{
  color: #63baff;
}
</style>
