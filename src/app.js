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
import layout from "./layout";
import content from "./content";
import footer from "./footer";
import sider from "./sider";
import header from "./header";
import Tabs from './tabs'
import tabsHead from './tabs-head'
import tabsItem from './tabs-item'
import tabsBody from './tabs-body'
import tabsPane from './tabs-pane'
import collapse from "./collapse.vue";
import collapseItem from './collapse-item.vue'

Vue.component('g-button',Button);
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

Vue.component('g-layout',layout);
Vue.component('g-header',header);
Vue.component('g-footer',footer);
Vue.component('g-content',content);
Vue.component('g-sider',sider);
Vue.component('g-collapse',collapse);
Vue.component('g-collapse-item',collapseItem);
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



