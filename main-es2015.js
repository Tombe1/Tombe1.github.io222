(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\n<div class=\"favorites\" *ngFor=\"let fav of favoritesLocation\" (click)=\"showFavoriteLocationOnMain(fav)\">\n    <p>\n        <span class=\"CityName\"> {{keyList}}</span> <br/>\n        <span class=\"CurrentWeather\"> {{fav[0].Temperature.Metric.Value}} {{fav[0].Temperature.Metric.Unit}}</span><br/>\n        <span class=\"CurrentWeatherCondition\"> {{fav[0].WeatherText}}</span><br/>\n    </p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div> Herolo Weather Task\n        <span class=\"navigation\">\n            <a routerLink=\"main\">Home</a>\n            <a routerLink=\"favorites\">Favorites</a>\n        </span>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <header>\n        <app-header></app-header>\n    </header>\n    <main>\n        <router-outlet></router-outlet>\n    </main>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container1\">\n  <h2 class=\"city\">Pick City:</h2>\n  <input type=\"text\" ngModel pattern=\"[a-zA-Z ]*\" #input1 placeholder=\"tel aviv\" [(ngModel)]=\"q\"\n    (keyup)=\"searchAutoComplete(input1.value)\">\n  <br>\n</div>\n\n<div class=\"containerA\" *ngIf=\"input1.value == 0\">\n  <h1>Tel Aviv</h1>\n  <div class=\"telAviv\">\n    <div class=\"telAvivForeCasts\" *ngFor=\"let d of dailyForecasts\">\n      <div class=\"telAvivContainer1\">\n        <h3>{{d.Date | date:\"MMMM d, y\"}}</h3>\n      </div>\n      <div class=\"telAvivContainer2\" style=\"background-color:skyblue\">\n        <h2><b>{{d.Date | date:\"EEE\"}}</b></h2>\n        <h3>\n          <p>Daily Tempereture: {{d.Temperature.Minimum.Value}}F and its {{d.Day.IconPhrase}}<br />\n            Nighty Tempereture: {{d.Temperature.Maximum.Value}}F and its {{d.Night.IconPhrase}} <br />\n            <br /> </p>\n        </h3>\n      </div>\n      <div class=\"container\">\n        <p>Source: <span class=\"promo\">{{d.Sources}}</span></p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"currentWeatherAndFiveDaysForeCasts\">\n  <div class=\"containerB\">\n    <div class=\"locationForecasts\" *ngIf=\"input1.value != 0\">\n      <div class=\"current\" *ngFor=\"let c of currentWeather\">\n        <h1>{{q | titlecase }}</h1>\n        <h1>Current Weather Condition: {{c.WeatherText}}</h1>\n        <p> <span class=\"currentWeather\">Current Temperature: {{c.Temperature.Metric.Value}}\n            {{c.Temperature.Metric.Unit}}°</span></p>\n      </div>\n      <div class=\"fiveDaysForecasts\">\n        <div class=\"ForeCasts\" *ngFor=\"let d of dailyForecasts\">\n          <div class=\"dateContainer\">\n            <h3>{{d.Date | date:\"MMMM d, y\"}}</h3>\n          </div>\n          <div class=\"tempContainer2\" style=\"background-color:skyblue\">\n            <h2><b>{{d.Date | date:\"EEE\"}}</b></h2>\n            <h3>\n              <p>Daily Tempereture: {{d.Temperature.Minimum.Value}}F and its {{d.Day.IconPhrase}}<br />\n                Nighty Tempereture: {{d.Temperature.Maximum.Value}}F and its {{d.Night.IconPhrase}} <br />\n                <br /> </p>\n            </h3>\n          </div>\n          <div class=\"container\">\n            <p>Source: <span class=\"promo\">{{d.Sources}}</span></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div>\n      <br /><br />\n      <button class=\"addToFavorites\" *ngIf=\"input1.value != 0\" (click)=\"addFavoriteLocation()\">Add to\n        Favorites</button>\n      <button class=\"removeFromFavorites\" *ngIf=\"input1.value != 0\" (click)=\"removeFromFavorites()\">Remove from\n        Favorites</button>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

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

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");





const routes = [
    { path: "main", component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: "favorites", component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"] },
    { path: "main/:q", component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: "", redirectTo: "main", pathMatch: "full" },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
            _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__["FavoritesComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"],
        ],
        providers: [],
        bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/favorites/favorites.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    border: 5px dotted #bbb; /* Dotted border */\r\n    width: 50%;\r\n    border-radius: 15px; /* Rounded border */\r\n    margin: 10px; /* Center the card */\r\n    max-width: 600px;\r\n    display: inline-block;\r\n    background-color: skyblue;\r\n    overflow: auto;\r\n    text-align: center;\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUIsRUFBRSxrQkFBa0I7SUFDM0MsVUFBVTtJQUNWLG1CQUFtQixFQUFFLG1CQUFtQjtJQUN4QyxZQUFZLEVBQUUsb0JBQW9CO0lBQ2xDLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7O0VBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgYm9yZGVyOiA1cHggZG90dGVkICNiYmI7IC8qIERvdHRlZCBib3JkZXIgKi9cclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAvKiBSb3VuZGVkIGJvcmRlciAqL1xyXG4gICAgbWFyZ2luOiAxMHB4OyAvKiBDZW50ZXIgdGhlIGNhcmQgKi9cclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FavoritesComponent = class FavoritesComponent {
    constructor(weather, router) {
        this.weather = weather;
        this.router = router;
        this.favoritesLocation = new Array();
    }
    ngOnInit() {
        var list = new Array();
        var keyList = new Array();
        var anotherList;
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            if (key.startsWith('favorite')) {
                list.push(value);
                keyList.push(key);
                this.weather.getCurrentWeather(value).subscribe(result => {
                    anotherList = result;
                    this.favoritesLocation.push(anotherList);
                });
            }
        }
    }
    showFavoriteLocationOnMain(favoritesLocation) {
        if (this.favoritesLocation = favoritesLocation) {
            this.router.navigate(["main", { q: favoritesLocation.LocalSource.Name, foo: 'foo' }]);
        }
    }
};
FavoritesComponent.ctorParameters = () => [
    { type: src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.css */ "./src/app/components/favorites/favorites.component.css")).default]
    })
], FavoritesComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section{\r\n    height: 100%;\r\n    margin: 10px;\r\n    padding: 10px;\r\n}\r\n/* section>h3{\r\n    text-align: left;\r\n} */\r\n/* div>span>a{\r\n    text-align: right;\r\n} */\r\n.navigation{\r\n    text-align: end;\r\n}\r\n/* div{\r\n    margin: 10px;\r\n    padding: 10px;\r\n    text-align: center;\r\n} */\r\nspan>a{\r\n    padding: 10px;\r\n    margin: 5px;\r\n    text-align: end;\r\n}\r\na:link, a:visited {\r\n    background-color: purple;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: right;\r\n    -webkit-transition-duration: 0.4s;\r\n    transition-duration: 0.4s;\r\n    text-decoration: none;\r\n   font-size: 16px;\r\n   cursor: pointer;\r\n   display: inline-block;\r\n}\r\na:hover, a:active {\r\n   background-color: rgb(0, 7, 109);\r\n}\r\nbutton{\r\n    background-color: purple;\r\n        border: none;\r\n        color: white;\r\n        padding: 16px 32px;\r\n        text-decoration: none;\r\n        margin: 4px 2px;\r\n        cursor: pointer;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTs7R0FFRztBQUNIOztHQUVHO0FBQ0g7SUFDSSxlQUFlO0FBQ25CO0FBRUE7Ozs7R0FJRztBQUVGO0lBQ0csYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIscUJBQXFCO0dBQ3RCLGVBQWU7R0FDZixlQUFlO0dBQ2YscUJBQXFCO0FBQ3hCO0FBRUE7R0FDRyxnQ0FBZ0M7QUFDbkM7QUFFQTtJQUNJLHdCQUF3QjtRQUNwQixZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGVBQWU7O0FBRXZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4vKiBzZWN0aW9uPmgze1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSAqL1xyXG4vKiBkaXY+c3Bhbj5he1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0gKi9cclxuLm5hdmlnYXRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi8qIGRpdntcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbiBzcGFuPmF7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn0gXHJcblxyXG5hOmxpbmssIGE6dmlzaXRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmE6aG92ZXIsIGE6YWN0aXZlIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDcsIDEwOSk7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/layout/layout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/layout/layout.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section{\r\n    height: 100%;\r\n    display: grid;\r\n    background-color: beige;  \r\n    grid-template-rows: 10% 90%;\r\n    grid-template-columns: 100%;\r\n    background-image: url(\"https://image.shutterstock.com/image-vector/blue-white-light-polygonal-mosaic-260nw-230257930.jpg\");\r\n    background-size: cover;\r\n\r\n}\r\n\r\n\r\nsection>*{\r\n    /* border: solid black 1px; */\r\n    border: none;\r\n\r\n}\r\n\r\n\r\nheader{\r\n    grid-column: span 1;\r\n    text-align: center;\r\n}\r\n\r\n\r\n/* header>span{\r\n    text-align:right;\r\n} */\r\n\r\n\r\nmain{\r\n    overflow: auto;\r\n    height: 100%;\r\n    grid-column: span 1;\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDBIQUEwSDtJQUMxSCxzQkFBc0I7O0FBRTFCOzs7QUFHQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZOztBQUVoQjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7QUFDQTs7R0FFRzs7O0FBRUg7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7ICBcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDkwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2Uuc2h1dHRlcnN0b2NrLmNvbS9pbWFnZS12ZWN0b3IvYmx1ZS13aGl0ZS1saWdodC1wb2x5Z29uYWwtbW9zYWljLTI2MG53LTIzMDI1NzkzMC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxufVxyXG5cclxuXHJcbnNlY3Rpb24+KntcclxuICAgIC8qIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxufVxyXG5cclxuaGVhZGVye1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vKiBoZWFkZXI+c3BhbntcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn0gKi9cclxuXHJcbm1haW57XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/components/layout/layout.component.css")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fiveDaysForecasts{\r\n  display: table;\r\n  width: 100%;\r\n}\r\n.containerB{\r\n  height:  100%;\r\n}\r\n.containerA{\r\n  height:  100%;\r\n  display: block;\r\n}\r\nh1{\r\n  font-size: 26pt;\r\n  color: darkblue ;\r\n  /* text-underline-position: below; */\r\n  margin: 4px 2px;\r\n  padding: 3px;\r\n}\r\n.currentWeather{\r\n  font-size: 22pt;\r\n  color: crimson;\r\n  margin: 4px 2px;\r\n  padding: 3px;\r\n}\r\n.ForeCasts {\r\n  \r\n    border: 5px dotted #bbb; /* Dotted border */\r\n    width: 15%;\r\n    height: 75px;\r\n    border-radius: 15px; /* Rounded border */\r\n    margin: 0 auto; /* Center the card */\r\n    max-width: 600px;\r\n    display: table-cell;\r\n  }\r\n.telAviv{\r\n    display: table;\r\n    width: 100%;\r\n  }\r\n.telAvivForeCasts{\r\n    border: 5px dotted #bbb; /* Dotted border */\r\n    width: 15%;\r\n    height: 75px;\r\n    border-radius: 15px; /* Rounded border */\r\n    margin: 0 auto; /* Center the card */\r\n    max-width: 600px;\r\n    display: table-cell;\r\n  }\r\n.container1{\r\n    text-align: center;\r\n  }\r\n.container {\r\n    padding: 2px 16px;\r\n    background-color: darkcyan;\r\n    border-radius: 15px;\r\n  }\r\n.promo {\r\n    background: #ccc;\r\n    padding: 3px;\r\n  }\r\n.addToFavorites , .removeFromFavorites{\r\n    background-color: purple;\r\n        border: none;\r\n        color: white;\r\n        padding: 16px 32px;\r\n        text-decoration: none;\r\n        margin: 4px 2px;\r\n        cursor: pointer;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBOztJQUVJLHVCQUF1QixFQUFFLGtCQUFrQjtJQUMzQyxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQixFQUFFLG1CQUFtQjtJQUN4QyxjQUFjLEVBQUUsb0JBQW9CO0lBQ3BDLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0VBQ2I7QUFFQTtJQUNFLHVCQUF1QixFQUFFLGtCQUFrQjtJQUMzQyxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQixFQUFFLG1CQUFtQjtJQUN4QyxjQUFjLEVBQUUsb0JBQW9CO0lBQ3BDLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFFQTtJQUNFLHdCQUF3QjtRQUNwQixZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGVBQWU7O0FBRXZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXZlRGF5c0ZvcmVjYXN0c3tcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFpbmVyQntcclxuICBoZWlnaHQ6ICAxMDAlO1xyXG59XHJcbi5jb250YWluZXJBe1xyXG4gIGhlaWdodDogIDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtc2l6ZTogMjZwdDtcclxuICBjb2xvcjogZGFya2JsdWUgO1xyXG4gIC8qIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiBiZWxvdzsgKi9cclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4uY3VycmVudFdlYXRoZXJ7XHJcbiAgZm9udC1zaXplOiAyMnB0O1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG4gIG1hcmdpbjogNHB4IDJweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5Gb3JlQ2FzdHMge1xyXG4gIFxyXG4gICAgYm9yZGVyOiA1cHggZG90dGVkICNiYmI7IC8qIERvdHRlZCBib3JkZXIgKi9cclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAvKiBSb3VuZGVkIGJvcmRlciAqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgY2FyZCAqL1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZWxBdml2e1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRlbEF2aXZGb3JlQ2FzdHN7XHJcbiAgICBib3JkZXI6IDVweCBkb3R0ZWQgI2JiYjsgLyogRG90dGVkIGJvcmRlciAqL1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IC8qIFJvdW5kZWQgYm9yZGVyICovXHJcbiAgICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyIHRoZSBjYXJkICovXHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcjF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9tbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gIH1cclxuXHJcbiAgLmFkZFRvRmF2b3JpdGVzICwgLnJlbW92ZUZyb21GYXZvcml0ZXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/weather.service */ "./src/app/services/weather.service.ts");



let MainComponent = class MainComponent {
    constructor(weather) {
        this.weather = weather;
        this.currentWeather = new Array();
        this.dailyForecasts = new Array();
        this.favoritesLocation = new Array();
    }
    ngOnInit() {
        this.weather.getFiveDaysDailyForecast('215854').subscribe(result => {
            this.dailyForecasts = result.DailyForecasts;
        });
    }
    addFavoriteLocation() {
        //this.locationKey -> save to localstorage like that:
        //Example: location Tel Aviv - key=favoritetelaviv; value=215854
        localStorage.setItem('favorite' + this.locationValue, this.locationKey);
        alert(this.locationValue + " Added to your Favorite Locations!");
    }
    removeFromFavorites() {
        localStorage.removeItem('favorite' + this.locationValue);
        alert(this.locationValue + " Has been removed from your Favorite Locations!");
    }
    searchAutoComplete(q) {
        this.q = q;
        this.weather.getLocationAutoComplete(q).subscribe(result => {
            this.locationKey = result[0].Key;
            this.locationValue = result[0].LocalizedName;
            this.weather.getFiveDaysDailyForecast(this.locationKey).subscribe(res => {
                this.dailyForecasts = res.DailyForecasts;
            });
            this.weather.getCurrentWeather(this.locationKey).subscribe(currentWeatherResult => {
                this.currentWeather = currentWeatherResult;
            });
        });
    }
};
MainComponent.ctorParameters = () => [
    { type: src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let WeatherService = class WeatherService {
    constructor(client, rout) {
        this.client = client;
        this.apikey = "1kM7eHDqpmOl7ob8y9WAq3XQL0S0ysDI";
    }
    getLocationAutoComplete(q) {
        return this.client.get("https://tombe1.github.io/http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + this.apikey + "&q=" + q);
    }
    getCurrentWeather(locationKey) {
        return this.client.get("https://tombe1.github.io/http://dataservice.accuweather.com/currentconditions/v1/" + locationKey + "?apikey=" + this.apikey);
    }
    getFiveDaysDailyForecast(locationKey) {
        return this.client.get("https://tombe1.github.io/http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKey + "?apikey=" + this.apikey);
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WeatherService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Tom\TomAngularWorkSpace\WeatherApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map