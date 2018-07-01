/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*  var view = View('.xxx)     */
// window.View = function (selector) {
//     return document.querySelector(selector);
// }

var View = exports.View = function View(selector) {
    _classCallCheck(this, View);

    return document.querySelector(selector);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ac8188bc229dd60462d53981269d9812.jpg";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loading = __webpack_require__(3);

var _initSwiper = __webpack_require__(4);

var _autoSlideUp = __webpack_require__(5);

var _stickyTopbar = __webpack_require__(6);

var _smoothlyNavigation = __webpack_require__(7);

var _message = __webpack_require__(8);

var _bgcMin = __webpack_require__(1);

var _bgcMin2 = _interopRequireDefault(_bgcMin);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!function () {
    (0, _loading.loading)();
    (0, _initSwiper.initSwiper)();
    (0, _autoSlideUp.autoSlideUp)();
    (0, _stickyTopbar.sticky)();
    (0, _smoothlyNavigation.smoothly)();
    (0, _message.messsage)();
}.call();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loading = loading;

var _view = __webpack_require__(0);

function loading() {
    var view = new _view.View('#upload');
    var controller = {
        view: null,
        init: function init(view) {
            this.view = view;
            this.setTimerloading.call(this);
        },
        setTimerloading: function setTimerloading() {
            setTimeout(function () {
                view.classList.remove('active');
            }, 1);
        }
        /****************加载动画********************************/
    };controller.init.call(controller, view);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initSwiper = initSwiper;

var _view = __webpack_require__(0);

function initSwiper() {
    var view = new _view.View('#myswiper');
    var controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            loop: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination'
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        },
        initSwiper: function initSwiper() {
            return new Swiper(this.view.querySelector('.swiper-container'), this.swiperOptions);
        },
        init: function init(view) {
            this.view = view;
            this.swiper = this.initSwiper();
        }
    };
    controller.init.call(controller, view);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.autoSlideUp = autoSlideUp;
function autoSlideUp() {
    var specialTags = document.querySelectorAll('[data-x]');
    for (var i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset');
    }

    setTimeout(function () {
        findClosestAndRemoveOffset();
    }, 1000);

    window.addEventListener('scroll', function () {
        findClosestAndRemoveOffset();
    });

    /********************helper************************************/
    function findClosestAndRemoveOffset() {
        var specialTags = document.querySelectorAll('[data-x]');
        var minIndex = 0;
        for (var _i = 1; _i < specialTags.length; _i++) {
            if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = _i;
            }
        }
        specialTags[minIndex].classList.remove('offset');
        for (var _i2 = 0; _i2 < specialTags.length; _i2++) {
            var id = specialTags[_i2].id;
            var aTag = document.querySelector('a[href ="#' + id + '"]');
            var liTag = aTag.parentNode;
            if (_i2 === minIndex) {
                liTag.classList.add('highlight');
            } else {
                liTag.classList.remove('highlight');
            }
        }
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sticky = sticky;

var _view = __webpack_require__(0);

function sticky() {
    var view = new _view.View('#header');
    var controller = {
        view: null,
        init: function init(view) {
            this.view = view;
            this.bindEvents.call(this);
        },
        bindEvents: function bindEvents(e) {
            var _this = this;

            window.addEventListener('scroll', function () {
                if (window.scrollY > 0) {
                    _this.active();
                } else {
                    _this.deleteActive();
                }
            });
        },
        active: function active() {
            this.view.classList.add('sticky');
        },
        deleteActive: function deleteActive() {
            this.view.classList.remove('sticky');
        }
    };
    controller.init.call(controller, view);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.smoothly = smoothly;

var _view = __webpack_require__(0);

function smoothly() {
    var view = new _view.View('nav.menu');
    var controller = {
        view: null,
        liTags: null,
        aTags: null,
        init: function init(view) {
            this.view = view;
            this.initAnimate();
            this.liTags = this.view.querySelectorAll('ul > li');
            this.aTags = this.view.querySelectorAll('ul > li > a');
            this.bindEventsMenu();
            this.bindEventsScrollToElement();
        },
        bindEventsMenu: function bindEventsMenu() {
            var _this = this;

            for (var i = 0; i < this.liTags.length; i++) {
                this.liTags[i].onmouseenter = function (e) {
                    _this.active(e.currentTarget);
                };
                this.liTags[i].onmouseleave = function (e) {
                    _this.activeDelete(e.currentTarget);
                };
            }
        },
        active: function active(element) {
            element.classList.add('active');
        },
        activeDelete: function activeDelete(element) {
            element.classList.remove('active');
        },
        initAnimate: function initAnimate() {
            /* 缓动  tween插件代码*/
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function scrollToElement(element) {
            var targetTop = element.offsetTop - 80;
            var currentTop = window.scrollY;
            var s = Math.abs(targetTop - currentTop) / 100;
            var t = s * 300;
            if (t > 900) {
                t = 900;
            }
            var coords = { y: currentTop }; // Start at (0, 0)
            var tween = new TWEEN.Tween(coords).to({ y: targetTop }, t).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
                window.scrollTo(0, coords.y);
            }).start();
        },
        bindEventsScrollToElement: function bindEventsScrollToElement() {
            var _this2 = this;

            for (var i = 0; i < this.aTags.length; i++) {
                this.aTags[i].onclick = function (e) {
                    e.preventDefault();
                    var a = e.currentTarget;
                    var href = a.getAttribute('href');
                    var element = document.querySelector(href);
                    _this2.scrollToElement(element);
                };
            }
        }
    };
    controller.init.call(controller, view);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.messsage = messsage;

var _view = __webpack_require__(0);

var _Model = __webpack_require__(9);

var _Controller = __webpack_require__(10);

function messsage() {
    var view = new _view.View('#siteMessage');

    var model = new _Model.Model({ 'resourceName': 'Message' });

    var controller = new _Controller.Controller({
        messageList: null,
        form: null,
        init: function init(view, model) {
            this.messageList = document.querySelector('#messageList');
            this.form = document.querySelector('#messageForm');
            this.loadfetch();
        },
        addLi: function addLi(eventAttributes) {
            var li = document.createElement('li');
            li.innerText = eventAttributes.name + ':' + eventAttributes.content;
            this.messageList.appendChild(li);
        },

        saveObject: function saveObject() {
            var _this = this;

            var content = this.form.querySelector('input[name = \'content\']').value;
            var name = this.form.querySelector('input[name = \'name\']').value;
            this.model.save({ 'name': name, 'content': content }).then(function (e) {
                _this.addLi(e.attributes);
                _this.form.querySelector('input[name = \'content\']').value = '';
                _this.form.querySelector('input[name = \'name\']').value = '';
            });
        },
        loadfetch: function loadfetch() {
            var _this2 = this;

            this.model.fetch().then(function (items) {
                var array = items.map(function (item) {
                    return item.attributes;
                });
                array.forEach(function (item) {
                    _this2.addLi(item);
                });
            });
        },
        bindEvents: function bindEvents() {
            var _this3 = this;

            this.form.addEventListener('submit', function (e) {
                e.preventDefault();
                _this3.saveObject();
            });
        }
    });

    controller.init.call(controller, view, model);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// window.Model = function (options) {
//     let resourceName = options.resourceName;
//     return {
//         init : function(){
//             let APP_ID = 'Od7Bd3gkNYWSgfwPaFUh2m0j-gzGzoHsz';
//             let APP_KEY = '8KIkSeoNSMheHVhmossNbGGK';
//             AV.init({appId: APP_ID, appKey: APP_KEY});
//         },
//         save : function(object){
//             let Class = AV.Object.extend(resourceName);
//             let leanclass = new Class();
//             return leanclass.save(object);
//         },
//         fetch : function(){
//             let query = new AV.Query(resourceName);
//             return query.find();
//         }
//     }
// }

var Model = exports.Model = function () {
    function Model(options) {
        _classCallCheck(this, Model);

        this.resourceName = options.resourceName;
    }

    _createClass(Model, [{
        key: 'init',
        value: function init() {
            var APP_ID = 'Od7Bd3gkNYWSgfwPaFUh2m0j-gzGzoHsz';
            var APP_KEY = '8KIkSeoNSMheHVhmossNbGGK';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        }
    }, {
        key: 'save',
        value: function save(object) {
            var Class = AV.Object.extend(this.resourceName);
            var leanclass = new Class();
            return leanclass.save(object);
        }
    }, {
        key: 'fetch',
        value: function fetch() {
            var query = new AV.Query(this.resourceName);
            return query.find();
        }
    }]);

    return Model;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// window.Controller = function (options) {
//     let init = options.init;
//     let object = {
//         view : null ,
//         model : null,
//         init : function(view , model){
//             this.view = view;
//             this.model = model;
//             this.model.init();
//             init.call(this , view , model);
//             this.bindEvents.call(this);
//         }
//     }
//     for (let key in options){
//         if(key !== 'init'){
//             object[key] = options[key];
//         }
//     }
//
//     return object
// }

var Controller = exports.Controller = function Controller(options) {
    _classCallCheck(this, Controller);

    var _init = options.init;
    var object = {
        view: null,
        model: null,
        init: function init(view, model) {
            this.view = view;
            this.model = model;
            this.model.init();
            _init.call(this, view, model);
            this.bindEvents.call(this);
        }
    };
    for (var key in options) {
        if (key !== 'init') {
            object[key] = options[key];
        }
    }
    return object;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(12);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./resume.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./resume.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(13);
exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "*{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.clearfix:after{content:\"\";display:block;clear:both}a{color:inherit;text-decoration:none}ul{list-style:none}h1,h2,h3,h4,h5,h6{font-weight:400}body{background-color:#efefef;color:#000}.header{color:hsla(0,0%,100%,.7);-webkit-transition:all .2s;transition:all .2s;padding:20px 0}.header .navigation{float:right;padding:4px 0}.header.sticky{background-color:#fff;color:#3d4451;-webkit-box-shadow:0 1px 0 0 rgba(0,0,0,.3);box-shadow:0 1px 0 0 rgba(0,0,0,.3);z-index:1;padding:10px 0}.header .navigation>ul>li{float:left;margin:0 17px;position:relative}.header .navigation>ul>li>a{font-size:12px;font-weight:700;display:block;padding:5px 0;border-top:3px solid transparent;border-bottom:3px solid transparent;color:inherit;position:relative}.header .navigation>ul>li.active>a:after,.header .navigation>ul>li.highlight>a:after{content:\"\";display:block;position:absolute;left:0;top:100%;width:100%;background-color:#d05c60;height:3px;-webkit-animation:a .3s;animation:a .3s}@-webkit-keyframes a{0%{width:0}to{width:100%}}@keyframes a{0%{width:0}to{width:100%}}.header .logo{float:left;font-family:Arial Black;font-size:24px;font-weight:700;color:#e8676b;padding-top:3px;padding-bottom:4px}.header .logo .card{color:#9a9da2;margin-left:4px}header.header .navigationBar{padding:0 16px}header.header{position:fixed;top:0;left:0;width:100%}.header .subMenu{display:none;position:absolute;right:0;top:100%;white-space:nowrap;color:#3d4451;background-color:#fff;font-size:16px;text-align:right;line-height:24px;-webkit-box-shadow:rgba(0,0,0,.12) 0 1px 6px 0,rgba(0,0,0,.24) 0 1px 4px 0;box-shadow:0 1px 6px 0 rgba(0,0,0,.12),0 1px 4px 0 rgba(0,0,0,.24);padding:10px 30px;cursor:pointer}.header li.active>.subMenu{display:block;-webkit-animation:b .3s;animation:b .3s}@-webkit-keyframes b{0%{margin-right:100%}to{margin-right:0}}@keyframes b{0%{margin-right:100%}to{margin-right:0}}.banner{background-image:url(" + escape(__webpack_require__(1)) + ");background-position:50%;background-size:cover;height:515px}.banner .mask{background:rgba(44,51,64,.8);height:100%}[data-x].offset{-webkit-transform:translateY(60px);transform:translateY(60px)}[data-x]{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:all .3s;transition:all .3s}main.main{margin-bottom:60px}main.main .userCard{margin:0 auto;margin-top:-350px;max-width:940px;-webkit-box-shadow:rgba(0,0,0,.5) 0 1px 3px 0;box-shadow:0 1px 3px 0 rgba(0,0,0,.5);background-color:#fff}main.main .userCard .self-introduction{padding:50px}main.main .userCard .image{float:left}main.main .userCard .image img{height:347px;width:299px}main.main .userCard .introduce{float:left;margin-left:65px;width:470px}main.main .userCard .introduce .hello{display:inline-block;position:relative;line-height:22px;vertical-align:top;font-size:16px;background-color:#e8676b;padding:4px 15px;margin-bottom:28px}main.main .userCard .introduce .hello:after{content:\"\";display:block;border:10px solid transparent;border-top-width:0;border-left-color:#e8676b;position:absolute;top:100%;left:0;margin-left:4px}main.main .userCard .introduce h1{margin-bottom:6px}main.main .userCard .introduce hr{border:none;height:0;border:1px solid #dedede;margin:20px 0}dd,main.main .userCard .introduce dt{float:left;padding:8px 0}main.main .userCard .introduce dt{width:30%;font-weight:700}main.main .userCard .introduce dd{width:70%;color:#9da0a7}main.main .userCard .footer{background-color:#e8676b;text-align:center}main.main .userCard .footer a{width:40px;line-height:30px;padding:5px 0;display:inline-block;margin:20px 32px;border-radius:50%}main.main .userCard .footer a:hover{background-color:#d05c60}main.main .userCard .footer a>svg{height:30px;width:30px;fill:#fff;vertical-align:top}main.main .CvWrapper{text-align:center;margin:32px 0}main.main a.downloadCv{font-size:15px;font-weight:700;line-height:15px;padding:21px 55px;display:inline-block;vertical-align:top;text-align:center;color:#3d4451;border-radius:2px;border:1px solid #cdcfd1;-webkit-transition:-webkit-box-shadow .2s;transition:-webkit-box-shadow .2s;transition:box-shadow .2s;transition:box-shadow .2s,-webkit-box-shadow .2s}main.main a.downloadCv:hover{-webkit-box-shadow:rgba(0,0,0,.2) 0 4px 14px 0;box-shadow:0 4px 14px 0 rgba(0,0,0,.2)}main.main p.text{text-align:center;font-size:18px;font-family:STKaiTi;line-height:33px}section.skills{margin:0 auto 60px;max-width:940px}section.message h2,section.portfolio h2,section.skills h2{font-size:34px;line-height:1.2em;color:#3d4451;font-weight:700;text-align:center;margin-bottom:30px}section.skills h3{font-size:14px;line-height:1.1em}section.skills ul{padding:42px 40px 10px;-webkit-box-shadow:rgba(0,0,0,.5) 0 1px 3px 0;box-shadow:0 1px 3px 0 rgba(0,0,0,.5);background-color:#fff}section.skills ul>li{float:left;width:48%}section.skills ul>li:nth-child(2n){float:right}section.skills ul>li .progressBar{height:5px;background-color:#fae1e1;border-radius:2px;margin:4px 0 40px}section.skills ul>li .progressBar .progress{height:100%;border-radius:2px;background-color:#e8676b;-webkit-transition:all 1s;transition:all 1s}section.skills ul>li:first-child .progressBar .progress{width:60%}section.skills ul>li:nth-child(2) .progressBar .progress{width:70%}section.skills ul>li:nth-child(3) .progressBar .progress{width:60%}section.skills ul>li:nth-child(4) .progressBar .progress{width:80%}section.skills ul>li:nth-child(5) .progressBar .progress{width:60%}section.skills ul>li:nth-child(6) .progressBar .progress{width:30%}section.skills ul>li:nth-child(7) .progressBar .progress{width:50%}section.skills.offset ul>li .progressBar .progress{width:0}section.portfolio{margin:0 auto 60px;max-width:832px;text-align:center;position:relative}section.portfolio .swiper-container{width:668px;height:501px}.swiper-button-next,section.portfolio .swiper-button-prev{background-color:#fff;width:44px;height:44px;border-radius:50%;position:absolute;top:320px}section.message{margin:0 auto 60px;max-width:832px}section.message #messageForm{text-align:center;margin:50px 0 300px}section.message #messageList{border-bottom:1px solid #ddd}section.message #messageList>li{border-top:1px solid #ddd;padding:20px}.loading{width:200px;height:200px;position:relative}.loading:after,.loading:before{content:\"\";display:block;position:absolute;height:0;width:0;top:0;left:0;bottom:0;right:0;margin:auto;background-color:#000;border-radius:50%;-webkit-animation:c 1.5s linear infinite;animation:c 1.5s linear infinite}.loading:after{-webkit-animation-delay:.75s;animation-delay:.75s}@-webkit-keyframes c{0%{width:0;height:0;opacity:1}to{width:100px;height:100px;opacity:0}}@keyframes c{0%{width:0;height:0;opacity:1}to{width:100px;height:100px;opacity:0}}.upload{height:100%;width:100%;display:none;position:fixed;top:0;left:0;z-index:1;background-color:#fff;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.upload.active{display:-webkit-box;display:-ms-flexbox;display:flex}.icon{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);