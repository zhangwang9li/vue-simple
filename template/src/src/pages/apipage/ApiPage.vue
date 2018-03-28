/**
* Created by zhanghao on 2018/3/19.
*/
<template>
  <HorizontalLayout lWidthOpen="200px" lWidthColse="50px">
    <div slot="left" class="layout-div menu-layout">
      <ul>
        <li v-for="li in list" :key="li.id" @click="goto(li.id)">\{{li.name}}</li>
      </ul>
    </div>
    <div class="layout-div scrollbar-main">
      <el-scrollbar  :noresize="false" :native="false" >
        <div class="scrollbar-layout">
          <div id="Calendar" class="mdiv" >
            <p class="title">多选日历</p>
            <Calendar class="" size="small" :isCheckBoxShow="true" style="height: 30px" placeholder="" :date="data" @select="calendarSelect">
            </Calendar>
            <div style="padding: 15px 0">
              <code  class="hljs-tag">
                &lt;calendarInput :zero=&quot;calendar3.zero&quot; :lunar=&quot;calendar3.lunar&quot; :date=&quot;calendar3.data&quot; :isCheckBoxShow=&quot;calendar3.isCheckBoxShow&quot;
                :begin=&quot;calendar3.begin&quot; :end=&quot;calendar3.end&quot; @select=&quot;calendarSelect&quot; &gt;
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
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: '2018-03-23',</div>
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
              <el-table :data="codeData" style="width: 98%">
                <el-table-column prop="canshu" label="参数" width="180"></el-table-column>
                <el-table-column prop="shuoming" label="说明" width="180"></el-table-column>
                <el-table-column prop="leixing" label="类型"></el-table-column>
                <el-table-column prop="kexuanzhi" label="可选值"></el-table-column>
                <el-table-column prop="morenzhi" label="默认值"></el-table-column>
              </el-table>
            </div>
          </div>
          <div id="CitySelect" class="mdiv">
            <p class="title">单选城市</p>
            <div style="position: relative;width: 300px" v-if="true">
              <CitySelect :labelShow="true" :model="city" @citySelect="getFormCity"></CitySelect>
            </div>
            <div>
              <code>
                &lt;CitySelect :labelShow=&quot;true&quot; :model=&quot;city&quot; @citySelect=&quot;getFormCity&quot;&gt;&lt;/CitySelect&gt;
              </code>
              <div>
                <div class="hljs-tag">&lt;script&gt;</div>
                <div class="hljs-tag">&nbsp;&nbsp;import CitySelect from '../../components/CitySelect.vue'</div>
                <div class="hljs-tag">&nbsp;&nbsp;export default {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;components: {CitySelect},</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;data () {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;city: '123'</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
                <div class="hljs-tag">&nbsp;&nbsp;methods: {},</div>
                <div class="hljs-tag">&nbsp;&nbsp;mounted () {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;getFormCity (value) {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
                <div class="hljs-tag">&nbsp;&nbsp;}</div>
                <div class="hljs-tag">}</div>
                <div class="hljs-tag">&lt;/script&gt;</div>
              </div>
              <el-table :data="citySelectData" style="width: 98%">
                <el-table-column prop="canshu" label="参数" width="180"></el-table-column>
                <el-table-column prop="shuoming" label="说明" width="180"></el-table-column>
                <el-table-column prop="leixing" label="类型"></el-table-column>
                <el-table-column prop="kexuanzhi" label="可选值"></el-table-column>
                <el-table-column prop="morenzhi" label="默认值"></el-table-column>
              </el-table>
            </div>
          </div>
          <div id="HdVideo" class="mdiv">
            <p class="title">视频播放</p>

            <div style="position: relative;width: 100%;height: 300px">
              <HdVideo videoUrl="http://vjs.zencdn.net/v/oceans.mp4" videotype="mp4"></HdVideo>
            </div>
            <div>
              <code>
                &lt;HdVideo videoUrl=&quot;http://vjs.zencdn.net/v/oceans.mp4&quot; videotype=&quot;mp4&quot;&gt;&lt;/HdVideo&gt;
              </code>
              <div>
                <div class="hljs-tag">&lt;script&gt;</div>
                <div class="hljs-tag">&nbsp;&nbsp;import HdVideo from '../../components/HdVideo.vue'</div>
                <div class="hljs-tag">&nbsp;&nbsp;export default {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;components: {HdVideo},</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;data () {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
                <div class="hljs-tag">&nbsp;&nbsp;methods: {},</div>
                <div class="hljs-tag">&nbsp;&nbsp;mounted () {}</div>
                <div class="hljs-tag">}</div>
                <div class="hljs-tag">&lt;/script&gt;</div>
              </div>
              <el-table :data="videoData" style="width: 98%">
                <el-table-column prop="canshu" label="参数" width="180"></el-table-column>
                <el-table-column prop="shuoming" label="说明" width="180"></el-table-column>
                <el-table-column prop="leixing" label="类型"></el-table-column>
                <el-table-column prop="kexuanzhi" label="可选值"></el-table-column>
                <el-table-column prop="morenzhi" label="默认值"></el-table-column>
              </el-table>
            </div>
          </div>
          <div id="TreeMenu" class="mdiv">
            <p class="title">树菜单</p>

            <div style="position: relative;width: 300px;height: 300px" >
              <el-scrollbar  :noresize="false" :native="false" >
                <div style="height: 300px">
                  <TreeMenu id="treeId" :zNodes="nodes" :setting="defaultSetting" @selectNode="selectNode"></TreeMenu>
                </div>
              </el-scrollbar>
            </div>
          </div>
          <div id="SelectTree" class="mdiv">
            <p class="title">下拉选择树</p>

            <div style="position: relative;width: 300px" >
              <SelectTree v-if="true" class="selectTree" v-model="id" :urlFunc="$api.getCargroupTree"
                          PrimaryKey="id" :isCheckBox="false"
                          :dataKey="{name: 'name'}" placeholder="所属车队"
                          :isCheckchild="true"  :easyData="easyData" :zNodes="nodes"
                          @treeSelect="selecttreeCd">
              </SelectTree>
            </div>
          </div>
          <div id="HorizontalLayout" class="mdiv">
            <p class="title">水平布局</p>

            <div style="position: relative;width: 100%;height: 300px">
              <HorizontalLayout lWidthOpen="200px" lWidthColse="50px" :lIsCollapse="false" rWidthOpen="200px" rWidthColse="20px" :rIsCollapse="true">
                <div slot="left" class="layout-div" style="background-color: red"></div>
                <div class="layout-div" style="background-color: #4c84ff"></div>
                <div slot="right" class="layout-div" style="background-color: darkgray"></div>
              </HorizontalLayout>
            </div>
            <div>
              <code>
                &lt;HorizontalLayout lWidthOpen=&quot;200px&quot; lWidthColse=&quot;50px&quot; :lIsCollapse=&quot;false&quot; rWidthOpen=&quot;200px&quot; rWidthColse=&quot;20px&quot; :rIsCollapse=&quot;true&quot;&gt;
                &lt;div slot=&quot;left&quot; class=&quot;layout-div&quot; style=&quot;background-color: red&quot;&gt;&lt;/div&gt;
                &lt;div class=&quot;layout-div&quot; style=&quot;background-color: #4c84ff&quot;&gt;&lt;/div&gt;
                &lt;div slot=&quot;right&quot; class=&quot;layout-div&quot; style=&quot;background-color: darkgray&quot;&gt;&lt;/div&gt;
                &lt;/HorizontalLayout&gt;
              </code>
              <div>
                <div class="hljs-tag">&lt;script&gt;</div>
                <div class="hljs-tag">&nbsp;&nbsp;import HorizontalLayout from '../../components/HorizontalLayout.vue'</div>
                <div class="hljs-tag">&nbsp;&nbsp;export default {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;components: {HorizontalLayout},</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;data () {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
                <div class="hljs-tag">&nbsp;&nbsp;methods: {},</div>
                <div class="hljs-tag">&nbsp;&nbsp;mounted () {}</div>
                <div class="hljs-tag">}</div>
                <div class="hljs-tag">&lt;/script&gt;</div>
              </div>
              <el-table :data="horizontalLayoutData" style="width: 98%">
                <el-table-column prop="canshu" label="参数" width="180"></el-table-column>
                <el-table-column prop="shuoming" label="说明" width="180"></el-table-column>
                <el-table-column prop="leixing" label="类型"></el-table-column>
                <el-table-column prop="kexuanzhi" label="可选值"></el-table-column>
                <el-table-column prop="morenzhi" label="默认值"></el-table-column>
              </el-table>
            </div>
          </div>
          <div id="VerticalLayout" class="mdiv">
            <p class="title">垂直布局</p>
            <div style="position: relative;width: 100%;height: 300px" >
              <VerticalLayout hHeightOpen="84px" fHeightOpen="100px">
                <div slot="header" class="layout-div" style="background-color: #4c84ff"></div>
                <div class="layout-div" style="background-color: #19233c"></div>
                <div slot="footer" class="layout-div" style="background-color: #00B83F"></div>
              </VerticalLayout>
            </div>
            <div>
              <code>
                &lt;VerticalLayout hHeightOpen=&quot;84px&quot; fHeightOpen=&quot;100px&quot;&gt;
                &lt;div slot=&quot;header&quot; class=&quot;layout-div&quot; style=&quot;background-color: #4c84ff&quot;&gt;&lt;/div&gt;
                &lt;div class=&quot;layout-div&quot; style=&quot;background-color: #19233c&quot;&gt;&lt;/div&gt;
                &lt;div slot=&quot;footer&quot; class=&quot;layout-div&quot; style=&quot;background-color: #00B83F&quot;&gt;&lt;/div&gt;
                &lt;/VerticalLayout&gt;
              </code>
              <div>
                <div class="hljs-tag">&lt;script&gt;</div>
                <div class="hljs-tag">&nbsp;&nbsp;import VerticalLayout from '../../components/VerticalLayout.vue'</div>
                <div class="hljs-tag">&nbsp;&nbsp;export default {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;components: {VerticalLayout},</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;data () {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
                <div class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp;},</div>
                <div class="hljs-tag">&nbsp;&nbsp;methods: {},</div>
                <div class="hljs-tag">&nbsp;&nbsp;mounted () {}</div>
                <div class="hljs-tag">}</div>
                <div class="hljs-tag">&lt;/script&gt;</div>
              </div>
              <el-table :data="vLayoutData" style="width: 98%">
                <el-table-column prop="canshu" label="参数" width="180"></el-table-column>
                <el-table-column prop="shuoming" label="说明" width="180"></el-table-column>
                <el-table-column prop="leixing" label="类型"></el-table-column>
                <el-table-column prop="kexuanzhi" label="可选值"></el-table-column>
                <el-table-column prop="morenzhi" label="默认值"></el-table-column>
              </el-table>
            </div>
          </div>
          <div id="el-scrollbar" class="mdiv">
            <p class="title">scrollbar自定义滚动条（el内部空间）</p>

            <div style="position: relative;width: 300px;height: 300px" >
              <el-scrollbar  :noresize="false" :native="false" >
                <div style="height: 300px">
                  <div style="position: relative;height: 700px;background-color: #19233c"></div>
                </div>
              </el-scrollbar>
            </div>
          </div>
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
      easyData: {enable: true, idKey: 'id', pIdKey: 'pId', rootPId: ''},
      city: '123',
      id: 12,
      list: [
        {name: 'Calendar', id: 'Calendar'},
        {name: 'CitySelect', id: 'CitySelect'},
        {name: 'HdVideo', id: 'HdVideo'},
        {name: 'TreeMenu', id: 'TreeMenu'},
        {name: 'SelectTree', id: 'SelectTree'},
        {name: 'HorizontalLayout', id: 'HorizontalLayout'},
        {name: 'VerticalLayout', id: 'VerticalLayout'},
        {name: 'el-scrollbar', id: 'el-scrollbar'}
      ],
      data: '2018-01-23;2018-1-30;',
      codeData: [
        {canshu: 'begin', shuoming: '设置开始时间', leixing: 'Array', kexuanzhi: '[2017, 2, 3]', morenzhi: '[]'},
        {canshu: 'end', shuoming: '设置结束时间', leixing: 'Array', kexuanzhi: '[2017, 4, 23]', morenzhi: '[]'},
        {canshu: 'data', shuoming: '回填数据', leixing: 'String', kexuanzhi: '2018-01-23;2018-1-30', morenzhi: '-'},
        {canshu: 'zero', shuoming: '是否在日期前用0补齐', leixing: 'boolean', kexuanzhi: '--', morenzhi: 'false'},
        {canshu: 'lunar', shuoming: '是否显示农历', leixing: 'boolean', kexuanzhi: '--', morenzhi: 'false'},
        {canshu: 'isCheckBoxShow', shuoming: '是否为复选', leixing: 'boolean', kexuanzhi: '--', morenzhi: 'false'},
        {canshu: 'select', shuoming: '选择之后的回调钩子', leixing: 'function', kexuanzhi: '--', morenzhi: 'false'}
      ],
      citySelectData: [
        {canshu: 'labelShow', shuoming: '设置是否显示label标签', leixing: 'boolean', kexuanzhi: '', morenzhi: 'true'},
        {canshu: 'model', shuoming: '反选属性', leixing: 'String, number', kexuanzhi: '', morenzhi: ''},
        {canshu: 'citySelect', shuoming: '选择之后的回调钩子', leixing: 'function', kexuanzhi: '返回的选择城市obj', morenzhi: ''}
      ],
      videoData: [
        {canshu: 'videoUrl', shuoming: '播放地址', leixing: 'String', kexuanzhi: '', morenzhi: ''},
        {canshu: 'videotype', shuoming: '播放文件类型', leixing: 'String', kexuanzhi: 'MP3，MP4等', morenzhi: ''}
      ],
      horizontalLayoutData: [
        {canshu: 'lWidthOpen', shuoming: 'left左侧展开宽度', leixing: 'String', kexuanzhi: '10px或10%', morenzhi: ''},
        {canshu: 'lWidthColse', shuoming: 'left左侧关闭宽度', leixing: 'String', kexuanzhi: '10px或10%', morenzhi: ''},
        {canshu: 'lIsCollapse', shuoming: '打开关闭left操作', leixing: 'String', kexuanzhi: '', morenzhi: 'false'},
        {canshu: 'rWidthOpen', shuoming: 'right左侧展开宽度', leixing: 'String', kexuanzhi: '10px或10%', morenzhi: ''},
        {canshu: 'rWidthColse', shuoming: 'right左侧关闭宽度', leixing: 'String', kexuanzhi: '10px或10%', morenzhi: ''},
        {canshu: 'rIsCollapse', shuoming: '打开关闭left操作', leixing: 'String', kexuanzhi: '', morenzhi: 'false'}
      ],
      vLayoutData: [
        {canshu: 'hWidthOpen', shuoming: 'header左侧展开宽度', leixing: 'String', kexuanzhi: '10px或10%', morenzhi: ''},
        {canshu: 'hWidthColse', shuoming: 'header左侧关闭宽度', leixing: 'String', kexuanzhi: '10px或10%', morenzhi: ''},
        {canshu: 'hIsCollapse', shuoming: '打开关闭header操作', leixing: 'String', kexuanzhi: '', morenzhi: 'false'},
        {canshu: 'fWidthOpen', shuoming: 'footer左侧展开宽度', leixing: 'String', kexuanzhi: '10px或10%', morenzhi: ''},
        {canshu: 'fWidthColse', shuoming: 'footer左侧关闭宽度', leixing: 'String', kexuanzhi: '10px或10%', morenzhi: ''},
        {canshu: 'fIsCollapse', shuoming: '打开关闭footer操作', leixing: 'String', kexuanzhi: '', morenzhi: 'false'}
      ],
      nodes: [
        {id: 1, pId: 0, name: '父节点1 - 展开', open: true},
        {id: 11, pId: 1, name: '父节点11 - 折叠'},
        {id: 112, pId: 11, name: '叶子节点112'},
        {id: 113, pId: 11, name: '叶子节点113'},
        {id: 114, pId: 11, name: '叶子节点114'},
        {id: 12, pId: 1, name: '父节点12 - 折叠'},
        {id: 121, pId: 12, name: '叶子节点121'},
        {id: 122, pId: 12, name: '叶子节点122'},
        {id: 123, pId: 12, name: '叶子节点123'},
        {id: 124, pId: 12, name: '叶子节点124'},
        {id: 13, pId: 1, name: '父节点13 - 没有子节点', isParent: true},
        {id: 2, pId: 0, name: '父节点2 - 折叠'},
        {id: 21, pId: 2, name: '父节点21 - 展开', open: true},
        {id: 211, pId: 21, name: '叶子节点211'},
        {id: 212, pId: 21, name: '叶子节点212'},
        {id: 213, pId: 21, name: '叶子节点213'},
        {id: 214, pId: 21, name: '叶子节点214'},
        {id: 22, pId: 2, name: '父节点22 - 折叠'},
        {id: 221, pId: 22, name: '叶子节点221'},
        {id: 222, pId: 22, name: '叶子节点222'},
        {id: 223, pId: 22, name: '叶子节点223'},
        {id: 224, pId: 22, name: '叶子节点224'},
        {id: 23, pId: 2, name: '父节点23 - 折叠'},
        {id: 231, pId: 23, name: '叶子节点231'},
        {id: 232, pId: 23, name: '叶子节点232'},
        {id: 233, pId: 23, name: '叶子节点233'},
        {id: 234, pId: 23, name: '叶子节点234'},
        {id: 3, pId: 0, name: '父节点3 - 没有子节点', isParent: true}
      ],
      defaultSetting: {
        view: {
          showIcon: true
        },
        check: {
          enable: true
        },
        data: {
          key: {
            name: 'name'
          },
          simpleData: {
            enable: true,
            idKey: 'id',
            pIdKey: 'pId',
            rootPId: 0
          }
        },
        callback: {
          onClick: this.clickTreeNode,
          onCheck: this.checkTreeNode
        }
      }
    }
  },
  methods: {
    goto (id) {
      window.location.hash = `#${id}`
    },
    calendarSelect (value) {
      console.log(value)
      this.data = value
    },
    getFormCity (shi) {
      console.log(shi, 11111)
    },
    selecttreeCd (node) {
      console.log(node)
    },
    checkTreeNode (event, treeId, treeNode) {
      this.selectNode(treeNode)
    },
    clickTreeNode (event, treeId, treeNode) {
      $.fn.zTree.getZTreeObj(this.treeId).checkNode(treeNode, !treeNode.checked, true)
      this.selectNode(treeNode)
    },
    selectNode (treeNode) {
      this.$emit('carSelect', treeNode, $.fn.zTree.getZTreeObj(this.treeId))
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
p.title{
  font-size: 24px;
  padding: 15px 0;
}
</style>
