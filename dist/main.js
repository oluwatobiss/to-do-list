/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ assign
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ cloneObject
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, dirtyObject);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getTimezoneOffsetInMilliseconds
/* harmony export */ });
var MILLISECONDS_IN_MINUTE = 60000;

function getDateMillisecondsPart(date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE;
}
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */


function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
  date.setSeconds(0, 0);
  var hasNegativeUTCOffset = baseTimezoneOffset > 0;
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE : getDateMillisecondsPart(date);
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ requiredArgs
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ toInteger
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ addDays
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ compareAsc
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ differenceInCalendarMonths
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ differenceInMilliseconds
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ differenceInMonths
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dateLeft, dateRight));
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight) === -sign;
  var result = sign * (difference - isLastMonthNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ differenceInSeconds
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft, dirtyDateRight) / 1000;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ formatDistance
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__.default)(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ isSameDay
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ isSameWeek
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 */

function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ isThisWeek
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ isToday
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isTomorrow/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isTomorrow/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ isTomorrow
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */

function isTomorrow(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Date.now(), 1));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ buildFormatLongFn
/* harmony export */ });
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ buildLocalizeFn
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ buildMatchFn
/* harmony export */ });
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ buildMatchPatternFn
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ formatDistance
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ formatRelative
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__.default,
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__.default,
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ parseISO
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate(), dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    result.setFullYear(dirtyDate.getUTCFullYear());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ startOfDay
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ startOfWeek
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ toDate
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/aggregator.js":
/*!***************************!*\
  !*** ./src/aggregator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shared": () => /* reexport safe */ _shared_js__WEBPACK_IMPORTED_MODULE_0__.shared,
/* harmony export */   "header": () => /* reexport safe */ _header_js__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "mainEle": () => /* reexport safe */ _main_ele_js__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "aside": () => /* reexport safe */ _aside_js__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "newProjModal": () => /* reexport safe */ _new_proj_modal_js__WEBPACK_IMPORTED_MODULE_4__.default,
/* harmony export */   "newTaskModal": () => /* reexport safe */ _new_task_modal__WEBPACK_IMPORTED_MODULE_5__.default,
/* harmony export */   "isToday": () => /* reexport safe */ date_fns__WEBPACK_IMPORTED_MODULE_6__.default,
/* harmony export */   "isTomorrow": () => /* reexport safe */ date_fns__WEBPACK_IMPORTED_MODULE_7__.default,
/* harmony export */   "isThisWeek": () => /* reexport safe */ date_fns__WEBPACK_IMPORTED_MODULE_8__.default,
/* harmony export */   "startOfWeek": () => /* reexport safe */ date_fns__WEBPACK_IMPORTED_MODULE_9__.default,
/* harmony export */   "addDays": () => /* reexport safe */ date_fns__WEBPACK_IMPORTED_MODULE_10__.default,
/* harmony export */   "isSameWeek": () => /* reexport safe */ date_fns__WEBPACK_IMPORTED_MODULE_11__.default,
/* harmony export */   "formatDistance": () => /* reexport safe */ date_fns__WEBPACK_IMPORTED_MODULE_12__.default,
/* harmony export */   "parseISO": () => /* reexport safe */ date_fns__WEBPACK_IMPORTED_MODULE_13__.default
/* harmony export */ });
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.js */ "./src/shared.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _main_ele_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-ele.js */ "./src/main-ele.js");
/* harmony import */ var _aside_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside.js */ "./src/aside.js");
/* harmony import */ var _new_proj_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-proj-modal.js */ "./src/new-proj-modal.js");
/* harmony import */ var _new_task_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-task-modal */ "./src/new-task-modal.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isTomorrow/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");


// export {default as projects} from "./projects.js";






/***/ }),

