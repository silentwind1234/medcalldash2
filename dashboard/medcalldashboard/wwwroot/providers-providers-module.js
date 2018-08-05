(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["providers-providers-module"],{

/***/ "../node_modules/ngx-bootstrap/chronos/create/check-overflow.js":
/*!**********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/create/check-overflow.js ***!
  \**********************************************************************/
/*! exports provided: checkOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkOverflow", function() { return checkOverflow; });
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsing-flags */ "../node_modules/ngx-bootstrap/chronos/create/parsing-flags.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/month */ "../node_modules/ngx-bootstrap/chronos/units/month.js");



function checkOverflow(config) {
    var overflow;
    var a = config._a;
    if (a && Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_0__["getParsingFlags"])(config).overflow === -2) {
        // todo: fix this sh*t
        overflow =
            a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]] > 11 ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"] :
                a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"]] < 1 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"]] > Object(_units_month__WEBPACK_IMPORTED_MODULE_2__["daysInMonth"])(a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["YEAR"]], a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]]) ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"] :
                    a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]] > 24 || (a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]] === 24 && (a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]] !== 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]] !== 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]] !== 0)) ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"] :
                        a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]] > 59 ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"] :
                            a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]] > 59 ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"] :
                                a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]] > 999 ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"] :
                                    -1;
        if (Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_0__["getParsingFlags"])(config)._overflowDayOfYear && (overflow < _units_constants__WEBPACK_IMPORTED_MODULE_1__["YEAR"] || overflow > _units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"])) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"];
        }
        if (Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_0__["getParsingFlags"])(config)._overflowWeeks && overflow === -1) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__["WEEK"];
        }
        if (Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_0__["getParsingFlags"])(config)._overflowWeekday && overflow === -1) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__["WEEKDAY"];
        }
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_0__["getParsingFlags"])(config).overflow = overflow;
    }
    return config;
}
//# sourceMappingURL=check-overflow.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/create/clone.js":
/*!*************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/create/clone.js ***!
  \*************************************************************/
/*! exports provided: cloneDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDate", function() { return cloneDate; });
// fastest way to clone date
// https://jsperf.com/clone-date-object2
function cloneDate(date) {
    return new Date(date.getTime());
}
//# sourceMappingURL=clone.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/create/date-from-array.js":
/*!***********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/create/date-from-array.js ***!
  \***********************************************************************/
/*! exports provided: createUTCDate, createDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUTCDate", function() { return createUTCDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDate", function() { return createDate; });
function createUTCDate(y, m, d) {
    var date = new Date(Date.UTC.apply(null, arguments));
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}
function createDate(y, m, d, h, M, s, ms) {
    if (m === void 0) { m = 0; }
    if (d === void 0) { d = 1; }
    if (h === void 0) { h = 0; }
    if (M === void 0) { M = 0; }
    if (s === void 0) { s = 0; }
    if (ms === void 0) { ms = 0; }
    var date = new Date(y, m, d, h, M, s, ms);
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}
//# sourceMappingURL=date-from-array.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/create/from-anything.js":
/*!*********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/create/from-anything.js ***!
  \*********************************************************************/
/*! exports provided: prepareConfig, createLocalOrUTC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareConfig", function() { return prepareConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocalOrUTC", function() { return createLocalOrUTC; });
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/locales */ "../node_modules/ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valid */ "../node_modules/ngx-bootstrap/chronos/create/valid.js");
/* harmony import */ var _from_string_and_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from-string-and-array */ "../node_modules/ngx-bootstrap/chronos/create/from-string-and-array.js");
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from-string-and-format */ "../node_modules/ngx-bootstrap/chronos/create/from-string-and-format.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone */ "../node_modules/ngx-bootstrap/chronos/create/clone.js");
/* harmony import */ var _from_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./from-string */ "../node_modules/ngx-bootstrap/chronos/create/from-string.js");
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./from-array */ "../node_modules/ngx-bootstrap/chronos/create/from-array.js");
/* harmony import */ var _from_object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./from-object */ "../node_modules/ngx-bootstrap/chronos/create/from-object.js");
/* harmony import */ var _check_overflow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./check-overflow */ "../node_modules/ngx-bootstrap/chronos/create/check-overflow.js");










function createFromConfig(config) {
    var res = Object(_check_overflow__WEBPACK_IMPORTED_MODULE_9__["checkOverflow"])(prepareConfig(config));
    // todo: remove, in moment.js it's never called cuz of moment constructor
    res._d = new Date(res._d != null ? res._d.getTime() : NaN);
    if (!Object(_valid__WEBPACK_IMPORTED_MODULE_2__["isValid"])(Object.assign({}, res, { _isValid: null }))) {
        res._d = new Date(NaN);
    }
    // todo: update offset
    /*if (res._nextDay) {
        // Adding is smart enough around DST
        res._d = add(res._d, 1, 'day');
        res._nextDay = undefined;
      }*/
    return res;
}
function prepareConfig(config) {
    var input = config._i;
    var format = config._f;
    config._locale = config._locale || Object(_locale_locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"])(config._l);
    if (input === null || (format === undefined && input === '')) {
        return Object(_valid__WEBPACK_IMPORTED_MODULE_2__["createInvalid"])(config, { nullInput: true });
    }
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isString"])(input)) {
        config._i = input = config._locale.preparse(input);
    }
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isDate"])(input)) {
        config._d = Object(_clone__WEBPACK_IMPORTED_MODULE_5__["cloneDate"])(input);
        return config;
    }
    // todo: add check for recursion
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isArray"])(format)) {
        Object(_from_string_and_array__WEBPACK_IMPORTED_MODULE_3__["configFromStringAndArray"])(config);
    }
    else if (format) {
        Object(_from_string_and_format__WEBPACK_IMPORTED_MODULE_4__["configFromStringAndFormat"])(config);
    }
    else {
        configFromInput(config);
    }
    if (!Object(_valid__WEBPACK_IMPORTED_MODULE_2__["isValid"])(config)) {
        config._d = null;
    }
    return config;
}
function configFromInput(config) {
    var input = config._i;
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(input)) {
        config._d = new Date();
    }
    else if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isDate"])(input)) {
        config._d = Object(_clone__WEBPACK_IMPORTED_MODULE_5__["cloneDate"])(input);
    }
    else if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isString"])(input)) {
        Object(_from_string__WEBPACK_IMPORTED_MODULE_6__["configFromString"])(config);
    }
    else if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isArray"])(input) && input.length) {
        var _arr = input.slice(0);
        config._a = _arr.map(function (obj) { return Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isString"])(obj) ? parseInt(obj, 10) : obj; });
        Object(_from_array__WEBPACK_IMPORTED_MODULE_7__["configFromArray"])(config);
    }
    else if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isObject"])(input)) {
        Object(_from_object__WEBPACK_IMPORTED_MODULE_8__["configFromObject"])(config);
    }
    else if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(input)) {
        // from milliseconds
        config._d = new Date(input);
    }
    else {
        //   hooks.createFromInputFallback(config);
        return Object(_valid__WEBPACK_IMPORTED_MODULE_2__["createInvalid"])(config);
    }
    return config;
}
function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
    var config = {};
    var _input = input;
    // params switch -> skip; test it well
    // if (localeKey === true || localeKey === false) {
    //     strict = localeKey;
    //     localeKey = undefined;
    // }
    // todo: fail fast and return not valid date
    if ((Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isObject"])(_input) && Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isObjectEmpty"])(_input)) || (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_input) && _input.length === 0)) {
        _input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    // config._isAMomentObject = true;
    config._useUTC = config._isUTC = isUTC;
    config._l = localeKey;
    config._i = _input;
    config._f = format;
    config._strict = strict;
    return createFromConfig(config);
}
//# sourceMappingURL=from-anything.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/create/from-array.js":
/*!******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/create/from-array.js ***!
  \******************************************************************/
/*! exports provided: configFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromArray", function() { return configFromArray; });
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/year */ "../node_modules/ngx-bootstrap/chronos/units/year.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsing-flags */ "../node_modules/ngx-bootstrap/chronos/create/parsing-flags.js");
/* harmony import */ var _date_from_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-from-array */ "../node_modules/ngx-bootstrap/chronos/create/date-from-array.js");
/* harmony import */ var _units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/week-calendar-utils */ "../node_modules/ngx-bootstrap/chronos/units/week-calendar-utils.js");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/defaults */ "../node_modules/ngx-bootstrap/chronos/utils/defaults.js");







function currentDateArray(config) {
    var nowValue = new Date();
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray(config) {
    var input = [];
    var i;
    var date;
    var currentDate;
    var expectedWeekday;
    var yearToUse;
    if (config._d) {
        return config;
    }
    currentDate = currentDateArray(config);
    // compute day of the year from weeks and weekdays
    if (config._w && config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["DATE"]] == null && config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["MONTH"]] == null) {
        dayOfYearFromWeekInfo(config);
    }
    // if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_5__["defaults"])(config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["YEAR"]], currentDate[_units_constants__WEBPACK_IMPORTED_MODULE_0__["YEAR"]]);
        if (config._dayOfYear > Object(_units_year__WEBPACK_IMPORTED_MODULE_1__["daysInYear"])(yearToUse) || config._dayOfYear === 0) {
            Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["getParsingFlags"])(config)._overflowDayOfYear = true;
        }
        date = new Date(Date.UTC(yearToUse, 0, config._dayOfYear));
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["MONTH"]] = date.getUTCMonth();
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["DATE"]] = date.getUTCDate();
    }
    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }
    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }
    // Check for 24:00:00.000
    if (config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["HOUR"]] === 24 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["MINUTE"]] === 0 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["SECOND"]] === 0 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["MILLISECOND"]] === 0) {
        config._nextDay = true;
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["HOUR"]] = 0;
    }
    config._d = (config._useUTC ? _date_from_array__WEBPACK_IMPORTED_MODULE_3__["createUTCDate"] : _date_from_array__WEBPACK_IMPORTED_MODULE_3__["createDate"]).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["HOUR"]] = 24;
    }
    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["getParsingFlags"])(config).weekdayMismatch = true;
    }
    return config;
}
function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;
        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_5__["defaults"])(w.GG, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["YEAR"]], Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_4__["weekOfYear"])(new Date(), 1, 4).year);
        week = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_5__["defaults"])(w.W, 1);
        weekday = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_5__["defaults"])(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    }
    else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        var curWeek = Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_4__["weekOfYear"])(new Date(), dow, doy);
        weekYear = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_5__["defaults"])(w.gg, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["YEAR"]], curWeek.year);
        // Default to current week.
        week = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_5__["defaults"])(w.w, curWeek.week);
        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        }
        else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        }
        else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_4__["weeksInYear"])(weekYear, dow, doy)) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["getParsingFlags"])(config)._overflowWeeks = true;
    }
    else if (weekdayOverflow != null) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["getParsingFlags"])(config)._overflowWeekday = true;
    }
    else {
        temp = Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_4__["dayOfYearFromWeeks"])(weekYear, week, weekday, dow, doy);
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_0__["YEAR"]] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
    return config;
}
//# sourceMappingURL=from-array.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/create/from-object.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/create/from-object.js ***!
  \*******************************************************************/
/*! exports provided: configFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromObject", function() { return configFromObject; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-array */ "../node_modules/ngx-bootstrap/chronos/create/from-array.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");



function configFromObject(config) {
    if (config._d) {
        return config;
    }
    var input = config._i;
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isObject"])(input)) {
        var i = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeObjectUnits"])(input);
        config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds]
            .map(function (obj) { return Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isString"])(obj) ? parseInt(obj, 10) : obj; });
    }
    return Object(_from_array__WEBPACK_IMPORTED_MODULE_1__["configFromArray"])(config);
}
//# sourceMappingURL=from-object.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/create/from-string-and-array.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/create/from-string-and-array.js ***!
  \*****************************************************************************/
/*! exports provided: configFromStringAndArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromStringAndArray", function() { return configFromStringAndArray; });
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valid */ "../node_modules/ngx-bootstrap/chronos/create/valid.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing-flags */ "../node_modules/ngx-bootstrap/chronos/create/parsing-flags.js");
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from-string-and-format */ "../node_modules/ngx-bootstrap/chronos/create/from-string-and-format.js");



// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig;
    var bestMoment;
    var scoreToBeat;
    var currentScore;
    if (!config._f || config._f.length === 0) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_1__["getParsingFlags"])(config).invalidFormat = true;
        return Object(_valid__WEBPACK_IMPORTED_MODULE_0__["createInvalid"])(config);
    }
    var i;
    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = Object.assign({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        Object(_from_string_and_format__WEBPACK_IMPORTED_MODULE_2__["configFromStringAndFormat"])(tempConfig);
        if (!Object(_valid__WEBPACK_IMPORTED_MODULE_0__["isValid"])(tempConfig)) {
            continue;
        }
        // if there is any input that was not parsed add a penalty for that format
        currentScore += Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_1__["getParsingFlags"])(tempConfig).charsLeftOver;
        // or tokens
        currentScore += Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_1__["getParsingFlags"])(tempConfig).unusedTokens.length * 10;
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_1__["getParsingFlags"])(tempConfig).score = currentScore;
        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }
    return Object.assign(config, bestMoment || tempConfig);
}
//# sourceMappingURL=from-string-and-array.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/create/from-string-and-format.js":
/*!******************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/create/from-string-and-format.js ***!
  \******************************************************************************/
/*! exports provided: ISO_8601, RFC_2822, configFromStringAndFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISO_8601", function() { return ISO_8601; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RFC_2822", function() { return RFC_2822; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromStringAndFormat", function() { return configFromStringAndFormat; });
/* harmony import */ var _from_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-string */ "../node_modules/ngx-bootstrap/chronos/create/from-string.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format */ "../node_modules/ngx-bootstrap/chronos/format.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./from-array */ "../node_modules/ngx-bootstrap/chronos/create/from-array.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsing-flags */ "../node_modules/ngx-bootstrap/chronos/create/parsing-flags.js");
/* harmony import */ var _check_overflow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./check-overflow */ "../node_modules/ngx-bootstrap/chronos/create/check-overflow.js");










// constant that refers to the ISO standard
// hooks.ISO_8601 = function () {};
var ISO_8601 = 'ISO_8601';
// constant that refers to the RFC 2822 form
// hooks.RFC_2822 = function () {};
var RFC_2822 = 'RFC_2822';
// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === ISO_8601) {
        return Object(_from_string__WEBPACK_IMPORTED_MODULE_0__["configFromISO"])(config);
    }
    if (config._f === RFC_2822) {
        return Object(_from_string__WEBPACK_IMPORTED_MODULE_0__["configFromRFC2822"])(config);
    }
    config._a = [];
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["getParsingFlags"])(config).empty = true;
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_3__["isArray"])(config._f) || (!config._i && config._i !== 0)) {
        return config;
    }
    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var input = config._i.toString();
    var totalParsedInputLength = 0;
    var inputLength = input.length;
    var tokens = Object(_format__WEBPACK_IMPORTED_MODULE_1__["expandFormat"])(config._f, config._locale).match(_format_format__WEBPACK_IMPORTED_MODULE_2__["formattingTokens"]) || [];
    var i;
    var token;
    var parsedInput;
    var skipped;
    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (input.match(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["getParseRegexForToken"])(token, config._locale)) || [])[0];
        if (parsedInput) {
            skipped = input.substr(0, input.indexOf(parsedInput));
            if (skipped.length > 0) {
                Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["getParsingFlags"])(config).unusedInput.push(skipped);
            }
            input = input.slice(input.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (_format_format__WEBPACK_IMPORTED_MODULE_2__["formatTokenFunctions"][token]) {
            if (parsedInput) {
                Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["getParsingFlags"])(config).empty = false;
            }
            else {
                Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["getParsingFlags"])(config).unusedTokens.push(token);
            }
            Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addTimeToArrayFromToken"])(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["getParsingFlags"])(config).unusedTokens.push(token);
        }
    }
    // add remaining unparsed input length to the string
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["getParsingFlags"])(config).charsLeftOver = inputLength - totalParsedInputLength;
    if (input.length > 0) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["getParsingFlags"])(config).unusedInput.push(input);
    }
    // clear _12h flag if hour is <= 12
    if (config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] <= 12 &&
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["getParsingFlags"])(config).bigHour === true &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] > 0) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["getParsingFlags"])(config).bigHour = void 0;
    }
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["getParsingFlags"])(config).parsedDateParts = config._a.slice(0);
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["getParsingFlags"])(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = meridiemFixWrap(config._locale, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]], config._meridiem);
    Object(_from_array__WEBPACK_IMPORTED_MODULE_7__["configFromArray"])(config);
    return Object(_check_overflow__WEBPACK_IMPORTED_MODULE_9__["checkOverflow"])(config);
}
function meridiemFixWrap(locale, _hour, meridiem) {
    var hour = _hour;
    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    }
    if (locale.isPM == null) {
        // this is not supposed to happen
        return hour;
    }
    // Fallback
    var isPm = locale.isPM(meridiem);
    if (isPm && hour < 12) {
        hour += 12;
    }
    if (!isPm && hour === 12) {
        hour = 0;
    }
    return hour;
}
//# sourceMappingURL=from-string-and-format.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/create/from-string.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/create/from-string.js ***!
  \*******************************************************************/
/*! exports provided: configFromISO, configFromRFC2822, configFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromISO", function() { return configFromISO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromRFC2822", function() { return configFromRFC2822; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromString", function() { return configFromString; });
/* harmony import */ var _locale_locale_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/locale.class */ "../node_modules/ngx-bootstrap/chronos/locale/locale.class.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from-string-and-format */ "../node_modules/ngx-bootstrap/chronos/create/from-string-and-format.js");
/* harmony import */ var _date_from_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-from-array */ "../node_modules/ngx-bootstrap/chronos/create/date-from-array.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./valid */ "../node_modules/ngx-bootstrap/chronos/create/valid.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsing-flags */ "../node_modules/ngx-bootstrap/chronos/create/parsing-flags.js");






// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
// tslint:disable-next-line
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
// tslint:disable-next-line
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/, true],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/, true],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/, true],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/, true],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/, true],
    ['YYYYMMDD', /\d{8}/, true],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/, true],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/, true]
];
// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];
var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};
// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
// tslint:disable-next-line
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
// date from iso format
function configFromISO(config) {
    if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isString"])(config._i)) {
        return config;
    }
    var input = config._i;
    var match = extendedIsoRegex.exec(input) || basicIsoRegex.exec(input);
    var allowTime;
    var dateFormat;
    var timeFormat;
    var tzFormat;
    if (!match) {
        config._isValid = false;
        return config;
    }
    // getParsingFlags(config).iso = true;
    var i;
    var l;
    for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
        }
    }
    if (dateFormat == null) {
        config._isValid = false;
        return config;
    }
    if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
            if (isoTimes[i][1].exec(match[3])) {
                // match[2] should be 'T' or space
                timeFormat = (match[2] || ' ') + isoTimes[i][0];
                break;
            }
        }
        if (timeFormat == null) {
            config._isValid = false;
            return config;
        }
    }
    if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return config;
    }
    if (match[4]) {
        if (tzRegex.exec(match[4])) {
            tzFormat = 'Z';
        }
        else {
            config._isValid = false;
            return config;
        }
    }
    config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
    return Object(_from_string_and_format__WEBPACK_IMPORTED_MODULE_2__["configFromStringAndFormat"])(config);
}
// tslint:disable-next-line
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
        untruncateYear(yearStr),
        _locale_locale_class__WEBPACK_IMPORTED_MODULE_0__["defaultLocaleMonthsShort"].indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];
    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }
    return result;
}
function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    return year <= 49 ? year + 2000 : year;
}
function preprocessRFC2822(str) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return str
        .replace(/\([^)]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ').trim();
}
function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = _locale_locale_class__WEBPACK_IMPORTED_MODULE_0__["defaultLocaleWeekdaysShort"].indexOf(weekdayStr);
        var weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_5__["getParsingFlags"])(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}
function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    }
    else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    }
    else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100;
        var h = (hm - m) / 100;
        return h * 60 + m;
    }
}
// date and time from ref 2822 format
function configFromRFC2822(config) {
    if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isString"])(config._i)) {
        return config;
    }
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (!match) {
        return Object(_valid__WEBPACK_IMPORTED_MODULE_4__["markInvalid"])(config);
    }
    var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
    if (!checkWeekday(match[1], parsedArray, config)) {
        return config;
    }
    config._a = parsedArray;
    config._tzm = calculateOffset(match[8], match[9], match[10]);
    config._d = _date_from_array__WEBPACK_IMPORTED_MODULE_3__["createUTCDate"].apply(null, config._a);
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_5__["getParsingFlags"])(config).rfc2822 = true;
    return config;
}
// date from iso format or fallback
function configFromString(config) {
    if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isString"])(config._i)) {
        return config;
    }
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return config;
    }
    // todo: update logic processing
    // isISO -> configFromISO
    // isRFC -> configFromRFC
    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    }
    else {
        return config;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    }
    else {
        return config;
    }
    // Final attempt, use Input Fallback
    // hooks.createFromInputFallback(config);
    return Object(_valid__WEBPACK_IMPORTED_MODULE_4__["createInvalid"])(config);
}
// hooks.createFromInputFallback = deprecate(
//     'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
//     'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
//     'discouraged and will be removed in an upcoming major release. Please refer to ' +
//     'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
//     function (config) {
//         config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
//     }
// );
//# sourceMappingURL=from-string.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/create/local.js":
/*!*************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/create/local.js ***!
  \*************************************************************/
/*! exports provided: parseDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
/* harmony import */ var _from_anything__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-anything */ "../node_modules/ngx-bootstrap/chronos/create/from-anything.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");


function parseDate(input, format, localeKey, strict, isUTC) {
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isDate"])(input)) {
        return input;
    }
    var config = Object(_from_anything__WEBPACK_IMPORTED_MODULE_0__["createLocalOrUTC"])(input, format, localeKey, strict, isUTC);
    return config._d;
}
//# sourceMappingURL=local.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/create/parsing-flags.js":
/*!*********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/create/parsing-flags.js ***!
  \*********************************************************************/
/*! exports provided: getParsingFlags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParsingFlags", function() { return getParsingFlags; });
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
    };
}
function getParsingFlags(config) {
    if (config._pf == null) {
        config._pf = defaultParsingFlags();
    }
    return config._pf;
}
//# sourceMappingURL=parsing-flags.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/create/valid.js":
/*!*************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/create/valid.js ***!
  \*************************************************************/
/*! exports provided: isValid, createInvalid, markInvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvalid", function() { return createInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markInvalid", function() { return markInvalid; });
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsing-flags */ "../node_modules/ngx-bootstrap/chronos/create/parsing-flags.js");

function isValid(config) {
    if (config._isValid == null) {
        var flags = Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_0__["getParsingFlags"])(config);
        var parsedParts = Array.prototype.some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(config._d && config._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));
        if (config._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }
        if (Object.isFrozen == null || !Object.isFrozen(config)) {
            config._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return config._isValid;
}
function createInvalid(config, flags) {
    config._d = new Date(NaN);
    Object.assign(Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_0__["getParsingFlags"])(config), flags || { userInvalidated: true });
    return config;
}
function markInvalid(config) {
    config._isValid = false;
    return config;
}
//# sourceMappingURL=valid.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/duration/bubble.js":
/*!****************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/duration/bubble.js ***!
  \****************************************************************/
/*! exports provided: bubble, daysToMonths, monthsToDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysToMonths", function() { return daysToMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthsToDays", function() { return monthsToDays; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "../node_modules/ngx-bootstrap/chronos/utils.js");
/* harmony import */ var _utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abs-ceil */ "../node_modules/ngx-bootstrap/chronos/utils/abs-ceil.js");


function bubble(dur) {
    var milliseconds = dur._milliseconds;
    var days = dur._days;
    var months = dur._months;
    var data = dur._data;
    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
        (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += Object(_utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__["absCeil"])(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }
    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;
    var seconds = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["absFloor"])(milliseconds / 1000);
    data.seconds = seconds % 60;
    var minutes = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["absFloor"])(seconds / 60);
    data.minutes = minutes % 60;
    var hours = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["absFloor"])(minutes / 60);
    data.hours = hours % 24;
    days += Object(_utils__WEBPACK_IMPORTED_MODULE_0__["absFloor"])(hours / 24);
    // convert days to months
    var monthsFromDays = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["absFloor"])(daysToMonths(days));
    months += monthsFromDays;
    days -= Object(_utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__["absCeil"])(monthsToDays(monthsFromDays));
    // 12 months -> 1 year
    var years = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["absFloor"])(months / 12);
    months %= 12;
    data.day = days;
    data.month = months;
    data.year = years;
    return dur;
}
function daysToMonths(day) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return day * 4800 / 146097;
}
function monthsToDays(month) {
    // the reverse of daysToMonths
    return month * 146097 / 4800;
}
//# sourceMappingURL=bubble.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/duration/constructor.js":
/*!*********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/duration/constructor.js ***!
  \*********************************************************************/
/*! exports provided: Duration, isDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Duration", function() { return Duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDuration", function() { return isDuration; });
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/locales */ "../node_modules/ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valid */ "../node_modules/ngx-bootstrap/chronos/duration/valid.js");
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubble */ "../node_modules/ngx-bootstrap/chronos/duration/bubble.js");
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../units/aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./humanize */ "../node_modules/ngx-bootstrap/chronos/duration/humanize.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");






var Duration = /** @class */ (function () {
    function Duration(duration, config) {
        if (config === void 0) { config = {}; }
        this._data = {};
        this._locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_0__["getLocale"])();
        this._locale = config && config._locale || Object(_locale_locales__WEBPACK_IMPORTED_MODULE_0__["getLocale"])();
        // const normalizedInput = normalizeObjectUnits(duration);
        var normalizedInput = duration;
        var years = normalizedInput.year || 0;
        var quarters = normalizedInput.quarter || 0;
        var months = normalizedInput.month || 0;
        var weeks = normalizedInput.week || 0;
        var days = normalizedInput.day || 0;
        var hours = normalizedInput.hours || 0;
        var minutes = normalizedInput.minutes || 0;
        var seconds = normalizedInput.seconds || 0;
        var milliseconds = normalizedInput.milliseconds || 0;
        this._isValid = Object(_valid__WEBPACK_IMPORTED_MODULE_1__["isDurationValid"])(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1000 +
            minutes * 60 * 1000 + // 1000 * 60
            // 1000 * 60
            hours * 1000 * 60 * 60; // using 1000 * 60 * 60
        // instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;
        // this._data = {};
        // this._locale = getLocale();
        // this._bubble();
        return Object(_bubble__WEBPACK_IMPORTED_MODULE_2__["bubble"])(this);
    }
    Duration.prototype.isValid = function () {
        return this._isValid;
    };
    Duration.prototype.humanize = function (withSuffix) {
        // throw new Error(`TODO: implement`);
        if (!this.isValid()) {
            return this.localeData().invalidDate;
        }
        var locale = this.localeData();
        var output = Object(_humanize__WEBPACK_IMPORTED_MODULE_4__["relativeTime"])(this, !withSuffix, locale);
        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
    };
    Duration.prototype.localeData = function () {
        return this._locale;
    };
    Duration.prototype.locale = function (localeKey) {
        if (!localeKey) {
            return this._locale._abbr;
        }
        this._locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_0__["getLocale"])(localeKey) || this._locale;
        return this;
    };
    Duration.prototype.abs = function () {
        var mathAbs = Math.abs;
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.month = mathAbs(data.month);
        data.year = mathAbs(data.year);
        return this;
    };
    Duration.prototype.as = function (_units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;
        var units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_3__["normalizeUnits"])(_units);
        if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + Object(_bubble__WEBPACK_IMPORTED_MODULE_2__["daysToMonths"])(days);
            return units === 'month' ? months : months / 12;
        }
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(Object(_bubble__WEBPACK_IMPORTED_MODULE_2__["monthsToDays"])(this._months));
        switch (units) {
            case 'week':
                return days / 7 + milliseconds / 6048e5;
            case 'day':
                return days + milliseconds / 864e5;
            case 'hours':
                return days * 24 + milliseconds / 36e5;
            case 'minutes':
                return days * 1440 + milliseconds / 6e4;
            case 'seconds':
                return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'milliseconds':
                return Math.floor(days * 864e5) + milliseconds;
            default:
                throw new Error("Unknown unit " + units);
        }
    };
    Duration.prototype.valueOf = function () {
        if (!this.isValid()) {
            return NaN;
        }
        return (this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_5__["toInt"])(this._months / 12) * 31536e6);
    };
    return Duration;
}());

function isDuration(obj) {
    return obj instanceof Duration;
}
//# sourceMappingURL=constructor.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/duration/create.js":
/*!****************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/duration/create.js ***!
  \****************************************************************/
/*! exports provided: createDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDuration", function() { return createDuration; });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "../node_modules/ngx-bootstrap/chronos/duration/constructor.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create/local */ "../node_modules/ngx-bootstrap/chronos/create/local.js");
/* harmony import */ var _utils_abs_round__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/abs-round */ "../node_modules/ngx-bootstrap/chronos/utils/abs-round.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/offset */ "../node_modules/ngx-bootstrap/chronos/units/offset.js");
/* harmony import */ var _utils_date_compare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/date-compare */ "../node_modules/ngx-bootstrap/chronos/utils/date-compare.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _moment_add_subtract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moment/add-subtract */ "../node_modules/ngx-bootstrap/chronos/moment/add-subtract.js");
/* harmony import */ var _create_clone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/clone */ "../node_modules/ngx-bootstrap/chronos/create/clone.js");










