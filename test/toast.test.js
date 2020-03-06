const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    });
    describe('props',()=>{
        // this.timeout(6000)
        it('接受autoClose',(done)=>{
            let div=document.createElement('div');
            document.body.appendChild(div);
            let Constructor=Vue.extend(Toast);
            let vm=new Constructor({
                propsData:{
                    autoClose:true,
                    delay:1
                }
            }).$mount(div);
            setTimeout(()=>{
                expect(document.body.contains(vm.$el)).to.eq(false);
                done()
            },1900)
        });
        it('接受closeButton',()=>{
            const callBack=sinon.fake();
            let Constructor=Vue.extend(Toast);
            let vm=new Constructor({
                propsData:{
                    autoClose:false,
                    closeButton:{
                        text:'关闭吧',
                        callBack:callBack
                    }
                }
            }).$mount();

            let closeButton=vm.$el.querySelector('.close');

            expect(closeButton.innerText).to.eq('关闭吧');
            setTimeout(()=>{
                closeButton.click();
                expect(callBack).to.have.been.called;
            },200)
        })
    })


});