/***/ "./src/aside.js":
/*!**********************!*\
  !*** ./src/aside.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const asideAreaContent = (() => {
    const newProjBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", ["New Project"], {type: "button", id: "new-proj-btn"});
    const projListDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", null, {id: "proj-list"});
    const footerIconEle = document.createElement("i");
    footerIconEle.classList.add("fas", "fa-arrow-alt-circle-right");
    const footerAnchorEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("a", ["Created by Oluwatobi Sofela ", footerIconEle], {href: "https://www.codesweetly.com/", target: "_blank"});
    const footerEle = document.createElement("footer");
    footerEle.append(footerAnchorEle);
    const asideEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("aside", [newProjBtn, projListDiv, footerEle], {id: "aside-ele"});
    return asideEle;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (asideAreaContent);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const headerAreaContent = (() => {
    const logoIconEle = document.createElement("i");
    logoIconEle.classList.add("fas", "fa-list-alt");
    const logoSpanEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [logoIconEle, " My Plans"]);
    const logoAnchorEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("a", [logoSpanEle], {href: "#", id: "logo"});
    const ulEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("ul", null, {id: "nav-links"});

    const menus = ["Today", "Tomorrow", "This Week", "Next Week", "All Tasks"];
    menus.forEach(createMenuLink);

    function createMenuLink(i) {
        const liEle = document.createElement("li");
        const anchorEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("a", [i], {href: "#", class: "nav-link"});
        liEle.append(anchorEle);
        ulEle.append(liEle);
    }

    const navEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("nav", [ulEle]);
    const headerEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("header", [logoAnchorEle, navEle], {id: "main-header"});
    return headerEle;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerAreaContent);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const contentDiv = document.getElementById("content");
contentDiv.append(_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.header, _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.aside, _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.mainEle, _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.newProjModal, _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.newTaskModal);

const navLinks = Array.from(document.querySelector("#nav-links").children);
const asideEleNode = document.getElementById("aside-ele");
const projListDiv = document.getElementById("proj-list");
const projCards = projListDiv.children;
const mainEleNode = document.getElementById("main-ele");
const activePgTitle = document.getElementById("active-pg-title");
const activePgBody = document.getElementById("active-pg-body");
const taskCards = activePgBody.children;

const newProjModalBg = document.getElementById("new-proj-modal-bg");
const closeProjModalBtn = document.getElementById("close-proj-modal");
const modalBoxProjTitle = document.getElementById("proj-title");
const cancelProjBtn = document.getElementById("cancel-proj-btn");
const createProjBtn = document.getElementById("create-proj-btn");

const newTaskModalBg = document.getElementById("new-task-modal-bg");
const closeTaskModalBtn = document.getElementById("close-task-modal");
const modalBoxTaskTitle = document.getElementById("task-title");
const modalBoxTaskNote = document.getElementById("task-note");
const modalBoxTaskDate = document.getElementById("task-date");
const modalBoxTaskImportance = document.getElementById("task-importance");
const projDropDown = document.getElementById("proj-dropdown");
const cancelTaskBtn = document.getElementById("cancel-task-btn");
const addTaskBtn = document.getElementById("add-task-btn");

const todaysDate = new Date();
const startOfTodaysWeek = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(todaysDate);
const startOfNextWeek = (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.addDays)(startOfTodaysWeek, 7);
console.log(startOfNextWeek);

const projsAndTasks = {
    Important: [], 
    Random: []
};

const defaultProjs = (() => {
    for (const prop in projsAndTasks) {
        if (prop === "Important" || prop === "Random") {
            const projNameSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [prop], {class: "proj-name"});
    
            const taskAmtSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [projsAndTasks[prop].length]);
            const projNameConvert = prop.toLowerCase().replace(/\W/g, "-");
            taskAmtSpan.classList.add("task-amt", `${projNameConvert}-task-amt`);
            
            const projDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [projNameSpan, taskAmtSpan], {class: "proj"});
            projDiv.addEventListener("click", displayProj);
            projListDiv.append(projDiv);

            if (prop !== "Important") {
                const projOptEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("option", [prop]);
                projDropDown.append(projOptEle);
            }
        }
    }
})();

let clickedProjCardIndex = null;
let clickedTaskCardIndex = null;

window.addEventListener("click", closeModal);
window.addEventListener("load", () => displayNavName("windowLoaded"));
navLinks.forEach(i => i.addEventListener("click", displayNavName));
createProjBtn.addEventListener("click", addProjName);
addTaskBtn.addEventListener("click", addTask);
mainEleNode.addEventListener("click", actOnTaskEle);
asideEleNode.addEventListener("click", actOnProjEle);

function displayProj() {
    const clickedProj = this.querySelector(".proj-name").innerText;
    activePgTitle.innerText = clickedProj;

    while (activePgBody.firstChild) {
        activePgBody.firstChild.remove();
    }

    projsAndTasks[clickedProj].forEach(i => createTask(i));
}

function closeModal(objClicked) {
    if (objClicked.target === newProjModalBg || objClicked.target === closeProjModalBtn || objClicked.target === cancelProjBtn) {
        modalBoxProjTitle.value = "";
        newProjModalBg.style.display = "none";
    }
    if (objClicked.target === newTaskModalBg || objClicked.target === closeTaskModalBtn || objClicked.target === cancelTaskBtn) {
        modalBoxTaskTitle.value = "";
        modalBoxTaskNote.value = "";
        modalBoxTaskDate.value = "";
        modalBoxTaskImportance.checked = false;
        newTaskModalBg.style.display = "none";
    }
}

function displayNavName(event) {
    let clickedNavLink = null;
    if (event === "windowLoaded" || event === "projDeleted") {
        clickedNavLink = "Today";
    } else {
        clickedNavLink = this.querySelector(".nav-link").innerText;
    }

    activePgTitle.innerText = clickedNavLink;

    while (activePgBody.firstChild) {
        activePgBody.firstChild.remove();
    }

    if (clickedNavLink === "Today") {
        console.log("This is the space for Today's tasks");

        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                projsAndTasks[prop].forEach(showTodaysTask);

                function showTodaysTask(task) {
                    if ((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isToday)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(task.dueDate))) {
                        createTask(task);
                    }
                }
            }
        }
    }

    if (clickedNavLink === "Tomorrow") {
        console.log("This is the space for Tomorrow's tasks");

        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                projsAndTasks[prop].forEach(showTomorrowsTask);

                function showTomorrowsTask(task) {
                    if ((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isTomorrow)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(task.dueDate))) {
                        createTask(task);
                    }
                }
            }
        }
    }

    if (clickedNavLink === "This Week") {
        console.log("This is the space for This Week's tasks");

        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                projsAndTasks[prop].forEach(showThisWeeksTask);

                function showThisWeeksTask(task) {
                    if ((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isThisWeek)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(task.dueDate))) {
                        createTask(task);
                    }
                }
            }
        }
    }

    if (clickedNavLink === "Next Week") {
        console.log("This is the space for Next Week's tasks");

        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                projsAndTasks[prop].forEach(showNextWeeksTask);

                function showNextWeeksTask(task) {
                    if ((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(task.dueDate), startOfNextWeek)) {
                        createTask(task);
                    }
                }
            }
        }
    }

    if (clickedNavLink === "All Tasks") {
        console.log("This is the space for all tasks");

        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                projsAndTasks[prop].forEach(i => createTask(i));
            }
        }
    }
}

function showNewProjModal() {
    newProjModalBg.style.display = "block";
}

function addProjName() {
    if (!modalBoxProjTitle.value) {
        alert("Error: Name field must not be blank. Please provide a project name.");
    } else {
        if (createProjBtn.innerText === "Create Project") {
            for (const prop in projsAndTasks) {
                if (prop.toLowerCase() === modalBoxProjTitle.value.toLowerCase()) {
                    alert("Error: A project already exist with that name. Please choose a different project name.");
                    return;
                }
            }
            Object.assign(projsAndTasks, {[modalBoxProjTitle.value]: []});
            createProj(modalBoxProjTitle.value);
        } else {
            const currProjName = projCards[clickedProjCardIndex].querySelector(".proj-name").innerText;
            const currprojNameConvert = currProjName.toLowerCase().replace(/\W/g, "-");

            const newProjName = modalBoxProjTitle.value;
            const newprojNameConvert = newProjName.toLowerCase().replace(/\W/g, "-");

            const projOptEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("option", [newProjName], {id: `${newprojNameConvert}-proj-opt`});
            projDropDown.querySelector(`#${currprojNameConvert}-proj-opt`).replaceWith(projOptEle);

            projCards[clickedProjCardIndex].querySelector(".task-amt").classList.add(`${newprojNameConvert}-task-amt`);
            projCards[clickedProjCardIndex].querySelector(".task-amt").classList.remove(`${currprojNameConvert}-task-amt`);

            projCards[clickedProjCardIndex].querySelector(".edit-proj-btn").setAttribute("proj", newprojNameConvert);
            projCards[clickedProjCardIndex].querySelector(".trash-proj-btn").setAttribute("proj", newprojNameConvert);

            projsAndTasks[newProjName] = projsAndTasks[currProjName];
            delete projsAndTasks[currProjName];

            if (activePgTitle.innerText === currProjName) {
                activePgTitle.innerText = newProjName;
            }

            projCards[clickedProjCardIndex].querySelector(".proj-name").innerText = newProjName;
            newProjModalBg.style.display = "none";
            modalBoxProjTitle.value = "";
        }
    }
}

function createProj(projName) {
    const projNameSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [projName], {class: "proj-name"});

    const taskAmtSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [projsAndTasks[projName].length]);
    const projNameConvert = projName.toLowerCase().replace(/\W/g, "-");
    taskAmtSpan.classList.add("task-amt", `${projNameConvert}-task-amt`);

    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-pen");
    const editBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [editIcon], {class: "edit-proj-btn", proj: projNameConvert});

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash");
    const deleteBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [deleteIcon], {class: "trash-proj-btn", proj: projNameConvert});
    
    const projDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [projNameSpan, taskAmtSpan, editBtn, deleteBtn], {class: "proj"});
    projDiv.addEventListener("click", displayProj);
    projListDiv.append(projDiv);

    const projOptEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("option", [projName], {id: `${projNameConvert}-proj-opt`});
    projDropDown.append(projOptEle);

    modalBoxProjTitle.value = "";
    newProjModalBg.style.display = "none";
}

function showNewTaskModal() {
    newTaskModalBg.style.display = "block";
}

function addTask() {
    if (!modalBoxTaskTitle.value) {
        alert("Error: Task field must not be blank. Please write a task.");
    } else {
        if (addTaskBtn.innerText === "Add Task") {
            for (const prop in projsAndTasks) {
                if (prop === projDropDown.value) {
                    const projNameConvert = prop.toLowerCase().replace(/\W/g, "-");
                    const taskInfo = {
                        taskProj: prop,
                        taskDone: false,
                        task: modalBoxTaskTitle.value,
                        note: modalBoxTaskNote.value,
                        dueDate: modalBoxTaskDate.value,
                        important: modalBoxTaskImportance.checked
                    };
    
                    projsAndTasks[prop].push(taskInfo);

                    if (taskInfo.important) {
                        projsAndTasks.Important.push(taskInfo);
                        document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                    }
                    
                    document.querySelector(`.${projNameConvert}-task-amt`).innerText = projsAndTasks[prop].length;
                    
                    if (
                        (activePgTitle.innerText === "Today" && (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isToday)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(taskInfo.dueDate))) ||
                        (activePgTitle.innerText === "Tomorrow" && (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isTomorrow)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(taskInfo.dueDate))) ||
                        (activePgTitle.innerText === "This Week" && (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isThisWeek)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(taskInfo.dueDate))) ||
                        (activePgTitle.innerText === "Next Week" && (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(taskInfo.dueDate), startOfNextWeek)) ||
                        activePgTitle.innerText === "All Tasks" ||
                        activePgTitle.innerText === projDropDown.value ||
                        (activePgTitle.innerText === "Important" && taskInfo.important)
                        ) {
                        createTask(taskInfo);
                    }
                }
            }
        } else {
            for (const prop in projsAndTasks) {
                // Find the selected project
                if (prop === projDropDown.value) {
                    const clickedTaskProjName = taskCards[clickedTaskCardIndex].querySelector(".task-proj").getAttribute("taskProj");
                    const clickedTaskChkBox = taskCards[clickedTaskCardIndex].querySelector(".task-done-chkbox");
                    const clickedTaskImportance = taskCards[clickedTaskCardIndex].querySelector(".important-btn").getAttribute("important");
                    const clickedTaskCard = activePgBody.children[clickedTaskCardIndex];
                    const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;
                    // Store the new task details
                    const taskInfo = {
                        taskProj: prop,
                        taskDone: clickedTaskChkBox.checked,
                        task: modalBoxTaskTitle.value,
                        note: modalBoxTaskNote.value,
                        dueDate: modalBoxTaskDate.value,
                        important: modalBoxTaskImportance.checked
                    };

                    if (clickedTaskImportance === "true" && taskInfo.important === true) {
                        console.log("Both are important!");
                        projsAndTasks.Important.forEach(updateTask);
                        projsAndTasks[clickedTaskProjName].forEach(updateTask);
                    } else if (clickedTaskImportance === "true" && taskInfo.important === false) {
                        console.log("Only clicked task is important!");
                        projsAndTasks.Important.forEach(delTaskFromImpProj);
                        projsAndTasks[clickedTaskProjName].forEach(updateTask);
                    } else if (clickedTaskImportance === "false" && taskInfo.important === true) {
                        console.log("Only updated task is important!");
                        projsAndTasks.Important.push(taskInfo);
                        document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                        projsAndTasks[clickedTaskProjName].forEach(updateTask);
                    } else if (clickedTaskImportance === "false" && taskInfo.important === false) {
                        console.log("None is important!");
                        projsAndTasks[clickedTaskProjName].forEach(updateTask);
                    }

                    function updateTask(currItem) {
                        if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                            currItem.taskProj = prop;
                            currItem.taskDone = taskInfo.taskDone;
                            currItem.task = taskInfo.task;
                            currItem.note = taskInfo.note;
                            currItem.dueDate = taskInfo.dueDate;
                            currItem.important = taskInfo.important;
                        }
                    }

                    function delTaskFromImpProj(currItem, currItemInd) {
                        if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                            projsAndTasks.Important.splice(currItemInd, 1);
                            document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                        }
                    }

                    // If the clicked task's project name is different from the selected project
                    if (clickedTaskProjName !== projDropDown.value) {
                        // Move updated task to the selected project
                        if (activePgTitle.innerText === clickedTaskProjName) {
                            console.log("Page title and clicked task's project are the same!");
                            const removedTask = projsAndTasks[clickedTaskProjName].splice(clickedTaskCardIndex, 1);
                            projsAndTasks[projDropDown.value].push(removedTask[0]);
                        } else {
                            console.log("Page title and clicked task's project are different!");
                            projsAndTasks[clickedTaskProjName].forEach(relocateUpdatedTask);
                            function relocateUpdatedTask(currItem, currItemInd) {
                                if (currItem.taskProj === projDropDown.value && currItem.task === clickedTaskTitle) {
                                    const removedTask = projsAndTasks[clickedTaskProjName].splice(currItemInd, 1);
                                    console.log(removedTask);
                                    projsAndTasks[projDropDown.value].push(removedTask[0]);
                                }
                            }
                        }


                        // Update the clicked task's current project's task amount
                        const clickedTaskprojNameConvert = clickedTaskProjName.toLowerCase().replace(/\W/g, "-");
                        document.querySelector(`.${clickedTaskprojNameConvert}-task-amt`).innerText = projsAndTasks[clickedTaskProjName].length;

                        // Update the selected project's task amount
                        const projDropDownConvert = projDropDown.value.toLowerCase().replace(/\W/g, "-");
                        document.querySelector(`.${projDropDownConvert}-task-amt`).innerText = projsAndTasks[projDropDown.value].length;
                    }
                    
                        // Regenerate task cards
                        while (activePgBody.firstChild) {
                            activePgBody.firstChild.remove();
                        }
    
                        if (
                            activePgTitle.innerText === "Today" ||
                            activePgTitle.innerText === "Tomorrow" ||
                            activePgTitle.innerText === "This Week" ||
                            activePgTitle.innerText === "Next Week" ||
                            activePgTitle.innerText === "All Tasks"
                            ) {
                            for (const prop in projsAndTasks) {
                                if (prop !== "Important") {
                                    projsAndTasks[prop].forEach(createTaskBasedOnNavClicked);

                                    function createTaskBasedOnNavClicked(currItem) {
                                        if (
                                            (activePgTitle.innerText === "Today" && (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isToday)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(currItem.dueDate))) ||
                                            (activePgTitle.innerText === "Tomorrow" && (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isTomorrow)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(currItem.dueDate))) ||
                                            (activePgTitle.innerText === "This Week" && (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isThisWeek)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(currItem.dueDate))) ||
                                            (activePgTitle.innerText === "Next Week" && (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(currItem.dueDate), startOfNextWeek)) ||
                                            activePgTitle.innerText === "All Tasks"
                                            ) {
                                            createTask(currItem);
                                        }
                                    }
                                }
                            }
                        } else {
                            projsAndTasks[activePgTitle.innerText].forEach(i => createTask(i));
                        }
                }
            }
        }
        modalBoxTaskTitle.value = "";
        modalBoxTaskNote.value = "";
        modalBoxTaskDate.value = "";
        modalBoxTaskImportance.checked = false;
        newTaskModalBg.style.display = "none";
    }
}

function createTask(taskInfoObj) {
    console.log(taskInfoObj);
    console.log(taskInfoObj.task);
    const taskSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [taskInfoObj.task]);
    const taskConvert = taskInfoObj.task.toLowerCase().replace(/\W/g, "-");
    const taskDoneInputEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("input", null, {type: "checkbox", class: "task-done-chkbox", task: taskConvert});
    const dueDateInWords = new Date(taskInfoObj.dueDate).toDateString();

    if (taskInfoObj.taskDone) {
        taskDoneInputEle.checked = true;
        taskSpan.classList.add("task", "task-done");
    } else {
        taskDoneInputEle.checked = false;
        taskSpan.classList.add("task");
    }

    const dueDateSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement(
        "span",
        [`Due: ${dueDateInWords} • ${(0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.formatDistance)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(taskInfoObj.dueDate), todaysDate, {addSuffix: true})}`],
        {class: "due-date"}
        );
    const taskAndDateDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [taskSpan, dueDateSpan], {class: "task-and-due-date", task: taskConvert});

    const starIcon = document.createElement("i");
    if (taskInfoObj.important) {
        starIcon.classList.add("fas", "fa-star", "important-task");
    } else {
        starIcon.classList.add("fas", "fa-star");
    }

    let starBtn = null;

    if (taskInfoObj.important) {
        starBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [starIcon], {class: "important-btn", task: taskConvert, important: true});
    } else {
        starBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [starIcon], {class: "important-btn", task: taskConvert, important: false});
    }

    const penIcon = document.createElement("i");
    penIcon.classList.add("fas", "fa-pen");
    const penBtn =  _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [penIcon], {class: "edit-task-btn", task: taskConvert});

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    const trashBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [trashIcon], {class: "trash-task-btn", task: taskConvert});

    const taskInfoSecEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [taskDoneInputEle, taskAndDateDiv, starBtn, penBtn, trashBtn], {class: "task-info"});
    
    const noteStrongEle =_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("strong", ["Note:"]);
    const noteHeaderSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [noteStrongEle], {class: "note-header"});
    const noteBodySpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [taskInfoObj.note], {class: "note-body"});
    const taskProjSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", null, {class: "task-proj", taskProj: taskInfoObj.taskProj});
    taskProjSpan.innerHTML = `<strong>Project:</strong> ${taskInfoObj.taskProj}`;
    const taskNoteSecEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [noteHeaderSpan, noteBodySpan, taskProjSpan], {class: "task-note"});

    const taskCardDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [taskInfoSecEle, taskNoteSecEle], {class: "task-card"});
    activePgBody.append(taskCardDiv);
}

function actOnProjEle(objClicked) {
    const newProjBtn = objClicked.target.closest("#new-proj-btn");
    const projModalHeader = document.getElementById("proj-modal-header");
    const editProjBtn = objClicked.target.closest(".edit-proj-btn");
    const trashProjBtn = objClicked.target.closest(".trash-proj-btn");

    if (newProjBtn) {
        projModalHeader.innerText = "New Project";
        createProjBtn.innerText = "Create Project";
        showNewProjModal();
    }

    if (editProjBtn) {
        projModalHeader.innerText = "Edit Project";
        createProjBtn.innerText = "Update Project";

        for (let i = 0; i < projCards.length; i++) {
            const projName = projCards[i].firstElementChild.innerText;
            const projNameConvert = projName.toLowerCase().replace(/\W/g, "-");

            if (editProjBtn.getAttribute("proj") === projNameConvert) {
                const clickedProjCard = projCards[i];
                modalBoxProjTitle.value = clickedProjCard.querySelector(".proj-name").innerText;
                clickedProjCardIndex = i;
                showNewProjModal();
            }
        }
    }

    if (trashProjBtn) {
        for (let i = 0; i < projCards.length; i++) {
            const projName = projCards[i].firstElementChild.innerText;
            const projNameConvert = projName.toLowerCase().replace(/\W/g, "-");

            if (trashProjBtn.getAttribute("proj") === projNameConvert) {
                const clickedProjCard = projCards[i];
                const clickedProjName = clickedProjCard.querySelector(".proj-name").innerText;
                projsAndTasks[clickedProjName].forEach(checkIfTaskIsImp);
                console.log(`#${projNameConvert}`);
                projDropDown.querySelector(`#${projNameConvert}-proj-opt`).remove();
                delete projsAndTasks[clickedProjName];
                clickedProjCard.remove();
                displayNavName("projDeleted");

                function checkIfTaskIsImp(currItem) {
                    if (currItem.important) {
                        const tasksProjName = currItem.taskProj;
                        const taskTitle = currItem.task;
                        projsAndTasks.Important.forEach(delTaskFromImpProj);
                        function delTaskFromImpProj(currItem, currItemInd) {
                            if (currItem.taskProj === tasksProjName && currItem.task === taskTitle) {
                                projsAndTasks.Important.splice(currItemInd, 1);
                                document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                            }
                        }
                    }
                }
            }
        }
    }
}

function actOnTaskEle(objClicked) {
    const addNewTaskBtn = objClicked.target.closest("#add-new-task-btn");
    const taskModalHeader = document.getElementById("task-modal-header");
    const taskDoneChkBox = objClicked.target.closest(".task-done-chkbox");
    const taskAndDueDateDiv = objClicked.target.closest(".task-and-due-date");
    const starIcon = objClicked.target.closest(".fa-star");
    const editTaskBtn = objClicked.target.closest(".edit-task-btn");
    const trashTaskBtn = objClicked.target.closest(".trash-task-btn");

    if (taskDoneChkBox) {
        for (let i = 0; i < taskCards.length; i++) {
            const task = taskCards[i].querySelector(".task").innerText;
            const taskConvert = task.toLowerCase().replace(/\W/g, "-");
            if (taskDoneChkBox.getAttribute("task") === taskConvert) {
                clickedTaskCardIndex = i;
            }
        }
        const clickedTaskCard = taskCards[clickedTaskCardIndex];
        const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskProj");
        const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;

        const clickedCardTask = activePgBody.children[clickedTaskCardIndex].querySelector(".task");
        clickedCardTask.classList.toggle("task-done");

        if (taskDoneChkBox.checked) {
            projsAndTasks[clickedTaskProjName].forEach(changeTaskDoneToTrue);

            function changeTaskDoneToTrue(currItem, currItemInd) {
                if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                    projsAndTasks[clickedTaskProjName][currItemInd].taskDone = true;
                }
            }
        } else {
            projsAndTasks[clickedTaskProjName].forEach(changeTaskDoneToFalse);

            function changeTaskDoneToFalse(currItem, currItemInd) {
                if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                    projsAndTasks[clickedTaskProjName][currItemInd].taskDone = false;
                }
            }
        }
    }

    if (taskAndDueDateDiv) {
        for (let i = 0; i < taskCards.length; i++) {
            const task = taskCards[i].querySelector(".task").innerText;
            const taskConvert = task.toLowerCase().replace(/\W/g, "-");
            if (taskAndDueDateDiv.getAttribute("task") === taskConvert) {
                clickedTaskCardIndex = i;
            }
        }
        const clickedCardNote = activePgBody.children[clickedTaskCardIndex].querySelector(".task-note");
        if (clickedCardNote.style.display === "") {
            clickedCardNote.style.display = "grid";
        } else {
            clickedCardNote.style.display = "";
        }
    }

    if (addNewTaskBtn) {
        taskModalHeader.innerText = "New Task";
        addTaskBtn.innerText = "Add Task";
        
        const projOptsArr = Array.from(projDropDown.children);
        if (projOptsArr.some(i => i.value === activePgTitle.innerText)) {
            const activePgProjOptIndex = projOptsArr.findIndex((i) => i.value === activePgTitle.innerText);
            projDropDown.children[activePgProjOptIndex].selected = true;
        } else {
            projDropDown.children[0].selected = true;
        }

        showNewTaskModal();
    }

    if (starIcon) {
        for (let i = 0; i < taskCards.length; i++) {
            const task = taskCards[i].querySelector(".task").innerText;
            const taskConvert = task.toLowerCase().replace(/\W/g, "-");
            if (starIcon.closest("button").getAttribute("task") === taskConvert) {
                clickedTaskCardIndex = i;
            }
        }

        const clickedTaskCard = taskCards[clickedTaskCardIndex];
        const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskProj");
        const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;

        starIcon.classList.toggle("important-task");

        if (activePgTitle.innerText === "Important") {
            projsAndTasks[clickedTaskProjName].forEach(changeImpToFalse);

            function changeImpToFalse(currItem, currItemInd) {
                if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                    projsAndTasks[clickedTaskProjName][currItemInd].important = false;
                    clickedTaskCard.querySelector(".important-btn").setAttribute("important", false);
                }
            }

            projsAndTasks.Important.forEach(delTaskFromImpProj);
            
            while (activePgBody.firstChild) {
                activePgBody.firstChild.remove();
            }

            projsAndTasks.Important.forEach(i => createTask(i));
        }

        if (activePgTitle.innerText !== "Important") {
            if (
                activePgTitle.innerText === "Today" ||
                activePgTitle.innerText === "Tomorrow" ||
                activePgTitle.innerText === "This Week" ||
                activePgTitle.innerText === "Next Week" ||
                activePgTitle.innerText === "All Tasks"
                ) {
                projsAndTasks[clickedTaskProjName].forEach(changeTaskImportance);

                function changeTaskImportance(currItem, currItemInd) {
                    if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                        if (currItem.important) {
                            currItem.important = false;
                            clickedTaskCard.querySelector(".important-btn").setAttribute("important", false);
                            projsAndTasks.Important.forEach(delTaskFromImpProj);
                        } else {
                            currItem.important = true;
                            clickedTaskCard.querySelector(".important-btn").setAttribute("important", true);
                            projsAndTasks.Important.push(projsAndTasks[clickedTaskProjName][currItemInd]);
                            document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                        }
                    }
                }
            } else {
                if (projsAndTasks[clickedTaskProjName][clickedTaskCardIndex].important) {
                    projsAndTasks[clickedTaskProjName][clickedTaskCardIndex].important = false;
                    clickedTaskCard.querySelector(".important-btn").setAttribute("important", false);
                    projsAndTasks.Important.forEach(delTaskFromImpProj);
                } else {
                    projsAndTasks[clickedTaskProjName][clickedTaskCardIndex].important = true;
                    clickedTaskCard.querySelector(".important-btn").setAttribute("important", true);
                    projsAndTasks.Important.push(projsAndTasks[clickedTaskProjName][clickedTaskCardIndex]);
                    document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                }
            }
        }

        function delTaskFromImpProj(currItem, currItemInd) {
            if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                projsAndTasks.Important.splice(currItemInd, 1);
                document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
            }
        }
    }

    if (editTaskBtn) {
        for (let i = 0; i < taskCards.length; i++) {
            const task = taskCards[i].querySelector(".task").innerText;
            const taskConvert = task.toLowerCase().replace(/\W/g, "-");
            if (editTaskBtn.closest("button").getAttribute("task") === taskConvert) {
                clickedTaskCardIndex = i;
                console.log(`The clicked task is at index ${clickedTaskCardIndex}`);
            }
        }

        const projOptsArr = Array.from(projDropDown.children);
        const clickedTaskCard = taskCards[clickedTaskCardIndex];
        const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;
        const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskProj");

        taskModalHeader.innerText = "Edit Task";
        addTaskBtn.innerText = "Update Task";

        if (
            activePgTitle.innerText === "Today" ||
            activePgTitle.innerText === "Tomorrow" ||
            activePgTitle.innerText === "This Week" ||
            activePgTitle.innerText === "Next Week" ||
            activePgTitle.innerText === "All Tasks"
            ) {
            projsAndTasks[clickedTaskProjName].forEach(preFillModalBox);
            function preFillModalBox(currItem) {
                if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                    modalBoxTaskTitle.value = currItem.task;
                    modalBoxTaskNote.value = currItem.note;
                    modalBoxTaskDate.value = currItem.dueDate;
                    modalBoxTaskImportance.checked = currItem.important;
                }
            }
        } else {
            modalBoxTaskTitle.value = projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].task;
            modalBoxTaskNote.value = projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].note;
            modalBoxTaskDate.value = projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].dueDate;
            modalBoxTaskImportance.checked = projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].important;
        }

        if (projOptsArr.some(i => i.value === clickedTaskProjName)) {
            const activePgProjOptIndex = projOptsArr.findIndex((i) => i.value === clickedTaskProjName);
            projDropDown.children[activePgProjOptIndex].selected = true;
        }

        showNewTaskModal();
    }

    if (trashTaskBtn) {
        for (let i = 0; i < taskCards.length; i++) {
            const task = taskCards[i].querySelector(".task").innerText;
            const taskConvert = task.toLowerCase().replace(/\W/g, "-");
            if (trashTaskBtn.closest("button").getAttribute("task") === taskConvert) {
                clickedTaskCardIndex = i;
            }
        }
        const clickedTaskCard = activePgBody.children[clickedTaskCardIndex];
        const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskProj");
        const clickedTaskProjNameConvert = clickedTaskProjName.toLowerCase().replace(/\W/g, "-");
        const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;

        console.log(projsAndTasks[clickedTaskProjName]);

        if (activePgTitle.innerText !== "Important") {
            if (
                activePgTitle.innerText === "Today" ||
                activePgTitle.innerText === "Tomorrow" ||
                activePgTitle.innerText === "This Week" ||
                activePgTitle.innerText === "Next Week" ||
                activePgTitle.innerText === "All Tasks"
                ) {
                for (let i = 0; i < projsAndTasks[clickedTaskProjName].length; i++) {
                    const currItem = projsAndTasks[clickedTaskProjName][i];
                    if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                        projsAndTasks[clickedTaskProjName].splice(i, 1);
                        if (currItem.important) {
                            projsAndTasks.Important.forEach(delTaskFromImpProj);
                        }
                    }
                }
            } else {
                projsAndTasks[clickedTaskProjName].splice(clickedTaskCardIndex, 1);
                if (projsAndTasks[clickedTaskProjName][clickedTaskCardIndex].important) {
                    projsAndTasks.Important.forEach(delTaskFromImpProj);
                }
            }
        }

        if (activePgTitle.innerText === "Important") {
            projsAndTasks.Important.forEach(delTaskFromImpProj);

            for (let i = 0; i < projsAndTasks[clickedTaskProjName].length; i++) {
                const currItem = projsAndTasks[clickedTaskProjName][i];
                if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                    projsAndTasks[clickedTaskProjName].splice(i, 1);
                }
            }
        }

        document.querySelector(`.${clickedTaskProjNameConvert}-task-amt`).innerText = projsAndTasks[clickedTaskProjName].length;

        while (activePgBody.firstChild) {
            activePgBody.firstChild.remove();
        }

        if (activePgTitle.innerText === "Important") {
            projsAndTasks.Important.forEach(i => createTask(i));
        } else if (
            activePgTitle.innerText === "Today" ||
            activePgTitle.innerText === "Tomorrow" ||
            activePgTitle.innerText === "This Week" ||
            activePgTitle.innerText === "Next Week" ||
            activePgTitle.innerText === "All Tasks"
            ) {
                for (const prop in projsAndTasks) {
                    if (prop !== "Important") {
                        projsAndTasks[prop].forEach(createTaskBasedOnNavClicked);

                        function createTaskBasedOnNavClicked(currItem) {
                            if (
                                (activePgTitle.innerText === "Today" && (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isToday)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(currItem.dueDate))) ||
                                (activePgTitle.innerText === "Tomorrow" && (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isTomorrow)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(currItem.dueDate))) ||
                                (activePgTitle.innerText === "This Week" && (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isThisWeek)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(currItem.dueDate))) ||
                                (activePgTitle.innerText === "Next Week" && (0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)((0,_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.parseISO)(currItem.dueDate), startOfNextWeek)) ||
                                activePgTitle.innerText === "All Tasks"
                                ) {
                                createTask(currItem);
                            }
                        }
                    }
                }
        } else {
            projsAndTasks[clickedTaskProjName].forEach(i => createTask(i));
        }
            
        function delTaskFromImpProj(currItem, currItemInd) {
            if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                projsAndTasks.Important.splice(currItemInd, 1);
                document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
            }
        }
    }
}

/***/ }),

