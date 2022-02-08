(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
npm install -g watchify
npm init
install packages
import here
watchify assets/js/packages.js -o assets/js/bundle.js
*/

// polyfill for Safary scrollIntoView options
var seamless = require("seamless-scroll-polyfill");
seamless.polyfill();


// inView check
var inView = require('in-view');

window.addEventListener('DOMContentLoaded', function() {
// window.addEventListener('load', function() {

    // This is for navigation highlight
    inView.threshold(0.8);
    inView.offset(400);

    inView('.js-nav')
        .on('enter', el => {
            let item = '.navigation a[href="#' + el.getAttribute("id") + '"]'
            if(document.querySelector(item)) {
                document.querySelectorAll('.navigation a').forEach(function(el) {
                    el.classList.remove('active')
                });
                  
                document.querySelector(item).classList.add('active')
            }
        })

    // For animation, draw once
    // inView.threshold(0);
    // inView('.animate-inside')
    //     .on('enter', el => {
    //         el.classList.add('inview')
    //     })


    function sendData(formObj) {
        const XHR = new XMLHttpRequest();
        const FD = new FormData( formObj );
       
        XHR.addEventListener( "load", function() {
            formObj.querySelector('.js-form-register--status').innerHTML = 'Thanks, your application has been sent!'
        } );

        XHR.addEventListener( "error", function() {
            // event.target.responseText
            formObj.querySelector('.js-form-register--status').innerHTML = 'Oops! Something went wrong, try later or contact us'
        } );
    
        XHR.open( "POST", "https://script.google.com/macros/s/AKfycbybkfiRn-UbyhJ97O7X1b0-8ATvEug1Kr8VI1o_arV2ws7K9jFYuwvdyMTwbqB1ePXwKg/exec" );
        XHR.send( FD );
    }
    
    const forms = document.querySelectorAll( ".js-form-register" );

    forms.forEach((form) => {
        form.addEventListener( "submit", function ( event ) {
            event.preventDefault();
            this.querySelector( "input[type='submit']").disabled = true;
    
            sendData(this)
        });
    });
});
},{"in-view":2,"seamless-scroll-polyfill":3}],2:[function(require,module,exports){
/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.inView=e():t.inView=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i=n(2),o=r(i);t.exports=o["default"]},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),o=r(i),u=n(3),f=r(u),s=n(4),c=function(){if("undefined"!=typeof window){var t=100,e=["scroll","resize","load"],n={history:[]},r={offset:{},threshold:0,test:s.inViewport},i=(0,o["default"])(function(){n.history.forEach(function(t){n[t].check()})},t);e.forEach(function(t){return addEventListener(t,i)}),window.MutationObserver&&addEventListener("DOMContentLoaded",function(){new MutationObserver(i).observe(document.body,{attributes:!0,childList:!0,subtree:!0})});var u=function(t){if("string"==typeof t){var e=[].slice.call(document.querySelectorAll(t));return n.history.indexOf(t)>-1?n[t].elements=e:(n[t]=(0,f["default"])(e,r),n.history.push(t)),n[t]}};return u.offset=function(t){if(void 0===t)return r.offset;var e=function(t){return"number"==typeof t};return["top","right","bottom","left"].forEach(e(t)?function(e){return r.offset[e]=t}:function(n){return e(t[n])?r.offset[n]=t[n]:null}),r.offset},u.threshold=function(t){return"number"==typeof t&&t>=0&&t<=1?r.threshold=t:r.threshold},u.test=function(t){return"function"==typeof t?r.test=t:r.test},u.is=function(t){return r.test(t,r)},u.offset(0),u}};e["default"]=c()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e,r){n(this,t),this.options=r,this.elements=e,this.current=[],this.handlers={enter:[],exit:[]},this.singles={enter:[],exit:[]}}return r(t,[{key:"check",value:function(){var t=this;return this.elements.forEach(function(e){var n=t.options.test(e,t.options),r=t.current.indexOf(e),i=r>-1,o=n&&!i,u=!n&&i;o&&(t.current.push(e),t.emit("enter",e)),u&&(t.current.splice(r,1),t.emit("exit",e))}),this}},{key:"on",value:function(t,e){return this.handlers[t].push(e),this}},{key:"once",value:function(t,e){return this.singles[t].unshift(e),this}},{key:"emit",value:function(t,e){for(;this.singles[t].length;)this.singles[t].pop()(e);for(var n=this.handlers[t].length;--n>-1;)this.handlers[t][n](e);return this}}]),t}();e["default"]=function(t,e){return new i(t,e)}},function(t,e){"use strict";function n(t,e){var n=t.getBoundingClientRect(),r=n.top,i=n.right,o=n.bottom,u=n.left,f=n.width,s=n.height,c={t:o,r:window.innerWidth-u,b:window.innerHeight-r,l:i},a={x:e.threshold*f,y:e.threshold*s};return c.t>e.offset.top+a.y&&c.r>e.offset.right+a.x&&c.b>e.offset.bottom+a.y&&c.l>e.offset.left+a.x}Object.defineProperty(e,"__esModule",{value:!0}),e.inViewport=n},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){var r=n(5),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},function(t,e,n){function r(t,e,n){function r(e){var n=x,r=m;return x=m=void 0,E=e,w=t.apply(r,n)}function a(t){return E=t,j=setTimeout(h,e),M?r(t):w}function l(t){var n=t-O,r=t-E,i=e-n;return _?c(i,g-r):i}function d(t){var n=t-O,r=t-E;return void 0===O||n>=e||n<0||_&&r>=g}function h(){var t=o();return d(t)?p(t):void(j=setTimeout(h,l(t)))}function p(t){return j=void 0,T&&x?r(t):(x=m=void 0,w)}function v(){void 0!==j&&clearTimeout(j),E=0,x=O=m=j=void 0}function y(){return void 0===j?w:p(o())}function b(){var t=o(),n=d(t);if(x=arguments,m=this,O=t,n){if(void 0===j)return a(O);if(_)return j=setTimeout(h,e),r(O)}return void 0===j&&(j=setTimeout(h,e)),w}var x,m,g,w,j,O,E=0,M=!1,_=!1,T=!0;if("function"!=typeof t)throw new TypeError(f);return e=u(e)||0,i(n)&&(M=!!n.leading,_="maxWait"in n,g=_?s(u(n.maxWait)||0,e):g,T="trailing"in n?!!n.trailing:T),b.cancel=v,b.flush=y,b}var i=n(1),o=n(8),u=n(10),f="Expected a function",s=Math.max,c=Math.min;t.exports=r},function(t,e,n){var r=n(6),i=function(){return r.Date.now()};t.exports=i},function(t,e,n){function r(t,e,n){var r=!0,f=!0;if("function"!=typeof t)throw new TypeError(u);return o(n)&&(r="leading"in n?!!n.leading:r,f="trailing"in n?!!n.trailing:f),i(t,e,{leading:r,maxWait:e,trailing:f})}var i=n(7),o=n(1),u="Expected a function";t.exports=r},function(t,e){function n(t){return t}t.exports=n}])});
},{}],3:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.seamless = {}));
}(this, (function (exports) { 'use strict';

    var ease = function (k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    };
    var DURATION = 500;
    var isScrollBehaviorSupported = function () { return "scrollBehavior" in document.documentElement.style; };
    var original = {
        _elementScroll: undefined,
        get elementScroll() {
            return (this._elementScroll || (this._elementScroll = HTMLElement.prototype.scroll ||
                HTMLElement.prototype.scrollTo ||
                function (x, y) {
                    this.scrollLeft = x;
                    this.scrollTop = y;
                }));
        },
        _elementScrollIntoView: undefined,
        get elementScrollIntoView() {
            return (this._elementScrollIntoView || (this._elementScrollIntoView = HTMLElement.prototype.scrollIntoView));
        },
        _windowScroll: undefined,
        get windowScroll() {
            return (this._windowScroll || (this._windowScroll = window.scroll || window.scrollTo));
        },
    };
    var modifyPrototypes = function (modification) {
        var prototypes = [HTMLElement.prototype, SVGElement.prototype, Element.prototype];
        prototypes.forEach(function (prototype) { return modification(prototype); });
    };
    var now = function () { var _a, _b, _c; return (_c = (_b = (_a = window.performance) === null || _a === void 0 ? void 0 : _a.now) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : Date.now(); };
    var step = function (context) {
        var currentTime = now();
        var elapsed = (currentTime - context.timeStamp) / (context.duration || DURATION);
        if (elapsed > 1) {
            context.method(context.targetX, context.targetY);
            context.callback();
            return;
        }
        var value = (context.timingFunc || ease)(elapsed);
        var currentX = context.startX + (context.targetX - context.startX) * value;
        var currentY = context.startY + (context.targetY - context.startY) * value;
        context.method(currentX, currentY);
        context.rafId = requestAnimationFrame(function () {
            step(context);
        });
    };
    // https://drafts.csswg.org/cssom-view/#normalize-non-finite-values
    var nonFinite = function (value) {
        if (!isFinite(value)) {
            return 0;
        }
        return Number(value);
    };
    var isObject = function (value) {
        var type = typeof value;
        return value !== null && (type === "object" || type === "function");
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    var elementScroll = function (element, options) {
        var _a, _b;
        var originalBoundFunc = original.elementScroll.bind(element);
        if (options.left === undefined && options.top === undefined) {
            return;
        }
        var startX = element.scrollLeft;
        var startY = element.scrollTop;
        var targetX = nonFinite((_a = options.left) !== null && _a !== void 0 ? _a : startX);
        var targetY = nonFinite((_b = options.top) !== null && _b !== void 0 ? _b : startY);
        if (options.behavior !== "smooth") {
            return originalBoundFunc(targetX, targetY);
        }
        var removeEventListener = function () {
            window.removeEventListener("wheel", cancelScroll);
            window.removeEventListener("touchmove", cancelScroll);
        };
        var context = {
            timeStamp: now(),
            duration: options.duration,
            startX: startX,
            startY: startY,
            targetX: targetX,
            targetY: targetY,
            rafId: 0,
            method: originalBoundFunc,
            timingFunc: options.timingFunc,
            callback: removeEventListener,
        };
        var cancelScroll = function () {
            cancelAnimationFrame(context.rafId);
            removeEventListener();
        };
        window.addEventListener("wheel", cancelScroll, {
            passive: true,
            once: true,
        });
        window.addEventListener("touchmove", cancelScroll, {
            passive: true,
            once: true,
        });
        step(context);
    };
    var elementScrollPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        var originalFunc = original.elementScroll;
        modifyPrototypes(function (prototype) {
            return (prototype.scroll = function scroll() {
                if (arguments.length === 1) {
                    var scrollOptions = arguments[0];
                    if (!isObject(scrollOptions)) {
                        throw new TypeError("Failed to execute 'scroll' on 'Element': parameter 1 ('options') is not an object.");
                    }
                    return elementScroll(this, __assign(__assign({}, scrollOptions), animationOptions));
                }
                return originalFunc.apply(this, arguments);
            });
        });
    };

    var elementScrollBy = function (element, options) {
        var left = nonFinite(options.left || 0) + element.scrollLeft;
        var top = nonFinite(options.top || 0) + element.scrollTop;
        return elementScroll(element, __assign(__assign({}, options), { left: left, top: top }));
    };
    var elementScrollByPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        modifyPrototypes(function (prototype) {
            return (prototype.scrollBy = function scrollBy() {
                if (arguments.length === 1) {
                    var scrollByOptions = arguments[0];
                    if (!isObject(scrollByOptions)) {
                        throw new TypeError("Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.");
                    }
                    return elementScrollBy(this, __assign(__assign({}, scrollByOptions), animationOptions));
                }
                var left = Number(arguments[0]);
                var top = Number(arguments[1]);
                return elementScrollBy(this, { left: left, top: top });
            });
        });
    };

    // https://drafts.csswg.org/css-writing-modes-4/#block-flow
    var normalizeWritingMode = function (writingMode) {
        switch (writingMode) {
            case "horizontal-tb":
            case "lr":
            case "lr-tb":
            case "rl":
            case "rl-tb":
                return 0 /* HorizontalTb */;
            case "vertical-rl":
            case "tb":
            case "tb-rl":
                return 1 /* VerticalRl */;
            case "vertical-lr":
            case "tb-lr":
                return 2 /* VerticalLr */;
            case "sideways-rl":
                return 3 /* SidewaysRl */;
            case "sideways-lr":
                return 4 /* SidewaysLr */;
        }
        return 0 /* HorizontalTb */;
    };
    // https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/dom/element.cc;l=1097-1189;drc=6a7533d4a1e9f2372223a9d912a9e53a6fa35ae0
    var toPhysicalAlignment = function (options, writingMode, isLTR) {
        var _a;
        var _b = __read([options.block || "start", options.inline || "nearest"], 2), xPos = _b[0], yPos = _b[1];
        /**  0b{vertical}{horizontal}  0: normal, 1: reverse */
        var layout = 0;
        /**
         * WritingMode.VerticalLr: ↓→
         * | 1 | 4 |   |
         * | 2 | 5 |   |
         * | 3 |   |   |
         *
         * RTL: ↑→
         * | 3 |   |   |
         * | 2 | 5 |   |
         * | 1 | 4 |   |
         */
        if (!isLTR) {
            layout ^= 2 /* ReverseVertical */;
        }
        switch (writingMode) {
            /**
             * ↓→
             * | 1 | 2 | 3 |
             * | 4 | 5 |   |
             * |   |   |   |
             *
             * RTL: ↓←
             * | 3 | 2 | 1 |
             * |   | 5 | 4 |
             * |   |   |   |
             */
            case 0 /* HorizontalTb */:
                // swap horizontal and vertical
                layout = (layout >> 1) | ((layout & 1) << 1);
                _a = __read([yPos, xPos], 2), xPos = _a[0], yPos = _a[1];
                break;
            /**
             * ↓←
             * |   | 4 | 1 |
             * |   | 5 | 2 |
             * |   |   | 3 |
             *
             * RTL: ↑←
             * |   |   | 3 |
             * |   | 5 | 2 |
             * |   | 4 | 1 |
             */
            case 1 /* VerticalRl */:
            case 3 /* SidewaysRl */:
                //  reverse horizontal
                layout ^= 1 /* ReverseHorizontal */;
                break;
            /**
             * ↑→
             * | 3 |   |   |
             * | 2 | 5 |   |
             * | 1 | 4 |   |
             *
             * RTL: ↓→
             * | 1 | 4 |   |
             * | 2 | 5 |   |
             * | 3 |   |   |
             */
            case 4 /* SidewaysLr */:
                // reverse vertical
                layout ^= 2 /* ReverseVertical */;
                break;
        }
        return [xPos, yPos].map(function (value, index) {
            switch (value) {
                case "center":
                    return 1 /* CenterAlways */;
                case "nearest":
                    return 0 /* ToEdgeIfNeeded */;
                default: {
                    var reverse = (layout >> index) & 1;
                    return (value === "start") === !reverse ? 2 /* LeftOrTop */ : 3 /* RightOrBottom */;
                }
            }
        });
    };
    // code from stipsan/compute-scroll-into-view
    // https://github.com/stipsan/compute-scroll-into-view/blob/5396c6b78af5d0bbce11a7c4e93cc3146546fcd3/src/index.ts
    /**
     * Find out which edge to align against when logical scroll position is "nearest"
     * Interesting fact: "nearest" works similarily to "if-needed", if the element is fully visible it will not scroll it
     *
     * Legends:
     * ┌────────┐ ┏ ━ ━ ━ ┓
     * │ target │   frame
     * └────────┘ ┗ ━ ━ ━ ┛
     */
    var alignNearest = function (scrollingEdgeStart, scrollingEdgeEnd, scrollingSize, scrollingBorderStart, scrollingBorderEnd, elementEdgeStart, elementEdgeEnd, elementSize) {
        /**
         * If element edge A and element edge B are both outside scrolling box edge A and scrolling box edge B
         *
         *          ┌──┐
         *        ┏━│━━│━┓
         *          │  │
         *        ┃ │  │ ┃        do nothing
         *          │  │
         *        ┗━│━━│━┛
         *          └──┘
         *
         *  If element edge C and element edge D are both outside scrolling box edge C and scrolling box edge D
         *
         *    ┏ ━ ━ ━ ━ ┓
         *   ┌───────────┐
         *   │┃         ┃│        do nothing
         *   └───────────┘
         *    ┗ ━ ━ ━ ━ ┛
         */
        if ((elementEdgeStart < scrollingEdgeStart && elementEdgeEnd > scrollingEdgeEnd) ||
            (elementEdgeStart > scrollingEdgeStart && elementEdgeEnd < scrollingEdgeEnd)) {
            return 0;
        }
        /**
         * If element edge A is outside scrolling box edge A and element height is less than scrolling box height
         *
         *          ┌──┐
         *        ┏━│━━│━┓         ┏━┌━━┐━┓
         *          └──┘             │  │
         *  from  ┃      ┃     to  ┃ └──┘ ┃
         *
         *        ┗━ ━━ ━┛         ┗━ ━━ ━┛
         *
         * If element edge B is outside scrolling box edge B and element height is greater than scrolling box height
         *
         *        ┏━ ━━ ━┓         ┏━┌━━┐━┓
         *                           │  │
         *  from  ┃ ┌──┐ ┃     to  ┃ │  │ ┃
         *          │  │             │  │
         *        ┗━│━━│━┛         ┗━│━━│━┛
         *          │  │             └──┘
         *          │  │
         *          └──┘
         *
         * If element edge C is outside scrolling box edge C and element width is less than scrolling box width
         *
         *       from                 to
         *    ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
         *  ┌───┐                 ┌───┐
         *  │ ┃ │       ┃         ┃   │     ┃
         *  └───┘                 └───┘
         *    ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
         *
         * If element edge D is outside scrolling box edge D and element width is greater than scrolling box width
         *
         *       from                 to
         *    ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
         *        ┌───────────┐   ┌───────────┐
         *    ┃   │     ┃     │   ┃         ┃ │
         *        └───────────┘   └───────────┘
         *    ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
         */
        if ((elementEdgeStart <= scrollingEdgeStart && elementSize <= scrollingSize) ||
            (elementEdgeEnd >= scrollingEdgeEnd && elementSize >= scrollingSize)) {
            return elementEdgeStart - scrollingEdgeStart - scrollingBorderStart;
        }
        /**
         * If element edge B is outside scrolling box edge B and element height is less than scrolling box height
         *
         *        ┏━ ━━ ━┓         ┏━ ━━ ━┓
         *
         *  from  ┃      ┃     to  ┃ ┌──┐ ┃
         *          ┌──┐             │  │
         *        ┗━│━━│━┛         ┗━└━━┘━┛
         *          └──┘
         *
         * If element edge A is outside scrolling box edge A and element height is greater than scrolling box height
         *
         *          ┌──┐
         *          │  │
         *          │  │             ┌──┐
         *        ┏━│━━│━┓         ┏━│━━│━┓
         *          │  │             │  │
         *  from  ┃ └──┘ ┃     to  ┃ │  │ ┃
         *                           │  │
         *        ┗━ ━━ ━┛         ┗━└━━┘━┛
         *
         * If element edge C is outside scrolling box edge C and element width is greater than scrolling box width
         *
         *           from                 to
         *        ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
         *  ┌───────────┐           ┌───────────┐
         *  │     ┃     │   ┃       │ ┃         ┃
         *  └───────────┘           └───────────┘
         *        ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
         *
         * If element edge D is outside scrolling box edge D and element width is less than scrolling box width
         *
         *           from                 to
         *        ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
         *                ┌───┐             ┌───┐
         *        ┃       │ ┃ │       ┃     │   ┃
         *                └───┘             └───┘
         *        ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
         *
         */
        if ((elementEdgeEnd > scrollingEdgeEnd && elementSize < scrollingSize) ||
            (elementEdgeStart < scrollingEdgeStart && elementSize > scrollingSize)) {
            return elementEdgeEnd - scrollingEdgeEnd + scrollingBorderEnd;
        }
        return 0;
    };
    var canOverflow = function (overflow) {
        return overflow !== "visible" && overflow !== "clip";
    };
    var getFrameElement = function (element) {
        if (!element.ownerDocument || !element.ownerDocument.defaultView) {
            return null;
        }
        try {
            return element.ownerDocument.defaultView.frameElement;
        }
        catch (e) {
            return null;
        }
    };
    var isHiddenByFrame = function (element) {
        var frame = getFrameElement(element);
        if (!frame) {
            return false;
        }
        return frame.clientHeight < element.scrollHeight || frame.clientWidth < element.scrollWidth;
    };
    var isScrollable = function (element, computedStyle) {
        if (element.clientHeight < element.scrollHeight || element.clientWidth < element.scrollWidth) {
            return canOverflow(computedStyle.overflowY) || canOverflow(computedStyle.overflowX) || isHiddenByFrame(element);
        }
        return false;
    };
    var parentElement = function (element) {
        var parentNode = element.parentNode;
        if (parentNode !== null && parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            return parentNode.host;
        }
        return parentNode;
    };
    var clamp = function (value, width) {
        if (value < -width) {
            return -width;
        }
        if (value > width) {
            return width;
        }
        return value;
    };
    var isCSSPropertySupported = function (property) { return property in document.documentElement.style; };
    var getSupportedScrollMarginProperty = function () {
        // Webkit uses "scroll-snap-margin" https://bugs.webkit.org/show_bug.cgi?id=189265.
        return ["scroll-margin", "scroll-snap-margin"].filter(isCSSPropertySupported)[0];
    };
    var getElementScrollSnapArea = function (element, computedStyle) {
        var _a = element.getBoundingClientRect(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        var _b = __read([
            "top",
            "right",
            "bottom",
            "left",
        ].map(function (edge) {
            var scrollProperty = getSupportedScrollMarginProperty();
            var value = computedStyle.getPropertyValue(scrollProperty + "-" + edge);
            return parseInt(value, 10) || 0;
        }), 4), scrollMarginTop = _b[0], scrollMarginRight = _b[1], scrollMarginBottom = _b[2], scrollMarginLeft = _b[3];
        return [top - scrollMarginTop, right + scrollMarginRight, bottom + scrollMarginBottom, left - scrollMarginLeft];
    };
    var elementScrollIntoView = function (element, options) {
        if (element.isConnected === false) {
            return;
        }
        // On Chrome and Firefox, document.scrollingElement will return the <html> element.
        // Safari, document.scrollingElement will return the <body> element.
        // On Edge, document.scrollingElement will return the <body> element.
        // IE11 does not support document.scrollingElement, but you can assume its <html>.
        // Used to handle the top most element that can be scrolled
        var scrollingElement = document.scrollingElement || document.documentElement;
        // Collect all the scrolling boxes, as defined in the spec: https://drafts.csswg.org/cssom-view/#scrolling-box
        var frames = [];
        var documentElementStyle = getComputedStyle(document.documentElement);
        for (var cursor = parentElement(element); cursor !== null; cursor = parentElement(cursor)) {
            // Stop when we reach the viewport
            if (cursor === scrollingElement) {
                frames.push(cursor);
                break;
            }
            var cursorStyle = getComputedStyle(cursor);
            // Skip document.body if it's not the scrollingElement and documentElement isn't independently scrollable
            if (cursor === document.body &&
                isScrollable(cursor, cursorStyle) &&
                !isScrollable(document.documentElement, documentElementStyle)) {
                continue;
            }
            // Now we check if the element is scrollable,
            // this code only runs if the loop haven't already hit the viewport or a custom boundary
            if (isScrollable(cursor, cursorStyle)) {
                frames.push(cursor);
            }
            if (cursorStyle.position === "fixed") {
                break;
            }
        }
        // Support pinch-zooming properly, making sure elements scroll into the visual viewport
        // Browsers that don't support visualViewport
        // will report the layout viewport dimensions on document.documentElement.clientWidth/Height
        // and viewport dimensions on window.innerWidth/Height
        // https://www.quirksmode.org/mobile/viewports2.html
        // https://bokand.github.io/viewport/index.html
        var viewportWidth = window.visualViewport ? window.visualViewport.width : innerWidth;
        var viewportHeight = window.visualViewport ? window.visualViewport.height : innerHeight;
        // Newer browsers supports scroll[X|Y], page[X|Y]Offset is
        var viewportX = window.scrollX || window.pageXOffset;
        var viewportY = window.scrollY || window.pageYOffset;
        var computedStyle = getComputedStyle(element);
        var _a = __read(getElementScrollSnapArea(element, computedStyle), 4), targetTop = _a[0], targetRight = _a[1], targetBottom = _a[2], targetLeft = _a[3];
        var targetHeight = targetBottom - targetTop;
        var targetWidth = targetRight - targetLeft;
        var writingMode = normalizeWritingMode(computedStyle.writingMode ||
            computedStyle.getPropertyValue("-webkit-writing-mode") ||
            computedStyle.getPropertyValue("-ms-writing-mode"));
        var isLTR = computedStyle.direction !== "rtl";
        var _b = __read(toPhysicalAlignment(options, writingMode, isLTR), 2), alignX = _b[0], alignY = _b[1];
        var targetBlock = (function () {
            switch (alignY) {
                case 1 /* CenterAlways */:
                    return targetTop + targetHeight / 2;
                case 2 /* LeftOrTop */:
                case 0 /* ToEdgeIfNeeded */:
                    return targetTop;
                case 3 /* RightOrBottom */:
                    return targetBottom;
            }
        })();
        var targetInline = (function () {
            switch (alignX) {
                case 1 /* CenterAlways */:
                    return targetLeft + targetWidth / 2;
                case 3 /* RightOrBottom */:
                    return targetRight;
                case 2 /* LeftOrTop */:
                case 0 /* ToEdgeIfNeeded */:
                    return targetLeft;
            }
        })();
        var actions = [];
        frames.forEach(function (frame) {
            var _a = frame.getBoundingClientRect(), height = _a.height, width = _a.width, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
            var frameStyle = getComputedStyle(frame);
            var borderLeft = parseInt(frameStyle.borderLeftWidth, 10);
            var borderTop = parseInt(frameStyle.borderTopWidth, 10);
            var borderRight = parseInt(frameStyle.borderRightWidth, 10);
            var borderBottom = parseInt(frameStyle.borderBottomWidth, 10);
            var blockScroll = 0;
            var inlineScroll = 0;
            // The property existance checks for offfset[Width|Height] is because only HTMLElement objects have them,
            // but any Element might pass by here
            // @TODO find out if the "as HTMLElement" overrides can be dropped
            var scrollbarWidth = "offsetWidth" in frame
                ? frame.offsetWidth - frame.clientWidth - borderLeft - borderRight
                : 0;
            var scrollbarHeight = "offsetHeight" in frame
                ? frame.offsetHeight - frame.clientHeight - borderTop - borderBottom
                : 0;
            if (scrollingElement === frame) {
                // Handle viewport logic (document.documentElement or document.body)
                switch (alignY) {
                    case 2 /* LeftOrTop */: {
                        blockScroll = targetBlock;
                        break;
                    }
                    case 3 /* RightOrBottom */: {
                        blockScroll = targetBlock - viewportHeight;
                        break;
                    }
                    case 1 /* CenterAlways */: {
                        blockScroll = targetBlock - viewportHeight / 2;
                        break;
                    }
                    case 0 /* ToEdgeIfNeeded */: {
                        blockScroll = alignNearest(viewportY, viewportY + viewportHeight, viewportHeight, borderTop, borderBottom, viewportY + targetBlock, viewportY + targetBlock + targetHeight, targetHeight);
                        break;
                    }
                }
                switch (alignX) {
                    case 2 /* LeftOrTop */: {
                        inlineScroll = targetInline;
                        break;
                    }
                    case 3 /* RightOrBottom */: {
                        inlineScroll = targetInline - viewportWidth;
                        break;
                    }
                    case 1 /* CenterAlways */: {
                        inlineScroll = targetInline - viewportWidth / 2;
                        break;
                    }
                    case 0 /* ToEdgeIfNeeded */: {
                        inlineScroll = alignNearest(viewportX, viewportX + viewportWidth, viewportWidth, borderLeft, borderRight, viewportX + targetInline, viewportX + targetInline + targetWidth, targetWidth);
                        break;
                    }
                }
                blockScroll += viewportY;
                inlineScroll += viewportX;
            }
            else {
                // Handle each scrolling frame that might exist between the target and the viewport
                switch (alignY) {
                    case 2 /* LeftOrTop */: {
                        blockScroll = targetBlock - top - borderTop;
                        break;
                    }
                    case 3 /* RightOrBottom */: {
                        blockScroll = targetBlock - bottom + borderBottom + scrollbarHeight;
                        break;
                    }
                    case 1 /* CenterAlways */: {
                        blockScroll = targetBlock - (top + height / 2) + scrollbarHeight / 2;
                        break;
                    }
                    case 0 /* ToEdgeIfNeeded */: {
                        blockScroll = alignNearest(top, bottom, height, borderTop, borderBottom + scrollbarHeight, targetBlock, targetBlock + targetHeight, targetHeight);
                        break;
                    }
                }
                switch (alignX) {
                    case 2 /* LeftOrTop */: {
                        inlineScroll = targetInline - left - borderLeft;
                        break;
                    }
                    case 3 /* RightOrBottom */: {
                        inlineScroll = targetInline - right + borderRight + scrollbarWidth;
                        break;
                    }
                    case 1 /* CenterAlways */: {
                        inlineScroll = targetInline - (left + width / 2) + scrollbarWidth / 2;
                        break;
                    }
                    case 0 /* ToEdgeIfNeeded */: {
                        inlineScroll = alignNearest(left, right, width, borderLeft, borderRight + scrollbarWidth, targetInline, targetInline + targetWidth, targetWidth);
                        break;
                    }
                }
                var scrollLeft = frame.scrollLeft, scrollTop = frame.scrollTop;
                // Ensure scroll coordinates are not out of bounds while applying scroll offsets
                blockScroll = clamp(scrollTop + blockScroll, frame.scrollHeight - height + scrollbarHeight);
                inlineScroll = clamp(scrollLeft + inlineScroll, frame.scrollWidth - width + scrollbarWidth);
                // Cache the offset so that parent frames can scroll this into view correctly
                targetBlock += scrollTop - blockScroll;
                targetInline += scrollLeft - inlineScroll;
            }
            actions.push(function () { return elementScroll(frame, __assign(__assign({}, options), { top: blockScroll, left: inlineScroll })); });
        });
        actions.forEach(function (run) { return run(); });
    };
    var elementScrollIntoViewPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        var originalFunc = original.elementScrollIntoView;
        modifyPrototypes(function (prototype) {
            return (prototype.scrollIntoView = function scrollIntoView() {
                var scrollIntoViewOptions = arguments[0];
                if (arguments.length === 1 && isObject(scrollIntoViewOptions)) {
                    return elementScrollIntoView(this, __assign(__assign({}, scrollIntoViewOptions), animationOptions));
                }
                return originalFunc.apply(this, arguments);
            });
        });
    };

    var elementScrollToPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        var originalFunc = original.elementScroll;
        modifyPrototypes(function (prototype) {
            return (prototype.scrollTo = function scrollTo() {
                if (arguments.length === 1) {
                    var scrollToOptions = arguments[0];
                    if (!isObject(scrollToOptions)) {
                        throw new TypeError("Failed to execute 'scrollTo' on 'Element': parameter 1 ('options') is not an object.");
                    }
                    var left = Number(scrollToOptions.left);
                    var top_1 = Number(scrollToOptions.top);
                    return elementScroll(this, __assign(__assign(__assign({}, scrollToOptions), { left: left, top: top_1 }), animationOptions));
                }
                return originalFunc.apply(this, arguments);
            });
        });
    };

    var windowScroll = function (options) {
        var _a, _b;
        var originalBoundFunc = original.windowScroll.bind(window);
        if (options.left === undefined && options.top === undefined) {
            return;
        }
        var startX = window.scrollX || window.pageXOffset;
        var startY = window.scrollY || window.pageYOffset;
        var targetX = nonFinite((_a = options.left) !== null && _a !== void 0 ? _a : startX);
        var targetY = nonFinite((_b = options.top) !== null && _b !== void 0 ? _b : startY);
        if (options.behavior !== "smooth") {
            return originalBoundFunc(targetX, targetY);
        }
        var removeEventListener = function () {
            window.removeEventListener("wheel", cancelScroll);
            window.removeEventListener("touchmove", cancelScroll);
        };
        var context = {
            timeStamp: now(),
            duration: options.duration,
            startX: startX,
            startY: startY,
            targetX: targetX,
            targetY: targetY,
            rafId: 0,
            method: originalBoundFunc,
            timingFunc: options.timingFunc,
            callback: removeEventListener,
        };
        var cancelScroll = function () {
            cancelAnimationFrame(context.rafId);
            removeEventListener();
        };
        window.addEventListener("wheel", cancelScroll, {
            passive: true,
            once: true,
        });
        window.addEventListener("touchmove", cancelScroll, {
            passive: true,
            once: true,
        });
        step(context);
    };
    var windowScrollPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        var originalFunc = original.windowScroll;
        window.scroll = function scroll() {
            if (arguments.length === 1) {
                var scrollOptions = arguments[0];
                if (!isObject(scrollOptions)) {
                    throw new TypeError("Failed to execute 'scroll' on 'Window': parameter 1 ('options') is not an object.");
                }
                return windowScroll(__assign(__assign({}, scrollOptions), animationOptions));
            }
            return originalFunc.apply(this, arguments);
        };
    };

    var windowScrollBy = function (options) {
        var left = nonFinite(options.left || 0) + (window.scrollX || window.pageXOffset);
        var top = nonFinite(options.top || 0) + (window.scrollY || window.pageYOffset);
        if (options.behavior !== "smooth") {
            return original.windowScroll.call(window, left, top);
        }
        return windowScroll(__assign(__assign({}, options), { left: left, top: top }));
    };
    var windowScrollByPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        window.scrollBy = function scrollBy() {
            if (arguments.length === 1) {
                var scrollByOptions = arguments[0];
                if (!isObject(scrollByOptions)) {
                    throw new TypeError("Failed to execute 'scrollBy' on 'Window': parameter 1 ('options') is not an object.");
                }
                return windowScrollBy(__assign(__assign({}, scrollByOptions), animationOptions));
            }
            var left = Number(arguments[0]);
            var top = Number(arguments[1]);
            return windowScrollBy({ left: left, top: top });
        };
    };

    var windowScrollToPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        var originalFunc = original.windowScroll;
        window.scrollTo = function scrollTo() {
            if (arguments.length === 1) {
                var scrollToOptions = arguments[0];
                if (!isObject(scrollToOptions)) {
                    throw new TypeError("Failed to execute 'scrollTo' on 'Window': parameter 1 ('options') is not an object.");
                }
                var left = Number(scrollToOptions.left);
                var top_1 = Number(scrollToOptions.top);
                return windowScroll(__assign(__assign(__assign({}, scrollToOptions), { left: left, top: top_1 }), animationOptions));
            }
            return originalFunc.apply(this, arguments);
        };
    };

    var polyfill = function (options) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        windowScrollPolyfill(options);
        windowScrollToPolyfill(options);
        windowScrollByPolyfill(options);
        elementScrollPolyfill(options);
        elementScrollToPolyfill(options);
        elementScrollByPolyfill(options);
        elementScrollIntoViewPolyfill(options);
    };

    exports.elementScroll = elementScroll;
    exports.elementScrollBy = elementScrollBy;
    exports.elementScrollByPolyfill = elementScrollByPolyfill;
    exports.elementScrollIntoView = elementScrollIntoView;
    exports.elementScrollIntoViewPolyfill = elementScrollIntoViewPolyfill;
    exports.elementScrollPolyfill = elementScrollPolyfill;
    exports.elementScrollTo = elementScroll;
    exports.elementScrollToPolyfill = elementScrollToPolyfill;
    exports.polyfill = polyfill;
    exports.seamless = polyfill;
    exports.windowScroll = windowScroll;
    exports.windowScrollBy = windowScrollBy;
    exports.windowScrollByPolyfill = windowScrollByPolyfill;
    exports.windowScrollPolyfill = windowScrollPolyfill;
    exports.windowScrollTo = windowScroll;
    exports.windowScrollToPolyfill = windowScrollToPolyfill;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


},{}]},{},[1]);
