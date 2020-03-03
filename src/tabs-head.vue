<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabs-head",
        inject:['eventBus'],
        created() {

        },
    }
</script>

<style scoped lang="scss">
.tabs-head{
    display: flex;
    justify-content: flex-start;
    height: 40px;
    border: 1px solid red;
    > .actions-wrapper{
        margin-left: auto;
    }
}
</style>