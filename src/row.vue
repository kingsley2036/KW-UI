<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "kw-row"
    }
</script>

<style scoped>
.row{
    display: flex;
}
</style>