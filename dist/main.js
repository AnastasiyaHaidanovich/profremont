/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/swiper */ \"./src/modules/swiper.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.modal)();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__.menu)();\r\n(0,_modules_swiper__WEBPACK_IMPORTED_MODULE_0__.swiper)();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.timer)('12 january 2022');\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n    let start = performance.now();\r\n  \r\n    requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) {\r\n          timeFraction = 1;\r\n        }\r\n  \r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n  \r\n      draw(progress); // отрисовать её\r\n  \r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n  \r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\r\n    // const menu = document.getElementById(\"navbar-collapse\");\r\n    // const closeBtn = menu.querySelector(\".close-btn\");\r\n    // const toServiceBtn = document.querySelector(\".service-btn>img\");\r\n    // const body = document.querySelector(\"body\");\r\n\r\n    // body.addEventListener('click', (e) => {\r\n    //     if (e.target.closest(\".navbar-toggle.collapsed\")){\r\n    //         menu.style.display = \"block\";\r\n    //     } else if (e.target === toServiceBtn){\r\n            \r\n    //         e.preventDefault();\r\n            \r\n    //         const blockID = \"#service-block\";\r\n                            \r\n    //         document.querySelector(\"\" + blockID).scrollIntoView({\r\n    //             behavior: \"smooth\",\r\n    //             block: \"start\"\r\n    //             });\r\n    //     } else if (e.target == closeBtn) {\r\n    //         menu.classList.toggle(\"active-menu\");\r\n    //     } else if (e.target.tagName == \"A\" && menu.classList.contains(\"active-menu\")){\r\n    //         e.preventDefault();\r\n                \r\n    //         const blockID = e.target.getAttribute('href');\r\n                            \r\n    //         document.querySelector(\"\" + blockID).scrollIntoView({\r\n    //             behavior: \"smooth\",\r\n    //             block: \"start\"\r\n    //             });\r\n    //         menu.classList.toggle(\"active-menu\");\r\n    //     } else if (menu.classList.contains(\"active-menu\") && !e.target.closest(\".active-menu\")){\r\n    //         menu.classList.toggle(\"active-menu\");\r\n    //     }\r\n    // });    \r\n};\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n    const overlay = document.querySelector(\".overlay\");\r\n    const body = document.querySelector(\"body\");\r\n    const headerModal = document.querySelector(\".header-modal\");\r\n    const servicesModal = document.querySelector(\".services-modal\");\r\n\r\n    const smoothOpen = (modal) => {\r\n        modal.style.display = \"block\";\r\n        modal.style.opacity = 0;\r\n        overlay.style.display = \"block\";\r\n        overlay.style.opacity = 0;\r\n\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 1000,\r\n            timing(timeFraction) {\r\n            return timeFraction;\r\n            },\r\n            draw(progress) {\r\n            modal.style.opacity = progress;\r\n            overlay.style.opacity = progress;\r\n            }\r\n        });\r\n    };\r\n\r\n    const smoothClose = (modal) => {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 1000,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                modal.style.opacity = 1 - progress;\r\n                overlay.style.opacity = 1 - progress;\r\n            }\r\n        });\r\n        setTimeout(()=> {\r\n            modal.style.display = \"none\";\r\n            overlay.style.display = \"none\";\r\n        }, 1000);\r\n    };\r\n\r\n    body.addEventListener('click', (e) => {\r\n        if(e.target.closest(\".btn-warning.btn-block\") || e.target.closest(\".btn-lg\") || e.target.closest(\".open-modal\")){\r\n            e.preventDefault();\r\n            \r\n            if(window.innerWidth > 768){\r\n                smoothOpen(headerModal);\r\n            } else {\r\n                headerModal.style.display = \"block\";\r\n                overlay.style.display = \"block\";\r\n            }\r\n        }\r\n        if(e.target.closest(\".btn-sm\")){\r\n            e.preventDefault();\r\n            \r\n            if(window.innerWidth > 768){\r\n                smoothOpen(servicesModal);\r\n            } else {\r\n                servicesModal.style.display = \"block\";\r\n                overlay.style.display = \"block\";\r\n            }\r\n        }\r\n        if(e.target.classList.contains(\"header-modal__close\") || e.target.classList.contains(\"services-modal__close\")){\r\n            if (window.innerWidth > 768){\r\n                smoothClose(e.target.classList.contains(\"header-modal__close\") ? headerModal : servicesModal);\r\n            } else {\r\n                (e.target.classList.contains(\"header-modal__close\") ? headerModal : servicesModal).style.display = \"none\";\r\n                overlay.style.display = \"none\";\r\n            }\r\n        }        \r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/swiper.js":
/*!*******************************!*\
  !*** ./src/modules/swiper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"swiper\": () => (/* binding */ swiper)\n/* harmony export */ });\nconst swiper = () => {\r\n//    const sliderBlock = document.querySelector(sliderClass);\r\n//    const slides = document.querySelectorAll(slideClass);\r\n//    const dotsList = document.querySelector(dotClass);\r\n//    let dots = [];\r\n   \r\n//    if (sliderBlock && slides && dotsList){\r\n\r\n//    let currentSlide = 0;\r\n//    let interval;\r\n//    let timeInterval = 2000;\r\n\r\n   \r\n//    for (let i=0; i < slides.length; i++){\r\n//        let dot = document.createElement(\"li\");\r\n//        dot.classList.add(\"dot\");\r\n//        if (i === 0){\r\n//            dot.classList.add(dotActiveClass);\r\n//        }\r\n//        dots.push(dot);\r\n//        dotsList.appendChild(dot);\r\n//    }\r\n\r\n//    const prevSlide = (elems, index, strClass) => {\r\n//        elems[index].classList.remove(strClass);\r\n//    };\r\n\r\n//    const nextSlide = (elems, index, strClass) => {\r\n//        elems[index].classList.add(strClass);\r\n//    };\r\n\r\n//    const autoSlide = () => {\r\n//        prevSlide(slides, currentSlide, slideActiveClass);\r\n//        prevSlide(dots, currentSlide, dotActiveClass);\r\n\r\n//        currentSlide ++;\r\n\r\n//        if(currentSlide >= slides.length){\r\n//            currentSlide = 0;\r\n//        }\r\n//        nextSlide(slides, currentSlide, slideActiveClass);\r\n//        nextSlide(dots, currentSlide, dotActiveClass);\r\n//    };\r\n\r\n//    const startSlide = (timer = 1500) => {\r\n//        interval = setInterval(autoSlide, timer);\r\n//    };\r\n\r\n//    const stopSlide = () => {\r\n//        clearInterval(interval);\r\n//    };\r\n\r\n//    sliderBlock.addEventListener('click', (e) => {\r\n//        e.preventDefault();\r\n\r\n//        if (!e.target.matches(\".dot, .portfolio-btn\")){\r\n//            return;\r\n//        }\r\n\r\n//        prevSlide(slides, currentSlide, slideActiveClass);\r\n//        prevSlide(dots, currentSlide, dotActiveClass);\r\n\r\n//        if (e.target.matches(\"#arrow-right\")) {\r\n//            currentSlide ++;\r\n//        } else if (e.target.matches(\"#arrow-left\")) {\r\n//            currentSlide --;\r\n//        } else if (e.target.classList.contains(\"dot\")) {\r\n//            dots.forEach((dot, index) => {\r\n//                if (e.target === dot){\r\n//                    currentSlide = index;\r\n//                }\r\n//            });\r\n//        }\r\n\r\n//        if (currentSlide >= slides.length){\r\n//            currentSlide = 0;\r\n//        }\r\n\r\n//        if (currentSlide < 0){\r\n//            currentSlide = slides.length-1;\r\n//        }\r\n\r\n//        nextSlide(slides, currentSlide, slideActiveClass);\r\n//        nextSlide(dots, currentSlide, dotActiveClass);\r\n//    });\r\n\r\n//    sliderBlock.addEventListener('mouseenter', (e) => {\r\n//        if (e.target.matches(\".dot, .portfolio-btn\")){\r\n//            stopSlide();\r\n//        }\r\n//    }, true);\r\n\r\n//    sliderBlock.addEventListener('mouseleave', (e) => {\r\n//        if (e.target.matches(\".dot, .portfolio-btn\")){\r\n//            startSlide(timeInterval);\r\n//        }\r\n//    }, true);\r\n\r\n//    startSlide(timeInterval);\r\n//    // console.log();\r\n//    // portfolio-item-active\r\n//    // portfolio-btn\r\n//    // portfolio-dots\r\n//    } else {return;}\r\n };\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/swiper.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.querySelector(\".count_1>span\");\r\n    const timerHours = document.querySelector(\".count_2>span\");\r\n    const timerMinutes = document.querySelector(\".count_3>span\");\r\n    const timerSeconds = document.querySelector(\".count_4>span\");\r\n    let saleLabel = document.querySelector(\".countdown-text\");\r\n\r\n    const getTimeRemain = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemain = (dateStop - dateNow)/1000;\r\n    \r\n        let hours = Math.floor((timeRemain/60/60)%24);\r\n        let minutes = Math.floor((timeRemain/60)%60);\r\n        let seconds = Math.floor(timeRemain%60);\r\n        let days = Math.floor(timeRemain/60/60/24);\r\n        \r\n        return {timeRemain, hours, minutes, seconds, days};\r\n        \r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemain();\r\n        if(getTime.hours < 10){\r\n            getTime.hours = \"0\" + getTime.hours;\r\n        } \r\n         if(getTime.minutes < 10){\r\n            getTime.minutes = \"0\" + getTime.minutes;\r\n        } \r\n         if(getTime.seconds < 10){\r\n            getTime.seconds = \"0\" + getTime.seconds;\r\n        } \r\n         if(getTime.days < 10){\r\n            getTime.days = \"0\" + getTime.days;\r\n        }\r\n        \r\n        timerDays.textContent = getTime.days;\r\n        timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds;\r\n\r\n        // if (getTime.timeRemain > 0){\r\n        //     setTimeout(updateClock, 1000);\r\n        // }\r\n    };\r\n    \r\n    const startTimer = () => {\r\n        let getTime = getTimeRemain();\r\n        if (getTime.timeRemain > 0){\r\n            setInterval(updateClock, 1000);\r\n        } else {\r\n            timerDays.textContent = \"00\";\r\n            timerHours.textContent = \"00\";\r\n            timerMinutes.textContent = \"00\";\r\n            timerSeconds.textContent = \"00\";\r\n\r\n            let newStr = \"Акция закончилась!\";\r\n            saleLabel.innerHTML = newStr + saleLabel.innerHTML.substring(24);\r\n        }\r\n    };\r\n    startTimer();\r\n};\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;