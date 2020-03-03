<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabs-head",
        inject:['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(item,vm)=>{
                let {width,left}=vm.$el.getBoundingClientRect();
                this.$refs.line.style.width=`${width-10}px`;
                this.$refs.line.style.left=`${left-16}px`
            })
        },
    }
</script>

<style scoped lang="scss">
.tabs-head{
    display: flex;
    justify-content: flex-start;
    height: 40px;
    /*border: 1px solid red;*/
    position: relative;
    > .actions-wrapper{
        margin-left: auto;
    }
    & .line{
        /*width: 50px;*/
        position: absolute;
        bottom: 0;
        border-bottom:2px solid blue;
        transition: all 350ms;



    }
}
</style>