var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
// tslint:disable-next-line
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(input, key, config) {
    if (config === void 0) { config = {}; }
    var duration = convertDuration(input, key);
    // matching against regexp is expensive, do it on demand
    return new _constructor__WEBPACK_IMPORTED_MODULE_0__["Duration"](duration, config);
}
function convertDuration(input, key) {
    // checks for null or undefined
    if (input == null) {
        return {};
    }
    if (Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isDuration"])(input)) {
        return {
            milliseconds: input._milliseconds,
            day: input._days,
            month: input._months
        };
    }
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(input)) {
        // duration = {};
        return key ? (_a = {}, _a[key] = input, _a) : { milliseconds: input };
    }
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isString"])(input)) {
        var match = aspNetRegex.exec(input);
        if (match) {
            var sign = (match[1] === '-') ? -1 : 1;
            return {
                year: 0,
                day: Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["toInt"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_2__["DATE"]]) * sign,
                hours: Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["toInt"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_2__["HOUR"]]) * sign,
                minutes: Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["toInt"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_2__["MINUTE"]]) * sign,
                seconds: Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["toInt"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_2__["SECOND"]]) * sign,
                // the millisecond decimal point is included in the match
                milliseconds: Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["toInt"])(Object(_utils_abs_round__WEBPACK_IMPORTED_MODULE_4__["absRound"])(Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["toInt"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_2__["MILLISECOND"]]) * 1000)) * sign
            };
        }
        match = isoRegex.exec(input);
        if (match) {
            var sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
            return {
                year: parseIso(match[2], sign),
                month: parseIso(match[3], sign),
                week: parseIso(match[4], sign),
                day: parseIso(match[5], sign),
                hours: parseIso(match[6], sign),
                minutes: parseIso(match[7], sign),
                seconds: parseIso(match[8], sign)
            };
        }
    }
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isObject"])(input) && ('from' in input || 'to' in input)) {
        var diffRes = momentsDifference(Object(_create_local__WEBPACK_IMPORTED_MODULE_3__["parseDate"])(input.from), Object(_create_local__WEBPACK_IMPORTED_MODULE_3__["parseDate"])(input.to));
        return {
            milliseconds: diffRes.milliseconds,
            month: diffRes.months
        };
    }
    return input;
    var _a;
}
// createDuration.fn = Duration.prototype;
// createDuration.invalid = invalid;
function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}
function positiveMomentsDifference(base, other) {
    var res = { milliseconds: 0, months: 0 };
    res.months = Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getMonth"])(other) - Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getMonth"])(base) +
        (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getFullYear"])(other) - Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getFullYear"])(base)) * 12;
    var _basePlus = Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_8__["add"])(Object(_create_clone__WEBPACK_IMPORTED_MODULE_9__["cloneDate"])(base), res.months, 'month');
    if (Object(_utils_date_compare__WEBPACK_IMPORTED_MODULE_6__["isAfter"])(_basePlus, other)) {
        --res.months;
    }
    res.milliseconds = +other - +(Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_8__["add"])(Object(_create_clone__WEBPACK_IMPORTED_MODULE_9__["cloneDate"])(base), res.months, 'month'));
    return res;
}
function momentsDifference(base, other) {
    if (!(Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isDateValid"])(base) && Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isDateValid"])(other))) {
        return { milliseconds: 0, months: 0 };
    }
    var res;
    var _other = Object(_units_offset__WEBPACK_IMPORTED_MODULE_5__["cloneWithOffset"])(other, base, { _offset: base.getTimezoneOffset() });
    if (Object(_utils_date_compare__WEBPACK_IMPORTED_MODULE_6__["isBefore"])(base, _other)) {
        res = positiveMomentsDifference(base, _other);
    }
    else {
        res = positiveMomentsDifference(_other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }
    return res;
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/duration/humanize.js":
/*!******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/duration/humanize.js ***!
  \******************************************************************/
/*! exports provided: relativeTime, getSetRelativeTimeRounding, getSetRelativeTimeThreshold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relativeTime", function() { return relativeTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeRounding", function() { return getSetRelativeTimeRounding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeThreshold", function() { return getSetRelativeTimeThreshold; });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "../node_modules/ngx-bootstrap/chronos/duration/create.js");

var round = Math.round;
var thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month
    M: 11 // months to year
};
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
}
function relativeTime(posNegDuration, withoutSuffix, locale) {
    var duration = Object(_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(posNegDuration).abs();
    var seconds = round(duration.as('s'));
    var minutes = round(duration.as('m'));
    var hours = round(duration.as('h'));
    var days = round(duration.as('d'));
    var months = round(duration.as('M'));
    var years = round(duration.as('y'));
    var a = seconds <= thresholds.ss && ['s', seconds] ||
        seconds < thresholds.s && ['ss', seconds] ||
        minutes <= 1 && ['m'] ||
        minutes < thresholds.m && ['mm', minutes] ||
        hours <= 1 && ['h'] ||
        hours < thresholds.h && ['hh', hours] ||
        days <= 1 && ['d'] ||
        days < thresholds.d && ['dd', days] ||
        months <= 1 && ['M'] ||
        months < thresholds.M && ['MM', months] ||
        years <= 1 && ['y'] || ['yy', years];
    var b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
    // a[2] = withoutSuffix;
    // a[3] = +posNegDuration > 0;
    // a[4] = locale;
    return substituteTimeAgo.apply(null, b);
}
// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof (roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}
// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}
// export function humanize(withSuffix) {
//   if (!this.isValid()) {
//     return this.localeData().invalidDate();
//   }
//
//   const locale = this.localeData();
//   let output = relativeTime(this, !withSuffix, locale);
//
//   if (withSuffix) {
//     output = locale.pastFuture(+this, output);
//   }
//
//   return locale.postformat(output);
// }
//# sourceMappingURL=humanize.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/duration/valid.js":
/*!***************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/duration/valid.js ***!
  \***************************************************************/
/*! exports provided: isDurationValid, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDurationValid", function() { return isDurationValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
var ɵ0 = function (mem, order) {
    mem[order] = true;
    return mem;
};
var orderingHash = ordering.reduce(ɵ0, {});
function isDurationValid(duration) {
    var durationKeys = Object.keys(duration);
    if (durationKeys
        .some(function (key) {
        return (key in orderingHash)
            && duration[key] === null
            || isNaN(duration[key]);
    })) {
        return false;
    }
    // for (let key in duration) {
    //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
    //     return false;
    //   }
    // }
    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (duration[ordering[i]]) {
            // only allow non-integers for smallest unit
            if (unitHasDecimal) {
                return false;
            }
            if (duration[ordering[i]] !== Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["toInt"])(duration[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }
    return true;
}
// export function isValid() {
//   return this._isValid;
// }
//
// export function createInvalid(): Duration {
//   return createDuration(NaN);
// }

//# sourceMappingURL=valid.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/format.js":
/*!*******************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/format.js ***!
  \*******************************************************/
/*! exports provided: formatDate, formatMoment, expandFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoment", function() { return formatMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandFormat", function() { return expandFormat; });
/* harmony import */ var _units_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./units/index */ "../node_modules/ngx-bootstrap/chronos/units/index.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale/locales */ "../node_modules/ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
// moment.js
// version : 2.18.1
// authors : Tim Wood, Iskren Chernev, Moment.js contributors
// license : MIT
// momentjs.com




function formatDate(date, format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    var _locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_2__["getLocale"])(locale || 'en');
    if (!_locale) {
        throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
    }
    var _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
    var output = formatMoment(date, _format, _locale, isUTC, offset);
    if (!output) {
        return output;
    }
    return _locale.postformat(output);
}
// format date using native date object
function formatMoment(date, _format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_3__["isDateValid"])(date)) {
        return locale.invalidDate;
    }
    var format = expandFormat(_format, locale);
    _format_format__WEBPACK_IMPORTED_MODULE_1__["formatFunctions"][format] = _format_format__WEBPACK_IMPORTED_MODULE_1__["formatFunctions"][format] || Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["makeFormatFunction"])(format);
    return _format_format__WEBPACK_IMPORTED_MODULE_1__["formatFunctions"][format](date, locale, isUTC, offset);
}
function expandFormat(_format, locale) {
    var format = _format;
    var i = 5;
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var replaceLongDateFormatTokens = function (input) {
        return locale.formatLongDate(input) || input;
    };
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }
    return format;
}
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/format/format.js":
/*!**************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/format/format.js ***!
  \**************************************************************/
/*! exports provided: formatFunctions, formatTokenFunctions, formattingTokens, addFormatToken, makeFormatFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatFunctions", function() { return formatFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTokenFunctions", function() { return formatTokenFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formattingTokens", function() { return formattingTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFormatToken", function() { return addFormatToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeFormatFunction", function() { return makeFormatFunction; });
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/zero-fill */ "../node_modules/ngx-bootstrap/chronos/utils/zero-fill.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");


var formatFunctions = {};
var formatTokenFunctions = {};
// tslint:disable-next-line
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken(token, padded, ordinal, callback) {
    if (token) {
        formatTokenFunctions[token] = callback;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__["zeroFill"])(callback.apply(null, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function (date, opts) {
            return opts.locale.ordinal(callback.apply(null, arguments), token);
        };
    }
}
function makeFormatFunction(format) {
    var array = format.match(formattingTokens);
    var length = array.length;
    var formatArr = new Array(length);
    for (var i = 0; i < length; i++) {
        formatArr[i] = formatTokenFunctions[array[i]]
            ? formatTokenFunctions[array[i]]
            : removeFormattingTokens(array[i]);
    }
    return function (date, locale, isUTC, offset) {
        if (offset === void 0) { offset = 0; }
        var output = '';
        for (var j = 0; j < length; j++) {
            output += Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(formatArr[j])
                ? formatArr[j].call(null, date, { format: format, locale: locale, isUTC: isUTC, offset: offset })
                : formatArr[j];
        }
        return output;
    };
}
function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/locale/calendar.js":
/*!****************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/locale/calendar.js ***!
  \****************************************************************/
/*! exports provided: defaultCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCalendar", function() { return defaultCalendar; });
var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
};
//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/locale/locale.class.js":
/*!********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/locale/locale.class.js ***!
  \********************************************************************/
/*! exports provided: defaultLocaleMonths, defaultLocaleMonthsShort, defaultLocaleWeekdays, defaultLocaleWeekdaysShort, defaultLocaleWeekdaysMin, defaultLongDateFormat, defaultOrdinal, defaultDayOfMonthOrdinalParse, Locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleMonths", function() { return defaultLocaleMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleMonthsShort", function() { return defaultLocaleMonthsShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeekdays", function() { return defaultLocaleWeekdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeekdaysShort", function() { return defaultLocaleWeekdaysShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeekdaysMin", function() { return defaultLocaleWeekdaysMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLongDateFormat", function() { return defaultLongDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOrdinal", function() { return defaultOrdinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDayOfMonthOrdinalParse", function() { return defaultDayOfMonthOrdinalParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locale", function() { return Locale; });
/* harmony import */ var _units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/week-calendar-utils */ "../node_modules/ngx-bootstrap/chronos/units/week-calendar-utils.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/day-of-week */ "../node_modules/ngx-bootstrap/chronos/units/day-of-week.js");
// tslint:disable:max-file-line-count max-line-length cyclomatic-complexity





var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
var defaultMonthsShortRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"];
var defaultMonthsRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"];
var Locale = /** @class */ (function () {
    function Locale(config) {
        if (!!config) {
            this.set(config);
        }
    }
    Locale.prototype.set = function (config) {
        var confKey;
        for (confKey in config) {
            if (!config.hasOwnProperty(confKey)) {
                continue;
            }
            var prop = config[confKey];
            var key = (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(prop) ? confKey : "_" + confKey);
            this[key] = prop;
        }
        this._config = config;
    };
    Locale.prototype.calendar = function (key, date, now) {
        var output = this._calendar[key] || this._calendar.sameElse;
        return Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(output) ? output.call(null, date, now) : output;
    };
    Locale.prototype.longDateFormat = function (key) {
        var format = this._longDateFormat[key];
        var formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    };
    Object.defineProperty(Locale.prototype, "invalidDate", {
        get: function () {
            return this._invalidDate;
        },
        set: function (val) {
            this._invalidDate = val;
        },
        enumerable: true,
        configurable: true
    });
    Locale.prototype.ordinal = function (num, token) {
        return this._ordinal.replace('%d', num.toString(10));
    };
    Locale.prototype.preparse = function (str) {
        return str;
    };
    Locale.prototype.postformat = function (str) {
        return str;
    };
    Locale.prototype.relativeTime = function (num, withoutSuffix, str, isFuture) {
        var output = this._relativeTime[str];
        return (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(output)) ?
            output(num, withoutSuffix, str, isFuture) :
            output.replace(/%d/i, num.toString(10));
    };
    Locale.prototype.pastFuture = function (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(format) ? format(output) : format.replace(/%s/i, output);
    };
    Locale.prototype.months = function (date, format, isUTC) {
        if (isUTC === void 0) { isUTC = false; }
        if (!date) {
            return Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._months)
                ? this._months
                : this._months.standalone;
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._months)) {
            return this._months[Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(date, isUTC)];
        }
        var key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
            ? 'format'
            : 'standalone';
        return this._months[key][Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(date, isUTC)];
    };
    Locale.prototype.monthsShort = function (date, format, isUTC) {
        if (isUTC === void 0) { isUTC = false; }
        if (!date) {
            return Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._monthsShort)) {
            return this._monthsShort[Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(date, isUTC)];
        }
        var key = MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone';
        return this._monthsShort[key][Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(date, isUTC)];
    };
    Locale.prototype.monthsParse = function (monthName, format, strict) {
        var date;
        var regex;
        if (this._monthsParseExact) {
            return this.handleMonthStrictParse(monthName, format, strict);
        }
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        var i;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(Date.UTC(2000, i));
            if (strict && !this._longMonthsParse[i]) {
                var _months = this.months(date, '', true).replace('.', '');
                var _shortMonths = this.monthsShort(date, '', true).replace('.', '');
                this._longMonthsParse[i] = new RegExp("^" + _months + "$", 'i');
                this._shortMonthsParse[i] = new RegExp("^" + _shortMonths + "$", 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = "^" + this.months(date, '', true) + "|^" + this.monthsShort(date, '', true);
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            }
            if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            }
            if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    };
    Locale.prototype.monthsRegex = function (isStrict) {
        if (this._monthsParseExact) {
            if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["hasOwnProp"])(this, '_monthsRegex')) {
                this.computeMonthsParse();
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            }
            return this._monthsRegex;
        }
        if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["hasOwnProp"])(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    };
    Locale.prototype.monthsShortRegex = function (isStrict) {
        if (this._monthsParseExact) {
            if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["hasOwnProp"])(this, '_monthsRegex')) {
                this.computeMonthsParse();
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            }
            return this._monthsShortRegex;
        }
        if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["hasOwnProp"])(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    };
    /** Week */
    /** Week */
    Locale.prototype.week = /** Week */
    function (date, isUTC) {
        return Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_0__["weekOfYear"])(date, this._week.dow, this._week.doy, isUTC).week;
    };
    Locale.prototype.firstDayOfWeek = function () {
        return this._week.dow;
    };
    Locale.prototype.firstDayOfYear = function () {
        return this._week.doy;
    };
    Locale.prototype.weekdays = function (date, format, isUTC) {
        if (!date) {
            return Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._weekdays)
                ? this._weekdays
                : this._weekdays.standalone;
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._weekdays)) {
            return this._weekdays[Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_2__["getDay"])(date, isUTC)];
        }
        var _key = this._weekdays.isFormat.test(format)
            ? 'format'
            : 'standalone';
        return this._weekdays[_key][Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_2__["getDay"])(date, isUTC)];
    };
    Locale.prototype.weekdaysMin = function (date, format, isUTC) {
        return date ? this._weekdaysMin[Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_2__["getDay"])(date, isUTC)] : this._weekdaysMin;
    };
    Locale.prototype.weekdaysShort = function (date, format, isUTC) {
        return date ? this._weekdaysShort[Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_2__["getDay"])(date, isUTC)] : this._weekdaysShort;
    };
    // proto.weekdaysParse  =        localeWeekdaysParse;
    // proto.weekdaysParse  =        localeWeekdaysParse;
    Locale.prototype.weekdaysParse = 
    // proto.weekdaysParse  =        localeWeekdaysParse;
    function (weekdayName, format, strict) {
        var i;
        var regex;
        if (this._weekdaysParseExact) {
            return this.handleWeekStrictParse(weekdayName, format, strict);
        }
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // fix: here is the issue
            var date = Object(_units_day_of_week__WEBPACK_IMPORTED_MODULE_4__["setDayOfWeek"])(new Date(Date.UTC(2000, 1)), i, null, true);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(date, '', true).replace('.', '\.?') + "$", 'i');
                this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(date, '', true).replace('.', '\.?') + "$", 'i');
                this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(date, '', true).replace('.', '\.?') + "$", 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = "^" + this.weekdays(date, '', true) + "|^" + this.weekdaysShort(date, '', true) + "|^" + this.weekdaysMin(date, '', true);
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._fullWeekdaysParse)
                || !Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._shortWeekdaysParse)
                || !Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._minWeekdaysParse)
                || !Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._weekdaysParse)) {
                return;
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    };
    // proto.weekdaysRegex       =        weekdaysRegex;
    // proto.weekdaysRegex       =        weekdaysRegex;
    Locale.prototype.weekdaysRegex = 
    // proto.weekdaysRegex       =        weekdaysRegex;
    function (isStrict) {
        if (this._weekdaysParseExact) {
            if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["hasOwnProp"])(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            }
            else {
                return this._weekdaysRegex;
            }
        }
        else {
            if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["hasOwnProp"])(this, '_weekdaysRegex')) {
                this._weekdaysRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"];
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    };
    // proto.weekdaysShortRegex  =        weekdaysShortRegex;
    // proto.weekdaysMinRegex    =        weekdaysMinRegex;
    // proto.weekdaysShortRegex  =        weekdaysShortRegex;
    // proto.weekdaysMinRegex    =        weekdaysMinRegex;
    Locale.prototype.weekdaysShortRegex = 
    // proto.weekdaysShortRegex  =        weekdaysShortRegex;
    // proto.weekdaysMinRegex    =        weekdaysMinRegex;
    function (isStrict) {
        if (this._weekdaysParseExact) {
            if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["hasOwnProp"])(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            }
            else {
                return this._weekdaysShortRegex;
            }
        }
        else {
            if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["hasOwnProp"])(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"];
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    };
    Locale.prototype.weekdaysMinRegex = function (isStrict) {
        if (this._weekdaysParseExact) {
            if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["hasOwnProp"])(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            }
            else {
                return this._weekdaysMinRegex;
            }
        }
        else {
            if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["hasOwnProp"])(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"];
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    };
    Locale.prototype.isPM = function (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return input.toLowerCase().charAt(0) === 'p';
    };
    Locale.prototype.meridiem = function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        }
        return isLower ? 'am' : 'AM';
    };
    Locale.prototype.formatLongDate = function (key) {
        this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
        var format = this._longDateFormat[key];
        var formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    };
    Locale.prototype.handleMonthStrictParse = function (monthName, format, strict) {
        var llc = monthName.toLocaleLowerCase();
        var i;
        var ii;
        var mom;
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = new Date(2000, i);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'MMM') {
                ii = this._shortMonthsParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            ii = this._longMonthsParse.indexOf(llc);
            return ii !== -1 ? ii : null;
        }
        if (format === 'MMM') {
            ii = this._shortMonthsParse.indexOf(llc);
            if (ii !== -1) {
                return ii;
            }
            ii = this._longMonthsParse.indexOf(llc);
            return ii !== -1 ? ii : null;
        }
        ii = this._longMonthsParse.indexOf(llc);
        if (ii !== -1) {
            return ii;
        }
        ii = this._shortMonthsParse.indexOf(llc);
        return ii !== -1 ? ii : null;
    };
    Locale.prototype.handleWeekStrictParse = function (weekdayName, format, strict) {
        var ii;
        var llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            var i = void 0;
            for (i = 0; i < 7; ++i) {
                var date = Object(_units_day_of_week__WEBPACK_IMPORTED_MODULE_4__["setDayOfWeek"])(new Date(Date.UTC(2000, 1)), i, null, true);
                this._minWeekdaysParse[i] = this.weekdaysMin(date).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(date).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(date, '').toLocaleLowerCase();
            }
        }
        if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._weekdaysParse)
            || !Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._shortWeekdaysParse)
            || !Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_1__["isArray"])(this._minWeekdaysParse)) {
            return;
        }
        if (strict) {
            if (format === 'dddd') {
                ii = this._weekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else if (format === 'ddd') {
                ii = this._shortWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
        }
        else {
            if (format === 'dddd') {
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._shortWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else if (format === 'ddd') {
                ii = this._shortWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = this._minWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._shortWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
        }
    };
    Locale.prototype.computeMonthsParse = function () {
        var shortPieces = [];
        var longPieces = [];
        var mixedPieces = [];
        var date;
        var i;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(2000, i);
            shortPieces.push(this.monthsShort(date, ''));
            longPieces.push(this.months(date, ''));
            mixedPieces.push(this.months(date, ''));
            mixedPieces.push(this.monthsShort(date, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(shortPieces[i]);
            longPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(mixedPieces[i]);
        }
        this._monthsRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
        this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
    };
    Locale.prototype.computeWeekdaysParse = function () {
        var minPieces = [];
        var shortPieces = [];
        var longPieces = [];
        var mixedPieces = [];
        var i;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // let mom = createUTC([2000, 1]).day(i);
            var date = Object(_units_day_of_week__WEBPACK_IMPORTED_MODULE_4__["setDayOfWeek"])(new Date(Date.UTC(2000, 1)), i, null, true);
            var minp = this.weekdaysMin(date);
            var shortp = this.weekdaysShort(date);
            var longp = this.weekdays(date);
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(shortPieces[i]);
            longPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(longPieces[i]);
            mixedPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(mixedPieces[i]);
        }
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
        this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
        this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join('|') + ")", 'i');
    };
    return Locale;
}());

function cmpLenRev(a, b) {
    return b.length - a.length;
}
//# sourceMappingURL=locale.class.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/locale/locale.defaults.js":
/*!***********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/locale/locale.defaults.js ***!
  \***********************************************************************/
/*! exports provided: defaultInvalidDate, defaultLocaleWeek, defaultLocaleMeridiemParse, defaultRelativeTime, baseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultInvalidDate", function() { return defaultInvalidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeek", function() { return defaultLocaleWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleMeridiemParse", function() { return defaultLocaleMeridiemParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRelativeTime", function() { return defaultRelativeTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseConfig", function() { return baseConfig; });
/* harmony import */ var _locale_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.class */ "../node_modules/ngx-bootstrap/chronos/locale/locale.class.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar */ "../node_modules/ngx-bootstrap/chronos/locale/calendar.js");


var defaultInvalidDate = 'Invalid date';
var defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 1st is the first week of the year.
};
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
};
var baseConfig = {
    calendar: _calendar__WEBPACK_IMPORTED_MODULE_1__["defaultCalendar"],
    longDateFormat: _locale_class__WEBPACK_IMPORTED_MODULE_0__["defaultLongDateFormat"],
    invalidDate: defaultInvalidDate,
    ordinal: _locale_class__WEBPACK_IMPORTED_MODULE_0__["defaultOrdinal"],
    dayOfMonthOrdinalParse: _locale_class__WEBPACK_IMPORTED_MODULE_0__["defaultDayOfMonthOrdinalParse"],
    relativeTime: defaultRelativeTime,
    months: _locale_class__WEBPACK_IMPORTED_MODULE_0__["defaultLocaleMonths"],
    monthsShort: _locale_class__WEBPACK_IMPORTED_MODULE_0__["defaultLocaleMonthsShort"],
    week: defaultLocaleWeek,
    weekdays: _locale_class__WEBPACK_IMPORTED_MODULE_0__["defaultLocaleWeekdays"],
    weekdaysMin: _locale_class__WEBPACK_IMPORTED_MODULE_0__["defaultLocaleWeekdaysMin"],
    weekdaysShort: _locale_class__WEBPACK_IMPORTED_MODULE_0__["defaultLocaleWeekdaysShort"],
    meridiemParse: defaultLocaleMeridiemParse
};
//# sourceMappingURL=locale.defaults.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/locale/locales.js":
/*!***************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/locale/locales.js ***!
  \***************************************************************/
/*! exports provided: mergeConfigs, getSetGlobalLocale, defineLocale, updateLocale, getLocale, listLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeConfigs", function() { return mergeConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return getSetGlobalLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return defineLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return updateLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return getLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return listLocales; });
/* harmony import */ var _locale_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.class */ "../node_modules/ngx-bootstrap/chronos/locale/locale.class.js");
/* harmony import */ var _locale_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.defaults */ "../node_modules/ngx-bootstrap/chronos/locale/locale.defaults.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _utils_compare_arrays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/compare-arrays */ "../node_modules/ngx-bootstrap/chronos/utils/compare-arrays.js");




var locales = {};
var localeFamilies = {};
var globalLocale;
function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least,
// but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var next;
    var locale;
    var i = 0;
    while (i < names.length) {
        var split = normalizeLocale(names[i]).split('-');
        var j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && Object(_utils_compare_arrays__WEBPACK_IMPORTED_MODULE_3__["compareArrays"])(split, next, true) >= j - 1) {
                // the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}
function mergeConfigs(parentConfig, childConfig) {
    var res = Object.assign({}, parentConfig);
    for (var childProp in childConfig) {
        if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["hasOwnProp"])(childConfig, childProp)) {
            continue;
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isObject"])(parentConfig[childProp]) && Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isObject"])(childConfig[childProp])) {
            res[childProp] = {};
            Object.assign(res[childProp], parentConfig[childProp]);
            Object.assign(res[childProp], childConfig[childProp]);
        }
        else if (childConfig[childProp] != null) {
            res[childProp] = childConfig[childProp];
        }
        else {
            delete res[childProp];
        }
    }
    var parentProp;
    for (parentProp in parentConfig) {
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["hasOwnProp"])(parentConfig, parentProp) &&
            !Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["hasOwnProp"])(childConfig, parentProp) &&
            Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isObject"])(parentConfig[parentProp])) {
            // make sure changes to properties don't modify parent config
            res[parentProp] = Object.assign({}, res[parentProp]);
        }
    }
    return res;
}
function loadLocale(name) {
    // no way!
    /* var oldLocale = null;
       // TODO: Find a better way to register and load all the locales in Node
       if (!locales[name] && (typeof module !== 'undefined') &&
         module && module.exports) {
         try {
           oldLocale = globalLocale._abbr;
           var aliasedRequire = require;
           aliasedRequire('./locale/' + name);
           getSetGlobalLocale(oldLocale);
         } catch (e) {}
       }*/
    if (!locales[name]) {
        // tslint:disable-next-line
        console.error("Khronos locale error: please load locale \"" + name + "\" before using it");
        // throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
    }
    return locales[name];
}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(values)) {
            data = getLocale(key);
        }
        else if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isString"])(key)) {
            data = defineLocale(key, values);
        }
        if (data) {
            globalLocale = data;
        }
    }
    return globalLocale && globalLocale._abbr;
}
function defineLocale(name, config) {
    if (config === null) {
        // useful for testing
        delete locales[name];
        globalLocale = getLocale('en');
        return null;
    }
    if (!config) {
        return;
    }
    var parentConfig = _locale_defaults__WEBPACK_IMPORTED_MODULE_1__["baseConfig"];
    config.abbr = name;
    if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
        }
        else {
            if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({ name: name, config: config });
            return null;
        }
    }
    locales[name] = new _locale_class__WEBPACK_IMPORTED_MODULE_0__["Locale"](mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
            defineLocale(x.name, x.config);
        });
    }
    // backwards compat for now: also set the locale
    // make sure we set the locale AFTER all child locales have been
    // created, so we won't end up with the child locale set.
    getSetGlobalLocale(name);
    return locales[name];
}
function updateLocale(name, config) {
    var _config = config;
    if (_config != null) {
        var parentConfig = _locale_defaults__WEBPACK_IMPORTED_MODULE_1__["baseConfig"];
        // MERGE
        var tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        _config = mergeConfigs(parentConfig, _config);
        var locale = new _locale_class__WEBPACK_IMPORTED_MODULE_0__["Locale"](_config);
        locale.parentLocale = locales[name];
        locales[name] = locale;
        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    }
    else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            }
            else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}
// returns locale data
function getLocale(key) {
    if (!key) {
        return globalLocale;
    }
    // let locale;
    var _key = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isArray"])(key) ? key : [key];
    return chooseLocale(_key);
}
function listLocales() {
    return Object.keys(locales);
}
// define default locale
getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (num) {
        var b = num % 10;
        var output = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["toInt"])((num % 100) / 10) === 1
            ? 'th'
            : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        return num + output;
    }
});
//# sourceMappingURL=locales.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/moment/add-subtract.js":
/*!********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/moment/add-subtract.js ***!
  \********************************************************************/
/*! exports provided: add, subtract, addSubtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSubtract", function() { return addSubtract; });
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration/create */ "../node_modules/ngx-bootstrap/chronos/duration/create.js");
/* harmony import */ var _utils_abs_round__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abs-round */ "../node_modules/ngx-bootstrap/chronos/utils/abs-round.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _utils_date_setters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/date-setters */ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var _create_clone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create/clone */ "../node_modules/ngx-bootstrap/chronos/create/clone.js");





function add(date, val, period, isUTC) {
    var dur = Object(_duration_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(val, period);
    return addSubtract(date, dur, 1, isUTC);
}
function subtract(date, val, period, isUTC) {
    var dur = Object(_duration_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(val, period);
    return addSubtract(date, dur, -1, isUTC);
}
function addSubtract(date, duration, isAdding, isUTC) {
    var milliseconds = duration._milliseconds;
    var days = Object(_utils_abs_round__WEBPACK_IMPORTED_MODULE_1__["absRound"])(duration._days);
    var months = Object(_utils_abs_round__WEBPACK_IMPORTED_MODULE_1__["absRound"])(duration._months);
    // todo: add timezones support
    // const _updateOffset = updateOffset == null ? true : updateOffset;
    if (months) {
        Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_3__["setMonth"])(date, Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(date, isUTC) + months * isAdding, isUTC);
    }
    if (days) {
        Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_3__["setDate"])(date, Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_2__["getDate"])(date, isUTC) + days * isAdding, isUTC);
    }
    if (milliseconds) {
        Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_3__["setTime"])(date, Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_2__["getTime"])(date) + milliseconds * isAdding);
    }
    return Object(_create_clone__WEBPACK_IMPORTED_MODULE_4__["cloneDate"])(date);
    // todo: add timezones support
    // if (_updateOffset) {
    //   hooks.updateOffset(date, days || months);
    // }
}
//# sourceMappingURL=add-subtract.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/parse/regex.js":
/*!************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/parse/regex.js ***!
  \************************************************************/
/*! exports provided: match1, match2, match3, match4, match6, match1to2, match3to4, match5to6, match1to3, match1to4, match1to6, matchUnsigned, matchSigned, matchOffset, matchShortOffset, matchTimestamp, matchWord, addRegexToken, getParseRegexForToken, regexEscape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1", function() { return match1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match2", function() { return match2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match3", function() { return match3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match4", function() { return match4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match6", function() { return match6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to2", function() { return match1to2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match3to4", function() { return match3to4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match5to6", function() { return match5to6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to3", function() { return match1to3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to4", function() { return match1to4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to6", function() { return match1to6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchUnsigned", function() { return matchUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchSigned", function() { return matchSigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchOffset", function() { return matchOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchShortOffset", function() { return matchShortOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchTimestamp", function() { return matchTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchWord", function() { return matchWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRegexToken", function() { return addRegexToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParseRegexForToken", function() { return getParseRegexForToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexEscape", function() { return regexEscape; });
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");

var match1 = /\d/; //       0 - 9
var match2 = /\d\d/; //      00 - 99
var match3 = /\d{3}/; //     000 - 999
var match4 = /\d{4}/; //    0000 - 9999
var match6 = /[+-]?\d{6}/; // -999999 - 999999
var match1to2 = /\d\d?/; //       0 - 99
var match3to4 = /\d\d\d\d?/; //     999 - 9999
var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3 = /\d{1,3}/; //       0 - 999
var match1to4 = /\d{1,4}/; //       0 - 9999
var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999
var matchUnsigned = /\d+/; //       0 - inf
var matchSigned = /[+-]?\d+/; //    -inf - inf
var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
// tslint:disable-next-line
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
var regexes = {};
function addRegexToken(token, regex, strictRegex) {
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(regex)) {
        regexes[token] = regex;
        return;
    }
    regexes[token] = function (isStrict, locale) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}
function getParseRegexForToken(token, locale) {
    var _strict = false;
    if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["hasOwnProp"])(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }
    return regexes[token](_strict, locale);
}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(str) {
    // tslint:disable-next-line
    return regexEscape(str
        .replace('\\', '')
        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) { return p1 || p2 || p3 || p4; }));
}
function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
//# sourceMappingURL=regex.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/parse/token.js":
/*!************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/parse/token.js ***!
  \************************************************************/
