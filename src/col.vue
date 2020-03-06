<template>
    <div class="col" :class="colClass"
    :style="colStyle">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    function validator(value){
        let array=Object.keys(value);
        let valid=false;
        array.forEach(item=>{
            // console.log(item);
            valid = ['span', 'offset'].includes(item);
        });
        return valid;

    }
    export default {
        name: "kw-col",
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            },
            ipad:{
                type:Object,
                validator
            },
            narrowPc:{
                type:Object,
                validator
            },
            pc:{
                type:Object,
                validator
            },
            widePc:{
                type:Object,
                validator
            },
            'fuck-me':{
                type:String
            }


        },
        data(){
            return {
                gutter:0
            }
        },
        created(){


        },
        computed:{
            colStyle(){
               return {paddingLeft:+this.gutter/2+'px',paddingRight:+this.gutter/2+'px'}
            },
            colClass(){
                let {span,offset,ipad,narrowPc,pc,widePc}=this;
                let createClasses=this.createClasses;
                return [
                    ...createClasses({span,offset}),
                    ...createClasses(ipad,'ipad-'),
                    ...createClasses(narrowPc,'narrow-pc-'),
                    ...createClasses(pc,'pc-'),
                    ...createClasses(widePc,'wide-pc-')
                ]
            }
        },
        methods:{
            createClasses (obj, str = '') {
                if (!obj) {return []}
                let array = [];
                if (obj.span) { array.push(`col-${str}${obj.span}`) }
                if (obj.offset) { array.push(`offset-${str}${obj.offset}`) }
                return array
            }
        }

    }
</script>

<style scoped lang="scss">
    .col {

        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
        @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 769px){ // 770
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }
</style>