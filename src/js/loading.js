import { View } from './base/view.js'
export function loading () {
    var view = new View('#upload');
    var controller = {
        view : null,
        init : function(view){
            this.view = view;
            this.setTimerloading.call(this);
        },
        setTimerloading : function(){
            setTimeout(function () {
                view.classList.remove('active');
            },1);
        }
    }
    /****************加载动画********************************/
    controller.init.call(controller,view);
}