/*! exports provided: addParseToken, addWeekParseToken, addTimeToArrayFromToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addParseToken", function() { return addParseToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWeekParseToken", function() { return addWeekParseToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTimeToArrayFromToken", function() { return addTimeToArrayFromToken; });
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");

var tokens = {};
function addParseToken(token, callback) {
    var _token = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isString"])(token) ? [token] : token;
    var func = callback;
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(callback)) {
        func = function (input, array, config) {
            array[callback] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["toInt"])(input);
            return config;
        };
    }
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_token) && Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(func)) {
        var i = void 0;
        for (i = 0; i < _token.length; i++) {
            tokens[_token[i]] = func;
        }
    }
}
function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, _token) {
        config._w = config._w || {};
        return callback(input, config._w, config, _token);
    });
}
function addTimeToArrayFromToken(token, input, config) {
    if (input != null && Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["hasOwnProp"])(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
    return config;
}
//# sourceMappingURL=token.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/aliases.js":
/*!**************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/aliases.js ***!
  \**************************************************************/
/*! exports provided: addUnitAlias, normalizeUnits, normalizeObjectUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUnitAlias", function() { return addUnitAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUnits", function() { return normalizeUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeObjectUnits", function() { return normalizeObjectUnits; });
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");

var aliases = {};
var _mapUnits = {
    date: 'day',
    hour: 'hours',
    minute: 'minutes',
    second: 'seconds',
    millisecond: 'milliseconds'
};
function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    var _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = _unit;
}
function normalizeUnits(units) {
    return Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isString"])(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}
function normalizeObjectUnits(inputObject) {
    var normalizedInput = {};
    var normalizedProp;
    var prop;
    for (prop in inputObject) {
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["hasOwnProp"])(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }
    return normalizedInput;
}
//# sourceMappingURL=aliases.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/constants.js":
/*!****************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/constants.js ***!
  \****************************************************************/
/*! exports provided: YEAR, MONTH, DATE, HOUR, MINUTE, SECOND, MILLISECOND, WEEK, WEEKDAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR", function() { return YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH", function() { return MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE", function() { return DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUR", function() { return HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTE", function() { return MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECOND", function() { return SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECOND", function() { return MILLISECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK", function() { return WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKDAY", function() { return WEEKDAY; });
// place in new Date([array])
var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/day-of-month.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/day-of-month.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");








// FORMATTING
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('D', ['DD', 2, false], 'Do', function (date, opts) {
    return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getDate"])(date, opts.isUTC).toString(10);
});
// ALIASES
Object(_aliases__WEBPACK_IMPORTED_MODULE_6__["addUnitAlias"])('date', 'D');
// PRIOROITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_7__["addUnitPriority"])('date', 9);
// PARSING
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('D', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('DD', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('Do', function (isStrict, locale) {
    return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addParseToken"])(['D', 'DD'], _constants__WEBPACK_IMPORTED_MODULE_4__["DATE"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addParseToken"])('Do', function (input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_4__["DATE"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_5__["toInt"])(input.match(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"])[0]);
    return config;
});
//# sourceMappingURL=day-of-month.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/day-of-week.js":
/*!******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/day-of-week.js ***!
  \******************************************************************/
/*! exports provided: parseWeekday, parseIsoWeekday, getSetDayOfWeek, setDayOfWeek, getDayOfWeek, getLocaleDayOfWeek, setLocaleDayOfWeek, getISODayOfWeek, setISODayOfWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseWeekday", function() { return parseWeekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseIsoWeekday", function() { return parseIsoWeekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetDayOfWeek", function() { return getSetDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDayOfWeek", function() { return setDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayOfWeek", function() { return getDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocaleDayOfWeek", function() { return getLocaleDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocaleDayOfWeek", function() { return setLocaleDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISODayOfWeek", function() { return getISODayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setISODayOfWeek", function() { return setISODayOfWeek; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create/parsing-flags */ "../node_modules/ngx-bootstrap/chronos/create/parsing-flags.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _moment_add_subtract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moment/add-subtract */ "../node_modules/ngx-bootstrap/chronos/moment/add-subtract.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../locale/locales */ "../node_modules/ngx-bootstrap/chronos/locale/locales.js");










// FORMATTING
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('d', null, 'do', function (date, opts) {
    return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getDay"])(date, opts.isUTC).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('dd', null, null, function (date, opts) {
    return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('ddd', null, null, function (date, opts) {
    return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('dddd', null, null, function (date, opts) {
    return opts.locale.weekdays(date, opts.format, opts.isUTC);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('e', null, null, function (date, opts) {
    return getLocaleDayOfWeek(date, opts.locale, opts.isUTC).toString(10);
    // return getDay(date, opts.isUTC).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('E', null, null, function (date, opts) {
    return getISODayOfWeek(date, opts.isUTC).toString(10);
});
// ALIASES
Object(_aliases__WEBPACK_IMPORTED_MODULE_3__["addUnitAlias"])('day', 'd');
Object(_aliases__WEBPACK_IMPORTED_MODULE_3__["addUnitAlias"])('weekday', 'e');
Object(_aliases__WEBPACK_IMPORTED_MODULE_3__["addUnitAlias"])('isoWeekday', 'E');
// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_4__["addUnitPriority"])('day', 11);
Object(_priorities__WEBPACK_IMPORTED_MODULE_4__["addUnitPriority"])('weekday', 11);
Object(_priorities__WEBPACK_IMPORTED_MODULE_4__["addUnitPriority"])('isoWeekday', 11);
// PARSING
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('d', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('e', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('E', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addWeekParseToken"])(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    }
    else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__["getParsingFlags"])(config).invalidWeekday = !!input;
    }
    return config;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addWeekParseToken"])(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_7__["toInt"])(input);
    return config;
});
// HELPERS
function parseWeekday(input, locale) {
    if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_7__["isString"])(input)) {
        return input;
    }
    var _num = parseInt(input, 10);
    if (!isNaN(_num)) {
        return _num;
    }
    var _weekDay = locale.weekdaysParse(input);
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(_weekDay)) {
        return _weekDay;
    }
    return null;
}
function parseIsoWeekday(input, locale) {
    if (locale === void 0) { locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_9__["getLocale"])(); }
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_7__["isString"])(input)) {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(input) && isNaN(input) ? null : input;
}
// MOMENTS
function getSetDayOfWeek(date, input, opts) {
    if (!input) {
        return getDayOfWeek(date, opts.isUTC);
    }
    return setDayOfWeek(date, input, opts.locale, opts.isUTC);
}
function setDayOfWeek(date, input, locale, isUTC) {
    if (locale === void 0) { locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_9__["getLocale"])(); }
    var day = Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getDay"])(date, isUTC);
    var _input = parseWeekday(input, locale);
    return Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_8__["add"])(date, _input - day, 'day');
}
function getDayOfWeek(date, isUTC) {
    return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getDay"])(date, isUTC);
}
/********************************************/
// todo: utc
// getSetLocaleDayOfWeek
function getLocaleDayOfWeek(date, locale, isUTC) {
    if (locale === void 0) { locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_9__["getLocale"])(); }
    return (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getDay"])(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
}
function setLocaleDayOfWeek(date, input, opts) {
    if (opts === void 0) { opts = {}; }
    var weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
    return Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_8__["add"])(date, input - weekday, 'day');
}
// getSetISODayOfWeek
function getISODayOfWeek(date, isUTC) {
    return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getDay"])(date, isUTC) || 7;
}
function setISODayOfWeek(date, input, opts) {
    if (opts === void 0) { opts = {}; }
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    var weekday = parseIsoWeekday(input, opts.locale);
    return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
}
//# sourceMappingURL=day-of-week.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/day-of-year.js":
/*!******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/day-of-year.js ***!
  \******************************************************************/
/*! exports provided: getDayOfYear, setDayOfYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayOfYear", function() { return getDayOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDayOfYear", function() { return setDayOfYear; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _utils_start_end_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/start-end-of */ "../node_modules/ngx-bootstrap/chronos/utils/start-end-of.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _moment_add_subtract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../moment/add-subtract */ "../node_modules/ngx-bootstrap/chronos/moment/add-subtract.js");








// FORMATTING
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('DDD', ['DDDD', 3, false], 'DDDo', function (date) {
    return getDayOfYear(date).toString(10);
});
// ALIASES
Object(_aliases__WEBPACK_IMPORTED_MODULE_5__["addUnitAlias"])('dayOfYear', 'DDD');
// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_4__["addUnitPriority"])('dayOfYear', 4);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('DDD', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to3"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('DDDD', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match3"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addParseToken"])(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input);
    return config;
});
function getDayOfYear(date, isUTC) {
    var date1 = +Object(_utils_start_end_of__WEBPACK_IMPORTED_MODULE_1__["startOf"])(date, 'day', isUTC);
    var date2 = +Object(_utils_start_end_of__WEBPACK_IMPORTED_MODULE_1__["startOf"])(date, 'year', isUTC);
    var someDate = date1 - date2;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.round(someDate / oneDay) + 1;
}
function setDayOfYear(date, input) {
    var dayOfYear = getDayOfYear(date);
    return Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_7__["add"])(date, (input - dayOfYear), 'day');
}
//# sourceMappingURL=day-of-year.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/hour.js":
/*!***********************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/hour.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/zero-fill */ "../node_modules/ngx-bootstrap/chronos/utils/zero-fill.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/parsing-flags */ "../node_modules/ngx-bootstrap/chronos/create/parsing-flags.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");










// FORMATTING
function hFormat(date, isUTC) {
    return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getHours"])(date, isUTC) % 12 || 12;
}
function kFormat(date, isUTC) {
    return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getHours"])(date, isUTC) || 24;
}
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('H', ['HH', 2, false], null, function (date, opts) {
    return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getHours"])(date, opts.isUTC).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('h', ['hh', 2, false], null, function (date, opts) {
    return hFormat(date, opts.isUTC).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('k', ['kk', 2, false], null, function (date, opts) {
    return kFormat(date, opts.isUTC).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('hmm', null, null, function (date, opts) {
    var _h = hFormat(date, opts.isUTC);
    var _mm = Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_2__["zeroFill"])(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getMinutes"])(date, opts.isUTC), 2);
    return "" + _h + _mm;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('hmmss', null, null, function (date, opts) {
    var _h = hFormat(date, opts.isUTC);
    var _mm = Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_2__["zeroFill"])(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getMinutes"])(date, opts.isUTC), 2);
    var _ss = Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_2__["zeroFill"])(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getSeconds"])(date, opts.isUTC), 2);
    return "" + _h + _mm + _ss;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('Hmm', null, null, function (date, opts) {
    var _H = Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getHours"])(date, opts.isUTC);
    var _mm = Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_2__["zeroFill"])(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getMinutes"])(date, opts.isUTC), 2);
    return "" + _H + _mm;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('Hmmss', null, null, function (date, opts) {
    var _H = Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getHours"])(date, opts.isUTC);
    var _mm = Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_2__["zeroFill"])(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getMinutes"])(date, opts.isUTC), 2);
    var _ss = Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_2__["zeroFill"])(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getSeconds"])(date, opts.isUTC), 2);
    return "" + _H + _mm + _ss;
});
function meridiem(token, lowercase) {
    Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(token, null, null, function (date, opts) {
        return opts.locale.meridiem(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getHours"])(date, opts.isUTC), Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getMinutes"])(date, opts.isUTC), lowercase);
    });
}
meridiem('a', true);
meridiem('A', false);
// ALIASES
Object(_aliases__WEBPACK_IMPORTED_MODULE_9__["addUnitAlias"])('hour', 'h');
// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_8__["addUnitPriority"])('hour', 13);
// PARSING
function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
}
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('a', matchMeridiem);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('A', matchMeridiem);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('H', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('h', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('k', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('HH', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('hh', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('kk', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('hmm', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match3to4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('hmmss', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match5to6"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('Hmm', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match3to4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('Hmmss', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match5to6"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])(['H', 'HH'], _constants__WEBPACK_IMPORTED_MODULE_5__["HOUR"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])(['k', 'kk'], function (input, array, config) {
    var kInput = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input);
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["HOUR"]] = kInput === 24 ? 0 : kInput;
    return config;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
    return config;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])(['h', 'hh'], function (input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["HOUR"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input);
    Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["getParsingFlags"])(config).bigHour = true;
    return config;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["HOUR"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input.substr(0, pos));
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["MINUTE"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input.substr(pos));
    Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["getParsingFlags"])(config).bigHour = true;
    return config;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["HOUR"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input.substr(0, pos1));
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["MINUTE"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input.substr(pos1, 2));
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["SECOND"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input.substr(pos2));
    Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["getParsingFlags"])(config).bigHour = true;
    return config;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["HOUR"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input.substr(0, pos));
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["MINUTE"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input.substr(pos));
    return config;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["HOUR"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input.substr(0, pos1));
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["MINUTE"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input.substr(pos1, 2));
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["SECOND"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input.substr(pos2));
    return config;
});
//# sourceMappingURL=hour.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/index.js":
/*!************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _day_of_month__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day-of-month */ "../node_modules/ngx-bootstrap/chronos/units/day-of-month.js");
/* harmony import */ var _day_of_week__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day-of-week */ "../node_modules/ngx-bootstrap/chronos/units/day-of-week.js");
/* harmony import */ var _day_of_year__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./day-of-year */ "../node_modules/ngx-bootstrap/chronos/units/day-of-year.js");
/* harmony import */ var _hour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hour */ "../node_modules/ngx-bootstrap/chronos/units/hour.js");
/* harmony import */ var _millisecond__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./millisecond */ "../node_modules/ngx-bootstrap/chronos/units/millisecond.js");
/* harmony import */ var _minute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./minute */ "../node_modules/ngx-bootstrap/chronos/units/minute.js");
/* harmony import */ var _month__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./month */ "../node_modules/ngx-bootstrap/chronos/units/month.js");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./offset */ "../node_modules/ngx-bootstrap/chronos/units/offset.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var _quarter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quarter */ "../node_modules/ngx-bootstrap/chronos/units/quarter.js");
/* harmony import */ var _second__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./second */ "../node_modules/ngx-bootstrap/chronos/units/second.js");
/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timestamp */ "../node_modules/ngx-bootstrap/chronos/units/timestamp.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./week */ "../node_modules/ngx-bootstrap/chronos/units/week.js");
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./week-calendar-utils */ "../node_modules/ngx-bootstrap/chronos/units/week-calendar-utils.js");
/* harmony import */ var _week_year__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./week-year */ "../node_modules/ngx-bootstrap/chronos/units/week-year.js");
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./year */ "../node_modules/ngx-bootstrap/chronos/units/year.js");


















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/millisecond.js":
/*!******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/millisecond.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
// tslint:disable:no-bitwise
// FORMATTING








Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('S', null, null, function (date, opts) {
    return (~~(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getMilliseconds"])(date, opts.isUTC) / 100)).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['SS', 2, false], null, function (date, opts) {
    return (~~(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getMilliseconds"])(date, opts.isUTC) / 10)).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['SSS', 3, false], null, function (date, opts) {
    return (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getMilliseconds"])(date, opts.isUTC)).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['SSSS', 4, false], null, function (date, opts) {
    return (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getMilliseconds"])(date, opts.isUTC) * 10).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['SSSSS', 5, false], null, function (date, opts) {
    return (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getMilliseconds"])(date, opts.isUTC) * 100).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['SSSSSS', 6, false], null, function (date, opts) {
    return (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getMilliseconds"])(date, opts.isUTC) * 1000).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['SSSSSSS', 7, false], null, function (date, opts) {
    return (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getMilliseconds"])(date, opts.isUTC) * 10000).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['SSSSSSSS', 8, false], null, function (date, opts) {
    return (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getMilliseconds"])(date, opts.isUTC) * 100000).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['SSSSSSSSS', 9, false], null, function (date, opts) {
    return (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_7__["getMilliseconds"])(date, opts.isUTC) * 1000000).toString(10);
});
// ALIASES
Object(_aliases__WEBPACK_IMPORTED_MODULE_5__["addUnitAlias"])('millisecond', 'ms');
// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_6__["addUnitPriority"])('millisecond', 16);
// PARSING
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('S', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["match1to3"], _parse_regex__WEBPACK_IMPORTED_MODULE_1__["match1"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('SS', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["match1to3"], _parse_regex__WEBPACK_IMPORTED_MODULE_1__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('SSS', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["match1to3"], _parse_regex__WEBPACK_IMPORTED_MODULE_1__["match3"]);
var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])(token, _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
}
function parseMs(input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_2__["MILLISECOND"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_3__["toInt"])(parseFloat("0." + input) * 1000);
    return config;
}
for (token = 'S'; token.length <= 9; token += 'S') {
    Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])(token, parseMs);
}
// MOMENTS
//# sourceMappingURL=millisecond.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/minute.js":
/*!*************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/minute.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");







// FORMATTING
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('m', ['mm', 2, false], null, function (date, opts) {
    return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getMinutes"])(date, opts.isUTC).toString(10);
});
// ALIASES
Object(_aliases__WEBPACK_IMPORTED_MODULE_6__["addUnitAlias"])('minute', 'm');
// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_5__["addUnitPriority"])('minute', 14);
// PARSING
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('m', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('mm', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match2"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addParseToken"])(['m', 'mm'], _constants__WEBPACK_IMPORTED_MODULE_4__["MINUTE"]);
//# sourceMappingURL=minute.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/month.js":
/*!************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/month.js ***!
  \************************************************************/
/*! exports provided: daysInMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInMonth", function() { return daysInMonth; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./year */ "../node_modules/ngx-bootstrap/chronos/units/year.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../node_modules/ngx-bootstrap/chronos/utils.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../create/parsing-flags */ "../node_modules/ngx-bootstrap/chronos/create/parsing-flags.js");











// todo: this is duplicate, source in date-getters.ts
function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["mod"])(month, 12);
    var _year = year + (month - modMonth) / 12;
    return modMonth === 1
        ? Object(_year__WEBPACK_IMPORTED_MODULE_1__["isLeapYear"])(_year) ? 29 : 28
        : (31 - modMonth % 7 % 2);
}
// FORMATTING
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('M', ['MM', 2, false], 'Mo', function (date, opts) {
    return (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_3__["getMonth"])(date, opts.isUTC) + 1).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('MMM', null, null, function (date, opts) {
    return opts.locale.monthsShort(date, opts.format, opts.isUTC);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('MMMM', null, null, function (date, opts) {
    return opts.locale.months(date, opts.format, opts.isUTC);
});
// ALIASES
Object(_aliases__WEBPACK_IMPORTED_MODULE_9__["addUnitAlias"])('month', 'M');
// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_8__["addUnitPriority"])('month', 8);
// PARSING
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('M', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('MM', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['M', 'MM'], function (input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MONTH"]] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_7__["toInt"])(input) - 1;
    return config;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[_constants__WEBPACK_IMPORTED_MODULE_6__["MONTH"]] = month;
    }
    else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_10__["getParsingFlags"])(config).invalidMonth = !!input;
    }
    return config;
});
//# sourceMappingURL=month.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/offset.js":
/*!*************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/offset.js ***!
  \*************************************************************/
/*! exports provided: cloneWithOffset, getDateOffset, getUTCOffset, setUTCOffset, setOffsetToUTC, isDaylightSavingTime, setOffsetToParsedOffset, hasAlignedHourOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneWithOffset", function() { return cloneWithOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateOffset", function() { return getDateOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUTCOffset", function() { return getUTCOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUTCOffset", function() { return setUTCOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffsetToUTC", function() { return setOffsetToUTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDaylightSavingTime", function() { return isDaylightSavingTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffsetToParsedOffset", function() { return setOffsetToParsedOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAlignedHourOffset", function() { return hasAlignedHourOffset; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/zero-fill */ "../node_modules/ngx-bootstrap/chronos/utils/zero-fill.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _moment_add_subtract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../moment/add-subtract */ "../node_modules/ngx-bootstrap/chronos/moment/add-subtract.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _create_clone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create/clone */ "../node_modules/ngx-bootstrap/chronos/create/clone.js");
/* harmony import */ var _utils_date_setters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/date-setters */ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js");
// tslint:disable:no-bitwise max-line-length
// FORMATTING








function addOffsetFormatToken(token, separator) {
    Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(token, null, null, function (date, config) {
        var offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_1__["zeroFill"])(~~(offset / 60), 2) + separator + Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_1__["zeroFill"])(~~(offset) % 60, 2);
    });
}
addOffsetFormatToken('Z', ':');
addOffsetFormatToken('ZZ', '');
// PARSING
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('Z', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchShortOffset"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('ZZ', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchShortOffset"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchShortOffset"], input);
    return config;
});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;
function offsetFromString(matcher, str) {
    var matches = (str || '').match(matcher);
    if (matches === null) {
        return null;
    }
    var chunk = matches[matches.length - 1];
    var parts = chunk.match(chunkOffset) || ['-', '0', '0'];
    var minutes = parseInt(parts[1], 10) * 60 + Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["toInt"])(parts[2]);
    var _min = parts[0] === '+' ? minutes : -minutes;
    return minutes === 0 ? 0 : _min;
}
// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, date, config) {
    if (config === void 0) { config = {}; }
    if (!config._isUTC) {
        return input;
    }
    var res = Object(_create_clone__WEBPACK_IMPORTED_MODULE_6__["cloneDate"])(date);
    // todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000
    var offsetDiff = (config._offset || 0) * 60000;
    var diff = input.valueOf() - res.valueOf() + offsetDiff;
    // Use low-level api, because this fn is low-level api.
    res.setTime(res.valueOf() + diff);
    // todo: add timezone handling
    // hooks.updateOffset(res, false);
    return res;
}
function getDateOffset(date) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(date.getTimezoneOffset() / 15) * 15;
}
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
// todo: it's from moment timezones
// hooks.updateOffset = function () {
// };
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getUTCOffset(date, config) {
    if (config === void 0) { config = {}; }
    var _offset = config._offset || 0;
    return config._isUTC ? _offset : getDateOffset(date);
}
function setUTCOffset(date, input, keepLocalTime, keepMinutes, config) {
    if (config === void 0) { config = {}; }
    var offset = config._offset || 0;
    var localAdjust;
    var _input = input;
    var _date = date;
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isString"])(_input)) {
        _input = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchShortOffset"], _input);
        if (_input === null) {
            return _date;
        }
    }
    else if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(_input) && Math.abs(_input) < 16 && !keepMinutes) {
        _input = _input * 60;
    }
    if (!config._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(_date);
    }
    config._offset = _input;
    config._isUTC = true;
    if (localAdjust != null) {
        _date = Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_4__["add"])(_date, localAdjust, 'minutes');
    }
    if (offset !== _input) {
        if (!keepLocalTime || config._changeInProgress) {
            _date = Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_4__["add"])(_date, _input - offset, 'minutes', config._isUTC);
            // addSubtract(this, createDuration(_input - offset, 'm'), 1, false);
        }
        else if (!config._changeInProgress) {
            config._changeInProgress = true;
            // todo: add timezone handling
            // hooks.updateOffset(this, true);
            config._changeInProgress = null;
        }
    }
    return _date;
}
/*
export function getSetZone(input, keepLocalTime) {
  if (input != null) {
    if (typeof input !== 'string') {
      input = -input;
    }

    this.utcOffset(input, keepLocalTime);

    return this;
  } else {
    return -this.utcOffset();
  }
}
*/
function setOffsetToUTC(date, keepLocalTime) {
    return setUTCOffset(date, 0, keepLocalTime);
}
function isDaylightSavingTime(date) {
    return (getUTCOffset(date) > getUTCOffset(Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_7__["setMonth"])(Object(_create_clone__WEBPACK_IMPORTED_MODULE_6__["cloneDate"])(date), 0))
        || getUTCOffset(date) > getUTCOffset(Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_7__["setMonth"])(Object(_create_clone__WEBPACK_IMPORTED_MODULE_6__["cloneDate"])(date), 5)));
}
/*export function setOffsetToLocal(date: Date, isUTC?: boolean, keepLocalTime?: boolean) {
  if (this._isUTC) {
    this.utcOffset(0, keepLocalTime);
    this._isUTC = false;

    if (keepLocalTime) {
      this.subtract(getDateOffset(this), 'm');
    }
  }
  return this;
}*/
function setOffsetToParsedOffset(date, input, config) {
    if (config === void 0) { config = {}; }
    if (config._tzm != null) {
        return setUTCOffset(date, config._tzm, false, true, config);
    }
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isString"])(input)) {
        var tZone = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchOffset"], input);
        if (tZone != null) {
            return setUTCOffset(date, tZone, false, false, config);
        }
        return setUTCOffset(date, 0, true, false, config);
    }
    return date;
}
function hasAlignedHourOffset(date, input) {
    var _input = input ? getUTCOffset(input, { _isUTC: false }) : 0;
    return (getUTCOffset(date) - _input) % 60 === 0;
}
// DEPRECATED
/*export function isDaylightSavingTimeShifted() {
  if (!isUndefined(this._isDSTShifted)) {
    return this._isDSTShifted;
  }

  const c = {};

  copyConfig(c, this);
  c = prepareConfig(c);

  if (c._a) {
    const other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
    this._isDSTShifted = this.isValid() &&
      compareArrays(c._a, other.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }

  return this._isDSTShifted;
}*/
// in Khronos
/*export function isLocal() {
  return this.isValid() ? !this._isUTC : false;
}

export function isUtcOffset() {
  return this.isValid() ? this._isUTC : false;
}

export function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}*/
//# sourceMappingURL=offset.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/priorities.js":
/*!*****************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/priorities.js ***!
  \*****************************************************************/
/*! exports provided: addUnitPriority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUnitPriority", function() { return addUnitPriority; });
var priorities = {};
function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}
/*
export function getPrioritizedUnits(unitsObj) {
  const units = [];
  let unit;
  for (unit in unitsObj) {
    if (unitsObj.hasOwnProperty(unit)) {
      units.push({ unit, priority: priorities[unit] });
    }
  }
  units.sort(function (a, b) {
    return a.priority - b.priority;
  });

  return units;
}
*/
//# sourceMappingURL=priorities.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/quarter.js":
/*!**************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/quarter.js ***!
  \**************************************************************/
/*! exports provided: getQuarter, setQuarter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuarter", function() { return getQuarter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQuarter", function() { return setQuarter; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var _utils_date_setters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/date-setters */ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js");









// FORMATTING
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('Q', null, 'Qo', function (date, opts) {
    return getQuarter(date, opts.isUTC).toString(10);
});
// ALIASES
Object(_aliases__WEBPACK_IMPORTED_MODULE_7__["addUnitAlias"])('quarter', 'Q');
// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_6__["addUnitPriority"])('quarter', 7);
// PARSING
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('Q', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["match1"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])('Q', function (input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_3__["MONTH"]] = (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["toInt"])(input) - 1) * 3;
    return config;
});
// MOMENTS
function getQuarter(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return Math.ceil((Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_5__["getMonth"])(date, isUTC) + 1) / 3);
}
function setQuarter(date, quarter, isUTC) {
    return Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_8__["setMonth"])(date, (quarter - 1) * 3 + Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_5__["getMonth"])(date, isUTC) % 3, isUTC);
}
// export function getSetQuarter(input) {
//   return input == null
//     ? Math.ceil((this.month() + 1) / 3)
//     : this.month((input - 1) * 3 + this.month() % 3);
// }
//# sourceMappingURL=quarter.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/second.js":
/*!*************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/second.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");







// FORMATTING
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('s', ['ss', 2, false], null, function (date, opts) {
    return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getSeconds"])(date, opts.isUTC).toString(10);
});
// ALIASES
Object(_aliases__WEBPACK_IMPORTED_MODULE_5__["addUnitAlias"])('second', 's');
// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_6__["addUnitPriority"])('second', 15);
// PARSING
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('s', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('ss', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match2"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addParseToken"])(['s', 'ss'], _constants__WEBPACK_IMPORTED_MODULE_4__["SECOND"]);
//# sourceMappingURL=second.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/timestamp.js":
/*!****************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/timestamp.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");





// FORMATTING
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('X', null, null, function (date) {
    return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["unix"])(date).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('x', null, null, function (date) {
    return date.valueOf().toString(10);
});
// PARSING
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('x', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('X', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["matchTimestamp"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addParseToken"])('X', function (input, array, config) {
    config._d = new Date(parseFloat(input) * 1000);
    return config;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addParseToken"])('x', function (input, array, config) {
    config._d = new Date(Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["toInt"])(input));
    return config;
});
//# sourceMappingURL=timestamp.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/week-calendar-utils.js":
/*!**************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/week-calendar-utils.js ***!
  \**************************************************************************/
/*! exports provided: dayOfYearFromWeeks, weekOfYear, weeksInYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayOfYearFromWeeks", function() { return dayOfYearFromWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekOfYear", function() { return weekOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weeksInYear", function() { return weeksInYear; });
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/date-from-array */ "../node_modules/ngx-bootstrap/chronos/create/date-from-array.js");
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./year */ "../node_modules/ngx-bootstrap/chronos/units/year.js");
/* harmony import */ var _day_of_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day-of-year */ "../node_modules/ngx-bootstrap/chronos/units/day-of-year.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");




function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    var fwd = dow - doy + 7;
    // first-week day local weekday -- which local weekday is fwd
    var fwdlw = (Object(_create_date_from_array__WEBPACK_IMPORTED_MODULE_0__["createUTCDate"])(year, 0, fwd).getUTCDay() - dow + 7) % 7;
    return -fwdlw + fwd - 1;
}
// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7;
    var weekOffset = firstWeekOffset(year, dow, doy);
    var dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
    var resYear;
    var resDayOfYear;
    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = Object(_year__WEBPACK_IMPORTED_MODULE_1__["daysInYear"])(resYear) + dayOfYear;
    }
    else if (dayOfYear > Object(_year__WEBPACK_IMPORTED_MODULE_1__["daysInYear"])(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - Object(_year__WEBPACK_IMPORTED_MODULE_1__["daysInYear"])(year);
    }
    else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }
    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}
function weekOfYear(date, dow, doy, isUTC) {
    var weekOffset = firstWeekOffset(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_3__["getFullYear"])(date, isUTC), dow, doy);
    var week = Math.floor((Object(_day_of_year__WEBPACK_IMPORTED_MODULE_2__["getDayOfYear"])(date, isUTC) - weekOffset - 1) / 7) + 1;
    var resWeek;
    var resYear;
    if (week < 1) {
        resYear = Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_3__["getFullYear"])(date, isUTC) - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    }
    else if (week > weeksInYear(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_3__["getFullYear"])(date, isUTC), dow, doy)) {
        resWeek = week - weeksInYear(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_3__["getFullYear"])(date, isUTC), dow, doy);
        resYear = Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_3__["getFullYear"])(date, isUTC) + 1;
    }
    else {
        resYear = Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_3__["getFullYear"])(date, isUTC);
        resWeek = week;
    }
    return {
        week: resWeek,
        year: resYear
    };
}
function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy);
    var weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (Object(_year__WEBPACK_IMPORTED_MODULE_1__["daysInYear"])(year) - weekOffset + weekOffsetNext) / 7;
}
//# sourceMappingURL=week-calendar-utils.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/week-year.js":
/*!****************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/week-year.js ***!
  \****************************************************************/
