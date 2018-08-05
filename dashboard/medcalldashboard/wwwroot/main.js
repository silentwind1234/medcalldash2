(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./patients/patients.module": [
		"./app/patients/patients.module.ts",
		"patients-patients-module~providers-providers-module~settings-settings-module",
		"common",
		"patients-patients-module"
	],
	"./providers/providers.module": [
		"./app/providers/providers.module.ts",
		"patients-patients-module~providers-providers-module~settings-settings-module",
		"common",
		"providers-providers-module"
	],
	"./settings/settings.module": [
		"./app/settings/settings.module.ts",
		"patients-patients-module~providers-providers-module~settings-settings-module",
		"common",
		"settings-settings-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./app/app.component.scss":
/*!********************************!*\
  !*** ./app/app.component.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ "../node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(oidcSecurityService, router) {
        var _this = this;
        this.oidcSecurityService = oidcSecurityService;
        this.router = router;
        this.title = 'app';
        if (this.oidcSecurityService.moduleSetup) {
            this.onOidcModuleSetup();
        }
        else {
            this.oidcSecurityService.onModuleSetup.subscribe(function () {
                _this.onOidcModuleSetup();
            });
        }
        this.oidcSecurityService.onAuthorizationResult.subscribe(function (authorizationResult) {
            _this.onAuthorizationResultComplete(authorizationResult);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.oidcSecurityService.onModuleSetup.unsubscribe();
    };
    AppComponent.prototype.login = function () {
        console.log('start login');
        this.oidcSecurityService.authorize();
    };
    AppComponent.prototype.refreshSession = function () {
        console.log('start refreshSession');
        this.oidcSecurityService.authorize();
    };
    AppComponent.prototype.logout = function () {
        console.log('start logoff');
        this.oidcSecurityService.logoff();
    };
    AppComponent.prototype.onOidcModuleSetup = function () {
        if (window.location.hash) {
            this.oidcSecurityService.authorizedCallback();
        }
        else {
            if ('/autologin' !== window.location.pathname) {
                this.write('redirect', window.location.pathname);
            }
            console.log('AppComponent:onModuleSetup');
        }
    };
    AppComponent.prototype.onAuthorizationResultComplete = function (authorizationResult) {
        console.log('AppComponent:onAuthorizationResultComplete');
        var path = this.read('redirect');
        console.log('AppComponent:onAuthorizationResultComplete path=' + path);
        if (authorizationResult === angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["AuthorizationResult"].authorized) {
            this.router.navigate([path]);
        }
        else {
            this.router.navigate(['/unauthorized']);
        }
    };
    AppComponent.prototype.read = function (key) {
        var data = localStorage.getItem(key);
        if (data != null) {
            return JSON.parse(data);
        }
        return;
    };
    AppComponent.prototype.write = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["OidcSecurityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.helpers.ts":
/*!****************************!*\
  !*** ./app/app.helpers.ts ***!
  \****************************/
/*! exports provided: correctHeight, detectBody, smoothlyMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctHeight", function() { return correctHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectBody", function() { return detectBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothlyMenu", function() { return smoothlyMenu; });
/*
 * Inspinia js helpers:
 *
 * correctHeight() - fix the height of main wrapper
 * detectBody() - detect windows size
 * smoothlyMenu() - add smooth fade in/out on navigation show/ide
 *
 */
function correctHeight() {
    var pageWrapper = jQuery('#page-wrapper');
    var navbarHeight = jQuery('nav.navbar-default').height();
    var wrapperHeight = pageWrapper.height();
    if (navbarHeight > wrapperHeight) {
        pageWrapper.css('min-height', navbarHeight + 'px');
    }
    if (navbarHeight <= wrapperHeight) {
        if (navbarHeight < jQuery(window).height()) {
            pageWrapper.css('min-height', jQuery(window).height() + 'px');
        }
        else {
            pageWrapper.css('min-height', navbarHeight + 'px');
        }
    }
    if (jQuery('body').hasClass('fixed-nav')) {
        if (navbarHeight > wrapperHeight) {
            pageWrapper.css('min-height', navbarHeight + 'px');
        }
        else {
            pageWrapper.css('min-height', jQuery(window).height() - 60 + 'px');
        }
    }
}
function detectBody() {
    if (jQuery(document).width() < 769) {
        jQuery('body').addClass('body-small');
    }
    else {
        jQuery('body').removeClass('body-small');
    }
}
function smoothlyMenu() {
    if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        jQuery('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 200);
    }
    else if (jQuery('body').hasClass('fixed-sidebar')) {
        jQuery('#side-menu').hide();
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 100);
    }
    else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        jQuery('#side-menu').removeAttr('style');
    }
}


/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: loadConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfig", function() { return loadConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-auth-oidc-client */ "../node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config.service */ "./app/config.service.ts");
/* harmony import */ var _auth_Interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.Interceptor */ "./app/auth.Interceptor.ts");
/* harmony import */ var _authorization_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authorization.guard */ "./app/authorization.guard.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routes */ "./app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _views_appviews_appviews_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/appviews/appviews.module */ "./app/views/appviews/appviews.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/data */ "./app/core/data/index.ts");
/* harmony import */ var _components_common_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/common/layouts/layouts.module */ "./app/components/common/layouts/layouts.module.ts");
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./settings/settings.module */ "./app/settings/settings.module.ts");
/* harmony import */ var _providers_providers_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./providers/providers.module */ "./app/providers/providers.module.ts");
/* harmony import */ var _patients_patients_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./patients/patients.module */ "./app/patients/patients.module.ts");
/* harmony import */ var _requests_requests_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./requests/requests.module */ "./app/requests/requests.module.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./app/unauthorized/unauthorized.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./app/forbidden/forbidden.component.ts");
/* harmony import */ var _autologin_autologin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./autologin/autologin.component */ "./app/autologin/autologin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























function loadConfig(oidcConfigService) {
    console.log('APP_INITIALIZER STARTING');
    return function () { return oidcConfigService.load_using_stsServer(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].STS_BASE_URL); };
}
var AppModule = /** @class */ (function () {
    function AppModule(oidcSecurityService, configService, oidcConfigService) {
        var _this = this;
        this.oidcSecurityService = oidcSecurityService;
        this.configService = configService;
        this.oidcConfigService = oidcConfigService;
        this.oidcConfigService.onConfigurationLoaded.subscribe(function () {
            var openIDImplicitFlowConfiguration = new angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__["OpenIDImplicitFlowConfiguration"]();
            openIDImplicitFlowConfiguration.stsServer = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].STS_BASE_URL;
            openIDImplicitFlowConfiguration.redirect_url = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].APP_BASE_URL + '/starterview/';
            openIDImplicitFlowConfiguration.client_id = 'angular-client';
            openIDImplicitFlowConfiguration.response_type = 'id_token token';
            openIDImplicitFlowConfiguration.scope = 'openid profile email medcall';
            openIDImplicitFlowConfiguration.post_logout_redirect_uri = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].APP_BASE_URL + '/Unauthorized/';
            openIDImplicitFlowConfiguration.post_login_route = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].APP_BASE_URL + '/starterview/';
            openIDImplicitFlowConfiguration.forbidden_route = '/forbidden';
            openIDImplicitFlowConfiguration.unauthorized_route = '/unauthorized';
            openIDImplicitFlowConfiguration.auto_userinfo = true;
            openIDImplicitFlowConfiguration.log_console_warning_active = true;
            openIDImplicitFlowConfiguration.log_console_debug_active = !_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production;
            openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 60;
            var authWellKnownEndpoints = new angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__["AuthWellKnownEndpoints"]();
            authWellKnownEndpoints.setWellKnownEndpoints(_this.oidcConfigService.wellKnownEndpoints);
            _this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration, authWellKnownEndpoints);
        }, function (error) {
            console.log('Auth Module: Error Occured in Auth Module Registration', error);
        });
        console.log('APP STARTING');
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_21__["UnauthorizedComponent"],
                _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_22__["ForbiddenComponent"],
                _autologin_autologin_component__WEBPACK_IMPORTED_MODULE_23__["AutologinComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__["AuthModule"].forRoot(),
                _components_common_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_16__["LayoutsModule"],
                _views_appviews_appviews_module__WEBPACK_IMPORTED_MODULE_13__["AppviewsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_11__["ROUTES"]),
                _settings_settings_module__WEBPACK_IMPORTED_MODULE_17__["SettingsModule"],
                _providers_providers_module__WEBPACK_IMPORTED_MODULE_18__["ProvidersModule"],
                _patients_patients_module__WEBPACK_IMPORTED_MODULE_19__["PatientsModule"],
                _requests_requests_module__WEBPACK_IMPORTED_MODULE_20__["RequestsModule"]
            ],
            providers: [
                angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__["OidcConfigService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: loadConfig,
                    deps: [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__["OidcConfigService"]],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _auth_Interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
                    multi: true
                },
                angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__["OidcSecurityService"],
                _authorization_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizationGuard"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"], useValue: '/' },
                { provide: _core_data__WEBPACK_IMPORTED_MODULE_15__["API_BASE_URL"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].API_BASE_URL }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__["OidcSecurityService"],
            _config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_7__["OidcConfigService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/app.routes.ts":
/*!***************************!*\
  !*** ./app/app.routes.ts ***!
  \***************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _views_appviews_starterview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/appviews/starterview.component */ "./app/views/appviews/starterview.component.ts");
/* harmony import */ var _views_appviews_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/appviews/login.component */ "./app/views/appviews/login.component.ts");
/* harmony import */ var _components_common_layouts_blankLayout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/common/layouts/blankLayout.component */ "./app/components/common/layouts/blankLayout.component.ts");
/* harmony import */ var _components_common_layouts_basicLayout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/common/layouts/basicLayout.component */ "./app/components/common/layouts/basicLayout.component.ts");
/* harmony import */ var _authorization_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorization.guard */ "./app/authorization.guard.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./app/unauthorized/unauthorized.component.ts");
/* harmony import */ var _autologin_autologin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autologin/autologin.component */ "./app/autologin/autologin.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./app/forbidden/forbidden.component.ts");








var ROUTES = [
    { path: '', redirectTo: 'starterview', pathMatch: 'full', canActivate: [_authorization_guard__WEBPACK_IMPORTED_MODULE_4__["AuthorizationGuard"]] },
    {
        path: 'dashboards', component: _components_common_layouts_basicLayout_component__WEBPACK_IMPORTED_MODULE_3__["BasicLayoutComponent"]
    },
    {
        path: '', component: _components_common_layouts_basicLayout_component__WEBPACK_IMPORTED_MODULE_3__["BasicLayoutComponent"], canActivate: [_authorization_guard__WEBPACK_IMPORTED_MODULE_4__["AuthorizationGuard"]],
        children: [
            { path: 'starterview', component: _views_appviews_starterview_component__WEBPACK_IMPORTED_MODULE_0__["StarterViewComponent"] }
        ]
    },
    { path: 'autologin', component: _autologin_autologin_component__WEBPACK_IMPORTED_MODULE_6__["AutologinComponent"] },
    { path: 'forbidden', component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_7__["ForbiddenComponent"] },
    { path: 'unauthorized', component: _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_5__["UnauthorizedComponent"] },
    {
        path: '', component: _components_common_layouts_blankLayout_component__WEBPACK_IMPORTED_MODULE_2__["BlankLayoutComponent"],
        children: [
            { path: 'login', component: _views_appviews_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
        ]
    },
    {
        path: 'providers', loadChildren: './providers/providers.module#ProvidersModule'
    },
    {
        path: 'patients', loadChildren: './patients/patients.module#PatientsModule'
    },
    {
        path: 'settings', loadChildren: './settings/settings.module#SettingsModule'
    },
    { path: '**', redirectTo: 'starterview', canActivate: [_authorization_guard__WEBPACK_IMPORTED_MODULE_4__["AuthorizationGuard"]] }
];


/***/ }),

/***/ "./app/auth.Interceptor.ts":
/*!*********************************!*\
  !*** ./app/auth.Interceptor.ts ***!
  \*********************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ "../node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var requestToForward = req;
        if (this.oidcSecurityService === undefined) {
            this.oidcSecurityService = this.injector.get(angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["OidcSecurityService"]);
        }
        if (this.oidcSecurityService !== undefined) {
            var token = this.oidcSecurityService.getToken();
            if (token !== '') {
                var tokenValue = 'Bearer ' + token;
                requestToForward = req.clone({ setHeaders: { 'Authorization': tokenValue } });
            }
        }
        else {
            console.log('--- OidcSecurityService undefined: NO auth header!');
        }
        return next.handle(requestToForward);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./app/authorization.guard.ts":
/*!************************************!*\
  !*** ./app/authorization.guard.ts ***!
  \************************************/
/*! exports provided: AuthorizationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationGuard", function() { return AuthorizationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-auth-oidc-client */ "../node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorizationGuard = /** @class */ (function () {
    function AuthorizationGuard(router, oidcSecurityService) {
        this.router = router;
        this.oidcSecurityService = oidcSecurityService;
    }
    AuthorizationGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        console.log(route + '' + state);
        console.log('AuthorizationGuard, canActivate');
        return this.oidcSecurityService.getIsAuthorized().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isAuthorized) {
            console.log('AuthorizationGuard, canActivate isAuthorized: ' + isAuthorized);
            if (isAuthorized) {
                return true;
            }
            if (!window.location.hash) {
                console.log('AuthorizationGuard auto login');
                _this.router.navigate(['/autologin']);
            }
            // this.router.navigate(['/unauthorized']);
            return false;
        }));
    };
    AuthorizationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_3__["OidcSecurityService"]])
    ], AuthorizationGuard);
    return AuthorizationGuard;
}());



/***/ }),

/***/ "./app/autologin/autologin.component.html":
/*!************************************************!*\
  !*** ./app/autologin/autologin.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login..\n</p>\n"

/***/ }),

/***/ "./app/autologin/autologin.component.scss":
/*!************************************************!*\
  !*** ./app/autologin/autologin.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/autologin/autologin.component.ts":
/*!**********************************************!*\
  !*** ./app/autologin/autologin.component.ts ***!
  \**********************************************/
/*! exports provided: AutologinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutologinComponent", function() { return AutologinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ "../node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutologinComponent = /** @class */ (function () {
    function AutologinComponent(oidcSecurityService) {
        var _this = this;
        this.oidcSecurityService = oidcSecurityService;
        this.oidcSecurityService.onModuleSetup.subscribe(function () { _this.onModuleSetup(); });
    }
    AutologinComponent.prototype.ngOnInit = function () {
        if (this.oidcSecurityService.moduleSetup) {
            this.onModuleSetup();
        }
    };
    AutologinComponent.prototype.ngOnDestroy = function () {
        this.oidcSecurityService.onModuleSetup.unsubscribe();
    };
    AutologinComponent.prototype.onModuleSetup = function () {
        this.oidcSecurityService.authorize();
    };
    AutologinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autologin',
            template: __webpack_require__(/*! ./autologin.component.html */ "./app/autologin/autologin.component.html"),
            styles: [__webpack_require__(/*! ./autologin.component.scss */ "./app/autologin/autologin.component.scss")]
        }),
        __metadata("design:paramtypes", [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["OidcSecurityService"]])
    ], AutologinComponent);
    return AutologinComponent;
}());



/***/ }),

/***/ "./app/components/charts/peity.ts":
/*!****************************************!*\
  !*** ./app/components/charts/peity.ts ***!
  \****************************************/
/*! exports provided: PeityDirective, PeityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeityDirective", function() { return PeityDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeityModule", function() { return PeityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var peity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! peity */ "../node_modules/peity/jquery.peity.js");
/* harmony import */ var peity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(peity__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Peity chart library

var PeityDirective = /** @class */ (function () {
    function PeityDirective(element) {
        this.initFlag = false;
        this.element = element;
    }
    // Initialise
    PeityDirective.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options || this.type) {
            this.build();
        }
    };
    // Build
    PeityDirective.prototype.build = function () {
        // Check if peity is available
        if (typeof jQuery(this.element).peity === 'undefined') {
            throw new Error('Configuration issue: Embedding peity lib is mandatory');
        }
        // Let's build chart
        this.chart = jQuery(this.element.nativeElement).peity(this.type, this.options);
    };
    // Change
    PeityDirective.prototype.ngOnChanges = function () {
        if (this.initFlag) {
            this.build();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PeityDirective.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PeityDirective.prototype, "type", void 0);
    PeityDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'span[peity]',
            exportAs: 'peity-chart',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PeityDirective);
    return PeityDirective;
}());

var PeityModule = /** @class */ (function () {
    function PeityModule() {
    }
    PeityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                PeityDirective
            ],
            exports: [
                PeityDirective
            ],
            imports: []
        })
    ], PeityModule);
    return PeityModule;
}());



/***/ }),

/***/ "./app/components/charts/sparkline.ts":
/*!********************************************!*\
  !*** ./app/components/charts/sparkline.ts ***!
  \********************************************/
/*! exports provided: SparklineDirective, SparklineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparklineDirective", function() { return SparklineDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparklineModule", function() { return SparklineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SparklineDirective = /** @class */ (function () {
    function SparklineDirective(element) {
        this.initFlag = false;
        this.element = element.nativeElement;
    }
    // Initialise
    SparklineDirective.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options || this.datasets) {
            this.build();
        }
    };
    // Build
    SparklineDirective.prototype.build = function () {
        // Check if sparkline is available
        if (typeof jQuery(this.element).sparkline() === 'undefined') {
            throw new Error('Configuration issue: Embedding sparkline lib is mandatory');
        }
        // Let's build chart
        this.chart = jQuery(this.element).sparkline(this.datasets, this.options);
    };
    // Change
    SparklineDirective.prototype.ngOnChanges = function () {
        if (this.initFlag) {
            this.build();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SparklineDirective.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SparklineDirective.prototype, "datasets", void 0);
    SparklineDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'span[sparkline]',
            exportAs: 'sparkline-chart',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SparklineDirective);
    return SparklineDirective;
}());

var SparklineModule = /** @class */ (function () {
    function SparklineModule() {
    }
    SparklineModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                SparklineDirective
            ],
            exports: [
                SparklineDirective
            ],
            imports: []
        })
    ], SparklineModule);
    return SparklineModule;
}());



/***/ }),

/***/ "./app/components/common/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./app/components/common/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.template.html */ "./app/components/common/footer/footer.template.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./app/components/common/footer/footer.template.html":
/*!***********************************************************!*\
  !*** ./app/components/common/footer/footer.template.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"pull-right\">\n    version: 1.0.0\n  </div>\n  <div>\n    <strong>MedCall</strong> &copy; 2018\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/components/common/layouts/basicLayout.component.ts":
/*!****************************************************************!*\
  !*** ./app/components/common/layouts/basicLayout.component.ts ***!
  \****************************************************************/
/*! exports provided: BasicLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLayoutComponent", function() { return BasicLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.helpers */ "./app/app.helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BasicLayoutComponent = /** @class */ (function () {
    function BasicLayoutComponent() {
    }
    BasicLayoutComponent.prototype.ngOnInit = function () {
        Object(_app_helpers__WEBPACK_IMPORTED_MODULE_1__["detectBody"])();
    };
    BasicLayoutComponent.prototype.onResize = function () {
        Object(_app_helpers__WEBPACK_IMPORTED_MODULE_1__["detectBody"])();
    };
    BasicLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-layout',
            template: __webpack_require__(/*! ./basicLayout.template.html */ "./app/components/common/layouts/basicLayout.template.html"),
            host: {
                '(window:resize)': 'onResize()'
            }
        })
    ], BasicLayoutComponent);
    return BasicLayoutComponent;
}());



/***/ }),

/***/ "./app/components/common/layouts/basicLayout.template.html":
/*!*****************************************************************!*\
  !*** ./app/components/common/layouts/basicLayout.template.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n  <!-- Left navigation bar -->\n  <app-navigation></app-navigation>\n\n  <!-- Main page wrapper -->\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n\n    <!-- Top navigation -->\n    <app-top-navbar></app-top-navbar>\n\n    <!-- Main view/routes wrapper-->\n    <router-outlet></router-outlet>\n\n    <!-- Footer -->\n    <app-footer></app-footer>\n\n  </div>\n  <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ "./app/components/common/layouts/blankLayout.component.ts":
/*!****************************************************************!*\
  !*** ./app/components/common/layouts/blankLayout.component.ts ***!
  \****************************************************************/
/*! exports provided: BlankLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLayoutComponent", function() { return BlankLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankLayoutComponent = /** @class */ (function () {
    function BlankLayoutComponent() {
    }
    BlankLayoutComponent.prototype.ngAfterViewInit = function () {
        jQuery('body').addClass('gray-bg');
    };
    BlankLayoutComponent.prototype.ngOnDestroy = function () {
        jQuery('body').removeClass('gray-bg');
    };
    BlankLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank-layout',
            template: __webpack_require__(/*! ./blankLayout.template.html */ "./app/components/common/layouts/blankLayout.template.html")
        })
    ], BlankLayoutComponent);
    return BlankLayoutComponent;
}());



/***/ }),

/***/ "./app/components/common/layouts/blankLayout.template.html":
/*!*****************************************************************!*\
  !*** ./app/components/common/layouts/blankLayout.template.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- View/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./app/components/common/layouts/layouts.module.ts":
/*!*********************************************************!*\
  !*** ./app/components/common/layouts/layouts.module.ts ***!
  \*********************************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "../node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _basicLayout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basicLayout.component */ "./app/components/common/layouts/basicLayout.component.ts");
/* harmony import */ var _blankLayout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blankLayout.component */ "./app/components/common/layouts/blankLayout.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../navigation/navigation.component */ "./app/components/common/navigation/navigation.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../footer/footer.component */ "./app/components/common/footer/footer.component.ts");
/* harmony import */ var _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../topnavbar/topnavbar.component */ "./app/components/common/topnavbar/topnavbar.component.ts");
/* harmony import */ var _topnavbar_topnavigationnavbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../topnavbar/topnavigationnavbar.component */ "./app/components/common/topnavbar/topnavigationnavbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import {TopNavigationLayoutComponent} from './topNavigationlayout.component';




var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    LayoutsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot()
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _basicLayout_component__WEBPACK_IMPORTED_MODULE_5__["BasicLayoutComponent"],
                _blankLayout_component__WEBPACK_IMPORTED_MODULE_6__["BlankLayoutComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                // TopNavigationLayoutComponent,
                _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_9__["TopNavbarComponent"],
                _topnavbar_topnavigationnavbar_component__WEBPACK_IMPORTED_MODULE_10__["TopNavigationNavbarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _basicLayout_component__WEBPACK_IMPORTED_MODULE_5__["BasicLayoutComponent"],
                _blankLayout_component__WEBPACK_IMPORTED_MODULE_6__["BlankLayoutComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                // TopNavigationLayoutComponent,
                _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_9__["TopNavbarComponent"],
                _topnavbar_topnavigationnavbar_component__WEBPACK_IMPORTED_MODULE_10__["TopNavigationNavbarComponent"]
            ],
        })
    ], LayoutsModule);
    return LayoutsModule;
}());



/***/ }),

/***/ "./app/components/common/navigation/navigation.component.ts":
/*!******************************************************************!*\
  !*** ./app/components/common/navigation/navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery_slimscroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-slimscroll */ "../node_modules/jquery-slimscroll/jquery.slimscroll.js");
/* harmony import */ var jquery_slimscroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_slimscroll__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngAfterViewInit = function () {
        jQuery('#side-menu').metisMenu();
        if (jQuery('body').hasClass('fixed-sidebar')) {
            jQuery('.sidebar-collapse').slimscroll({
                height: '100%'
            });
        }
    };
    NavigationComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.template.html */ "./app/components/common/navigation/navigation.template.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./app/components/common/navigation/navigation.template.html":
/*!*******************************************************************!*\
  !*** ./app/components/common/navigation/navigation.template.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n  <div class=\"sidebar-collapse\">\n    <ul class=\"nav metismenu\" id=\"side-menu\">\n      <li class=\"nav-header\">\n        <div class=\"profile-element\">\n          <span>\n          <img alt=\"MedCall\" class=\"image m-l-md\" src=\"assets/images/logo.png\" style=\"max-width:70%;\n          max-height:70%;\">\n        </span>\n        </div>\n        <div class=\"logo-element\">\n          MED\n        </div>\n      </li>\n      \n      <li [ngClass]=\"{active: activeRoute('starter')}\">\n        <a [routerLink]=\"['/starterview']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Dashboard</span></a>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('requests')}\">\n          <a href=\"#\"><i class=\"fa fa-map-marker\"></i> <span class=\"nav-label\">Requests</span> <span class=\"fa arrow\"></span> </a>\n          <ul class=\"nav nav-second-level collapse\" [ngClass]=\"{in: activeRoute('requests')}\">\n            <li [ngClass]=\"{active: activeRoute('requests/1')}\"><a [routerLink]=\"['/requests/1']\">New</a></li>\n            <li [ngClass]=\"{active: activeRoute('requests/2')}\"><a [routerLink]=\"['/requests/2']\">Approved</a></li>\n            <li [ngClass]=\"{active: activeRoute('requests/3')}\"><a [routerLink]=\"['/requests/3']\">Assigned</a></li>\n            <li [ngClass]=\"{active: activeRoute('requests/4')}\"><a [routerLink]=\"['/requests/4']\">Accepted</a></li>\n            <!-- <li [ngClass]=\"{active: activeRoute('requests/5')}\"><a [routerLink]=\"['/requests/5']\">Canceled</a></li> -->\n            <li [ngClass]=\"{active: activeRoute('requests/6')}\"><a [routerLink]=\"['/requests/6']\">Completed</a></li>\n          </ul>\n      </li>\n      \n      <li [ngClass]=\"{active: activeRoute('providers')}\">\n        <a href=\"#\"><i class=\"fa fa-user-md\"></i> <span class=\"nav-label\">Providers</span> <span class=\"fa arrow\"></span> </a>\n        <ul class=\"nav nav-second-level collapse\" [ngClass]=\"{in: activeRoute('providers')}\">\n          <li [ngClass]=\"{active: activeRoute('providers/1')}\"><a [routerLink]=\"['/providers/1']\">Doctors</a></li>\n          <li [ngClass]=\"{active: activeRoute('providers/2')}\"><a [routerLink]=\"['/providers/2']\">Nurses</a></li>\n          <li [ngClass]=\"{active: activeRoute('providers/3')}\"><a [routerLink]=\"['/providers/3']\">Laboratories</a></li>\n          <li [ngClass]=\"{active: activeRoute('providers/4')}\"><a [routerLink]=\"['/providers/4']\">Radiographies</a></li>\n        </ul>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('patients')}\">\n          <a [routerLink]=\"['/patients']\"><i class=\"fa fa-wheelchair\"></i> <span class=\"nav-label\">Patients</span></a>\n        </li>\n      <li [ngClass]=\"{active: activeRoute('settings')}\">\n        <a href=\"#\"><i class=\"fa fa-gear\"></i> <span class=\"nav-label\">Settings</span> <span class=\"fa arrow\"></span> </a>\n        <ul class=\"nav nav-second-level collapse\" [ngClass]=\"{in: activeRoute('settings')}\">\n\n          <li [ngClass]=\"{active: activeRoute('specialties')}\">\n              <a href=\"#\"><i class=\"fa fa-file-text-o\"></i> <span class=\"nav-label\">Specialties</span> <span class=\"fa arrow\"></span> </a>\n              <ul class=\"nav nav-third-level collapse\" [ngClass]=\"{in: activeRoute('specialties')}\">\n                <li [ngClass]=\"{active: activeRoute('specialties/1')}\"><a [routerLink]=\"['/settings/specialties/1']\">Doctors</a></li>\n                <li [ngClass]=\"{active: activeRoute('specialties/2')}\"><a [routerLink]=\"['/settings/specialties/2']\">Nurses</a></li>\n                <li [ngClass]=\"{active: activeRoute('specialties/3')}\"><a [routerLink]=\"['/settings/specialties/3']\">Laboratories</a></li>\n                <li [ngClass]=\"{active: activeRoute('specialties/4')}\"><a [routerLink]=\"['/settings/specialties/4']\">Radiographies</a></li>\n              </ul>\n            </li>\n          \n          <li [ngClass]=\"{active: activeRoute('priceranges')}\"><a [routerLink]=\"['/settings/priceranges']\">Price Ranges</a></li>\n          <li [ngClass]=\"{active: activeRoute('countries')}\"><a [routerLink]=\"['/settings/countries']\">Countries</a></li>\n          <li [ngClass]=\"{active: activeRoute('cities')}\"><a [routerLink]=\"['/settings/cities']\">Cities</a></li>\n        </ul>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./app/components/common/topnavbar/topnavbar.component.ts":
/*!****************************************************************!*\
  !*** ./app/components/common/topnavbar/topnavbar.component.ts ***!
  \****************************************************************/
/*! exports provided: TopNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavbarComponent", function() { return TopNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ "../node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.helpers */ "./app/app.helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopNavbarComponent = /** @class */ (function () {
    function TopNavbarComponent(oidcSecurityService) {
        this.oidcSecurityService = oidcSecurityService;
        this.isCollapsed = true;
        this.isAuthorized = false;
    }
    TopNavbarComponent.prototype.toggleNavigation = function () {
        jQuery('body').toggleClass('mini-navbar');
        Object(_app_helpers__WEBPACK_IMPORTED_MODULE_2__["smoothlyMenu"])();
    };
    TopNavbarComponent.prototype.login = function () {
        console.log('-------------- login');
        this.oidcSecurityService.authorize();
    };
    TopNavbarComponent.prototype.refreshSession = function () {
        console.log('-------------- refresh');
        this.oidcSecurityService.authorize();
    };
    TopNavbarComponent.prototype.logout = function () {
        console.log('-------------- logout');
        this.oidcSecurityService.logoff();
    };
    TopNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(function (isAuthorized) {
            _this.isAuthorized = isAuthorized;
        });
    };
    TopNavbarComponent.prototype.ngOnDestroy = function () {
        this.oidcSecurityService.onModuleSetup.unsubscribe();
    };
    TopNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-navbar',
            template: __webpack_require__(/*! ./topnavbar.template.html */ "./app/components/common/topnavbar/topnavbar.template.html")
        }),
        __metadata("design:paramtypes", [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["OidcSecurityService"]])
    ], TopNavbarComponent);
    return TopNavbarComponent;
}());



/***/ }),

/***/ "./app/components/common/topnavbar/topnavbar.template.html":
/*!*****************************************************************!*\
  !*** ./app/components/common/topnavbar/topnavbar.template.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n    <div class=\"navbar-header\">\n      <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n      <!--\n      <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"#\">\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n        </div>\n      </form>\n      -->\n    </div>\n    <ul class=\"nav navbar-top-links navbar-right\">\n      <!--\n      <li>\n        <a href=\"#\">\n          <i class=\"fa fa-sign-out\"></i> Log out\n        </a>\n      </li>\n      -->\n      <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"!isAuthorized\" (click)=\"login()\">Login</a></li>\n\n      <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"isAuthorized\" (click)=\"logout()\">Logout</a></li>\n      <!--\n      <li [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" *ngIf=\"!isAuthorized\" (click)=\"login()\"><span class=\"glyphicon glyphicon-user\"></span>LOGIN</a>\n      </li>\n      <li [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" *ngIf=\"isAuthorized\" (click)=\"logout()\"><span class='glyphicon glyphicon-log-out'></span>LOGOUT</a>\n      </li>\n      -->\n      \n    </ul>\n\n  </nav>\n</div>\n"

/***/ }),

/***/ "./app/components/common/topnavbar/topnavigationnavbar.component.ts":
/*!**************************************************************************!*\
  !*** ./app/components/common/topnavbar/topnavigationnavbar.component.ts ***!
  \**************************************************************************/
/*! exports provided: TopNavigationNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavigationNavbarComponent", function() { return TopNavigationNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ "../node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.helpers */ "./app/app.helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopNavigationNavbarComponent = /** @class */ (function () {
    function TopNavigationNavbarComponent(oidcSecurityService) {
        this.oidcSecurityService = oidcSecurityService;
        this.isCollapsed = true;
        this.isAuthorized = false;
        /*
        if (this.oidcSecurityService.moduleSetup) {
          this.doCallbackLogicIfRequired();
        } else {
          this.oidcSecurityService.onModuleSetup.subscribe(() => {
            this.doCallbackLogicIfRequired();
          });
        }
        */
    }
    TopNavigationNavbarComponent.prototype.toggleNavigation = function () {
        jQuery('body').toggleClass('mini-navbar');
        Object(_app_helpers__WEBPACK_IMPORTED_MODULE_2__["smoothlyMenu"])();
    };
    TopNavigationNavbarComponent.prototype.login = function () {
        console.log('-- login');
        this.oidcSecurityService.authorize();
    };
    TopNavigationNavbarComponent.prototype.logout = function () {
        console.log('-- logout');
        this.oidcSecurityService.logoff();
    };
    TopNavigationNavbarComponent.prototype.ngOnInit = function () {
        /*
        this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(
          (isAuthorized: boolean) => {
            this.isAuthorized = isAuthorized;
          });
          */
    };
    TopNavigationNavbarComponent.prototype.doCallbackLogicIfRequired = function () {
        if (window.location.hash) {
            this.oidcSecurityService.authorizedCallback();
        }
    };
    TopNavigationNavbarComponent.prototype.ngOnDestroy = function () {
        // this.oidcSecurityService.onModuleSetup.unsubscribe();
    };
    TopNavigationNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-navigationnav-bar',
            template: __webpack_require__(/*! ./topnavigationnavbar.template.html */ "./app/components/common/topnavbar/topnavigationnavbar.template.html")
        }),
        __metadata("design:paramtypes", [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["OidcSecurityService"]])
    ], TopNavigationNavbarComponent);
    return TopNavigationNavbarComponent;
}());



