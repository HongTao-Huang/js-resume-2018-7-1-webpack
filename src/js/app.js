import { loading } from "./loading";
import { initSwiper } from "./init-swiper";
import { autoSlideUp } from "./auto-slide-up";
import { sticky } from "./sticky-topbar";
import { smoothly } from "./smoothly-navigation";
import { messsage } from "./message";
import img from '../../images/bgc-min.jpg'
import "../styles/resume.scss"

!function () {
    loading();
    initSwiper();
    autoSlideUp();
    sticky();
    smoothly();
    messsage();
}.call()