webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts",
		"auth.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_shared_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/shared/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    {
        path: '',
        redirectTo: 'todo-list',
        pathMatch: 'full'
    },
    {
        path: 'todo-list',
        component: __WEBPACK_IMPORTED_MODULE_2__todo_list_todo_list_component__["a" /* TodoListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_shared_auth_guard_service__["a" /* AuthGuard */]],
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export factory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_app_shared_module__ = __webpack_require__("../../../../../src/app/shared/app-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todo_list_shared_task_filter_pipe__ = __webpack_require__("../../../../../src/app/todo-list/shared/task-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_list_shared_task_search_filter_pipe__ = __webpack_require__("../../../../../src/app/todo-list/shared/task-search-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_shared_auth_service__ = __webpack_require__("../../../../../src/app/auth/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_shared_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/shared/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__todo_list_todo_list_item_todo_list_item_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list-item/todo-list-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { BrowserModule } from '@angular/platform-browser';














var factory = function (authService) {
    return function () { return authService.initialize(); };
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__todo_list_shared_task_filter_pipe__["a" /* TaskFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_9__todo_list_shared_task_search_filter_pipe__["a" /* TaskSearchFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_10__todo_list_todo_list_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__todo_list_todo_list_item_todo_list_item_component__["a" /* TodoListItemComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_app_shared_module__["a" /* AppSharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["b" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__auth_shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__auth_shared_auth_guard_service__["a" /* AuthGuard */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */],
                deps: [__WEBPACK_IMPORTED_MODULE_12__auth_shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]],
                multi: true,
                useFactory: factory
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/shared/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/shared/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/auth/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/shared/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.redirectUrl = '';
        this.loginUser = null;
    }
    AuthService.prototype.initialize = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afAuth.auth.onAuthStateChanged(function (user) {
                _this.loginUser = user ? user : null;
                resolve(_this.loginUser);
            });
        });
        return promise;
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.loginUser != null;
    };
    AuthService.prototype.setLoginUser = function (user) {
        this.loginUser = user;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/app-shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spinner_spinner_component__ = __webpack_require__("../../../../../src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppSharedModule = (function () {
    function AppSharedModule() {
    }
    return AppSharedModule;
}());
AppSharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__spinner_spinner_component__["a" /* SpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatToolbarModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__spinner_spinner_component__["a" /* SpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatToolbarModule */]
        ],
        providers: [],
    })
], AppSharedModule);

//# sourceMappingURL=app-shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Todo List</span>\n\n  <span class=\"space\"></span>\n\n  <button mat-button (click)=\"onLogout()\">Logout</button>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"double-bounce1\"></div>\n  <div class=\"double-bounce2\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    return SpinnerComponent;
}());
SpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-spinner',
        template: __webpack_require__("../../../../../src/app/shared/spinner/spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/spinner/spinner.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SpinnerComponent);

//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/shared/task-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskFilterPipe = (function () {
    function TaskFilterPipe() {
    }
    TaskFilterPipe.prototype.transform = function (taskList, filter) {
        if (filter === 'active') {
            return taskList.filter(function (task) { return !task.isCompleted; });
        }
        else if (filter === 'completed') {
            return taskList.filter(function (task) {
                return task.isCompleted;
            });
        }
        else {
            return taskList;
        }
    };
    return TaskFilterPipe;
}());
TaskFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'taskFilter' })
], TaskFilterPipe);

//# sourceMappingURL=task-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/shared/task-search-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskSearchFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskSearchFilterPipe = (function () {
    function TaskSearchFilterPipe() {
    }
    TaskSearchFilterPipe.prototype.transform = function (taskList, query) {
        return query ?
            taskList.filter(function (task) { return task.desc.toLowerCase().indexOf(query.toLowerCase()) !== -1; }) :
            taskList;
    };
    return TaskSearchFilterPipe;
}());
TaskSearchFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'taskSearchFilter' })
], TaskSearchFilterPipe);

//# sourceMappingURL=task-search-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/shared/task.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task() {
    }
    return Task;
}());

