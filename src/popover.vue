<template>
    <div class="popover" @click="toggle">
        <div v-if="visible" >
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
                this.visible=!this.visible
                console.log(this.visible)
            }
        }
    }
</script>

<style scoped>

</style>