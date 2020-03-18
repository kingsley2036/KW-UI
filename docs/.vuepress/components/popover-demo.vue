<template>

    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-popover>
            <template slot="content">
                <div>popover内容</div>
            </template>
            <button>按钮</button>
        </g-popover>

    </div>
</template>

<script>
    import Popover from "../../../src/popover.vue";
    export default {
        name: "popover",
        components:{
            'g-popover':Popover
        }
    }
</script>

<style scoped>

</style>