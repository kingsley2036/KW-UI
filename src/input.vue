<template>
    <div class="wrapper" :class="{error:error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)">
        <template v-if="error">
            <icon :name="icon" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon.vue'
    export default {
        name: "kwInput",
        components:{
            icon:Icon
        },
        props:{
            'value':{
                type:String,
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String,
            },
            icon:{
                type:String,
            }
        }
    }
</script>

<style scoped lang="scss">
    $height:32px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:12px;
    $font-size:12px;
    $box-shadow-color:rgba(0,0,0,0.5);
    $red:#f1453d;
    .wrapper{
    font-size:$font-size;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        :not(:last-child){margin-right: .5em}
        input{
            height:$height ;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;
            &:hover{
                border-color: $border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 3px  $box-shadow-color;
                outline: none;
            }
            &[disabled],&[readonly]{
                border-color: #bbb;
                color:#bbb;
                cursor:not-allowed;
            }
        }
        &.error{
            input{
                border-color: $red;
            }
        }
        & .icon-error{
            fill:$red;
        }
        & .errorMessage{
            color:$red;
        }
    }

</style>