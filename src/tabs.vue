<template>
    <div class="tabs">
        <slot></slot>
    </div>

</template>

<script>
    import Vue from 'vue'

    export default {
        name: "kw-tabs",
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                // required: true,
                default: 'horizontal',
                validator(value) {
                    return ['vertical', 'horizontal'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'tabs-head') {
                    vm.$children.forEach((childVm) => {
                        if (childVm.$options.name === 'tabs-item' && childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childVm);

                        }
                    })

                }
            });

        },


    }
</script>

<style scoped lang="scss">
    .tabs {
        display: flex;
        flex-direction: column;
    }
</style>