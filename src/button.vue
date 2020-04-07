<template>
    <button @click="$emit('click')" class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <g-icon class="icon" v-if="icon && !isLoading" :name='icon'></g-icon>
        <g-icon v-if="isLoading" class="icon loading" name='loading'></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Vue from 'vue'
    import Icon from './icon.vue'
    Vue.component('g-icon',Icon);
    export default {
        props: {
            icon:{
                // type:String,
            },
            'is-loading':{
              type:Boolean,
              default: false
            },
            'icon-position':{
                type:String,
                default:'left',
                validator(value){
                    return !(value !== 'left' && value !== 'right');
                }
            }}
    }
</script>

<style scoped lang="scss">
        $button-height: 32px;
        $font-size: 14px;
        $button-bg: white;
        $button-active-bg: #eee;
        $border-radius: 4px;
        $color: #333;
        $border-color: #999;
        $border-color-hover: #666;

    .g-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1.2em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        .icon {
            order: 1;
            margin-right: 0.1em;
        }
        .content{
            order: 2;
        }
        &.icon-right {
            .icon {
                order: 2;
                margin-left: 0.2em;
                margin-right: 0;
            }
            .content {
                order: 1;
            }
        }
        @keyframes spin {
          0%{
              transform: rotate(0deg)
          }
          100%{
              transform: rotate(360deg)
          }
        }
        & .icon.loading{
            animation: spin 2s infinite linear;
        }

    }

</style>