/***/ }),

/***/ "./app/components/common/topnavbar/topnavigationnavbar.template.html":
/*!***************************************************************************!*\
  !*** ./app/components/common/topnavbar/topnavigationnavbar.template.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom white-bg\">\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <button aria-controls=\"navbar\" aria-expanded=\"false\" data-target=\"#navbar\" data-toggle=\"collapse\" class=\"navbar-toggle collapsed\" type=\"button\">\n        <i class=\"fa fa-reorder\"></i>\n      </button>\n      <a href=\"#\" class=\"navbar-brand\">Inspinia</a>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"navbar\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a aria-expanded=\"false\" role=\"button\" [routerLink]=\"['/layoutsview']\"> Back to main Layout page</a>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\"  dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\" dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\" dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\" dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-top-links navbar-right\">\n        <li>\n          <a href=\"login.html\">\n            <i class=\"fa fa-sign-out\"></i> Log out\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./app/config.service.ts":
/*!*******************************!*\
  !*** ./app/config.service.ts ***!
  \*******************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ "../node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        // tslint:disable-next-line:no-output-on-prefix
        this.onConfigurationLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfigService.prototype.loadConfig = function (configUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        console.log('loadConfig from url: ' + configUrl);
                        return [4 /*yield*/, fetch(configUrl)];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        _a = this;
                        return [4 /*yield*/, response.json()];
                    case 2:
                        _a.config = _b.sent();
                        return [4 /*yield*/, this.loadSSOConfig(this.config.SSOAddress)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _b.sent();
                        console.error("ConfigService 'loadConfig' threw an error on calling " + configUrl, err_1);
                        this.onConfigurationLoaded.emit(false);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ConfigService.prototype.loadSSOConfig = function (stsServer) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        console.log('loadSSOConfig');
                        return [4 /*yield*/, fetch(stsServer + "/.well-known/openid-configuration")];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        _a = this;
                        return [4 /*yield*/, response.json()];
                    case 2:
                        _a.wellKnownEndpoints = _b.sent();
                        console.log(this.wellKnownEndpoints);
                        this.onConfigurationLoaded.emit(true);
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _b.sent();
                        console.error("ConfigService 'loadSSOConfig' threw an error on calling " + stsServer, err_2);
                        this.onConfigurationLoaded.emit(false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ConfigService.prototype.setupSSO = function (oidcSecurityService) {
        console.log('setupSSO');
        var c = new angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["OpenIDImplicitFlowConfiguration"]();
        c.stsServer = this.config.SSOAddress;
        c.redirect_url = window.location.origin;
        c.client_id = this.config.SSOClientId;
        c.response_type = 'id_token token';
        c.scope = 'openid profile email ';
        c.post_logout_redirect_uri = this.config.SSOAddress + '/Account/logout';
        c.forbidden_route = '/forbidden';
        c.unauthorized_route = '/unauthorized';
        c.auto_userinfo = true;
        c.log_console_warning_active = true;
        c.log_console_debug_active = true;
        c.max_id_token_iat_offset_allowed_in_seconds = 10;
        c.start_checksession = false;
        c.silent_renew = false;
        // c.post_login_route = this.configService.clientConfiguration.startup_route;
        var wn = new angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["AuthWellKnownEndpoints"]();
        wn.setWellKnownEndpoints(this.wellKnownEndpoints);
        oidcSecurityService.setupModule(c, wn);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ConfigService.prototype, "onConfigurationLoaded", void 0);
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./app/core/core.module.ts":
/*!*********************************!*\
  !*** ./app/core/core.module.ts ***!
  \*********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "./app/core/enums/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes */ "./app/core/pipes/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/* ------------------ Enums -------*/

var ENUMS = [
    _enums__WEBPACK_IMPORTED_MODULE_2__["Gender"],
    _enums__WEBPACK_IMPORTED_MODULE_2__["MaritalStatus"],
    _enums__WEBPACK_IMPORTED_MODULE_2__["UserType"],
    _enums__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"],
    _enums__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"],
    _enums__WEBPACK_IMPORTED_MODULE_2__["ProviderType"]
];
/* ------------------ Pipes -------*/

var PIPES = [
    _pipes__WEBPACK_IMPORTED_MODULE_3__["GenderStringPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_3__["MaritalStatusStringPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_3__["UserTypeStringPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_3__["RequestStatusStringPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_3__["PaymentMethodStringPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_3__["ProviderTypeStringPipe"]
];

var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: PIPES.slice(),
            declarations: PIPES.slice(),
            providers: [_services__WEBPACK_IMPORTED_MODULE_4__["PageService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./app/core/data/configuration.service.ts":
/*!************************************************!*\
  !*** ./app/core/data/configuration.service.ts ***!
  \************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    ConfigurationService.prototype.loadConfig = function () {
        var _this = this;
        return this.http.get('/api/v1/Configuration/ConfigurationData')
            .toPromise()
            .then(function (result) {
            _this.configuration = (result);
        }, function (error) { return console.error(error); });
    };
    Object.defineProperty(ConfigurationService.prototype, "apiAddress", {
        get: function () {
            return this.configuration.ApiAddress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationService.prototype, "identityServerAddress", {
        get: function () {
            return this.configuration.IdentityServerAddress;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./app/core/data/data-client.service.ts":
/*!**********************************************!*\
  !*** ./app/core/data/data-client.service.ts ***!
  \**********************************************/
/*! exports provided: API_BASE_URL, V1Client, CertificateClient, CityClient, ConfigurationClient, CountryClient, ExperienceClient, PatientClient, PricerangeClient, ProviderClient, RequestClient, StatusClient, SpecialtyClient, PagedResultOfCertificate, Certificate, PagedResultOfCity, City, PagedResultOfCountry, Country, PagedResultOfExperience, Experience, PagedResultOfPatient, Patient, PatientEdit, Audit, Address, CreditCard, PagedResultOfPriceRange, PriceRange, PagedResultOfProvider, Provider, ProviderEdit, Balance, Specialty, PagedResultOfRequest, Request, RequestEdit, PagedResultOfSpecialty, SwaggerException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V1Client", function() { return V1Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateClient", function() { return CertificateClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityClient", function() { return CityClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationClient", function() { return ConfigurationClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryClient", function() { return CountryClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceClient", function() { return ExperienceClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientClient", function() { return PatientClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricerangeClient", function() { return PricerangeClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderClient", function() { return ProviderClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestClient", function() { return RequestClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusClient", function() { return StatusClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtyClient", function() { return SpecialtyClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfCertificate", function() { return PagedResultOfCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Certificate", function() { return Certificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfCity", function() { return PagedResultOfCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfCountry", function() { return PagedResultOfCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfExperience", function() { return PagedResultOfExperience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return Experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfPatient", function() { return PagedResultOfPatient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientEdit", function() { return PatientEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audit", function() { return Audit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCard", function() { return CreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfPriceRange", function() { return PagedResultOfPriceRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceRange", function() { return PriceRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfProvider", function() { return PagedResultOfProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderEdit", function() { return ProviderEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Balance", function() { return Balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Specialty", function() { return Specialty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfRequest", function() { return PagedResultOfRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEdit", function() { return RequestEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfSpecialty", function() { return PagedResultOfSpecialty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerException", function() { return SwaggerException; });
/* harmony import */ var rxjs_add_observable_fromPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/fromPromise */ "../node_modules/rxjs-compat/_esm5/add/observable/fromPromise.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/of */ "../node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/throw */ "../node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "../node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "../node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "../node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Observable */ "../node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('API_BASE_URL');
var V1Client = /** @class */ (function () {
    function V1Client(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    V1Client.prototype.config = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/config";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processConfig(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processConfig(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    V1Client.prototype.processConfig = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    V1Client = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], String])
    ], V1Client);
    return V1Client;
}());

var CertificateClient = /** @class */ (function () {
    function CertificateClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @pageIndex (optional)
     * @pageSize (optional)
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    CertificateClient.prototype.page = function (pageIndex, pageSize, flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/certificate/page?";
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processPage(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processPage(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CertificateClient.prototype.processPage = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultOfCertificate.fromJS(resultData200) : new PagedResultOfCertificate();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    CertificateClient.prototype.all = function (flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/certificate/all?";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAll(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CertificateClient.prototype.processAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                        var item = resultData200_1[_i];
                        result200.push(Certificate.fromJS(item));
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    CertificateClient.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/certificate/get/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CertificateClient.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Certificate.fromJS(resultData200) : new Certificate();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @pageIndex (optional)
     * @pageSize (optional)
     * @all (optional)
     * @return Success
     */
    CertificateClient.prototype.provider = function (id, pageIndex, pageSize, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/certificate/provider/{id}?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processProvider(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processProvider(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CertificateClient.prototype.processProvider = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultOfCertificate.fromJS(resultData200) : new PagedResultOfCertificate();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    CertificateClient.prototype.create = function (item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/certificate/create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CertificateClient.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    CertificateClient.prototype.save = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/certificate/save/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processSave(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processSave(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CertificateClient.prototype.processSave = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    CertificateClient.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/certificate/delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("delete", url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CertificateClient.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    CertificateClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], String])
    ], CertificateClient);
    return CertificateClient;
}());

var CityClient = /** @class */ (function () {
    function CityClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @pageIndex (optional)
     * @pageSize (optional)
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    CityClient.prototype.page = function (pageIndex, pageSize, flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/city/page?";
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processPage(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processPage(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CityClient.prototype.processPage = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultOfCity.fromJS(resultData200) : new PagedResultOfCity();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    CityClient.prototype.all = function (flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/city/all?";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAll(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CityClient.prototype.processAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_2 = resultData200; _i < resultData200_2.length; _i++) {
                        var item = resultData200_2[_i];
                        result200.push(City.fromJS(item));
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    CityClient.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/city/get/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CityClient.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? City.fromJS(resultData200) : new City();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    CityClient.prototype.create = function (item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/city/create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CityClient.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    CityClient.prototype.save = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/city/save/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processSave(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processSave(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CityClient.prototype.processSave = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    CityClient.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/city/delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("delete", url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CityClient.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    CityClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], String])
    ], CityClient);
    return CityClient;
}());

var ConfigurationClient = /** @class */ (function () {
    function ConfigurationClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    ConfigurationClient.prototype.configurationdata = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/configuration/configurationdata";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processConfigurationdata(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processConfigurationdata(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ConfigurationClient.prototype.processConfigurationdata = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    ConfigurationClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], String])
    ], ConfigurationClient);
    return ConfigurationClient;
}());

var CountryClient = /** @class */ (function () {
    function CountryClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @pageIndex (optional)
     * @pageSize (optional)
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    CountryClient.prototype.page = function (pageIndex, pageSize, flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/country/page?";
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processPage(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processPage(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CountryClient.prototype.processPage = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultOfCountry.fromJS(resultData200) : new PagedResultOfCountry();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    CountryClient.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/country/get/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CountryClient.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Country.fromJS(resultData200) : new Country();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    CountryClient.prototype.all = function (flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/country/all?";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAll(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CountryClient.prototype.processAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_3 = resultData200; _i < resultData200_3.length; _i++) {
                        var item = resultData200_3[_i];
                        result200.push(Country.fromJS(item));
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    CountryClient.prototype.cities = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/country/{id}/cities";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processCities(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCities(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CountryClient.prototype.processCities = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_4 = resultData200; _i < resultData200_4.length; _i++) {
                        var item = resultData200_4[_i];
                        result200.push(City.fromJS(item));
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    CountryClient.prototype.create = function (item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/country/create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CountryClient.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    CountryClient.prototype.save = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/country/save/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processSave(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processSave(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CountryClient.prototype.processSave = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    CountryClient.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/country/delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("delete", url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    CountryClient.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    CountryClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], String])
    ], CountryClient);
    return CountryClient;
}());

var ExperienceClient = /** @class */ (function () {
    function ExperienceClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @pageIndex (optional)
     * @pageSize (optional)
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    ExperienceClient.prototype.page = function (pageIndex, pageSize, flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/experience/page?";
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processPage(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processPage(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ExperienceClient.prototype.processPage = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultOfExperience.fromJS(resultData200) : new PagedResultOfExperience();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    ExperienceClient.prototype.all = function (flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/experience/all?";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAll(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ExperienceClient.prototype.processAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_5 = resultData200; _i < resultData200_5.length; _i++) {
                        var item = resultData200_5[_i];
                        result200.push(Experience.fromJS(item));
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    ExperienceClient.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/experience/get/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ExperienceClient.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Experience.fromJS(resultData200) : new Experience();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @pageIndex (optional)
     * @pageSize (optional)
     * @all (optional)
     * @return Success
     */
    ExperienceClient.prototype.provider = function (id, pageIndex, pageSize, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/experience/provider/{id}?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processProvider(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processProvider(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ExperienceClient.prototype.processProvider = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultOfExperience.fromJS(resultData200) : new PagedResultOfExperience();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    ExperienceClient.prototype.create = function (item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/experience/create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ExperienceClient.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    ExperienceClient.prototype.save = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/experience/save/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processSave(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processSave(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ExperienceClient.prototype.processSave = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    ExperienceClient.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/experience/delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("delete", url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ExperienceClient.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    ExperienceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], String])
    ], ExperienceClient);
    return ExperienceClient;
}());

var PatientClient = /** @class */ (function () {
    function PatientClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @pageIndex (optional)
     * @pageSize (optional)
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    PatientClient.prototype.page = function (pageIndex, pageSize, flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/page?";
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processPage(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processPage(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processPage = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultOfPatient.fromJS(resultData200) : new PagedResultOfPatient();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    PatientClient.prototype.all = function (flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/all?";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAll(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_6 = resultData200; _i < resultData200_6.length; _i++) {
                        var item = resultData200_6[_i];
                        result200.push(Patient.fromJS(item));
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    PatientClient.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/get/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PatientEdit.fromJS(resultData200) : new PatientEdit();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    PatientClient.prototype.create = function (item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    PatientClient.prototype.save = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/save/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processSave(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processSave(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processSave = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    PatientClient.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("delete", url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    PatientClient.prototype.auditPut = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/{id}/audit";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processAuditPut(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAuditPut(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processAuditPut = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    PatientClient.prototype.auditPost = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/{id}/audit";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processAuditPost(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAuditPost(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processAuditPost = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    PatientClient.prototype.addressGet = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/{id}/address";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processAddressGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAddressGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processAddressGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Address.fromJS(resultData200) : new Address();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    PatientClient.prototype.addressPut = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/{id}/address";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processAddressPut(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAddressPut(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processAddressPut = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    PatientClient.prototype.addressPost = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/{id}/address";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processAddressPost(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAddressPost(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processAddressPost = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    PatientClient.prototype.ccGet = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/{id}/cc";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processCcGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCcGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processCcGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? CreditCard.fromJS(resultData200) : new CreditCard();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    PatientClient.prototype.ccPut = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/{id}/cc";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processCcPut(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCcPut(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processCcPut = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    PatientClient.prototype.ccPost = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/patient/{id}/cc";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processCcPost(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCcPost(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PatientClient.prototype.processCcPost = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    PatientClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], String])
    ], PatientClient);
    return PatientClient;
}());

var PricerangeClient = /** @class */ (function () {
    function PricerangeClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @pageIndex (optional)
     * @pageSize (optional)
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    PricerangeClient.prototype.page = function (pageIndex, pageSize, flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/pricerange/page?";
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processPage(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processPage(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PricerangeClient.prototype.processPage = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultOfPriceRange.fromJS(resultData200) : new PagedResultOfPriceRange();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    PricerangeClient.prototype.all = function (flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/pricerange/all?";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAll(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PricerangeClient.prototype.processAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_7 = resultData200; _i < resultData200_7.length; _i++) {
                        var item = resultData200_7[_i];
                        result200.push(PriceRange.fromJS(item));
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    PricerangeClient.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/pricerange/get/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PricerangeClient.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PriceRange.fromJS(resultData200) : new PriceRange();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    PricerangeClient.prototype.create = function (item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/pricerange/create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PricerangeClient.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    PricerangeClient.prototype.save = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/pricerange/save/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processSave(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processSave(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PricerangeClient.prototype.processSave = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    PricerangeClient.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/pricerange/delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("delete", url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    PricerangeClient.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    PricerangeClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], String])
    ], PricerangeClient);
    return PricerangeClient;
}());

var ProviderClient = /** @class */ (function () {
    function ProviderClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @pageIndex (optional)
     * @pageSize (optional)
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    ProviderClient.prototype.page = function (pageIndex, pageSize, flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/page?";
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processPage(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processPage(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processPage = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultOfProvider.fromJS(resultData200) : new PagedResultOfProvider();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    ProviderClient.prototype.all = function (flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/all?";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAll(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_8 = resultData200; _i < resultData200_8.length; _i++) {
                        var item = resultData200_8[_i];
                        result200.push(Provider.fromJS(item));
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    ProviderClient.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/get/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? ProviderEdit.fromJS(resultData200) : new ProviderEdit();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    ProviderClient.prototype.create = function (item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    ProviderClient.prototype.save = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/save/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processSave(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processSave(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processSave = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    ProviderClient.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("delete", url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    ProviderClient.prototype.auditGet = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/{id}/audit";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processAuditGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAuditGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processAuditGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Audit.fromJS(resultData200) : new Audit();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    ProviderClient.prototype.auditPut = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/{id}/audit";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processAuditPut(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAuditPut(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processAuditPut = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    ProviderClient.prototype.auditPost = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/{id}/audit";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processAuditPost(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAuditPost(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processAuditPost = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    ProviderClient.prototype.addressGet = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/{id}/address";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processAddressGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAddressGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processAddressGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Address.fromJS(resultData200) : new Address();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    ProviderClient.prototype.addressPut = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/{id}/address";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processAddressPut(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAddressPut(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processAddressPut = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    ProviderClient.prototype.addressPost = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/{id}/address";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processAddressPost(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAddressPost(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processAddressPost = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    ProviderClient.prototype.balance = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/{id}/balance";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processBalance(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processBalance(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processBalance = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Balance.fromJS(resultData200) : new Balance();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @all (optional)
     * @return Success
     */
    ProviderClient.prototype.certificates = function (id, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/{id}/certificates?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processCertificates(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCertificates(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processCertificates = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_9 = resultData200; _i < resultData200_9.length; _i++) {
                        var item = resultData200_9[_i];
                        result200.push(Certificate.fromJS(item));
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @all (optional)
     * @return Success
     */
    ProviderClient.prototype.experiences = function (id, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/{id}/experiences?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processExperiences(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processExperiences(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processExperiences = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_10 = resultData200; _i < resultData200_10.length; _i++) {
                        var item = resultData200_10[_i];
                        result200.push(Experience.fromJS(item));
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @all (optional)
     * @return Success
     */
    ProviderClient.prototype.specialties = function (id, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/provider/{id}/specialties?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processSpecialties(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processSpecialties(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processSpecialties = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_11 = resultData200; _i < resultData200_11.length; _i++) {
                        var item = resultData200_11[_i];
                        result200.push(Specialty.fromJS(item));
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    ProviderClient.prototype.count = function (type) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/request/provider/{type}/count";
        if (type === undefined || type === null)
            throw new Error("The parameter 'type' must be defined.");
        url_ = url_.replace("{type}", encodeURIComponent("" + type));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processCount(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCount(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    ProviderClient.prototype.processCount = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    ProviderClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], String])
    ], ProviderClient);
    return ProviderClient;
}());

var RequestClient = /** @class */ (function () {
    function RequestClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @pageIndex (optional)
     * @pageSize (optional)
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    RequestClient.prototype.page = function (pageIndex, pageSize, flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/request/page?";
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processPage(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processPage(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    RequestClient.prototype.processPage = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultOfRequest.fromJS(resultData200) : new PagedResultOfRequest();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    RequestClient.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/request/get/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    RequestClient.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? RequestEdit.fromJS(resultData200) : new RequestEdit();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    RequestClient.prototype.create = function (item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/request/create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    RequestClient.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    RequestClient.prototype.save = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/request/save/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processSave(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processSave(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    RequestClient.prototype.processSave = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    RequestClient.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/request/delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("delete", url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    RequestClient.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    RequestClient.prototype.approve = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/request/approve/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processApprove(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processApprove(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    RequestClient.prototype.processApprove = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    RequestClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], String])
    ], RequestClient);
    return RequestClient;
}());

var StatusClient = /** @class */ (function () {
    function StatusClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    StatusClient.prototype.count = function (status) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/request/status/{status}/count";
        if (status === undefined || status === null)
            throw new Error("The parameter 'status' must be defined.");
        url_ = url_.replace("{status}", encodeURIComponent("" + status));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processCount(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCount(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    StatusClient.prototype.processCount = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    StatusClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], String])
    ], StatusClient);
    return StatusClient;
}());

var SpecialtyClient = /** @class */ (function () {
    function SpecialtyClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @pageIndex (optional)
     * @pageSize (optional)
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    SpecialtyClient.prototype.page = function (pageIndex, pageSize, flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/specialty/page?";
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processPage(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processPage(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    SpecialtyClient.prototype.processPage = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? PagedResultOfSpecialty.fromJS(resultData200) : new PagedResultOfSpecialty();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @flag (optional)
     * @all (optional)
     * @return Success
     */
    SpecialtyClient.prototype.all = function (flag, all) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/specialty/all?";
        if (flag !== undefined)
            url_ += "flag=" + encodeURIComponent("" + flag) + "&";
        if (all !== undefined)
            url_ += "all=" + encodeURIComponent("" + all) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processAll(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    SpecialtyClient.prototype.processAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_12 = resultData200; _i < resultData200_12.length; _i++) {
                        var item = resultData200_12[_i];
                        result200.push(Specialty.fromJS(item));
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    SpecialtyClient.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/specialty/get/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    SpecialtyClient.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Specialty.fromJS(resultData200) : new Specialty();
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(result200);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    SpecialtyClient.prototype.create = function (item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/specialty/create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    SpecialtyClient.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @item (optional)
     * @return Success
     */
    SpecialtyClient.prototype.save = function (id, item) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/specialty/save/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(item);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).flatMap(function (response_) {
            return _this.processSave(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processSave(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    SpecialtyClient.prototype.processSave = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    /**
     * @return Success
     */
    SpecialtyClient.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/v1/specialty/delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("delete", url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(e);
                }
            }
            else
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(response_);
        });
    };
    SpecialtyClient.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
            });
        }
        else if (status === 404) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status === 400) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("A server error occurred.", status, _responseText, _headers);
            });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).flatMap(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(null);
    };
    SpecialtyClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], String])
    ], SpecialtyClient);
    return SpecialtyClient;
}());

var PagedResultOfCertificate = /** @class */ (function () {
    function PagedResultOfCertificate(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultOfCertificate.prototype.init = function (data) {
        if (data) {
            this.pageIndex = data["pageIndex"];
            this.pageSize = data["pageSize"];
            this.count = data["count"];
            this.pageCount = data["pageCount"];
            if (data["result"] && data["result"].constructor === Array) {
                this.result = [];
                for (var _i = 0, _a = data["result"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.result.push(Certificate.fromJS(item));
                }
            }
        }
    };
    PagedResultOfCertificate.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PagedResultOfCertificate();
        result.init(data);
        return result;
    };
    PagedResultOfCertificate.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["pageIndex"] = this.pageIndex;
        data["pageSize"] = this.pageSize;
        data["count"] = this.count;
        data["pageCount"] = this.pageCount;
        if (this.result && this.result.constructor === Array) {
            data["result"] = [];
            for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
                var item = _a[_i];
                data["result"].push(item.toJSON());
            }
        }
        return data;
    };
    return PagedResultOfCertificate;
}());

var Certificate = /** @class */ (function () {
    function Certificate(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Certificate.prototype.init = function (data) {
        if (data) {
            this.providerId = data["providerId"];
            this.notes = data["notes"];
            this.notesArabic = data["notesArabic"];
            this.dateFrom = data["dateFrom"] ? new Date(data["dateFrom"].toString()) : undefined;
            this.dateTo = data["dateTo"] ? new Date(data["dateTo"].toString()) : undefined;
            this.name = data["name"];
            this.nameArabic = data["nameArabic"];
            this.rank = data["rank"];
            this.isEnabled = data["isEnabled"];
            this.id = data["id"];
        }
    };
    Certificate.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Certificate();
        result.init(data);
        return result;
    };
    Certificate.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["providerId"] = this.providerId;
        data["notes"] = this.notes;
        data["notesArabic"] = this.notesArabic;
        data["dateFrom"] = this.dateFrom ? this.dateFrom.toISOString() : undefined;
        data["dateTo"] = this.dateTo ? this.dateTo.toISOString() : undefined;
        data["name"] = this.name;
        data["nameArabic"] = this.nameArabic;
        data["rank"] = this.rank;
        data["isEnabled"] = this.isEnabled;
        data["id"] = this.id;
        return data;
    };
    return Certificate;
}());

var PagedResultOfCity = /** @class */ (function () {
    function PagedResultOfCity(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultOfCity.prototype.init = function (data) {
        if (data) {
            this.pageIndex = data["pageIndex"];
            this.pageSize = data["pageSize"];
            this.count = data["count"];
            this.pageCount = data["pageCount"];
            if (data["result"] && data["result"].constructor === Array) {
                this.result = [];
                for (var _i = 0, _a = data["result"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.result.push(City.fromJS(item));
                }
            }
        }
    };
    PagedResultOfCity.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PagedResultOfCity();
        result.init(data);
        return result;
    };
    PagedResultOfCity.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["pageIndex"] = this.pageIndex;
        data["pageSize"] = this.pageSize;
        data["count"] = this.count;
        data["pageCount"] = this.pageCount;
        if (this.result && this.result.constructor === Array) {
            data["result"] = [];
            for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
                var item = _a[_i];
                data["result"].push(item.toJSON());
            }
        }
        return data;
    };
    return PagedResultOfCity;
}());

var City = /** @class */ (function () {
    function City(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    City.prototype.init = function (data) {
        if (data) {
            this.countryId = data["countryId"];
            this.countryName = data["countryName"];
            this.latitude = data["latitude"];
            this.longitude = data["longitude"];
            this.name = data["name"];
            this.nameArabic = data["nameArabic"];
            this.rank = data["rank"];
            this.isEnabled = data["isEnabled"];
            this.id = data["id"];
        }
    };
    City.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new City();
        result.init(data);
        return result;
    };
    City.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["countryId"] = this.countryId;
        data["countryName"] = this.countryName;
        data["latitude"] = this.latitude;
        data["longitude"] = this.longitude;
        data["name"] = this.name;
        data["nameArabic"] = this.nameArabic;
        data["rank"] = this.rank;
        data["isEnabled"] = this.isEnabled;
        data["id"] = this.id;
        return data;
    };
    return City;
}());

var PagedResultOfCountry = /** @class */ (function () {
    function PagedResultOfCountry(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultOfCountry.prototype.init = function (data) {
        if (data) {
            this.pageIndex = data["pageIndex"];
            this.pageSize = data["pageSize"];
            this.count = data["count"];
            this.pageCount = data["pageCount"];
            if (data["result"] && data["result"].constructor === Array) {
                this.result = [];
                for (var _i = 0, _a = data["result"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.result.push(Country.fromJS(item));
                }
            }
        }
    };
    PagedResultOfCountry.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PagedResultOfCountry();
        result.init(data);
        return result;
    };
    PagedResultOfCountry.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["pageIndex"] = this.pageIndex;
        data["pageSize"] = this.pageSize;
        data["count"] = this.count;
        data["pageCount"] = this.pageCount;
        if (this.result && this.result.constructor === Array) {
            data["result"] = [];
            for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
                var item = _a[_i];
                data["result"].push(item.toJSON());
            }
        }
        return data;
    };
    return PagedResultOfCountry;
}());

var Country = /** @class */ (function () {
    function Country(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Country.prototype.init = function (data) {
        if (data) {
            this.code = data["code"];
            this.code2 = data["code2"];
            this.name = data["name"];
            this.nameArabic = data["nameArabic"];
            this.rank = data["rank"];
            this.isEnabled = data["isEnabled"];
            this.id = data["id"];
        }
    };
    Country.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Country();
        result.init(data);
        return result;
    };
    Country.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["code"] = this.code;
        data["code2"] = this.code2;
        data["name"] = this.name;
        data["nameArabic"] = this.nameArabic;
        data["rank"] = this.rank;
        data["isEnabled"] = this.isEnabled;
        data["id"] = this.id;
        return data;
    };
    return Country;
}());

var PagedResultOfExperience = /** @class */ (function () {
    function PagedResultOfExperience(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultOfExperience.prototype.init = function (data) {
        if (data) {
            this.pageIndex = data["pageIndex"];
            this.pageSize = data["pageSize"];
            this.count = data["count"];
            this.pageCount = data["pageCount"];
            if (data["result"] && data["result"].constructor === Array) {
                this.result = [];
                for (var _i = 0, _a = data["result"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.result.push(Experience.fromJS(item));
                }
            }
        }
    };
    PagedResultOfExperience.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PagedResultOfExperience();
        result.init(data);
        return result;
    };
    PagedResultOfExperience.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["pageIndex"] = this.pageIndex;
        data["pageSize"] = this.pageSize;
        data["count"] = this.count;
        data["pageCount"] = this.pageCount;
        if (this.result && this.result.constructor === Array) {
            data["result"] = [];
            for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
                var item = _a[_i];
                data["result"].push(item.toJSON());
            }
        }
        return data;
    };
    return PagedResultOfExperience;
}());

var Experience = /** @class */ (function () {
    function Experience(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Experience.prototype.init = function (data) {
        if (data) {
            this.providerId = data["providerId"];
            this.notes = data["notes"];
            this.notesArabic = data["notesArabic"];
            this.dateFrom = data["dateFrom"] ? new Date(data["dateFrom"].toString()) : undefined;
            this.dateTo = data["dateTo"] ? new Date(data["dateTo"].toString()) : undefined;
            this.name = data["name"];
            this.nameArabic = data["nameArabic"];
            this.rank = data["rank"];
            this.isEnabled = data["isEnabled"];
            this.id = data["id"];
        }
    };
    Experience.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Experience();
        result.init(data);
        return result;
    };
    Experience.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["providerId"] = this.providerId;
        data["notes"] = this.notes;
        data["notesArabic"] = this.notesArabic;
        data["dateFrom"] = this.dateFrom ? this.dateFrom.toISOString() : undefined;
        data["dateTo"] = this.dateTo ? this.dateTo.toISOString() : undefined;
        data["name"] = this.name;
        data["nameArabic"] = this.nameArabic;
        data["rank"] = this.rank;
        data["isEnabled"] = this.isEnabled;
        data["id"] = this.id;
        return data;
    };
    return Experience;
}());

var PagedResultOfPatient = /** @class */ (function () {
    function PagedResultOfPatient(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultOfPatient.prototype.init = function (data) {
        if (data) {
            this.pageIndex = data["pageIndex"];
            this.pageSize = data["pageSize"];
            this.count = data["count"];
            this.pageCount = data["pageCount"];
            if (data["result"] && data["result"].constructor === Array) {
                this.result = [];
                for (var _i = 0, _a = data["result"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.result.push(Patient.fromJS(item));
                }
            }
        }
    };
    PagedResultOfPatient.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PagedResultOfPatient();
        result.init(data);
        return result;
    };
    PagedResultOfPatient.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["pageIndex"] = this.pageIndex;
        data["pageSize"] = this.pageSize;
        data["count"] = this.count;
        data["pageCount"] = this.pageCount;
        if (this.result && this.result.constructor === Array) {
            data["result"] = [];
            for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
                var item = _a[_i];
                data["result"].push(item.toJSON());
            }
        }
        return data;
    };
    return PagedResultOfPatient;
}());

var Patient = /** @class */ (function () {
    function Patient(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Patient.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.givenName = data["givenName"];
            this.familyName = data["familyName"];
            this.isEnabled = data["isEnabled"];
            this.age = data["age"];
            this.gender = data["gender"];
            this.maritalStatus = data["maritalStatus"];
            this.id = data["id"];
        }
    };
    Patient.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Patient();
        result.init(data);
        return result;
    };
    Patient.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["givenName"] = this.givenName;
        data["familyName"] = this.familyName;
        data["isEnabled"] = this.isEnabled;
        data["age"] = this.age;
        data["gender"] = this.gender;
        data["maritalStatus"] = this.maritalStatus;
        data["id"] = this.id;
        return data;
    };
    return Patient;
}());

var PatientEdit = /** @class */ (function () {
    function PatientEdit(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PatientEdit.prototype.init = function (data) {
        if (data) {
            this.userId = data["userId"];
            this.givenName = data["givenName"];
            this.familyName = data["familyName"];
            this.isEnabled = data["isEnabled"];
            this.birthDate = data["birthDate"] ? new Date(data["birthDate"].toString()) : undefined;
            this.gender = data["gender"];
            this.maritalStatus = data["maritalStatus"];
            this.id = data["id"];
        }
    };
    PatientEdit.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PatientEdit();
        result.init(data);
        return result;
    };
    PatientEdit.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["givenName"] = this.givenName;
        data["familyName"] = this.familyName;
        data["isEnabled"] = this.isEnabled;
        data["birthDate"] = this.birthDate ? this.birthDate.toISOString() : undefined;
        data["gender"] = this.gender;
        data["maritalStatus"] = this.maritalStatus;
        data["id"] = this.id;
        return data;
    };
    return PatientEdit;
}());

var Audit = /** @class */ (function () {
    function Audit(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Audit.prototype.init = function (data) {
        if (data) {
            this.ip = data["ip"];
            this.joinDate = data["joinDate"] ? new Date(data["joinDate"].toString()) : undefined;
            this.createdBy = data["createdBy"];
            this.editedBy = data["editedBy"];
            this.id = data["id"];
        }
    };
    Audit.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Audit();
        result.init(data);
        return result;
    };
    Audit.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["ip"] = this.ip;
        data["joinDate"] = this.joinDate ? this.joinDate.toISOString() : undefined;
        data["createdBy"] = this.createdBy;
        data["editedBy"] = this.editedBy;
        data["id"] = this.id;
        return data;
    };
    return Audit;
}());

var Address = /** @class */ (function () {
    function Address(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Address.prototype.init = function (data) {
        if (data) {
            this.street = data["street"];
            this.latitude = data["latitude"];
            this.longitude = data["longitude"];
            this.postCode = data["postCode"];
            this.updatedAt = data["updatedAt"] ? new Date(data["updatedAt"].toString()) : undefined;
            this.cityId = data["cityId"];
            this.cityName = data["cityName"];
            this.cityNameArabic = data["cityNameArabic"];
            this.id = data["id"];
        }
    };
    Address.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Address();
        result.init(data);
        return result;
    };
    Address.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["street"] = this.street;
        data["latitude"] = this.latitude;
        data["longitude"] = this.longitude;
        data["postCode"] = this.postCode;
        data["updatedAt"] = this.updatedAt ? this.updatedAt.toISOString() : undefined;
        data["cityId"] = this.cityId;
        data["cityName"] = this.cityName;
        data["cityNameArabic"] = this.cityNameArabic;
        data["id"] = this.id;
        return data;
    };
    return Address;
}());

var CreditCard = /** @class */ (function () {
    function CreditCard(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreditCard.prototype.init = function (data) {
        if (data) {
            this.cardNumber = data["cardNumber"];
            this.securityNumber = data["securityNumber"];
            this.expiration = data["expiration"];
            this.cardHolderName = data["cardHolderName"];
            this.cardType = data["cardType"];
            this.street = data["street"];
            this.city = data["city"];
            this.country = data["country"];
            this.zipCode = data["zipCode"];
            this.id = data["id"];
        }
    };
    CreditCard.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreditCard();
        result.init(data);
        return result;
    };
    CreditCard.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["cardNumber"] = this.cardNumber;
        data["securityNumber"] = this.securityNumber;
        data["expiration"] = this.expiration;
        data["cardHolderName"] = this.cardHolderName;
        data["cardType"] = this.cardType;
        data["street"] = this.street;
        data["city"] = this.city;
        data["country"] = this.country;
        data["zipCode"] = this.zipCode;
        data["id"] = this.id;
        return data;
    };
    return CreditCard;
}());

var PagedResultOfPriceRange = /** @class */ (function () {
    function PagedResultOfPriceRange(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultOfPriceRange.prototype.init = function (data) {
        if (data) {
            this.pageIndex = data["pageIndex"];
            this.pageSize = data["pageSize"];
            this.count = data["count"];
            this.pageCount = data["pageCount"];
            if (data["result"] && data["result"].constructor === Array) {
                this.result = [];
                for (var _i = 0, _a = data["result"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.result.push(PriceRange.fromJS(item));
                }
            }
        }
    };
    PagedResultOfPriceRange.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PagedResultOfPriceRange();
        result.init(data);
        return result;
    };
    PagedResultOfPriceRange.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["pageIndex"] = this.pageIndex;
        data["pageSize"] = this.pageSize;
        data["count"] = this.count;
        data["pageCount"] = this.pageCount;
        if (this.result && this.result.constructor === Array) {
            data["result"] = [];
            for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
                var item = _a[_i];
                data["result"].push(item.toJSON());
            }
        }
        return data;
    };
    return PagedResultOfPriceRange;
}());

var PriceRange = /** @class */ (function () {
    function PriceRange(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PriceRange.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.nameArabic = data["nameArabic"];
            this.rank = data["rank"];
            this.isEnabled = data["isEnabled"];
            this.id = data["id"];
        }
    };
    PriceRange.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PriceRange();
        result.init(data);
        return result;
    };
    PriceRange.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["nameArabic"] = this.nameArabic;
        data["rank"] = this.rank;
        data["isEnabled"] = this.isEnabled;
        data["id"] = this.id;
        return data;
    };
    return PriceRange;
}());

var PagedResultOfProvider = /** @class */ (function () {
    function PagedResultOfProvider(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultOfProvider.prototype.init = function (data) {
        if (data) {
            this.pageIndex = data["pageIndex"];
            this.pageSize = data["pageSize"];
            this.count = data["count"];
            this.pageCount = data["pageCount"];
            if (data["result"] && data["result"].constructor === Array) {
                this.result = [];
                for (var _i = 0, _a = data["result"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.result.push(Provider.fromJS(item));
                }
            }
        }
    };
    PagedResultOfProvider.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PagedResultOfProvider();
        result.init(data);
        return result;
    };
    PagedResultOfProvider.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["pageIndex"] = this.pageIndex;
        data["pageSize"] = this.pageSize;
        data["count"] = this.count;
        data["pageCount"] = this.pageCount;
        if (this.result && this.result.constructor === Array) {
            data["result"] = [];
            for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
                var item = _a[_i];
                data["result"].push(item.toJSON());
            }
        }
        return data;
    };
    return PagedResultOfProvider;
}());

var Provider = /** @class */ (function () {
    function Provider(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Provider.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.givenName = data["givenName"];
            this.familyName = data["familyName"];
            this.rank = data["rank"];
            this.isEnabled = data["isEnabled"];
            this.gender = data["gender"];
            this.providerType = data["providerType"];
            this.id = data["id"];
        }
    };
    Provider.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Provider();
        result.init(data);
        return result;
    };
    Provider.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["givenName"] = this.givenName;
        data["familyName"] = this.familyName;
        data["rank"] = this.rank;
        data["isEnabled"] = this.isEnabled;
        data["gender"] = this.gender;
        data["providerType"] = this.providerType;
        data["id"] = this.id;
        return data;
    };
    return Provider;
}());

var ProviderEdit = /** @class */ (function () {
    function ProviderEdit(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ProviderEdit.prototype.init = function (data) {
        if (data) {
            this.userId = data["userId"];
            this.rank = data["rank"];
            this.isEnabled = data["isEnabled"];
            this.providerType = data["providerType"];
            this.givenName = data["givenName"];
            this.familyName = data["familyName"];
            this.gender = data["gender"];
            this.id = data["id"];
        }
    };
    ProviderEdit.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ProviderEdit();
        result.init(data);
        return result;
    };
    ProviderEdit.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["rank"] = this.rank;
        data["isEnabled"] = this.isEnabled;
        data["providerType"] = this.providerType;
        data["givenName"] = this.givenName;
        data["familyName"] = this.familyName;
        data["gender"] = this.gender;
        data["id"] = this.id;
        return data;
    };
    return ProviderEdit;
}());

var Balance = /** @class */ (function () {
    function Balance(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Balance.prototype.init = function (data) {
        if (data) {
            this.profileId = data["profileId"];
            this.outstanding = data["outstanding"];
            this.total = data["total"];
            this.updatedAt = data["updatedAt"] ? new Date(data["updatedAt"].toString()) : undefined;
            this.name = data["name"];
            this.nameArabic = data["nameArabic"];
            this.rank = data["rank"];
            this.isEnabled = data["isEnabled"];
            this.id = data["id"];
        }
    };
    Balance.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Balance();
        result.init(data);
        return result;
    };
    Balance.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["profileId"] = this.profileId;
        data["outstanding"] = this.outstanding;
        data["total"] = this.total;
        data["updatedAt"] = this.updatedAt ? this.updatedAt.toISOString() : undefined;
        data["name"] = this.name;
        data["nameArabic"] = this.nameArabic;
        data["rank"] = this.rank;
        data["isEnabled"] = this.isEnabled;
        data["id"] = this.id;
        return data;
    };
    return Balance;
}());

var Specialty = /** @class */ (function () {
    function Specialty(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Specialty.prototype.init = function (data) {
        if (data) {
            this.providerType = data["providerType"];
            this.name = data["name"];
            this.nameArabic = data["nameArabic"];
            this.rank = data["rank"];
            this.isEnabled = data["isEnabled"];
            this.id = data["id"];
        }
    };
    Specialty.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Specialty();
        result.init(data);
        return result;
    };
    Specialty.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["providerType"] = this.providerType;
        data["name"] = this.name;
        data["nameArabic"] = this.nameArabic;
        data["rank"] = this.rank;
        data["isEnabled"] = this.isEnabled;
        data["id"] = this.id;
        return data;
    };
    return Specialty;
}());

var PagedResultOfRequest = /** @class */ (function () {
    function PagedResultOfRequest(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultOfRequest.prototype.init = function (data) {
        if (data) {
            this.pageIndex = data["pageIndex"];
            this.pageSize = data["pageSize"];
            this.count = data["count"];
            this.pageCount = data["pageCount"];
            if (data["result"] && data["result"].constructor === Array) {
                this.result = [];
                for (var _i = 0, _a = data["result"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.result.push(Request.fromJS(item));
                }
            }
        }
    };
    PagedResultOfRequest.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PagedResultOfRequest();
        result.init(data);
        return result;
    };
    PagedResultOfRequest.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["pageIndex"] = this.pageIndex;
        data["pageSize"] = this.pageSize;
        data["count"] = this.count;
        data["pageCount"] = this.pageCount;
        if (this.result && this.result.constructor === Array) {
            data["result"] = [];
            for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
                var item = _a[_i];
                data["result"].push(item.toJSON());
            }
        }
        return data;
    };
    return PagedResultOfRequest;
}());

var Request = /** @class */ (function () {
    function Request(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Request.prototype.init = function (data) {
        if (data) {
            this.patientName = data["patientName"];
            this.providerName = data["providerName"];
            this.specialty = data["specialty"];
            this.priceRange = data["priceRange"];
            this.dayKey = data["dayKey"];
            this.status = data["status"];
            this.providerType = data["providerType"];
            this.isClosed = data["isClosed"];
            this.requestDate = data["requestDate"] ? new Date(data["requestDate"].toString()) : undefined;
            this.visitDate = data["visitDate"] ? new Date(data["visitDate"].toString()) : undefined;
            this.closeDate = data["closeDate"] ? new Date(data["closeDate"].toString()) : undefined;
            this.cost = data["cost"];
            this.approvedBy = data["approvedBy"];
            this.approvalDate = data["approvalDate"] ? new Date(data["approvalDate"].toString()) : undefined;
            this.id = data["id"];
        }
    };
    Request.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Request();
        result.init(data);
        return result;
    };
    Request.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["patientName"] = this.patientName;
        data["providerName"] = this.providerName;
        data["specialty"] = this.specialty;
        data["priceRange"] = this.priceRange;
        data["dayKey"] = this.dayKey;
        data["status"] = this.status;
        data["providerType"] = this.providerType;
        data["isClosed"] = this.isClosed;
        data["requestDate"] = this.requestDate ? this.requestDate.toISOString() : undefined;
        data["visitDate"] = this.visitDate ? this.visitDate.toISOString() : undefined;
        data["closeDate"] = this.closeDate ? this.closeDate.toISOString() : undefined;
        data["cost"] = this.cost;
        data["approvedBy"] = this.approvedBy;
        data["approvalDate"] = this.approvalDate ? this.approvalDate.toISOString() : undefined;
        data["id"] = this.id;
        return data;
    };
    return Request;
}());

var RequestEdit = /** @class */ (function () {
    function RequestEdit(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RequestEdit.prototype.init = function (data) {
        if (data) {
            this.patientName = data["patientName"];
            this.providerName = data["providerName"];
            this.specialty = data["specialty"];
            this.priceRange = data["priceRange"];
            this.status = data["status"];
            this.providerType = data["providerType"];
            this.isClosed = data["isClosed"];
            this.requestDate = data["requestDate"] ? new Date(data["requestDate"].toString()) : undefined;
            this.visitDate = data["visitDate"] ? new Date(data["visitDate"].toString()) : undefined;
            this.closeDate = data["closeDate"] ? new Date(data["closeDate"].toString()) : undefined;
            this.cost = data["cost"];
            this.approvedBy = data["approvedBy"];
            this.approvalDate = data["approvalDate"] ? new Date(data["approvalDate"].toString()) : undefined;
            this.notes = data["notes"];
            this.providerNotes = data["providerNotes"];
            this.providerRating = data["providerRating"];
            this.patientRating = data["patientRating"];
            this.id = data["id"];
        }
    };
    RequestEdit.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RequestEdit();
        result.init(data);
        return result;
    };
    RequestEdit.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["patientName"] = this.patientName;
        data["providerName"] = this.providerName;
        data["specialty"] = this.specialty;
        data["priceRange"] = this.priceRange;
        data["status"] = this.status;
        data["providerType"] = this.providerType;
        data["isClosed"] = this.isClosed;
        data["requestDate"] = this.requestDate ? this.requestDate.toISOString() : undefined;
        data["visitDate"] = this.visitDate ? this.visitDate.toISOString() : undefined;
        data["closeDate"] = this.closeDate ? this.closeDate.toISOString() : undefined;
        data["cost"] = this.cost;
        data["approvedBy"] = this.approvedBy;
        data["approvalDate"] = this.approvalDate ? this.approvalDate.toISOString() : undefined;
        data["notes"] = this.notes;
        data["providerNotes"] = this.providerNotes;
        data["providerRating"] = this.providerRating;
        data["patientRating"] = this.patientRating;
        data["id"] = this.id;
        return data;
    };
    return RequestEdit;
}());

var PagedResultOfSpecialty = /** @class */ (function () {
    function PagedResultOfSpecialty(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultOfSpecialty.prototype.init = function (data) {
        if (data) {
            this.pageIndex = data["pageIndex"];
            this.pageSize = data["pageSize"];
            this.count = data["count"];
            this.pageCount = data["pageCount"];
            if (data["result"] && data["result"].constructor === Array) {
                this.result = [];
                for (var _i = 0, _a = data["result"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.result.push(Specialty.fromJS(item));
                }
            }
        }
    };
    PagedResultOfSpecialty.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PagedResultOfSpecialty();
        result.init(data);
        return result;
    };
    PagedResultOfSpecialty.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["pageIndex"] = this.pageIndex;
        data["pageSize"] = this.pageSize;
        data["count"] = this.count;
        data["pageCount"] = this.pageCount;
        if (this.result && this.result.constructor === Array) {
            data["result"] = [];
            for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
                var item = _a[_i];
                data["result"].push(item.toJSON());
            }
        }
        return data;
    };
    return PagedResultOfSpecialty;
}());

var SwaggerException = /** @class */ (function (_super) {
    __extends(SwaggerException, _super);
    function SwaggerException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isSwaggerException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    SwaggerException.isSwaggerException = function (obj) {
        return obj.isSwaggerException === true;
    };
    return SwaggerException;
}(Error));

function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(result);
    else
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(new SwaggerException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (observer) {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            var reader = new FileReader();
            reader.onload = function () {
                observer.next(this.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}


/***/ }),

/***/ "./app/core/data/index.ts":
/*!********************************!*\
  !*** ./app/core/data/index.ts ***!
  \********************************/
/*! exports provided: API_BASE_URL, V1Client, CertificateClient, CityClient, ConfigurationClient, CountryClient, ExperienceClient, PatientClient, PricerangeClient, ProviderClient, RequestClient, StatusClient, SpecialtyClient, PagedResultOfCertificate, Certificate, PagedResultOfCity, City, PagedResultOfCountry, Country, PagedResultOfExperience, Experience, PagedResultOfPatient, Patient, PatientEdit, Audit, Address, CreditCard, PagedResultOfPriceRange, PriceRange, PagedResultOfProvider, Provider, ProviderEdit, Balance, Specialty, PagedResultOfRequest, Request, RequestEdit, PagedResultOfSpecialty, SwaggerException, ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-client.service */ "./app/core/data/data-client.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "V1Client", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["V1Client"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CertificateClient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["CertificateClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CityClient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["CityClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigurationClient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["ConfigurationClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountryClient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["CountryClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExperienceClient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["ExperienceClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatientClient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PatientClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PricerangeClient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PricerangeClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProviderClient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["ProviderClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestClient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["RequestClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusClient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["StatusClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpecialtyClient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["SpecialtyClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfCertificate", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PagedResultOfCertificate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Certificate", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["Certificate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfCity", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PagedResultOfCity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "City", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["City"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfCountry", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PagedResultOfCountry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["Country"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfExperience", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PagedResultOfExperience"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["Experience"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfPatient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PagedResultOfPatient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["Patient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatientEdit", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PatientEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audit", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["Audit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["Address"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreditCard", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["CreditCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfPriceRange", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PagedResultOfPriceRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PriceRange", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PriceRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfProvider", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PagedResultOfProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["Provider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProviderEdit", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["ProviderEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Balance", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["Balance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Specialty", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["Specialty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfRequest", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PagedResultOfRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["Request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestEdit", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["RequestEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagedResultOfSpecialty", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["PagedResultOfSpecialty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwaggerException", function() { return _data_client_service__WEBPACK_IMPORTED_MODULE_0__["SwaggerException"]; });

/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration.service */ "./app/core/data/configuration.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return _configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"]; });





/***/ }),

/***/ "./app/core/enums/gender.enum.ts":
/*!***************************************!*\
  !*** ./app/core/enums/gender.enum.ts ***!
  \***************************************/
/*! exports provided: Gender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
    Gender[Gender["All"] = 3] = "All";
})(Gender || (Gender = {}));


/***/ }),

/***/ "./app/core/enums/index.ts":
/*!*********************************!*\
  !*** ./app/core/enums/index.ts ***!
  \*********************************/
/*! exports provided: Gender, MaritalStatus, UserType, RequestStatus, PaymentMethod, ProviderType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gender_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gender.enum */ "./app/core/enums/gender.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return _gender_enum__WEBPACK_IMPORTED_MODULE_0__["Gender"]; });

/* harmony import */ var _marital_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marital-status.enum */ "./app/core/enums/marital-status.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaritalStatus", function() { return _marital_status_enum__WEBPACK_IMPORTED_MODULE_1__["MaritalStatus"]; });

/* harmony import */ var _user_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-type.enum */ "./app/core/enums/user-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return _user_type_enum__WEBPACK_IMPORTED_MODULE_2__["UserType"]; });

/* harmony import */ var _request_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-status.enum */ "./app/core/enums/request-status.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestStatus", function() { return _request_status_enum__WEBPACK_IMPORTED_MODULE_3__["RequestStatus"]; });

/* harmony import */ var _payment_method_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-method.enum */ "./app/core/enums/payment-method.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentMethod", function() { return _payment_method_enum__WEBPACK_IMPORTED_MODULE_4__["PaymentMethod"]; });

/* harmony import */ var _provider_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provider-type.enum */ "./app/core/enums/provider-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProviderType", function() { return _provider_type_enum__WEBPACK_IMPORTED_MODULE_5__["ProviderType"]; });









/***/ }),

/***/ "./app/core/enums/marital-status.enum.ts":
/*!***********************************************!*\
  !*** ./app/core/enums/marital-status.enum.ts ***!
  \***********************************************/
/*! exports provided: MaritalStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaritalStatus", function() { return MaritalStatus; });
var MaritalStatus;
(function (MaritalStatus) {
    MaritalStatus[MaritalStatus["Single"] = 1] = "Single";
    MaritalStatus[MaritalStatus["Married"] = 2] = "Married";
    MaritalStatus[MaritalStatus["Widowed"] = 3] = "Widowed";
    MaritalStatus[MaritalStatus["Divorcee"] = 4] = "Divorcee";
    MaritalStatus[MaritalStatus["Other"] = 5] = "Other";
})(MaritalStatus || (MaritalStatus = {}));


/***/ }),

/***/ "./app/core/enums/payment-method.enum.ts":
/*!***********************************************!*\
  !*** ./app/core/enums/payment-method.enum.ts ***!
  \***********************************************/
/*! exports provided: PaymentMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethod", function() { return PaymentMethod; });
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod[PaymentMethod["Cach"] = 1] = "Cach";
    PaymentMethod[PaymentMethod["CriedtCard"] = 2] = "CriedtCard";
    PaymentMethod[PaymentMethod["PayPal"] = 3] = "PayPal";
})(PaymentMethod || (PaymentMethod = {}));


/***/ }),

/***/ "./app/core/enums/provider-type.enum.ts":
/*!**********************************************!*\
  !*** ./app/core/enums/provider-type.enum.ts ***!
  \**********************************************/
/*! exports provided: ProviderType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderType", function() { return ProviderType; });
var ProviderType;
(function (ProviderType) {
    ProviderType[ProviderType["Doctor"] = 1] = "Doctor";
    ProviderType[ProviderType["Nurse"] = 2] = "Nurse";
    ProviderType[ProviderType["Laboratory"] = 3] = "Laboratory";
    ProviderType[ProviderType["Radiography"] = 4] = "Radiography";
})(ProviderType || (ProviderType = {}));


/***/ }),

/***/ "./app/core/enums/request-status.enum.ts":
/*!***********************************************!*\
  !*** ./app/core/enums/request-status.enum.ts ***!
  \***********************************************/
/*! exports provided: RequestStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestStatus", function() { return RequestStatus; });
var RequestStatus;
(function (RequestStatus) {
    RequestStatus[RequestStatus["New"] = 1] = "New";
    RequestStatus[RequestStatus["Approved"] = 2] = "Approved";
    RequestStatus[RequestStatus["Assigned"] = 3] = "Assigned";
    RequestStatus[RequestStatus["Accepted"] = 4] = "Accepted";
    RequestStatus[RequestStatus["Canceled"] = 5] = "Canceled";
    RequestStatus[RequestStatus["Completed"] = 6] = "Completed";
    // Old values
    // New = 1,
    // Pending = 2,
    // Approved = 3,
    // Canceled = 4,
    // Completed = 5
})(RequestStatus || (RequestStatus = {}));


/***/ }),

/***/ "./app/core/enums/user-type.enum.ts":
/*!******************************************!*\
  !*** ./app/core/enums/user-type.enum.ts ***!
  \******************************************/
/*! exports provided: UserType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
var UserType;
(function (UserType) {
    UserType[UserType["SuperAdmin"] = 1] = "SuperAdmin";
    UserType[UserType["Admin"] = 2] = "Admin";
    UserType[UserType["Provider"] = 3] = "Provider";
    UserType[UserType["Patient"] = 4] = "Patient";
})(UserType || (UserType = {}));


/***/ }),

/***/ "./app/core/pipes/gender-string.pipe.ts":
/*!**********************************************!*\
  !*** ./app/core/pipes/gender-string.pipe.ts ***!
  \**********************************************/
/*! exports provided: GenderStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderStringPipe", function() { return GenderStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_gender_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/gender.enum */ "./app/core/enums/gender.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GenderStringPipe = /** @class */ (function () {
    function GenderStringPipe() {
    }
    GenderStringPipe.prototype.transform = function (value) {
        return _enums_gender_enum__WEBPACK_IMPORTED_MODULE_1__["Gender"][value].split(/(?=[A-Z])/).join().replace(',', ' ');
    };
    GenderStringPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'genderString'
        })
    ], GenderStringPipe);
    return GenderStringPipe;
}());



