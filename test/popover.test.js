const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('popover', () => {
    it('存在', () => {
        expect(Popover).to.exist
    })
    it('设置position', (done) => {
        Vue.component('g-popover', Popover)
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
          <g-popover position="left" ref="a">
            <template slot="content">
                <div>popover内容popover内容</div>
            </template>
                <button>按钮</button>
          </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-left')).to.be.true
            done()
        })
    })
    it('设置trigger', (done) => {
        Vue.component('g-popover', Popover)
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
          <g-popover  ref="a" trigger="hover">
            <template slot="content">
                <div>popover内容popover内容</div>
            </template>
                <button>按钮</button>
        </g-popover>
        `;
        const vm = new Vue({
            el: div
        });
            const event=new Event('mouseenter');
            vm.$refs.a.$el.dispatchEvent(event);
            vm.$nextTick(()=>{
                const {contentWrapper} = vm.$refs.a.$refs;
                expect(contentWrapper.classList.contains('content-wrapper')).to.be.true;
                done()
            })


    })
});