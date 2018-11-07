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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/*! exports provided: soma, subtracao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtracao\", function() { return subtracao; });\nfunction soma(a, b) {\n  return a + b;\n}\nfunction subtracao(a, b) {\n  return a - b;\n}\n\n//# sourceURL=webpack:///./functions.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./functions.js\");\n/* harmony import */ var _multiplicacao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiplicacao */ \"./multiplicacao.js\");\n/* harmony import */ var _misto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misto */ \"./misto.js\");\n/* harmony import */ var _varios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./varios */ \"./varios.js\");\n//export nomeado\n //export default\n\n //export misto\n\n //export multiplos\n\n\nconsole.log(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(7, 2));\nconsole.log(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"subtracao\"])(7, 2));\nconsole.log(Object(_multiplicacao__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(7, 2));\nconsole.log(Object(_misto__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(7, 2));\nconsole.log(Object(_misto__WEBPACK_IMPORTED_MODULE_2__[\"resto\"])(9));\nconsole.log(_varios__WEBPACK_IMPORTED_MODULE_3__[\"teste1\"]('Hello World'));\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./misto.js":
/*!******************!*\
  !*** ./misto.js ***!
  \******************/
/*! exports provided: default, resto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return divisao; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resto\", function() { return resto; });\nfunction divisao(a, b) {\n  return a / b;\n}\nfunction resto(a) {\n  return a % 2;\n}\n\n//# sourceURL=webpack:///./misto.js?");

/***/ }),

/***/ "./multiplicacao.js":
/*!**************************!*\
  !*** ./multiplicacao.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return multiplicacao; });\nfunction multiplicacao(a, b) {\n  return a * b;\n}\n\n//# sourceURL=webpack:///./multiplicacao.js?");

/***/ }),

/***/ "./varios.js":
/*!*******************!*\
  !*** ./varios.js ***!
  \*******************/
/*! exports provided: teste1, teste2, teste3, teste4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teste1\", function() { return teste1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teste2\", function() { return teste2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teste3\", function() { return teste3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teste4\", function() { return teste4; });\nfunction teste1(a) {\n  return a;\n}\nfunction teste2(a) {\n  return a;\n}\nfunction teste3(a) {\n  return a;\n}\nfunction teste4(a) {\n  return a;\n}\n\n//# sourceURL=webpack:///./varios.js?");

/***/ })

/******/ });