/***/ }),

/***/ "./app/core/pipes/index.ts":
/*!*********************************!*\
  !*** ./app/core/pipes/index.ts ***!
  \*********************************/
/*! exports provided: GenderStringPipe, MaritalStatusStringPipe, UserTypeStringPipe, RequestStatusStringPipe, PaymentMethodStringPipe, ProviderTypeStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gender_string_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gender-string.pipe */ "./app/core/pipes/gender-string.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenderStringPipe", function() { return _gender_string_pipe__WEBPACK_IMPORTED_MODULE_0__["GenderStringPipe"]; });

/* harmony import */ var _marital_status_string_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marital-status-string.pipe */ "./app/core/pipes/marital-status-string.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaritalStatusStringPipe", function() { return _marital_status_string_pipe__WEBPACK_IMPORTED_MODULE_1__["MaritalStatusStringPipe"]; });

/* harmony import */ var _user_type_string_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-type-string.pipe */ "./app/core/pipes/user-type-string.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserTypeStringPipe", function() { return _user_type_string_pipe__WEBPACK_IMPORTED_MODULE_2__["UserTypeStringPipe"]; });

/* harmony import */ var _request_status_string_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-status-string.pipe */ "./app/core/pipes/request-status-string.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestStatusStringPipe", function() { return _request_status_string_pipe__WEBPACK_IMPORTED_MODULE_3__["RequestStatusStringPipe"]; });

/* harmony import */ var _payment_method_string_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-method-string.pipe */ "./app/core/pipes/payment-method-string.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodStringPipe", function() { return _payment_method_string_pipe__WEBPACK_IMPORTED_MODULE_4__["PaymentMethodStringPipe"]; });

/* harmony import */ var _provider_type_string_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provider-type-string.pipe */ "./app/core/pipes/provider-type-string.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProviderTypeStringPipe", function() { return _provider_type_string_pipe__WEBPACK_IMPORTED_MODULE_5__["ProviderTypeStringPipe"]; });









/***/ }),

/***/ "./app/core/pipes/marital-status-string.pipe.ts":
/*!******************************************************!*\
  !*** ./app/core/pipes/marital-status-string.pipe.ts ***!
  \******************************************************/
/*! exports provided: MaritalStatusStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaritalStatusStringPipe", function() { return MaritalStatusStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_marital_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/marital-status.enum */ "./app/core/enums/marital-status.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaritalStatusStringPipe = /** @class */ (function () {
    function MaritalStatusStringPipe() {
    }
    MaritalStatusStringPipe.prototype.transform = function (value) {
        return _enums_marital_status_enum__WEBPACK_IMPORTED_MODULE_1__["MaritalStatus"][value].split(/(?=[A-Z])/).join().replace(',', ' ');
    };
    MaritalStatusStringPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'maritalStatusString'
        })
    ], MaritalStatusStringPipe);
    return MaritalStatusStringPipe;
}());



/***/ }),

/***/ "./app/core/pipes/payment-method-string.pipe.ts":
/*!******************************************************!*\
  !*** ./app/core/pipes/payment-method-string.pipe.ts ***!
  \******************************************************/
/*! exports provided: PaymentMethodStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodStringPipe", function() { return PaymentMethodStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_payment_method_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/payment-method.enum */ "./app/core/enums/payment-method.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PaymentMethodStringPipe = /** @class */ (function () {
    function PaymentMethodStringPipe() {
    }
    PaymentMethodStringPipe.prototype.transform = function (value) {
        return _enums_payment_method_enum__WEBPACK_IMPORTED_MODULE_1__["PaymentMethod"][value].split(/(?=[A-Z])/).join().replace(',', ' ');
    };
    PaymentMethodStringPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'paymentMethodString'
        })
    ], PaymentMethodStringPipe);
    return PaymentMethodStringPipe;
}());



/***/ }),

/***/ "./app/core/pipes/provider-type-string.pipe.ts":
/*!*****************************************************!*\
  !*** ./app/core/pipes/provider-type-string.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ProviderTypeStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderTypeStringPipe", function() { return ProviderTypeStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_provider_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/provider-type.enum */ "./app/core/enums/provider-type.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProviderTypeStringPipe = /** @class */ (function () {
    function ProviderTypeStringPipe() {
    }
    ProviderTypeStringPipe.prototype.transform = function (value) {
        return _enums_provider_type_enum__WEBPACK_IMPORTED_MODULE_1__["ProviderType"][value].split(/(?=[A-Z])/).join().replace(',', ' ');
    };
    ProviderTypeStringPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'providerTypeString'
        })
    ], ProviderTypeStringPipe);
    return ProviderTypeStringPipe;
}());



/***/ }),

/***/ "./app/core/pipes/request-status-string.pipe.ts":
/*!******************************************************!*\
  !*** ./app/core/pipes/request-status-string.pipe.ts ***!
  \******************************************************/
/*! exports provided: RequestStatusStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestStatusStringPipe", function() { return RequestStatusStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_request_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/request-status.enum */ "./app/core/enums/request-status.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RequestStatusStringPipe = /** @class */ (function () {
    function RequestStatusStringPipe() {
    }
    RequestStatusStringPipe.prototype.transform = function (value) {
        return _enums_request_status_enum__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"][value].split(/(?=[A-Z])/).join().replace(',', ' ');
    };
    RequestStatusStringPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'requestStatusString'
        })
    ], RequestStatusStringPipe);
    return RequestStatusStringPipe;
}());



/***/ }),

/***/ "./app/core/pipes/user-type-string.pipe.ts":
/*!*************************************************!*\
  !*** ./app/core/pipes/user-type-string.pipe.ts ***!
  \*************************************************/
/*! exports provided: UserTypeStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypeStringPipe", function() { return UserTypeStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_user_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/user-type.enum */ "./app/core/enums/user-type.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserTypeStringPipe = /** @class */ (function () {
    function UserTypeStringPipe() {
    }
    UserTypeStringPipe.prototype.transform = function (value) {
        return _enums_user_type_enum__WEBPACK_IMPORTED_MODULE_1__["UserType"][value].split(/(?=[A-Z])/).join().replace(',', ' ');
    };
    UserTypeStringPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'userTypeString'
        })
    ], UserTypeStringPipe);
    return UserTypeStringPipe;
}());



/***/ }),

/***/ "./app/core/services/activated-page.ts":
/*!*********************************************!*\
  !*** ./app/core/services/activated-page.ts ***!
  \*********************************************/
/*! exports provided: ActivatedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivatedPage", function() { return ActivatedPage; });
// the current active page
var ActivatedPage = /** @class */ (function () {
    function ActivatedPage() {
    }
    return ActivatedPage;
}());



/***/ }),

/***/ "./app/core/services/index.ts":
/*!************************************!*\
  !*** ./app/core/services/index.ts ***!
  \************************************/
/*! exports provided: PageService, ActivatedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-service */ "./app/core/services/page-service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return _page_service__WEBPACK_IMPORTED_MODULE_0__["PageService"]; });

/* harmony import */ var _activated_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activated-page */ "./app/core/services/activated-page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedPage", function() { return _activated_page__WEBPACK_IMPORTED_MODULE_1__["ActivatedPage"]; });





/***/ }),

/***/ "./app/core/services/page-service.ts":
/*!*******************************************!*\
  !*** ./app/core/services/page-service.ts ***!
  \*******************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes */ "./app/core/pipes/index.ts");
