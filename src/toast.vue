<template>
    <div class="toast">
        <slot></slot>
        <span class="line"></span>
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
                default: 10
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
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.delay * 1000)
            }
        },
        created(){
            // console.log( this.closeButton)
        },
        methods: {
            close() {
                this.$el.remove();
                this.$destroy()
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
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        /*border: 1px solid red;*/
        transform: translateX(-50%);
        font-size: $font-size;
        height: $toast-height;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        padding: 0 16px;
        color: #fff;
        display: flex;
        align-items: center;

        & .line {
            height: 100%;
            border: 1px solid #666666;
            margin-left: 16px;
        }
        & .close{
            padding-left: 16px;
        }
    }
</style>