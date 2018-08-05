(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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









/***/ })

}]);
//# sourceMappingURL=common.js.map