/* harmony import */ var _activated_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activated-page */ "./app/core/services/activated-page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageService = /** @class */ (function () {
    function PageService() {
    }
    Object.defineProperty(PageService.prototype, "listRoute", {
        get: function () {
            return 'providers';
        },
        enumerable: true,
        configurable: true
    });
    PageService.prototype.getListTitleForProvider = function (typeFlag, subTitle) {
        return new _pipes__WEBPACK_IMPORTED_MODULE_1__["ProviderTypeStringPipe"]().transform(typeFlag) + ' ' + subTitle;
    };
    PageService.prototype.getListTitleForRequestStatus = function (typeFlag, subTitle) {
        return new _pipes__WEBPACK_IMPORTED_MODULE_1__["RequestStatusStringPipe"]().transform(typeFlag) + ' ' + subTitle;
    };
    PageService.prototype.getActivatedPage = function (activatedRoute) {
        console.log('|--> activatedRoute: ' + activatedRoute.snapshot);
        var result = new _activated_page__WEBPACK_IMPORTED_MODULE_2__["ActivatedPage"](); // = { };
        if (activatedRoute.snapshot.params['id']) {
            result.id = activatedRoute.snapshot.params['id']; // (+) converts string 'id' to a number
            result.isEdit = true;
            result.title = 'Edit';
            console.log('|--> id: ' + result.id);
        }
        if (activatedRoute.snapshot.params['flag']) {
            result.typeFlag = activatedRoute.snapshot.params['flag']; // (+) converts string 'id' to a number
            console.log('|--> flag: ' + result.typeFlag);
        }
        return result;
    };
    PageService.prototype.getTabsForProvider = function (typeFlag, id) {
        return [
            {
                title: 'Basic',
                route: '/pages/providers/' + typeFlag + '/edit/' + id,
            },
            {
                title: 'Specialties',
                route: '/pages/providers/' + typeFlag + '/edit/specialties/' + id,
            },
            {
                title: 'Certificates',
                route: '/pages/providers/' + typeFlag + '/edit/certificates/' + id,
            },
            {
                title: 'Experience',
                route: '/pages/providers/' + typeFlag + '/edit/experiences/' + id,
            },
            {
                title: 'Address',
                route: '/pages/providers/' + typeFlag + '/edit/address/' + id,
            },
            {
                title: 'Location',
                route: '/pages/providers/' + typeFlag + '/edit/location/' + id,
            },
            {
                title: 'Audit',
                route: '/pages/providers/' + typeFlag + '/edit/audit/' + id,
            }
        ];
    };
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./app/core/validators/decimal-validator.ts":
/*!**************************************************!*\
  !*** ./app/core/validators/decimal-validator.ts ***!
  \**************************************************/
/*! exports provided: DecimalValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecimalValidator", function() { return DecimalValidator; });
/**
 * An array of data with an associated page object used for paging
 */
function DecimalValidator(control) {
    var value = control.value || '';
    if (value) {
        if (typeof value === 'number') {
            return null;
        }
        var valid = value.match(/^[+]?\d+(\.\d+)?$/);
        return valid ? null : { onlydecimal: true };
    }
    return null;
}


/***/ }),

/***/ "./app/core/validators/index.ts":
/*!**************************************!*\
  !*** ./app/core/validators/index.ts ***!
  \**************************************/
/*! exports provided: NumberValidator, DecimalValidator, IpValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-validator */ "./app/core/validators/number-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberValidator", function() { return _number_validator__WEBPACK_IMPORTED_MODULE_0__["NumberValidator"]; });

/* harmony import */ var _decimal_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decimal-validator */ "./app/core/validators/decimal-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecimalValidator", function() { return _decimal_validator__WEBPACK_IMPORTED_MODULE_1__["DecimalValidator"]; });

/* harmony import */ var _ip_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ip-validator */ "./app/core/validators/ip-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IpValidator", function() { return _ip_validator__WEBPACK_IMPORTED_MODULE_2__["IpValidator"]; });






/***/ }),

/***/ "./app/core/validators/ip-validator.ts":
/*!*********************************************!*\
  !*** ./app/core/validators/ip-validator.ts ***!
  \*********************************************/
/*! exports provided: IpValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpValidator", function() { return IpValidator; });
/**
 * An array of data with an associated page object used for paging
 */
function IpValidator(control) {
    var value = control.value || '';
    if (value) {
        // if (typeof value === 'number') {return null;};
        var valid = value.match(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/);
        return valid ? null : { onlyip: true };
    }
    return null;
}


/***/ }),

/***/ "./app/core/validators/number-validator.ts":
/*!*************************************************!*\
  !*** ./app/core/validators/number-validator.ts ***!
  \*************************************************/
/*! exports provided: NumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValidator", function() { return NumberValidator; });
/**
 * An array of data with an associated page object used for paging
 */
function NumberValidator(control) {
    var value = control.value || '';
    if (value) {
        if (typeof value === 'number') {
            return null;
        }
        var valid = value.match(/^\d+$/);
        return valid ? null : { onlynumber: true };
    }
    return null;
}


/***/ }),

/***/ "./app/forbidden/forbidden.component.html":
/*!************************************************!*\
  !*** ./app/forbidden/forbidden.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  forbidden works!\n</p>\n"

/***/ }),

/***/ "./app/forbidden/forbidden.component.scss":
/*!************************************************!*\
  !*** ./app/forbidden/forbidden.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/forbidden/forbidden.component.ts":
/*!**********************************************!*\
  !*** ./app/forbidden/forbidden.component.ts ***!
  \**********************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForbiddenComponent = /** @class */ (function () {
    function ForbiddenComponent() {
    }
    ForbiddenComponent.prototype.ngOnInit = function () {
    };
    ForbiddenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forbidden',
            template: __webpack_require__(/*! ./forbidden.component.html */ "./app/forbidden/forbidden.component.html"),
            styles: [__webpack_require__(/*! ./forbidden.component.scss */ "./app/forbidden/forbidden.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForbiddenComponent);
    return ForbiddenComponent;
}());



/***/ }),

/***/ "./app/patients/patient-detail-address/patient-detail-address.component.html":
/*!***********************************************************************************!*\
  !*** ./app/patients/patient-detail-address/patient-detail-address.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n      <h2>{{title}}</h2>\n    </div>\n  </div>\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"tabs-container\">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"\">\n                      <a data-toggle=\"tab\" [routerLink]=\"['/patients', 'edit', page.id]\">Basic</a>\n                    </li>\n                    <li class=\"active\">\n                      <a data-toggle=\"tab\" [routerLink]=\"['/patients', 'edit', page.id, 'address']\">Address</a>\n                    </li>\n                    <!--\n                    <li class=\"\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', 'edit', page.id, 'specialties']\">Specialties</a>\n                    </li>\n                    -->\n                </ul>\n            </div>\n            <div class=\"ibox-content\">\n                <form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n                  <!-- fields start -->\n  \n                  <div class=\"form-group row\">\n                      <label for=\"select\" class=\"col-sm-3 form-control-label\">City</label>\n                      <div class=\"col-sm-9\">\n                        <select id=\"select\" formControlName=\"cityId\">\n                            <option *ngFor=\"let c of cityList\" [value]=\"c.id\">\n                              {{ c.name }}\n                            </option>\n                          </select>\n                      </div>\n                  </div>\n  \n                  <div class=\"form-group row\">\n                    <label for=\"street\" class=\"col-sm-3 form-control-label\">Street</label>\n                    <div class=\"col-sm-9\">\n                        <input id=\"street\" type=\"text\" formControlName=\"street\" class=\"form-control\">\n                        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['street']) && formDir.submitted\">\n                          Required.\n                        </span>\n                        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['street']) && formDir.submitted\">\n                          Must be at least 3 characters long.\n                        </span>\n                        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['street']) && formDir.submitted\">\n                          Must be less than 512 characters long.\n                        </span>\n                      </div>\n                  </div>\n  \n                  <div class=\"form-group row\">\n                    <label for=\"postCode\" class=\"col-sm-3 form-control-label\">Building No</label>\n                        <div class=\"col-sm-9\">\n                          <input id=\"postCode\" type=\"text\" formControlName=\"postCode\" class=\"form-control\">\n                          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['postCode']) && formDir.submitted\">\n                            Required.\n                          </span>\n                          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['postCode']) && formDir.submitted\">\n                            Must be at least 3 characters long.\n                          </span>\n                          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['postCode']) && formDir.submitted\">\n                            Must be less than 512 characters long.\n                          </span>\n                        </div>\n                    </div>\n  \n                    <div class=\"form-group row\">\n                      <label for=\"latitude\" class=\"col-sm-3 form-control-label\">Latitude</label>\n                        <div class=\"col-sm-9\">\n                          <input id=\"latitude\" type=\"text\" formControlName=\"latitude\" class=\"form-control\">\n                            <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['latitude']) && formDir.submitted\">\n                              Required.\n                            </span>\n                        </div>\n                    </div>\n  \n                    <div class=\"form-group row\">\n                        <label for=\"longitude\" class=\"col-sm-3 form-control-label\">Longitude</label>\n                          <div class=\"col-sm-9\">\n                            <input id=\"longitude\" type=\"text\" formControlName=\"longitude\" class=\"form-control\">\n                              <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['longitude']) && formDir.submitted\">\n                                Required.\n                              </span>\n                          </div>\n                    </div>\n                  <!-- fields end -->\n                  <!-- buttons start -->\n                  <div class=\"form-group row\">\n                    <div class=\"offset-sm-3 col-sm-9\">\n                      <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n                      <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n                    </div>\n                  </div>\n                  <!-- buttons end -->\n                </form>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>  \n  "

/***/ }),

/***/ "./app/patients/patient-detail-address/patient-detail-address.component.scss":
/*!***********************************************************************************!*\
  !*** ./app/patients/patient-detail-address/patient-detail-address.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/patients/patient-detail-address/patient-detail-address.component.ts":
/*!*********************************************************************************!*\
  !*** ./app/patients/patient-detail-address/patient-detail-address.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PatientDetailAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDetailAddressComponent", function() { return PatientDetailAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/validators */ "./app/core/validators/index.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PatientDetailAddressComponent = /** @class */ (function () {
    function PatientDetailAddressComponent(client, cityClient, fb, activatedRoute, router, pageSrv) {
        var _this = this;
        this.client = client;
        this.cityClient = cityClient;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageSrv = pageSrv;
        this.id = '';
        this.title = 'Create';
        this.page = new _core_services__WEBPACK_IMPORTED_MODULE_3__["ActivatedPage"]();
        this.cityList = new Array();
        this.page = this.pageSrv.getActivatedPage(this.activatedRoute);
        this.cityClient.all(0, false).subscribe(function (r) {
            // console.log(r);
            _this.cityList = r;
        }, function (error) { return console.log(error); }, function () { return console.log('get cities complete'); });
        this.createForm();
        // this.title = this.pageSrv.getListTitleForProvider(this.page.typeFlag, this.page.title);
    }
    PatientDetailAddressComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            id: '',
            cityId: '',
            cityName: '',
            cityNameArabic: '',
            street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(512)]],
            postCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
            latitude: [0, [_core_validators__WEBPACK_IMPORTED_MODULE_4__["DecimalValidator"]]],
            longitude: [0, [_core_validators__WEBPACK_IMPORTED_MODULE_4__["DecimalValidator"]]],
            updatedAt: ''
        });
    };
    PatientDetailAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.page.isEdit) {
            this.client.addressGet(this.page.id).subscribe(function (resp) {
                console.log(resp);
                _this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
    };
    PatientDetailAddressComponent.prototype.save = function () {
        var _this = this;
        if (!this.itemForm.valid) {
            return;
        }
        if (this.page.isEdit) {
            console.log(this.itemForm.value);
            this.client.addressPut(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['patients']);
            }, function (error) {
                console.log(error);
                _this.router.navigate(['patients']);
            });
        }
        else {
            this.client.addressPost(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['patients']);
            }, function (error) {
                console.log(error);
                _this.router.navigate(['patients']);
            });
        }
        // console.log(this.itemForm.value);
    };
    PatientDetailAddressComponent.prototype.cancel = function () {
        this.router.navigate(['patients']);
    };
    PatientDetailAddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-detail-address',
            template: __webpack_require__(/*! ./patient-detail-address.component.html */ "./app/patients/patient-detail-address/patient-detail-address.component.html"),
            styles: [__webpack_require__(/*! ./patient-detail-address.component.scss */ "./app/patients/patient-detail-address/patient-detail-address.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_5__["PatientClient"],
            _core_data__WEBPACK_IMPORTED_MODULE_5__["CityClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PatientDetailAddressComponent);
    return PatientDetailAddressComponent;
}());



/***/ }),

/***/ "./app/patients/patient-detail-audit/patient-detail-audit.component.html":
/*!*******************************************************************************!*\
  !*** ./app/patients/patient-detail-audit/patient-detail-audit.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  patient-detail-audit works!\n</p>\n"

/***/ }),

/***/ "./app/patients/patient-detail-audit/patient-detail-audit.component.scss":
/*!*******************************************************************************!*\
  !*** ./app/patients/patient-detail-audit/patient-detail-audit.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/patients/patient-detail-audit/patient-detail-audit.component.ts":
/*!*****************************************************************************!*\
  !*** ./app/patients/patient-detail-audit/patient-detail-audit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PatientDetailAuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDetailAuditComponent", function() { return PatientDetailAuditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PatientDetailAuditComponent = /** @class */ (function () {
    function PatientDetailAuditComponent() {
    }
    PatientDetailAuditComponent.prototype.ngOnInit = function () {
    };
    PatientDetailAuditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-detail-audit',
            template: __webpack_require__(/*! ./patient-detail-audit.component.html */ "./app/patients/patient-detail-audit/patient-detail-audit.component.html"),
            styles: [__webpack_require__(/*! ./patient-detail-audit.component.scss */ "./app/patients/patient-detail-audit/patient-detail-audit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PatientDetailAuditComponent);
    return PatientDetailAuditComponent;
}());



/***/ }),

/***/ "./app/patients/patient-detail/patient-detail.component.html":
/*!*******************************************************************!*\
  !*** ./app/patients/patient-detail/patient-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n        <h2>{{title}}</h2>\n    </div>\n  </div>\n  \n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"tabs-container\">\n            <ul class=\"nav nav-tabs\">\n                <li class=\"active\">\n                  <a data-toggle=\"tab\" [routerLink]=\"['/patients', 'edit', page.id]\">Basic</a>\n                </li>\n                <li class=\"\">\n                  <a data-toggle=\"tab\" [routerLink]=\"['/patients', 'edit', page.id, 'address']\">Address</a>\n                </li>\n                <!--\n                <li class=\"\">\n                    <a data-toggle=\"tab\" [routerLink]=\"['/providers', 'edit', page.id, 'specialties']\">Specialties</a>\n                </li>\n                -->\n            </ul>\n        </div>\n        <div class=\"ibox-content\">\n          <form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n            <!-- fields start -->\n            <div class=\"form-group row\">\n                <label for=\"givenName\" class=\"col-sm-3 form-control-label\">First Name</label>\n                  <div class=\"col-sm-9\">\n                    <input id=\"givenName\" type=\"text\" formControlName=\"givenName\" class=\"form-control\">\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['givenName']) && formDir.submitted\">\n                      Required.\n                    </span>\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['givenName']) && formDir.submitted\">\n                      Must be at least 4 characters long.\n                    </span>\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['givenName']) && formDir.submitted\">\n                      Must be less than 128 characters long.\n                    </span>\n                  </div>\n              </div>\n    \n              <div class=\"form-group row\">\n                  <label for=\"familyName\" class=\"col-sm-3 form-control-label\">Family Name</label>\n                    <div class=\"col-sm-9\">\n                      <input id=\"familyName\" type=\"text\" formControlName=\"familyName\" class=\"form-control\">\n                      <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['familyName']) && formDir.submitted\">\n                        Required.\n                      </span>\n                      <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['familyName']) && formDir.submitted\">\n                        Must be at least 4 characters long.\n                      </span>\n                      <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['familyName']) && formDir.submitted\">\n                        Must be less than 128 characters long.\n                      </span>\n                    </div>\n              </div>\n    \n              <!-- Gender -->\n              <div class=\"form-group row\">\n                <label for=\"Gender\" class=\"col-sm-3 form-control-label\">Gender</label>\n                <div class=\"col-sm-9\">\n                  <div class=\"form-check form-check-inline\">\n                    <label class=\"custom-control custom-radio\">\n                      <input id=\"gender-male\"\n                           type=\"radio\"\n                           class=\"custom-control-input\"\n                           [value]=\"1\"\n                           formControlName=\"gender\">\n                      <span class=\"custom-control-indicator\"></span>\n                      <span class=\"custom-control-description\">Male</span>\n                    </label>\n                  </div>\n                  <div class=\"form-check form-check-inline\">\n                    <label class=\"custom-control custom-radio\">\n                      <input id=\"gender-female\"\n                           type=\"radio\"\n                           class=\"custom-control-input\"\n                           [value]=\"2\"\n                           formControlName=\"gender\">\n                      <span class=\"custom-control-indicator\"></span>\n                      <span class=\"custom-control-description\">Female</span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <!-- Marital Status\n              <div class=\"form-group row\">\n                  <label for=\"MaritalStatus\" class=\"col-sm-3 form-control-label\">Marital Status</label>\n                  <div class=\"col-sm-9\">\n                    <div class=\"form-check form-check-inline\">\n                      <label class=\"custom-control custom-radio\">\n                        <input id=\"maritalStatus-single\"\n                             type=\"radio\"\n                             class=\"custom-control-input\"\n                             [value]=\"1\"\n                             formControlName=\"maritalStatus\">\n                        <span class=\"custom-control-indicator\"></span>\n                        <span class=\"custom-control-description\">Single</span>\n                      </label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                      <label class=\"custom-control custom-radio\">\n                        <input id=\"maritalStatus-married\"\n                             type=\"radio\"\n                             class=\"custom-control-input\"\n                             [value]=\"2\"\n                             formControlName=\"maritalStatus\">\n                        <span class=\"custom-control-indicator\"></span>\n                        <span class=\"custom-control-description\">Married</span>\n                      </label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <label class=\"custom-control custom-radio\">\n                          <input id=\"maritalStatus-widowed\"\n                               type=\"radio\"\n                               class=\"custom-control-input\"\n                               [value]=\"3\"\n                               formControlName=\"maritalStatus\">\n                          <span class=\"custom-control-indicator\"></span>\n                          <span class=\"custom-control-description\">Widowed</span>\n                        </label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <label class=\"custom-control custom-radio\">\n                          <input id=\"maritalStatus-divorcee\"\n                               type=\"radio\"\n                               class=\"custom-control-input\"\n                               [value]=\"4\"\n                               formControlName=\"maritalStatus\">\n                          <span class=\"custom-control-indicator\"></span>\n                          <span class=\"custom-control-description\">Divorcee</span>\n                        </label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <label class=\"custom-control custom-radio\">\n                          <input id=\"maritalStatus-other\"\n                               type=\"radio\"\n                               class=\"custom-control-input\"\n                               [value]=\"5\"\n                               formControlName=\"maritalStatus\">\n                          <span class=\"custom-control-indicator\"></span>\n                          <span class=\"custom-control-description\">Other</span>\n                        </label>\n                    </div>\n                  </div>\n                </div>\n              -->\n            <div class=\"form-group row\">\n              <div class=\"offset-sm-3 col-sm-9\">\n                <div class=\"checkbox\">\n                  <label> <input type=\"checkbox\" class=\"i-checks\" formControlName=\"isEnabled\"> Enabled </label>\n                </div>\n              </div>\n            </div>\n            <!-- fields end -->\n            <!-- buttons start -->\n            <div class=\"form-group row\">\n              <div class=\"offset-sm-3 col-sm-9\">\n                <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n                <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n              </div>\n            </div>\n            <!-- buttons end -->\n        </form>\n      </div>\n    </div>\n  </div>\n</div>  "

/***/ }),

/***/ "./app/patients/patient-detail/patient-detail.component.scss":
/*!*******************************************************************!*\
  !*** ./app/patients/patient-detail/patient-detail.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/patients/patient-detail/patient-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./app/patients/patient-detail/patient-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: PatientDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDetailComponent", function() { return PatientDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientDetailComponent = /** @class */ (function () {
    function PatientDetailComponent(client, fb, activatedRoute, router, pageSrv) {
        this.client = client;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageSrv = pageSrv;
        this.id = '';
        this.title = 'Create';
        this.page = new _core_services__WEBPACK_IMPORTED_MODULE_3__["ActivatedPage"]();
        this.page = this.pageSrv.getActivatedPage(this.activatedRoute);
        this.createForm();
        // this.title = this.pageSrv.getListTitleForProvider(this.page.typeFlag, this.page.title);
    }
    PatientDetailComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            id: '',
            userId: '',
            birthDate: '',
            isEnabled: true,
            givenName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            familyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            gender: '',
            maritalStatus: ''
        });
    };
    PatientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.page.isEdit) {
            this.client.get(this.page.id).subscribe(function (resp) {
                console.log(resp);
                _this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
    };
    PatientDetailComponent.prototype.save = function () {
        var _this = this;
        if (!this.itemForm.valid) {
            return;
        }
        if (this.page.isEdit) {
            this.client.save(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['patients']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.client.create(this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['patients']);
            }, function (error) {
                console.log(error);
            });
        }
        // console.log(this.itemForm.value);
    };
    PatientDetailComponent.prototype.cancel = function () {
        this.router.navigate(['patients']);
    };
    PatientDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-detail',
            template: __webpack_require__(/*! ./patient-detail.component.html */ "./app/patients/patient-detail/patient-detail.component.html"),
            styles: [__webpack_require__(/*! ./patient-detail.component.scss */ "./app/patients/patient-detail/patient-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_4__["PatientClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PatientDetailComponent);
    return PatientDetailComponent;
}());



/***/ }),

/***/ "./app/patients/patient-list/patient-list.component.html":
/*!***************************************************************!*\
  !*** ./app/patients/patient-list/patient-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n        <h2>{{title}}</h2>\n    </div>\n    <div class=\"col-sm-4 m-t-md\">\n        <!--\n        <div class=\"pull-right\">\n            <button (click)=\"create()\" class=\"btn btn-primary btn-tn\">Add</button>\n        </div>\n        -->\n        <span class=\"pull-right m-xs m-r-md\">\n            <label> <input type=\"checkbox\" class=\"i-checks\" (change)=\"toggleEnabled($event)\"> Show all </label>\n        </span>\n    </div>\n</div>\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n    \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n              <div class=\"ibox float-e-margins\">\n                      <div class=\"ibox-content\">\n          <ngx-datatable class=\"bootstrap\"\n          [rows]=\"items.result\"\n          [loadingIndicator]=\"loadingIndicator\"\n          [headerHeight]=\"40\"\n          [footerHeight]=\"40\"\n          [columnMode]=\"'force'\"\n          [rowHeight]=\"40\"\n          [externalPaging]=\"true\"\n          [count]=\"count\"\n          [offset]=\"items.pageIndex\"\n          [limit]=\"items.pageSize\"\n          (page)='loadPage($event)'>\n            <ngx-datatable-column name=\"Name\" prop=\"name\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Age\" prop=\"age\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Gender\" prop=\"gender\">\n                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    {{value | genderString}}\n                </ng-template>\n            </ngx-datatable-column>\n            <!--\n            <ngx-datatable-column name=\"Marital Status\" prop=\"maritalStatus\">\n                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    {{value | maritalStatusString}}\n                </ng-template>\n            </ngx-datatable-column>\n            -->\n            <ngx-datatable-column name=\"Enabled\" prop=\"isEnabled\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"id\" [width]=\"80\">\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                    <!--\n                    <button md-icon-button class=\"btn-white\" (click)=\"deleteConfirm(value)\">\n                        <i class=\"fa fa-trash\"></i>\n                    </button>\n                    -->\n                    <button md-icon-button class=\"btn-white\" [routerLink]=\"['edit', value]\">\n                        <i class=\"fa fa-pencil\"></i>\n                    </button>\n                </ng-template>\n            </ngx-datatable-column>\n        </ngx-datatable>\n                      </div>\n              </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./app/patients/patient-list/patient-list.component.scss":
/*!***************************************************************!*\
  !*** ./app/patients/patient-list/patient-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/patients/patient-list/patient-list.component.ts":
/*!*************************************************************!*\
  !*** ./app/patients/patient-list/patient-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PatientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListComponent", function() { return PatientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientListComponent = /** @class */ (function () {
    function PatientListComponent(client, router, route, pageSrv) {
        var _this = this;
        this.client = client;
        this.router = router;
        this.route = route;
        this.pageSrv = pageSrv;
        this.title = 'Patient List';
        this.count = 0;
        this.typeFlag = 0;
        this.loadAll = false;
        this.loadingIndicator = true;
        this.items = new _core_data__WEBPACK_IMPORTED_MODULE_2__["PagedResultOfPatient"]();
        this.route.params.subscribe(function (params) {
            _this.loadPage({ offset: 0, pageSize: 10 });
        });
    }
    PatientListComponent.prototype.ngOnInit = function () {
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    // Common
    PatientListComponent.prototype.create = function () {
        this.router.navigate(['ptients/create']);
    };
    PatientListComponent.prototype.loadPage = function (para) {
        var _this = this;
        this.client.page(para.offset, para.pageSize, this.typeFlag, this.loadAll).subscribe(function (res) {
            _this.items = res;
            _this.count = res.count;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        }, function (error) { return console.log(error); }, function () { return console.log('Get paged items complete'); });
    };
    PatientListComponent.prototype.reloadPage = function () {
        this.loadPage({ offset: this.items.pageIndex, pageSize: this.items.pageSize });
    };
    PatientListComponent.prototype.delete = function (id) {
        var _this = this;
        this.client.delete(id)
            .subscribe(function () {
            _this.reloadPage();
        }, function (error) {
            console.log(error);
        });
    };
    PatientListComponent.prototype.deleteConfirm = function (id) {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this item: ?')) {
            this.delete(id);
            // event.confirm.resolve();
        }
        else {
            // event.confirm.reject();
        }
    };
    PatientListComponent.prototype.toggleEnabled = function (e) {
        this.loadAll = false;
        if (e.target.checked) {
            this.loadAll = true;
        }
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    PatientListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-list',
            template: __webpack_require__(/*! ./patient-list.component.html */ "./app/patients/patient-list/patient-list.component.html"),
            styles: [__webpack_require__(/*! ./patient-list.component.scss */ "./app/patients/patient-list/patient-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_2__["PatientClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PatientListComponent);
    return PatientListComponent;
}());



/***/ }),

/***/ "./app/patients/patients-routing.module.ts":
/*!*************************************************!*\
  !*** ./app/patients/patients-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PatientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsRoutingModule", function() { return PatientsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_common_layouts_basicLayout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/layouts/basicLayout.component */ "./app/components/common/layouts/basicLayout.component.ts");
/* harmony import */ var _authorization_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authorization.guard */ "./app/authorization.guard.ts");
/* harmony import */ var _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-list/patient-list.component */ "./app/patients/patient-list/patient-list.component.ts");
/* harmony import */ var _patient_detail_patient_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-detail/patient-detail.component */ "./app/patients/patient-detail/patient-detail.component.ts");
/* harmony import */ var _patient_detail_address_patient_detail_address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-detail-address/patient-detail-address.component */ "./app/patients/patient-detail-address/patient-detail-address.component.ts");
/* harmony import */ var _patient_detail_audit_patient_detail_audit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patient-detail-audit/patient-detail-audit.component */ "./app/patients/patient-detail-audit/patient-detail-audit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'patients', component: _components_common_layouts_basicLayout_component__WEBPACK_IMPORTED_MODULE_2__["BasicLayoutComponent"], canLoad: [_authorization_guard__WEBPACK_IMPORTED_MODULE_3__["AuthorizationGuard"]],
        children: [
            { path: '', component: _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_4__["PatientListComponent"] },
            { path: 'create', component: _patient_detail_patient_detail_component__WEBPACK_IMPORTED_MODULE_5__["PatientDetailComponent"] },
            { path: 'edit/:id', component: _patient_detail_patient_detail_component__WEBPACK_IMPORTED_MODULE_5__["PatientDetailComponent"] },
            { path: 'edit/:id/audit', component: _patient_detail_audit_patient_detail_audit_component__WEBPACK_IMPORTED_MODULE_7__["PatientDetailAuditComponent"] },
            { path: 'edit/:id/address', component: _patient_detail_address_patient_detail_address_component__WEBPACK_IMPORTED_MODULE_6__["PatientDetailAddressComponent"] },
        ],
    }
];
var PatientsRoutingModule = /** @class */ (function () {
    function PatientsRoutingModule() {
    }
    PatientsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PatientsRoutingModule);
    return PatientsRoutingModule;
}());



/***/ }),

/***/ "./app/patients/patients.module.ts":
/*!*****************************************!*\
  !*** ./app/patients/patients.module.ts ***!
  \*****************************************/
/*! exports provided: PatientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsModule", function() { return PatientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "../node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./app/core/core.module.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/data */ "./app/core/data/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _patients_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patients-routing.module */ "./app/patients/patients-routing.module.ts");
/* harmony import */ var _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patient-list/patient-list.component */ "./app/patients/patient-list/patient-list.component.ts");
/* harmony import */ var _patient_detail_patient_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patient-detail/patient-detail.component */ "./app/patients/patient-detail/patient-detail.component.ts");
/* harmony import */ var _patient_detail_address_patient_detail_address_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patient-detail-address/patient-detail-address.component */ "./app/patients/patient-detail-address/patient-detail-address.component.ts");
/* harmony import */ var _patient_detail_audit_patient_detail_audit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patient-detail-audit/patient-detail-audit.component */ "./app/patients/patient-detail-audit/patient-detail-audit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PatientsModule = /** @class */ (function () {
    function PatientsModule() {
    }
    PatientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _patients_routing_module__WEBPACK_IMPORTED_MODULE_7__["PatientsRoutingModule"]
            ],
            declarations: [_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_8__["PatientListComponent"], _patient_detail_patient_detail_component__WEBPACK_IMPORTED_MODULE_9__["PatientDetailComponent"], _patient_detail_address_patient_detail_address_component__WEBPACK_IMPORTED_MODULE_10__["PatientDetailAddressComponent"], _patient_detail_audit_patient_detail_audit_component__WEBPACK_IMPORTED_MODULE_11__["PatientDetailAuditComponent"]],
            providers: [_core_data__WEBPACK_IMPORTED_MODULE_5__["PatientClient"], _core_services__WEBPACK_IMPORTED_MODULE_6__["PageService"]]
        })
    ], PatientsModule);
    return PatientsModule;
}());



/***/ }),