/*! exports provided: getSetWeekYear, getWeekYear, getSetISOWeekYear, getISOWeekYear, getISOWeeksInYear, getWeeksInYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetWeekYear", function() { return getSetWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekYear", function() { return getWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetISOWeekYear", function() { return getSetISOWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOWeekYear", function() { return getISOWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOWeeksInYear", function() { return getISOWeeksInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeeksInYear", function() { return getWeeksInYear; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./year */ "../node_modules/ngx-bootstrap/chronos/units/year.js");
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./week-calendar-utils */ "../node_modules/ngx-bootstrap/chronos/units/week-calendar-utils.js");
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create/date-from-array */ "../node_modules/ngx-bootstrap/chronos/create/date-from-array.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./week */ "../node_modules/ngx-bootstrap/chronos/units/week.js");
/* harmony import */ var _day_of_week__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./day-of-week */ "../node_modules/ngx-bootstrap/chronos/units/day-of-week.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../locale/locales */ "../node_modules/ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var _utils_date_setters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/date-setters */ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");














// FORMATTING
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['gg', 2, false], null, function (date, opts) {
    // return this.weekYear() % 100;
    return (getWeekYear(date, opts.locale) % 100).toString();
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['GG', 2, false], null, function (date) {
    // return this.isoWeekYear() % 100;
    return (getISOWeekYear(date) % 100).toString();
});
function addWeekYearFormatToken(token, getter) {
    Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, [token, token.length, false], null, getter);
}
function _getWeekYearFormatCb(date, opts) {
    return getWeekYear(date, opts.locale).toString();
}
function _getISOWeekYearFormatCb(date) {
    return getISOWeekYear(date).toString();
}
addWeekYearFormatToken('gggg', _getWeekYearFormatCb);
addWeekYearFormatToken('ggggg', _getWeekYearFormatCb);
addWeekYearFormatToken('GGGG', _getISOWeekYearFormatCb);
addWeekYearFormatToken('GGGGG', _getISOWeekYearFormatCb);
// ALIASES
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('weekYear', 'gg');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('isoWeekYear', 'GG');
// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('weekYear', 1);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('isoWeekYear', 1);
// PARSING
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('G', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('g', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('GG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('gg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('GGGG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to4"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('gggg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to4"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('GGGGG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match6"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('ggggg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match6"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_5__["toInt"])(input);
    return config;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['gg', 'GG'], function (input, week, config, token) {
    week[token] = Object(_year__WEBPACK_IMPORTED_MODULE_6__["parseTwoDigitYear"])(input);
    return config;
});
// MOMENTS
function getSetWeekYear(date, input, locale, isUTC) {
    if (locale === void 0) { locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_11__["getLocale"])(); }
    return getSetWeekYearHelper(date, input, 
    // this.week(),
    Object(_week__WEBPACK_IMPORTED_MODULE_9__["getWeek"])(date, locale, isUTC), 
    // this.weekday(),
    Object(_day_of_week__WEBPACK_IMPORTED_MODULE_10__["getLocaleDayOfWeek"])(date, locale, isUTC), locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC);
}
function getWeekYear(date, locale, isUTC) {
    if (locale === void 0) { locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_11__["getLocale"])(); }
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_7__["weekOfYear"])(date, locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC).year;
}
function getSetISOWeekYear(date, input, isUTC) {
    return getSetWeekYearHelper(date, input, Object(_week__WEBPACK_IMPORTED_MODULE_9__["getISOWeek"])(date, isUTC), Object(_day_of_week__WEBPACK_IMPORTED_MODULE_10__["getISODayOfWeek"])(date, isUTC), 1, 4);
}
function getISOWeekYear(date, isUTC) {
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_7__["weekOfYear"])(date, 1, 4, isUTC).year;
}
function getISOWeeksInYear(date, isUTC) {
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_7__["weeksInYear"])(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_13__["getFullYear"])(date, isUTC), 1, 4);
}
function getWeeksInYear(date, isUTC, locale) {
    if (locale === void 0) { locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_11__["getLocale"])(); }
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_7__["weeksInYear"])(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_13__["getFullYear"])(date, isUTC), locale.firstDayOfWeek(), locale.firstDayOfYear());
}
function getSetWeekYearHelper(date, input, week, weekday, dow, doy, isUTC) {
    if (!input) {
        return getWeekYear(date, void 0, isUTC);
    }
    var weeksTarget = Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_7__["weeksInYear"])(input, dow, doy);
    var _week = week > weeksTarget ? weeksTarget : week;
    return setWeekAll(date, input, _week, weekday, dow, doy);
}
function setWeekAll(date, weekYear, week, weekday, dow, doy) {
    var dayOfYearData = Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_7__["dayOfYearFromWeeks"])(weekYear, week, weekday, dow, doy);
    var _date = Object(_create_date_from_array__WEBPACK_IMPORTED_MODULE_8__["createUTCDate"])(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_12__["setFullYear"])(date, Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_13__["getFullYear"])(_date, true), true);
    Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_12__["setMonth"])(date, Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_13__["getMonth"])(_date, true), true);
    Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_12__["setDate"])(date, Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_13__["getDate"])(_date, true), true);
    return date;
}
//# sourceMappingURL=week-year.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/week.js":
/*!***********************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/week.js ***!
  \***********************************************************/
/*! exports provided: setWeek, getWeek, setISOWeek, getISOWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWeek", function() { return setWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeek", function() { return getWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setISOWeek", function() { return setISOWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOWeek", function() { return getISOWeek; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./week-calendar-utils */ "../node_modules/ngx-bootstrap/chronos/units/week-calendar-utils.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../locale/locales */ "../node_modules/ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var _moment_add_subtract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moment/add-subtract */ "../node_modules/ngx-bootstrap/chronos/moment/add-subtract.js");









// FORMATTING
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('w', ['ww', 2, false], 'wo', function (date, opts) {
    return getWeek(date, opts.locale).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('W', ['WW', 2, false], 'Wo', function (date) {
    return getISOWeek(date).toString(10);
});
// ALIASES
Object(_aliases__WEBPACK_IMPORTED_MODULE_3__["addUnitAlias"])('week', 'w');
Object(_aliases__WEBPACK_IMPORTED_MODULE_3__["addUnitAlias"])('isoWeek', 'W');
// PRIORITIES
Object(_priorities__WEBPACK_IMPORTED_MODULE_4__["addUnitPriority"])('week', 5);
Object(_priorities__WEBPACK_IMPORTED_MODULE_4__["addUnitPriority"])('isoWeek', 5);
// PARSING
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('w', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('ww', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('W', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('WW', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match2"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addWeekParseToken"])(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["toInt"])(input);
    return config;
});
// export function getSetWeek (input) {
//   var week = this.localeData().week(this);
//   return input == null ? week : this.add((input - week) * 7, 'd');
// }
function setWeek(date, input, locale) {
    if (locale === void 0) { locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_7__["getLocale"])(); }
    var week = getWeek(date, locale);
    return Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_8__["add"])(date, (input - week) * 7, 'day');
}
function getWeek(date, locale, isUTC) {
    if (locale === void 0) { locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_7__["getLocale"])(); }
    return locale.week(date, isUTC);
}
// export function getSetISOWeek (input) {
//   var week = weekOfYear(this, 1, 4).week;
//   return input == null ? week : this.add((input - week) * 7, 'd');
// }
function setISOWeek(date, input) {
    var week = getISOWeek(date);
    return Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_8__["add"])(date, (input - week) * 7, 'day');
}
function getISOWeek(date, isUTC) {
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_1__["weekOfYear"])(date, 1, 4, isUTC).week;
}
//# sourceMappingURL=week.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/units/year.js":
/*!***********************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/units/year.js ***!
  \***********************************************************/
/*! exports provided: parseTwoDigitYear, daysInYear, isLeapYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTwoDigitYear", function() { return parseTwoDigitYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInYear", function() { return daysInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeapYear", function() { return isLeapYear; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "../node_modules/ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ "../node_modules/ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/token */ "../node_modules/ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "../node_modules/ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./priorities */ "../node_modules/ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aliases */ "../node_modules/ngx-bootstrap/chronos/units/aliases.js");








// FORMATTING
function getYear(date, opts) {
    return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getFullYear"])(date, opts.isUTC).toString();
}
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('Y', null, null, function (date, opts) {
    var y = Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getFullYear"])(date, opts.isUTC);
    return y <= 9999 ? y.toString(10) : "+" + y;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['YY', 2, false], null, function (date, opts) {
    return (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getFullYear"])(date, opts.isUTC) % 100).toString(10);
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['YYYY', 4, false], null, getYear);
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['YYYYY', 5, false], null, getYear);
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(null, ['YYYYYY', 6, true], null, getYear);
// ALIASES
Object(_aliases__WEBPACK_IMPORTED_MODULE_7__["addUnitAlias"])('year', 'y');
// PRIORITIES
Object(_priorities__WEBPACK_IMPORTED_MODULE_6__["addUnitPriority"])('year', 1);
// PARSING
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('Y', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('YY', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('YYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to4"], _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('YYYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match6"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["addRegexToken"])('YYYYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_2__["match6"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addParseToken"])(['YYYYY', 'YYYYYY'], _constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addParseToken"])('YYYY', function (input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]] = input.length === 2 ? parseTwoDigitYear(input) : Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_5__["toInt"])(input);
    return config;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addParseToken"])('YY', function (input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]] = parseTwoDigitYear(input);
    return config;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addParseToken"])('Y', function (input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]] = parseInt(input, 10);
    return config;
});
function parseTwoDigitYear(input) {
    return Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_5__["toInt"])(input) + (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_5__["toInt"])(input) > 68 ? 1900 : 2000);
}
function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
//# sourceMappingURL=year.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/utils.js":
/*!******************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/utils.js ***!
  \******************************************************/
/*! exports provided: mod, absFloor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absFloor", function() { return absFloor; });
function mod(n, x) {
    return (n % x + x) % x;
}
function absFloor(num) {
    return num < 0 ? Math.ceil(num) || 0 : Math.floor(num);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/utils/abs-ceil.js":
/*!***************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/utils/abs-ceil.js ***!
  \***************************************************************/
/*! exports provided: absCeil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absCeil", function() { return absCeil; });
function absCeil(number) {
    return number < 0 ? Math.floor(number) : Math.ceil(number);
}
//# sourceMappingURL=abs-ceil.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/utils/abs-round.js":
/*!****************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/utils/abs-round.js ***!
  \****************************************************************/
/*! exports provided: absRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absRound", function() { return absRound; });
function absRound(num) {
    return num < 0 ? Math.round(num * -1) * -1 : Math.round(num);
}
//# sourceMappingURL=abs-round.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/utils/compare-arrays.js":
/*!*********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/utils/compare-arrays.js ***!
  \*********************************************************************/
/*! exports provided: compareArrays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareArrays", function() { return compareArrays; });
/* harmony import */ var _type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");

function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length);
    var lengthDiff = Math.abs(array1.length - array2.length);
    var diffs = 0;
    var i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i])
            || (!dontConvert && Object(_type_checks__WEBPACK_IMPORTED_MODULE_0__["toInt"])(array1[i]) !== Object(_type_checks__WEBPACK_IMPORTED_MODULE_0__["toInt"])(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}
//# sourceMappingURL=compare-arrays.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/utils/date-compare.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/utils/date-compare.js ***!
  \*******************************************************************/
/*! exports provided: isAfter, isBefore, isBetween, isSame, isSameOrAfter, isSameOrBefore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return isAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return isBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBetween", function() { return isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return isSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameOrAfter", function() { return isSameOrAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameOrBefore", function() { return isSameOrBefore; });
/* harmony import */ var _start_end_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-end-of */ "../node_modules/ngx-bootstrap/chronos/utils/start-end-of.js");

function isAfter(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() > date2.valueOf();
    }
    return date2.valueOf() < Object(_start_end_of__WEBPACK_IMPORTED_MODULE_0__["startOf"])(date1, units).valueOf();
}
function isBefore(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() < date2.valueOf();
    }
    return Object(_start_end_of__WEBPACK_IMPORTED_MODULE_0__["endOf"])(date1, units).valueOf() < date2.valueOf();
}
function isBetween(date, from, to, units, inclusivity) {
    if (inclusivity === void 0) { inclusivity = '()'; }
    var leftBound = inclusivity[0] === '('
        ? isAfter(date, from, units)
        : !isBefore(date, from, units);
    var rightBound = inclusivity[1] === ')'
        ? isBefore(date, to, units)
        : !isAfter(date, to, units);
    return leftBound && rightBound;
}
function isSame(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() === date2.valueOf();
    }
    var inputMs = date2.valueOf();
    return (Object(_start_end_of__WEBPACK_IMPORTED_MODULE_0__["startOf"])(date1, units).valueOf() <= inputMs &&
        inputMs <= Object(_start_end_of__WEBPACK_IMPORTED_MODULE_0__["endOf"])(date1, units).valueOf());
}
function isSameOrAfter(date1, date2, units) {
    return isSame(date1, date2, units) || isAfter(date1, date2, units);
}
function isSameOrBefore(date1, date2, units) {
    return isSame(date1, date2, units) || isBefore(date1, date2, units);
}
//# sourceMappingURL=date-compare.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/utils/date-getters.js ***!
  \*******************************************************************/
/*! exports provided: getHours, getMinutes, getSeconds, getMilliseconds, getTime, getDay, getDate, getMonth, getFullYear, getUnixTime, unix, getFirstDayOfMonth, daysInMonth, _daysInMonth, isFirstDayOfWeek, isSameMonth, isSameYear, isSameDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHours", function() { return getHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinutes", function() { return getMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeconds", function() { return getSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMilliseconds", function() { return getMilliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return getTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDay", function() { return getDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return getMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullYear", function() { return getFullYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnixTime", function() { return getUnixTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unix", function() { return unix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstDayOfMonth", function() { return getFirstDayOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInMonth", function() { return daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_daysInMonth", function() { return _daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirstDayOfWeek", function() { return isFirstDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return isSameMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return isSameYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return isSameDay; });
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/date-from-array */ "../node_modules/ngx-bootstrap/chronos/create/date-from-array.js");

function getHours(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCHours() : date.getHours();
}
function getMinutes(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMinutes() : date.getMinutes();
}
function getSeconds(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCSeconds() : date.getSeconds();
}
function getMilliseconds(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
}
function getTime(date) {
    return date.getTime();
}
function getDay(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCDay() : date.getDay();
}
function getDate(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCDate() : date.getDate();
}
function getMonth(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMonth() : date.getMonth();
}
function getFullYear(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCFullYear() : date.getFullYear();
}
function getUnixTime(date) {
    return Math.floor(date.valueOf() / 1000);
}
function unix(date) {
    return Math.floor(date.valueOf() / 1000);
}
function getFirstDayOfMonth(date) {
    return Object(_create_date_from_array__WEBPACK_IMPORTED_MODULE_0__["createDate"])(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
}
function daysInMonth(date) {
    return _daysInMonth(date.getFullYear(), date.getMonth());
}
function _daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}
function isFirstDayOfWeek(date, firstDayOfWeek) {
    return date.getDay() === firstDayOfWeek;
}
function isSameMonth(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
}
function isSameYear(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return getFullYear(date1) === getFullYear(date2);
}
function isSameDay(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return (isSameYear(date1, date2) &&
        isSameMonth(date1, date2) &&
        getDate(date1) === getDate(date2));
}
//# sourceMappingURL=date-getters.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/utils/date-setters.js ***!
  \*******************************************************************/
/*! exports provided: shiftDate, setFullDate, setFullYear, setMonth, setDay, setHours, setMinutes, setSeconds, setMilliseconds, setDate, setTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftDate", function() { return shiftDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFullDate", function() { return setFullDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFullYear", function() { return setFullYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMonth", function() { return setMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDay", function() { return setDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHours", function() { return setHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMinutes", function() { return setMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSeconds", function() { return setSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMilliseconds", function() { return setMilliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDate", function() { return setDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTime", function() { return setTime; });
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/month */ "../node_modules/ngx-bootstrap/chronos/units/month.js");
/* harmony import */ var _type_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _date_getters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../units/year */ "../node_modules/ngx-bootstrap/chronos/units/year.js");
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create/date-from-array */ "../node_modules/ngx-bootstrap/chronos/create/date-from-array.js");





var defaultTimeUnit = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    seconds: 0
};
function shiftDate(date, unit) {
    var _unit = Object.assign({}, defaultTimeUnit, unit);
    var year = date.getFullYear() + (_unit.year || 0);
    var month = date.getMonth() + (_unit.month || 0);
    var day = date.getDate() + (_unit.day || 0);
    if (_unit.month && !_unit.day) {
        day = Math.min(day, Object(_units_month__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month));
    }
    return Object(_create_date_from_array__WEBPACK_IMPORTED_MODULE_4__["createDate"])(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
}
function setFullDate(date, unit) {
    return Object(_create_date_from_array__WEBPACK_IMPORTED_MODULE_4__["createDate"])(getNum(date.getFullYear(), unit.year), getNum(date.getMonth(), unit.month), getNum(date.getDate(), unit.day), getNum(date.getHours(), unit.hour), getNum(date.getMinutes(), unit.minute), getNum(date.getSeconds(), unit.seconds), getNum(date.getMilliseconds(), unit.milliseconds));
}
function getNum(def, num) {
    return Object(_type_checks__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(num) ? num : def;
}
function setFullYear(date, value, isUTC) {
    var _month = Object(_date_getters__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(date, isUTC);
    var _date = Object(_date_getters__WEBPACK_IMPORTED_MODULE_2__["getDate"])(date, isUTC);
    var _year = Object(_date_getters__WEBPACK_IMPORTED_MODULE_2__["getFullYear"])(date, isUTC);
    if (Object(_units_year__WEBPACK_IMPORTED_MODULE_3__["isLeapYear"])(_year) && _month === 1 && _date === 29) {
        var _daysInMonth = Object(_units_month__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(value, _month);
        isUTC ? date.setUTCFullYear(value, _month, _daysInMonth) : date.setFullYear(value, _month, _daysInMonth);
    }
    isUTC ? date.setUTCFullYear(value) : date.setFullYear(value);
    return date;
}
function setMonth(date, value, isUTC) {
    var dayOfMonth = Math.min(Object(_date_getters__WEBPACK_IMPORTED_MODULE_2__["getDate"])(date), Object(_units_month__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(Object(_date_getters__WEBPACK_IMPORTED_MODULE_2__["getFullYear"])(date), value));
    isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
    return date;
}
function setDay(date, value, isUTC) {
    isUTC ? date.setUTCDate(value) : date.setDate(value);
    return date;
}
function setHours(date, value, isUTC) {
    isUTC ? date.setUTCHours(value) : date.setHours(value);
    return date;
}
function setMinutes(date, value, isUTC) {
    isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
    return date;
}
function setSeconds(date, value, isUTC) {
    isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
    return date;
}
function setMilliseconds(date, value, isUTC) {
    isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
    return date;
}
function setDate(date, value, isUTC) {
    isUTC ? date.setUTCDate(value) : date.setDate(value);
    return date;
}
function setTime(date, value) {
    date.setTime(value);
    return date;
}
//# sourceMappingURL=date-setters.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/utils/defaults.js":
/*!***************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/utils/defaults.js ***!
  \***************************************************************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}
//# sourceMappingURL=defaults.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/utils/start-end-of.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/utils/start-end-of.js ***!
  \*******************************************************************/
/*! exports provided: startOf, endOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return startOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return endOf; });
/* harmony import */ var _date_setters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-setters */ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var _create_clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/clone */ "../node_modules/ngx-bootstrap/chronos/create/clone.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/day-of-week */ "../node_modules/ngx-bootstrap/chronos/units/day-of-week.js");
/* harmony import */ var _date_getters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _moment_add_subtract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../moment/add-subtract */ "../node_modules/ngx-bootstrap/chronos/moment/add-subtract.js");





function startOf(date, unit, isUTC) {
    var _date = Object(_create_clone__WEBPACK_IMPORTED_MODULE_1__["cloneDate"])(date);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (unit) {
        case 'year':
            Object(_date_setters__WEBPACK_IMPORTED_MODULE_0__["setMonth"])(_date, 0, isUTC);
        /* falls through */
        case 'quarter':
        case 'month':
            Object(_date_setters__WEBPACK_IMPORTED_MODULE_0__["setDate"])(_date, 1, isUTC);
        /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            Object(_date_setters__WEBPACK_IMPORTED_MODULE_0__["setHours"])(_date, 0, isUTC);
        /* falls through */
        case 'hours':
            Object(_date_setters__WEBPACK_IMPORTED_MODULE_0__["setMinutes"])(_date, 0, isUTC);
        /* falls through */
        case 'minutes':
            Object(_date_setters__WEBPACK_IMPORTED_MODULE_0__["setSeconds"])(_date, 0, isUTC);
        /* falls through */
        case 'seconds':
            Object(_date_setters__WEBPACK_IMPORTED_MODULE_0__["setMilliseconds"])(_date, 0, isUTC);
    }
    // weeks are a special case
    if (unit === 'week') {
        Object(_units_day_of_week__WEBPACK_IMPORTED_MODULE_2__["setLocaleDayOfWeek"])(_date, 0, { isUTC: isUTC });
    }
    if (unit === 'isoWeek') {
        Object(_units_day_of_week__WEBPACK_IMPORTED_MODULE_2__["setISODayOfWeek"])(_date, 1);
    }
    // quarters are also special
    if (unit === 'quarter') {
        Object(_date_setters__WEBPACK_IMPORTED_MODULE_0__["setMonth"])(_date, Math.floor(Object(_date_getters__WEBPACK_IMPORTED_MODULE_3__["getMonth"])(_date, isUTC) / 3) * 3, isUTC);
    }
    return _date;
}
function endOf(date, unit, isUTC) {
    var _unit = unit;
    // 'date' is an alias for 'day', so it should be considered as such.
    if (_unit === 'date') {
        _unit = 'day';
    }
    var start = startOf(date, _unit, isUTC);
    var _step = Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_4__["add"])(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
    var res = Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_4__["subtract"])(_step, 1, 'milliseconds', isUTC);
    return res;
}
//# sourceMappingURL=start-end-of.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js":
/*!******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/utils/type-checks.js ***!
  \******************************************************************/
/*! exports provided: isString, isDate, isBoolean, isDateValid, isFunction, isNumber, isArray, hasOwnProp, isObject, isObjectEmpty, isUndefined, toInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateValid", function() { return isDateValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwnProp", function() { return hasOwnProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return isObjectEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt", function() { return toInt; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "../node_modules/ngx-bootstrap/chronos/utils.js");

function isString(str) {
    return typeof str === 'string';
}
function isDate(value) {
    return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
function isBoolean(value) {
    return value === true || value === false;
}
function isDateValid(date) {
    return date && date.getTime && !isNaN(date.getTime());
}
function isFunction(fn) {
    return (fn instanceof Function ||
        Object.prototype.toString.call(fn) === '[object Function]');
}
function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}
function isArray(input) {
    return (input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]');
}
function hasOwnProp(a /*object*/, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}
function isObject(input /*object*/) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (input != null && Object.prototype.toString.call(input) === '[object Object]');
}
function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    }
    var k;
    for (k in obj) {
        if (obj.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
}
function isUndefined(input) {
    return input === void 0;
}
function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion;
    var value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["absFloor"])(coercedNumber);
    }
    return value;
}
//# sourceMappingURL=type-checks.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/chronos/utils/zero-fill.js":
/*!****************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/chronos/utils/zero-fill.js ***!
  \****************************************************************/
/*! exports provided: zeroFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroFill", function() { return zeroFill; });
function zeroFill(num, targetLength, forceSign) {
    var absNumber = "" + Math.abs(num);
    var zerosToFill = targetLength - absNumber.length;
    var sign = num >= 0;
    var _sign = sign ? (forceSign ? '+' : '') : '-';
    // todo: this is crazy slow
    var _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
    return (_sign + _zeros + absNumber);
}
//# sourceMappingURL=zero-fill.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/component-loader/component-loader.class.js":
/*!********************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/component-loader/component-loader.class.js ***!
  \********************************************************************************/
/*! exports provided: ComponentLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return ComponentLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_triggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/triggers */ "../node_modules/ngx-bootstrap/utils/triggers.js");
/* harmony import */ var _content_ref_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-ref.class */ "../node_modules/ngx-bootstrap/component-loader/content-ref.class.js");



var ComponentLoader = /** @class */ (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._providers = [];
        this._isHiding = false;
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            if (this._isHiding) {
                return false;
            }
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = 
    // todo: add behaviour: to target element, `body`, custom element
    function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    // todo: appendChild to element or document.querySelector(this.container)
    ComponentLoader.prototype.show = 
    // todo: appendChild to element or document.querySelector(this.container)
    function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                document
                    .querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container &&
                this._elementRef &&
                this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        this._registerOutsideClick();
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        // this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
        //
        // if (this._contentRef.viewRef && this._viewContainerRef.indexOf(this._contentRef.viewRef) !== -1) {
        //   this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        // }
        this._contentRef = null;
        this._componentRef = null;
        this._removeGlobalListener();
        this.onHidden.emit();
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        var hide = (this._listenOpts.hide = function () {
            return listenOpts.hide ? listenOpts.hide() : void _this.hide();
        });
        var show = (this._listenOpts.show = function (registerHide) {
            listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
            registerHide();
        });
        var toggle = function (registerHide) {
            _this.isShown ? hide() : show(registerHide);
        };
        this._unregisterListenersFn = Object(_utils_triggers__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"])(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show: show,
            hide: hide,
            toggle: toggle
        });
        return this;
    };
    ComponentLoader.prototype._removeGlobalListener = function () {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    };
    ComponentLoader.prototype.attachInline = function (vRef, template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    };
    ComponentLoader.prototype._registerOutsideClick = function () {
        var _this = this;
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts.outsideClick) {
            var target_1 = this._componentRef.location.nativeElement;
            setTimeout(function () {
                _this._globalListener = Object(_utils_triggers__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"])(_this._renderer, {
                    targets: [target_1, _this._elementRef.nativeElement],
                    outsideClick: _this._listenOpts.outsideClick,
                    hide: function () { return _this._listenOpts.hide(); }
                });
            });
        }
    };
    ComponentLoader.prototype.getInnerComponent = function () {
        return this._innerComponent;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone.onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content, context, initialState) {
        if (!content) {
            return new _content_ref_class__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([]);
        }
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            if (this._viewContainerRef) {
                var _viewRef = this._viewContainerRef
                    .createEmbeddedView(content, context);
                _viewRef.markForCheck();
                return new _content_ref_class__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([_viewRef.rootNodes], _viewRef);
            }
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new _content_ref_class__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].resolveAndCreate(this._providers.slice(), this._injector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);
            this._applicationRef.attachView(componentRef.hostView);
            return new _content_ref_class__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new _content_ref_class__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());

//# sourceMappingURL=component-loader.class.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/component-loader/component-loader.factory.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/component-loader/component-loader.factory.js ***!
  \**********************************************************************************/
/*! exports provided: ComponentLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return ComponentLoaderFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_loader_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-loader.class */ "../node_modules/ngx-bootstrap/component-loader/component-loader.class.js");
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../positioning/index */ "../node_modules/ngx-bootstrap/positioning/index.js");



var ComponentLoaderFactory = /** @class */ (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    /**
       *
       * @param _elementRef
       * @param _viewContainerRef
       * @param _renderer
       * @returns {ComponentLoader}
       */
    ComponentLoaderFactory.prototype.createLoader = /**
       *
       * @param _elementRef
       * @param _viewContainerRef
       * @param _renderer
       * @returns {ComponentLoader}
       */
    function (_elementRef, _viewContainerRef, _renderer) {
        return new _component_loader_class__WEBPACK_IMPORTED_MODULE_1__["ComponentLoader"](_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _positioning_index__WEBPACK_IMPORTED_MODULE_2__["PositioningService"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], },
    ]; };
    return ComponentLoaderFactory;
}());

//# sourceMappingURL=component-loader.factory.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/component-loader/content-ref.class.js":
/*!***************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/component-loader/content-ref.class.js ***!
  \***************************************************************************/
