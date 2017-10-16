webpackJsonp(["auth.module"],{

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_app_shared_module__ = __webpack_require__("../../../../../src/app/shared/app-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_routes__ = __webpack_require__("../../../../../src/app/auth/auth.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_app_shared_module__["a" /* AppSharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__auth_routes__["a" /* routes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");

var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
];
//# sourceMappingURL=auth.routes.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"mt-3\">\n\n  <div fxFlex=\"40\" fxFlexOffset=\"30\" fxFlex.md=\"50\" fxFlexOffset.md=\"25\" fxFlex.sm=\"60\" fxFlexOffset.sm=\"20\" fxFlex.xs=\"80\" fxFlexOffset.xs=\"10\">\n\n    <mat-card>\n\n      <div class=\"social-login\">\n        <a mat-raised-button (click)=\"onLoginFacebook()\" id=\"facebook-login\">\n          <img src=\"/assets/images/facebook_icon.png\"> Log in Facebook\n        </a>\n        <a mat-raised-button (click)=\"onLoginGoogle()\" id=\"google-login\">\n          <img src=\"/assets/images/google_icon.png\"> Log in Google\n        </a>\n      </div>\n\n      <div class=\"between-lines my-3\">\n        <span>or</span>\n      </div>\n\n\n      <p style=\"color:red\" *ngIf=\"errorMsg\">{{errorMsg}}</p>\n      \n\n      <form #formData='ngForm'>\n        <mat-form-field>\n          <input type=\"email\" matInput placeholder=\"Email\" (ngModel)=\"email\" name=\"email\" required #emailInput=\"ngModel\" pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$\">\n          <mat-error *ngIf=\"emailInput.hasError('pattern')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailInput.hasError('required')\">\n            Email is\n            <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" required #passwordInput=\"ngModel\">\n          <mat-error *ngIf=\"passwordInput.hasError('required')\">\n            Password is\n            <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <div fxLayout=\"row\" class=\"mt-1\">\n          <div fxFlex=\"50\" class=\"pr-0-5\">\n            <button fxFlex=\"100\" mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"formData.invalid\" (click)=\"onLogin(formData)\">Log in</button>\n          </div>\n          <div fxFlex=\"50\" class=\"pl-0-5\">\n            <button fxFlex=\"100\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"formData.invalid\" (click)=\"onSignup(formData)\">Sign up</button>\n          </div>\n        </div>\n\n\n\n      </form>\n\n    </mat-card>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  display: block;\n  width: 100%; }\n\n.social-login a {\n  display: block;\n  margin-bottom: 1rem;\n  padding: .75rem 0; }\n  .social-login a#facebook-login {\n    background-color: #3b5998;\n    color: #fff; }\n  .social-login a img {\n    float: left;\n    position: relative;\n    left: 1rem;\n    top: 0.5rem;\n    max-width: 1.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__("../../../../../src/app/auth/shared/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(afAuth, authService, router) {
        this.afAuth = afAuth;
        this.authService = authService;
        this.router = router;
        this.errorMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginFacebook = function (formData) {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider()).then(function (resp) {
            console.log(resp);
        }).catch(function (err) {
            console.log(err);
            // this.error = err;
        });
    };
    LoginComponent.prototype.onLoginGoogle = function (formData) {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider()).then(function (resp) {
            console.log(resp);
        }).catch(function (err) {
            console.log(err);
            // this.error = err;
        });
    };
    LoginComponent.prototype.onLogin = function (formData) {
        var _this = this;
        if (formData.valid) {
            this.errorMsg = '';
            this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(function (resp) {
                _this.authService.setLoginUser(resp);
                _this.router.navigate(['todo-list']);
            }).catch(function (err) {
                _this.errorMsg = err.message;
            });
        }
    };
    LoginComponent.prototype.onSignup = function (formData) {
        var _this = this;
        if (formData.valid) {
            this.errorMsg = '';
            this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(function (resp) {
                _this.authService.setLoginUser(resp);
                _this.router.navigate(['todo-list']);
            }).catch(function (err) {
                _this.errorMsg = err.message;
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map