/***/ "./app/providers/provider-certificate-detail/provider-certificate-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./app/providers/provider-certificate-detail/provider-certificate-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <!--{{id}}-->\n  <!--\n  <ul *ngIf=\"list.length\">\n    <li *ngFor=\"let item of list\">{{item}}</li>\n  </ul>\n-->\n<form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n  <!-- fields start -->\n  <div class=\"form-group row\">\n    <label for=\"name\" class=\"col-sm-3 form-control-label\">Name</label>\n      <div class=\"col-sm-9\">\n        <input id=\"name\" type=\"text\" formControlName=\"name\" class=\"form-control\">\n        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['name']) && formDir.submitted\">\n          Required.\n        </span>\n        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['name']) && formDir.submitted\">\n          Must be at least 4 characters long.\n        </span>\n        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['name']) && formDir.submitted\">\n          Must be less than 128 characters long.\n        </span>\n      </div>\n  </div>\n\n  <div class=\"form-group row\">\n      <label for=\"nameArabic\" class=\"col-sm-3 form-control-label\">Name -Arabic</label>\n        <div class=\"col-sm-9\">\n          <input id=\"nameArabic\" type=\"text\" formControlName=\"nameArabic\" class=\"form-control\">\n          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['nameArabic']) && formDir.submitted\">\n            Required.\n          </span>\n          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['nameArabic']) && formDir.submitted\">\n            Must be at least 4 characters long.\n          </span>\n          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['nameArabic']) && formDir.submitted\">\n            Must be less than 128 characters long.\n          </span>\n        </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <label for=\"notes\" class=\"col-sm-3 form-control-label\">Notes</label>\n      <div class=\"col-sm-9\">\n        <input id=\"notes\" type=\"text\" formControlName=\"notes\" class=\"form-control\">\n        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['notes']) && formDir.submitted\">\n          Required.\n        </span>\n        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['notes']) && formDir.submitted\">\n          Must be at least 4 characters long.\n        </span>\n        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['notes']) && formDir.submitted\">\n          Must be less than 128 characters long.\n        </span>\n      </div>\n  </div>\n\n  <div class=\"form-group row\">\n      <label for=\"notesArabic\" class=\"col-sm-3 form-control-label\">Notes -Arabic</label>\n        <div class=\"col-sm-9\">\n          <input id=\"notesArabic\" type=\"text\" formControlName=\"notesArabic\" class=\"form-control\">\n          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['notesArabic']) && formDir.submitted\">\n            Required.\n          </span>\n          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['notesArabic']) && formDir.submitted\">\n            Must be at least 4 characters long.\n          </span>\n          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['notesArabic']) && formDir.submitted\">\n            Must be less than 128 characters long.\n          </span>\n        </div>\n  </div>\n\n<!--\n<div class=\"form-group row\">\n  <label for=\"Rank\" class=\"col-sm-3 form-control-label\">Display Order</label>\n  <div class=\"col-sm-9\">\n    <input type=\"text\" formControlName=\"rank\" class=\"form-control\">\n    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('onlynumber', ['rank']) && formDir.submitted\">\n      Numbers Only.\n    </span>\n  </div>\n</div>\n<div class=\"form-group row\">\n    <label for=\"DateFrom\" class=\"col-sm-3 form-control-label\">From</label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"From Date\" bsDatepicker formControlName=\"dateFrom\" />\n    </div>\n</div>\n<div class=\"form-group row\">\n    <label for=\"DateTo\" class=\"col-sm-3 form-control-label\">To</label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"To Date\" bsDatepicker formControlName=\"dateTo\" />\n    </div>\n</div>\n-->\n\n<div class=\"form-group row\">\n  <div class=\"offset-sm-3 col-sm-9\">\n    <div class=\"checkbox\">\n      <label> <input type=\"checkbox\" class=\"i-checks\" formControlName=\"isEnabled\"> Enabled </label>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n  <!-- fields end -->\n  <!-- buttons start -->\n  <!--\n  <div class=\"form-group row\">\n    <div class=\"offset-sm-3 col-sm-9\">\n      <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n      <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n    </div>\n  </div>\n  -->\n  <!-- buttons end -->\n</form>\n</div>\n<div class=\"modal-footer\">\n  <!--<button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary m-r-xs\">Save</button>-->\n  <button type=\"button\" class=\"btn btn-primary m-r-xs\" (click)=\"save()\">Save</button>\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "./app/providers/provider-certificate-detail/provider-certificate-detail.component.scss":
/*!**********************************************************************************************!*\
  !*** ./app/providers/provider-certificate-detail/provider-certificate-detail.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/providers/provider-certificate-detail/provider-certificate-detail.component.ts":
/*!********************************************************************************************!*\
  !*** ./app/providers/provider-certificate-detail/provider-certificate-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProviderCertificateDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderCertificateDetailComponent", function() { return ProviderCertificateDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/validators */ "./app/core/validators/index.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "../node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProviderCertificateDetailComponent = /** @class */ (function () {
    function ProviderCertificateDetailComponent(bsModalRef, client, fb) {
        this.bsModalRef = bsModalRef;
        this.client = client;
        this.fb = fb;
        this.isEdit = true;
        this.createForm();
    }
    ProviderCertificateDetailComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            id: '',
            rank: [0, [_core_validators__WEBPACK_IMPORTED_MODULE_3__["NumberValidator"]]],
            isEnabled: true,
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            nameArabic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            notes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            notesArabic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            dateFrom: '',
            dateTo: '',
            providerId: ''
        });
    };
    ProviderCertificateDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isEdit) {
            this.client.get(this.id).subscribe(function (resp) {
                console.log(resp);
                _this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
    };
    ProviderCertificateDetailComponent.prototype.save = function () {
        var _this = this;
        console.log('save ' + this.itemForm.valid + ' ' + this.itemForm.value);
        if (!this.itemForm.valid) {
            return;
        }
        if (this.isEdit) {
            this.client.save(this.id, this.itemForm.value)
                .subscribe(function () {
                // this.router.navigate(['providers/' + this.page.typeFlag]);
                _this.bsModalRef.hide();
            }, function (error) {
                _this.bsModalRef.hide();
                console.log(error);
            });
        }
        else {
            this.client.create(this.itemForm.value)
                .subscribe(function () {
                // this.router.navigate(['providers/' + this.page.typeFlag]);
                _this.bsModalRef.hide();
            }, function (error) {
                _this.bsModalRef.hide();
                console.log(error);
            });
        }
        // console.log(this.itemForm.value);
    };
    ProviderCertificateDetailComponent.prototype.cancel = function () {
        // this.router.navigate(['providers/' + this.page.typeFlag]);
    };
    ProviderCertificateDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provider-certificate-detail',
            template: __webpack_require__(/*! ./provider-certificate-detail.component.html */ "./app/providers/provider-certificate-detail/provider-certificate-detail.component.html"),
            styles: [__webpack_require__(/*! ./provider-certificate-detail.component.scss */ "./app/providers/provider-certificate-detail/provider-certificate-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"], _core_data__WEBPACK_IMPORTED_MODULE_2__["CertificateClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ProviderCertificateDetailComponent);
    return ProviderCertificateDetailComponent;
}());



/***/ }),

/***/ "./app/providers/provider-certificate-list/provider-certificate-list.component.html":
/*!******************************************************************************************!*\
  !*** ./app/providers/provider-certificate-list/provider-certificate-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n      <h2>{{title}}</h2>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"tabs-container\">\n                    <ul class=\"nav nav-tabs\">\n                        <li class=\"\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', typeFlag,'edit', id]\">Basic</a>\n                        </li>\n                        <li class=\"\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', typeFlag,'edit', id, 'address']\">Address</a>\n                        </li>\n                        <!--\n                        <li class=\"\">\n                            <a data-toggle=\"tab\" [routerLink]=\"['/providers', typeFlag,'edit', id, 'specialties']\">Specialties</a>\n                        </li>\n                        -->\n                        <li class=\"active\">\n                            <a data-toggle=\"tab\" [routerLink]=\"['/providers', typeFlag,'edit', id, 'certificates']\">Certificates</a>\n                        </li>\n                        <li class=\"\">\n                            <a data-toggle=\"tab\" [routerLink]=\"['/providers', typeFlag,'edit', id, 'experiences']\">Experiences</a>\n                        </li>\n                        <!--\n                        <li class=\"\">\n                            <a data-toggle=\"tab\" [routerLink]=\"['/providers', typeFlag,'edit', id, 'audit']\">Audit</a>\n                        </li>\n                        -->\n                    </ul>\n                </div>\n                <div class=\"ibox-content\">\n                    <div class=\"tab-content\">\n                        <ngx-datatable class=\"bootstrap\"\n                        [rows]=\"items.result\"\n                        [loadingIndicator]=\"loadingIndicator\"\n                        [headerHeight]=\"40\"\n                        [footerHeight]=\"40\"\n                        [columnMode]=\"'force'\"\n                        [rowHeight]=\"40\"\n                        [externalPaging]=\"true\"\n                        [count]=\"count\"\n                        [offset]=\"items.pageIndex\"\n                        [limit]=\"items.pageSize\"\n                        (page)='loadPage($event)'>\n                            <ngx-datatable-column name=\"Rank\" prop=\"rank\" [width]=\"80\"></ngx-datatable-column>\n                            <ngx-datatable-column name=\"Name\" prop=\"name\"></ngx-datatable-column>\n                            <ngx-datatable-column name=\"Enabled\" prop=\"isEnabled\"></ngx-datatable-column>\n                            <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"id\" [width]=\"80\">\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                                    <button md-icon-button class=\"btn-white\" (click)=\"deleteConfirm(value)\">\n                                        <i class=\"fa fa-trash\"></i>\n                                    </button>\n                                    <button md-icon-button class=\"btn-white\" (click)=\"openModalWithComponent(value)\">\n                                        <i class=\"fa fa-pencil\"></i>\n                                    </button>\n                                </ng-template>\n                            </ngx-datatable-column>\n                        </ngx-datatable>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./app/providers/provider-certificate-list/provider-certificate-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./app/providers/provider-certificate-list/provider-certificate-list.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/providers/provider-certificate-list/provider-certificate-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./app/providers/provider-certificate-list/provider-certificate-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProviderCertificateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderCertificateListComponent", function() { return ProviderCertificateListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _provider_certificate_detail_provider_certificate_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider-certificate-detail/provider-certificate-detail.component */ "./app/providers/provider-certificate-detail/provider-certificate-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProviderCertificateListComponent = /** @class */ (function () {
    function ProviderCertificateListComponent(client, router, route, pageSrv, modalService) {
        var _this = this;
        this.client = client;
        this.router = router;
        this.route = route;
        this.pageSrv = pageSrv;
        this.modalService = modalService;
        this.title = '';
        this.subTitle = 'List';
        this.count = 0;
        this.id = '';
        this.typeFlag = 0;
        this.loadAll = true;
        this.loadingIndicator = true;
        this.items = new _core_data__WEBPACK_IMPORTED_MODULE_2__["PagedResultOfCertificate"]();
        this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            _this.typeFlag = params['flag']; // (+) converts string 'id' to a number
            _this.title = _this.pageSrv.getListTitleForProvider(_this.typeFlag, _this.subTitle);
            _this.loadPage({ offset: 0, pageSize: 10 });
        });
    }
    ProviderCertificateListComponent.prototype.ngOnInit = function () {
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    // Modal
    ProviderCertificateListComponent.prototype.openModalWithComponent = function (rowId) {
        console.log(rowId);
        var initialState = {
            id: rowId,
            title: 'Experience'
        };
        this.bsModalRef = this.modalService.show(_provider_certificate_detail_provider_certificate_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProviderCertificateDetailComponent"], { initialState: initialState });
        // this.bsModalRef.content.closeBtnName = 'Save';
        // this.bsModalRef.content.closeBtnName = 'Cancel';
    };
    // Common
    ProviderCertificateListComponent.prototype.create = function () {
        this.router.navigate(['providers/create']);
    };
    ProviderCertificateListComponent.prototype.loadPage = function (para) {
        var _this = this;
        this.client.provider(this.id, para.offset, para.pageSize, this.loadAll).subscribe(function (res) {
            _this.items = res;
            _this.count = res.count;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        }, function (error) { return console.log(error); }, function () { return console.log('Get paged items complete', _this.items); });
    };
    ProviderCertificateListComponent.prototype.reloadPage = function () {
        this.loadPage({ offset: this.items.pageIndex, pageSize: this.items.pageSize });
    };
    ProviderCertificateListComponent.prototype.delete = function (id) {
        var _this = this;
        this.client.delete(id)
            .subscribe(function () {
            _this.reloadPage();
        }, function (error) {
            console.log(error);
        });
    };
    ProviderCertificateListComponent.prototype.deleteConfirm = function (id) {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this item: ?')) {
            this.delete(id);
            // event.confirm.resolve();
        }
        else {
            // event.confirm.reject();
        }
    };
    ProviderCertificateListComponent.prototype.toggleEnabled = function (e) {
        // console.log(e);
        // console.log(e.target.checked);
        this.loadAll = false;
        if (e.target.checked) {
            this.loadAll = true;
        }
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    ProviderCertificateListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provider-certificate-list',
            template: __webpack_require__(/*! ./provider-certificate-list.component.html */ "./app/providers/provider-certificate-list/provider-certificate-list.component.html"),
            styles: [__webpack_require__(/*! ./provider-certificate-list.component.scss */ "./app/providers/provider-certificate-list/provider-certificate-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_2__["CertificateClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], ProviderCertificateListComponent);
    return ProviderCertificateListComponent;
}());



/***/ }),

/***/ "./app/providers/provider-detail-address/provider-detail-address.component.html":
/*!**************************************************************************************!*\
  !*** ./app/providers/provider-detail-address/provider-detail-address.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-sm-8\">\n    <h2>{{title}}</h2>\n  </div>\n</div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"tabs-container\">\n              <ul class=\"nav nav-tabs\">\n                  <li class=\"\">\n                    <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id]\">Basic</a>\n                  </li>\n                  <li class=\"active\">\n                    <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'address']\">Address</a>\n                  </li>\n                  <!--\n                  <li class=\"\">\n                      <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'specialties']\">Specialties</a>\n                  </li>\n                  -->\n                  <li class=\"\">\n                      <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'certificates']\">Certificates</a>\n                  </li>\n                  <li class=\"\">\n                      <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'experiences']\">Experiences</a>\n                  </li>\n                  <!--\n                  <li class=\"\">\n                      <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'audit']\">Audit</a>\n                  </li>\n                  -->\n              </ul>\n          </div>\n          <div class=\"ibox-content\">\n              <form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n                <!-- fields start -->\n\n                <div class=\"form-group row\">\n                    <label for=\"select\" class=\"col-sm-3 form-control-label\">City</label>\n                    <div class=\"col-sm-9\">\n                      <select id=\"select\" formControlName=\"cityId\">\n                          <option *ngFor=\"let c of cityList\" [value]=\"c.id\">\n                            {{ c.name }}\n                          </option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label for=\"street\" class=\"col-sm-3 form-control-label\">Street</label>\n                  <div class=\"col-sm-9\">\n                      <input id=\"street\" type=\"text\" formControlName=\"street\" class=\"form-control\">\n                      <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['street']) && formDir.submitted\">\n                        Required.\n                      </span>\n                      <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['street']) && formDir.submitted\">\n                        Must be at least 3 characters long.\n                      </span>\n                      <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['street']) && formDir.submitted\">\n                        Must be less than 512 characters long.\n                      </span>\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label for=\"postCode\" class=\"col-sm-3 form-control-label\">Building No</label>\n                      <div class=\"col-sm-9\">\n                        <input id=\"postCode\" type=\"text\" formControlName=\"postCode\" class=\"form-control\">\n                        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['postCode']) && formDir.submitted\">\n                          Required.\n                        </span>\n                        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['postCode']) && formDir.submitted\">\n                          Must be at least 3 characters long.\n                        </span>\n                        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['postCode']) && formDir.submitted\">\n                          Must be less than 512 characters long.\n                        </span>\n                      </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label for=\"latitude\" class=\"col-sm-3 form-control-label\">Latitude</label>\n                      <div class=\"col-sm-9\">\n                        <input id=\"latitude\" type=\"text\" formControlName=\"latitude\" class=\"form-control\">\n                          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['latitude']) && formDir.submitted\">\n                            Required.\n                          </span>\n                      </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                      <label for=\"longitude\" class=\"col-sm-3 form-control-label\">Longitude</label>\n                        <div class=\"col-sm-9\">\n                          <input id=\"longitude\" type=\"text\" formControlName=\"longitude\" class=\"form-control\">\n                            <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['longitude']) && formDir.submitted\">\n                              Required.\n                            </span>\n                        </div>\n                  </div>\n                <!-- fields end -->\n                <!-- buttons start -->\n                <div class=\"form-group row\">\n                  <div class=\"offset-sm-3 col-sm-9\">\n                    <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n                    <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n                  </div>\n                </div>\n                <!-- buttons end -->\n              </form>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>  \n"

/***/ }),

/***/ "./app/providers/provider-detail-address/provider-detail-address.component.scss":
/*!**************************************************************************************!*\
  !*** ./app/providers/provider-detail-address/provider-detail-address.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/providers/provider-detail-address/provider-detail-address.component.ts":
/*!************************************************************************************!*\
  !*** ./app/providers/provider-detail-address/provider-detail-address.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProviderDetailAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderDetailAddressComponent", function() { return ProviderDetailAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/validators */ "./app/core/validators/index.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProviderDetailAddressComponent = /** @class */ (function () {
    function ProviderDetailAddressComponent(client, cityClient, fb, activatedRoute, router, pageSrv) {
        var _this = this;
        this.client = client;
        this.cityClient = cityClient;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageSrv = pageSrv;
        this.id = '';
        this.title = 'Create';
        this.page = new _core_services__WEBPACK_IMPORTED_MODULE_3__["ActivatedPage"]();
        this.cityList = new Array();
        this.page = this.pageSrv.getActivatedPage(this.activatedRoute);
        this.cityClient.all(0, false).subscribe(function (r) {
            // console.log(r);
            _this.cityList = r;
        }, function (error) { return console.log(error); }, function () { return console.log('get cities complete'); });
        this.createForm();
        // this.title = this.pageSrv.getListTitleForProvider(this.page.typeFlag, this.page.title);
    }
    ProviderDetailAddressComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            id: '',
            cityId: '',
            cityName: '',
            cityNameArabic: '',
            street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(512)]],
            postCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
            latitude: [0, [_core_validators__WEBPACK_IMPORTED_MODULE_4__["DecimalValidator"]]],
            longitude: [0, [_core_validators__WEBPACK_IMPORTED_MODULE_4__["DecimalValidator"]]],
            updatedAt: ''
        });
    };
    ProviderDetailAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.page.isEdit) {
            this.client.addressGet(this.page.id).subscribe(function (resp) {
                console.log(resp);
                _this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
    };
    ProviderDetailAddressComponent.prototype.save = function () {
        var _this = this;
        if (!this.itemForm.valid) {
            return;
        }
        if (this.page.isEdit) {
            console.log(this.itemForm.value);
            this.client.addressPut(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['providers/' + _this.page.typeFlag]);
            }, function (error) {
                console.log(error);
                _this.router.navigate(['providers/' + _this.page.typeFlag]);
            });
        }
        else {
            this.client.addressPost(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['providers/' + _this.page.typeFlag]);
            }, function (error) {
                console.log(error);
                _this.router.navigate(['providers/' + _this.page.typeFlag]);
            });
        }
        // console.log(this.itemForm.value);
    };
    ProviderDetailAddressComponent.prototype.cancel = function () {
        this.router.navigate(['providers/' + this.page.typeFlag]);
    };
    ProviderDetailAddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provider-detail-address',
            template: __webpack_require__(/*! ./provider-detail-address.component.html */ "./app/providers/provider-detail-address/provider-detail-address.component.html"),
            styles: [__webpack_require__(/*! ./provider-detail-address.component.scss */ "./app/providers/provider-detail-address/provider-detail-address.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_5__["ProviderClient"],
            _core_data__WEBPACK_IMPORTED_MODULE_5__["CityClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], ProviderDetailAddressComponent);
    return ProviderDetailAddressComponent;
}());



/***/ }),

/***/ "./app/providers/provider-detail-audit/provider-detail-audit.component.html":
/*!**********************************************************************************!*\
  !*** ./app/providers/provider-detail-audit/provider-detail-audit.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n      <h2>{{title}}</h2>\n    </div>\n  </div>\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"tabs-container\">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"\">\n                      <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id]\">Basic</a>\n                    </li>\n                    <li class=\"\">\n                      <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'address']\">Address</a>\n                    </li>\n                    <li class=\"\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'specialties']\">Specialties</a>\n                    </li>\n                    <li class=\"\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'certificates']\">Certificates</a>\n                    </li>\n                    <li class=\"\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'experiences']\">Experiences</a>\n                    </li>\n                    <li class=\"active\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'audit']\">Audit</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"ibox-content\">\n                <form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n                    <!-- fields start -->\n                    <div class=\"form-group row\">\n                        <label for=\"joinDate\" class=\"col-sm-3 form-control-label\">Join Date</label>\n                        <div class=\"col-sm-9\">\n                            <input id=\"joinDate\" type=\"text\" formControlName=\"joinDate\" class=\"form-control\">\n                            <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['joinDate']) && formDir.submitted\">\n                                Required.\n                            </span>\n                        </div>\n                    </div>                    \n\n                    <div class=\"form-group row\">\n                        <label for=\"ip\" class=\"col-sm-3 form-control-label\">IP</label>\n                        <div class=\"col-sm-9\">\n                            <input id=\"ip\" type=\"text\" formControlName=\"ip\" class=\"form-control\">\n                            <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['ip']) && formDir.submitted\">\n                                Required.\n                            </span>\n                            <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['ip']) && formDir.submitted\">\n                                Must be at least 15 characters long.\n                            </span>\n                            <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['ip']) && formDir.submitted\">\n                                Must be less than 16 characters long.\n                            </span>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"createdBy\" class=\"col-sm-3 form-control-label\">Created By</label>\n                        <div class=\"col-sm-9\">\n                            <input id=\"createdBy\" type=\"text\" formControlName=\"createdBy\" class=\"form-control\">\n                            <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['createdBy']) && formDir.submitted\">\n                                Required.\n                            </span>\n                            <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['createdBy']) && formDir.submitted\">\n                                Must be at least 3 characters long.\n                            </span>\n                            <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['createdBy']) && formDir.submitted\">\n                                Must be less than 256 characters long.\n                            </span>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"ip\" class=\"col-sm-3 form-control-label\">Edited By</label>\n                        <div class=\"col-sm-9\">\n                            <input id=\"editedBy\" type=\"text\" formControlName=\"editedBy\" class=\"form-control\">\n                            <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['editedBy']) && formDir.submitted\">\n                                Required.\n                            </span>\n                            <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['editedBy']) && formDir.submitted\">\n                                Must be at least 3 characters long.\n                            </span>\n                            <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['editedBy']) && formDir.submitted\">\n                                Must be less than 256 characters long.\n                            </span>\n                        </div>\n                    </div>\n\n\n\n\n                    <!-- fields end -->\n                    <!-- buttons start -->\n                    <div class=\"form-group row\">\n                        <div class=\"offset-sm-3 col-sm-9\">\n                            <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n                            <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n                        </div>\n                    </div>\n                    <!-- buttons end -->\n                </form>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>  \n  "

/***/ }),

/***/ "./app/providers/provider-detail-audit/provider-detail-audit.component.scss":
/*!**********************************************************************************!*\
  !*** ./app/providers/provider-detail-audit/provider-detail-audit.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/providers/provider-detail-audit/provider-detail-audit.component.ts":
/*!********************************************************************************!*\
  !*** ./app/providers/provider-detail-audit/provider-detail-audit.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProviderDetailAuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderDetailAuditComponent", function() { return ProviderDetailAuditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProviderDetailAuditComponent = /** @class */ (function () {
    function ProviderDetailAuditComponent(client, fb, activatedRoute, router, pageSrv) {
        this.client = client;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageSrv = pageSrv;
        this.id = '';
        this.title = 'Create';
        this.page = new _core_services__WEBPACK_IMPORTED_MODULE_3__["ActivatedPage"]();
        this.page = this.pageSrv.getActivatedPage(this.activatedRoute);
        this.createForm();
        // this.title = this.pageSrv.getListTitleForProvider(this.page.typeFlag, this.page.title);
    }
    ProviderDetailAuditComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            id: '',
            createdBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)]],
            editedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)]],
            joinDate: '',
            ip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]]
        });
    };
    ProviderDetailAuditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.page.isEdit) {
            this.client.auditGet(this.page.id).subscribe(function (resp) {
                console.log(resp);
                _this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
    };
    ProviderDetailAuditComponent.prototype.save = function () {
        var _this = this;
        if (!this.itemForm.valid) {
            return;
        }
        if (this.page.isEdit) {
            this.client.auditPut(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['providers/' + _this.page.typeFlag]);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.client.auditPost(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['providers/' + _this.page.typeFlag]);
            }, function (error) {
                console.log(error);
            });
        }
        // console.log(this.itemForm.value);
    };
    ProviderDetailAuditComponent.prototype.cancel = function () {
        this.router.navigate(['providers/' + this.page.typeFlag]);
    };
    ProviderDetailAuditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provider-detail-audit',
            template: __webpack_require__(/*! ./provider-detail-audit.component.html */ "./app/providers/provider-detail-audit/provider-detail-audit.component.html"),
            styles: [__webpack_require__(/*! ./provider-detail-audit.component.scss */ "./app/providers/provider-detail-audit/provider-detail-audit.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_4__["ProviderClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], ProviderDetailAuditComponent);
    return ProviderDetailAuditComponent;
}());



/***/ }),

/***/ "./app/providers/provider-detail-basic/provider-detail-basic.component.html":
/*!**********************************************************************************!*\
  !*** ./app/providers/provider-detail-basic/provider-detail-basic.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n        <h2>{{title}}</h2>\n    </div>\n  </div>\n  \n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"tabs-container\">\n            <tabset>\n                <tab heading=\"Basic title\" id=\"tab1\">Basic content</tab>\n                <tab heading=\"Basic Title 1\"  active=\"true\">Basic content 1</tab>\n                <tab heading=\"Basic Title 2\">Basic content 2</tab>\n              </tabset>\n            <!--\n            <tabset class=\"nav nav-tabs\">\n                <li class=\"nav-item active\">\n                <tab (select)=\"goToLink('/base')\" [active]=\"tabset\" class=\"nav-item active\">\n                  <ng-template tabHeading>\n                    Base\n                  </ng-template>\n                </tab>\n                </li>\n                <li class=\"\">\n                <tab (select)=\"goToLink('/address')\">\n                  <ng-template tabHeading>\n                    Address\n                  </ng-template>\n                </tab>\n               </li>\n              </tabset>\n            -->\n        </div>\n        <div class=\"ibox-content\">\n          <form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n            <!-- fields start -->\n            <div class=\"form-group row\">\n              <label for=\"givenName\" class=\"col-sm-3 form-control-label\">First Name</label>\n                <div class=\"col-sm-9\">\n                  <input id=\"givenName\" type=\"text\" formControlName=\"givenName\" class=\"form-control\">\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['givenName']) && formDir.submitted\">\n                    Required.\n                  </span>\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['givenName']) && formDir.submitted\">\n                    Must be at least 4 characters long.\n                  </span>\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['givenName']) && formDir.submitted\">\n                    Must be less than 128 characters long.\n                  </span>\n                </div>\n            </div>\n  \n            <div class=\"form-group row\">\n                <label for=\"familyName\" class=\"col-sm-3 form-control-label\">Family Name</label>\n                  <div class=\"col-sm-9\">\n                    <input id=\"familyName\" type=\"text\" formControlName=\"familyName\" class=\"form-control\">\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['familyName']) && formDir.submitted\">\n                      Required.\n                    </span>\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['familyName']) && formDir.submitted\">\n                      Must be at least 4 characters long.\n                    </span>\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['familyName']) && formDir.submitted\">\n                      Must be less than 128 characters long.\n                    </span>\n                  </div>\n            </div>\n  \n            <!-- Gender -->\n            <div class=\"form-group row\">\n              <label for=\"Gender\" class=\"col-sm-3 form-control-label\">Gender</label>\n              <div class=\"col-sm-9\">\n                <div class=\"form-check form-check-inline\">\n                  <label class=\"custom-control custom-radio\">\n                    <input id=\"gender-male\"\n                         type=\"radio\"\n                         class=\"custom-control-input\"\n                         [value]=\"1\"\n                         formControlName=\"gender\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">Male</span>\n                  </label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <label class=\"custom-control custom-radio\">\n                    <input id=\"gender-female\"\n                         type=\"radio\"\n                         class=\"custom-control-input\"\n                         [value]=\"2\"\n                         formControlName=\"gender\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">Female</span>\n                  </label>\n                </div>\n              </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"Rank\" class=\"col-sm-3 form-control-label\">Display Order</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" formControlName=\"rank\" class=\"form-control\">\n              <span class=\"text-danger\" *ngIf=\"itemForm.hasError('onlynumber', ['rank']) && formDir.submitted\">\n                Numbers Only.\n              </span>\n            </div>\n          </div>\n          \n          <div class=\"form-group row\">\n            <div class=\"offset-sm-3 col-sm-9\">\n              <div class=\"checkbox\">\n                <label> <input type=\"checkbox\" class=\"i-checks\" formControlName=\"isEnabled\"> Enabled </label>\n              </div>\n            </div>\n          </div>\n            <!-- fields end -->\n            <!-- buttons start -->\n            <div class=\"form-group row\">\n              <div class=\"offset-sm-3 col-sm-9\">\n                <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n                <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n              </div>\n            </div>\n            <!-- buttons end -->\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./app/providers/provider-detail-basic/provider-detail-basic.component.scss":
/*!**********************************************************************************!*\
  !*** ./app/providers/provider-detail-basic/provider-detail-basic.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/providers/provider-detail-basic/provider-detail-basic.component.ts":
/*!********************************************************************************!*\
  !*** ./app/providers/provider-detail-basic/provider-detail-basic.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProviderDetailBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderDetailBasicComponent", function() { return ProviderDetailBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/validators */ "./app/core/validators/index.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProviderDetailBasicComponent = /** @class */ (function () {
    function ProviderDetailBasicComponent(client, fb, activatedRoute, router, pageSrv) {
        this.client = client;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageSrv = pageSrv;
        this.id = '';
        this.title = 'Create';
        this.page = new _core_services__WEBPACK_IMPORTED_MODULE_3__["ActivatedPage"]();
        this.page = this.pageSrv.getActivatedPage(this.activatedRoute);
        this.createForm();
        // this.title = this.pageSrv.getListTitleForProvider(this.page.typeFlag, this.page.title);
    }
    ProviderDetailBasicComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            id: '',
            userId: '',
            providerType: this.page.typeFlag,
            rank: [0, [_core_validators__WEBPACK_IMPORTED_MODULE_4__["NumberValidator"]]],
            isEnabled: true,
            givenName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            familyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            gender: '',
        });
    };
    ProviderDetailBasicComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.page.isEdit) {
            this.client.get(this.page.id).subscribe(function (resp) {
                console.log(resp);
                _this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
    };
    ProviderDetailBasicComponent.prototype.save = function () {
        var _this = this;
        if (!this.itemForm.valid) {
            return;
        }
        if (this.page.isEdit) {
            this.client.save(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['providers/' + _this.page.typeFlag]);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.client.create(this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['providers/' + _this.page.typeFlag]);
            }, function (error) {
                console.log(error);
            });
        }
        // console.log(this.itemForm.value);
    };
    ProviderDetailBasicComponent.prototype.cancel = function () {
        this.router.navigate(['providers/' + this.page.typeFlag]);
    };
    ProviderDetailBasicComponent.prototype.goToLink = function (link) {
        // this.router.navigateByUrl(link);
        // providers/1/edit/0b0e5233-40ad-41a5-bb8f-bbac7e2d8c76
        console.log(link);
        this.router.navigate(['providers/' + this.page.typeFlag + 'edit/0b0e5233-40ad-41a5-bb8f-bbac7e2d8c76']);
    };
    ProviderDetailBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provider-detail-basic',
            template: __webpack_require__(/*! ./provider-detail-basic.component.html */ "./app/providers/provider-detail-basic/provider-detail-basic.component.html"),
            styles: [__webpack_require__(/*! ./provider-detail-basic.component.scss */ "./app/providers/provider-detail-basic/provider-detail-basic.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_5__["ProviderClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], ProviderDetailBasicComponent);
    return ProviderDetailBasicComponent;
}());



/***/ }),

