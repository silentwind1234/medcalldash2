(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

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



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map