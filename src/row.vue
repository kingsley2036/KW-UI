<template>
    <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "kw-row",
        props:{
            gutter:{
                type:[String,Number],
            }
        },
        mounted() {
           let  children=this.$children;
            console.log(children)
            children.forEach((vm)=>{
                vm.$data.gutter=this.gutter
            })
        }
    }
</script>

<style scoped>
.row{
    display: flex;
}
</style>