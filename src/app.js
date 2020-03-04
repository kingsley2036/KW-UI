import Vue from 'vue'
import Button from "./button.vue";
// import Icon from "./icon.vue";
import ButtonGroup  from "./button-group.vue";
import chai from 'chai'
import Input from './input'
import Row from './row'
import Col from './col'
import Toast from './toast'
import Plugin from './plugin.js'

import Tabs from './tabs'
import tabsHead from './tabs-head'
import tabsItem from './tabs-item'
import tabsBody from './tabs-body'
import tabsPane from './tabs-pane'
Vue.component('g-button',Button);
// Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-row',Row);
Vue.component('g-col',Col);
Vue.component('g-toast',Toast);
Vue.component('g-tabs',Tabs);
Vue.component('g-tabs-head',tabsHead);
Vue.component('g-tabs-item',tabsItem);
Vue.component('g-tabs-body',tabsBody);
Vue.component('g-tabs-pane',tabsPane);
Vue.use(Plugin);
new Vue({
    el:'#app',
    data:{
        selectedTab:'sports'
    },
    created(){

    },
    methods:{
        showToast(position){
            this.$toast('我是信息',{
                position,
                delay:2,
                autoClose:true,
                closeButton:{
                    text: '关闭了',
                    callback:()=> {
                        console.log('用户知道了')
                    }
                }
            })
        }

    }
});