/***/ "./src/main-ele.js":
/*!*************************!*\
  !*** ./src/main-ele.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const mainEleArea = (() => {
    const activePgTitle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", null, {id: "active-pg-title"});
    const addNewTaskBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", ["Add New Task"], {id: "add-new-task-btn"});
    const activePgHeader = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("header", [activePgTitle, addNewTaskBtn], {id: "active-page-header"});
    const activePgBody = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", null, {id: "active-pg-body"});
    const mainEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("main", [activePgHeader, activePgBody], {id: "main-ele"});
    return mainEle;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainEleArea);

/***/ }),

/***/ "./src/new-proj-modal.js":
/*!*******************************!*\
  !*** ./src/new-proj-modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const newProjModal = (() => {
    const headerTextSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", null, {id: "proj-modal-header"});
    const closeModalSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", ["x"], {id: "close-proj-modal", class: "close-modal"});
    const headerEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("header", [headerTextSpan, closeModalSpan]);

    const cancelProjBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", ["Cancel"], {type: "button", id: "cancel-proj-btn"});
    cancelProjBtn.classList.add("modal-btn", "cancel-btn");

    const createProjBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", null, {type: "button", id: "create-proj-btn"});
    createProjBtn.classList.add("modal-btn", "create-btn");

    const modalBtnDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [cancelProjBtn, createProjBtn], {class: "modal-btns-div"});
    
    const formLabelEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("label", ["Name"], {for: "proj-title"});
    const formInputEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("input", null, {type: "text", id: "proj-title"});
    const newProjFormEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("form", [formLabelEle, formInputEle, modalBtnDiv], {id: "new-proj-form"});

    const modalBoxBodyDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [newProjFormEle], {class: "modal-box-body"});
    const modalBoxDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [headerEle, modalBoxBodyDiv], {id:"new-proj-modal-box", class: "modal-box"});
    const modalBgSection = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [modalBoxDiv], {id: "new-proj-modal-bg", class: "modal-bg"});
    return modalBgSection;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjModal);

/***/ }),