//# sourceMappingURL=task.model.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list-item/todo-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<li fxLayout=\"row\" [ngClass]=\"{'completed': task.isCompleted}\">\n\n  <mat-checkbox fxFlex=\"5\" [(ngModel)]=\"task.isCompleted\" (change)=\"onUpdateTask()\"></mat-checkbox>\n\n  <mat-form-field fxFlex=\"90\">\n    <input matInput [(ngModel)]=\"task.desc\" (focusout)=\"onUpdateTask()\">\n  </mat-form-field>\n\n  <div fxFlex=\"5\">\n    <a class=\"delete-task\" (click)=\"onDeleteTask()\">\n      <i class=\"material-icons\">close</i>\n    </a>\n  </div>\n</li>"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list-item/todo-list-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n  padding: 0 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #eee;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nli label {\n  vertical-align: middle; }\n\nli span {\n  font-weight: 300;\n  /* Safari */\n  transition: all 0.4s;\n  transition-timing-function: ease-in-out;\n  color: #4d4d4d; }\n\nli.completed span {\n  text-decoration: line-through;\n  color: #d9d9d9; }\n\nli .delete-task {\n  display: none;\n  text-align: right;\n  margin-top: 6px;\n  color: rgba(175, 47, 47, 0.15); }\n\nli .delete-task:hover {\n  color: rgba(175, 47, 47, 0.5); }\n\nli:hover .delete-task {\n  display: block; }\n\nmat-form-field {\n  padding-top: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list-item/todo-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_task_model__ = __webpack_require__("../../../../../src/app/todo-list/shared/task.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListItemComponent = (function () {
    function TodoListItemComponent(db) {
        this.db = db;
        this.tasksCollection = db.collection('tasks');
    }
    TodoListItemComponent.prototype.ngOnInit = function () {
    };
    TodoListItemComponent.prototype.onDeleteTask = function () {
        var taskRef = this.tasksCollection.doc(this.task.id);
        taskRef.delete();
    };
    TodoListItemComponent.prototype.onUpdateTask = function () {
        var taskRef = this.tasksCollection.doc(this.task.id);
        taskRef.update(this.task);
    };
    return TodoListItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_task_model__["a" /* Task */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_task_model__["a" /* Task */]) === "function" && _a || Object)
], TodoListItemComponent.prototype, "task", void 0);
TodoListItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todo-list-item',
        template: __webpack_require__("../../../../../src/app/todo-list/todo-list-item/todo-list-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-list/todo-list-item/todo-list-item.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _b || Object])
], TodoListItemComponent);

