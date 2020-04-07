<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name"
         >
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
            },
            fuck:{
                type:String,
            }
        },
        inject:['eventBus'],
        created() {
            if(this.eventBus){
                this.eventBus.$on('update:selected',(name)=>{

                    this.active = name === this.name;
                })
            }
        },
        methods:{
            onClick(){
                if(this.disabled)return;
                if(this.eventBus){
                    this.eventBus.$emit('update:selected',this.name,this)
                }
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active,
                    disabled: this.disabled
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $blue:blue;
.tabs-item{
    flex-shrink:0;
    padding: 0 1.5em;
    align-items: center;
    height: 100%;
    cursor: pointer;
    display: flex;
    &.active{
       color:$blue;
     }
    &.disabled{
        color: #bbbbbb;
        cursor: not-allowed;
    }
}
</style>