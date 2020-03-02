<template>
    <div class="toast" ref="wrapper">
        <div class="message">
            <slot></slot>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onclickClose">{{closeButton.text}}</span>
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
                default: 100
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '',
                        callback: () => {
                        }
                    }
                }
            }

        },
        mounted() {
           this.updateStyle();
           this.execAutoClose()
        },
        created(){

        },
        methods: {
            execAutoClose(){
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.delay * 1000)
                }
            },
            updateStyle(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height=this.$refs.wrapper.getBoundingClientRect().height+'px'
                })
            },
            close() {
                this.$el.remove();
                this.$destroy();
            },
            onclickClose(){
                this.close();
                if( this.closeButton&& typeof  this.closeButton.callback==='function'){
                    this.closeButton.callback()
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        /*border: 1px solid red;*/
        transform: translateX(-50%);
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