var _a, _b;
//# sourceMappingURL=todo-list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"nav\">\n    <div class=\"input-field\" id=\"search-box\">\n      <i class=\"material-icons prefix\">search</i>\n      <input id=\"search\" type=\"text\" class=\"validate\" placeholder=\"Search\" [(ngModel)]=\"search\">\n    </div>\n  </div>\n\n  <br>\n\n  <h1>todos</h1>\n\n  <div *ngIf=\"isTasksLoaded; then loaded else loading\"></div>\n  <ng-template #loading>\n    <app-spinner></app-spinner>\n  </ng-template>\n  <ng-template #loaded>\n    <div class=\"content-wrapper\">\n      <p class=\"red-text center-align\" id=\"error-msg\" style=\"display: none\"></p>\n      <div id=\"content\">\n\n        <form fxLayout=\"row\" #searchForm=\"ngForm\" (submit)=\"onSubmit($event)\" id=\"searchForm\">\n          <div fxFlex=\"5\">\n            <mat-checkbox name=\"selectAll\" [(ngModel)]=\"selectAll\" (change)=\"toggleSelectAll()\" *ngIf=\"taskList.length > 0\"></mat-checkbox>\n          </div>\n\n          <mat-form-field fxFlex=\"95\">\n            <input type=\"text\" id=\"search-input\" matInput placeholder=\"What needs to be done?\" [(ngModel)]=\"taskDesc\" name=\"search\" #taskDescInput=\"ngModel\"\n              minlength=\"4\" required>\n            <mat-error *ngIf=\"(searchForm.isDirty||searchForm.isTouched) && taskDescInput.hasError('minlength')\">\n              Please enter at least 4 chars\n            </mat-error>\n            <mat-error *ngIf=\"(searchForm.isDirty||searchForm.isTouched) && taskDescInput.hasError('required')\">\n                Description is\n              <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </form>\n\n        <ul id=\"task-list\">\n          <app-todo-list-item [task]=\"task\" *ngFor=\"let task of (taskList |taskFilter:filter|taskSearchFilter:search)\"></app-todo-list-item>\n        </ul>\n\n\n        <div class=\"footer\">\n\n          <div id=\"footer-left\">\n            <p>{{activeTaskList.length}} {{activeTaskList.length > 1 ? 'items' : 'item'}} left</p>\n          </div>\n\n          <div id=\"footer-middle\">\n            <button class=\"footer-btn filter-btn\" [ngClass]=\"{'active': filter=='all'}\" (click)=\"filter='all'\">All</button>\n            <button class=\"footer-btn filter-btn\" [ngClass]=\"{'active': filter=='active'}\" (click)=\"filter='active'\">Active</button>\n            <button class=\"footer-btn filter-btn\" [ngClass]=\"{'active': filter=='completed'}\" (click)=\"filter='completed'\">Completed</button>\n          </div>\n\n          <div id=\"footer-right\">\n            <button class=\"footer-btn\" id=\"clear-complete-btn\" (click)=\"clearCompleted()\">Clear Completed</button>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </ng-template>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 4rem;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15); }\n\n.nav {\n  overflow: hidden; }\n\n.nav #search-box {\n  float: right; }\n\n.nav #search-box input {\n  /* Safari */\n  transition: all 0.4s;\n  transition-timing-function: ease-in-out;\n  width: 80px; }\n\n.nav #search-box input:focus {\n  width: 320px; }\n\n.content-wrapper {\n  width: 100%;\n  margin: auto; }\n\n@media (min-width: 540px) {\n  .content-wrapper {\n    width: 90%; } }\n\n@media (min-width: 720px) {\n  .content-wrapper {\n    width: 80%; } }\n\n@media (min-width: 960px) {\n  .content-wrapper {\n    width: 70%; } }\n\n#searchForm {\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n  padding: 0.5rem 1rem;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.task-input {\n  display: inline-block !important;\n  width: 90% !important;\n  margin-bottom: 0 !important; }\n\n#content {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n  margin-bottom: 40px; }\n\n.footer {\n  overflow: hidden;\n  background-color: #fff;\n  font-size: 14px;\n  padding: 10px 20px;\n  color: #777; }\n\n.footer > div {\n  float: left; }\n\n/* solution 2 */\n.footer #footer-left {\n  width: 25%;\n  padding-top: 4px; }\n\n.footer #footer-left p {\n  margin: 0; }\n\n.footer #footer-middle {\n  text-align: center;\n  width: 50%; }\n\n.footer #footer-right {\n  text-align: right;\n  width: 25%; }\n\n.footer .footer-btn {\n  outline: none;\n  border: 1px solid transparent;\n  background-color: transparent;\n  color: #777; }\n\n.footer .footer-btn:hover {\n  border-color: #eee;\n  cursor: pointer; }\n\n.footer .footer-btn.active {\n  border-color: rgba(175, 47, 47, 0.15); }\n\n.completed {\n  text-decoration: line-through; }\n\n/* .task-complete {\n    -webkit-appearance: none;\n  appearance: none;\n} */\n.task-complete::after {\n  /* url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>') */ }\n\n.task-complete:checked::after {\n  /* url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>') */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = (function () {
    function TodoListComponent(db) {
        var _this = this;
        this.db = db;
        this.taskDesc = '';
        this.taskList = [];
        this.filter = 'all';
        this.selectAll = false;
        this.search = '';
        this.isTasksLoaded = false;
        this.tasksCollection = db.collection('tasks');
        this.tasks$ = this.tasksCollection.valueChanges();
        this.tasks$.subscribe(function (taskList) {
            _this.taskList = taskList;
            _this.isTasksLoaded = true;
        }, function (err) {
            alert(1);
        });
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent.prototype.onSubmit = function (e) {
        e.preventDefault();
        if (this.searchForm.invalid) {
            return;
        }
        var task = {
            id: this.guid(),
            desc: this.taskDesc,
            isCompleted: false
        };
        // this.db.collection('tasks').add(task);
        this.tasksCollection.doc(task.id).set(task);
        // this.taskList.push(task);
        document.getElementById('search-input').blur();
        this.searchForm.reset();
        this.taskDesc = '';
    };
    TodoListComponent.prototype.onDeleteTask = function (task) {
        var taskRef = this.tasksCollection.doc(task.id);
        taskRef.delete();
    };
    TodoListComponent.prototype.onUpdateTask = function (task) {
        var taskRef = this.tasksCollection.doc(task.id);
        taskRef.update(task);
    };
    TodoListComponent.prototype.clearCompleted = function () {
        var _this = this;
        this.taskList.forEach(function (task) {
            if (task.isCompleted) {
                _this.onDeleteTask(task);
            }
        });
        // this.taskList = this.taskList.filter(task => !task.isCompleted);
        this.selectAll = false;
    };
    TodoListComponent.prototype.toggleSelectAll = function () {
        var _this = this;
        this.taskList.forEach(function (task) {
            task.isCompleted = _this.selectAll;
            _this.onUpdateTask(task);
        });
    };
    Object.defineProperty(TodoListComponent.prototype, "completedTaskList", {
        get: function () {
            return this.taskList.filter(function (task) { return task.isCompleted; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoListComponent.prototype, "activeTaskList", {
        get: function () {
            return this.taskList.filter(function (task) { return !task.isCompleted; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoListComponent.prototype, "completedCount", {
        get: function () {
            return this.taskList.filter(function (task) { return task.isCompleted; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoListComponent.prototype, "totalCount", {
        get: function () {
            return this.taskList.length;
        },
        enumerable: true,
        configurable: true
    });
    TodoListComponent.prototype.guid = function () {
        var s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    return TodoListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('searchForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */]) === "function" && _a || Object)
], TodoListComponent.prototype, "searchForm", void 0);
TodoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todo-list',
        template: __webpack_require__("../../../../../src/app/todo-list/todo-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-list/todo-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _b || Object])
], TodoListComponent);

var _a, _b;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDl7YzHvZB09rNqhLgm2ITe2dHTzrCelpo',
        authDomain: 'todomvc-18a22.firebaseapp.com',
        databaseURL: 'https://todomvc-18a22.firebaseio.com',
        projectId: 'todomvc-18a22',
        storageBucket: 'todomvc-18a22.appspot.com',
        messagingSenderId: '745485400260'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map