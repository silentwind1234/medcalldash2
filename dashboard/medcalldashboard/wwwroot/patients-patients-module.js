(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patients-patients-module"],{

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



/***/ })

}]);
//# sourceMappingURL=patients-patients-module.js.map