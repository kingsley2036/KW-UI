<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-item",
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
        methods:{
            xxx(){
               this.eventBus.$emit('update:selected',this.name,this)
            }
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
    $blue:blue;
.tabs-item{
    /*flex-grow:1;*/
    flex-shrink:0;
    padding: 0 1.5em;
    align-items: center;
    height: 100%;
    cursor: pointer;
    display: flex;
    border: 1px solid red;
    &.active{
       color:$blue;
     }
}
</style>