/***/ "./app/providers/provider-detail/provider-detail.component.html":
/*!**********************************************************************!*\
  !*** ./app/providers/provider-detail/provider-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-sm-8\">\n      <h2>{{title}}</h2>\n  </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"ibox float-e-margins\">\n      <div class=\"tabs-container\">\n\n          <ul class=\"nav nav-tabs\">\n              <li class=\"active\">\n                <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id]\">Basic</a>\n              </li>\n              <li class=\"\">\n                <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'address']\">Address</a>\n              </li>\n              <!--\n              <li class=\"\">\n                  <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'specialties']\">Specialties</a>\n              </li>\n              -->\n              <li class=\"\">\n                  <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'certificates']\">Certificates</a>\n              </li>\n              <li class=\"\">\n                  <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'experiences']\">Experiences</a>\n              </li>\n              <!--\n              <li class=\"\">\n                  <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'audit']\">Audit</a>\n              </li>\n              -->\n          </ul>\n\n        <!--\n          <tabset>\n              <tab class=\"nav nav-item\">\n                  <ng-template tabHeading>\n                          <a class=\"routing_link\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'basic']\">Basic</a>\n                  </ng-template>\n              </tab>\n              <tab [active]=\"tabset\" >\n                  <ng-template tabHeading>\n                      <a class=\"routing_link\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'address']\">Address</a>\n                  </ng-template>\n              </tab>\n              <tab>\n                  <ng-template tabHeading>\n                          <a class=\"nav nav-item\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'certificates']\">Certificates</a>\n                  </ng-template>\n              </tab>\n              <tab>\n                  <ng-template tabHeading>\n                          <a class=\"routing_link\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'audit']\">Audit</a>\n                  </ng-template>\n              </tab>\n          </tabset> \n        -->\n\n        <!--\n          <tabset>\n              <tab heading=\"Basic\"   [routerLink]=\"['/providers', page.typeFlag]\"></tab>\n              <tab heading=\"Address\" [routerLink]=\"['/providers', page.typeFlag, 'address', page.id]\"></tab>\n              <tab heading=\"Audit\"   [routerLink]=\"['/providers', page.typeFlag, 'audit', page.id]\"></tab>\n          </tabset>\n        -->\n          <!--\n          <tabset class=\"nav nav-tabs\">\n              <li class=\"nav-item active\">\n              <tab (select)=\"goToLink('/base')\" [active]=\"tabset\" class=\"nav-item active\">\n                <ng-template tabHeading>\n                  Base\n                </ng-template>\n              </tab>\n              </li>\n              <li class=\"\">\n              <tab (select)=\"goToLink('/address')\">\n                <ng-template tabHeading>\n                  Address\n                </ng-template>\n              </tab>\n             </li>\n            </tabset>\n          -->\n      </div>\n      <div class=\"ibox-content\">\n          <form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n              <!-- fields start -->\n              <div class=\"form-group row\">\n                <label for=\"givenName\" class=\"col-sm-3 form-control-label\">First Name</label>\n                  <div class=\"col-sm-9\">\n                    <input id=\"givenName\" type=\"text\" formControlName=\"givenName\" class=\"form-control\">\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['givenName']) && formDir.submitted\">\n                      Required.\n                    </span>\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['givenName']) && formDir.submitted\">\n                      Must be at least 4 characters long.\n                    </span>\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['givenName']) && formDir.submitted\">\n                      Must be less than 128 characters long.\n                    </span>\n                  </div>\n              </div>\n    \n              <div class=\"form-group row\">\n                  <label for=\"familyName\" class=\"col-sm-3 form-control-label\">Family Name</label>\n                    <div class=\"col-sm-9\">\n                      <input id=\"familyName\" type=\"text\" formControlName=\"familyName\" class=\"form-control\">\n                      <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['familyName']) && formDir.submitted\">\n                        Required.\n                      </span>\n                      <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['familyName']) && formDir.submitted\">\n                        Must be at least 4 characters long.\n                      </span>\n                      <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['familyName']) && formDir.submitted\">\n                        Must be less than 128 characters long.\n                      </span>\n                    </div>\n              </div>\n    \n              <!-- Gender -->\n              <div class=\"form-group row\">\n                <label for=\"Gender\" class=\"col-sm-3 form-control-label\">Gender</label>\n                <div class=\"col-sm-9\">\n                  <div class=\"form-check form-check-inline\">\n                    <label class=\"custom-control custom-radio\">\n                      <input id=\"gender-male\"\n                           type=\"radio\"\n                           class=\"custom-control-input\"\n                           [value]=\"1\"\n                           formControlName=\"gender\">\n                      <span class=\"custom-control-indicator\"></span>\n                      <span class=\"custom-control-description\">Male</span>\n                    </label>\n                  </div>\n                  <div class=\"form-check form-check-inline\">\n                    <label class=\"custom-control custom-radio\">\n                      <input id=\"gender-female\"\n                           type=\"radio\"\n                           class=\"custom-control-input\"\n                           [value]=\"2\"\n                           formControlName=\"gender\">\n                      <span class=\"custom-control-indicator\"></span>\n                      <span class=\"custom-control-description\">Female</span>\n                    </label>\n                  </div>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"Rank\" class=\"col-sm-3 form-control-label\">Display Order</label>\n              <div class=\"col-sm-9\">\n                <input type=\"text\" formControlName=\"rank\" class=\"form-control\">\n                <span class=\"text-danger\" *ngIf=\"itemForm.hasError('onlynumber', ['rank']) && formDir.submitted\">\n                  Numbers Only.\n                </span>\n              </div>\n            </div>\n            \n            <div class=\"form-group row\">\n              <div class=\"offset-sm-3 col-sm-9\">\n                <div class=\"checkbox\">\n                  <label> <input type=\"checkbox\" class=\"i-checks\" formControlName=\"isEnabled\"> Enabled </label>\n                </div>\n              </div>\n            </div>\n              <!-- fields end -->\n              <!-- buttons start -->\n              <div class=\"form-group row\">\n                <div class=\"offset-sm-3 col-sm-9\">\n                  <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n                  <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n                </div>\n              </div>\n              <!-- buttons end -->\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./app/providers/provider-detail/provider-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./app/providers/provider-detail/provider-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/providers/provider-detail/provider-detail.component.ts":
/*!********************************************************************!*\
  !*** ./app/providers/provider-detail/provider-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProviderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderDetailComponent", function() { return ProviderDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/validators */ "./app/core/validators/index.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProviderDetailComponent = /** @class */ (function () {
    function ProviderDetailComponent(client, fb, activatedRoute, router, pageSrv) {
        this.client = client;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageSrv = pageSrv;
        this.id = '';
        this.title = 'Create';
        this.page = new _core_services__WEBPACK_IMPORTED_MODULE_3__["ActivatedPage"]();
        this.page = this.pageSrv.getActivatedPage(this.activatedRoute);
        this.createForm();
        // this.title = this.pageSrv.getListTitleForProvider(this.page.typeFlag, this.page.title);
    }
    ProviderDetailComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            id: '',
            userId: '',
            providerType: this.page.typeFlag,
            rank: [0, [_core_validators__WEBPACK_IMPORTED_MODULE_4__["NumberValidator"]]],
            isEnabled: true,
            givenName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            familyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            gender: ''
        });
    };
    ProviderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.page.isEdit) {
            this.client.get(this.page.id).subscribe(function (resp) {
                console.log(resp);
                _this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
    };
    ProviderDetailComponent.prototype.save = function () {
        var _this = this;
        if (!this.itemForm.valid) {
            return;
        }
        if (this.page.isEdit) {
            this.client.save(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['providers/' + _this.page.typeFlag]);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.client.create(this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['providers/' + _this.page.typeFlag]);
            }, function (error) {
                console.log(error);
            });
        }
        // console.log(this.itemForm.value);
    };
    ProviderDetailComponent.prototype.cancel = function () {
        this.router.navigate(['providers/' + this.page.typeFlag]);
    };
    ProviderDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provider-detail',
            template: __webpack_require__(/*! ./provider-detail.component.html */ "./app/providers/provider-detail/provider-detail.component.html"),
            styles: [__webpack_require__(/*! ./provider-detail.component.scss */ "./app/providers/provider-detail/provider-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_5__["ProviderClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], ProviderDetailComponent);
    return ProviderDetailComponent;
}());



/***/ }),

/***/ "./app/providers/provider-experience-detail/provider-experience-detail.component.html":
/*!********************************************************************************************!*\
  !*** ./app/providers/provider-experience-detail/provider-experience-detail.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <!--{{id}}-->\n  <!--\n  <ul *ngIf=\"list.length\">\n    <li *ngFor=\"let item of list\">{{item}}</li>\n  </ul>\n-->\n<form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n  <!-- fields start -->\n  <div class=\"form-group row\">\n    <label for=\"name\" class=\"col-sm-3 form-control-label\">Name</label>\n      <div class=\"col-sm-9\">\n        <input id=\"name\" type=\"text\" formControlName=\"name\" class=\"form-control\">\n        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['name']) && formDir.submitted\">\n          Required.\n        </span>\n        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['name']) && formDir.submitted\">\n          Must be at least 4 characters long.\n        </span>\n        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['name']) && formDir.submitted\">\n          Must be less than 128 characters long.\n        </span>\n      </div>\n  </div>\n\n  <div class=\"form-group row\">\n      <label for=\"nameArabic\" class=\"col-sm-3 form-control-label\">Name -Arabic</label>\n        <div class=\"col-sm-9\">\n          <input id=\"nameArabic\" type=\"text\" formControlName=\"nameArabic\" class=\"form-control\">\n          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['nameArabic']) && formDir.submitted\">\n            Required.\n          </span>\n          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['nameArabic']) && formDir.submitted\">\n            Must be at least 4 characters long.\n          </span>\n          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['nameArabic']) && formDir.submitted\">\n            Must be less than 128 characters long.\n          </span>\n        </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <label for=\"notes\" class=\"col-sm-3 form-control-label\">Notes</label>\n      <div class=\"col-sm-9\">\n        <input id=\"notes\" type=\"text\" formControlName=\"notes\" class=\"form-control\">\n        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['notes']) && formDir.submitted\">\n          Required.\n        </span>\n        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['notes']) && formDir.submitted\">\n          Must be at least 4 characters long.\n        </span>\n        <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['notes']) && formDir.submitted\">\n          Must be less than 128 characters long.\n        </span>\n      </div>\n  </div>\n\n  <div class=\"form-group row\">\n      <label for=\"notesArabic\" class=\"col-sm-3 form-control-label\">Notes -Arabic</label>\n        <div class=\"col-sm-9\">\n          <input id=\"notesArabic\" type=\"text\" formControlName=\"notesArabic\" class=\"form-control\">\n          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['notesArabic']) && formDir.submitted\">\n            Required.\n          </span>\n          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['notesArabic']) && formDir.submitted\">\n            Must be at least 4 characters long.\n          </span>\n          <span class=\"text-danger\" *ngIf=\"itemForm.hasError('maxlength', ['notesArabic']) && formDir.submitted\">\n            Must be less than 128 characters long.\n          </span>\n        </div>\n  </div>\n\n<!--\n<div class=\"form-group row\">\n  <label for=\"Rank\" class=\"col-sm-3 form-control-label\">Display Order</label>\n  <div class=\"col-sm-9\">\n    <input type=\"text\" formControlName=\"rank\" class=\"form-control\">\n    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('onlynumber', ['rank']) && formDir.submitted\">\n      Numbers Only.\n    </span>\n  </div>\n</div>\n<div class=\"form-group row\">\n    <label for=\"DateFrom\" class=\"col-sm-3 form-control-label\">From</label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"From Date\" bsDatepicker formControlName=\"dateFrom\" />\n    </div>\n</div>\n<div class=\"form-group row\">\n    <label for=\"DateTo\" class=\"col-sm-3 form-control-label\">To</label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"To Date\" bsDatepicker formControlName=\"dateTo\" />\n    </div>\n</div>\n-->\n\n<div class=\"form-group row\">\n  <div class=\"offset-sm-3 col-sm-9\">\n    <div class=\"checkbox\">\n      <label> <input type=\"checkbox\" class=\"i-checks\" formControlName=\"isEnabled\"> Enabled </label>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n  <!-- fields end -->\n  <!-- buttons start -->\n  <!--\n  <div class=\"form-group row\">\n    <div class=\"offset-sm-3 col-sm-9\">\n      <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n      <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n    </div>\n  </div>\n  -->\n  <!-- buttons end -->\n</form>\n</div>\n<div class=\"modal-footer\">\n  <!--<button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary m-r-xs\">Save</button>-->\n  <button type=\"button\" class=\"btn btn-primary m-r-xs\" (click)=\"save()\">Save</button>\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "./app/providers/provider-experience-detail/provider-experience-detail.component.scss":
/*!********************************************************************************************!*\
  !*** ./app/providers/provider-experience-detail/provider-experience-detail.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/providers/provider-experience-detail/provider-experience-detail.component.ts":
/*!******************************************************************************************!*\
  !*** ./app/providers/provider-experience-detail/provider-experience-detail.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProviderExperienceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderExperienceDetailComponent", function() { return ProviderExperienceDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/validators */ "./app/core/validators/index.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "../node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProviderExperienceDetailComponent = /** @class */ (function () {
    // closeBtnName: string;
    // saveBtnName: string;
    function ProviderExperienceDetailComponent(bsModalRef, client, fb) {
        this.bsModalRef = bsModalRef;
        this.client = client;
        this.fb = fb;
        this.isEdit = true;
        this.createForm();
    }
    ProviderExperienceDetailComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            id: '',
            rank: [0, [_core_validators__WEBPACK_IMPORTED_MODULE_3__["NumberValidator"]]],
            isEnabled: true,
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            nameArabic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            notes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            notesArabic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            dateFrom: '',
            dateTo: '',
            providerId: ''
        });
    };
    ProviderExperienceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isEdit) {
            this.client.get(this.id).subscribe(function (resp) {
                console.log(resp);
                _this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
    };
    ProviderExperienceDetailComponent.prototype.save = function () {
        var _this = this;
        console.log('save ' + this.itemForm.valid + ' ' + this.itemForm.value);
        if (!this.itemForm.valid) {
            return;
        }
        if (this.isEdit) {
            this.client.save(this.id, this.itemForm.value)
                .subscribe(function () {
                // this.router.navigate(['providers/' + this.page.typeFlag]);
                _this.bsModalRef.hide();
            }, function (error) {
                _this.bsModalRef.hide();
                console.log(error);
            });
        }
        else {
            this.client.create(this.itemForm.value)
                .subscribe(function () {
                // this.router.navigate(['providers/' + this.page.typeFlag]);
                _this.bsModalRef.hide();
            }, function (error) {
                _this.bsModalRef.hide();
                console.log(error);
            });
        }
        // console.log(this.itemForm.value);
    };
    ProviderExperienceDetailComponent.prototype.cancel = function () {
        // this.router.navigate(['providers/' + this.page.typeFlag]);
    };
    ProviderExperienceDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provider-experience-detail',
            template: __webpack_require__(/*! ./provider-experience-detail.component.html */ "./app/providers/provider-experience-detail/provider-experience-detail.component.html"),
            styles: [__webpack_require__(/*! ./provider-experience-detail.component.scss */ "./app/providers/provider-experience-detail/provider-experience-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"], _core_data__WEBPACK_IMPORTED_MODULE_2__["ExperienceClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ProviderExperienceDetailComponent);
    return ProviderExperienceDetailComponent;
}());



/***/ }),

/***/ "./app/providers/provider-experience-list/provider-experience-list.component.html":
/*!****************************************************************************************!*\
  !*** ./app/providers/provider-experience-list/provider-experience-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n      <h2>{{title}}</h2>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"tabs-container\">\n                    <ul class=\"nav nav-tabs\">\n                        <li class=\"\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', typeFlag,'edit', id]\">Basic</a>\n                        </li>\n                        <li class=\"\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', typeFlag,'edit', id, 'address']\">Address</a>\n                        </li>\n                        <!--\n                        <li class=\"\">\n                            <a data-toggle=\"tab\" [routerLink]=\"['/providers', typeFlag,'edit', id, 'specialties']\">Specialties</a>\n                        </li>\n                        -->\n                        <li class=\"\">\n                            <a data-toggle=\"tab\" [routerLink]=\"['/providers', typeFlag,'edit', id, 'certificates']\">Certificates</a>\n                        </li>\n                        <li class=\"active\">\n                            <a data-toggle=\"tab\" [routerLink]=\"['/providers', typeFlag,'edit', id, 'experiences']\">Experiences</a>\n                        </li>\n                        <!--\n                        <li class=\"\">\n                            <a data-toggle=\"tab\" [routerLink]=\"['/providers', typeFlag,'edit', id, 'audit']\">Audit</a>\n                        </li>\n                        -->\n                    </ul>\n                </div>\n                <div class=\"ibox-content\">\n                    <div class=\"tab-content\">\n                        <ngx-datatable class=\"bootstrap\"\n                        [rows]=\"items.result\"\n                        [loadingIndicator]=\"loadingIndicator\"\n                        [headerHeight]=\"40\"\n                        [footerHeight]=\"40\"\n                        [columnMode]=\"'force'\"\n                        [rowHeight]=\"40\"\n                        [externalPaging]=\"true\"\n                        [count]=\"count\"\n                        [offset]=\"items.pageIndex\"\n                        [limit]=\"items.pageSize\"\n                        (page)='loadPage($event)'>\n                            <ngx-datatable-column name=\"Rank\" prop=\"rank\" [width]=\"80\"></ngx-datatable-column>\n                            <ngx-datatable-column name=\"Name\" prop=\"name\"></ngx-datatable-column>\n                            <ngx-datatable-column name=\"Enabled\" prop=\"isEnabled\"></ngx-datatable-column>\n                            <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"id\" [width]=\"80\">\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                                    <button md-icon-button class=\"btn-white\" (click)=\"deleteConfirm(value)\">\n                                        <i class=\"fa fa-trash\"></i>\n                                    </button>\n                                    <button md-icon-button class=\"btn-white\" (click)=\"openModalWithComponent(value)\">\n                                        <i class=\"fa fa-pencil\"></i>\n                                    </button>\n                                </ng-template>\n                            </ngx-datatable-column>\n                        </ngx-datatable>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>  \n  "

/***/ }),

/***/ "./app/providers/provider-experience-list/provider-experience-list.component.scss":
/*!****************************************************************************************!*\
  !*** ./app/providers/provider-experience-list/provider-experience-list.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/providers/provider-experience-list/provider-experience-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./app/providers/provider-experience-list/provider-experience-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProviderExperienceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderExperienceListComponent", function() { return ProviderExperienceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _provider_experience_detail_provider_experience_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider-experience-detail/provider-experience-detail.component */ "./app/providers/provider-experience-detail/provider-experience-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProviderExperienceListComponent = /** @class */ (function () {
    function ProviderExperienceListComponent(client, router, route, pageSrv, modalService) {
        var _this = this;
        this.client = client;
        this.router = router;
        this.route = route;
        this.pageSrv = pageSrv;
        this.modalService = modalService;
        this.title = '';
        this.subTitle = 'List';
        this.count = 0;
        this.id = '';
        this.typeFlag = 0;
        this.loadAll = true;
        this.loadingIndicator = true;
        this.items = new _core_data__WEBPACK_IMPORTED_MODULE_2__["PagedResultOfExperience"]();
        this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            _this.typeFlag = params['flag']; // (+) converts string 'id' to a number
            _this.title = _this.pageSrv.getListTitleForProvider(_this.typeFlag, _this.subTitle);
            _this.loadPage({ offset: 0, pageSize: 10 });
        });
    }
    ProviderExperienceListComponent.prototype.ngOnInit = function () {
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    // Modal
    ProviderExperienceListComponent.prototype.openModalWithComponent = function (rowId) {
        console.log(rowId);
        var initialState = {
            id: rowId,
            title: 'Experience'
        };
        this.bsModalRef = this.modalService.show(_provider_experience_detail_provider_experience_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProviderExperienceDetailComponent"], { initialState: initialState });
        // this.bsModalRef.content.closeBtnName = 'Save';
        // this.bsModalRef.content.closeBtnName = 'Cancel';
    };
    // Common
    ProviderExperienceListComponent.prototype.create = function () {
        this.router.navigate(['providers/create']);
    };
    ProviderExperienceListComponent.prototype.loadPage = function (para) {
        var _this = this;
        this.client.provider(this.id, para.offset, para.pageSize, this.loadAll).subscribe(function (res) {
            _this.items = res;
            _this.count = res.count;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        }, function (error) { return console.log(error); }, function () { return console.log('Get paged items complete'); });
    };
    ProviderExperienceListComponent.prototype.reloadPage = function () {
        this.loadPage({ offset: this.items.pageIndex, pageSize: this.items.pageSize });
    };
    ProviderExperienceListComponent.prototype.delete = function (id) {
        var _this = this;
        this.client.delete(id)
            .subscribe(function () {
            _this.reloadPage();
        }, function (error) {
            console.log(error);
        });
    };
    ProviderExperienceListComponent.prototype.deleteConfirm = function (id) {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this item: ?')) {
            this.delete(id);
            // event.confirm.resolve();
        }
        else {
            // event.confirm.reject();
        }
    };
    ProviderExperienceListComponent.prototype.toggleEnabled = function (e) {
        // console.log(e);
        // console.log(e.target.checked);
        this.loadAll = false;
        if (e.target.checked) {
            this.loadAll = true;
        }
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    ProviderExperienceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provider-experience-list',
            template: __webpack_require__(/*! ./provider-experience-list.component.html */ "./app/providers/provider-experience-list/provider-experience-list.component.html"),
            styles: [__webpack_require__(/*! ./provider-experience-list.component.scss */ "./app/providers/provider-experience-list/provider-experience-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_2__["ExperienceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], ProviderExperienceListComponent);
    return ProviderExperienceListComponent;
}());



/***/ }),

/***/ "./app/providers/provider-list/provider-list.component.html":
/*!******************************************************************!*\
  !*** ./app/providers/provider-list/provider-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n        <h2>{{title}}</h2>\n    </div>\n    <div class=\"col-sm-4 m-t-md\">\n        <!--\n        <div class=\"pull-right\">\n            <button (click)=\"create()\" class=\"btn btn-primary btn-tn\">Add</button>\n        </div>\n        -->\n        <span class=\"pull-right m-xs m-r-md\">\n            <label> <input type=\"checkbox\" class=\"i-checks\" (change)=\"toggleEnabled($event)\"> Show all </label>\n        </span>\n    </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                    <ngx-datatable class=\"bootstrap\"\n                    [rows]=\"items.result\"\n                    [loadingIndicator]=\"loadingIndicator\"\n                    [headerHeight]=\"40\"\n                    [footerHeight]=\"40\"\n                    [columnMode]=\"'force'\"\n                    [rowHeight]=\"40\"\n                    [externalPaging]=\"true\"\n                    [count]=\"count\"\n                    [offset]=\"items.pageIndex\"\n                    [limit]=\"items.pageSize\"\n                    (page)='loadPage($event)'>\n                    <ngx-datatable-column name=\"Rank\" prop=\"rank\" [width]=\"80\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"Name\" prop=\"name\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"Enabled\" prop=\"isEnabled\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"id\" [width]=\"80\">\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <!--\n                            <button md-icon-button class=\"btn-white\" (click)=\"deleteConfirm(value)\">\n                                <i class=\"fa fa-trash\"></i>\n                            </button>\n                            -->\n                            <button md-icon-button class=\"btn-white\" [routerLink]=\"['edit', value]\">\n                                <i class=\"fa fa-pencil\"></i>\n                            </button>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    </ngx-datatable>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./app/providers/provider-list/provider-list.component.scss":
/*!******************************************************************!*\
  !*** ./app/providers/provider-list/provider-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/providers/provider-list/provider-list.component.ts":
/*!****************************************************************!*\
  !*** ./app/providers/provider-list/provider-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProviderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderListComponent", function() { return ProviderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProviderListComponent = /** @class */ (function () {
    function ProviderListComponent(client, router, route, pageSrv) {
        var _this = this;
        this.client = client;
        this.router = router;
        this.route = route;
        this.pageSrv = pageSrv;
        this.title = '';
        this.subTitle = 'List';
        this.count = 0;
        this.typeFlag = 0;
        this.loadAll = false;
        this.loadingIndicator = true;
        this.items = new _core_data__WEBPACK_IMPORTED_MODULE_2__["PagedResultOfProvider"]();
        this.route.params.subscribe(function (params) {
            _this.typeFlag = params['flag']; // (+) converts string 'id' to a number
            _this.title = _this.pageSrv.getListTitleForProvider(_this.typeFlag, _this.subTitle);
            _this.loadPage({ offset: 0, pageSize: 10 });
        });
    }
    ProviderListComponent.prototype.ngOnInit = function () {
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    // Common
    ProviderListComponent.prototype.create = function () {
        this.router.navigate(['providers/create']);
    };
    ProviderListComponent.prototype.loadPage = function (para) {
        var _this = this;
        this.client.page(para.offset, para.pageSize, this.typeFlag, this.loadAll).subscribe(function (res) {
            _this.items = res;
            _this.count = res.count;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        }, function (error) { return console.log(error); }, function () { return console.log('Get paged items complete'); });
    };
    ProviderListComponent.prototype.reloadPage = function () {
        this.loadPage({ offset: this.items.pageIndex, pageSize: this.items.pageSize });
    };
    ProviderListComponent.prototype.delete = function (id) {
        var _this = this;
        this.client.delete(id)
            .subscribe(function () {
            _this.reloadPage();
        }, function (error) {
            console.log(error);
        });
    };
    ProviderListComponent.prototype.deleteConfirm = function (id) {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this item: ?')) {
            this.delete(id);
            // event.confirm.resolve();
        }
        else {
            // event.confirm.reject();
        }
    };
    ProviderListComponent.prototype.toggleEnabled = function (e) {
        // console.log(e);
        // console.log(e.target.checked);
        this.loadAll = false;
        if (e.target.checked) {
            this.loadAll = true;
        }
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    ProviderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provider-list',
            template: __webpack_require__(/*! ./provider-list.component.html */ "./app/providers/provider-list/provider-list.component.html"),
            styles: [__webpack_require__(/*! ./provider-list.component.scss */ "./app/providers/provider-list/provider-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_2__["ProviderClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], ProviderListComponent);
    return ProviderListComponent;
}());



/***/ }),

/***/ "./app/providers/provider-specialty-detail/provider-specialty-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./app/providers/provider-specialty-detail/provider-specialty-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  provider-specialty-detail works!\n</p>\n"

/***/ }),

/***/ "./app/providers/provider-specialty-detail/provider-specialty-detail.component.scss":
/*!******************************************************************************************!*\
  !*** ./app/providers/provider-specialty-detail/provider-specialty-detail.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/providers/provider-specialty-detail/provider-specialty-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./app/providers/provider-specialty-detail/provider-specialty-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProviderSpecialtyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderSpecialtyDetailComponent", function() { return ProviderSpecialtyDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProviderSpecialtyDetailComponent = /** @class */ (function () {
    function ProviderSpecialtyDetailComponent() {
    }
    ProviderSpecialtyDetailComponent.prototype.ngOnInit = function () {
    };
    ProviderSpecialtyDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provider-specialty-detail',
            template: __webpack_require__(/*! ./provider-specialty-detail.component.html */ "./app/providers/provider-specialty-detail/provider-specialty-detail.component.html"),
            styles: [__webpack_require__(/*! ./provider-specialty-detail.component.scss */ "./app/providers/provider-specialty-detail/provider-specialty-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProviderSpecialtyDetailComponent);
    return ProviderSpecialtyDetailComponent;
}());



/***/ }),

/***/ "./app/providers/provider-specialty-list/provider-specialty-list.component.html":
/*!**************************************************************************************!*\
  !*** ./app/providers/provider-specialty-list/provider-specialty-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n      <h2>{{title}}</h2>\n    </div>\n  </div>\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"tabs-container\">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"\">\n                      <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id]\">Basic</a>\n                    </li>\n                    <li class=\"\">\n                      <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'address']\">Address</a>\n                    </li>\n                    <li class=\"active\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'specialties']\">Specialties</a>\n                    </li>\n                    <li class=\"\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'certificates']\">Certificates</a>\n                    </li>\n                    <li class=\"\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'experiences']\">Experiences</a>\n                    </li>\n                    <li class=\"\">\n                        <a data-toggle=\"tab\" [routerLink]=\"['/providers', page.typeFlag,'edit', page.id, 'audit']\">Audit</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"ibox-content\">\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>  \n  "

/***/ }),

/***/ "./app/providers/provider-specialty-list/provider-specialty-list.component.scss":
/*!**************************************************************************************!*\
  !*** ./app/providers/provider-specialty-list/provider-specialty-list.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/providers/provider-specialty-list/provider-specialty-list.component.ts":
/*!************************************************************************************!*\
  !*** ./app/providers/provider-specialty-list/provider-specialty-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProviderSpecialtyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderSpecialtyListComponent", function() { return ProviderSpecialtyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProviderSpecialtyListComponent = /** @class */ (function () {
    function ProviderSpecialtyListComponent(client, fb, activatedRoute, router, pageSrv) {
        this.client = client;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageSrv = pageSrv;
        this.id = '';
        this.title = 'Create';
        this.page = new _core_services__WEBPACK_IMPORTED_MODULE_3__["ActivatedPage"]();
        this.page = this.pageSrv.getActivatedPage(this.activatedRoute);
        this.createForm();
        // this.title = this.pageSrv.getListTitleForProvider(this.page.typeFlag, this.page.title);
    }
    ProviderSpecialtyListComponent.prototype.createForm = function () { };
    ProviderSpecialtyListComponent.prototype.ngOnInit = function () {
    };
    ProviderSpecialtyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provider-specialty-list',
            template: __webpack_require__(/*! ./provider-specialty-list.component.html */ "./app/providers/provider-specialty-list/provider-specialty-list.component.html"),
            styles: [__webpack_require__(/*! ./provider-specialty-list.component.scss */ "./app/providers/provider-specialty-list/provider-specialty-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_4__["ProviderClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], ProviderSpecialtyListComponent);
    return ProviderSpecialtyListComponent;
}());



/***/ }),

/***/ "./app/providers/providers-routing.module.ts":
/*!***************************************************!*\
  !*** ./app/providers/providers-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProvidersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersRoutingModule", function() { return ProvidersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authorization_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authorization.guard */ "./app/authorization.guard.ts");
/* harmony import */ var _components_common_layouts_basicLayout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/layouts/basicLayout.component */ "./app/components/common/layouts/basicLayout.component.ts");
/* harmony import */ var _provider_list_provider_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provider-list/provider-list.component */ "./app/providers/provider-list/provider-list.component.ts");
/* harmony import */ var _provider_detail_provider_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provider-detail/provider-detail.component */ "./app/providers/provider-detail/provider-detail.component.ts");
/* harmony import */ var _provider_detail_address_provider_detail_address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provider-detail-address/provider-detail-address.component */ "./app/providers/provider-detail-address/provider-detail-address.component.ts");
/* harmony import */ var _provider_detail_audit_provider_detail_audit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./provider-detail-audit/provider-detail-audit.component */ "./app/providers/provider-detail-audit/provider-detail-audit.component.ts");
/* harmony import */ var _provider_certificate_list_provider_certificate_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./provider-certificate-list/provider-certificate-list.component */ "./app/providers/provider-certificate-list/provider-certificate-list.component.ts");
/* harmony import */ var _provider_experience_list_provider_experience_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./provider-experience-list/provider-experience-list.component */ "./app/providers/provider-experience-list/provider-experience-list.component.ts");
/* harmony import */ var _provider_specialty_list_provider_specialty_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./provider-specialty-list/provider-specialty-list.component */ "./app/providers/provider-specialty-list/provider-specialty-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'providers', component: _components_common_layouts_basicLayout_component__WEBPACK_IMPORTED_MODULE_3__["BasicLayoutComponent"], canActivate: [_authorization_guard__WEBPACK_IMPORTED_MODULE_2__["AuthorizationGuard"]],
        children: [
            { path: ':flag', component: _provider_list_provider_list_component__WEBPACK_IMPORTED_MODULE_4__["ProviderListComponent"] },
            { path: ':flag/create', component: _provider_detail_provider_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProviderDetailComponent"] },
            { path: ':flag/edit/:id', component: _provider_detail_provider_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProviderDetailComponent"] },
            { path: ':flag/edit/:id/audit', component: _provider_detail_audit_provider_detail_audit_component__WEBPACK_IMPORTED_MODULE_7__["ProviderDetailAuditComponent"] },
            { path: ':flag/edit/:id/address', component: _provider_detail_address_provider_detail_address_component__WEBPACK_IMPORTED_MODULE_6__["ProviderDetailAddressComponent"] },
            { path: ':flag/edit/:id/certificates', component: _provider_certificate_list_provider_certificate_list_component__WEBPACK_IMPORTED_MODULE_8__["ProviderCertificateListComponent"] },
            { path: ':flag/edit/:id/specialties', component: _provider_specialty_list_provider_specialty_list_component__WEBPACK_IMPORTED_MODULE_10__["ProviderSpecialtyListComponent"] },
            { path: ':flag/edit/:id/experiences', component: _provider_experience_list_provider_experience_list_component__WEBPACK_IMPORTED_MODULE_9__["ProviderExperienceListComponent"] },
        ],
    }
];
var ProvidersRoutingModule = /** @class */ (function () {
    function ProvidersRoutingModule() {
    }
    ProvidersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProvidersRoutingModule);
    return ProvidersRoutingModule;
}());



/***/ }),

/***/ "./app/providers/providers.module.ts":
/*!*******************************************!*\
  !*** ./app/providers/providers.module.ts ***!
  \*******************************************/
/*! exports provided: ProvidersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersModule", function() { return ProvidersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "../node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./app/core/core.module.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "../node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "../node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/data */ "./app/core/data/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _providers_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./providers-routing.module */ "./app/providers/providers-routing.module.ts");
/* harmony import */ var _provider_list_provider_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./provider-list/provider-list.component */ "./app/providers/provider-list/provider-list.component.ts");
/* harmony import */ var _provider_detail_provider_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./provider-detail/provider-detail.component */ "./app/providers/provider-detail/provider-detail.component.ts");
/* harmony import */ var _provider_detail_address_provider_detail_address_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./provider-detail-address/provider-detail-address.component */ "./app/providers/provider-detail-address/provider-detail-address.component.ts");
/* harmony import */ var _provider_detail_basic_provider_detail_basic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./provider-detail-basic/provider-detail-basic.component */ "./app/providers/provider-detail-basic/provider-detail-basic.component.ts");
/* harmony import */ var _provider_detail_audit_provider_detail_audit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./provider-detail-audit/provider-detail-audit.component */ "./app/providers/provider-detail-audit/provider-detail-audit.component.ts");
/* harmony import */ var _provider_certificate_list_provider_certificate_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./provider-certificate-list/provider-certificate-list.component */ "./app/providers/provider-certificate-list/provider-certificate-list.component.ts");
/* harmony import */ var _provider_certificate_detail_provider_certificate_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./provider-certificate-detail/provider-certificate-detail.component */ "./app/providers/provider-certificate-detail/provider-certificate-detail.component.ts");
/* harmony import */ var _provider_experience_list_provider_experience_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./provider-experience-list/provider-experience-list.component */ "./app/providers/provider-experience-list/provider-experience-list.component.ts");
/* harmony import */ var _provider_experience_detail_provider_experience_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./provider-experience-detail/provider-experience-detail.component */ "./app/providers/provider-experience-detail/provider-experience-detail.component.ts");
/* harmony import */ var _provider_specialty_list_provider_specialty_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./provider-specialty-list/provider-specialty-list.component */ "./app/providers/provider-specialty-list/provider-specialty-list.component.ts");
/* harmony import */ var _provider_specialty_detail_provider_specialty_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./provider-specialty-detail/provider-specialty-detail.component */ "./app/providers/provider-specialty-detail/provider-specialty-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var ProvidersModule = /** @class */ (function () {
    function ProvidersModule() {
    }
    ProvidersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
                _providers_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProvidersRoutingModule"]
            ],
            declarations: [
                _provider_list_provider_list_component__WEBPACK_IMPORTED_MODULE_11__["ProviderListComponent"],
                _provider_detail_provider_detail_component__WEBPACK_IMPORTED_MODULE_12__["ProviderDetailComponent"],
                _provider_detail_basic_provider_detail_basic_component__WEBPACK_IMPORTED_MODULE_14__["ProviderDetailBasicComponent"],
                _provider_detail_address_provider_detail_address_component__WEBPACK_IMPORTED_MODULE_13__["ProviderDetailAddressComponent"],
                _provider_detail_audit_provider_detail_audit_component__WEBPACK_IMPORTED_MODULE_15__["ProviderDetailAuditComponent"],
                _provider_certificate_list_provider_certificate_list_component__WEBPACK_IMPORTED_MODULE_16__["ProviderCertificateListComponent"],
                _provider_experience_list_provider_experience_list_component__WEBPACK_IMPORTED_MODULE_18__["ProviderExperienceListComponent"],
                _provider_specialty_list_provider_specialty_list_component__WEBPACK_IMPORTED_MODULE_20__["ProviderSpecialtyListComponent"],
                _provider_specialty_detail_provider_specialty_detail_component__WEBPACK_IMPORTED_MODULE_21__["ProviderSpecialtyDetailComponent"],
                _provider_experience_detail_provider_experience_detail_component__WEBPACK_IMPORTED_MODULE_19__["ProviderExperienceDetailComponent"],
                _provider_certificate_detail_provider_certificate_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProviderCertificateDetailComponent"]
            ],
            providers: [_core_data__WEBPACK_IMPORTED_MODULE_8__["ProviderClient"], _core_data__WEBPACK_IMPORTED_MODULE_8__["CertificateClient"], _core_data__WEBPACK_IMPORTED_MODULE_8__["ExperienceClient"], _core_services__WEBPACK_IMPORTED_MODULE_9__["PageService"]],
            entryComponents: [_provider_experience_detail_provider_experience_detail_component__WEBPACK_IMPORTED_MODULE_19__["ProviderExperienceDetailComponent"], _provider_certificate_detail_provider_certificate_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProviderCertificateDetailComponent"]]
        })
    ], ProvidersModule);
    return ProvidersModule;
}());