/*! exports provided: ContentRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ContentRef; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = /** @class */ (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

//# sourceMappingURL=content-ref.class.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/component-loader/index.js":
/*!***************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/component-loader/index.js ***!
  \***************************************************************/
/*! exports provided: ComponentLoader, ComponentLoaderFactory, ContentRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_loader_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-loader.class */ "../node_modules/ngx-bootstrap/component-loader/component-loader.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return _component_loader_class__WEBPACK_IMPORTED_MODULE_0__["ComponentLoader"]; });

/* harmony import */ var _component_loader_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-loader.factory */ "../node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return _component_loader_factory__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]; });

/* harmony import */ var _content_ref_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-ref.class */ "../node_modules/ngx-bootstrap/component-loader/content-ref.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return _content_ref_class__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/base/bs-datepicker-container.js":
/*!********************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/base/bs-datepicker-container.js ***!
  \********************************************************************************/
/*! exports provided: BsDatepickerAbstractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerAbstractComponent", function() { return BsDatepickerAbstractComponent; });
var BsDatepickerAbstractComponent = /** @class */ (function () {
    function BsDatepickerAbstractComponent() {
        this._customRangesFish = [];
    }
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
        set: function (value) {
            this._effects.setMinDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
        set: function (value) {
            this._effects.setMaxDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
        set: function (value) {
            this._effects.setDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDatepickerAbstractComponent.prototype.setViewMode = function (event) { };
    BsDatepickerAbstractComponent.prototype.navigateTo = function (event) { };
    BsDatepickerAbstractComponent.prototype.dayHoverHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype.monthHoverHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype.yearHoverHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype.daySelectHandler = function (day) { };
    BsDatepickerAbstractComponent.prototype.monthSelectHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype.yearSelectHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype._stopPropagation = function (event) {
        event.stopPropagation();
    };
    return BsDatepickerAbstractComponent;
}());

//# sourceMappingURL=bs-datepicker-container.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker-input.directive.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/bs-datepicker-input.directive.js ***!
  \*********************************************************************************/
/*! exports provided: BsDatepickerInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInputDirective", function() { return BsDatepickerInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chronos_create_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chronos/create/local */ "../node_modules/ngx-bootstrap/chronos/create/local.js");
/* harmony import */ var _chronos_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chronos/format */ "../node_modules/ngx-bootstrap/chronos/format.js");
/* harmony import */ var _chronos_locale_locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chronos/locale/locales */ "../node_modules/ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var _chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chronos/utils/date-compare */ "../node_modules/ngx-bootstrap/chronos/utils/date-compare.js");
/* harmony import */ var _chronos_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chronos/utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _bs_datepicker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bs-datepicker.component */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.component.js");
/* harmony import */ var _bs_locale_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bs-locale.service */ "../node_modules/ngx-bootstrap/datepicker/bs-locale.service.js");









var BS_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return BsDatepickerInputDirective; }),
    multi: true
};
var BS_DATEPICKER_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return BsDatepickerInputDirective; }),
    multi: true
};
var BsDatepickerInputDirective = /** @class */ (function () {
    function BsDatepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
        var _this = this;
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe(function (value) {
            _this._setInputValue(value);
            if (_this._value !== value) {
                _this._value = value;
                _this._onChange(value);
                _this._onTouched();
            }
            _this.changeDetection.markForCheck();
        });
        // update input value on locale change
        this._localeService.localeChange.subscribe(function () {
            _this._setInputValue(_this._value);
        });
    }
    BsDatepickerInputDirective.prototype._setInputValue = function (value) {
        var initialDate = !value ? ''
            : Object(_chronos_format__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
    };
    BsDatepickerInputDirective.prototype.onChange = function (event) {
        this.writeValue(event.target.value);
        this._onChange(this._value);
        this._onTouched();
    };
    BsDatepickerInputDirective.prototype.validate = function (c) {
        var _value = c.value;
        if (_value === null || _value === undefined || _value === '') {
            return null;
        }
        if (Object(_chronos_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["isDate"])(_value)) {
            var _isDateValid = Object(_chronos_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["isDateValid"])(_value);
            if (!_isDateValid) {
                return { bsDate: { invalid: _value } };
            }
            if (this._picker && this._picker.minDate && Object(_chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_5__["isBefore"])(_value, this._picker.minDate, 'date')) {
                return { bsDate: { minDate: this._picker.minDate } };
            }
            if (this._picker && this._picker.maxDate && Object(_chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_5__["isAfter"])(_value, this._picker.maxDate, 'date')) {
                return { bsDate: { maxDate: this._picker.maxDate } };
            }
        }
    };
    BsDatepickerInputDirective.prototype.registerOnValidatorChange = function (fn) {
        this._validatorChange = fn;
    };
    BsDatepickerInputDirective.prototype.writeValue = function (value) {
        if (!value) {
            this._value = null;
        }
        else {
            var _localeKey = this._localeService.currentLocale;
            var _locale = Object(_chronos_locale_locales__WEBPACK_IMPORTED_MODULE_4__["getLocale"])(_localeKey);
            if (!_locale) {
                throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
            }
            this._value = Object(_chronos_create_local__WEBPACK_IMPORTED_MODULE_2__["parseDate"])(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        }
        this._picker.bsValue = this._value;
    };
    BsDatepickerInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    BsDatepickerInputDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    BsDatepickerInputDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    BsDatepickerInputDirective.prototype.onBlur = function () {
        this._onTouched();
    };
    BsDatepickerInputDirective.prototype.hide = function () {
        this._picker.hide();
    };
    BsDatepickerInputDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "input[bsDatepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    BsDatepickerInputDirective.ctorParameters = function () { return [
        { type: _bs_datepicker_component__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] },] },
        { type: _bs_locale_service__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    return BsDatepickerInputDirective;
}());

//# sourceMappingURL=bs-datepicker-input.directive.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.component.js":
/*!***************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/bs-datepicker.component.js ***!
  \***************************************************************************/
/*! exports provided: BsDatepickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerDirective", function() { return BsDatepickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component-loader/component-loader.factory */ "../node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var _themes_bs_bs_datepicker_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes/bs/bs-datepicker-container.component */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-datepicker-container.component.js");
/* harmony import */ var _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bs-datepicker.config */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.config.js");




var BsDatepickerDirective = /** @class */ (function () {
    function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
           * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
           */
        this.placement = 'bottom';
        /**
           * Specifies events that should trigger. Supports a space separated list of
           * event names.
           */
        this.triggers = 'click';
        /**
           * Close datepicker on outside click
           */
        this.outsideClick = true;
        /**
           * A selector specifying the element the datepicker should be appended to.
           * Currently only supports "body".
           */
        this.container = 'body';
        /**
           * Emits when datepicker value has been changed
           */
        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDatepickerDirective.prototype, "isOpen", {
        get: /**
           * Returns whether or not the datepicker is currently being shown
           */
        function () {
            return this._datepicker.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerDirective.prototype, "bsValue", {
        set: /**
           * Initial value of datepicker
           */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDatepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.setConfig();
    };
    BsDatepickerDirective.prototype.ngOnChanges = function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
       * Opens an element’s datepicker. This is considered a “manual” triggering of
       * the datepicker.
       */
    BsDatepickerDirective.prototype.show = /**
       * Opens an element’s datepicker. This is considered a “manual” triggering of
       * the datepicker.
       */
    function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerConfig"], useValue: this._config })
            .attach(_themes_bs_bs_datepicker_container_component__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerContainerComponent"])
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
            _this.bsValue = value;
            _this.hide();
        }));
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
       * Closes an element’s datepicker. This is considered a “manual” triggering of
       * the datepicker.
       */
    BsDatepickerDirective.prototype.hide = /**
       * Closes an element’s datepicker. This is considered a “manual” triggering of
       * the datepicker.
       */
    function () {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    /**
       * Toggles an element’s datepicker. This is considered a “manual” triggering
       * of the datepicker.
       */
    BsDatepickerDirective.prototype.toggle = /**
       * Toggles an element’s datepicker. This is considered a “manual” triggering
       * of the datepicker.
       */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Set config for datepicker
     */
    /**
       * Set config for datepicker
       */
    BsDatepickerDirective.prototype.setConfig = /**
       * Set config for datepicker
       */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate
        });
    };
    BsDatepickerDirective.prototype.ngOnDestroy = function () {
        this._datepicker.dispose();
    };
    BsDatepickerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDatepicker]',
                    exportAs: 'bsDatepicker'
                },] },
    ];
    /** @nocollapse */
    BsDatepickerDirective.ctorParameters = function () { return [
        { type: _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"], },
    ]; };
    BsDatepickerDirective.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outsideClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "bsValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bsConfig": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bsValueChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return BsDatepickerDirective;
}());

//# sourceMappingURL=bs-datepicker.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.config.js":
/*!************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/bs-datepicker.config.js ***!
  \************************************************************************/
/*! exports provided: BsDatepickerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerConfig", function() { return BsDatepickerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
var BsDatepickerConfig = /** @class */ (function () {
    function BsDatepickerConfig() {
        /** CSS class which will be applied to datepicker container,
           * usually used to set color theme
           */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
           * Allows to hide week numbers in datepicker
           */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        /**
           * Date format for date range input field
           */
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
    }
    BsDatepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return BsDatepickerConfig;
}());

//# sourceMappingURL=bs-datepicker.config.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.module.js":
/*!************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/bs-datepicker.module.js ***!
  \************************************************************************/
/*! exports provided: BsDatepickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerModule", function() { return BsDatepickerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component-loader/component-loader.factory */ "../node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var _positioning_positioning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../positioning/positioning.service */ "../node_modules/ngx-bootstrap/positioning/positioning.service.js");
/* harmony import */ var _utils_warn_once__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/warn-once */ "../node_modules/ngx-bootstrap/utils/warn-once.js");
/* harmony import */ var _bs_datepicker_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bs-datepicker-input.directive */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker-input.directive.js");
/* harmony import */ var _bs_datepicker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bs-datepicker.component */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.component.js");
/* harmony import */ var _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bs-datepicker.config */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.config.js");
/* harmony import */ var _bs_daterangepicker_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bs-daterangepicker-input.directive */ "../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker-input.directive.js");
/* harmony import */ var _bs_daterangepicker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bs-daterangepicker.component */ "../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker.component.js");
/* harmony import */ var _bs_daterangepicker_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bs-daterangepicker.config */ "../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker.config.js");
/* harmony import */ var _bs_locale_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bs-locale.service */ "../node_modules/ngx-bootstrap/datepicker/bs-locale.service.js");
/* harmony import */ var _reducer_bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reducer/bs-datepicker.actions */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js");
/* harmony import */ var _reducer_bs_datepicker_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reducer/bs-datepicker.effects */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.effects.js");
/* harmony import */ var _reducer_bs_datepicker_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reducer/bs-datepicker.store */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.store.js");
/* harmony import */ var _themes_bs_bs_calendar_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./themes/bs/bs-calendar-layout.component */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-calendar-layout.component.js");
/* harmony import */ var _themes_bs_bs_current_date_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./themes/bs/bs-current-date-view.component */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-current-date-view.component.js");
/* harmony import */ var _themes_bs_bs_custom_dates_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./themes/bs/bs-custom-dates-view.component */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-custom-dates-view.component.js");
/* harmony import */ var _themes_bs_bs_datepicker_container_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./themes/bs/bs-datepicker-container.component */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-datepicker-container.component.js");
/* harmony import */ var _themes_bs_bs_datepicker_day_decorator_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./themes/bs/bs-datepicker-day-decorator.directive */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-datepicker-day-decorator.directive.js");
/* harmony import */ var _themes_bs_bs_datepicker_navigation_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./themes/bs/bs-datepicker-navigation-view.component */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-datepicker-navigation-view.component.js");
/* harmony import */ var _themes_bs_bs_daterangepicker_container_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./themes/bs/bs-daterangepicker-container.component */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-daterangepicker-container.component.js");
/* harmony import */ var _themes_bs_bs_days_calendar_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./themes/bs/bs-days-calendar-view.component */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-days-calendar-view.component.js");
/* harmony import */ var _themes_bs_bs_months_calendar_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./themes/bs/bs-months-calendar-view.component */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-months-calendar-view.component.js");
/* harmony import */ var _themes_bs_bs_timepicker_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./themes/bs/bs-timepicker-view.component */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-timepicker-view.component.js");
/* harmony import */ var _themes_bs_bs_years_calendar_view_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./themes/bs/bs-years-calendar-view.component */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-years-calendar-view.component.js");


























var _exports = [
    _themes_bs_bs_datepicker_container_component__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerContainerComponent"],
    _themes_bs_bs_daterangepicker_container_component__WEBPACK_IMPORTED_MODULE_21__["BsDaterangepickerContainerComponent"],
    _bs_datepicker_component__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerDirective"],
    _bs_datepicker_input_directive__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerInputDirective"],
    _bs_daterangepicker_input_directive__WEBPACK_IMPORTED_MODULE_8__["BsDaterangepickerInputDirective"],
    _bs_daterangepicker_component__WEBPACK_IMPORTED_MODULE_9__["BsDaterangepickerDirective"]
];
var BsDatepickerModule = /** @class */ (function () {
    function BsDatepickerModule() {
        Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_4__["warnOnce"])("BsDatepickerModule is under development,\n      BREAKING CHANGES are possible,\n      PLEASE, read changelog");
    }
    BsDatepickerModule.forRoot = function () {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"],
                _positioning_positioning_service__WEBPACK_IMPORTED_MODULE_3__["PositioningService"],
                _reducer_bs_datepicker_store__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerStore"],
                _reducer_bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerActions"],
                _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerConfig"],
                _bs_daterangepicker_config__WEBPACK_IMPORTED_MODULE_10__["BsDaterangepickerConfig"],
                _reducer_bs_datepicker_effects__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerEffects"],
                _bs_locale_service__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"]
            ]
        };
    };
    BsDatepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [
                        _themes_bs_bs_datepicker_day_decorator_directive__WEBPACK_IMPORTED_MODULE_19__["BsDatepickerDayDecoratorComponent"],
                        _themes_bs_bs_current_date_view_component__WEBPACK_IMPORTED_MODULE_16__["BsCurrentDateViewComponent"],
                        _themes_bs_bs_datepicker_navigation_view_component__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerNavigationViewComponent"],
                        _themes_bs_bs_timepicker_view_component__WEBPACK_IMPORTED_MODULE_24__["BsTimepickerViewComponent"],
                        _themes_bs_bs_calendar_layout_component__WEBPACK_IMPORTED_MODULE_15__["BsCalendarLayoutComponent"],
                        _themes_bs_bs_days_calendar_view_component__WEBPACK_IMPORTED_MODULE_22__["BsDaysCalendarViewComponent"],
                        _themes_bs_bs_months_calendar_view_component__WEBPACK_IMPORTED_MODULE_23__["BsMonthCalendarViewComponent"],
                        _themes_bs_bs_years_calendar_view_component__WEBPACK_IMPORTED_MODULE_25__["BsYearsCalendarViewComponent"],
                        _themes_bs_bs_custom_dates_view_component__WEBPACK_IMPORTED_MODULE_17__["BsCustomDatesViewComponent"]
                    ].concat(_exports),
                    entryComponents: [
                        _themes_bs_bs_datepicker_container_component__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerContainerComponent"],
                        _themes_bs_bs_daterangepicker_container_component__WEBPACK_IMPORTED_MODULE_21__["BsDaterangepickerContainerComponent"]
                    ],
                    exports: _exports
                },] },
    ];
    /** @nocollapse */
    BsDatepickerModule.ctorParameters = function () { return []; };
    return BsDatepickerModule;
}());

//# sourceMappingURL=bs-datepicker.module.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker-input.directive.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker-input.directive.js ***!
  \**************************************************************************************/
/*! exports provided: BsDaterangepickerInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInputDirective", function() { return BsDaterangepickerInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chronos_create_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chronos/create/local */ "../node_modules/ngx-bootstrap/chronos/create/local.js");
/* harmony import */ var _chronos_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chronos/format */ "../node_modules/ngx-bootstrap/chronos/format.js");
/* harmony import */ var _chronos_locale_locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chronos/locale/locales */ "../node_modules/ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var _chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chronos/utils/date-compare */ "../node_modules/ngx-bootstrap/chronos/utils/date-compare.js");
/* harmony import */ var _chronos_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chronos/utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _bs_daterangepicker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bs-daterangepicker.component */ "../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker.component.js");
/* harmony import */ var _bs_locale_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bs-locale.service */ "../node_modules/ngx-bootstrap/datepicker/bs-locale.service.js");









var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return BsDaterangepickerInputDirective; }),
    multi: true
};
var BS_DATERANGEPICKER_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return BsDaterangepickerInputDirective; }),
    multi: true
};
var BsDaterangepickerInputDirective = /** @class */ (function () {
    function BsDaterangepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
        var _this = this;
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe(function (value) {
            _this._setInputValue(value);
            if (_this._value !== value) {
                _this._value = value;
                _this._onChange(value);
                _this._onTouched();
            }
            _this.changeDetection.markForCheck();
        });
        // update input value on locale change
        this._localeService.localeChange.subscribe(function () {
            _this._setInputValue(_this._value);
        });
    }
    BsDaterangepickerInputDirective.prototype._setInputValue = function (date) {
        var range = '';
        if (date) {
            var start = !date[0] ? ''
                : Object(_chronos_format__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            var end = !date[1] ? ''
                : Object(_chronos_format__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
        }
        this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
    };
    BsDaterangepickerInputDirective.prototype.onChange = function (event) {
        this.writeValue(event.target.value);
        this._onChange(this._value);
        this._onTouched();
    };
    BsDaterangepickerInputDirective.prototype.validate = function (c) {
        var _value = c.value;
        if (_value === null || _value === undefined || !Object(_chronos_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["isArray"])(_value)) {
            return null;
        }
        var _isDateValid = Object(_chronos_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["isDateValid"])(_value[0]) && Object(_chronos_utils_type_checks__WEBPACK_IMPORTED_MODULE_6__["isDateValid"])(_value[0]);
        if (!_isDateValid) {
            return { bsDate: { invalid: _value } };
        }
        if (this._picker && this._picker.minDate && Object(_chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_5__["isBefore"])(_value[0], this._picker.minDate, 'date')) {
            return { bsDate: { minDate: this._picker.minDate } };
        }
        if (this._picker && this._picker.maxDate && Object(_chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_5__["isAfter"])(_value[1], this._picker.maxDate, 'date')) {
            return { bsDate: { maxDate: this._picker.maxDate } };
        }
    };
    BsDaterangepickerInputDirective.prototype.registerOnValidatorChange = function (fn) {
        this._validatorChange = fn;
    };
    BsDaterangepickerInputDirective.prototype.writeValue = function (value) {
        var _this = this;
        if (!value) {
            this._value = null;
        }
        else {
            var _localeKey = this._localeService.currentLocale;
            var _locale = Object(_chronos_locale_locales__WEBPACK_IMPORTED_MODULE_4__["getLocale"])(_localeKey);
            if (!_locale) {
                throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
            }
            var _input = [];
            if (typeof value === 'string') {
                _input = value.split(this._picker._config.rangeSeparator);
            }
            if (Array.isArray(value)) {
                _input = value;
            }
            this._value = _input
                .map(function (_val) {
                return Object(_chronos_create_local__WEBPACK_IMPORTED_MODULE_2__["parseDate"])(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale);
            })
                .map(function (date) { return (isNaN(date.valueOf()) ? null : date); });
        }
        this._picker.bsValue = this._value;
    };
    BsDaterangepickerInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    BsDaterangepickerInputDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    BsDaterangepickerInputDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    BsDaterangepickerInputDirective.prototype.onBlur = function () {
        this._onTouched();
    };
    BsDaterangepickerInputDirective.prototype.hide = function () {
        this._picker.hide();
    };
    BsDaterangepickerInputDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "input[bsDaterangepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    BsDaterangepickerInputDirective.ctorParameters = function () { return [
        { type: _bs_daterangepicker_component__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] },] },
        { type: _bs_locale_service__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    return BsDaterangepickerInputDirective;
}());

//# sourceMappingURL=bs-daterangepicker-input.directive.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker.component.js":
/*!********************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker.component.js ***!
  \********************************************************************************/
/*! exports provided: BsDaterangepickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerDirective", function() { return BsDaterangepickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bs_daterangepicker_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-daterangepicker.config */ "../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker.config.js");
/* harmony import */ var _themes_bs_bs_daterangepicker_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes/bs/bs-daterangepicker-container.component */ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-daterangepicker-container.component.js");
/* harmony import */ var _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component-loader/component-loader.factory */ "../node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bs-datepicker.config */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.config.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");






var BsDaterangepickerDirective = /** @class */ (function () {
    function BsDaterangepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
           * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
           */
        this.placement = 'bottom';
        /**
           * Specifies events that should trigger. Supports a space separated list of
           * event names.
           */
        this.triggers = 'click';
        /**
           * Close daterangepicker on outside click
           */
        this.outsideClick = true;
        /**
           * A selector specifying the element the daterangepicker should be appended
           * to. Currently only supports "body".
           */
        this.container = 'body';
        /**
           * Emits when daterangepicker value has been changed
           */
        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subs = [];
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        Object.assign(this, _config);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDaterangepickerDirective.prototype, "isOpen", {
        get: /**
           * Returns whether or not the daterangepicker is currently being shown
           */
        function () {
            return this._datepicker.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDaterangepickerDirective.prototype, "bsValue", {
        set: /**
           * Initial value of daterangepicker
           */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDaterangepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.setConfig();
    };
    BsDaterangepickerDirective.prototype.ngOnChanges = function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
       * Opens an element’s datepicker. This is considered a “manual” triggering of
       * the datepicker.
       */
    BsDaterangepickerDirective.prototype.show = /**
       * Opens an element’s datepicker. This is considered a “manual” triggering of
       * the datepicker.
       */
    function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerConfig"], useValue: this._config })
            .attach(_themes_bs_bs_daterangepicker_container_component__WEBPACK_IMPORTED_MODULE_2__["BsDaterangepickerContainerComponent"])
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (range) { return range && range[0] && !!range[1]; }))
            .subscribe(function (value) {
            _this.bsValue = value;
            _this.hide();
        }));
    };
    /**
     * Set config for daterangepicker
     */
    /**
       * Set config for daterangepicker
       */
    BsDaterangepickerDirective.prototype.setConfig = /**
       * Set config for daterangepicker
       */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate
        });
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
       * Closes an element’s datepicker. This is considered a “manual” triggering of
       * the datepicker.
       */
    BsDaterangepickerDirective.prototype.hide = /**
       * Closes an element’s datepicker. This is considered a “manual” triggering of
       * the datepicker.
       */
    function () {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    /**
       * Toggles an element’s datepicker. This is considered a “manual” triggering
       * of the datepicker.
       */
    BsDaterangepickerDirective.prototype.toggle = /**
       * Toggles an element’s datepicker. This is considered a “manual” triggering
       * of the datepicker.
       */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    BsDaterangepickerDirective.prototype.ngOnDestroy = function () {
        this._datepicker.dispose();
    };
    BsDaterangepickerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsDaterangepicker]',
                    exportAs: 'bsDaterangepicker'
                },] },
    ];
    /** @nocollapse */
    BsDaterangepickerDirective.ctorParameters = function () { return [
        { type: _bs_daterangepicker_config__WEBPACK_IMPORTED_MODULE_1__["BsDaterangepickerConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], },
    ]; };
    BsDaterangepickerDirective.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outsideClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "bsValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bsConfig": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "bsValueChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return BsDaterangepickerDirective;
}());

//# sourceMappingURL=bs-daterangepicker.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker.config.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker.config.js ***!
  \*****************************************************************************/
/*! exports provided: BsDaterangepickerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerConfig", function() { return BsDaterangepickerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-datepicker.config */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.config.js");
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


var BsDaterangepickerConfig = /** @class */ (function (_super) {
    __extends(BsDaterangepickerConfig, _super);
    function BsDaterangepickerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // DatepickerRenderOptions
        _this.displayMonths = 2;
        return _this;
    }
    BsDaterangepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return BsDaterangepickerConfig;
}(_bs_datepicker_config__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerConfig"]));

//# sourceMappingURL=bs-daterangepicker.config.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/bs-locale.service.js":
/*!*********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/bs-locale.service.js ***!
  \*********************************************************************/
/*! exports provided: BsLocaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsLocaleService", function() { return BsLocaleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");


var BsLocaleService = /** @class */ (function () {
    function BsLocaleService() {
        this._defaultLocale = 'en';
        this._locale = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._defaultLocale);
        this._localeChange = this._locale.asObservable();
    }
    Object.defineProperty(BsLocaleService.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsLocaleService.prototype, "localeChange", {
        get: function () {
            return this._localeChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsLocaleService.prototype, "currentLocale", {
        get: function () {
            return this._locale.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BsLocaleService.prototype.use = function (locale) {
        if (locale === this.currentLocale) {
            return;
        }
        this._locale.next(locale);
    };
    BsLocaleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return BsLocaleService;
}());

//# sourceMappingURL=bs-locale.service.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/date-formatter.js":
/*!******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/date-formatter.js ***!
  \******************************************************************/
/*! exports provided: DateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return DateFormatter; });
/* harmony import */ var _chronos_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chronos/format */ "../node_modules/ngx-bootstrap/chronos/format.js");

var DateFormatter = /** @class */ (function () {
    function DateFormatter() {
    }
    DateFormatter.prototype.format = function (date, format, locale) {
        return Object(_chronos_format__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, format, locale);
    };
    return DateFormatter;
}());

//# sourceMappingURL=date-formatter.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/datepicker-inner.component.js":
/*!******************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/datepicker-inner.component.js ***!
  \******************************************************************************/
/*! exports provided: DatePickerInnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerInnerComponent", function() { return DatePickerInnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-formatter */ "../node_modules/ngx-bootstrap/datepicker/date-formatter.js");


// const MIN_DATE:Date = void 0;
// const MAX_DATE:Date = void 0;
// const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/*
 const KEYS = {
 13: 'enter',
 32: 'space',
 33: 'pageup',
 34: 'pagedown',
 35: 'end',
 36: 'home',
 37: 'left',
 38: 'up',
 39: 'right',
 40: 'down'
 };
 */
var DatePickerInnerComponent = /** @class */ (function () {
    function DatePickerInnerComponent() {
        this.selectionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);
        this.stepDay = {};
        this.stepMonth = {};
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new _date_formatter__WEBPACK_IMPORTED_MODULE_1__["DateFormatter"]();
    }
    Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
        get: function () {
            return this._activeDate;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    // todo: add formatter value to Date object
    // todo: add formatter value to Date object
    DatePickerInnerComponent.prototype.ngOnInit = 
    // todo: add formatter value to Date object
    function () {
        // todo: use date for unique value
        this.uniqueId = "datepicker--" + Math.floor(Math.random() * 10000);
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    };
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    DatePickerInnerComponent.prototype.ngOnChanges = 
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    function (changes) {
        this.refreshView();
        this.checkIfActiveDateGotUpdated(changes.activeDate);
    };
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    DatePickerInnerComponent.prototype.checkIfActiveDateGotUpdated = 
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    function (activeDate) {
        if (activeDate && !activeDate.firstChange) {
            var previousValue = activeDate.previousValue;
            if (previousValue &&
                previousValue instanceof Date &&
                previousValue.getTime() !== activeDate.currentValue.getTime()) {
                this.activeDateChange.emit(this.activeDate);
            }
        }
    };
    DatePickerInnerComponent.prototype.setCompareHandler = function (handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    };
    DatePickerInnerComponent.prototype.compare = function (date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    };
    DatePickerInnerComponent.prototype.setRefreshViewHandler = function (handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    };
    DatePickerInnerComponent.prototype.refreshView = function () {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    };
    DatePickerInnerComponent.prototype.dateFilter = function (date, format) {
        return this.dateFormatter.format(date, format, this.locale);
    };
    DatePickerInnerComponent.prototype.isActive = function (dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    };
    DatePickerInnerComponent.prototype.createDateObject = function (date, format) {
        var dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.date = this.fixTimeZone(dateObject.date);
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    };
    DatePickerInnerComponent.prototype.split = function (arr, size) {
        var arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    };
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    DatePickerInnerComponent.prototype.fixTimeZone = 
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    function (date) {
        var hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    };
    DatePickerInnerComponent.prototype.select = function (date, isManual) {
        if (isManual === void 0) { isManual = true; }
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            }
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    };
    DatePickerInnerComponent.prototype.move = function (direction) {
        var expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep) {
            var year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            var month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
        }
    };
    DatePickerInnerComponent.prototype.toggleMode = function (_direction) {
        var direction = _direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    };
    DatePickerInnerComponent.prototype.getCustomClassForDate = function (date) {
        var _this = this;
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        var customClassObject = this.customClass.find(function (customClass) {
            return (customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === _this.datepickerMode);
        }, this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    };
    DatePickerInnerComponent.prototype.compareDateDisabled = function (date1Disabled, date2) {
        if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
        }
        if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
        }
        return undefined;
    };
    DatePickerInnerComponent.prototype.isDisabled = function (date) {
        var _this = this;
        var isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach(function (disabledDate) {
                if (_this.compareDateDisabled(disabledDate, date) === 0) {
                    isDateDisabled = true;
                }
            });
        }
        if (this.dayDisabled) {
            isDateDisabled =
                isDateDisabled ||
                    this.dayDisabled.indexOf(date.getDay()) > -1;
        }
        return (isDateDisabled ||
            (this.minDate && this.compare(date, this.minDate) < 0) ||
            (this.maxDate && this.compare(date, this.maxDate) > 0));
    };
    DatePickerInnerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datepicker-inner',
                    template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    DatePickerInnerComponent.propDecorators = {
        "locale": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "datepickerMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "startingDay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "yearRange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeeks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatDay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatMonth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatYear": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatDayHeader": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatDayTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatMonthTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onlyCurrentMonth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shortcutPropagation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "customClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "monthColLimit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "yearColLimit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dayDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "initDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectionDone": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "update": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "activeDateChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "activeDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return DatePickerInnerComponent;
}());

//# sourceMappingURL=datepicker-inner.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/datepicker.component.js":
/*!************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/datepicker.component.js ***!
  \************************************************************************/
/*! exports provided: DATEPICKER_CONTROL_VALUE_ACCESSOR, DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATEPICKER_CONTROL_VALUE_ACCESSOR", function() { return DATEPICKER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _datepicker_inner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker-inner.component */ "../node_modules/ngx-bootstrap/datepicker/datepicker-inner.component.js");
/* harmony import */ var _datepicker_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datepicker.config */ "../node_modules/ngx-bootstrap/datepicker/datepicker.config.js");




var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DatePickerComponent; }),
    multi: true
};
/* tslint:disable:component-selector-name component-selector-type */
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent(config) {
        /** sets datepicker mode, supports: `day`, `month`, `year` */
        this.datepickerMode = 'day';
        /** if false week numbers will be hidden */
        this.showWeeks = true;
        this.selectionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);
        /** callback to invoke when the activeDate is changed. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        get: /** currently active date */
        function () {
            return this._activeDate || this._now;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    DatePickerComponent.prototype.configureOptions = function () {
        Object.assign(this, this.config);
    };
    DatePickerComponent.prototype.onUpdate = function (event) {
        this.activeDate = event;
        this.onChange(event);
    };
    DatePickerComponent.prototype.onSelectionDone = function (event) {
        this.selectionDone.emit(event);
    };
    DatePickerComponent.prototype.onActiveDateChange = function (event) {
        this.activeDateChange.emit(event);
    };
    // todo: support null value
    // todo: support null value
    DatePickerComponent.prototype.writeValue = 
    // todo: support null value
    function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DatePickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datepicker',
                    template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () { return [
        { type: _datepicker_config__WEBPACK_IMPORTED_MODULE_3__["DatepickerConfig"], },
    ]; };
    DatePickerComponent.propDecorators = {
        "datepickerMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "initDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeeks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatDay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatMonth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatYear": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatDayHeader": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatDayTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatMonthTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "startingDay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "yearRange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onlyCurrentMonth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shortcutPropagation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "monthColLimit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "yearColLimit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "customClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dayDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "activeDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectionDone": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "activeDateChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "_datePicker": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_datepicker_inner_component__WEBPACK_IMPORTED_MODULE_2__["DatePickerInnerComponent"],] },],
    };
    return DatePickerComponent;
}());

//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/datepicker.config.js":
/*!*********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/datepicker.config.js ***!
  \*********************************************************************/
/*! exports provided: DatepickerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerConfig", function() { return DatepickerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var DatepickerConfig = /** @class */ (function () {
    function DatepickerConfig() {
        this.locale = 'en';
        this.datepickerMode = 'day';
        this.startingDay = 0;
        this.yearRange = 20;
        this.minMode = 'day';
        this.maxMode = 'year';
        this.showWeeks = true;
        this.formatDay = 'DD';
        this.formatMonth = 'MMMM';
        this.formatYear = 'YYYY';
        this.formatDayHeader = 'dd';
        this.formatDayTitle = 'MMMM YYYY';
        this.formatMonthTitle = 'YYYY';
        this.onlyCurrentMonth = false;
        this.monthColLimit = 3;
        this.yearColLimit = 5;
        this.shortcutPropagation = false;
    }
    DatepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return DatepickerConfig;
}());

//# sourceMappingURL=datepicker.config.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/datepicker.module.js":
/*!*********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/datepicker.module.js ***!
  \*********************************************************************/
