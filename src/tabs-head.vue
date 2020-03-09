<template>
    <div class="tabs-head" ref="head" >
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
                let {width, left} = vm.$el.getBoundingClientRect();
                let {left: left2} = this.$refs.head.getBoundingClientRect();
                this.$refs.line.style.width = `${width}px`;
                this.$refs.line.style.left = `${left - left2}px`;
                console.log(left);
                console.log(left2);
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
        margin-right: 20px;
        button{
            padding: 0.2em 1em;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            border: 1px solid #bbbbbb;
        }
    }
    & .line{
        /*width: 50px;*/
        position: absolute;
        bottom: 0;
        border-bottom:1px solid blue;
        transition: all 350ms;
    }
}
</style>