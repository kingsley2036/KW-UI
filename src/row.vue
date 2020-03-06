<template>
    <div :class="rowClass" class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "kw-row",
        props:{
            gutter:{
                type:[String,Number],
            },
            align:{
                type:String,
                validator(value){
                  return  ['left','center','right'].indexOf(value)>=0
                }
            }

        },
        mounted() {
           let  children=this.$children;
            children.forEach((vm)=>{
                vm.$data.gutter=this.gutter
            })
        },
        computed:{
            colStyle(){
                let {gutter}=this;
                return {marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}
            },
            rowClass(){
                let {align}=this;
                return [align &&`align-${align}`]
            }
        }
    }
</script>

<style scoped lang="scss">
.row{
    display: flex;
    flex-wrap: wrap;
    &.align-left{
        justify-content: flex-end;
     }
    &.align-center{
        justify-content: center;
    }
    &.align-right{
        justify-content: flex-end;
    }

}
</style>