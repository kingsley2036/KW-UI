<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-pane",
        data(){
            return {
                active:false
            }
        },
        props:{
            disabled:{
                type:Boolean,
                default:false,
            },
            name:{
                type:String,
            }
        },
        inject:['eventBus'],
        created() {
            this.eventBus.$on('update:selected',(name)=>{
                this.active = name === this.name;
            })
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.tabs-pane{
    padding-top: 1em;
    &.active{

    }
}
</style>