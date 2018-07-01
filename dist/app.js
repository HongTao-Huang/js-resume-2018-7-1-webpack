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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

"use strict";


var _loading = __webpack_require__(2);

var _initSwiper = __webpack_require__(3);

var _autoSlideUp = __webpack_require__(4);

var _stickyTopbar = __webpack_require__(5);

var _smoothlyNavigation = __webpack_require__(6);

var _message = __webpack_require__(7);

!function () {
    (0, _loading.loading)();
    (0, _initSwiper.initSwiper)();
    (0, _autoSlideUp.autoSlideUp)();
    (0, _stickyTopbar.sticky)();
    (0, _smoothlyNavigation.smoothly)();
    (0, _message.messsage)();
}.call();

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.messsage = messsage;

var _view = __webpack_require__(0);

var _Model = __webpack_require__(8);

var _Controller = __webpack_require__(9);

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
/* 8 */
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
/* 9 */
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

/***/ })
/******/ ]);