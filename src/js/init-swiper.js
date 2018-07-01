import { View } from './base/view.js'

export function initSwiper() {
    var view = new View('#myswiper');
    var controller = {
        view : null,
        swiper : null,
        swiperOptions : {
            loop: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        initSwiper : function (){
                return new Swiper (
                this.view.querySelector('.swiper-container'),
                this.swiperOptions
            )
        },
        init : function (view) {
            this.view = view;
            this.swiper = this.initSwiper();
        }
    }
    controller.init.call(controller,view);
}
