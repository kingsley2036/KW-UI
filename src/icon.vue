<template>
    <svg  class="g-icon" aria-hidden="true">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
    // import './svg.js'
    export default {
        props:['name'],
        mounted() {
            import('./svg.js').then(icon=>{})
        }
    }
</script>

<style  lang="scss">
    .g-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>