/***/ }),

/***/ "./app/requests/request-detail/request-detail.component.html":
/*!*******************************************************************!*\
  !*** ./app/requests/request-detail/request-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n        <h2>{{title}}</h2>\n    </div>\n  </div>\n  \n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-content\">\n            <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div>\n                    <h3>Patient</h3>\n                  </div>\n                  <dl class=\"dl-horizontal\">\n                      <dt>Name:</dt> <dd> {{item.patientName}}</dd>\n                      <dt>Specialty</dt> <dd> {{item.specialty}} </dd>\n                      <dt>Price Range:</dt> <dd>  {{item.priceRange}}</dd>\n                      <dt>Notes:</dt> <dd class=\"text-navy\">{{item.notes}}</dd>\n                      <dt>Rating:</dt> <dd>  {{item.providerRating}}</dd>\n                  </dl>\n\n                </div>\n                <div class=\"col-lg-6\" *ngIf=\"item.status>1;else approveContent\">\n                    <div>\n                      <h3>Provider</h3>\n                    </div>\n                    <dl class=\"dl-horizontal\">\n                        <dt>Name:</dt> <dd>{{item.providerName}}</dd>\n                        <dt>Type</dt> <dd> {{item.providerType | providerTypeString}} </dd>\n                        <dt>Cost:</dt> <dd>  {{item.cost}}</dd>\n                        <dt>Notes:</dt> <dd class=\"text-navy\">{{item.providerNotes}}</dd>\n                        <dt>Rating:</dt> <dd>  {{item.patientRating}}</dd>\n                    </dl>\n                </div>\n                <ng-template #approveContent>\n                    <div class=\"col-lg-6\">\n                        <button (click)=\"approve()\" class=\"btn btn-primary btn-tn m-r-xs\">Approve</button>\n                    </div>\n                </ng-template>\n            </div>\n            <hr/>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <dl class=\"dl-horizontal\">\n                      <!--\n                        <dt>Request Date:</dt> <dd> {{item.requestDate | date:'medium'}}</dd>\n                      -->\n                        <dt>Visit Date:</dt> <dd>  {{item.visitDate | date:'medium'}}</dd>\n                        <dt>Complete Date</dt> <dd> {{item.closeDate | date:'medium'}} </dd>\n                    </dl>\n                </div>\n            </div>\n\n          <!--\n          <form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n          -->\n            <!-- fields start -->\n          <!--\n            <div class=\"form-group row\">\n              \n            </div>\n          -->\n            <!-- fields end -->\n            <!-- buttons start -->\n          <!--  \n            <div class=\"form-group row\">\n              <div class=\"offset-sm-3 col-sm-9\">\n                <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n                <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n              </div>\n            </div>\n          -->\n            <!-- buttons end -->\n        <!--</form>\n        -->\n      </div>\n    </div>\n  </div>\n</div>  "

/***/ }),

/***/ "./app/requests/request-detail/request-detail.component.scss":
/*!*******************************************************************!*\
  !*** ./app/requests/request-detail/request-detail.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/requests/request-detail/request-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./app/requests/request-detail/request-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: RequestDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailComponent", function() { return RequestDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestDetailComponent = /** @class */ (function () {
    function RequestDetailComponent(client, fb, activatedRoute, router, pageSrv) {
        this.client = client;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageSrv = pageSrv;
        this.id = '';
        this.title = 'Request';
        this.item = new _core_data__WEBPACK_IMPORTED_MODULE_4__["RequestEdit"]();
        this.page = new _core_services__WEBPACK_IMPORTED_MODULE_3__["ActivatedPage"]();
        this.page = this.pageSrv.getActivatedPage(this.activatedRoute);
        this.createForm();
        // this.title = this.pageSrv.getListTitleForProvider(this.page.typeFlag, this.page.title);
    }
    RequestDetailComponent.prototype.createForm = function () {
    };
    RequestDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.page.isEdit) {
            this.client.get(this.page.id).subscribe(function (resp) {
                console.log(resp);
                _this.item = resp;
                // this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
    };
    RequestDetailComponent.prototype.approve = function () {
        var _this = this;
        console.log('approve clicked');
        this.client.approve(this.page.id)
            .subscribe(function () {
            _this.router.navigate(['requests/' + _this.page.typeFlag]);
        }, function (error) {
            console.log(error);
        });
    };
    RequestDetailComponent.prototype.save = function () {
        var _this = this;
        if (!this.itemForm.valid) {
            return;
        }
        if (this.page.isEdit) {
            this.client.save(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['requests/' + _this.page.typeFlag]);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.client.create(this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['requests/' + _this.page.typeFlag]);
            }, function (error) {
                console.log(error);
            });
        }
        // console.log(this.itemForm.value);
    };
    RequestDetailComponent.prototype.cancel = function () {
        this.router.navigate(['requests/' + this.page.typeFlag]);
    };
    RequestDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-detail',
            template: __webpack_require__(/*! ./request-detail.component.html */ "./app/requests/request-detail/request-detail.component.html"),
            styles: [__webpack_require__(/*! ./request-detail.component.scss */ "./app/requests/request-detail/request-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_4__["RequestClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], RequestDetailComponent);
    return RequestDetailComponent;
}());



/***/ }),

/***/ "./app/requests/request-list/request-list.component.html":
/*!***************************************************************!*\
  !*** ./app/requests/request-list/request-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n        <h2>{{title}}</h2>\n    </div>\n    <div class=\"col-sm-4 m-t-md\">\n        <!--\n        <div class=\"pull-right\">\n            <button (click)=\"create()\" class=\"btn btn-primary btn-tn\">Add</button>\n        </div>\n        <span class=\"pull-right m-xs m-r-md\">\n            <label> <input type=\"checkbox\" class=\"i-checks\" (change)=\"toggleEnabled($event)\"> Show all </label>\n        </span>\n        -->\n    </div>\n</div>\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n    \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n              <div class=\"ibox float-e-margins\">\n                      <div class=\"ibox-content\">\n          <ngx-datatable class=\"bootstrap\"\n          [rows]=\"items.result\"\n          [loadingIndicator]=\"loadingIndicator\"\n          [headerHeight]=\"40\"\n          [footerHeight]=\"40\"\n          [columnMode]=\"'force'\"\n          [rowHeight]=\"40\"\n          [externalPaging]=\"true\"\n          [count]=\"count\"\n          [offset]=\"items.pageIndex\"\n          [limit]=\"items.pageSize\"\n          (page)='loadPage($event)'>\n            <ngx-datatable-column name=\"Visit Date\" prop=\"visitDate\" [width]=\"200\">\n                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    {{value | date:'medium'}}\n                </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Patient\" prop=\"patientName\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Type\" prop=\"providerType\" [width]=\"100\">\n                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    {{value | providerTypeString}}\n                </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Specialty\" prop=\"specialty\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Provider\" prop=\"providerName\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Cost\" prop=\"cost\" [width]=\"80\"></ngx-datatable-column>\n            <!--\n            <ngx-datatable-column name=\"Close Date\" prop=\"closeDate\">\n                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    {{value | date:'medium'}}\n                </ng-template>\n            </ngx-datatable-column>\n            -->\n            <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"id\" [width]=\"80\">\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                    <!--\n                    <button md-icon-button class=\"btn-white\" (click)=\"deleteConfirm(value)\">\n                        <i class=\"fa fa-trash\"></i>\n                    </button>\n                    -->\n                    \n                    <button md-icon-button class=\"btn-white\" [routerLink]=\"['edit', value]\">\n                        <i class=\"fa fa-pencil\"></i>\n                    </button>\n                    \n                </ng-template>\n            </ngx-datatable-column>\n        </ngx-datatable>\n                      </div>\n              </div>\n        </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./app/requests/request-list/request-list.component.scss":
/*!***************************************************************!*\
  !*** ./app/requests/request-list/request-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/requests/request-list/request-list.component.ts":
/*!*************************************************************!*\
  !*** ./app/requests/request-list/request-list.component.ts ***!
  \*************************************************************/
/*! exports provided: RequestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListComponent", function() { return RequestListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services */ "./app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestListComponent = /** @class */ (function () {
    function RequestListComponent(client, router, route, pageSrv) {
        var _this = this;
        this.client = client;
        this.router = router;
        this.route = route;
        this.pageSrv = pageSrv;
        this.title = '';
        this.subTitle = 'Requests';
        this.count = 0;
        this.typeFlag = 0;
        this.loadAll = false;
        this.loadingIndicator = true;
        this.items = new _core_data__WEBPACK_IMPORTED_MODULE_2__["PagedResultOfRequest"]();
        this.route.params.subscribe(function (params) {
            _this.typeFlag = params['flag']; // (+) converts string 'id' to a number
            _this.title = _this.pageSrv.getListTitleForRequestStatus(_this.typeFlag, _this.subTitle);
            _this.loadPage({ offset: 0, pageSize: 10 });
        });
    }
    RequestListComponent.prototype.ngOnInit = function () {
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    // Common
    RequestListComponent.prototype.create = function () {
        this.router.navigate(['requests/create']);
    };
    RequestListComponent.prototype.loadPage = function (para) {
        var _this = this;
        this.client.page(para.offset, para.pageSize, this.typeFlag, this.loadAll).subscribe(function (res) {
            _this.items = res;
            _this.count = res.count;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        }, function (error) { return console.log(error); }, function () { return console.log('Get paged items complete'); });
    };
    RequestListComponent.prototype.reloadPage = function () {
        this.loadPage({ offset: this.items.pageIndex, pageSize: this.items.pageSize });
    };
    RequestListComponent.prototype.delete = function (id) {
        var _this = this;
        this.client.delete(id)
            .subscribe(function () {
            _this.reloadPage();
        }, function (error) {
            console.log(error);
        });
    };
    RequestListComponent.prototype.deleteConfirm = function (id) {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this item: ?')) {
            this.delete(id);
            // event.confirm.resolve();
        }
        else {
            // event.confirm.reject();
        }
    };
    RequestListComponent.prototype.toggleEnabled = function (e) {
        this.loadAll = false;
        if (e.target.checked) {
            this.loadAll = true;
        }
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    RequestListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-list',
            template: __webpack_require__(/*! ./request-list.component.html */ "./app/requests/request-list/request-list.component.html"),
            styles: [__webpack_require__(/*! ./request-list.component.scss */ "./app/requests/request-list/request-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_2__["RequestClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], RequestListComponent);
    return RequestListComponent;
}());



/***/ }),

/***/ "./app/requests/requests-routing.module.ts":
/*!*************************************************!*\
  !*** ./app/requests/requests-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RequestsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsRoutingModule", function() { return RequestsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authorization_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authorization.guard */ "./app/authorization.guard.ts");
/* harmony import */ var _components_common_layouts_basicLayout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/layouts/basicLayout.component */ "./app/components/common/layouts/basicLayout.component.ts");
/* harmony import */ var _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-list/request-list.component */ "./app/requests/request-list/request-list.component.ts");
/* harmony import */ var _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-detail/request-detail.component */ "./app/requests/request-detail/request-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'requests', component: _components_common_layouts_basicLayout_component__WEBPACK_IMPORTED_MODULE_3__["BasicLayoutComponent"], canActivate: [_authorization_guard__WEBPACK_IMPORTED_MODULE_2__["AuthorizationGuard"]],
        children: [
            { path: ':flag', component: _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_4__["RequestListComponent"] },
            { path: ':flag/create', component: _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_5__["RequestDetailComponent"] },
            { path: ':flag/edit/:id', component: _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_5__["RequestDetailComponent"] }
        ],
    }
];
var RequestsRoutingModule = /** @class */ (function () {
    function RequestsRoutingModule() {
    }
    RequestsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RequestsRoutingModule);
    return RequestsRoutingModule;
}());



/***/ }),

/***/ "./app/requests/requests.module.ts":
/*!*****************************************!*\
  !*** ./app/requests/requests.module.ts ***!
  \*****************************************/
/*! exports provided: RequestsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsModule", function() { return RequestsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "../node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./app/core/core.module.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/data */ "./app/core/data/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _requests_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./requests-routing.module */ "./app/requests/requests-routing.module.ts");
/* harmony import */ var _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-list/request-list.component */ "./app/requests/request-list/request-list.component.ts");
/* harmony import */ var _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request-detail/request-detail.component */ "./app/requests/request-detail/request-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var RequestsModule = /** @class */ (function () {
    function RequestsModule() {
    }
    RequestsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _requests_routing_module__WEBPACK_IMPORTED_MODULE_7__["RequestsRoutingModule"]
            ],
            declarations: [_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_8__["RequestListComponent"], _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_9__["RequestDetailComponent"]],
            providers: [_core_data__WEBPACK_IMPORTED_MODULE_5__["RequestClient"], _core_services__WEBPACK_IMPORTED_MODULE_6__["PageService"]]
        })
    ], RequestsModule);
    return RequestsModule;
}());



/***/ }),

/***/ "./app/settings/city/city-detail/city-detail.component.html":
/*!******************************************************************!*\
  !*** ./app/settings/city/city-detail/city-detail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-sm-8\">\n      <h2>{{title}}</h2>\n  </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"ibox float-e-margins\">\n      <div class=\"ibox-content\">\n\n          <form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n              <div class=\"form-group row\">\n                  <label for=\"select\" class=\"col-sm-3 form-control-label\">Country</label>\n                  <div class=\"col-sm-9\">\n                    <select id=\"select\" formControlName=\"countryId\">\n                        <option *ngFor=\"let c of countryList\" [value]=\"c.id\">\n                          {{ c.name }}\n                        </option>\n                      </select>\n                  </div>\n                </div>\n              <div class=\"form-group row\">\n                <label for=\"Name\" class=\"col-sm-3 form-control-label\">Name</label>\n                <div class=\"col-sm-9\">\n                  <input id=\"name\" type=\"text\" formControlName=\"name\" class=\"form-control\">\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['name']) && formDir.submitted\">\n                    Required.\n                  </span>\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['name'])\">\n                    Must be at least 4 characters long.\n                  </span>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"NameArabic\" class=\"col-sm-3 form-control-label\">Arabic</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" formControlName=\"nameArabic\" class=\"form-control\">\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['nameArabic']) && formDir.submitted\">\n                    Required.\n                  </span>\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['nameArabic'])\">\n                    Must be at least 4 characters long.\n                  </span>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"Rank\" class=\"col-sm-3 form-control-label\">Display Order</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" formControlName=\"rank\" class=\"form-control\">\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('onlynumber', ['rank']) && formDir.submitted\">\n                    Numbers Only.\n                  </span>\n                </div>\n              </div>\n              \n              <div class=\"form-group row\">\n                <div class=\"offset-sm-3 col-sm-9\">\n                  <div class=\"checkbox\">\n                    <label> <input type=\"checkbox\" class=\"i-checks\" formControlName=\"isEnabled\"> Enabled </label>\n                  </div>\n                </div>\n              </div>\n              \n              <div class=\"form-group row\">\n                  <div class=\"offset-sm-3 col-sm-9\">\n                    <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n                    <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n                  </div>\n              </div>\n            </form>\n      </div> <!-- ibox content -->\n    </div>\n  </div>\n</div>\n</div>\n<p>Form value: {{ itemForm.value | json }}</p>\n\n"

/***/ }),

/***/ "./app/settings/city/city-detail/city-detail.component.scss":
/*!******************************************************************!*\
  !*** ./app/settings/city/city-detail/city-detail.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/settings/city/city-detail/city-detail.component.ts":
/*!****************************************************************!*\
  !*** ./app/settings/city/city-detail/city-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: CityDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetailComponent", function() { return CityDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/validators */ "./app/core/validators/index.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CityDetailComponent = /** @class */ (function () {
    function CityDetailComponent(client, countryClient, fb, activatedRoute, router, pageSrv) {
        var _this = this;
        this.client = client;
        this.countryClient = countryClient;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageSrv = pageSrv;
        this.id = '';
        this.title = 'Create';
        this.page = new _core_services__WEBPACK_IMPORTED_MODULE_3__["ActivatedPage"]();
        this.countryList = new Array();
        this.page = this.pageSrv.getActivatedPage(this.activatedRoute);
        this.countryClient.all(0, false).subscribe(function (r) {
            console.log(r);
            _this.countryList = r;
        }, function (error) { return console.log(error); }, function () { return console.log('get countries complete'); });
        this.createForm();
        // this.title = this.pageSrv.getListTitleForProvider(this.page.typeFlag, this.page.title);
    }
    Object.defineProperty(CityDetailComponent.prototype, "country", {
        get: function () { return this.itemForm.get('country'); },
        enumerable: true,
        configurable: true
    });
    CityDetailComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            id: '',
            countryId: '',
            countryName: '',
            // country: new FormControl(this.countryList[0]),
            // country: '',
            latitude: 0,
            longitude: 0,
            rank: [0, [_core_validators__WEBPACK_IMPORTED_MODULE_4__["NumberValidator"]]],
            isEnabled: true,
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            nameArabic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]]
        });
        // this.itemForm.controls['country'].patchValue(this.itemForm.controls['countryId'].value, {onlySelf: true});
    };
    CityDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.page.isEdit) {
            this.client.get(this.page.id).subscribe(function (resp) {
                console.log(resp);
                _this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
    };
    CityDetailComponent.prototype.selectCountry = function () {
        alert('');
    };
    CityDetailComponent.prototype.save = function () {
        var _this = this;
        if (!this.itemForm.valid) {
            return;
        }
        if (this.page.isEdit) {
            this.client.save(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['settings/cities']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.client.create(this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['settings/cities']);
            }, function (error) {
                console.log(error);
            });
        }
        // console.log(this.itemForm.value);
    };
    CityDetailComponent.prototype.cancel = function () {
        this.router.navigate(['settings/cities']);
    };
    CityDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city-detail',
            template: __webpack_require__(/*! ./city-detail.component.html */ "./app/settings/city/city-detail/city-detail.component.html"),
            styles: [__webpack_require__(/*! ./city-detail.component.scss */ "./app/settings/city/city-detail/city-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_5__["CityClient"],
            _core_data__WEBPACK_IMPORTED_MODULE_5__["CountryClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], CityDetailComponent);
    return CityDetailComponent;
}());



/***/ }),

/***/ "./app/settings/city/city-list/city-list.component.html":
/*!**************************************************************!*\
  !*** ./app/settings/city/city-list/city-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n        <h2>{{title}}</h2>\n    </div>\n    <div class=\"col-sm-4 m-t-md\">\n        <div class=\"pull-right\">\n            <button (click)=\"create()\" class=\"btn btn-primary btn-tn\">Add</button>\n        </div>\n        <span class=\"pull-right m-xs m-r-md\">\n            <label> <input type=\"checkbox\" class=\"i-checks\" (change)=\"toggleEnabled($event)\"> Show all </label>\n        </span>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n    \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-content\">\n          <ngx-datatable class=\"bootstrap\"\n          [rows]=\"items.result\"\n          [loadingIndicator]=\"loadingIndicator\"\n          [headerHeight]=\"40\"\n          [footerHeight]=\"40\"\n          [columnMode]=\"'force'\"\n          [rowHeight]=\"40\"\n          [externalPaging]=\"true\"\n          [count]=\"count\"\n          [offset]=\"items.pageIndex\"\n          [limit]=\"items.pageSize\"\n          (page)='loadPage($event)'>\n            <ngx-datatable-column name=\"Rank\" prop=\"rank\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Country\" prop=\"countryName\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Name\" prop=\"name\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Arabic\" prop=\"nameArabic\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Enabled\" prop=\"isEnabled\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"id\">\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                    <button md-icon-button class=\"btn-white\" (click)=\"deleteConfirm(value)\">\n                        <i class=\"fa fa-trash\"></i>\n                    </button>\n                    <button md-icon-button class=\"btn-white\" [routerLink]=\"['edit', value]\">\n                        <i class=\"fa fa-pencil\"></i>\n                    </button>\n                </ng-template>\n            </ngx-datatable-column>\n        </ngx-datatable>\n                    </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./app/settings/city/city-list/city-list.component.scss":
/*!**************************************************************!*\
  !*** ./app/settings/city/city-list/city-list.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/settings/city/city-list/city-list.component.ts":
/*!************************************************************!*\
  !*** ./app/settings/city/city-list/city-list.component.ts ***!
  \************************************************************/
/*! exports provided: CityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityListComponent", function() { return CityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CityListComponent = /** @class */ (function () {
    function CityListComponent(client, router) {
        this.client = client;
        this.router = router;
        this.title = 'Cities';
        this.count = 0;
        this.typeFlag = 0;
        this.loadAll = false;
        this.loadingIndicator = true;
        this.items = new _core_data__WEBPACK_IMPORTED_MODULE_2__["PagedResultOfCity"]();
    }
    CityListComponent.prototype.ngOnInit = function () {
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    // Common
    CityListComponent.prototype.create = function () {
        this.router.navigate(['settings/cities/create']);
    };
    CityListComponent.prototype.loadPage = function (para) {
        var _this = this;
        // console.log(para.offset + ', ' + para.pageSize);
        this.client.page(para.offset, para.pageSize, this.typeFlag, this.loadAll).subscribe(function (res) {
            _this.items = res;
            _this.count = res.count;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        }, function (error) { return console.log(error); }, function () { return console.log('Get paged items complete'); });
    };
    CityListComponent.prototype.reloadPage = function () {
        this.loadPage({ offset: this.items.pageIndex, pageSize: this.items.pageSize });
    };
    CityListComponent.prototype.delete = function (id) {
        var _this = this;
        this.client.delete(id)
            .subscribe(function () {
            _this.reloadPage();
        }, function (error) {
            console.log(error);
        });
    };
    CityListComponent.prototype.deleteConfirm = function (id) {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this item: ?')) {
            this.delete(id);
            // event.confirm.resolve();
        }
        else {
            // event.confirm.reject();
        }
    };
    CityListComponent.prototype.toggleEnabled = function (e) {
        this.loadAll = false;
        if (e.target.checked) {
            this.loadAll = true;
        }
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    CityListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city-list',
            template: __webpack_require__(/*! ./city-list.component.html */ "./app/settings/city/city-list/city-list.component.html"),
            styles: [__webpack_require__(/*! ./city-list.component.scss */ "./app/settings/city/city-list/city-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_2__["CityClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CityListComponent);
    return CityListComponent;
}());



/***/ }),

/***/ "./app/settings/country/country-detail/country-detail.component.html":
/*!***************************************************************************!*\
  !*** ./app/settings/country/country-detail/country-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n        <h2>{{title}}</h2>\n    </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-content\">\n\n            <form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n                <div class=\"form-group row\">\n                  <label for=\"Name\" class=\"col-sm-3 form-control-label\">Name</label>\n                  <div class=\"col-sm-9\">\n                    <input id=\"name\" type=\"text\" formControlName=\"name\" class=\"form-control\">\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['name']) && formDir.submitted\">\n                      Required.\n                    </span>\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['name'])\">\n                      Must be at least 4 characters long.\n                    </span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label for=\"NameArabic\" class=\"col-sm-3 form-control-label\">Arabic</label>\n                  <div class=\"col-sm-9\">\n                    <input type=\"text\" formControlName=\"nameArabic\" class=\"form-control\">\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['nameArabic']) && formDir.submitted\">\n                      Required.\n                    </span>\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['nameArabic'])\">\n                      Must be at least 4 characters long.\n                    </span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label for=\"Code\" class=\"col-sm-3 form-control-label\">Code</label>\n                  <div class=\"col-sm-9\">\n                    <input type=\"text\" formControlName=\"code\" class=\"form-control\">\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['code']) && formDir.submitted\">\n                      Required.\n                    </span>\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['code']) || itemForm.hasError('maxlength', ['code'])\">\n                      Must be 3 characters long.\n                    </span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label for=\"Code2\" class=\"col-sm-3 form-control-label\">Code 2</label>\n                  <div class=\"col-sm-9\">\n                    <input type=\"text\" formControlName=\"code2\" class=\"form-control\">\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['code']) && formDir.submitted\">\n                      Required.\n                    </span>\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['code2']) || itemForm.hasError('maxlength', ['code2'])\">\n                      Must be 2 characters long.\n                    </span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label for=\"Rank\" class=\"col-sm-3 form-control-label\">Display Order</label>\n                  <div class=\"col-sm-9\">\n                    <input type=\"text\" formControlName=\"rank\" class=\"form-control\">\n                    <span class=\"text-danger\" *ngIf=\"itemForm.hasError('onlynumber', ['rank']) && formDir.submitted\">\n                      Numbers Only.\n                    </span>\n                  </div>\n                </div>\n                \n                <div class=\"form-group row\">\n                  <div class=\"offset-sm-3 col-sm-9\">\n                    <div class=\"checkbox\">\n                      <label> <input type=\"checkbox\" class=\"i-checks\" formControlName=\"isEnabled\"> Enabled </label>\n                    </div>\n                  </div>\n                </div>\n                \n                <!-- buttons start -->\n            <div class=\"form-group row\">\n                <div class=\"offset-sm-3 col-sm-9\">\n                  <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n                  <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n                </div>\n              </div>\n              <!-- buttons end -->\n              </form>\n        </div> <!-- ibox content -->\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n  \n  <p>Form value: {{ itemForm.value | json }}</p>\n  \n"

/***/ }),

/***/ "./app/settings/country/country-detail/country-detail.component.scss":
/*!***************************************************************************!*\
  !*** ./app/settings/country/country-detail/country-detail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/settings/country/country-detail/country-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./app/settings/country/country-detail/country-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: CountryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDetailComponent", function() { return CountryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/validators */ "./app/core/validators/index.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CountryDetailComponent = /** @class */ (function () {
    function CountryDetailComponent(client, fb, activatedRoute, router, pageSrv) {
        this.client = client;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageSrv = pageSrv;
        this.id = '';
        this.title = 'Create';
        this.page = new _core_services__WEBPACK_IMPORTED_MODULE_3__["ActivatedPage"]();
        this.page = this.pageSrv.getActivatedPage(this.activatedRoute);
        this.createForm();
        // this.title = this.pageSrv.getListTitleForProvider(this.page.typeFlag, this.page.title);
    }
    Object.defineProperty(CountryDetailComponent.prototype, "name", {
        get: function () { return this.itemForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryDetailComponent.prototype, "nameArabic", {
        get: function () { return this.itemForm.get('nameArabic'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryDetailComponent.prototype, "code", {
        get: function () { return this.itemForm.get('code'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryDetailComponent.prototype, "code2", {
        get: function () { return this.itemForm.get('code2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryDetailComponent.prototype, "rank", {
        get: function () { return this.itemForm.get('rank'); },
        enumerable: true,
        configurable: true
    });
    CountryDetailComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            id: '',
            rank: [0, [_core_validators__WEBPACK_IMPORTED_MODULE_4__["NumberValidator"]]],
            isEnabled: true,
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(3)]],
            code2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2)]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            nameArabic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]]
        });
    };
    CountryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.page.isEdit) {
            this.client.get(this.page.id).subscribe(function (resp) {
                console.log(resp);
                _this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
    };
    CountryDetailComponent.prototype.save = function () {
        var _this = this;
        if (!this.itemForm.valid) {
            return;
        }
        if (this.page.isEdit) {
            this.client.save(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['settings/countries']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.client.create(this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['settings/countries']);
            }, function (error) {
                console.log(error);
            });
        }
        // console.log(this.itemForm.value);
    };
    CountryDetailComponent.prototype.cancel = function () {
        this.router.navigate(['settings/countries']);
    };
    CountryDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-detail',
            template: __webpack_require__(/*! ./country-detail.component.html */ "./app/settings/country/country-detail/country-detail.component.html"),
            styles: [__webpack_require__(/*! ./country-detail.component.scss */ "./app/settings/country/country-detail/country-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_5__["CountryClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], CountryDetailComponent);
    return CountryDetailComponent;
}());



/***/ }),

/***/ "./app/settings/country/country-list/country-list.component.html":
/*!***********************************************************************!*\
  !*** ./app/settings/country/country-list/country-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n        <h2>{{title}}</h2>\n    </div>\n    <div class=\"col-sm-4 m-t-md\">\n        <div class=\"pull-right\">\n            <button (click)=\"create()\" class=\"btn btn-primary btn-tn\">Add</button>\n        </div>\n        <span class=\"pull-right m-xs m-r-md\">\n            <label> <input type=\"checkbox\" class=\"i-checks\" (change)=\"toggleEnabled($event)\"> Show all </label>\n        </span>\n    </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                        \n            <ngx-datatable class=\"bootstrap\"\n            [rows]=\"items.result\"\n            [loadingIndicator]=\"loadingIndicator\"\n            [headerHeight]=\"40\"\n            [footerHeight]=\"40\"\n            [columnMode]=\"'force'\"\n            [rowHeight]=\"40\"\n            [externalPaging]=\"true\"\n            [count]=\"count\"\n            [offset]=\"items.pageIndex\"\n            [limit]=\"items.pageSize\"\n            (page)='loadPage($event)'>\n                <ngx-datatable-column name=\"Rank\" prop=\"rank\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Code\" prop=\"code\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Name\" prop=\"name\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Arabic\" prop=\"nameArabic\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Enabled\" prop=\"isEnabled\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"id\">\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <button md-icon-button class=\"btn-white\" (click)=\"deleteConfirm(value)\">\n                            <i class=\"fa fa-trash\"></i>\n                        </button>\n                        <button md-icon-button class=\"btn-white\" [routerLink]=\"['edit', value]\">\n                            <i class=\"fa fa-pencil\"></i>\n                        </button>\n                    </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n                </div>\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./app/settings/country/country-list/country-list.component.scss":
/*!***********************************************************************!*\
  !*** ./app/settings/country/country-list/country-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/settings/country/country-list/country-list.component.ts":
/*!*********************************************************************!*\
  !*** ./app/settings/country/country-list/country-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CountryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListComponent", function() { return CountryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryListComponent = /** @class */ (function () {
    function CountryListComponent(client, router) {
        this.client = client;
        this.router = router;
        this.title = 'Countries';
        this.count = 0;
        this.typeFlag = 0;
        this.loadAll = false;
        this.loadingIndicator = true;
        this.items = new _core_data__WEBPACK_IMPORTED_MODULE_2__["PagedResultOfCountry"]();
    }
    CountryListComponent.prototype.ngOnInit = function () {
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    // Common
    CountryListComponent.prototype.create = function () {
        this.router.navigate(['settings/countries/create']);
    };
    CountryListComponent.prototype.loadPage = function (para) {
        var _this = this;
        this.client.page(para.offset, para.pageSize, this.typeFlag, this.loadAll).subscribe(function (res) {
            _this.items = res;
            _this.count = res.count;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        }, function (error) { return console.log(error); }, function () { return console.log('Get paged items complete'); });
    };
    CountryListComponent.prototype.reloadPage = function () {
        this.loadPage({ offset: this.items.pageIndex, pageSize: this.items.pageSize });
    };
    CountryListComponent.prototype.delete = function (id) {
        var _this = this;
        this.client.delete(id)
            .subscribe(function () {
            _this.reloadPage();
        }, function (error) {
            console.log(error);
        });
    };
    CountryListComponent.prototype.deleteConfirm = function (id) {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this item: ?')) {
            this.delete(id);
            // event.confirm.resolve();
        }
        else {
            // event.confirm.reject();
        }
    };
    CountryListComponent.prototype.toggleEnabled = function (e) {
        this.loadAll = false;
        if (e.target.checked) {
            this.loadAll = true;
        }
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    CountryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-list',
            template: __webpack_require__(/*! ./country-list.component.html */ "./app/settings/country/country-list/country-list.component.html"),
            styles: [__webpack_require__(/*! ./country-list.component.scss */ "./app/settings/country/country-list/country-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_2__["CountryClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CountryListComponent);
    return CountryListComponent;
}());



/***/ }),

