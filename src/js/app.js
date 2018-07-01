import { loading } from "./loading";
import { initSwiper } from "./init-swiper";
import { autoSlideUp } from "./auto-slide-up";
import { sticky } from "./sticky-topbar";
import { smoothly } from "./smoothly-navigation";
import { messsage } from "./message";

!function () {
    loading();
    initSwiper();
    autoSlideUp();
    sticky();
    smoothly();
    messsage();
}.call()