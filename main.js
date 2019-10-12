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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-content\">\r\n      <div class=\"card-header\">Study Abroad Peer Advisors</div>\r\n      <markdown [data]=\"aboutMarkdown\"></markdown>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(dataService) {
        this.dataService = dataService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAboutData()
            .subscribe(function (about) { return _this.aboutMarkdown = about; });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _member_list_member_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-list/member-list.component */ "./src/app/member-list/member-list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./member-detail/member-detail.component */ "./src/app/member-detail/member-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _member_list_member_list_component__WEBPACK_IMPORTED_MODULE_2__["MemberListComponent"] },
    { path: 'members', component: _member_list_member_list_component__WEBPACK_IMPORTED_MODULE_2__["MemberListComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'member/:id', component: _member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__["MemberDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-68 {\r\n    width: 68%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtNjgge1xyXG4gICAgd2lkdGg6IDY4JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navheader></app-navheader>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Study Abroad Peer Advisors';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navheader_navheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navheader/navheader.component */ "./src/app/navheader/navheader.component.ts");
/* harmony import */ var _member_list_member_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./member-list/member-list.component */ "./src/app/member-list/member-list.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./member-detail/member-detail.component */ "./src/app/member-detail/member-detail.component.ts");
/* harmony import */ var _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./member-card/member-card.component */ "./src/app/member-card/member-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navheader_navheader_component__WEBPACK_IMPORTED_MODULE_5__["NavheaderComponent"],
                _member_list_member_list_component__WEBPACK_IMPORTED_MODULE_6__["MemberListComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_11__["MemberDetailComponent"],
                _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_12__["MemberCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    transition: all .25s;\r\n}\r\n\r\nimg:hover {\r\n    transform: scale(1.20);\r\n}\r\n\r\n.contact-link-group {\r\n    margin-top: 25px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.contact-link {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-decoration: none;\r\n}\r\n\r\n.social-title {\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    font-weight: 900;\r\n}\r\n\r\n.main-content-card {\r\n    min-height: 325px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXM7XHJcbn1cclxuXHJcbmltZzpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjApO1xyXG59XHJcblxyXG4uY29udGFjdC1saW5rLWdyb3VwIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5jb250YWN0LWxpbmsge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zb2NpYWwtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQtY2FyZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAzMjVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card main-content-card\">\r\n  <div class=\"card-content\">\r\n    <div class=\"card-header\">Contact Us</div>\r\n    <hr/>\r\n    <div class=\"contact-link-group\">\r\n      <a class=\"contact-link\" href=\"mailto:ufsapa+web@gmail.com\">\r\n        <img src=\"../../assets/icons/iconmonstr-gmail-1.svg\"/>\r\n        <div class=\"social-title\">ufsapa@gmail.com</div>\r\n      </a>\r\n      <a target=\"_blank\" href=\"https://facebook.com/ufsapa\" class=\"contact-link\">\r\n        <img src=\"../../assets/icons/iconmonstr-facebook-6.svg\"/>\r\n          <div class=\"social-title\">@ufsapa</div>\r\n      </a>\r\n      <a target=\"_blank\" href=\"https://www.instagram.com/ufsapa/\" class=\"contact-link\">\r\n        <img src=\"../../assets/icons/iconmonstr-instagram-11.svg\"/>\r\n          <div class=\"social-title\">@ufsapa</div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var get_sheet_done__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! get-sheet-done */ "./node_modules/get-sheet-done/dist/GetSheetDone.js");
/* harmony import */ var get_sheet_done__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(get_sheet_done__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService() {
        this.loading = true;
    }
    DataService.prototype.getAboutData = function () {
        this.loading = true;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(get_sheet_done__WEBPACK_IMPORTED_MODULE_2__["raw"]("1IPqAVX0sBs9v-TJH7rO2hX5Usn45lzelX7C5fnaJLTo")
            .then(function (res) {
            console.log(res);
            return res.data[0][0];
        }, function (msg) {
            console.log(msg);
        }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (members, searchText) {
        var _this = this;
        if (!members)
            return [];
        if (!searchText)
            return members;
        searchText = searchText.toLowerCase();
        return members.filter(function (member) {
            return _this.memberContains(member, searchText);
        });
    };
    FilterPipe.prototype.memberContains = function (member, search) {
        var contains = false;
        if (member.name.toLowerCase().includes(search)) {
            contains = true;
        }
        if (member.officeHours.toLowerCase().includes(search)) {
            contains = true;
        }
        member.programs.forEach(function (program) {
            if (program.toLowerCase().includes(search)) {
                contains = true;
            }
        });
        member.countries.forEach(function (country) {
            if (country.toLowerCase().includes(search)) {
                contains = true;
            }
        });
        member.majors.forEach(function (major) {
            if (major.toLowerCase().includes(search)) {
                contains = true;
            }
        });
        member.minors.forEach(function (minors) {
            if (minors.toLowerCase().includes(search)) {
                contains = true;
            }
        });
        return contains;
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/member-card/member-card.component.css":
/*!*******************************************************!*\
  !*** ./src/app/member-card/member-card.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 200px;\r\n    height: 200px;\r\n    border-bottom-right-radius: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyLWNhcmQvbWVtYmVyLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyLWNhcmQvbWVtYmVyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/member-card/member-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/member-card/member-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n\r\n    <div class=\"card-image\">\r\n      <img src={{member.imageUrl}} />\r\n    </div>\r\n\r\n  \r\n    <div class=\"card-content\">\r\n\r\n      <div class=\"card-header\">{{member.name}}</div>\r\n      <hr/>\r\n      <div><b>Program<span *ngIf=\"member.programs.length > 1\">s</span>:</b>\r\n        <div *ngFor=\"let program of member.programs\">\r\n        {{program}}\r\n        </div>\r\n      </div>\r\n      <div><b>Major<span *ngIf=\"member.majors.length>1\">s</span></b>:\r\n        {{member.majors.join(\", \")}}</div>\r\n      <div *ngIf=\"member.minors.length\"><b>Minor<span *ngIf=\"member.minors.length>1\">s:</span></b>\r\n        {{member.minors.join(\", \")}}</div>\r\n      <div><b>Email: </b> \r\n        <a href=\"mailto:{{member.email}}\">{{member.email}}</a>\r\n      </div>\r\n      <div><b>Office Hours:</b>\r\n        {{member.officeHours}}\r\n      </div>\r\n    \r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/member-card/member-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/member-card/member-card.component.ts ***!
  \******************************************************/
/*! exports provided: MemberCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function() { return MemberCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member */ "./src/app/member.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent() {
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _member__WEBPACK_IMPORTED_MODULE_1__["Member"])
    ], MemberCardComponent.prototype, "member", void 0);
    MemberCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-card',
            template: __webpack_require__(/*! ./member-card.component.html */ "./src/app/member-card/member-card.component.html"),
            styles: [__webpack_require__(/*! ./member-card.component.css */ "./src/app/member-card/member-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "./src/app/member-detail/member-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/member-detail/member-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 200px;\r\n    height: 200px;\r\n    border-bottom-right-radius: 15px;\r\n}\r\n\r\ninput {\r\n    box-sizing:border-box;\r\n    border-style: solid;\r\n    border-radius: 5px;\r\n    border-color: grey;\r\n    margin-top: 15px;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    width: 100%;\r\n    padding-left: 8px;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n}\r\n\r\n.no-results {\r\n    margin: 20px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-family: 'Roboto', Georgia, Times, serif;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyLWRldGFpbC9tZW1iZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDRDQUE0QztBQUNoRCIsImZpbGUiOiJzcmMvYXBwL21lbWJlci1kZXRhaWwvbWVtYmVyLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubm8tcmVzdWx0cyB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIEdlb3JnaWEsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/member-detail/member-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/member-detail/member-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-container\">\r\n  <div *ngIf=\"memberService.loading\" class=\"loading\"></div>\r\n</div>\r\n\r\n<div *ngIf=\"!memberService.loading\">\r\n  <app-member-card [member]=\"member\"></app-member-card>\r\n\r\n  <div *ngFor=\"let index of [0,1,2,3,4]\">\r\n    <div class=\"card\" *ngIf=\"member.questions[index]\">\r\n      <div class=\"card-content\">\r\n          <b>{{questionTexts[index]}}</b>\r\n          <hr/>\r\n          {{member.questions[index]}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/member-detail/member-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/member-detail/member-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../member.service */ "./src/app/member.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent(route, memberService, location) {
        this.route = route;
        this.memberService = memberService;
        this.location = location;
        this.questionTexts =
            ["What did you study and why?",
                "Where else have you traveled (2+ weeks)?",
                "What was one of the biggest challenges you faced while abroad?",
                "Do you have any advice for students looking to study abroad?",
                "What was an interesting experience you had while abroad?"];
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        this.getMember();
    };
    MemberDetailComponent.prototype.getMember = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.memberService.getMember(id)
            .subscribe(function (member) { return _this.member = member; });
        console.log(id);
    };
    MemberDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-detail',
            template: __webpack_require__(/*! ./member-detail.component.html */ "./src/app/member-detail/member-detail.component.html"),
            styles: [__webpack_require__(/*! ./member-detail.component.css */ "./src/app/member-detail/member-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "./src/app/member-list/member-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/member-list/member-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    box-sizing:border-box;\r\n    border-style: solid;\r\n    border-radius: 5px;\r\n    border-color: grey;\r\n    margin-top: 15px;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    width: 100%;\r\n    padding-left: 8px;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n}\r\n\r\n.no-results {\r\n    margin: 20px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-family: 'Roboto', Georgia, Times, serif;\r\n}\r\n\r\n.card-container:hover {\r\n    background: #f9f9f9;\r\n    transform: scale(1.05);\r\n}\r\n\r\n.card-container {\r\n    transition: all .3s;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyLWxpc3QvbWVtYmVyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXItbGlzdC9tZW1iZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubm8tcmVzdWx0cyB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIEdlb3JnaWEsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/member-list/member-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/member-list/member-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-container\">\r\n  <div *ngIf=\"memberService.loading\" class=\"loading\"></div>\r\n</div>\r\n\r\n<div *ngIf=\"!memberService.loading\">\r\n  <input [(ngModel)]=\"filterText\" placeholder=\"Filter by Name, Country, Program, or Major\">\r\n\r\n  <div class=\"card-container pointer\" *ngFor=\"let member of members | filter : filterText\"\r\n    routerLink=\"/member/{{member.id}}\">\r\n    <app-member-card [member]=\"member\"></app-member-card>    \r\n\r\n  </div>\r\n\r\n  <div class=\"no-results\" *ngIf=\"(members | filter: filterText).length === 0\">\r\n    No SAPAs matched your search :(\r\n    <br>\r\n    Try another query!\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/member-list/member-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/member-list/member-list.component.ts ***!
  \******************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member.service */ "./src/app/member.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(memberService) {
        this.memberService = memberService;
    }
    MemberListComponent.prototype.ngOnInit = function () {
        this.getMembers();
    };
    MemberListComponent.prototype.getMembers = function () {
        var _this = this;
        this.memberService.getMembers()
            .subscribe(function (members) { return _this.registerMembers(members); });
    };
    // I don't understand why this is necessary but it is
    MemberListComponent.prototype.registerMembers = function (members) {
        this.members = members;
    };
    MemberListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__(/*! ./member-list.component.html */ "./src/app/member-list/member-list.component.html"),
            styles: [__webpack_require__(/*! ./member-list.component.css */ "./src/app/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/member.service.ts":
/*!***********************************!*\
  !*** ./src/app/member.service.ts ***!
  \***********************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member */ "./src/app/member.ts");
/* harmony import */ var get_sheet_done__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! get-sheet-done */ "./node_modules/get-sheet-done/dist/GetSheetDone.js");
/* harmony import */ var get_sheet_done__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(get_sheet_done__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberService = /** @class */ (function () {
    function MemberService() {
        this.loading = true;
    }
    MemberService.prototype.getMembers = function () {
        var _this = this;
        this.loading = true;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(get_sheet_done__WEBPACK_IMPORTED_MODULE_2__["labeledCols"]("1XaZkNGf_v1n9hd1L2lyVaY60dcSnr2eCxgiIDd07vPc")
            .then(function (res) {
            var results = _this.parseMemberData(res.data);
            _this.loading = false;
            return (results);
        }, function (msg) {
            console.log(msg);
        }));
    };
    MemberService.prototype.getMember = function (id) {
        var _this = this;
        this.loading = true;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(get_sheet_done__WEBPACK_IMPORTED_MODULE_2__["labeledCols"]("1XaZkNGf_v1n9hd1L2lyVaY60dcSnr2eCxgiIDd07vPc")
            .then(function (res) {
            var results = _this.parseMemberData(res.data);
            var member = results.find(function (member) { return member.id === id; });
            _this.loading = false;
            return (member);
        }, function (msg) {
            console.log(msg);
        }));
    };
    MemberService.prototype.parseMemberData = function (memberData) {
        var members = [];
        memberData.forEach(function (member) {
            var programs = member.programs.split(';');
            var countries = member.countries.split(';');
            var majors = member.majors.split(';');
            var minors = member.minors.split(';');
            if (minors[0] === "") {
                minors = [];
            }
            var questions = [member.question1, member.question2, member.question3, member.question4, member.question5];
            var parsedMember = new _member__WEBPACK_IMPORTED_MODULE_1__["Member"](member.id, member.fullname, programs, countries, majors, minors, member.email, member.image, member.officehours, questions);
            members.push(parsedMember);
        });
        return members;
    };
    MemberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "./src/app/member.ts":
/*!***************************!*\
  !*** ./src/app/member.ts ***!
  \***************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
var Member = /** @class */ (function () {
    function Member(id, name, programs, countries, majors, minors, email, imageUrl, officeHours, questions) {
        this.id = id;
        this.name = name;
        this.programs = programs;
        this.countries = countries;
        this.minors = minors;
        this.majors = majors;
        this.email = email;
        this.imageUrl = imageUrl;
        this.officeHours = officeHours;
        this.questions = questions;
    }
    return Member;
}());



/***/ }),

/***/ "./src/app/navheader/navheader.component.css":
/*!***************************************************!*\
  !*** ./src/app/navheader/navheader.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover {\r\n    background: #E28F41;\r\n}\r\n\r\na {\r\n    margin-top: auto;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    text-align: center;\r\n    float: left;\r\n    font-family: 'Roboto', sans-serif;\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n    text-decoration: none;\r\n    color: #ffffff;\r\n    display: block;\r\n    padding: 8px;\r\n    height: 100%;\r\n    transition: background .3s;\r\n}\r\n\r\n.navbar-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0;\r\n    margin: 0;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 50px;\r\n    overflow: hidden;\r\n    background-color: rgba(0, 33, 165, .6);\r\n    position: fixed;\r\n    z-index: 100;\r\n}\r\n\r\n.active {\r\n    background: #E28F41;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aGVhZGVyL25hdmhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixTQUFTO0lBQ1QsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9uYXZoZWFkZXIvbmF2aGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNFMjhGNDE7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcztcclxufVxyXG5cclxuLm5hdmJhci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzMywgMTY1LCAuNik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI0UyOEY0MTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navheader/navheader.component.html":
/*!****************************************************!*\
  !*** ./src/app/navheader/navheader.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-container\">\r\n  <a [routerLinkActive]=\"['active']\" routerLink=\"/about\">about us</a>\r\n  <a [routerLinkActive]=\"['active']\" routerLink=\"/members\">members</a>\r\n  <a [routerLinkActive]=\"['active']\" routerLink=\"/contact\">contact</a>\r\n</div>\r\n<div style=\"height: 50px\"></div>"

/***/ }),

/***/ "./src/app/navheader/navheader.component.ts":
/*!**************************************************!*\
  !*** ./src/app/navheader/navheader.component.ts ***!
  \**************************************************/
/*! exports provided: NavheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavheaderComponent", function() { return NavheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavheaderComponent = /** @class */ (function () {
    function NavheaderComponent() {
    }
    NavheaderComponent.prototype.ngOnInit = function () {
    };
    NavheaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navheader',
            template: __webpack_require__(/*! ./navheader.component.html */ "./src/app/navheader/navheader.component.html"),
            styles: [__webpack_require__(/*! ./navheader.component.css */ "./src/app/navheader/navheader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavheaderComponent);
    return NavheaderComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Luke\Documents\Projects\ufsapa.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map