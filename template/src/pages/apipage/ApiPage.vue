/**
* Created by zhanghao on 2018/3/19.
*/
<template>
  <HorizontalLayout lWidthOpen="200px" lWidthColse="50px">
    <div slot="left" class="layout-div menu-layout">
      <ul>
        <li v-for="li in list" :key="li.id" @click="goto(li.id)">{{li.name}}</li>
      </ul>
    </div>
    <div class="layout-div scrollbar-main">
      <el-scrollbar  :noresize="false" :native="false" >
        <div class="scrollbar-layout">
          <div id="Calendar" class="mdiv" >
            <Calendar class="" size="small" :isCheckBoxShow="true" style="height: 30px" placeholder="" :date="data" @select="calendarSelect">
            </Calendar>
            <div>
              <code  class="hljs-tag">
                &lt;calendarInput :zero=&quot;calendar3.zero&quot; :lunar=&quot;calendar3.lunar&quot; :value=&quot;calendar3.value&quot; :isCheckBoxShow=&quot;calendar3.isCheckBoxShow&quot;
                :begin=&quot;calendar3.begin&quot; :end=&quot;calendar3.end&quot; @select=&quot;calendarSelect&quot; :display=&quot;calendar3.display&quot;&gt;
                &lt;/calendarInput&gt;
              </code>
              <div>
                <div class="hljs-tag">&lt;script&gt;</div>
                <div class="hljs-tag">&nbsp;&nbsp;import calendarInput from '../../components/Calendar.vue'</div>
                <div class="hljs-tag">&nbsp;&nbsp;export default {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;components: {calendarInput},</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;data () {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calendar3: {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;show: false,</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zero: true,</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lunar: false, // 显示农历</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isCheckBoxShow: true</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
                <div class="hljs-tag">&nbsp;&nbsp;},</div>
                <div class="hljs-tag">&nbsp;&nbsp;methods: {},</div>
                <div class="hljs-tag">&nbsp;&nbsp;mounted () {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;calendarSelect (value) {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
                <div class="hljs-tag">&nbsp;&nbsp;}</div>
                <div class="hljs-tag">}</div>
                <div class="hljs-tag">&lt;/script&gt;</div>
              </div>
            </div>
            <el-table :data="codeData" style="width: 98%">
              <el-table-column prop="canshu" label="参数" width="180"></el-table-column>
              <el-table-column prop="shuoming" label="说明" width="180"></el-table-column>
              <el-table-column prop="leixing" label="类型"></el-table-column>
              <el-table-column prop="kexuanzhi" label="可选值"></el-table-column>
              <el-table-column prop="morenzhi" label="默认值"></el-table-column>
            </el-table>
          </div>
          <div id="CitySelect" class="mdiv">b</div>
          <div id="HdVideo" class="mdiv">c</div>
          <div id="HorizontalLayout" class="mdiv">d</div>
          <div id="SelectTree" class="mdiv">f</div>
          <div id="TreeMenu" class="mdiv">e</div>
          <div id="VerticalLayout" class="mdiv">g</div>
        </div>
      </el-scrollbar>
    </div>
  </HorizontalLayout>
</template>

<script>
import HorizontalLayout from '../../components/HorizontalLayout.vue'
import VerticalLayout from '../../components/VerticalLayout.vue'
import Calendar from '../../components/Calendar.vue'
import CitySelect from '../../components/CitySelect.vue'
import HdVideo from '../../components/HdVideo.vue'
import SelectTree from '../../components/SelectTree.vue'
import TreeMenu from '../../components/TreeMenu.vue'
export default {
  components: {HorizontalLayout, VerticalLayout, Calendar, CitySelect, HdVideo, SelectTree, TreeMenu},
  data () {
    return {
      list: [
        {name: 'Calendar', id: 'Calendar'},
        {name: 'CitySelect', id: 'CitySelect'},
        {name: 'HdVideo', id: 'HdVideo'},
        {name: 'TreeMenu', id: 'TreeMenu'},
        {name: 'SelectTree', id: 'SelectTree'},
        {name: 'HorizontalLayout', id: 'HorizontalLayout'},
        {name: 'VerticalLayout', id: 'VerticalLayout'}
      ],
      data: '2018-02-12',
      codeData: [
        {canshu: 'show', shuoming: '是否显示', leixing: 'boolean', kexuanzhi: '--', morenzhi: 'false'},
        {canshu: 'zero', shuoming: '是否在日期前用0补齐', leixing: 'boolean', kexuanzhi: '--', morenzhi: 'false'},
        {canshu: 'lunar', shuoming: '是否显示农历', leixing: 'boolean', kexuanzhi: '--', morenzhi: 'false'},
        {canshu: 'isCheckBoxShow', shuoming: '是否为复选', leixing: 'boolean', kexuanzhi: '--', morenzhi: 'false'},
        {canshu: 'select', shuoming: '选择之后的回调钩子', leixing: 'function', kexuanzhi: '--', morenzhi: 'false'}
      ]
    }
  },
  methods: {
    goto (id) {
      window.location.hash = `#${id}`
    },
    calendarSelect (value) {
      console.log(value)
      this.data = value
    }
  },
  mounted () {
    let h = ($('.scrollbar-main')[0].offsetHeight)
    $('.scrollbar-layout').css('height', h + 'px')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mdiv{
  display: block;
  min-height: 200px;
}
.menu-layout ul li{
  padding-left: 10px;
  line-height: 36px;
  height: 36px;
  cursor: pointer;
}
.menu-layout ul li:hover{
  background-color: #63baff;
  color: #4c84ff;
}
.hljs-tag{
  font-family: Menlo,Monaco,Consolas,Courier,monospace;
  font-weight: 400;
  line-height: 1.8;
  font-size: 12px;
}
</style>
