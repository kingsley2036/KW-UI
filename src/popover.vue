<template>
    <div class="popover"  ref="popover">
        <div ref="contentWrapper" v-show="visible" class="content-wrapper"
        :class="{[`position-${position}`]:true}">
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="triggerWrapper" class="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "kw-popover",
        props:{
            position:{
                type:String,
                default:'top',
                validator(value){
                   return ['top','bottom','left','right'].indexOf(value)>=0
                }
            },
            trigger:{
                type:String,
                default:'click',
                validator(value){
                    return ['click','hover'].indexOf(value)>=0
                }
            }
        },
        data(){
            return {
                visible:false
            }
        },
        computed:{
            openEvent(){
                if (this.trigger==='click'){
                    return 'click'
                }else{
                    return 'mouseenter'
                }
            },
            closeEvent(){
                if (this.trigger==='click'){
                    return 'click'
                }else{
                    return 'mouseleave'
                }
            }
        },
        mounted(){
            if (this.trigger==='click'){
                this.$refs.popover.addEventListener(this.openEvent, this.toggle)
            }else{
                this.$refs.popover.addEventListener(this.openEvent,this.open);
                this.$refs.popover.addEventListener(this.closeEvent, this.close)
            }

        },
        destroyed(){
            if (this.trigger==='click'){
                this.$refs.popover.removeEventListener(this.openEvent, this.toggle)
            }else{
                this.$refs.popover.removeEventListener(this.openEvent,this.open);
                this.$refs.popover.removeEventListener(this.closeEvent, this.close)
            }
        },
        methods:{
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper);
                const {contentWrapper,triggerWrapper}=this.$refs;
                let {width,height,top,left}=triggerWrapper.getBoundingClientRect();
                let {height:height2}=contentWrapper.getBoundingClientRect();
                let positions={
                    top:{
                      top:top+window.window.scrollY ,
                      left:left+window.window.scrollX,
                    },
                    bottom:{
                        top:top+height+window.window.scrollY ,
                        left:left+window.window.scrollX,
                    },
                    left:{
                        top:top+(height-height2)/2+window.window.scrollY,
                        left:left+window.window.scrollX,
                    },
                    right:{
                        top:top+(height-height2)/2+window.window.scrollY ,
                        left:left+width+window.window.scrollX,
                    },
                };
                contentWrapper.style.left= positions[this.position].left+'px';
                contentWrapper.style.top=positions[this.position].top +'px';

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

    }
</script>

<style scoped lang="scss">
    $border-color:#ddd;
    $border-radius:4px;
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    >.triggerWrapper{
        display: inline-block;
    }
}
.content-wrapper{
    position: absolute;
    border: 1px solid $border-color;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
    background: white;
    border-radius: $border-radius;
    padding: 0.3em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before, &::after{
        content: '';
        width: 0;
        height: 0;
        border: 10px solid transparent;
        position: absolute;
        display: block;
    }
    &.position-top{
        transform: translateY(-100%);
        margin-top: -10px;
        &::before, &::after{
            left: 10px;
            border-bottom: none;
        }
        &::before{
            border-top-color:  $border-color;
            top: 100%;
        }
        &::after{
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }
    &.position-bottom{
        margin-top: 10px;
        &::before, &::after{
            left: 10px;
            border-top: none;
        }
        &::before{
            border-bottom-color:  $border-color;
            bottom: 100%;
        }
        &::after{
            border-bottom-color: white;
            bottom: calc(100% - 1px);
        }
    }
    &.position-left{
        transform: translateX(-100%);
        margin-left: -10px;
        &::before, &::after{
            top: 50%;
            transform: translateY(-50%);
            border-right: none;
        }
        &::before{
            border-left-color:  $border-color;
            left: 100%;
        }
        &::after{
            border-left-color: white;
            left: calc(100% - 1px);
        }
    }
    &.position-right{
        margin-left: 10px;
        &::before, &::after{
            top: 50%;
            transform:  translateY(-50%);
            border-left: none;
        }
        &::before{
            border-right-color:  $border-color;
            right: 100%;
        }
        &::after{
            border-right-color: white;
            right: calc(100% - 1px);
        }
    }



}
</style>