<template>
    <div class="popover" @click="toggle" ref="popover">
        <div ref="contentWrapper" v-show="visible" class="content-wrapper" >
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
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper);
                let {top,left}=this.$refs.triggerWrapper.getBoundingClientRect();
                this.$refs.contentWrapper.style.left=left+window.window.scrollX +'px';
                this.$refs.contentWrapper.style.top=top+window.window.scrollY +'px';
            },
            onClickDocument(e){
                if (this.$refs.contentWrapper.contains(e.target)||(this.$refs.popover===e.target||this.$refs.popover.contains(e.target))){
                    return
                }else{
                    this.close();
                }
            },
            open(){
                this.visible=true;
                setTimeout(() => {
                    this.positionContent();
                    document.addEventListener('click', this.onClickDocument);
                },0)
            },
            close(){
                this.visible=false;
                document.removeEventListener('click',this.onClickDocument);
            },
            toggle(event){
                if(this.$refs.triggerWrapper.contains(event.target)){
                    console.log(this.visible);
                    if(this.visible===true){
                        this.close()
                    }else {
                        this.open()
                    }
                }else{
                    console.log('上面')
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