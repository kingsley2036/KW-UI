<template>
    <div style="padding-top: 16px;">
        <h2>按钮组</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>

        <p>
            <strong>代码</strong>
        </p>

    </div>
</template>
<script>
    import Button from '../../../src/button.vue'
    import icon from "../../../src/icon";
    import buttonGroup from '../../../src/button-group.vue'
    export default {
        components: {
            'g-button': Button,
            'g-icon':icon,
            'g-button-group':buttonGroup
        },
        data () {
                return {}
        },

    }
</script>