/*! exports provided: DatepickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerModule", function() { return DatepickerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _datepicker_inner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datepicker-inner.component */ "../node_modules/ngx-bootstrap/datepicker/datepicker-inner.component.js");
/* harmony import */ var _datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datepicker.component */ "../node_modules/ngx-bootstrap/datepicker/datepicker.component.js");
/* harmony import */ var _datepicker_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker.config */ "../node_modules/ngx-bootstrap/datepicker/datepicker.config.js");
/* harmony import */ var _daypicker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./daypicker.component */ "../node_modules/ngx-bootstrap/datepicker/daypicker.component.js");
/* harmony import */ var _monthpicker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monthpicker.component */ "../node_modules/ngx-bootstrap/datepicker/monthpicker.component.js");
/* harmony import */ var _yearpicker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./yearpicker.component */ "../node_modules/ngx-bootstrap/datepicker/yearpicker.component.js");









var DatepickerModule = /** @class */ (function () {
    function DatepickerModule() {
    }
    DatepickerModule.forRoot = function () {
        return { ngModule: DatepickerModule, providers: [_datepicker_config__WEBPACK_IMPORTED_MODULE_5__["DatepickerConfig"]] };
    };
    DatepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                    declarations: [
                        _datepicker_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerComponent"],
                        _datepicker_inner_component__WEBPACK_IMPORTED_MODULE_3__["DatePickerInnerComponent"],
                        _daypicker_component__WEBPACK_IMPORTED_MODULE_6__["DayPickerComponent"],
                        _monthpicker_component__WEBPACK_IMPORTED_MODULE_7__["MonthPickerComponent"],
                        _yearpicker_component__WEBPACK_IMPORTED_MODULE_8__["YearPickerComponent"]
                    ],
                    exports: [
                        _datepicker_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerComponent"],
                        _datepicker_inner_component__WEBPACK_IMPORTED_MODULE_3__["DatePickerInnerComponent"],
                        _daypicker_component__WEBPACK_IMPORTED_MODULE_6__["DayPickerComponent"],
                        _monthpicker_component__WEBPACK_IMPORTED_MODULE_7__["MonthPickerComponent"],
                        _yearpicker_component__WEBPACK_IMPORTED_MODULE_8__["YearPickerComponent"]
                    ],
                    entryComponents: [_datepicker_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerComponent"]]
                },] },
    ];
    return DatepickerModule;
}());

//# sourceMappingURL=datepicker.module.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/daypicker.component.js":
/*!***********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/daypicker.component.js ***!
  \***********************************************************************/
/*! exports provided: DayPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayPickerComponent", function() { return DayPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/theme-provider */ "../node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var _datepicker_inner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker-inner.component */ "../node_modules/ngx-bootstrap/datepicker/datepicker-inner.component.js");



var DayPickerComponent = /** @class */ (function () {
    function DayPickerComponent(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
        get: function () {
            return !Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /*protected getDaysInMonth(year:number, month:number) {
     return ((month === 1) && (year % 4 === 0) &&
     ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
     }*/
    /*protected getDaysInMonth(year:number, month:number) {
       return ((month === 1) && (year % 4 === 0) &&
       ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
       }*/
    DayPickerComponent.prototype.ngOnInit = /*protected getDaysInMonth(year:number, month:number) {
       return ((month === 1) && (year % 4 === 0) &&
       ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
       }*/
    function () {
        var self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            var year = this.activeDate.getFullYear();
            var month = this.activeDate.getMonth();
            var firstDayOfMonth = new Date(year, month, 1);
            var difference = this.startingDay - firstDayOfMonth.getDay();
            var numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
            var firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            var _days = self.getDates(firstDate, 42);
            var days = [];
            for (var i = 0; i < 42; i++) {
                var _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (var j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                var thursdayIndex = (4 + 7 - this.startingDay) % 7;
                var numWeeks = self.rows.length;
                for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }, 'day');
        this.datePicker.setCompareHandler(function (date1, date2) {
            var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }, 'day');
        this.datePicker.refreshView();
    };
    DayPickerComponent.prototype.getDates = function (startDate, n) {
        var dates = new Array(n);
        var current = new Date(startDate.getTime());
        var i = 0;
        var date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
        return dates;
    };
    DayPickerComponent.prototype.getISO8601WeekNumber = function (date) {
        var checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
    };
    DayPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'daypicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                    styles: [
                        "\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "
                    ]
                },] },
    ];
    // todo: key events implementation
    /** @nocollapse */
    DayPickerComponent.ctorParameters = function () { return [
        { type: _datepicker_inner_component__WEBPACK_IMPORTED_MODULE_2__["DatePickerInnerComponent"], },
    ]; };
    return DayPickerComponent;
}());

//# sourceMappingURL=daypicker.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/engine/calc-days-calendar.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/engine/calc-days-calendar.js ***!
  \*****************************************************************************/
/*! exports provided: calcDaysCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcDaysCalendar", function() { return calcDaysCalendar; });
/* harmony import */ var _chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chronos/utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/bs-calendar-utils */ "../node_modules/ngx-bootstrap/datepicker/utils/bs-calendar-utils.js");
/* harmony import */ var _utils_matrix_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/matrix-utils */ "../node_modules/ngx-bootstrap/datepicker/utils/matrix-utils.js");



function calcDaysCalendar(startingDate, options) {
    var firstDay = Object(_chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getFirstDayOfMonth"])(startingDate);
    var initialDate = Object(_utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getStartingDayOfCalendar"])(firstDay, options);
    var matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate: initialDate,
        shift: { day: 1 }
    };
    var daysMatrix = Object(_utils_matrix_utils__WEBPACK_IMPORTED_MODULE_2__["createMatrix"])(matrixOptions, function (date) { return date; });
    return {
        daysMatrix: daysMatrix,
        month: firstDay
    };
}
//# sourceMappingURL=calc-days-calendar.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/engine/flag-days-calendar.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/engine/flag-days-calendar.js ***!
  \*****************************************************************************/
/*! exports provided: flagDaysCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flagDaysCalendar", function() { return flagDaysCalendar; });
/* harmony import */ var _chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chronos/utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chronos/utils/date-compare */ "../node_modules/ngx-bootstrap/chronos/utils/date-compare.js");
/* harmony import */ var _utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/bs-calendar-utils */ "../node_modules/ngx-bootstrap/datepicker/utils/bs-calendar-utils.js");
/* harmony import */ var _chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chronos/utils/date-setters */ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js");




function flagDaysCalendar(formattedMonth, options) {
    formattedMonth.weeks.forEach(function (week, weekIndex) {
        week.days.forEach(function (day, dayIndex) {
            // datepicker
            var isOtherMonth = !Object(_chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"])(day.date, formattedMonth.month);
            var isHovered = !isOtherMonth && Object(_chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["isSameDay"])(day.date, options.hoveredDate);
            // date range picker
            var isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                Object(_chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["isSameDay"])(day.date, options.selectedRange[0]);
            var isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                Object(_chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["isSameDay"])(day.date, options.selectedRange[1]);
            var isSelected = (!isOtherMonth && Object(_chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["isSameDay"])(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            var isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            var isDisabled = options.isDisabled ||
                Object(_chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_1__["isBefore"])(day.date, options.minDate, 'day') ||
                Object(_chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_1__["isAfter"])(day.date, options.maxDate, 'day');
            // decide update or not
            var newDay = Object.assign({}, day, {
                isOtherMonth: isOtherMonth,
                isHovered: isHovered,
                isSelected: isSelected,
                isSelectionStart: isSelectionStart,
                isSelectionEnd: isSelectionEnd,
                isInRange: isInRange,
                isDisabled: isDisabled
            });
            if (day.isOtherMonth !== newDay.isOtherMonth ||
                day.isHovered !== newDay.isHovered ||
                day.isSelected !== newDay.isSelected ||
                day.isSelectionStart !== newDay.isSelectionStart ||
                day.isSelectionEnd !== newDay.isSelectionEnd ||
                day.isDisabled !== newDay.isDisabled ||
                day.isInRange !== newDay.isInRange) {
                week.days[dayIndex] = newDay;
            }
        });
    });
    // todo: add check for linked calendars
    formattedMonth.hideLeftArrow =
        options.isDisabled ||
            (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
    formattedMonth.hideRightArrow =
        options.isDisabled ||
            (options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths);
    formattedMonth.disableLeftArrow = Object(_utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_2__["isMonthDisabled"])(Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
    formattedMonth.disableRightArrow = Object(_utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_2__["isMonthDisabled"])(Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_3__["shiftDate"])(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
    return formattedMonth;
}
function isDateInRange(date, selectedRange, hoveredDate) {
    if (!date || !selectedRange[0]) {
        return false;
    }
    if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
    }
    if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
    }
    return false;
}
//# sourceMappingURL=flag-days-calendar.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/engine/flag-months-calendar.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/engine/flag-months-calendar.js ***!
  \*******************************************************************************/
/*! exports provided: flagMonthsCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flagMonthsCalendar", function() { return flagMonthsCalendar; });
/* harmony import */ var _chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chronos/utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/bs-calendar-utils */ "../node_modules/ngx-bootstrap/datepicker/utils/bs-calendar-utils.js");
/* harmony import */ var _chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chronos/utils/date-setters */ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js");



function flagMonthsCalendar(monthCalendar, options) {
    monthCalendar.months.forEach(function (months, rowIndex) {
        months.forEach(function (month, monthIndex) {
            var isHovered = Object(_chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"])(month.date, options.hoveredMonth);
            var isDisabled = options.isDisabled ||
                Object(_utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_1__["isMonthDisabled"])(month.date, options.minDate, options.maxDate);
            var newMonth = Object.assign(/*{},*/ month, {
                isHovered: isHovered,
                isDisabled: isDisabled
            });
            if (month.isHovered !== newMonth.isHovered ||
                month.isDisabled !== newMonth.isDisabled) {
                monthCalendar.months[rowIndex][monthIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    monthCalendar.hideLeftArrow =
        options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
    monthCalendar.hideRightArrow =
        options.monthIndex < options.displayMonths &&
            options.monthIndex + 1 !== options.displayMonths;
    monthCalendar.disableLeftArrow = Object(_utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_1__["isYearDisabled"])(Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    monthCalendar.disableRightArrow = Object(_utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_1__["isYearDisabled"])(Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
    return monthCalendar;
}
//# sourceMappingURL=flag-months-calendar.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/engine/flag-years-calendar.js":
/*!******************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/engine/flag-years-calendar.js ***!
  \******************************************************************************/
/*! exports provided: flagYearsCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flagYearsCalendar", function() { return flagYearsCalendar; });
/* harmony import */ var _chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chronos/utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/bs-calendar-utils */ "../node_modules/ngx-bootstrap/datepicker/utils/bs-calendar-utils.js");
/* harmony import */ var _chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chronos/utils/date-setters */ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js");



function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach(function (years, rowIndex) {
        years.forEach(function (year, yearIndex) {
            var isHovered = Object(_chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["isSameYear"])(year.date, options.hoveredYear);
            var isDisabled = options.isDisabled ||
                Object(_utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_1__["isYearDisabled"])(year.date, options.minDate, options.maxDate);
            var newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = Object(_utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_1__["isYearDisabled"])(Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    var i = yearsCalendar.years.length - 1;
    var j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = Object(_utils_bs_calendar_utils__WEBPACK_IMPORTED_MODULE_1__["isYearDisabled"])(Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}
//# sourceMappingURL=flag-years-calendar.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/engine/format-days-calendar.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/engine/format-days-calendar.js ***!
  \*******************************************************************************/
/*! exports provided: formatDaysCalendar, getWeekNumbers, getShiftedWeekdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDaysCalendar", function() { return formatDaysCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekNumbers", function() { return getWeekNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShiftedWeekdays", function() { return getShiftedWeekdays; });
/* harmony import */ var _chronos_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chronos/format */ "../node_modules/ngx-bootstrap/chronos/format.js");
/* harmony import */ var _chronos_locale_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chronos/locale/locales */ "../node_modules/ngx-bootstrap/chronos/locale/locales.js");


function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
    return {
        month: daysCalendar.month,
        monthTitle: Object(_chronos_format__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
        yearTitle: Object(_chronos_format__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
        weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
        weekdays: getShiftedWeekdays(formatOptions.locale),
        weeks: daysCalendar.daysMatrix.map(function (week, weekIndex) {
            return ({
                days: week.map(function (date, dayIndex) {
                    return ({
                        date: date,
                        label: Object(_chronos_format__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, formatOptions.dayLabel, formatOptions.locale),
                        monthIndex: monthIndex,
                        weekIndex: weekIndex,
                        dayIndex: dayIndex
                    });
                })
            });
        })
    };
}
function getWeekNumbers(daysMatrix, format, locale) {
    return daysMatrix.map(function (days) { return (days[0] ? Object(_chronos_format__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(days[0], format, locale) : ''); });
}
function getShiftedWeekdays(locale) {
    var _locale = Object(_chronos_locale_locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"])(locale);
    var weekdays = _locale.weekdaysShort();
    var firstDayOfWeek = _locale.firstDayOfWeek();
    return weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
}
//# sourceMappingURL=format-days-calendar.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/engine/format-months-calendar.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/engine/format-months-calendar.js ***!
  \*********************************************************************************/
/*! exports provided: formatMonthsCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMonthsCalendar", function() { return formatMonthsCalendar; });
/* harmony import */ var _chronos_utils_start_end_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chronos/utils/start-end-of */ "../node_modules/ngx-bootstrap/chronos/utils/start-end-of.js");
/* harmony import */ var _chronos_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chronos/format */ "../node_modules/ngx-bootstrap/chronos/format.js");
/* harmony import */ var _utils_matrix_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/matrix-utils */ "../node_modules/ngx-bootstrap/datepicker/utils/matrix-utils.js");



var height = 4;
var width = 3;
var shift = { month: 1 };
function formatMonthsCalendar(viewDate, formatOptions) {
    var initialDate = Object(_chronos_utils_start_end_of__WEBPACK_IMPORTED_MODULE_0__["startOf"])(viewDate, 'year');
    var matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    var monthMatrix = Object(_utils_matrix_utils__WEBPACK_IMPORTED_MODULE_2__["createMatrix"])(matrixOptions, function (date) {
        return ({
            date: date,
            label: Object(_chronos_format__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, formatOptions.monthLabel, formatOptions.locale)
        });
    });
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: Object(_chronos_format__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(viewDate, formatOptions.yearTitle, formatOptions.locale)
    };
}
//# sourceMappingURL=format-months-calendar.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/engine/format-years-calendar.js":
/*!********************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/engine/format-years-calendar.js ***!
  \********************************************************************************/
/*! exports provided: yearsPerCalendar, formatYearsCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearsPerCalendar", function() { return yearsPerCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatYearsCalendar", function() { return formatYearsCalendar; });
/* harmony import */ var _chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chronos/utils/date-setters */ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var _chronos_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chronos/format */ "../node_modules/ngx-bootstrap/chronos/format.js");
/* harmony import */ var _utils_matrix_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/matrix-utils */ "../node_modules/ngx-bootstrap/datepicker/utils/matrix-utils.js");



var height = 4;
var width = 4;
var yearsPerCalendar = height * width;
var initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
var shift = { year: 1 };
function formatYearsCalendar(viewDate, formatOptions) {
    var initialDate = Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_0__["shiftDate"])(viewDate, { year: initialShift });
    var matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    var yearsMatrix = Object(_utils_matrix_utils__WEBPACK_IMPORTED_MODULE_2__["createMatrix"])(matrixOptions, function (date) {
        return ({
            date: date,
            label: Object(_chronos_format__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, formatOptions.yearLabel, formatOptions.locale)
        });
    });
    var yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle: yearTitle
    };
}
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    var from = Object(_chronos_format__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    var to = Object(_chronos_format__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(yearsMatrix[height - 1][width - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return from + " - " + to;
}
//# sourceMappingURL=format-years-calendar.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/engine/view-mode.js":
/*!********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/engine/view-mode.js ***!
  \********************************************************************/
/*! exports provided: canSwitchMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canSwitchMode", function() { return canSwitchMode; });
function canSwitchMode(mode) {
    return true;
}
//# sourceMappingURL=view-mode.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/index.js ***!
  \*********************************************************/
/*! exports provided: DatePickerComponent, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, DateFormatter, DatepickerConfig, BsDatepickerModule, BsDatepickerDirective, BsDaterangepickerDirective, BsDatepickerConfig, BsDaterangepickerConfig, BsLocaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datepicker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datepicker.component */ "../node_modules/ngx-bootstrap/datepicker/datepicker.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return _datepicker_component__WEBPACK_IMPORTED_MODULE_0__["DatePickerComponent"]; });

/* harmony import */ var _datepicker_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker.module */ "../node_modules/ngx-bootstrap/datepicker/datepicker.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerModule", function() { return _datepicker_module__WEBPACK_IMPORTED_MODULE_1__["DatepickerModule"]; });

/* harmony import */ var _daypicker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daypicker.component */ "../node_modules/ngx-bootstrap/datepicker/daypicker.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayPickerComponent", function() { return _daypicker_component__WEBPACK_IMPORTED_MODULE_2__["DayPickerComponent"]; });

/* harmony import */ var _monthpicker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monthpicker.component */ "../node_modules/ngx-bootstrap/datepicker/monthpicker.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return _monthpicker_component__WEBPACK_IMPORTED_MODULE_3__["MonthPickerComponent"]; });

/* harmony import */ var _yearpicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./yearpicker.component */ "../node_modules/ngx-bootstrap/datepicker/yearpicker.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearPickerComponent", function() { return _yearpicker_component__WEBPACK_IMPORTED_MODULE_4__["YearPickerComponent"]; });

/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-formatter */ "../node_modules/ngx-bootstrap/datepicker/date-formatter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return _date_formatter__WEBPACK_IMPORTED_MODULE_5__["DateFormatter"]; });

/* harmony import */ var _datepicker_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepicker.config */ "../node_modules/ngx-bootstrap/datepicker/datepicker.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerConfig", function() { return _datepicker_config__WEBPACK_IMPORTED_MODULE_6__["DatepickerConfig"]; });

/* harmony import */ var _bs_datepicker_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bs-datepicker.module */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerModule", function() { return _bs_datepicker_module__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"]; });

/* harmony import */ var _bs_datepicker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bs-datepicker.component */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerDirective", function() { return _bs_datepicker_component__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerDirective"]; });

/* harmony import */ var _bs_daterangepicker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bs-daterangepicker.component */ "../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerDirective", function() { return _bs_daterangepicker_component__WEBPACK_IMPORTED_MODULE_9__["BsDaterangepickerDirective"]; });

/* harmony import */ var _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bs-datepicker.config */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerConfig", function() { return _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerConfig"]; });

/* harmony import */ var _bs_daterangepicker_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bs-daterangepicker.config */ "../node_modules/ngx-bootstrap/datepicker/bs-daterangepicker.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerConfig", function() { return _bs_daterangepicker_config__WEBPACK_IMPORTED_MODULE_11__["BsDaterangepickerConfig"]; });

/* harmony import */ var _bs_locale_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bs-locale.service */ "../node_modules/ngx-bootstrap/datepicker/bs-locale.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsLocaleService", function() { return _bs_locale_service__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"]; });














//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/models/index.js":
/*!****************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/models/index.js ***!
  \****************************************************************/
/*! exports provided: BsNavigationDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsNavigationDirection", function() { return BsNavigationDirection; });
/** *************** */
// events
/** *************** */
/** *************** */
// events
/** *************** */
var BsNavigationDirection;
/** *************** */
// events
/** *************** */
(function (BsNavigationDirection) {
    BsNavigationDirection[BsNavigationDirection["UP"] = 0] = "UP";
    BsNavigationDirection[BsNavigationDirection["DOWN"] = 1] = "DOWN";
})(BsNavigationDirection || (BsNavigationDirection = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/monthpicker.component.js":
/*!*************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/monthpicker.component.js ***!
  \*************************************************************************/
/*! exports provided: MonthPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return MonthPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/theme-provider */ "../node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var _datepicker_inner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker-inner.component */ "../node_modules/ngx-bootstrap/datepicker/datepicker-inner.component.js");



var MonthPickerComponent = /** @class */ (function () {
    function MonthPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
        get: function () {
            return !Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    MonthPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepMonth = { years: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            var months = new Array(12);
            var year = this.activeDate.getFullYear();
            var date;
            for (var i = 0; i < 12; i++) {
                date = new Date(year, i, 1);
                date = this.fixTimeZone(date);
                months[i] = this.createDateObject(date, this.formatMonth);
                months[i].uid = this.uniqueId + '-' + i;
            }
            self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
            self.rows = this.split(months, self.datePicker.monthColLimit);
        }, 'month');
        this.datePicker.setCompareHandler(function (date1, date2) {
            var d1 = new Date(date1.getFullYear(), date1.getMonth());
            var d2 = new Date(date2.getFullYear(), date2.getMonth());
            return d1.getTime() - d2.getTime();
        }, 'month');
        this.datePicker.refreshView();
    };
    MonthPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'monthpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong> \n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: [
                        "\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "
                    ]
                },] },
    ];
    // todo: key events implementation
    /** @nocollapse */
    MonthPickerComponent.ctorParameters = function () { return [
        { type: _datepicker_inner_component__WEBPACK_IMPORTED_MODULE_2__["DatePickerInnerComponent"], },
    ]; };
    return MonthPickerComponent;
}());

//# sourceMappingURL=monthpicker.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/reducer/_defaults.js":
/*!*********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/reducer/_defaults.js ***!
  \*********************************************************************/
/*! exports provided: defaultMonthOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMonthOptions", function() { return defaultMonthOptions; });
var defaultMonthOptions = {
    width: 7,
    height: 6
};
//# sourceMappingURL=_defaults.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js ***!
  \*********************************************************************************/
/*! exports provided: BsDatepickerActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerActions", function() { return BsDatepickerActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var BsDatepickerActions = /** @class */ (function () {
    function BsDatepickerActions() {
    }
    BsDatepickerActions.prototype.calculate = function () {
        return { type: BsDatepickerActions.CALCULATE };
    };
    BsDatepickerActions.prototype.format = function () {
        return { type: BsDatepickerActions.FORMAT };
    };
    BsDatepickerActions.prototype.flag = function () {
        return { type: BsDatepickerActions.FLAG };
    };
    BsDatepickerActions.prototype.select = function (date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    };
    BsDatepickerActions.prototype.changeViewMode = function (event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    };
    BsDatepickerActions.prototype.navigateTo = function (event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    };
    BsDatepickerActions.prototype.navigateStep = function (step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    };
    BsDatepickerActions.prototype.setOptions = function (options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    };
    // date range picker
    // date range picker
    BsDatepickerActions.prototype.selectRange = 
    // date range picker
    function (value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    };
    BsDatepickerActions.prototype.hoverDay = function (event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    };
    BsDatepickerActions.prototype.minDate = function (date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    };
    BsDatepickerActions.prototype.maxDate = function (date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    };
    BsDatepickerActions.prototype.isDisabled = function (value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    };
    BsDatepickerActions.prototype.setLocale = function (locale) {
        return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
        };
    };
    BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
    BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
    BsDatepickerActions.FLAG = '[datepicker] set flags';
    BsDatepickerActions.SELECT = '[datepicker] select date';
    BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
    BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
    BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
    BsDatepickerActions.HOVER = '[datepicker] hover date';
    BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
    BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
    BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
    BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
    BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
    BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
    BsDatepickerActions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return BsDatepickerActions;
}());

//# sourceMappingURL=bs-datepicker.actions.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.effects.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.effects.js ***!
  \*********************************************************************************/
/*! exports provided: BsDatepickerEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerEffects", function() { return BsDatepickerEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chronos/utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs-datepicker.actions */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js");
/* harmony import */ var _bs_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bs-locale.service */ "../node_modules/ngx-bootstrap/datepicker/bs-locale.service.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");





var BsDatepickerEffects = /** @class */ (function () {
    function BsDatepickerEffects(_actions, _localeService) {
        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
    }
    BsDatepickerEffects.prototype.init = function (_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    };
    /** setters */
    /** setters */
    BsDatepickerEffects.prototype.setValue = /** setters */
    function (value) {
        this._store.dispatch(this._actions.select(value));
    };
    BsDatepickerEffects.prototype.setRangeValue = function (value) {
        this._store.dispatch(this._actions.selectRange(value));
    };
    BsDatepickerEffects.prototype.setMinDate = function (value) {
        this._store.dispatch(this._actions.minDate(value));
        return this;
    };
    BsDatepickerEffects.prototype.setMaxDate = function (value) {
        this._store.dispatch(this._actions.maxDate(value));
        return this;
    };
    BsDatepickerEffects.prototype.setDisabled = function (value) {
        this._store.dispatch(this._actions.isDisabled(value));
        return this;
    };
    /* Set rendering options */
    /* Set rendering options */
    BsDatepickerEffects.prototype.setOptions = /* Set rendering options */
    function (_config) {
        var _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
        this._store.dispatch(this._actions.setOptions(_options));
        return this;
    };
    /** view to mode bindings */
    /** view to mode bindings */
    BsDatepickerEffects.prototype.setBindings = /** view to mode bindings */
    function (container) {
        container.daysCalendar = this._store
            .select(function (state) { return state.flaggedMonths; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (months) { return !!months; }));
        // month calendar
        container.monthsCalendar = this._store
            .select(function (state) { return state.flaggedMonthsCalendar; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (months) { return !!months; }));
        // year calendar
        container.yearsCalendar = this._store
            .select(function (state) { return state.yearsCalendarFlagged; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (years) { return !!years; }));
        container.viewMode = this._store.select(function (state) { return state.view.mode; });
        container.options = this._store
            .select(function (state) { return state.showWeekNumbers; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (showWeekNumbers) { return ({ showWeekNumbers: showWeekNumbers }); }));
        return this;
    };
    /** event handlers */
    /** event handlers */
    BsDatepickerEffects.prototype.setEventHandlers = /** event handlers */
    function (container) {
        var _this = this;
        container.setViewMode = function (event) {
            _this._store.dispatch(_this._actions.changeViewMode(event));
        };
        container.navigateTo = function (event) {
            _this._store.dispatch(_this._actions.navigateStep(event.step));
        };
        container.dayHoverHandler = function (event) {
            var _cell = event.cell;
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        };
        container.monthHoverHandler = function (event) {
            event.cell.isHovered = event.isHovered;
        };
        container.yearHoverHandler = function (event) {
            event.cell.isHovered = event.isHovered;
        };
        /** select handlers */
        // container.daySelectHandler = (day: DayViewModel): void => {
        //   if (day.isOtherMonth || day.isDisabled) {
        //     return;
        //   }
        //   this._store.dispatch(this._actions.select(day.date));
        // };
        container.monthSelectHandler = function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: { month: Object(_chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(event.date) },
                viewMode: 'day'
            }));
        };
        container.yearSelectHandler = function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: { year: Object(_chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getFullYear"])(event.date) },
                viewMode: 'month'
            }));
        };
        return this;
    };
    BsDatepickerEffects.prototype.registerDatepickerSideEffects = function () {
        var _this = this;
        this._subs.push(this._store.select(function (state) { return state.view; }).subscribe(function (view) {
            _this._store.dispatch(_this._actions.calculate());
        }));
        // format calendar values on month model change
        this._subs.push(this._store
            .select(function (state) { return state.monthsModel; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (monthModel) { return !!monthModel; }))
            .subscribe(function (month) { return _this._store.dispatch(_this._actions.format()); }));
        // flag day values
        this._subs.push(this._store
            .select(function (state) { return state.formattedMonths; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (month) { return !!month; }))
            .subscribe(function (month) { return _this._store.dispatch(_this._actions.flag()); }));
        // flag day values
        this._subs.push(this._store
            .select(function (state) { return state.selectedDate; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (selectedDate) { return !!selectedDate; }))
            .subscribe(function (selectedDate) { return _this._store.dispatch(_this._actions.flag()); }));
        // flag for date range picker
        this._subs.push(this._store
            .select(function (state) { return state.selectedRange; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (selectedRange) { return !!selectedRange; }))
            .subscribe(function (selectedRange) { return _this._store.dispatch(_this._actions.flag()); }));
        // monthsCalendar
        this._subs.push(this._store
            .select(function (state) { return state.monthsCalendar; })
            .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
        // years calendar
        this._subs.push(this._store
            .select(function (state) { return state.yearsCalendarModel; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (state) { return !!state; }))
            .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
        // on hover
        this._subs.push(this._store
            .select(function (state) { return state.hoveredDate; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (hoveredDate) { return !!hoveredDate; }))
            .subscribe(function (hoveredDate) { return _this._store.dispatch(_this._actions.flag()); }));
        // on locale change
        this._subs.push(this._localeService.localeChange
            .subscribe(function (locale) { return _this._store.dispatch(_this._actions.setLocale(locale)); }));
        return this;
    };
    BsDatepickerEffects.prototype.destroy = function () {
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    BsDatepickerEffects.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    BsDatepickerEffects.ctorParameters = function () { return [
        { type: _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerActions"], },
        { type: _bs_locale_service__WEBPACK_IMPORTED_MODULE_3__["BsLocaleService"], },
    ]; };
    return BsDatepickerEffects;
}());

//# sourceMappingURL=bs-datepicker.effects.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.reducer.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.reducer.js ***!
  \*********************************************************************************/
/*! exports provided: bsDatepickerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bsDatepickerReducer", function() { return bsDatepickerReducer; });
/* harmony import */ var _bs_datepicker_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs-datepicker.state */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.state.js");
/* harmony import */ var _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-datepicker.actions */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js");
/* harmony import */ var _engine_calc_days_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../engine/calc-days-calendar */ "../node_modules/ngx-bootstrap/datepicker/engine/calc-days-calendar.js");
/* harmony import */ var _engine_format_days_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../engine/format-days-calendar */ "../node_modules/ngx-bootstrap/datepicker/engine/format-days-calendar.js");
/* harmony import */ var _engine_flag_days_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../engine/flag-days-calendar */ "../node_modules/ngx-bootstrap/datepicker/engine/flag-days-calendar.js");
/* harmony import */ var _chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chronos/utils/date-setters */ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var _engine_view_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../engine/view-mode */ "../node_modules/ngx-bootstrap/datepicker/engine/view-mode.js");
/* harmony import */ var _engine_format_months_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../engine/format-months-calendar */ "../node_modules/ngx-bootstrap/datepicker/engine/format-months-calendar.js");
/* harmony import */ var _engine_flag_months_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../engine/flag-months-calendar */ "../node_modules/ngx-bootstrap/datepicker/engine/flag-months-calendar.js");
/* harmony import */ var _engine_format_years_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../engine/format-years-calendar */ "../node_modules/ngx-bootstrap/datepicker/engine/format-years-calendar.js");
/* harmony import */ var _engine_flag_years_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../engine/flag-years-calendar */ "../node_modules/ngx-bootstrap/datepicker/engine/flag-years-calendar.js");
/* harmony import */ var _chronos_utils_type_checks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../chronos/utils/type-checks */ "../node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _chronos_utils_start_end_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../chronos/utils/start-end-of */ "../node_modules/ngx-bootstrap/chronos/utils/start-end-of.js");
/* harmony import */ var _chronos_locale_locales__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../chronos/locale/locales */ "../node_modules/ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var _chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../chronos/utils/date-compare */ "../node_modules/ngx-bootstrap/chronos/utils/date-compare.js");















