<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "kw-collapse",
        props:{
            single:{
                type:Boolean,
                default:false
            },
            selected:{
                type: Array,
            },
        },
        data(){
            return {
              eventBus:new Vue()
            }
        },
        provide(){
                return {
                    eventBus:this.eventBus
                }
        },
        mounted() {
            this.eventBus.$emit('update:selected',this.selected);
            this.eventBus.$on('update:removeSelected',(name)=>{
                let selectCopy=JSON.parse(JSON.stringify(this.selected));
                let index=selectCopy.indexOf(name);
                selectCopy.splice(index,1);
                this.$emit('update:selected',name);
                this.eventBus.$emit('update:selected',selectCopy);
                this.$emit('update:selected',selectCopy)
            });
            this.eventBus.$on('update:addSelected',(name)=>{
                let selectCopy=JSON.parse(JSON.stringify(this.selected));
                if(this.single){
                    selectCopy=[name]
                }else{
                    selectCopy.push(name);
                }
                this.eventBus.$emit('update:selected',selectCopy);//通知子组件状态变更
                this.$emit('update:selected',selectCopy)//通知外部状态变更
            });



            this.$children.forEach((item)=>{
                item.single=this.single;

            })


        }
    }
</script>

<style scoped lang="scss">
    $grey:#ddd;
    $border-radius:4px;
.collapse{
    border: 1px solid  $grey ;
    border-radius: $border-radius;
    border-bottom: none;
}
</style>