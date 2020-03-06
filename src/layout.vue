<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "kw-layout",
        data(){
            return {
                layoutClass:{
                    hasSider:false
                }
            }
        },
        mounted() {
            this.$children.forEach(item=>{
                if(item.$options.name==='kw-sider'){
                    this.layoutClass.hasSider=true
                }
            })

        }
    }
</script>

<style scoped lang="scss">
.layout{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    border: 1px solid red;
    &.hasSider{
        flex-direction: row;
    }
}

</style>