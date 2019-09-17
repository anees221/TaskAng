(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"features\">Features</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"pricing\">Pricing</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"posts\">Posts</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"login\">Login</a>\r\n            </li>\r\n\r\n\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<!-- <---here new code starts--->\r\n\r\n<div class=\"jumbotron\">\r\n\r\n    <h1 class=\"display-4\" appHighlighter=\"green\" *appMyNgIf>Hello, world!</h1>\r\n    <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\r\n    <hr class=\"my-4\">\r\n    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <router-outlet></router-outlet>\r\n\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <app-sidebar></app-sidebar>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n\r\n            <!-- Footer -->\r\n            <footer class=\"page-footer font-small blue\">\r\n\r\n                <!-- Copyright -->\r\n                <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\r\n                    <a href=\"https://mdbootstrap.com/education/bootstrap/\"> MDBootstrap.com</a>\r\n                </div>\r\n                <!-- Copyright -->\r\n\r\n            </footer>\r\n            <!-- Footer -->\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WebAngular7';
        this.color = 'gold';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _fetchdata_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fetchdata.service */ "./src/app/fetchdata.service.ts");
/* harmony import */ var _highlighter_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./highlighter.directive */ "./src/app/highlighter.directive.ts");
/* harmony import */ var _my_ng_if_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./my-ng-if.directive */ "./src/app/my-ng-if.directive.ts");














var routes = [
    {
        path: "features",
        component: _features_features_component__WEBPACK_IMPORTED_MODULE_5__["FeaturesComponent"]
    },
    {
        path: "pricing",
        component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_6__["PricingComponent"]
    },
    {
        path: "posts",
        component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"]
    },
    {
        path: "posts/:id",
        component: _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"]
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _features_features_component__WEBPACK_IMPORTED_MODULE_5__["FeaturesComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_6__["PricingComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _highlighter_directive__WEBPACK_IMPORTED_MODULE_12__["HighlighterDirective"],
                _my_ng_if_directive__WEBPACK_IMPORTED_MODULE_13__["MyNgIfDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true }),
            ],
            providers: [_fetchdata_service__WEBPACK_IMPORTED_MODULE_11__["FetchdataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/features/features.component.css":
/*!*************************************************!*\
  !*** ./src/app/features/features.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/features/features.component.html":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"accordion\" id=\"accordionExample\">\n    <div class=\"card\">\n        <div class=\"card-header\" id=\"headingOne\">\n            <h2 class=\"mb-0\">\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n              Collapsible Group Item #1\n            </button>\n            </h2>\n        </div>\n\n        <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n                raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\" id=\"headingTwo\">\n            <h2 class=\"mb-0\">\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n              Collapsible Group Item #2\n            </button>\n            </h2>\n        </div>\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n                raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\" id=\"headingThree\">\n            <h2 class=\"mb-0\">\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n              Collapsible Group Item #3\n            </button>\n            </h2>\n        </div>\n        <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n                raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/features/features.component.ts":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.css */ "./src/app/features/features.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/fetchdata.service.ts":
/*!**************************************!*\
  !*** ./src/app/fetchdata.service.ts ***!
  \**************************************/
/*! exports provided: FetchdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchdataService", function() { return FetchdataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FetchdataService = /** @class */ (function () {
    function FetchdataService() {
        var _this = this;
        this.data = [];
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.data.push(data); })
            .catch(function (err) { return console.log(err); });
        //     this.data=[
        //       {
        //       id:1,
        //       title:'first id',
        //       body:'content for first body title',
        //       },
        //       {
        //         id:2,
        //         title:'2nd id',
        //         body:'content for 2nd body title',
        //         }
        //  ];
    }
    FetchdataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FetchdataService);
    return FetchdataService;
}());



/***/ }),

/***/ "./src/app/highlighter.directive.ts":
/*!******************************************!*\
  !*** ./src/app/highlighter.directive.ts ***!
  \******************************************/
