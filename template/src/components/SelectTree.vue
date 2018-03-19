<style scoped>
  .warp{width: 100%;position: relative}
  .selectWarp{width: 100%;border: none;border-radius: 0; box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);position: absolute;z-index: 10;background: #fff;}
  .select{margin:0;width: 100%;height: 30px;font-size: 12px;}
  .button{margin: 5px auto;text-align: center;}
  .searchForm .select{margin:0;width: 100%;height: auto;font-size: 12px;}
</style>
<template>
  <div class="warp">
    <el-input size="small" type="text" :readonly="true" :placeholder="placeholder" :icon="!flag? 'caret-bottom':'caret-top'" class="select" @focus="showMemu()" @click="showMemu()" v-model="texts"></el-input>
    <div class="selectWarp" v-show="flag">
      <zTree v-show="flag" :setting="setting" :id="id" :zNodes="nodes" class="treeMenu"
             @reverseSelection="reverseSelection"
             :PrimaryKey="PrimaryKey" :PrimaryKeyValue="value" style="min-height: 150px;max-height: 200px;overflow: auto"></zTree>
      <div class="button" v-show="isCheckBox">
        <el-button class="qu_xiao" type="text" size="small" @click="close()">取消</el-button>
        <el-button class="bao_cun" size="small"  @click="getSelectChecked()">确认</el-button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import zTree from './TreeMenu.vue'
