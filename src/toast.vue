<template>
    <div class="toast" ref="wrapper" :class="toastclass">
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
                console.log(this.position);
                return {[`position-${this.position}`]:true}
            }
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
        &.position-top{
            top: 0;
        }
        &.position-bottom{
            bottom: 0;
        }
        &.position-middle{
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
        }
    }
</style>