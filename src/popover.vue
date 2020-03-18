<template>
    <div class="popover" @click.stop="toggle">
        <div ref="contentWrapper" v-if="visible" class="content-wrapper" @click.stop>
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "kw-popover",
        data(){
            return {
                visible:false
            }
        },
        methods:{
            toggle(){
                this.visible=!this.visible;
                console.log(this.visible);
                if(this.visible===true){

                    this.$nextTick(()=>{
                       document.body.appendChild(this.$refs.contentWrapper);
                        let {width,height,top,left}=this.$refs.triggerWrapper.getBoundingClientRect();

                        this.$refs.contentWrapper.style.left=left+window.pageXOffset+'px';
                        this.$refs.contentWrapper.style.top=top+window.pageYOffset+'px';
                        let eventHandler=()=>{
                            this.visible=false;
                            document.removeEventListener('click',eventHandler)
                        };
                    document.addEventListener('click',eventHandler)
                    })
                }

            }
        },
        mounted() {
            // console.log(this.$refs)
        }
    }
</script>

<style scoped lang="scss">
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper{
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgb(0,0,0,0.5);
    transform: translateY(-100%);
}
</style>