/***/ "./src/new-task-modal.js":
/*!*******************************!*\
  !*** ./src/new-task-modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const newTaskModal = (() => {
    const headerTextSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span",null, {id: "task-modal-header"});
    const closeModalSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", ["x"], {id: "close-task-modal", class: "close-modal"});
    const headerEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("header", [headerTextSpan, closeModalSpan]);
    
    const taskLabelEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("label", ["Task"], {for: "task-title"});
    const taskInputEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("input", null, {type: "text", id: "task-title"});
    const taskDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [taskLabelEle, taskInputEle], {id: "task"});

    const noteLabelEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("label", ["Note"], {for: "task-note"});
    const noteTextAreaEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("textarea", null, {id: "task-note"});
    const noteDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [noteLabelEle, noteTextAreaEle], {id: "note"});

    const dueDateLabelEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("label", ["Due Date"], {for: "task-date"});
    const dueDateInputEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("input", null, {type: "date", id: "task-date"});
    const dueDateDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [dueDateLabelEle, dueDateInputEle], {id: "due-date"});

    const importanceTextSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", ["Mark as important"]);
    const importanceInputEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("input", null, {type: "checkbox", id: "task-importance"});
    const importanceLabelEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("label", [importanceTextSpan, importanceInputEle]);
    const importanceDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [importanceLabelEle], {id: "importance"});

    const addToProjLabelEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("label", ["Add to project"], {for: "proj-dropdown"});
    const addToProjSelectEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("select", null, {id: "proj-dropdown"});
    const addToProjDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [addToProjLabelEle, addToProjSelectEle], {id: "add-to-proj"});

    const cancelTaskBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", ["Cancel"], {type: "button", id: "cancel-task-btn"});
    cancelTaskBtn.classList.add("modal-btn", "cancel-btn");
    const addTaskBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", null, {type: "button", id: "add-task-btn"});
    addTaskBtn.classList.add("modal-btn", "create-btn");
    const modalBtnDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [cancelTaskBtn, addTaskBtn], {class: "modal-btns-div"});
    
    const newProjFormEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("form", [taskDiv, noteDiv, dueDateDiv, importanceDiv, addToProjDiv, modalBtnDiv], {id: "new-proj-form"});

    const modalBoxBodyDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [newProjFormEle], {class: "modal-box-body"});
    const modalBoxDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [headerEle, modalBoxBodyDiv], {id:"new-task-modal-box", class: "modal-box"});
    const modalBgSection = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [modalBoxDiv], {id: "new-task-modal-bg", class: "modal-bg"});
    return modalBgSection;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTaskModal);

/***/ }),

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shared": () => /* binding */ shared
/* harmony export */ });
const shared = (() => {
    return {
        createElement(eleType, node, attr) {
            const element = document.createElement(eleType);
            if (node) {node.forEach(i => element.append(i));}
            if (attr) {
                for (let key in attr) {element.setAttribute(key, attr[key]);}
            }
            return element;
        }
    }
})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map