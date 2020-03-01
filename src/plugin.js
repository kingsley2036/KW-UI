import Toast from './toast'

export default {
    install(vue, options) {
        vue.prototype.$toast = function (message,toastprops) {
            let Constructor = vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton: toastprops
                }
            })
            toast.$slots.default = [message]
            toast.$mount();
            document.body.appendChild(toast.$el)

        }
    }
}