function bsDatepickerReducer(state, action) {
    if (state === void 0) { state = _bs_datepicker_state__WEBPACK_IMPORTED_MODULE_0__["initialDatepickerState"]; }
    switch (action.type) {
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].CALCULATE: {
            return calculateReducer(state);
        }
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].FORMAT: {
            return formatReducer(state, action);
        }
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].FLAG: {
            return flagReducer(state, action);
        }
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].NAVIGATE_OFFSET: {
            var date = Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_5__["shiftDate"])(Object(_chronos_utils_start_end_of__WEBPACK_IMPORTED_MODULE_12__["startOf"])(state.view.date, 'month'), action.payload);
            var newState = {
                view: {
                    mode: state.view.mode,
                    date: date
                }
            };
            return Object.assign({}, state, newState);
        }
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].NAVIGATE_TO: {
            var payload = action.payload;
            var date = Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_5__["setFullDate"])(state.view.date, payload.unit);
            var mode = payload.viewMode;
            var newState = { view: { date: date, mode: mode } };
            return Object.assign({}, state, newState);
        }
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].CHANGE_VIEWMODE: {
            if (!Object(_engine_view_mode__WEBPACK_IMPORTED_MODULE_6__["canSwitchMode"])(action.payload)) {
                return state;
            }
            var date = state.view.date;
            var mode = action.payload;
            var newState = { view: { date: date, mode: mode } };
            return Object.assign({}, state, newState);
        }
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].HOVER: {
            return Object.assign({}, state, { hoveredDate: action.payload });
        }
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].SELECT: {
            var newState = {
                selectedDate: action.payload,
                view: state.view
            };
            var mode = state.view.mode;
            var _date = action.payload || state.view.date;
            var date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode: mode, date: date };
            return Object.assign({}, state, newState);
        }
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].SET_OPTIONS: {
            var newState = action.payload;
            // preserve view mode
            var mode = state.view.mode;
            var _viewDate = Object(_chronos_utils_type_checks__WEBPACK_IMPORTED_MODULE_11__["isDateValid"])(newState.value) && newState.value
                || Object(_chronos_utils_type_checks__WEBPACK_IMPORTED_MODULE_11__["isArray"])(newState.value) && Object(_chronos_utils_type_checks__WEBPACK_IMPORTED_MODULE_11__["isDateValid"])(newState.value[0]) && newState.value[0]
                || state.view.date;
            var date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
            newState.view = { mode: mode, date: date };
            // update selected value
            if (newState.value) {
                // if new value is array we work with date range
                if (Object(_chronos_utils_type_checks__WEBPACK_IMPORTED_MODULE_11__["isArray"])(newState.value)) {
                    newState.selectedRange = newState.value;
                }
                // if new value is a date -> datepicker
                if (newState.value instanceof Date) {
                    newState.selectedDate = newState.value;
                }
                // provided value is not supported :)
                // need to report it somehow
            }
            return Object.assign({}, state, newState);
        }
        // date range picker
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].SELECT_RANGE: {
            var newState = {
                selectedRange: action.payload,
                view: state.view
            };
            var mode = state.view.mode;
            var _date = action.payload && action.payload[0] || state.view.date;
            var date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode: mode, date: date };
            return Object.assign({}, state, newState);
        }
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].SET_MIN_DATE: {
            return Object.assign({}, state, {
                minDate: action.payload
            });
        }
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].SET_MAX_DATE: {
            return Object.assign({}, state, {
                maxDate: action.payload
            });
        }
        case _bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerActions"].SET_IS_DISABLED: {
            return Object.assign({}, state, {
                isDisabled: action.payload
            });
        }
        default:
            return state;
    }
}
function calculateReducer(state) {
    // how many calendars
    var displayMonths = state.displayMonths;
    // use selected date on initial rendering if set
    var viewDate = state.view.date;
    if (state.view.mode === 'day') {
        state.monthViewOptions.firstDayOfWeek = Object(_chronos_locale_locales__WEBPACK_IMPORTED_MODULE_13__["getLocale"])(state.locale).firstDayOfWeek();
        var monthsModel = new Array(displayMonths);
        for (var monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsModel[monthIndex] = Object(_engine_calc_days_calendar__WEBPACK_IMPORTED_MODULE_2__["calcDaysCalendar"])(viewDate, state.monthViewOptions);
            viewDate = Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_5__["shiftDate"])(viewDate, { month: 1 });
        }
        return Object.assign({}, state, { monthsModel: monthsModel });
    }
    if (state.view.mode === 'month') {
        var monthsCalendar = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = Object(_engine_format_months_calendar__WEBPACK_IMPORTED_MODULE_7__["formatMonthsCalendar"])(viewDate, getFormatOptions(state));
            viewDate = Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_5__["shiftDate"])(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        var yearsCalendarModel = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = Object(_engine_format_years_calendar__WEBPACK_IMPORTED_MODULE_9__["formatYearsCalendar"])(viewDate, getFormatOptions(state));
            viewDate = Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_5__["shiftDate"])(viewDate, { year: _engine_format_years_calendar__WEBPACK_IMPORTED_MODULE_9__["yearsPerCalendar"] });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
function formatReducer(state, action) {
    if (state.view.mode === 'day') {
        var formattedMonths = state.monthsModel.map(function (month, monthIndex) {
            return Object(_engine_format_days_calendar__WEBPACK_IMPORTED_MODULE_3__["formatDaysCalendar"])(month, getFormatOptions(state), monthIndex);
        });
        return Object.assign({}, state, { formattedMonths: formattedMonths });
    }
    // how many calendars
    var displayMonths = state.displayMonths;
    // check initial rendering
    // use selected date on initial rendering if set
    var viewDate = state.view.date;
    if (state.view.mode === 'month') {
        var monthsCalendar = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = Object(_engine_format_months_calendar__WEBPACK_IMPORTED_MODULE_7__["formatMonthsCalendar"])(viewDate, getFormatOptions(state));
            viewDate = Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_5__["shiftDate"])(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        var yearsCalendarModel = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = Object(_engine_format_years_calendar__WEBPACK_IMPORTED_MODULE_9__["formatYearsCalendar"])(viewDate, getFormatOptions(state));
            viewDate = Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_5__["shiftDate"])(viewDate, { year: 16 });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
function flagReducer(state, action) {
    if (state.view.mode === 'day') {
        var flaggedMonths = state.formattedMonths.map(function (formattedMonth, monthIndex) {
            return Object(_engine_flag_days_calendar__WEBPACK_IMPORTED_MODULE_4__["flagDaysCalendar"])(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredDate: state.hoveredDate,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        });
        return Object.assign({}, state, { flaggedMonths: flaggedMonths });
    }
    if (state.view.mode === 'month') {
        var flaggedMonthsCalendar = state.monthsCalendar.map(function (formattedMonth, monthIndex) {
            return Object(_engine_flag_months_calendar__WEBPACK_IMPORTED_MODULE_8__["flagMonthsCalendar"])(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredMonth: state.hoveredMonth,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        });
        return Object.assign({}, state, { flaggedMonthsCalendar: flaggedMonthsCalendar });
    }
    if (state.view.mode === 'year') {
        var yearsCalendarFlagged = state.yearsCalendarModel.map(function (formattedMonth, yearIndex) {
            return Object(_engine_flag_years_calendar__WEBPACK_IMPORTED_MODULE_10__["flagYearsCalendar"])(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredYear: state.hoveredYear,
                displayMonths: state.displayMonths,
                yearIndex: yearIndex
            });
        });
        return Object.assign({}, state, { yearsCalendarFlagged: yearsCalendarFlagged });
    }
    return state;
}
function getFormatOptions(state) {
    return {
        locale: state.locale,
        monthTitle: state.monthTitle,
        yearTitle: state.yearTitle,
        dayLabel: state.dayLabel,
        monthLabel: state.monthLabel,
        yearLabel: state.yearLabel,
        weekNumbers: state.weekNumbers
    };
}
/**
 * if view date is provided (bsValue|ngModel) it should be shown
 * if view date is not provider:
 * if minDate>currentDate (default view value), show minDate
 * if maxDate<currentDate(default view value) show maxDate
 */
function getViewDate(viewDate, minDate, maxDate) {
    var _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
    if (minDate && Object(_chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_14__["isAfter"])(minDate, _date, 'day')) {
        return minDate;
    }
    if (maxDate && Object(_chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_14__["isBefore"])(maxDate, _date, 'day')) {
        return maxDate;
    }
    return _date;
}
//# sourceMappingURL=bs-datepicker.reducer.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.state.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.state.js ***!
  \*******************************************************************************/
/*! exports provided: BsDatepickerState, initialDatepickerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerState", function() { return BsDatepickerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialDatepickerState", function() { return initialDatepickerState; });
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defaults */ "../node_modules/ngx-bootstrap/datepicker/reducer/_defaults.js");
/* harmony import */ var _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bs-datepicker.config */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.config.js");


var BsDatepickerState = /** @class */ (function () {
    function BsDatepickerState() {
    }
    return BsDatepickerState;
}());

var _initialView = { date: new Date(), mode: 'day' };
var initialDatepickerState = Object.assign(new _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerConfig"](), {
    locale: 'en',
    view: _initialView,
    selectedRange: [],
    monthViewOptions: _defaults__WEBPACK_IMPORTED_MODULE_0__["defaultMonthOptions"]
});
//# sourceMappingURL=bs-datepicker.state.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.store.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.store.js ***!
  \*******************************************************************************/
/*! exports provided: BsDatepickerStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerStore", function() { return BsDatepickerStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mini_ngrx_store_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mini-ngrx/store.class */ "../node_modules/ngx-bootstrap/mini-ngrx/store.class.js");
/* harmony import */ var _bs_datepicker_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs-datepicker.state */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.state.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mini_ngrx_state_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mini-ngrx/state.class */ "../node_modules/ngx-bootstrap/mini-ngrx/state.class.js");
/* harmony import */ var _bs_datepicker_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bs-datepicker.reducer */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.reducer.js");
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






var BsDatepickerStore = /** @class */ (function (_super) {
    __extends(BsDatepickerStore, _super);
    function BsDatepickerStore() {
        var _this = this;
        var _dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            type: '[datepicker] dispatcher init'
        });
        var state = new _mini_ngrx_state_class__WEBPACK_IMPORTED_MODULE_4__["MiniState"](_bs_datepicker_state__WEBPACK_IMPORTED_MODULE_2__["initialDatepickerState"], _dispatcher, _bs_datepicker_reducer__WEBPACK_IMPORTED_MODULE_5__["bsDatepickerReducer"]);
        _this = _super.call(this, _dispatcher, _bs_datepicker_reducer__WEBPACK_IMPORTED_MODULE_5__["bsDatepickerReducer"], state) || this;
        return _this;
    }
    BsDatepickerStore.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    BsDatepickerStore.ctorParameters = function () { return []; };
    return BsDatepickerStore;
}(_mini_ngrx_store_class__WEBPACK_IMPORTED_MODULE_1__["MiniStore"]));

//# sourceMappingURL=bs-datepicker.store.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-calendar-layout.component.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-calendar-layout.component.js ***!
  \******************************************************************************************/
/*! exports provided: BsCalendarLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsCalendarLayoutComponent", function() { return BsCalendarLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var BsCalendarLayoutComponent = /** @class */ (function () {
    function BsCalendarLayoutComponent() {
    }
    BsCalendarLayoutComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-calendar-layout',
                    template: "\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "
                },] },
    ];
    return BsCalendarLayoutComponent;
}());

//# sourceMappingURL=bs-calendar-layout.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-current-date-view.component.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-current-date-view.component.js ***!
  \********************************************************************************************/
/*! exports provided: BsCurrentDateViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsCurrentDateViewComponent", function() { return BsCurrentDateViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var BsCurrentDateViewComponent = /** @class */ (function () {
    function BsCurrentDateViewComponent() {
    }
    BsCurrentDateViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-current-date',
                    template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
                },] },
    ];
    /** @nocollapse */
    BsCurrentDateViewComponent.propDecorators = {
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return BsCurrentDateViewComponent;
}());

//# sourceMappingURL=bs-current-date-view.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-custom-dates-view.component.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-custom-dates-view.component.js ***!
  \********************************************************************************************/
/*! exports provided: BsCustomDatesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsCustomDatesViewComponent", function() { return BsCustomDatesViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var BsCustomDatesViewComponent = /** @class */ (function () {
    function BsCustomDatesViewComponent() {
    }
    BsCustomDatesViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-custom-date-view',
                    template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\">Custom Range</button>\n    </div>\n  ",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    BsCustomDatesViewComponent.propDecorators = {
        "isCustomRangeShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ranges": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return BsCustomDatesViewComponent;
}());

//# sourceMappingURL=bs-custom-dates-view.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-datepicker-container.component.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-datepicker-container.component.js ***!
  \***********************************************************************************************/
/*! exports provided: BsDatepickerContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerContainerComponent", function() { return BsDatepickerContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_bs_datepicker_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/bs-datepicker-container */ "../node_modules/ngx-bootstrap/datepicker/base/bs-datepicker-container.js");
/* harmony import */ var _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bs-datepicker.config */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.config.js");
/* harmony import */ var _reducer_bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducer/bs-datepicker.actions */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js");
/* harmony import */ var _reducer_bs_datepicker_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducer/bs-datepicker.effects */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.effects.js");
/* harmony import */ var _reducer_bs_datepicker_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducer/bs-datepicker.store */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.store.js");
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






var BsDatepickerContainerComponent = /** @class */ (function (_super) {
    __extends(BsDatepickerContainerComponent, _super);
    function BsDatepickerContainerComponent(_config, _store, _actions, _effects) {
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._store = _store;
        _this._actions = _actions;
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this._subs = [];
        _this._effects = _effects;
        return _this;
    }
    Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
        set: function (value) {
            this._effects.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDatepickerContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.containerClass = this._config.containerClass;
        this._effects
            .init(this._store)
            .setOptions(this._config)
            .setBindings(this)
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select(function (state) { return state.selectedDate; })
            .subscribe(function (date) { return _this.valueChange.emit(date); }));
    };
    BsDatepickerContainerComponent.prototype.daySelectHandler = function (day) {
        if (day.isOtherMonth || day.isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    };
    BsDatepickerContainerComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._effects.destroy();
    };
    BsDatepickerContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-datepicker-container',
                    providers: [_reducer_bs_datepicker_store__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerStore"], _reducer_bs_datepicker_effects__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerEffects"]],
                    template: "<!-- days calendar view mode --> <div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\"> <div class=\"bs-datepicker-container\"> <!--calendars--> <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\"> <!--days calendar--> <div *ngSwitchCase=\"'day'\"> <bs-days-calendar-view *ngFor=\"let calendar of (daysCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\" [calendar]=\"calendar\" [options]=\"options | async\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"dayHoverHandler($event)\" (onSelect)=\"daySelectHandler($event)\" ></bs-days-calendar-view> </div> <!--months calendar--> <div *ngSwitchCase=\"'month'\"> <bs-month-calendar-view *ngFor=\"let calendar of (monthsCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\" [calendar]=\"calendar\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"monthHoverHandler($event)\" (onSelect)=\"monthSelectHandler($event)\" ></bs-month-calendar-view> </div> <!--years calendar--> <div *ngSwitchCase=\"'year'\"> <bs-years-calendar-view *ngFor=\"let calendar of (yearsCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\" [calendar]=\"calendar\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"yearHoverHandler($event)\" (onSelect)=\"yearSelectHandler($event)\" ></bs-years-calendar-view> </div> </div> <!--applycancel buttons--> <div class=\"bs-datepicker-buttons\" *ngIf=\"false\"> <button class=\"btn btn-success\">Apply</button> <button class=\"btn btn-default\">Cancel</button> </div> </div> <!--custom dates or date ranges picker--> <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\"> <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view> </div> </div> ",
                    host: {
                        '(click)': '_stopPropagation($event)',
                        style: 'position: absolute; display: block;',
                        role: 'dialog',
                        'aria-label': 'calendar'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDatepickerContainerComponent.ctorParameters = function () { return [
        { type: _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerConfig"], },
        { type: _reducer_bs_datepicker_store__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerStore"], },
        { type: _reducer_bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerActions"], },
        { type: _reducer_bs_datepicker_effects__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerEffects"], },
    ]; };
    return BsDatepickerContainerComponent;
}(_base_bs_datepicker_container__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerAbstractComponent"]));

//# sourceMappingURL=bs-datepicker-container.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-datepicker-day-decorator.directive.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-datepicker-day-decorator.directive.js ***!
  \***************************************************************************************************/
/*! exports provided: BsDatepickerDayDecoratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerDayDecoratorComponent", function() { return BsDatepickerDayDecoratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var BsDatepickerDayDecoratorComponent = /** @class */ (function () {
    function BsDatepickerDayDecoratorComponent() {
    }
    BsDatepickerDayDecoratorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: '[bsDatepickerDayDecorator]',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[class.disabled]': 'day.isDisabled',
                        '[class.is-highlighted]': 'day.isHovered',
                        '[class.is-other-month]': 'day.isOtherMonth',
                        '[class.in-range]': 'day.isInRange',
                        '[class.select-start]': 'day.isSelectionStart',
                        '[class.select-end]': 'day.isSelectionEnd',
                        '[class.selected]': 'day.isSelected'
                    },
                    template: "{{ day.label }}"
                },] },
    ];
    /** @nocollapse */
    BsDatepickerDayDecoratorComponent.propDecorators = {
        "day": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return BsDatepickerDayDecoratorComponent;
}());

//# sourceMappingURL=bs-datepicker-day-decorator.directive.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-datepicker-navigation-view.component.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-datepicker-navigation-view.component.js ***!
  \*****************************************************************************************************/
/*! exports provided: BsDatepickerNavigationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerNavigationViewComponent", function() { return BsDatepickerNavigationViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/index */ "../node_modules/ngx-bootstrap/datepicker/models/index.js");


var BsDatepickerNavigationViewComponent = /** @class */ (function () {
    function BsDatepickerNavigationViewComponent() {
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BsDatepickerNavigationViewComponent.prototype.navTo = function (down) {
        this.onNavigate.emit(down ? _models_index__WEBPACK_IMPORTED_MODULE_1__["BsNavigationDirection"].DOWN : _models_index__WEBPACK_IMPORTED_MODULE_1__["BsNavigationDirection"].UP);
    };
    BsDatepickerNavigationViewComponent.prototype.view = function (viewMode) {
        this.onViewMode.emit(viewMode);
    };
    BsDatepickerNavigationViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-datepicker-navigation-view',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(true)\"><span>&lsaquo;</span>\n    </button>\n\n    <button class=\"current\"\n            *ngIf=\"calendar.monthTitle\"\n            (click)=\"view('month')\"\n    ><span>{{ calendar.monthTitle }}</span>\n    </button>\n\n    <button class=\"current\" (click)=\"view('year')\"\n    ><span>{{ calendar.yearTitle }}</span></button>\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDatepickerNavigationViewComponent.propDecorators = {
        "calendar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onNavigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onViewMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return BsDatepickerNavigationViewComponent;
}());

//# sourceMappingURL=bs-datepicker-navigation-view.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-daterangepicker-container.component.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-daterangepicker-container.component.js ***!
  \****************************************************************************************************/
/*! exports provided: BsDaterangepickerContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerContainerComponent", function() { return BsDaterangepickerContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_bs_datepicker_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/bs-datepicker-container */ "../node_modules/ngx-bootstrap/datepicker/base/bs-datepicker-container.js");
/* harmony import */ var _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bs-datepicker.config */ "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.config.js");
/* harmony import */ var _reducer_bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducer/bs-datepicker.actions */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js");
/* harmony import */ var _reducer_bs_datepicker_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducer/bs-datepicker.effects */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.effects.js");
/* harmony import */ var _reducer_bs_datepicker_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducer/bs-datepicker.store */ "../node_modules/ngx-bootstrap/datepicker/reducer/bs-datepicker.store.js");
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






var BsDaterangepickerContainerComponent = /** @class */ (function (_super) {
    __extends(BsDaterangepickerContainerComponent, _super);
    function BsDaterangepickerContainerComponent(_config, _store, _actions, _effects) {
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._store = _store;
        _this._actions = _actions;
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this._rangeStack = [];
        _this._subs = [];
        _this._effects = _effects;
        return _this;
    }
    Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
        set: function (value) {
            this._effects.setRangeValue(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDaterangepickerContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.containerClass = this._config.containerClass;
        this._effects
            .init(this._store)
            .setOptions(this._config)
            .setBindings(this)
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select(function (state) { return state.selectedRange; })
            .subscribe(function (date) { return _this.valueChange.emit(date); }));
    };
    BsDaterangepickerContainerComponent.prototype.daySelectHandler = function (day) {
        if (day.isOtherMonth || day.isDisabled) {
            return;
        }
        // if only one date is already selected
        // and user clicks on previous date
        // start selection from new date
        // but if new date is after initial one
        // than finish selection
        if (this._rangeStack.length === 1) {
            this._rangeStack =
                day.date >= this._rangeStack[0]
                    ? [this._rangeStack[0], day.date]
                    : [day.date];
        }
        if (this._rangeStack.length === 0) {
            this._rangeStack = [day.date];
        }
        this._store.dispatch(this._actions.selectRange(this._rangeStack));
        if (this._rangeStack.length === 2) {
            this._rangeStack = [];
        }
    };
    BsDaterangepickerContainerComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._effects.destroy();
    };
    BsDaterangepickerContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-daterangepicker-container',
                    providers: [_reducer_bs_datepicker_store__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerStore"], _reducer_bs_datepicker_effects__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerEffects"]],
                    template: "<!-- days calendar view mode --> <div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\"> <div class=\"bs-datepicker-container\"> <!--calendars--> <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\"> <!--days calendar--> <div *ngSwitchCase=\"'day'\"> <bs-days-calendar-view *ngFor=\"let calendar of (daysCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\" [calendar]=\"calendar\" [options]=\"options | async\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"dayHoverHandler($event)\" (onSelect)=\"daySelectHandler($event)\" ></bs-days-calendar-view> </div> <!--months calendar--> <div *ngSwitchCase=\"'month'\"> <bs-month-calendar-view *ngFor=\"let calendar of (monthsCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\" [calendar]=\"calendar\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"monthHoverHandler($event)\" (onSelect)=\"monthSelectHandler($event)\" ></bs-month-calendar-view> </div> <!--years calendar--> <div *ngSwitchCase=\"'year'\"> <bs-years-calendar-view *ngFor=\"let calendar of (yearsCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\" [calendar]=\"calendar\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"yearHoverHandler($event)\" (onSelect)=\"yearSelectHandler($event)\" ></bs-years-calendar-view> </div> </div> <!--applycancel buttons--> <div class=\"bs-datepicker-buttons\" *ngIf=\"false\"> <button class=\"btn btn-success\">Apply</button> <button class=\"btn btn-default\">Cancel</button> </div> </div> <!--custom dates or date ranges picker--> <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\"> <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view> </div> </div> ",
                    host: {
                        '(click)': '_stopPropagation($event)',
                        style: 'position: absolute; display: block;',
                        role: 'dialog',
                        'aria-label': 'calendar'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDaterangepickerContainerComponent.ctorParameters = function () { return [
        { type: _bs_datepicker_config__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerConfig"], },
        { type: _reducer_bs_datepicker_store__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerStore"], },
        { type: _reducer_bs_datepicker_actions__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerActions"], },
        { type: _reducer_bs_datepicker_effects__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerEffects"], },
    ]; };
    return BsDaterangepickerContainerComponent;
}(_base_bs_datepicker_container__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerAbstractComponent"]));

//# sourceMappingURL=bs-daterangepicker-container.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-days-calendar-view.component.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-days-calendar-view.component.js ***!
  \*********************************************************************************************/
/*! exports provided: BsDaysCalendarViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaysCalendarViewComponent", function() { return BsDaysCalendarViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/index */ "../node_modules/ngx-bootstrap/datepicker/models/index.js");


var BsDaysCalendarViewComponent = /** @class */ (function () {
    function BsDaysCalendarViewComponent() {
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BsDaysCalendarViewComponent.prototype.navigateTo = function (event) {
        var step = _models_index__WEBPACK_IMPORTED_MODULE_1__["BsNavigationDirection"].DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    };
    BsDaysCalendarViewComponent.prototype.changeViewMode = function (event) {
        this.onViewMode.emit(event);
    };
    BsDaysCalendarViewComponent.prototype.selectDay = function (event) {
        this.onSelect.emit(event);
    };
    BsDaysCalendarViewComponent.prototype.hoverDay = function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsDaysCalendarViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-days-calendar-view',
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" *ngIf=\"options.showWeekNumbers\">\n            <span>{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDaysCalendarViewComponent.propDecorators = {
        "calendar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onNavigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onViewMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return BsDaysCalendarViewComponent;
}());

//# sourceMappingURL=bs-days-calendar-view.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-months-calendar-view.component.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-months-calendar-view.component.js ***!
  \***********************************************************************************************/
/*! exports provided: BsMonthCalendarViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsMonthCalendarViewComponent", function() { return BsMonthCalendarViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/index */ "../node_modules/ngx-bootstrap/datepicker/models/index.js");


var BsMonthCalendarViewComponent = /** @class */ (function () {
    function BsMonthCalendarViewComponent() {
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BsMonthCalendarViewComponent.prototype.navigateTo = function (event) {
        var step = _models_index__WEBPACK_IMPORTED_MODULE_1__["BsNavigationDirection"].DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step } });
    };
    BsMonthCalendarViewComponent.prototype.viewMonth = function (month) {
        this.onSelect.emit(month);
    };
    BsMonthCalendarViewComponent.prototype.hoverMonth = function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsMonthCalendarViewComponent.prototype.changeViewMode = function (event) {
        this.onViewMode.emit(event);
    };
    BsMonthCalendarViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-month-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span>{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                },] },
    ];
    /** @nocollapse */
    BsMonthCalendarViewComponent.propDecorators = {
        "calendar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onNavigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onViewMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return BsMonthCalendarViewComponent;
}());

//# sourceMappingURL=bs-months-calendar-view.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-timepicker-view.component.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-timepicker-view.component.js ***!
  \******************************************************************************************/
/*! exports provided: BsTimepickerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsTimepickerViewComponent", function() { return BsTimepickerViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var BsTimepickerViewComponent = /** @class */ (function () {
    function BsTimepickerViewComponent() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
    BsTimepickerViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-timepicker',
                    template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <button class=\"switch-time-format\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
                },] },
    ];
    return BsTimepickerViewComponent;
}());

//# sourceMappingURL=bs-timepicker-view.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-years-calendar-view.component.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/themes/bs/bs-years-calendar-view.component.js ***!
  \**********************************************************************************************/
/*! exports provided: BsYearsCalendarViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsYearsCalendarViewComponent", function() { return BsYearsCalendarViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _engine_format_years_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/format-years-calendar */ "../node_modules/ngx-bootstrap/datepicker/engine/format-years-calendar.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/index */ "../node_modules/ngx-bootstrap/datepicker/models/index.js");



var BsYearsCalendarViewComponent = /** @class */ (function () {
    function BsYearsCalendarViewComponent() {
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BsYearsCalendarViewComponent.prototype.navigateTo = function (event) {
        var step = _models_index__WEBPACK_IMPORTED_MODULE_2__["BsNavigationDirection"].DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * _engine_format_years_calendar__WEBPACK_IMPORTED_MODULE_1__["yearsPerCalendar"] } });
    };
    BsYearsCalendarViewComponent.prototype.viewYear = function (year) {
        this.onSelect.emit(year);
    };
    BsYearsCalendarViewComponent.prototype.hoverYear = function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsYearsCalendarViewComponent.prototype.changeViewMode = function (event) {
        this.onViewMode.emit(event);
    };
    BsYearsCalendarViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-years-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span>{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                },] },
    ];
    /** @nocollapse */
    BsYearsCalendarViewComponent.propDecorators = {
        "calendar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onNavigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onViewMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return BsYearsCalendarViewComponent;
}());

//# sourceMappingURL=bs-years-calendar-view.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/utils/bs-calendar-utils.js":
/*!***************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/utils/bs-calendar-utils.js ***!
  \***************************************************************************/
/*! exports provided: getStartingDayOfCalendar, calculateDateOffset, isMonthDisabled, isYearDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartingDayOfCalendar", function() { return getStartingDayOfCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDateOffset", function() { return calculateDateOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMonthDisabled", function() { return isMonthDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isYearDisabled", function() { return isYearDisabled; });
/* harmony import */ var _chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chronos/utils/date-getters */ "../node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chronos/utils/date-setters */ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var _chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chronos/utils/date-compare */ "../node_modules/ngx-bootstrap/chronos/utils/date-compare.js");
/* harmony import */ var _chronos_utils_start_end_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chronos/utils/start-end-of */ "../node_modules/ngx-bootstrap/chronos/utils/start-end-of.js");