/*! exports provided: HighlighterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlighterDirective", function() { return HighlighterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlighterDirective = /** @class */ (function () {
    function HighlighterDirective(el) {
        this.el = el;
    }
    HighlighterDirective.prototype.onMouseEnter = function () {
        this.el.nativeElement.style.backgroundColor = 'gold';
        this.el.nativeElement.style.color = "#fff";
    };
    HighlighterDirective.prototype.onMouseLeave = function () {
        this.el.nativeElement.style.backgroundColor = this.appHighlighter;
        this.el.nativeElement.style.color = "#fff";
    };
    HighlighterDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.backgroundColor = this.appHighlighter;
        this.el.nativeElement.style.color = "#fff";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HighlighterDirective.prototype, "appHighlighter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousemove'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HighlighterDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HighlighterDirective.prototype, "onMouseLeave", null);
    HighlighterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHighlighter]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HighlighterDirective);
    return HighlighterDirective;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n\r\n\r\n/*\r\n * General styles\r\n */\r\n\r\n\r\nbody,\r\nhtml {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n\r\n\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n}\r\n\r\n\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n}\r\n\r\n\r\n/*\r\n * Card component\r\n */\r\n\r\n\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n/*\r\n * Form styles\r\n */\r\n\r\n\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n}\r\n\r\n\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n}\r\n\r\n\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgb(104, 145, 162);\r\n}\r\n\r\n\r\n.btn.btn-signin {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n}\r\n\r\n\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n}\r\n\r\n\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n}\r\n\r\n\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus {\r\n    color: rgb(12, 97, 33);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7O0FBR0g7O0dBRUc7OztBQUVIOztJQUVJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsdUVBQXVFO0NBQzFFOzs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7OztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHNCQUFrQjtRQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25COzs7QUFHRDs7R0FFRzs7O0FBRUg7SUFDSSwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUdqQyxtQkFBbUI7SUFHbkIsMkNBQTJDO0NBQzlDOzs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGVBQWU7SUFHZixtQkFBbUI7Q0FDdEI7OztBQUdEOztHQUVHOzs7QUFFSDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7OztBQUVEO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFHcEIsdUJBQXVCO0NBQzFCOzs7QUFFRDs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjs7O0FBRUQ7Ozs7SUFJSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsbUJBQW1CO0lBR25CLHVCQUF1QjtDQUMxQjs7O0FBRUQ7SUFDSSxpQ0FBaUM7SUFDakMsV0FBVztJQUVYLDRFQUE0RTtDQUMvRTs7O0FBRUQ7SUFDSSwrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLDRFQUE0RTtJQUM1RSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBR2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFJYix1QkFBdUI7Q0FDMUI7OztBQUVEOzs7SUFHSSxrQ0FBa0M7Q0FDckM7OztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCOzs7QUFFRDs7O0lBR0ksdUJBQXVCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFNwZWNpZmljIHN0eWxlcyBvZiBzaWduaW4gY29tcG9uZW50XHJcbiAqL1xyXG5cclxuXHJcbi8qXHJcbiAqIEdlbmVyYWwgc3R5bGVzXHJcbiAqL1xyXG5cclxuYm9keSxcclxuaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigxMDQsIDE0NSwgMTYyKSwgcmdiKDEyLCA5NywgMzMpKTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmc6IDQwcHggNDBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuXHJcbi8qXHJcbiAqIENhcmQgY29tcG9uZW50XHJcbiAqL1xyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICAgIC8qIGp1c3QgaW4gY2FzZSB0aGVyZSBubyBjb250ZW50Ki9cclxuICAgIHBhZGRpbmc6IDIwcHggMjVweCAzMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAvKiBzaGFkb3dzIGFuZCByb3VuZGVkIGJvcmRlcnMgKi9cclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWctY2FyZCB7XHJcbiAgICB3aWR0aDogOTZweDtcclxuICAgIGhlaWdodDogOTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gKiBGb3JtIHN0eWxlc1xyXG4gKi9cclxuXHJcbi5wcm9maWxlLW5hbWUtY2FyZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5yZWF1dGgtZW1haWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gI2lucHV0RW1haWwsXHJcbi5mb3JtLXNpZ25pbiAjaW5wdXRQYXNzd29yZCB7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9ZW1haWxdLFxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1wYXNzd29yZF0sXHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXRleHRdLFxyXG4uZm9ybS1zaWduaW4gYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSksIDAgMCA4cHggcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSksIDAgMCA4cHggcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1zaWduaW4ge1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ5MGZlOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHJnYigxMDQsIDE0NSwgMTYyKSwgcmdiKDEyLCA5NywgMzMpKTsqL1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcclxufVxyXG5cclxuLmJ0bi5idG4tc2lnbmluOmhvdmVyLFxyXG4uYnRuLmJ0bi1zaWduaW46YWN0aXZlLFxyXG4uYnRuLmJ0bi1zaWduaW46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCA5NywgMzMpO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkIHtcclxuICAgIGNvbG9yOiByZ2IoMTA0LCAxNDUsIDE2Mik7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXIsXHJcbi5mb3Jnb3QtcGFzc3dvcmQ6YWN0aXZlLFxyXG4uZm9yZ290LXBhc3N3b3JkOmZvY3VzIHtcclxuICAgIGNvbG9yOiByZ2IoMTIsIDk3LCAzMyk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card card-container\">\n        <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n        <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n        <p id=\"profile-name\" class=\"profile-name-card\"></p>\n        <form class=\"form-signin\">\n            <span id=\"reauth-email\" class=\"reauth-email\"></span>\n            <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n            <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n            <div id=\"remember\" class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\" value=\"remember-me\"> Remember me\n              </label>\n            </div>\n            <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\n        </form>\n        <!-- /form -->\n        <a href=\"#\" class=\"forgot-password\">\n          Forgot the password?\n      </a>\n    </div>\n    <!-- /card-container -->\n</div>\n<!-- /container -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-ng-if.directive.ts":
/*!***************************************!*\
  !*** ./src/app/my-ng-if.directive.ts ***!
  \***************************************/
/*! exports provided: MyNgIfDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNgIfDirective", function() { return MyNgIfDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyNgIfDirective = /** @class */ (function () {
    function MyNgIfDirective(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
    }
    MyNgIfDirective.prototype.ngOnInit = function () {
        var isBool = false;
        if (isBool) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainerRef.clear();
        }
    };
    MyNgIfDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appMyNgIf]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], MyNgIfDirective);
    return MyNgIfDirective;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-post\">\n    <h2 class=\"blog-post-title\">{{post.title}}</h2>\n    <p>{{post.body}}</p>\n\n</div>"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PostComponent = /** @class */ (function () {
    function PostComponent(route) {
        var _this = this;
        this.route = route;
        this.id = 0;
        this.post = {};
        this.route.params.subscribe(function (res) { return _this.id = res.id; });
        fetch("http://jsonplaceholder.typicode.com/posts/" + this.id)
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.post = data; })
            .catch(function (err) { return console.log(err); });
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable selector-list-comma-newline-after */\r\n\r\n.blog-header {\r\n    line-height: 1;\r\n    border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n.blog-header-logo {\r\n    font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\r\n    font-size: 2.25rem;\r\n}\r\n\r\n.blog-header-logo:hover {\r\n    text-decoration: none;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\r\n}\r\n\r\n.display-4 {\r\n    font-size: 2.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .display-4 {\r\n        font-size: 3rem;\r\n    }\r\n}\r\n\r\n.nav-scroller {\r\n    position: relative;\r\n    z-index: 2;\r\n    height: 2.75rem;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.nav-scroller .nav {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    padding-bottom: 1rem;\r\n    margin-top: -1px;\r\n    overflow-x: auto;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.nav-scroller .nav-link {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    font-size: .875rem;\r\n}\r\n\r\n.card-img-right {\r\n    height: 100%;\r\n    border-radius: 0 3px 3px 0;\r\n}\r\n\r\n.flex-auto {\r\n    flex: 0 0 auto;\r\n}\r\n\r\n.h-250 {\r\n    height: 250px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .h-md-250 {\r\n        height: 250px;\r\n    }\r\n}\r\n\r\n.border-top {\r\n    border-top: 1px solid #e5e5e5;\r\n}\r\n\r\n.border-bottom {\r\n    border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n.box-shadow {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*\r\n   * Blog name and description\r\n   */\r\n\r\n.blog-title {\r\n    margin-bottom: 0;\r\n    font-size: 2rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.blog-description {\r\n    font-size: 1.1rem;\r\n    color: #999;\r\n}\r\n\r\n@media (min-width: 40em) {\r\n    .blog-title {\r\n        font-size: 3.5rem;\r\n    }\r\n}\r\n\r\n/* Pagination */\r\n\r\n.blog-pagination {\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n.blog-pagination>.btn {\r\n    border-radius: 2rem;\r\n}\r\n\r\n/*\r\n   * Blog posts\r\n   */\r\n\r\n.blog-post {\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n.blog-post-title {\r\n    margin-bottom: .25rem;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.blog-post-meta {\r\n    margin-bottom: 1.25rem;\r\n    color: #999;\r\n}\r\n\r\n/*\r\n   * Footer\r\n   */\r\n\r\n.blog-footer {\r\n    padding: 2.5rem 0;\r\n    color: #999;\r\n    text-align: center;\r\n    background-color: #f9f9f9;\r\n    border-top: .05rem solid #e5e5e5;\r\n}\r\n\r\n.blog-footer p:last-child {\r\n    margin-bottom: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7O0FBRXpEO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLG1FQUFtRTtJQUNuRSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7Ozs7OztJQU1JLG1FQUFtRTtDQUN0RTs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJO1FBQ0ksZ0JBQWdCO0tBQ25CO0NBQ0o7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFHSSxjQUFjO0lBRWQsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0NBQWtDO0NBQ3JDOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0NBQzlCOztBQUVEO0lBR0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSTtRQUNJLGNBQWM7S0FDakI7Q0FDSjs7QUFFRDtJQUNJLDhCQUE4QjtDQUNqQzs7QUFFRDtJQUNJLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLCtDQUErQztDQUNsRDs7QUFHRDs7S0FFSzs7QUFFTDtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJO1FBQ0ksa0JBQWtCO0tBQ3JCO0NBQ0o7O0FBR0QsZ0JBQWdCOztBQUVoQjtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFHRDs7S0FFSzs7QUFFTDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtDQUNmOztBQUdEOztLQUVLOztBQUVMO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1saXN0LWNvbW1hLW5ld2xpbmUtYWZ0ZXIgKi9cclxuXHJcbi5ibG9nLWhlYWRlciB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xyXG59XHJcblxyXG4uYmxvZy1oZWFkZXItbG9nbyB7XHJcbiAgICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG59XHJcblxyXG4uYmxvZy1oZWFkZXItbG9nbzpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxufVxyXG5cclxuLmRpc3BsYXktNCB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGlzcGxheS00IHtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXYtc2Nyb2xsZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGhlaWdodDogMi43NXJlbTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hdi1zY3JvbGxlciAubmF2IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5cclxuLm5hdi1zY3JvbGxlciAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZy10b3A6IC43NXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IC44NzVyZW07XHJcbn1cclxuXHJcbi5jYXJkLWltZy1yaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxufVxyXG5cclxuLmZsZXgtYXV0byB7XHJcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbn1cclxuXHJcbi5oLTI1MCB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5oLW1kLTI1MCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJvcmRlci10b3Age1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xyXG59XHJcblxyXG4uYm94LXNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcblxyXG5cclxuLypcclxuICAgKiBCbG9nIG5hbWUgYW5kIGRlc2NyaXB0aW9uXHJcbiAgICovXHJcblxyXG4uYmxvZy10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmJsb2ctZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcclxuICAgIC5ibG9nLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIFBhZ2luYXRpb24gKi9cclxuXHJcbi5ibG9nLXBhZ2luYXRpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxufVxyXG5cclxuLmJsb2ctcGFnaW5hdGlvbj4uYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gICAqIEJsb2cgcG9zdHNcclxuICAgKi9cclxuXHJcbi5ibG9nLXBvc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxufVxyXG5cclxuLmJsb2ctcG9zdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG5cclxuLmJsb2ctcG9zdC1tZXRhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuXHJcbi8qXHJcbiAgICogRm9vdGVyXHJcbiAgICovXHJcblxyXG4uYmxvZy1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMi41cmVtIDA7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBib3JkZXItdG9wOiAuMDVyZW0gc29saWQgI2U1ZTVlNTtcclxufVxyXG5cclxuLmJsb2ctZm9vdGVyIHA6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-post\" *ngFor=\"let post of posts\">\n    <h2 class=\"blog-post-title\"><a [routerLink]=\"post.id\">{{ post.title }}</a></h2>\n    <p>{{ post.body }}</p>\n\n</div>"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
        var _this = this;
        this.posts = [];
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.posts = data; })
            .catch(function (err) { return console.log(err); });
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/*!***********************************************!*\
  !*** ./src/app/pricing/pricing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\r\n    list-style: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/*!************************************************!*\
  !*** ./src/app/pricing/pricing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"data\" *ngFor=\"let  r of result[0]\">\n    <li>{{r.title}}</li>\n    <li>{{r.body}}</li>\n\n\n\n\n</ul>\n\n\n<form>\n    <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address</label>\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-check\">\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n        <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetchdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchdata.service */ "./src/app/fetchdata.service.ts");



var PricingComponent = /** @class */ (function () {
    function PricingComponent(_fetchData) {
        this._fetchData = _fetchData;
    }
    PricingComponent.prototype.ngOnInit = function () {
        this.result = this._fetchData.data;
    };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pricing/pricing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetchdata_service__WEBPACK_IMPORTED_MODULE_2__["FetchdataService"]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n    <li class=\"list-group-item\">Cras justo odio</li>\n    <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n    <li class=\"list-group-item\">Morbi leo risus</li>\n    <li class=\"list-group-item\">Porta ac consectetur ac</li>\n    <li class=\"list-group-item\">Vestibulum at eros</li>\n</ul>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular 7 Projects\WebAngular7\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map