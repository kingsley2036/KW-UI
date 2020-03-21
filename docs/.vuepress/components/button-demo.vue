<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
                <g-button>默认按钮</g-button>
        <g-button icon="settings">图标按钮</g-button>
        <g-button :isLoading="true">加载按钮</g-button>
        <g-button disabled>禁用按钮</g-button>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button.vue'
    import icon from "../../../src/icon";
    export default {
        components: {
            'g-button': Button,
            'g-icon':icon
        },
        data () {
            return {
                content: `
          <g-button>默认按钮</g-button>
    <g-button icon="settings">图标按钮</g-button>
    <g-button :isLoading="true">加载按钮</g-button>
    <g-button disabled>禁用按钮</g-button>

      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>