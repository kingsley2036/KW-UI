<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-tabs :selected="selected" >
            <g-tabs-head >
                <g-tabs-item name="sports">
                    <g-icon name="sports" class="iconStyle"></g-icon>
                    体育</g-tabs-item>
                <g-tabs-item name="finance">
                    <g-icon name="finance" class="iconStyle"></g-icon>财经</g-tabs-item>
                <g-tabs-item name="entertainment" disabled>
                    <g-icon name="entertainment" class="iconStyle"></g-icon>娱乐</g-tabs-item>
                <template slot="actions">
                    <button>设置</button>
                </template>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="sports">体育资讯</g-tabs-pane>
                <g-tabs-pane name="finance">财经资讯</g-tabs-pane>
                <g-tabs-pane name="entertainment">娱乐资讯</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>

        <p>
            <strong>代码</strong>
        </p>
<!--        <pre><code>{{content}}</code></pre>-->
    </div>
</template>
<script>
    import GTabs from '../../../src/tabs'
    import GTabsBody from '../../../src/tabs-body'
    import GTabsHead from '../../../src/tabs-head'
    import GTabsItem from '../../../src/tabs-item'
    import GTabsPane from '../../../src/tabs-pane'
    import icon from "../../../src/icon";
    export default {
        components: {GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane,
            'g-icon':icon},
        data () {
            return {
                selected: 'sports',
                content: `
          data:{
            selected: 'sports'
          }
         <g-tabs :selected="selected" >
            <g-tabs-head >
                <g-tabs-item name="sports">
                    <g-icon name="sports" class="iconStyle"></g-icon>
                    体育</g-tabs-item>
                <g-tabs-item name="finance">
                    <g-icon name="finance" class="iconStyle"></g-icon>财经</g-tabs-item>
                <g-tabs-item name="entertainment" disabled>
                    <g-icon name="entertainment" class="iconStyle"></g-icon>娱乐</g-tabs-item>
                <template slot="actions">
                    <button>设置</button>
                </template>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="sports">体育资讯</g-tabs-pane>
                <g-tabs-pane name="finance">财经资讯</g-tabs-pane>
                <g-tabs-pane name="entertainment">娱乐资讯</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
<style scoped >
   .iconStyle{
       margin-right: 10px;
   }
</style>