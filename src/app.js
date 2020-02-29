import Vue from 'vue'
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup  from "./button-group.vue";
import chai from 'chai'
import Input from './input'
Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message:'赵五'
    },
    methods:{
        inputChange(e){
            console.log(e);
        }
    }
});

const expect=chai.expect;
import spies from 'chai-spies'
chai.use(spies)

{
    const Constructor=Vue.extend(Button);
    const VM=new Constructor({
        propsData:{
            icon:'settings'
        }
    });
    VM.$mount("#test");
    let userElement=VM.$el.querySelector('use');
    let href=userElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-settings');
    VM.$el.remove();
    VM.$destroy()

}
{
    const loadingConstructor=Vue.extend(Button);
    const VM=new loadingConstructor({
        propsData:{
            icon:'settings',
            isLoading:true
        }
    });

    VM.$mount('#loading');
    let userElement=VM.$el.querySelector('use');
    let href=userElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading');
    VM.$el.remove();
    VM.$destroy()

}
{   let div=document.createElement('div');
    document.body.appendChild(div);
    const Constructor=Vue.extend(Button);
    const left=new Constructor({
        propsData:{
            icon:'settings',
        }
    });

    left.$mount(div);
    let svg=left.$el.querySelector('svg');
    let {order}=window.getComputedStyle(svg);
    expect(order).to.eq('1');
    left.$el.remove();
    left.$destroy()
}
{   let div=document.createElement('div');
    document.body.appendChild(div);
    const Constructor=Vue.extend(Button);
    const right=new Constructor({
        propsData:{
            icon:'settings',
            iconPosition:'right'
        }
    });

    right.$mount(div);
    let svg=right.$el.querySelector('svg');
    let {order}=window.getComputedStyle(svg);
    expect(order).to.eq('2');
    right.$el.remove();
    right.$destroy()
}
{
    const Constructor=Vue.extend(Button);
    const VM=new Constructor({
        propsData:{
            icon:'settings',

        }
    });
    VM.$mount();
    let spy=chai.spy(function () {
    });
    VM.$on('click',spy);
    let button=VM.$el;
    button.click();
    expect(spy).to.have.been.called()

}
