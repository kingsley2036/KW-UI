<template>
    <div class="wrapper" :class="toastclass">
        <div class="toast" ref="toast" >
            <div class="message">
                <slot></slot>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onclickClose">{{closeButton.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "kw-toast",
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            delay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['top','bottom','middle'].indexOf(value)>=0
                }
            }

        },
        mounted() {
           this.updateStyle();
           this.execAutoClose()
        },
        created(){

        },
        computed:{
            toastclass(){
                return {[`position-${this.position}`]:true}
            }
        },
        methods: {
            execAutoClose(){
                let time=this.delay * 1000;

                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, time)
                }
            },
            updateStyle(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height=this.$refs.toast.getBoundingClientRect().height+'px'
                })
            },
            close() {
                this.$el.remove();
                this.$destroy();
            },
            onclickClose(){
                this.close();
                if( this.closeButton && typeof  this.closeButton.callback==='function'){
                    console.log('执行了回调');
                    this.closeButton.callback();
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    @keyframes fade_in {
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }
    @keyframes slide_up {
        0%{
            opacity:0;
            transform: translateY(100%);
        }
        100%{
            opacity:1;
            transform: translateY(0%);
        }
    }
    @keyframes slide_down {
        0%{
            opacity:0;
            transform: translateY(-100%);
        }
        100%{
            opacity:1;
            transform: translateY(0%);
        }
    }
    .wrapper{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.position-top{
            top: 0;
            .toast{
                animation: slide_down 300ms;
            }
        }
        &.position-bottom{
            bottom: 0;
            .toast{
                animation: slide_up 300ms;
            }
        }
        &.position-middle{
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            .toast{
                animation: fade_in 300ms;
            }
        }
    }
    .toast {

        font-size: $font-size;
        min-height:$toast-min-height;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        padding: 0 16px;
        color: #fff;
        display: flex;
        align-items: center;
        & .line {
            height: 100%;
            border-left: 1px solid #666666;
            margin-left: 16px;
        }
        & .close{
            padding-left: 16px;
            flex-shrink: 0;
        }
        .message{
            padding: 8px 0;
        }

    }
</style>