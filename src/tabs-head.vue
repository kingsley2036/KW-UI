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
                this.$refs.line.style.width=`${width}px`;
                this.$refs.line.style.left=`${left}px`
            })
        },
    }
</script>

<style scoped lang="scss">
.tabs-head{
    display: flex;
    justify-content: flex-start;
    height: 40px;
    border-bottom: 1px solid #ddd;
    position: relative;
    > .actions-wrapper{
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
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