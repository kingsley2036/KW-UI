const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    });
    describe('props',()=>{
    it('可以设置value', () => {
        const Constructor = Vue.extend(Input);
        const vm = new Constructor({
            propsData: {
                value: '赵四'
            }
        }).$mount();
        const useElement = vm.$el.querySelector('input');
        expect(useElement.value).to.equal('赵四');
        vm.$destroy()
    });
    it('可以设置value', () => {
        const Constructor = Vue.extend(Input);
        const vm = new Constructor({
            propsData: {
                value: '赵四',
                disabled:true
            }
        }).$mount();
        const useElement = vm.$el.querySelector('input');
        expect(useElement.disabled).to.equal(true);
        vm.$destroy()
    });
    it('可以设置readonly', () => {
        const Constructor = Vue.extend(Input);
        const vm = new Constructor({
            propsData: {
               readonly:true
            }
        }).$mount();
        const useElement = vm.$el.querySelector('input');
        expect(useElement.readOnly).to.equal(true);
        vm.$destroy()
    });
    it('可以设置error', () => {
        const Constructor = Vue.extend(Input);
        const vm = new Constructor({
            propsData: {
                error:'密码不正确'
            }
        }).$mount();
        const useElement = vm.$el.querySelector('use');
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-error1')
        // expect(useElement.readOnly).to.equal(true);
        const message = vm.$el.querySelector('.errorMessage');
        expect(message.innerText).to.equal('密码不正确');
        vm.$destroy()
    });
    });
    describe('events',()=>{
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持事件',()=>{
            ['change','input','focus','blur'].forEach((eventName)=>{
                vm = new Constructor({}).$mount();
                const callBack=sinon.fake();
                vm.$on(eventName,callBack)
                let event=new Event(eventName)
                Object.defineProperty(event,'target',{value:{value:'hi'}})
                let inputElement=vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                console.log(eventName);
                console.log(event.target);
                console.log(event.target.value);
                expect(callBack).to.have.been.calledWith('hi')
            })

        })
    })
});