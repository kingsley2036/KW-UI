import Vue from 'vue'
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup  from "./button-group.vue";
import chai from 'chai'
import Input from './input'
import Row from './row'
import Col from './col'
import Toast from './toast'
import Plugin from './plugin.js'
Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-row',Row);
Vue.component('g-col',Col);
Vue.component('g-toast',Toast);
Vue.use(Plugin);
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message:'赵五'
    },
    created(){
        this.$toast('我是信息',{
            text: '关闭',
            callback() {
                console.log('用户知道了')
            }
        })
    },
    methods:{
        inputChange(e){
            console.log(e);
        },
        showToast(){
            this.$toast('我是信息',{
                text: '关闭',
                callback() {
                    console.log('用户知道了')
                }
            })
        }
    }
});



