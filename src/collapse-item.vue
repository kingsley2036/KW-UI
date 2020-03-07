<template>
    <div class="collapse-item">
        <div class="title" @click="open=!open">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collapse-item",
        props:{
            title:{
                type:String,

            }
        },
        data(){
            return{
                open:false

            }
        }
    }
</script>

<style scoped lang="scss">
    $grey:#ddd;
    $border-radius:4px;
    .collapse-item{
        margin-top: -1px;
        margin-left: -1px;
        margin-right: -1px;

        & .title{
            border: 1px solid  $grey ;
            min-height: 32px;
            display:flex ;
            align-items: center;
            padding:0 8px;
        }
        &:first-child{
            .title{
                border-top-left-radius:$border-radius ;
                border-top-right-radius:$border-radius ;
            }
        }
        &:last-child{
            .title{
                border-bottom-left-radius:$border-radius ;
                border-bottom-right-radius:$border-radius ;
            }
            .content{
                border-bottom: 1px solid  $grey ;
                border-bottom-left-radius:$border-radius ;
                border-bottom-right-radius:$border-radius ;
            }
        }
        & .content{
            padding:8px ;
        }


    }
</style>