/***/ "./app/settings/pricerange/pricerange-detail/pricerange-detail.component.html":
/*!************************************************************************************!*\
  !*** ./app/settings/pricerange/pricerange-detail/pricerange-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-sm-8\">\n      <h2>{{title}}</h2>\n  </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"ibox float-e-margins\">\n      <div class=\"ibox-content\">\n\n          <form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n              <div class=\"form-group row\">\n                <label for=\"Name\" class=\"col-sm-3 form-control-label\">Name</label>\n                <div class=\"col-sm-9\">\n                  <input id=\"name\" type=\"text\" formControlName=\"name\" class=\"form-control\">\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['name']) && formDir.submitted\">\n                    Required.\n                  </span>\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['name'])\">\n                    Must be at least 4 characters long.\n                  </span>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"NameArabic\" class=\"col-sm-3 form-control-label\">Arabic</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" formControlName=\"nameArabic\" class=\"form-control\">\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['nameArabic']) && formDir.submitted\">\n                    Required.\n                  </span>\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['nameArabic'])\">\n                    Must be at least 4 characters long.\n                  </span>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"Rank\" class=\"col-sm-3 form-control-label\">Display Order</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" formControlName=\"rank\" class=\"form-control\">\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('onlynumber', ['rank']) && formDir.submitted\">\n                    Numbers Only.\n                  </span>\n                </div>\n              </div>\n              \n              <div class=\"form-group row\">\n                <div class=\"offset-sm-3 col-sm-9\">\n                  <div class=\"checkbox\">\n                    <label> <input type=\"checkbox\" class=\"i-checks\" formControlName=\"isEnabled\"> Enabled </label>\n                  </div>\n                </div>\n              </div>\n              \n              <!-- buttons start -->\n              <div class=\"form-group row\">\n                <div class=\"offset-sm-3 col-sm-9\">\n                  <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n                  <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n                </div>\n              </div>\n              <!-- buttons end -->\n            </form>\n      </div> <!-- ibox content -->\n    </div>\n  </div>\n</div>\n</div>\n<p>Form value: {{ itemForm.value | json }}</p>\n\n"

/***/ }),

/***/ "./app/settings/pricerange/pricerange-detail/pricerange-detail.component.scss":
/*!************************************************************************************!*\
  !*** ./app/settings/pricerange/pricerange-detail/pricerange-detail.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/settings/pricerange/pricerange-detail/pricerange-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./app/settings/pricerange/pricerange-detail/pricerange-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PricerangeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricerangeDetailComponent", function() { return PricerangeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/validators */ "./app/core/validators/index.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PricerangeDetailComponent = /** @class */ (function () {
    function PricerangeDetailComponent(client, fb, activatedRoute, router, pageSrv) {
        this.client = client;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageSrv = pageSrv;
        this.id = '';
        this.title = 'Create';
        this.page = new _core_services__WEBPACK_IMPORTED_MODULE_3__["ActivatedPage"]();
        this.page = this.pageSrv.getActivatedPage(this.activatedRoute);
        this.createForm();
        // this.title = this.pageSrv.getListTitleForProvider(this.page.typeFlag, this.page.title);
    }
    PricerangeDetailComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            id: '',
            rank: [0, [_core_validators__WEBPACK_IMPORTED_MODULE_4__["NumberValidator"]]],
            isEnabled: true,
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            nameArabic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]]
        });
    };
    PricerangeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.page.isEdit) {
            this.client.get(this.page.id).subscribe(function (resp) {
                console.log(resp);
                _this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
    };
    PricerangeDetailComponent.prototype.save = function () {
        var _this = this;
        if (!this.itemForm.valid) {
            return;
        }
        if (this.page.isEdit) {
            this.client.save(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['settings/priceranges']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.client.create(this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['settings/priceranges']);
            }, function (error) {
                console.log(error);
            });
        }
        // console.log(this.itemForm.value);
    };
    PricerangeDetailComponent.prototype.cancel = function () {
        this.router.navigate(['settings/priceranges']);
    };
    PricerangeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricerange-detail',
            template: __webpack_require__(/*! ./pricerange-detail.component.html */ "./app/settings/pricerange/pricerange-detail/pricerange-detail.component.html"),
            styles: [__webpack_require__(/*! ./pricerange-detail.component.scss */ "./app/settings/pricerange/pricerange-detail/pricerange-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_5__["PricerangeClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PricerangeDetailComponent);
    return PricerangeDetailComponent;
}());



/***/ }),

/***/ "./app/settings/pricerange/pricerange-list/pricerange-list.component.html":
/*!********************************************************************************!*\
  !*** ./app/settings/pricerange/pricerange-list/pricerange-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n        <h2>{{title}}</h2>\n    </div>\n    <div class=\"col-sm-4 m-t-md\">\n        <div class=\"pull-right\">\n            <button (click)=\"create()\" class=\"btn btn-primary btn-tn\">Add</button>\n        </div>\n        <span class=\"pull-right m-xs m-r-md\">\n            <label> <input type=\"checkbox\" class=\"i-checks\" (change)=\"toggleEnabled($event)\"> Show all </label>\n        </span>\n    </div>\n</div>\n\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                        \n            <ngx-datatable class=\"bootstrap\"\n            [rows]=\"items.result\"\n            [loadingIndicator]=\"loadingIndicator\"\n            [headerHeight]=\"40\"\n            [footerHeight]=\"40\"\n            [columnMode]=\"'force'\"\n            [rowHeight]=\"40\"\n            [externalPaging]=\"true\"\n            [count]=\"count\"\n            [offset]=\"items.pageIndex\"\n            [limit]=\"items.pageSize\"\n            (page)='loadPage($event)'>\n                <ngx-datatable-column name=\"Rank\" prop=\"rank\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Name\" prop=\"name\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Arabic\" prop=\"nameArabic\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Enabled\" prop=\"isEnabled\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"id\">\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <button md-icon-button class=\"btn-white\" (click)=\"deleteConfirm(value)\">\n                            <i class=\"fa fa-trash\"></i>\n                        </button>\n                        <button md-icon-button class=\"btn-white\" [routerLink]=\"['edit', value]\">\n                            <i class=\"fa fa-pencil\"></i>\n                        </button>\n                    </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n                </div>\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./app/settings/pricerange/pricerange-list/pricerange-list.component.scss":
/*!********************************************************************************!*\
  !*** ./app/settings/pricerange/pricerange-list/pricerange-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/settings/pricerange/pricerange-list/pricerange-list.component.ts":
/*!******************************************************************************!*\
  !*** ./app/settings/pricerange/pricerange-list/pricerange-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: PricerangeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricerangeListComponent", function() { return PricerangeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PricerangeListComponent = /** @class */ (function () {
    function PricerangeListComponent(client, router) {
        this.client = client;
        this.router = router;
        this.title = 'Price Ranges';
        this.count = 0;
        this.typeFlag = 0;
        this.loadAll = false;
        this.loadingIndicator = true;
        this.items = new _core_data__WEBPACK_IMPORTED_MODULE_2__["PagedResultOfPriceRange"]();
    }
    PricerangeListComponent.prototype.ngOnInit = function () {
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    // Common
    PricerangeListComponent.prototype.create = function () {
        this.router.navigate(['settings/priceranges/create']);
    };
    PricerangeListComponent.prototype.loadPage = function (para) {
        var _this = this;
        // console.log(para.offset + ', ' + para.pageSize);
        this.client.page(para.offset, para.pageSize, this.typeFlag, this.loadAll).subscribe(function (res) {
            _this.items = res;
            _this.count = res.count;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        }, function (error) { return console.log(error); }, function () { return console.log('Get paged items complete'); });
    };
    PricerangeListComponent.prototype.reloadPage = function () {
        this.loadPage({ offset: this.items.pageIndex, pageSize: this.items.pageSize });
    };
    PricerangeListComponent.prototype.delete = function (id) {
        var _this = this;
        this.client.delete(id)
            .subscribe(function () {
            _this.reloadPage();
        }, function (error) {
            console.log(error);
        });
    };
    PricerangeListComponent.prototype.deleteConfirm = function (id) {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this item: ?')) {
            this.delete(id);
            // event.confirm.resolve();
        }
        else {
            // event.confirm.reject();
        }
    };
    PricerangeListComponent.prototype.toggleEnabled = function (e) {
        this.loadAll = false;
        if (e.target.checked) {
            this.loadAll = true;
        }
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    PricerangeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricerange-list',
            template: __webpack_require__(/*! ./pricerange-list.component.html */ "./app/settings/pricerange/pricerange-list/pricerange-list.component.html"),
            styles: [__webpack_require__(/*! ./pricerange-list.component.scss */ "./app/settings/pricerange/pricerange-list/pricerange-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_2__["PricerangeClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PricerangeListComponent);
    return PricerangeListComponent;
}());



/***/ }),

/***/ "./app/settings/settings-routing.module.ts":
/*!*************************************************!*\
  !*** ./app/settings/settings-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authorization_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authorization.guard */ "./app/authorization.guard.ts");
/* harmony import */ var _components_common_layouts_basicLayout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/layouts/basicLayout.component */ "./app/components/common/layouts/basicLayout.component.ts");
/* harmony import */ var _pricerange_pricerange_list_pricerange_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pricerange/pricerange-list/pricerange-list.component */ "./app/settings/pricerange/pricerange-list/pricerange-list.component.ts");
/* harmony import */ var _pricerange_pricerange_detail_pricerange_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pricerange/pricerange-detail/pricerange-detail.component */ "./app/settings/pricerange/pricerange-detail/pricerange-detail.component.ts");
/* harmony import */ var _specialty_specialty_list_specialty_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./specialty/specialty-list/specialty-list.component */ "./app/settings/specialty/specialty-list/specialty-list.component.ts");
/* harmony import */ var _specialty_specialty_detail_specialty_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./specialty/specialty-detail/specialty-detail.component */ "./app/settings/specialty/specialty-detail/specialty-detail.component.ts");
/* harmony import */ var _country_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./country/country-list/country-list.component */ "./app/settings/country/country-list/country-list.component.ts");
/* harmony import */ var _country_country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./country/country-detail/country-detail.component */ "./app/settings/country/country-detail/country-detail.component.ts");
/* harmony import */ var _city_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./city/city-list/city-list.component */ "./app/settings/city/city-list/city-list.component.ts");
/* harmony import */ var _city_city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./city/city-detail/city-detail.component */ "./app/settings/city/city-detail/city-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: 'settings', component: _components_common_layouts_basicLayout_component__WEBPACK_IMPORTED_MODULE_3__["BasicLayoutComponent"], canActivate: [_authorization_guard__WEBPACK_IMPORTED_MODULE_2__["AuthorizationGuard"]],
        children: [
            { path: 'priceranges', component: _pricerange_pricerange_list_pricerange_list_component__WEBPACK_IMPORTED_MODULE_4__["PricerangeListComponent"] },
            { path: 'priceranges/create', component: _pricerange_pricerange_detail_pricerange_detail_component__WEBPACK_IMPORTED_MODULE_5__["PricerangeDetailComponent"] },
            { path: 'priceranges/edit/:id', component: _pricerange_pricerange_detail_pricerange_detail_component__WEBPACK_IMPORTED_MODULE_5__["PricerangeDetailComponent"] },
            { path: 'specialties',
                children: [
                    { path: ':flag', component: _specialty_specialty_list_specialty_list_component__WEBPACK_IMPORTED_MODULE_6__["SpecialtyListComponent"] },
                    { path: ':flag/create', component: _specialty_specialty_detail_specialty_detail_component__WEBPACK_IMPORTED_MODULE_7__["SpecialtyDetailComponent"] },
                    { path: ':flag/edit/:id', component: _specialty_specialty_detail_specialty_detail_component__WEBPACK_IMPORTED_MODULE_7__["SpecialtyDetailComponent"] }
                ]
            },
            { path: 'countries', component: _country_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_8__["CountryListComponent"] },
            { path: 'countries/create', component: _country_country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_9__["CountryDetailComponent"] },
            { path: 'countries/edit/:id', component: _country_country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_9__["CountryDetailComponent"] },
            { path: 'cities', component: _city_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_10__["CityListComponent"] },
            { path: 'cities/create', component: _city_city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_11__["CityDetailComponent"] },
            { path: 'cities/edit/:id', component: _city_city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_11__["CityDetailComponent"] }
        ],
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./app/settings/settings.module.ts":
/*!*****************************************!*\
  !*** ./app/settings/settings.module.ts ***!
  \*****************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "../node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data */ "./app/core/data/index.ts");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./app/settings/settings-routing.module.ts");
/* harmony import */ var _country_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country/country-list/country-list.component */ "./app/settings/country/country-list/country-list.component.ts");
/* harmony import */ var _country_country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country/country-detail/country-detail.component */ "./app/settings/country/country-detail/country-detail.component.ts");
/* harmony import */ var _city_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./city/city-list/city-list.component */ "./app/settings/city/city-list/city-list.component.ts");
/* harmony import */ var _city_city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./city/city-detail/city-detail.component */ "./app/settings/city/city-detail/city-detail.component.ts");
/* harmony import */ var _pricerange_pricerange_list_pricerange_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pricerange/pricerange-list/pricerange-list.component */ "./app/settings/pricerange/pricerange-list/pricerange-list.component.ts");
/* harmony import */ var _pricerange_pricerange_detail_pricerange_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pricerange/pricerange-detail/pricerange-detail.component */ "./app/settings/pricerange/pricerange-detail/pricerange-detail.component.ts");
/* harmony import */ var _specialty_specialty_list_specialty_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./specialty/specialty-list/specialty-list.component */ "./app/settings/specialty/specialty-list/specialty-list.component.ts");
/* harmony import */ var _specialty_specialty_detail_specialty_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./specialty/specialty-detail/specialty-detail.component */ "./app/settings/specialty/specialty-detail/specialty-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsRoutingModule"]
            ],
            declarations: [
                _country_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_6__["CountryListComponent"],
                _country_country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_7__["CountryDetailComponent"],
                _city_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_8__["CityListComponent"],
                _city_city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_9__["CityDetailComponent"],
                _pricerange_pricerange_list_pricerange_list_component__WEBPACK_IMPORTED_MODULE_10__["PricerangeListComponent"],
                _pricerange_pricerange_detail_pricerange_detail_component__WEBPACK_IMPORTED_MODULE_11__["PricerangeDetailComponent"],
                _specialty_specialty_list_specialty_list_component__WEBPACK_IMPORTED_MODULE_12__["SpecialtyListComponent"],
                _specialty_specialty_detail_specialty_detail_component__WEBPACK_IMPORTED_MODULE_13__["SpecialtyDetailComponent"]
            ],
            providers: [_core_data__WEBPACK_IMPORTED_MODULE_4__["CountryClient"], _core_data__WEBPACK_IMPORTED_MODULE_4__["CityClient"], _core_data__WEBPACK_IMPORTED_MODULE_4__["PricerangeClient"], _core_data__WEBPACK_IMPORTED_MODULE_4__["SpecialtyClient"]]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./app/settings/specialty/specialty-detail/specialty-detail.component.html":
/*!*********************************************************************************!*\
  !*** ./app/settings/specialty/specialty-detail/specialty-detail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-sm-8\">\n      <h2>{{title}}</h2>\n  </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"ibox float-e-margins\">\n      <div class=\"ibox-content\">\n\n          <form class=\"form-horizontal\" [formGroup]=\"itemForm\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\n              <div class=\"form-group row\">\n                <label for=\"Name\" class=\"col-sm-3 form-control-label\">Name</label>\n                <div class=\"col-sm-9\">\n                  <input id=\"name\" type=\"text\" formControlName=\"name\" class=\"form-control\">\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['name']) && formDir.submitted\">\n                    Required.\n                  </span>\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['name'])\">\n                    Must be at least 4 characters long.\n                  </span>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"NameArabic\" class=\"col-sm-3 form-control-label\">Arabic</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" formControlName=\"nameArabic\" class=\"form-control\">\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('required', ['nameArabic']) && formDir.submitted\">\n                    Required.\n                  </span>\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('minlength', ['nameArabic'])\">\n                    Must be at least 4 characters long.\n                  </span>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"Rank\" class=\"col-sm-3 form-control-label\">Display Order</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" formControlName=\"rank\" class=\"form-control\">\n                  <span class=\"text-danger\" *ngIf=\"itemForm.hasError('onlynumber', ['rank']) && formDir.submitted\">\n                    Numbers Only.\n                  </span>\n                </div>\n              </div>\n              \n              <div class=\"form-group row\">\n                <div class=\"offset-sm-3 col-sm-9\">\n                  <div class=\"checkbox\">\n                    <label> <input type=\"checkbox\" class=\"i-checks\" formControlName=\"isEnabled\"> Enabled </label>\n                  </div>\n                </div>\n              </div>\n              \n              <!-- buttons start -->\n              <div class=\"form-group row\">\n                <div class=\"offset-sm-3 col-sm-9\">\n                  <button type=\"submit\" [disabled]=\"itemForm.invalid\" class=\"btn btn-primary btn-tn m-r-xs\">Save</button>\n                  <button class=\"btn btn-secondary btn-demo btn-tn\" (click)=\"cancel()\">Cancel</button>\n                </div>\n              </div>\n              <!-- buttons end -->\n            </form>\n      </div> <!-- ibox content -->\n    </div>\n  </div>\n</div>\n</div>\n<!--\n<p>Form value: {{ itemForm.value | json }}</p>\n-->\n\n"

/***/ }),

/***/ "./app/settings/specialty/specialty-detail/specialty-detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./app/settings/specialty/specialty-detail/specialty-detail.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/settings/specialty/specialty-detail/specialty-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./app/settings/specialty/specialty-detail/specialty-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SpecialtyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtyDetailComponent", function() { return SpecialtyDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services */ "./app/core/services/index.ts");
/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/validators */ "./app/core/validators/index.ts");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpecialtyDetailComponent = /** @class */ (function () {
    function SpecialtyDetailComponent(client, fb, activatedRoute, router, pageSrv) {
        this.client = client;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageSrv = pageSrv;
        this.id = '';
        this.title = 'Create';
        this.page = new _core_services__WEBPACK_IMPORTED_MODULE_3__["ActivatedPage"]();
        this.page = this.pageSrv.getActivatedPage(this.activatedRoute);
        this.createForm();
        // this.title = this.pageSrv.getListTitleForProvider(this.page.typeFlag, this.page.title);
    }
    SpecialtyDetailComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            id: '',
            providerType: 0,
            rank: [0, [_core_validators__WEBPACK_IMPORTED_MODULE_4__["NumberValidator"]]],
            isEnabled: true,
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]],
            nameArabic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128)]]
        });
    };
    SpecialtyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.page.isEdit) {
            this.client.get(this.page.id).subscribe(function (resp) {
                console.log(resp);
                _this.itemForm.setValue(resp);
                // console.log("form--> " + this.itemForm.value);
            }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        }
        else {
        }
    };
    SpecialtyDetailComponent.prototype.save = function () {
        var _this = this;
        if (!this.itemForm.valid) {
            return;
        }
        if (this.page.isEdit) {
            this.client.save(this.page.id, this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['settings/specialties']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.client.create(this.itemForm.value)
                .subscribe(function () {
                _this.router.navigate(['settings/specialties']);
            }, function (error) {
                console.log(error);
            });
        }
        // console.log(this.itemForm.value);
    };
    SpecialtyDetailComponent.prototype.cancel = function () {
        this.router.navigate(['settings/specialties/' + this.page.typeFlag]);
    };
    SpecialtyDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-specialty-detail',
            template: __webpack_require__(/*! ./specialty-detail.component.html */ "./app/settings/specialty/specialty-detail/specialty-detail.component.html"),
            styles: [__webpack_require__(/*! ./specialty-detail.component.scss */ "./app/settings/specialty/specialty-detail/specialty-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_5__["SpecialtyClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], SpecialtyDetailComponent);
    return SpecialtyDetailComponent;
}());



/***/ }),

/***/ "./app/settings/specialty/specialty-list/specialty-list.component.html":
/*!*****************************************************************************!*\
  !*** ./app/settings/specialty/specialty-list/specialty-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-sm-8\">\n        <h2>{{title}}</h2>\n    </div>\n    <div class=\"col-sm-4 m-t-md\">\n        <div class=\"pull-right\">\n            <button (click)=\"create()\" class=\"btn btn-primary btn-tn\">Add</button>\n        </div>\n        <span class=\"pull-right m-xs m-r-md\">\n            <label> <input type=\"checkbox\" class=\"i-checks\" (change)=\"toggleEnabled($event)\"> Show all </label>\n        </span>\n    </div>\n</div>\n\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                        \n            <ngx-datatable class=\"bootstrap\"\n            [rows]=\"items.result\"\n            [loadingIndicator]=\"loadingIndicator\"\n            [headerHeight]=\"40\"\n            [footerHeight]=\"40\"\n            [columnMode]=\"'force'\"\n            [rowHeight]=\"40\"\n            [externalPaging]=\"true\"\n            [count]=\"count\"\n            [offset]=\"items.pageIndex\"\n            [limit]=\"items.pageSize\"\n            (page)='loadPage($event)'>\n                <ngx-datatable-column name=\"Rank\" prop=\"rank\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Name\" prop=\"name\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Arabic\" prop=\"nameArabic\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Enabled\" prop=\"isEnabled\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"id\">\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <button md-icon-button class=\"btn-white\" (click)=\"deleteConfirm(value)\">\n                            <i class=\"fa fa-trash\"></i>\n                        </button>\n                        <button md-icon-button class=\"btn-white\" [routerLink]=\"['edit', value]\">\n                            <i class=\"fa fa-pencil\"></i>\n                        </button>\n                    </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n                </div>\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./app/settings/specialty/specialty-list/specialty-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./app/settings/specialty/specialty-list/specialty-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/settings/specialty/specialty-list/specialty-list.component.ts":
/*!***************************************************************************!*\
  !*** ./app/settings/specialty/specialty-list/specialty-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: SpecialtyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtyListComponent", function() { return SpecialtyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data */ "./app/core/data/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services */ "./app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpecialtyListComponent = /** @class */ (function () {
    function SpecialtyListComponent(client, router, route, pageSrv) {
        var _this = this;
        this.client = client;
        this.router = router;
        this.route = route;
        this.pageSrv = pageSrv;
        this.title = '';
        this.subTitle = 'Specialties';
        this.count = 0;
        this.typeFlag = 0;
        this.loadAll = false;
        this.loadingIndicator = true;
        this.items = new _core_data__WEBPACK_IMPORTED_MODULE_2__["PagedResultOfSpecialty"]();
        this.route.params.subscribe(function (params) {
            _this.typeFlag = params['flag']; // (+) converts string 'id' to a number
            _this.title = _this.pageSrv.getListTitleForProvider(_this.typeFlag, _this.subTitle);
            _this.loadPage({ offset: 0, pageSize: 10 });
        });
    }
    SpecialtyListComponent.prototype.ngOnInit = function () {
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    // Common
    SpecialtyListComponent.prototype.create = function () {
        this.router.navigate(['settings/specialties/create']);
    };
    SpecialtyListComponent.prototype.loadPage = function (para) {
        var _this = this;
        this.client.page(para.offset, para.pageSize, this.typeFlag, this.loadAll).subscribe(function (res) {
            _this.items = res;
            _this.count = res.count;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        }, function (error) { return console.log(error); }, function () { return console.log('Get paged items complete'); });
    };
    SpecialtyListComponent.prototype.reloadPage = function () {
        this.loadPage({ offset: this.items.pageIndex, pageSize: this.items.pageSize });
    };
    SpecialtyListComponent.prototype.delete = function (id) {
        var _this = this;
        this.client.delete(id)
            .subscribe(function () {
            _this.reloadPage();
        }, function (error) {
            console.log(error);
        });
    };
    SpecialtyListComponent.prototype.deleteConfirm = function (id) {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this item: ?')) {
            this.delete(id);
            // event.confirm.resolve();
        }
        else {
            // event.confirm.reject();
        }
    };
    SpecialtyListComponent.prototype.toggleEnabled = function (e) {
        this.loadAll = false;
        if (e.target.checked) {
            this.loadAll = true;
        }
        this.loadPage({ offset: 0, pageSize: 10 });
    };
    SpecialtyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-specialty-list',
            template: __webpack_require__(/*! ./specialty-list.component.html */ "./app/settings/specialty/specialty-list/specialty-list.component.html"),
            styles: [__webpack_require__(/*! ./specialty-list.component.scss */ "./app/settings/specialty/specialty-list/specialty-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_2__["SpecialtyClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], SpecialtyListComponent);
    return SpecialtyListComponent;
}());



/***/ }),

/***/ "./app/unauthorized/unauthorized.component.html":
/*!******************************************************!*\
  !*** ./app/unauthorized/unauthorized.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n\n<div class=\"alert alert-danger\">\n  <strong>{{message}}</strong>\n</div>"

/***/ }),

/***/ "./app/unauthorized/unauthorized.component.scss":
/*!******************************************************!*\
  !*** ./app/unauthorized/unauthorized.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/unauthorized/unauthorized.component.ts":
/*!****************************************************!*\
  !*** ./app/unauthorized/unauthorized.component.ts ***!
  \****************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnauthorizedComponent = /** @class */ (function () {
    function UnauthorizedComponent() {
        this.values = [];
        this.message = '401: You have no rights to access this. Please Login';
    }
    UnauthorizedComponent.prototype.ngOnInit = function () {
    };
    UnauthorizedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unauthorized',
            template: __webpack_require__(/*! ./unauthorized.component.html */ "./app/unauthorized/unauthorized.component.html"),
            styles: [__webpack_require__(/*! ./unauthorized.component.scss */ "./app/unauthorized/unauthorized.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UnauthorizedComponent);
    return UnauthorizedComponent;
}());



/***/ }),

/***/ "./app/views/appviews/appviews.module.ts":
/*!***********************************************!*\
  !*** ./app/views/appviews/appviews.module.ts ***!
  \***********************************************/
/*! exports provided: AppviewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppviewsModule", function() { return AppviewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _starterview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./starterview.component */ "./app/views/appviews/starterview.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./app/views/appviews/login.component.ts");
/* harmony import */ var _components_charts_peity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/charts/peity */ "./app/components/charts/peity.ts");
/* harmony import */ var _components_charts_sparkline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/charts/sparkline */ "./app/components/charts/sparkline.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppviewsModule = /** @class */ (function () {
    function AppviewsModule() {
    }
    AppviewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _starterview_component__WEBPACK_IMPORTED_MODULE_3__["StarterViewComponent"],
                _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _components_charts_peity__WEBPACK_IMPORTED_MODULE_5__["PeityModule"],
                _components_charts_sparkline__WEBPACK_IMPORTED_MODULE_6__["SparklineModule"]
            ],
            exports: [
                _starterview_component__WEBPACK_IMPORTED_MODULE_3__["StarterViewComponent"],
                _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
        })
    ], AppviewsModule);
    return AppviewsModule;
}());



/***/ }),

/***/ "./app/views/appviews/login.component.ts":
/*!***********************************************!*\
  !*** ./app/views/appviews/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.template.html */ "./app/views/appviews/login.template.html")
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./app/views/appviews/login.template.html":
/*!************************************************!*\
  !*** ./app/views/appviews/login.template.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center loginscreen  animated fadeInDown\">\n    <div>\n        <div>\n            <h1 class=\"logo-name\">IN+</h1>\n        </div>\n        <h3>Welcome to IN+</h3>\n        <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.\n        </p>\n        <p>Login in. To see it in action.</p>\n        <form class=\"m-t\" role=\"form\" action=\"#\">\n            <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Username\" required=\"\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary block full-width m-b\">Login</button>\n\n            <a href=\"#\"><small>Forgot password?</small></a>\n            <p class=\"text-muted text-center\"><small>Do not have an account?</small></p>\n            <a class=\"btn btn-sm btn-white btn-block\" href=\"#\">Create an account</a>\n        </form>\n        <p class=\"m-t\"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./app/views/appviews/starter.template.html":
/*!**************************************************!*\
  !*** ./app/views/appviews/starter.template.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n        <div class=\"row\">\n                <div class=\"col-lg-3\">\n                  <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                      <span class=\"label label-success pull-right\"></span>\n                      <h5>Doctors</h5>\n                    </div>\n                    <div class=\"ibox-content\">\n                      <h1 class=\"no-margins\">{{doctorCount}}</h1>\n                      <!--\n                      <div class=\"stat-percent font-bold text-success\">98% <i class=\"fa fa-bolt\"></i></div>\n                      <small>Total income</small>\n                      -->\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                      <span class=\"label label-info pull-right\"></span>\n                      <h5>Nurses</h5>\n                    </div>\n                    <div class=\"ibox-content\">\n                      <h1 class=\"no-margins\">{{nurseCount}}</h1>\n                      <!--\n                      <div class=\"stat-percent font-bold text-info\">20% <i class=\"fa fa-level-up\"></i></div>\n                      <small>New orders</small>\n                      -->\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                      <span class=\"label label-primary pull-right\"></span>\n                      <h5>Laboratories</h5>\n                    </div>\n                    <div class=\"ibox-content\">\n                      <h1 class=\"no-margins\">{{labCount}}</h1>\n                      <!--\n                      <div class=\"stat-percent font-bold text-navy\">44% <i class=\"fa fa-level-up\"></i></div>\n                      <small>Laboratories</small>\n                      -->\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                      <span class=\"label label-danger pull-right\"></span>\n                      <h5>Radiographies</h5>\n                    </div>\n                    <div class=\"ibox-content\">\n                      <h1 class=\"no-margins\">{{radioCount}}</h1>\n                      <!--\n                      <div class=\"stat-percent font-bold text-danger\">38% <i class=\"fa fa-level-down\"></i></div>\n                      <small>In first month</small>\n                      -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n</div>\n"

/***/ }),

/***/ "./app/views/appviews/starterview.component.ts":
/*!*****************************************************!*\
  !*** ./app/views/appviews/starterview.component.ts ***!
  \*****************************************************/
/*! exports provided: StarterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterViewComponent", function() { return StarterViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data */ "./app/core/data/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarterViewComponent = /** @class */ (function () {
    function StarterViewComponent(client) {
        this.client = client;
        this.doctorCount = 0;
        this.nurseCount = 0;
        this.labCount = 0;
        this.radioCount = 0;
        this.nav = document.querySelector('nav.navbar');
    }
    StarterViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.className += ' white-bg';
        this.client.count(1).subscribe(function (resp) {
            console.log(resp);
            _this.doctorCount = resp;
        }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        this.client.count(2).subscribe(function (resp) {
            console.log(resp);
            _this.nurseCount = resp;
        }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        this.client.count(3).subscribe(function (resp) {
            console.log(resp);
            _this.labCount = resp;
        }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
        this.client.count(4).subscribe(function (resp) {
            console.log(resp);
            _this.radioCount = resp;
        }, function (error) { return console.log(error); }, function () { return console.log('get item complete'); });
    };
    StarterViewComponent.prototype.ngOnDestroy = function () {
        this.nav.classList.remove('white-bg');
    };
    StarterViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-starter',
            template: __webpack_require__(/*! ./starter.template.html */ "./app/views/appviews/starter.template.html")
        }),
        __metadata("design:paramtypes", [_core_data__WEBPACK_IMPORTED_MODULE_1__["ProviderClient"]])
    ], StarterViewComponent);
    return StarterViewComponent;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    /*
    STS_BASE_URL: 'http://localhost:5000',
    API_BASE_URL: 'http://localhost:5001',
    APP_BASE_URL: 'http://localhost:4200',
    */
    STS_BASE_URL: 'http://medcallidsrv1234.azurewebsites.net',
    API_BASE_URL: 'http://medcallapi1234.azurewebsites.net',
    APP_BASE_URL: 'https://medcalldashboard.azurewebsites.net'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\project\Apps\Medcall\Medcall_Final\Final Files\Admin\Admin\medcalldashboard\medcalldashboard\dashboard\src\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map