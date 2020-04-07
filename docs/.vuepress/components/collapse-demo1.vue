<template>
    <div style="padding-top: 16px;">
        <h2>多项展开</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-collapse :selected.sync="selectedTab" style="margin-top: 20px;width: 500px;margin-left: 100px" >
            <g-collapse-item title="标题1" name="1">
                内容111
            </g-collapse-item>
            <g-collapse-item title="标题2" name="2">
                内容222222
            </g-collapse-item>
            <g-collapse-item title="标题3" name="3">
                内容333333333333333
            </g-collapse-item>

        </g-collapse>

        <p>
            <strong>代码</strong>
        </p>
<!--        <pre><code>{{content}}</code></pre>-->
    </div>
</template>
<script>
  import collapse from "../../../src/collapse";
  import collapseItem from '../../../src/collapse-item'
  import Vue from 'vue'
    export default {
        components: {
            'g-collapse':collapse,
            'g-collapse-item':collapseItem},
        data () {
            return {
                selectedTab:['2','3'],
                content: `
          data:{
            selectedTab:['2','3'],
          }
          <g-collapse :selected.sync="selectedTab"  >
            <g-collapse-item title="标题1" name="1">
                内容111
            </g-collapse-item>
            <g-collapse-item title="标题2" name="2">
                内容222222
            </g-collapse-item>
            <g-collapse-item title="标题3" name="3">
                内容33333333333
            </g-collapse-item>

        </g-collapse>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
<style scoped >

</style>