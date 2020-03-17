<template>
    <div class="popover" @click="toggle">
        <div v-if="visible" class="content-wrapper">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "kw-popover",
        data(){
            return {
                visible:false
            }
        },
        methods:{
            toggle(){
                this.visible=!this.visible;
                console.log(this.visible)
            }
        }
    }
</script>

<style scoped lang="scss">
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;

    .content-wrapper{
        position: absolute;
        bottom: 100%;
        border: 1px solid red;
        left: 0;
        box-shadow: 0 0 3px rgb(0,0,0,0.5);
    }

}
</style>