export default {
  components: {zTree},
  props: {
    isDefaultselect: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Array]
    },
    zNodes: {
      type: Array
    },
    urlFunc: {
      type: Function
    },
    placeholder: {
      type: String,
      default: ''
    },
    isCheckBox: {
      type: Boolean,
      default: false
    },
    isCheckchild: {
      type: Boolean,
      default: false
    },
    easyData: {
      type: Object,
      default: () => {
        return null
      }
    },
    dataKey: {
      type: Object,
      default: () => {
        return {name: 'name'}
      }
    },
    PrimaryKey: {
      type: String,
      default: 'id'
    }
  },
  data() {
    return {
      setting: {
        view: {
          showIcon: false
        },
        data: {
          simpleData: {
            enable: true
          },
          key: this.dataKey
        },
        callback: {
          beforeClick: this.zTreeBeforeClick,
          onClick: this.checkedMemu
        }
      },
      nodes: [],
      flag: false,
      texts: '',
      id: config.uuid(8, 16)
    }
  },
  mounted() {
    if (this.value instanceof Array) {
      this.texts = ''
    } else {
      this.texts = this.value
    }
    this.nodes = this.zNodes
    if (this.urlFunc && !this.nodes) {
      this.urlFunc('').then(resp => {
        this.nodes = resp.data
        Object.assign(this.nodes[0], {open: true})
        if (this.isDefaultselect) {
          this.$emit('treeSelect', this.nodes[0])
        }
//          this.nodes = [
//            {id: 1, pId: 0, name: '父节点1 - 展开', open: true},
//            {id: 11, pId: 1, name: '父节点11 - 折叠'},
//            {id: 112, pId: 11, name: '叶子节点112'},
//            {id: 113, pId: 11, name: '叶子节点113'},
//            {id: 114, pId: 11, name: '叶子节点114'},
//            {id: 12, pId: 1, name: '父节点12 - 折叠'},
//            {id: 121, pId: 12, name: '叶子节点121'},
//            {id: 122, pId: 12, name: '叶子节点122'},
//            {id: 123, pId: 12, name: '叶子节点123'},
//            {id: 124, pId: 12, name: '叶子节点124'},
//            {id: 13, pId: 1, name: '父节点13 - 没有子节点', isParent: true},
//            {id: 2, pId: 0, name: '父节点2 - 折叠'},
//            {id: 21, pId: 2, name: '父节点21 - 展开', open: true},
//            {id: 211, pId: 21, name: '叶子节点211'},
//            {id: 212, pId: 21, name: '叶子节点212'},
//            {id: 213, pId: 21, name: '叶子节点213'},
//            {id: 214, pId: 21, name: '叶子节点214'},
//            {id: 22, pId: 2, name: '父节点22 - 折叠'},
//            {id: 221, pId: 22, name: '叶子节点221'},
//            {id: 222, pId: 22, name: '叶子节点222'},
//            {id: 223, pId: 22, name: '叶子节点223'},
//            {id: 224, pId: 22, name: '叶子节点224'},
//            {id: 23, pId: 2, name: '父节点23 - 折叠'},
//            {id: 231, pId: 23, name: '叶子节点231'},
//            {id: 232, pId: 23, name: '叶子节点232'},
//            {id: 233, pId: 23, name: '叶子节点233'},
//            {id: 234, pId: 23, name: '叶子节点234'},
//            {id: 3, pId: 0, name: '父节点3 - 没有子节点', isParent: true}
//          ]
      })
    }
    window.setTimeout(() => {
      document.addEventListener('click', (event) => {
        var e = event || window.event // 浏览器兼容性
        var elem = e.target || e.srcElement
        let ischick = false
        while (elem) { // 循环判断至跟节点，防止点击的是div子元素
          if (elem.className && elem.className === 'selectWarp') {
            ischick = true
            return
          }
          if (elem.className && elem.className === 'select el-input el-input--small') {
            ischick = true
            return
          }
          elem = elem.parentNode
        }
        this.flag = ischick
        document.removeEventListener('click', () => {
        }, false)
      }, false)
    }, 1000)
  },
  methods: {
    zTreeBeforeClick(treeId, treeNode, clickFlag) {
      if (this.isCheckchild) {
        if (treeNode.children && treeNode.children.length > 0) {
          var treeObj = $.fn.zTree.getZTreeObj(this.id)
          treeObj.expandNode(treeNode, true)
          return false
        }
      }
    },
    checkedMemu(event, treeId, treeNode) {
      if (this.setting.check === undefined) {
        this.PrimaryKeyValue = treeNode[this.PrimaryKey]
        this.texts = treeNode[this.dataKey.name]
      }
      this.flag = !this.flag
      this.reverseSelection(treeNode)
    },
    showMemu() {
      this.flag = !this.flag
    },
    close() {
      this.PrimaryKeyValue = null
      this.flag = false
    },
    getSelectChecked() {
      var treeObj = $.fn.zTree.getZTreeObj(this.id)
      var nodes = treeObj.getCheckedNodes(true)
      let treeSelectNodes = []
      var treename = ''
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].isParent === false) {
          treename = treename + ',' + nodes[i][this.dataKey.name]
          treeSelectNodes.push(nodes[i])
        }
      }
      this.reverseSelection(treeSelectNodes)
      this.flag = false
    },
    checkedCheckBoxMemu(event, treeId, treeNode) {
      var treeObj = $.fn.zTree.getZTreeObj(this.id)
      console.log(treeNode)
      if (treeNode.checked) {
        treeObj.cancelSelectedNode(treeNode)
        treeObj.checkNode(treeNode, false, true)
      } else {
        treeObj.selectNode(treeNode)
        treeObj.checkNode(treeNode, true, true)
      }
      var nodes = treeObj.getCheckedNodes(true)
      nodes.map(node => {
        treeObj.selectNode(node, true)
      })
    },
    zTreeOnCheck(event, treeId, treeNode) {
      var treeObj = $.fn.zTree.getZTreeObj(this.id)
      treeObj.selectNode(treeNode, true)
      treeObj.checkNode(treeNode, true, true)
      treeObj.updateNode(treeNode, true)
    },
    reverseSelection(nodes) {
      if (!nodes) {
        return
      }
      if (nodes instanceof Array) {
        let treeSelectNodes = []
        let codes = []
        var treename = ''
        for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].isParent === false) {
            treename = treename + ',' + nodes[i][this.dataKey.name]
            treeSelectNodes.push(nodes[i])
            codes.push(nodes[i][this.PrimaryKey])
          }
        }
        this.texts = treename.slice(1)
        this.$emit('input', codes)
        this.$emit('treeSelect', treeSelectNodes)
      } else {
        this.texts = nodes[this.dataKey.name]
        this.$emit('input', nodes[this.PrimaryKey])
        this.$emit('treeSelect', nodes)
      }
    }
  },
  created() {
    if (this.isCheckBox) {
      Object.assign(this.setting, {
        check: {enable: true, chkStyle: 'checkbox'},
        callback: {onClick: this.checkedCheckBoxMemu, onCheck: this.zTreeOnCheck}
      })
    }
    if (this.easyData) {
      this.setting.data.simpleData = this.easyData
    }
  },
  watch: {
    value: {
      handler(curVal, oldVal) {
        if (this.value instanceof Array) {
          console.log(this.value)
        } else {
          this.texts = curVal
        }
      },
      deep: true
    }
  }
}
</script>