function getStartingDayOfCalendar(date, options) {
    if (Object(_chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["isFirstDayOfWeek"])(date, options.firstDayOfWeek)) {
        return date;
    }
    var weekDay = Object(_chronos_utils_date_getters__WEBPACK_IMPORTED_MODULE_0__["getDay"])(date);
    var offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_1__["shiftDate"])(date, { day: -offset });
}
function calculateDateOffset(weekday, startingDayOffset) {
    if (startingDayOffset === 0) {
        return weekday;
    }
    var offset = weekday - startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
function isMonthDisabled(date, min, max) {
    var minBound = min && Object(_chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(Object(_chronos_utils_start_end_of__WEBPACK_IMPORTED_MODULE_3__["endOf"])(date, 'month'), min, 'day');
    var maxBound = max && Object(_chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(Object(_chronos_utils_start_end_of__WEBPACK_IMPORTED_MODULE_3__["startOf"])(date, 'month'), max, 'day');
    return minBound || maxBound;
}
function isYearDisabled(date, min, max) {
    var minBound = min && Object(_chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(Object(_chronos_utils_start_end_of__WEBPACK_IMPORTED_MODULE_3__["endOf"])(date, 'year'), min, 'day');
    var maxBound = max && Object(_chronos_utils_date_compare__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(Object(_chronos_utils_start_end_of__WEBPACK_IMPORTED_MODULE_3__["startOf"])(date, 'year'), max, 'day');
    return minBound || maxBound;
}
//# sourceMappingURL=bs-calendar-utils.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/utils/matrix-utils.js":
/*!**********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/utils/matrix-utils.js ***!
  \**********************************************************************/
/*! exports provided: createMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMatrix", function() { return createMatrix; });
/* harmony import */ var _chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chronos/utils/date-setters */ "../node_modules/ngx-bootstrap/chronos/utils/date-setters.js");

function createMatrix(options, fn) {
    var prevValue = options.initialDate;
    var matrix = new Array(options.height);
    for (var i = 0; i < options.height; i++) {
        matrix[i] = new Array(options.width);
        for (var j = 0; j < options.width; j++) {
            matrix[i][j] = fn(prevValue);
            prevValue = Object(_chronos_utils_date_setters__WEBPACK_IMPORTED_MODULE_0__["shiftDate"])(prevValue, options.shift);
        }
    }
    return matrix;
}
//# sourceMappingURL=matrix-utils.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/datepicker/yearpicker.component.js":
/*!************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/datepicker/yearpicker.component.js ***!
  \************************************************************************/
/*! exports provided: YearPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearPickerComponent", function() { return YearPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/theme-provider */ "../node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var _datepicker_inner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker-inner.component */ "../node_modules/ngx-bootstrap/datepicker/datepicker-inner.component.js");



var YearPickerComponent = /** @class */ (function () {
    function YearPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
        get: function () {
            return !Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    YearPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepYear = { years: this.datePicker.yearRange };
        this.datePicker.setRefreshViewHandler(function () {
            var years = new Array(this.yearRange);
            var date;
            var start = self.getStartingYear(this.activeDate.getFullYear());
            for (var i = 0; i < this.yearRange; i++) {
                date = new Date(start + i, 0, 1);
                date = this.fixTimeZone(date);
                years[i] = this.createDateObject(date, this.formatYear);
                years[i].uid = this.uniqueId + '-' + i;
            }
            self.title = [years[0].label, years[this.yearRange - 1].label].join(' - ');
            self.rows = this.split(years, self.datePicker.yearColLimit);
        }, 'year');
        this.datePicker.setCompareHandler(function (date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
        }, 'year');
        this.datePicker.refreshView();
    };
    YearPickerComponent.prototype.getStartingYear = function (year) {
        // todo: parseInt
        return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
    };
    YearPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'yearpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: [
                        "\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    YearPickerComponent.ctorParameters = function () { return [
        { type: _datepicker_inner_component__WEBPACK_IMPORTED_MODULE_2__["DatePickerInnerComponent"], },
    ]; };
    return YearPickerComponent;
}());

//# sourceMappingURL=yearpicker.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/mini-ngrx/state.class.js":
/*!**************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/mini-ngrx/state.class.js ***!
  \**************************************************************/
/*! exports provided: MiniState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniState", function() { return MiniState; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
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


var MiniState = /** @class */ (function (_super) {
    __extends(MiniState, _super);
    function MiniState(_initialState, actionsDispatcher$, reducer) {
        var _this = _super.call(this, _initialState) || this;
        var actionInQueue$ = actionsDispatcher$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["queueScheduler"]));
        var state$ = actionInQueue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["scan"])(function (state, action) {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }, _initialState));
        state$.subscribe(function (value) { return _this.next(value); });
        return _this;
    }
    return MiniState;
}(rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]));

//# sourceMappingURL=state.class.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/mini-ngrx/store.class.js":
/*!**************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/mini-ngrx/store.class.js ***!
  \**************************************************************/
/*! exports provided: MiniStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStore", function() { return MiniStore; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
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


var MiniStore = /** @class */ (function (_super) {
    __extends(MiniStore, _super);
    function MiniStore(_dispatcher, _reducer, state$) {
        var _this = _super.call(this) || this;
        _this._dispatcher = _dispatcher;
        _this._reducer = _reducer;
        _this.source = state$;
        return _this;
    }
    MiniStore.prototype.select = function (pathOrMapFn) {
        var mapped$ = this.source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(pathOrMapFn));
        return mapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    };
    MiniStore.prototype.lift = function (operator) {
        var store = new MiniStore(this._dispatcher, this._reducer, this);
        store.operator = operator;
        return store;
    };
    MiniStore.prototype.dispatch = function (action) {
        this._dispatcher.next(action);
    };
    MiniStore.prototype.next = function (action) {
        this._dispatcher.next(action);
    };
    MiniStore.prototype.error = function (err) {
        this._dispatcher.error(err);
    };
    MiniStore.prototype.complete = function () {
        /*noop*/
    };
    return MiniStore;
}(rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]));

//# sourceMappingURL=store.class.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js ***!
  \*******************************************************************/
/*! exports provided: BsModalRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return BsModalRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var BsModalRef = /** @class */ (function () {
    function BsModalRef() {
        /**
           * Hides the modal
           */
        this.hide = Function;
    }
    BsModalRef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return BsModalRef;
}());

//# sourceMappingURL=bs-modal-ref.service.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/modal/bs-modal.service.js":
/*!***************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/modal/bs-modal.service.js ***!
  \***************************************************************/
/*! exports provided: BsModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return BsModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component-loader/component-loader.factory */ "../node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var _modal_backdrop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-backdrop.component */ "../node_modules/ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var _modal_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-container.component */ "../node_modules/ngx-bootstrap/modal/modal-container.component.js");
/* harmony import */ var _modal_options_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-options.class */ "../node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var _bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bs-modal-ref.service */ "../node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");






var BsModalService = /** @class */ (function () {
    function BsModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["modalConfigDefaults"];
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /** Shows a modal */
    /** Shows a modal */
    BsModalService.prototype.show = /** Shows a modal */
    function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["modalConfigDefaults"], config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    BsModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["TRANSITION_DURATIONS"].BACKDROP : 0);
    };
    BsModalService.prototype._showBackdrop = function () {
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_2__["ModalBackdropComponent"])
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    BsModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var duration = this.config.animated ? _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["TRANSITION_DURATIONS"].BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    BsModalService.prototype._showModal = function (content) {
        var modalLoader = this.loaders[this.loaders.length - 1];
        var bsModalRef = new _bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"]();
        var modalContainerRef = modalLoader
            .provide({ provide: _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["ModalOptions"], useValue: this.config })
            .provide({ provide: _bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"], useValue: bsModalRef })
            .attach(_modal_container_component__WEBPACK_IMPORTED_MODULE_3__["ModalContainerComponent"])
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        return bsModalRef;
    };
    BsModalService.prototype._hideModal = function (level) {
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    BsModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    BsModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    BsModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    BsModalService.prototype.checkScrollbar = /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    BsModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    BsModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    // thx d.walsh
    // thx d.walsh
    BsModalService.prototype.getScrollbarWidth = 
    // thx d.walsh
    function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["CLASS_NAME"].SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    BsModalService.prototype._createLoaders = function () {
        var loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    BsModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    BsModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    BsModalService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    BsModalService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], },
        { type: _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"], },
    ]; };
    return BsModalService;
}());

//# sourceMappingURL=bs-modal.service.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/modal/index.js":
/*!****************************************************!*\
  !*** ../node_modules/ngx-bootstrap/modal/index.js ***!
  \****************************************************/
/*! exports provided: BsModalRef, ModalBackdropOptions, ModalContainerComponent, ModalBackdropComponent, ModalOptions, ModalDirective, ModalModule, BsModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs-modal-ref.service */ "../node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return _bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_0__["BsModalRef"]; });

/* harmony import */ var _modal_backdrop_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-backdrop.options */ "../node_modules/ngx-bootstrap/modal/modal-backdrop.options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return _modal_backdrop_options__WEBPACK_IMPORTED_MODULE_1__["ModalBackdropOptions"]; });

/* harmony import */ var _modal_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-container.component */ "../node_modules/ngx-bootstrap/modal/modal-container.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return _modal_container_component__WEBPACK_IMPORTED_MODULE_2__["ModalContainerComponent"]; });

/* harmony import */ var _modal_backdrop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-backdrop.component */ "../node_modules/ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return _modal_backdrop_component__WEBPACK_IMPORTED_MODULE_3__["ModalBackdropComponent"]; });

/* harmony import */ var _modal_options_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-options.class */ "../node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return _modal_options_class__WEBPACK_IMPORTED_MODULE_4__["ModalOptions"]; });

/* harmony import */ var _modal_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.directive */ "../node_modules/ngx-bootstrap/modal/modal.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return _modal_directive__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"]; });

/* harmony import */ var _modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.module */ "../node_modules/ngx-bootstrap/modal/modal.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]; });

/* harmony import */ var _bs_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bs-modal.service */ "../node_modules/ngx-bootstrap/modal/bs-modal.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return _bs_modal_service__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/modal/modal-backdrop.component.js":
/*!***********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/modal/modal-backdrop.component.js ***!
  \***********************************************************************/
/*! exports provided: ModalBackdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_options_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-options.class */ "../node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme-provider */ "../node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var _utils_utils_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.class */ "../node_modules/ngx-bootstrap/utils/utils.class.js");




/** This component will be added as background layout for modals if enabled */
var ModalBackdropComponent = /** @class */ (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].IN);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].IN);
            }
            if (!Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])()) {
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].SHOW);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].FADE);
            _utils_utils_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-modal-backdrop',
                    template: ' ',
                    host: { class: _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].BACKDROP }
                },] },
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    return ModalBackdropComponent;
}());

//# sourceMappingURL=modal-backdrop.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/modal/modal-backdrop.options.js":
/*!*********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/modal/modal-backdrop.options.js ***!
  \*********************************************************************/
/*! exports provided: ModalBackdropOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ModalBackdropOptions; });
var ModalBackdropOptions = /** @class */ (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());

//# sourceMappingURL=modal-backdrop.options.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/modal/modal-container.component.js":
/*!************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/modal/modal-container.component.js ***!
  \************************************************************************/
/*! exports provided: ModalContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_options_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-options.class */ "../node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme-provider */ "../node_modules/ngx-bootstrap/utils/theme-provider.js");



var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.config = Object.assign({}, options);
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])() ? _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].IN : _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].SHOW);
        }, this.isAnimated ? _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["TRANSITION_DURATIONS"].BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    };
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.bsModalService.setDismissReason(_modal_options_class__WEBPACK_IMPORTED_MODULE_1__["DISMISS_REASONS"].BACKRDOP);
        this.hide();
    };
    ModalContainerComponent.prototype.onEsc = function (event) {
        if (!this.isShown) {
            return;
        }
        if (event.keyCode === 27) {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(_modal_options_class__WEBPACK_IMPORTED_MODULE_1__["DISMISS_REASONS"].ESC);
            this.hide();
        }
    };
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])() ? _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].IN : _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].SHOW);
        setTimeout(function () {
            _this.isShown = false;
            if (document &&
                document.body &&
                _this.bsModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAME"].OPEN);
            }
            _this.bsModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["TRANSITION_DURATIONS"].MODAL : 0);
    };
    ModalContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'modal-container',
                    template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'modal',
                        role: 'dialog',
                        tabindex: '-1',
                        '[attr.aria-modal]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: _modal_options_class__WEBPACK_IMPORTED_MODULE_1__["ModalOptions"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    ModalContainerComponent.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
        "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.esc', ['$event'],] },],
    };
    return ModalContainerComponent;
}());

//# sourceMappingURL=modal-container.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/modal/modal-options.class.js":
/*!******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/modal/modal-options.class.js ***!
  \******************************************************************/
/*! exports provided: ModalOptions, modalConfigDefaults, CLASS_NAME, SELECTOR, TRANSITION_DURATIONS, DISMISS_REASONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalConfigDefaults", function() { return modalConfigDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return CLASS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTOR", function() { return SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSITION_DURATIONS", function() { return TRANSITION_DURATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISMISS_REASONS", function() { return DISMISS_REASONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return ModalOptions;
}());

var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
var CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
var SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
var TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
//# sourceMappingURL=modal-options.class.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/modal/modal.directive.js":
/*!**************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/modal/modal.directive.js ***!
  \**************************************************************/
/*! exports provided: ModalDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/facade/browser */ "../node_modules/ngx-bootstrap/utils/facade/browser.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme-provider */ "../node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var _utils_utils_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.class */ "../node_modules/ngx-bootstrap/utils/utils.class.js");
/* harmony import */ var _modal_backdrop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-backdrop.component */ "../node_modules/ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var _modal_options_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-options.class */ "../node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component-loader/component-loader.factory */ "../node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* tslint:disable:max-file-line-count */
// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events







var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
var ModalDirective = /** @class */ (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /** This event fires immediately when the `show` instance method is called. */
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** This event is fired when the modal has been made visible to the user
           * (will wait for CSS transitions to complete)
           */
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** This event is fired immediately when
           * the hide instance method has been called.
           */
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** This event is fired when the modal has finished being
           * hidden from the user (will wait for CSS transitions to complete).
           */
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: /** allows to set modal configuration via element property */
        function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["DISMISS_REASONS"].BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = 
    // todo: consider preventing default and stopping propagation
    function (event) {
        if (!this._isShown) {
            return;
        }
        if (event.keyCode === 27) {
            event.preventDefault();
        }
        if (this.config.keyboard) {
            this.dismissReason = _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["DISMISS_REASONS"].ESC;
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    ModalDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    ModalDirective.prototype.toggle = /* Public methods */
    /** Allows to manually toggle modal visibility */
    function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    /** Allows to manually open modal */
    ModalDirective.prototype.show = /** Allows to manually open modal */
    function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"] && _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
            if (_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(_modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    /** Allows to manually close modal */
    ModalDirective.prototype.hide = /** Allows to manually close modal */
    function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].IN);
        if (!Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])()) {
            this._renderer.removeClass(this._element.nativeElement, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    /** Private methods @internal */
    ModalDirective.prototype.getConfig = /** Private methods @internal */
    function (config) {
        return Object.assign({}, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["modalConfigDefaults"], config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    /**
       *  Show dialog
       *  @internal
       */
    ModalDirective.prototype.showElement = /**
       *  Show dialog
       *  @internal
       */
    function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"] && _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            _utils_utils_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].IN);
        if (!Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])()) {
            this._renderer.addClass(this._element.nativeElement, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].SHOW);
        }
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    /** @internal */
    ModalDirective.prototype.hideModal = /** @internal */
    function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"] && _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                    _this._renderer.removeClass(_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    ModalDirective.prototype.showBackdrop = 
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    function (callback) {
        var _this = this;
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_4__["ModalBackdropComponent"])
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    /** @internal */
    ModalDirective.prototype.removeBackdrop = /** @internal */
    function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    ModalDirective.prototype.focusOtherModal = /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    function () {
        if (this._element.nativeElement.parentElement == null)
            return;
        var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    };
    /** @internal */
    /** @internal */
    ModalDirective.prototype.resetAdjustments = /** @internal */
    function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    /** Scroll bar tricks */
    /** @internal */
    ModalDirective.prototype.checkScrollbar = /** Scroll bar tricks */
    /** @internal */
    function () {
        this.isBodyOverflowing = _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"]) {
            return;
        }
        this.originalBodyPadding = parseInt(_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["window"]
            .getComputedStyle(_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        _utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = 
    // thx d.walsh
    function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, _modal_options_class__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAME"].SCROLLBAR_MEASURER);
        this._renderer.appendChild(_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(_utils_facade_browser__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] },
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _component_loader_component_loader_factory__WEBPACK_IMPORTED_MODULE_6__["ComponentLoaderFactory"], },
    ]; };
    ModalDirective.propDecorators = {
        "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
        "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.esc', ['$event'],] },],
    };
    return ModalDirective;
}());

//# sourceMappingURL=modal.directive.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/modal/modal.module.js":
/*!***********************************************************!*\
  !*** ../node_modules/ngx-bootstrap/modal/modal.module.js ***!
  \***********************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_backdrop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-backdrop.component */ "../node_modules/ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var _modal_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.directive */ "../node_modules/ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../positioning/index */ "../node_modules/ngx-bootstrap/positioning/index.js");
/* harmony import */ var _component_loader_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component-loader/index */ "../node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var _modal_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-container.component */ "../node_modules/ngx-bootstrap/modal/modal-container.component.js");
/* harmony import */ var _bs_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bs-modal.service */ "../node_modules/ngx-bootstrap/modal/bs-modal.service.js");







var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function () {
        return {
            ngModule: ModalModule,
            providers: [_bs_modal_service__WEBPACK_IMPORTED_MODULE_6__["BsModalService"], _component_loader_index__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"], _positioning_index__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    };
    ModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        _modal_backdrop_component__WEBPACK_IMPORTED_MODULE_1__["ModalBackdropComponent"],
                        _modal_directive__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"],
                        _modal_container_component__WEBPACK_IMPORTED_MODULE_5__["ModalContainerComponent"]
                    ],
                    exports: [_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_1__["ModalBackdropComponent"], _modal_directive__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"]],
                    entryComponents: [_modal_backdrop_component__WEBPACK_IMPORTED_MODULE_1__["ModalBackdropComponent"], _modal_container_component__WEBPACK_IMPORTED_MODULE_5__["ModalContainerComponent"]]
                },] },
    ];
    return ModalModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/positioning/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/ngx-bootstrap/positioning/index.js ***!
  \**********************************************************/
/*! exports provided: positionElements, Positioning, PositioningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng_positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-positioning */ "../node_modules/ngx-bootstrap/positioning/ng-positioning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return _ng_positioning__WEBPACK_IMPORTED_MODULE_0__["positionElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return _ng_positioning__WEBPACK_IMPORTED_MODULE_0__["Positioning"]; });

/* harmony import */ var _positioning_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positioning.service */ "../node_modules/ngx-bootstrap/positioning/positioning.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return _positioning_service__WEBPACK_IMPORTED_MODULE_1__["PositioningService"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/positioning/ng-positioning.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/positioning/ng-positioning.js ***!
  \*******************************************************************/
/*! exports provided: Positioning, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var 
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
Positioning = /** @class */ (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = {
            width: 0,
            height: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        };
        if (this.getStyle(element, 'position') === 'fixed') {
            var bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody
            ? this.offset(hostElement, false)
            : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left +
                hostElPosition.width / 2 -
                targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top +
                hostElPosition.height / 2 -
                targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        if (placementPrimary === 'auto') {
            var newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement, placementSecondary);
            if (!newPlacementPrimary)
                newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement);
            if (newPlacementPrimary)
                placementPrimary = newPlacementPrimary;
            targetElement.classList.add(placementPrimary);
        }
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top -
                        (targetElement.offsetHeight +
                            parseFloat(targetElStyles.marginBottom));
                targetElPosition.bottom +=
                    hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left =
                    hostElPosition.left -
                        (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                targetElPosition.right +=
                    hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.autoPosition = function (targetElPosition, hostElPosition, targetElement, preferredPosition) {
        if ((!preferredPosition || preferredPosition === 'right') &&
            targetElPosition.left + hostElPosition.left - targetElement.offsetWidth <
                0) {
            return 'right';
        }
        else if ((!preferredPosition || preferredPosition === 'top') &&
            targetElPosition.bottom +
                hostElPosition.bottom +
                targetElement.offsetHeight >
                window.innerHeight) {
            return 'top';
        }
        else if ((!preferredPosition || preferredPosition === 'bottom') &&
            targetElPosition.top + hostElPosition.top - targetElement.offsetHeight < 0) {
            return 'bottom';
        }
        else if ((!preferredPosition || preferredPosition === 'left') &&
            targetElPosition.right +
                hostElPosition.right +
                targetElement.offsetWidth >
                window.innerWidth) {
            return 'left';
        }
        return null;
    };
    Positioning.prototype.getAllStyles = function (element) {
        return window.getComputedStyle(element);
    };
    Positioning.prototype.getStyle = function (element, prop) {
        return this.getAllStyles(element)[prop];
    };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl &&
            offsetParentEl !== document.documentElement &&
            this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=ng-positioning.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/positioning/positioning.service.js":
/*!************************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/positioning/positioning.service.js ***!
  \************************************************************************/
/*! exports provided: PositioningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return PositioningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_positioning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-positioning */ "../node_modules/ngx-bootstrap/positioning/ng-positioning.js");


var PositioningService = /** @class */ (function () {
    function PositioningService() {
    }
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        Object(_ng_positioning__WEBPACK_IMPORTED_MODULE_1__["positionElements"])(_getHtmlElement(target), _getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return PositioningService;
}());

function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
        return element.nativeElement;
    }
    return element;
}
//# sourceMappingURL=positioning.service.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/tabs/index.js":
/*!***************************************************!*\
  !*** ../node_modules/ngx-bootstrap/tabs/index.js ***!
  \***************************************************/
/*! exports provided: NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng_transclude_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-transclude.directive */ "../node_modules/ngx-bootstrap/tabs/ng-transclude.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function() { return _ng_transclude_directive__WEBPACK_IMPORTED_MODULE_0__["NgTranscludeDirective"]; });

/* harmony import */ var _tab_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.directive */ "../node_modules/ngx-bootstrap/tabs/tab.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return _tab_directive__WEBPACK_IMPORTED_MODULE_1__["TabDirective"]; });

/* harmony import */ var _tab_heading_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-heading.directive */ "../node_modules/ngx-bootstrap/tabs/tab-heading.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function() { return _tab_heading_directive__WEBPACK_IMPORTED_MODULE_2__["TabHeadingDirective"]; });

/* harmony import */ var _tabset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabset.component */ "../node_modules/ngx-bootstrap/tabs/tabset.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return _tabset_component__WEBPACK_IMPORTED_MODULE_3__["TabsetComponent"]; });

/* harmony import */ var _tabset_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabset.config */ "../node_modules/ngx-bootstrap/tabs/tabset.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetConfig", function() { return _tabset_config__WEBPACK_IMPORTED_MODULE_4__["TabsetConfig"]; });

/* harmony import */ var _tabs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.module */ "../node_modules/ngx-bootstrap/tabs/tabs.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return _tabs_module__WEBPACK_IMPORTED_MODULE_5__["TabsModule"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/tabs/ng-transclude.directive.js":
/*!*********************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/tabs/ng-transclude.directive.js ***!
  \*********************************************************************/
/*! exports provided: NgTranscludeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function() { return NgTranscludeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngTransclude]'
                },] },
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    ]; };
    NgTranscludeDirective.propDecorators = {
        "ngTransclude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgTranscludeDirective;
}());

//# sourceMappingURL=ng-transclude.directive.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/tabs/tab-heading.directive.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/tabs/tab-heading.directive.js ***!
  \*******************************************************************/
/*! exports provided: TabHeadingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function() { return TabHeadingDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.directive */ "../node_modules/ngx-bootstrap/tabs/tab.directive.js");


/** Should be used to mark <ng-template> element as a template for tab heading */
var TabHeadingDirective = /** @class */ (function () {
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[tabHeading]' },] },
    ];
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
        { type: _tab_directive__WEBPACK_IMPORTED_MODULE_1__["TabDirective"], },
    ]; };
    return TabHeadingDirective;
}());

//# sourceMappingURL=tab-heading.directive.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/tabs/tab.directive.js":
/*!***********************************************************!*\
  !*** ../node_modules/ngx-bootstrap/tabs/tab.directive.js ***!
  \***********************************************************/
/*! exports provided: TabDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return TabDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabset_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabset.component */ "../node_modules/ngx-bootstrap/tabs/tabset.component.js");


var TabDirective = /** @class */ (function () {
    function TabDirective(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "customClass", {
        get: /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
        function () {
            return this._customClass;
        },
        set: function (customClass) {
            var _this = this;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                });
            }
            this._customClass = customClass ? customClass.trim() : null;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        get: /** tab active state toggle */
        function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            if (this._active === active) {
                return;
            }
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.deselect.emit(this);
                    this._active = active;
                }
                return;
            }
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    TabDirective.prototype.ngOnInit = function () {
        this.removable = this.removable;
    };
    TabDirective.prototype.ngOnDestroy = function () {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    };
    TabDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'tab, [tab]' },] },
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: _tabset_component__WEBPACK_IMPORTED_MODULE_1__["TabsetComponent"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    TabDirective.propDecorators = {
        "heading": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.id',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "removable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "customClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "active": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "deselect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "removed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "addClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tab-pane',] },],
    };
    return TabDirective;
}());

//# sourceMappingURL=tab.directive.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/tabs/tabs.module.js":
/*!*********************************************************!*\
  !*** ../node_modules/ngx-bootstrap/tabs/tabs.module.js ***!
  \*********************************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_transclude_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-transclude.directive */ "../node_modules/ngx-bootstrap/tabs/ng-transclude.directive.js");
/* harmony import */ var _tab_heading_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-heading.directive */ "../node_modules/ngx-bootstrap/tabs/tab-heading.directive.js");
/* harmony import */ var _tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab.directive */ "../node_modules/ngx-bootstrap/tabs/tab.directive.js");
/* harmony import */ var _tabset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabset.component */ "../node_modules/ngx-bootstrap/tabs/tabset.component.js");
/* harmony import */ var _tabset_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabset.config */ "../node_modules/ngx-bootstrap/tabs/tabset.config.js");







var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule.forRoot = function () {
        return {
            ngModule: TabsModule,
            providers: [_tabset_config__WEBPACK_IMPORTED_MODULE_6__["TabsetConfig"]]
        };
    };
    TabsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [
                        _ng_transclude_directive__WEBPACK_IMPORTED_MODULE_2__["NgTranscludeDirective"],
                        _tab_directive__WEBPACK_IMPORTED_MODULE_4__["TabDirective"],
                        _tabset_component__WEBPACK_IMPORTED_MODULE_5__["TabsetComponent"],
                        _tab_heading_directive__WEBPACK_IMPORTED_MODULE_3__["TabHeadingDirective"]
                    ],
                    exports: [
                        _tab_directive__WEBPACK_IMPORTED_MODULE_4__["TabDirective"],
                        _tabset_component__WEBPACK_IMPORTED_MODULE_5__["TabsetComponent"],
                        _tab_heading_directive__WEBPACK_IMPORTED_MODULE_3__["TabHeadingDirective"],
                        _ng_transclude_directive__WEBPACK_IMPORTED_MODULE_2__["NgTranscludeDirective"]
                    ]
                },] },
    ];
    return TabsModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/tabs/tabset.component.js":
/*!**************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/tabs/tabset.component.js ***!
  \**************************************************************/
/*! exports provided: TabsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return TabsetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabset_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabset.config */ "../node_modules/ngx-bootstrap/tabs/tabset.config.js");


// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(config, renderer) {
        this.renderer = renderer;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        get: /** if true tabs will be placed vertically */
        function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        get: /** if true tabs fill the container and have a consistent width */
        function () {
            return this._justified;
        },
        set: function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        get: /** navigation context class: 'tabs' or 'pills' */
        function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    TabsetComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    };
    TabsetComponent.prototype.removeTab = function (tab, options) {
        if (options === void 0) { options = { reselect: true, emit: true }; }
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    };
    TabsetComponent.prototype.getClosestTabIndex = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            var prevIndex = index - step;
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    TabsetComponent.prototype.hasAvailableTabs = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    TabsetComponent.prototype.setClassMap = function () {
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'flex-column': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a);
        var _a;
    };
    TabsetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'tabset',
                    template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\"> <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"> <a href=\"javascript:void(0);\" class=\"nav-link\" [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (click)=\"tabz.active = true\"> <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span> <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span> </a> </li> </ul> <div class=\"tab-content\"> <ng-content></ng-content> </div> "
                },] },
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: _tabset_config__WEBPACK_IMPORTED_MODULE_1__["TabsetConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    TabsetComponent.propDecorators = {
        "vertical": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "justified": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clazz": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tab-container',] },],
    };
    return TabsetComponent;
}());

//# sourceMappingURL=tabset.component.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/tabs/tabset.config.js":
/*!***********************************************************!*\
  !*** ../node_modules/ngx-bootstrap/tabs/tabset.config.js ***!
  \***********************************************************/
/*! exports provided: TabsetConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetConfig", function() { return TabsetConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var TabsetConfig = /** @class */ (function () {
    function TabsetConfig() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
    }
    TabsetConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return TabsetConfig;
}());

//# sourceMappingURL=tabset.config.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/utils/facade/browser.js":
/*!*************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/utils/facade/browser.js ***!
  \*************************************************************/
/*! exports provided: window, document, location, gc, performance, Event, MouseEvent, KeyboardEvent, EventTarget, History, Location, EventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location", function() { return location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gc", function() { return gc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performance", function() { return performance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseEvent", function() { return MouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvent", function() { return KeyboardEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTarget", function() { return EventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = (typeof window !== 'undefined' && window) || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/utils/theme-provider.js":
/*!*************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/utils/theme-provider.js ***!
  \*************************************************************/
/*! exports provided: setTheme, isBs3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return setTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return isBs3; });
/* harmony import */ var _facade_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade/browser */ "../node_modules/ngx-bootstrap/utils/facade/browser.js");

var guessedVersion;
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    var spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    var rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
function isBs3() {
    if (typeof _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"] === 'undefined') {
        return true;
    }
    if (typeof _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"].__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"].__theme !== 'bs4';
}
//# sourceMappingURL=theme-provider.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/utils/trigger.class.js":
/*!************************************************************!*\
  !*** ../node_modules/ngx-bootstrap/utils/trigger.class.js ***!
  \************************************************************/
/*! exports provided: Trigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () {
        return this.open === 'manual' || this.close === 'manual';
    };
    return Trigger;
}());

//# sourceMappingURL=trigger.class.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/utils/triggers.js":
/*!*******************************************************!*\
  !*** ../node_modules/ngx-bootstrap/utils/triggers.js ***!
  \*******************************************************/
/*! exports provided: parseTriggers, listenToTriggers, listenToTriggersV2, registerOutsideClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return parseTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggers", function() { return listenToTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function() { return listenToTriggersV2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function() { return registerOutsideClick; });
/* harmony import */ var _trigger_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trigger.class */ "../node_modules/ngx-bootstrap/utils/trigger.class.js");

var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new _trigger_class__WEBPACK_IMPORTED_MODULE_0__["Trigger"](alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers.filter(function (triggerPair) {
        return triggerPair.isManual();
    });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
function listenToTriggersV2(renderer, options) {
    var parsedTriggers = parseTriggers(options.triggers);
    var target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    var listeners = [];
    // lazy listeners registration
    var _registerHide = [];
    var registerHide = function () {
        // add hide listeners to unregister array
        _registerHide.forEach(function (fn) { return listeners.push(fn()); });
        // register hide events only once
        _registerHide.length = 0;
    };
    // register open\close\toggle listeners
    parsedTriggers.forEach(function (trigger) {
        var useToggle = trigger.open === trigger.close;
        var showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push(function () {
                return renderer.listen(target, trigger.close, options.hide);
            });
        }
        listeners.push(renderer.listen(target, trigger.open, function () { return showFn(registerHide); }));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    return renderer.listen('document', 'click', function (event) {
        if (options.target && options.target.contains(event.target)) {
            return;
        }
        if (options.targets &&
            options.targets.some(function (target) { return target.contains(event.target); })) {
            return;
        }
        options.hide();
    });
}
//# sourceMappingURL=triggers.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/utils/utils.class.js":
/*!**********************************************************!*\
  !*** ../node_modules/ngx-bootstrap/utils/utils.class.js ***!
  \**********************************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _facade_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade/browser */ "../node_modules/ngx-bootstrap/utils/facade/browser.js");

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = 
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());

//# sourceMappingURL=utils.class.js.map

/***/ }),

/***/ "../node_modules/ngx-bootstrap/utils/warn-once.js":
/*!********************************************************!*\
  !*** ../node_modules/ngx-bootstrap/utils/warn-once.js ***!
  \********************************************************/
/*! exports provided: warnOnce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return warnOnce; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var _messagesHash = {};
var _hideMsg = typeof console === 'undefined' || !('warn' in console);
function warnOnce(msg) {
    if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}
//# sourceMappingURL=warn-once.js.map

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



/***/ })

}]);
//# sourceMappingURL=providers-providers-module.js.map