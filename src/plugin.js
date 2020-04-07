import Toast from './toast'
let currentToast;
function createToast({vue,message,toastProps,onClose}) {
    let Constructor = vue.extend(Toast);
    let toast = new Constructor({
        propsData: toastProps
    });
    toast.$slots.default = [message];
    toast.$mount();
    // toast.$on('beforeClose',onClose);
    document.body.appendChild(toast.$el);
    return toast
}

export default {
    install(vue, options) {
        vue.prototype.$toast = function (message,toastProps) {
            if(currentToast){
                currentToast.close()
            }
            currentToast=createToast({vue,message,toastProps,
                onClose:()=>{
                    currentToast=null;
            }});

        }
    }
}