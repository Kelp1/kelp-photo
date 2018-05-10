/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!*****************************!*\
  !*** ./client/src/Html.jsx ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Html\n * This Html.js file acts as a template that we insert all our generated\n * application code into before sending it to the client as regular HTML.\n * Note we're returning a template string from this function.\n */\nvar Html = function Html(_ref) {\n  var body = _ref.body,\n      title = _ref.title;\n  return \"\\n  <!DOCTYPE html>\\n  <html>\\n    <head>\\n      <title>\" + title + \"</title>\\n    </head>\\n    <body style=\\\"margin:0\\\">\\n      <div id=\\\"app\\\">\" + body + \"</div>\\n    </body>\\n  </html>\\n\";\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL0h0bWwuanN4PzkyZjUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIdG1sXG4gKiBUaGlzIEh0bWwuanMgZmlsZSBhY3RzIGFzIGEgdGVtcGxhdGUgdGhhdCB3ZSBpbnNlcnQgYWxsIG91ciBnZW5lcmF0ZWRcbiAqIGFwcGxpY2F0aW9uIGNvZGUgaW50byBiZWZvcmUgc2VuZGluZyBpdCB0byB0aGUgY2xpZW50IGFzIHJlZ3VsYXIgSFRNTC5cbiAqIE5vdGUgd2UncmUgcmV0dXJuaW5nIGEgdGVtcGxhdGUgc3RyaW5nIGZyb20gdGhpcyBmdW5jdGlvbi5cbiAqL1xuY29uc3QgSHRtbCA9ICh7IGJvZHksIHRpdGxlIH0pID0+IGBcbiAgPCFET0NUWVBFIGh0bWw+XG4gIDxodG1sPlxuICAgIDxoZWFkPlxuICAgICAgPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5cbiAgICA8L2hlYWQ+XG4gICAgPGJvZHkgc3R5bGU9XCJtYXJnaW46MFwiPlxuICAgICAgPGRpdiBpZD1cImFwcFwiPiR7Ym9keX08L2Rpdj5cbiAgICA8L2JvZHk+XG4gIDwvaHRtbD5cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9IdG1sLmpzeCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!***************************!*\
  !*** ./database/index.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pg = __webpack_require__(/*! pg */ 13);\n\nmodule.exports.getById = function (redis, businessId, callback) {\n  redis.get(businessId, function (error, reply) {\n    if (error) {\n      callback(null);\n    } else if (reply) {\n      callback(JSON.parse(reply));\n    } else {\n      var connectionString = process.env.DATABASE_URL || 'postgres://postgres:student@localhost:5432/kelp';\n      var results = [];\n      // Get a Postgres client from the connection pool\n      pg.connect(connectionString, function (err, client, done) {\n        // Handle connection errors\n        if (err) {\n          console.log(err);\n        }\n        // SQL Query > Select Data\n        var query = client.query('SELECT * FROM photosView where id=($1) ORDER BY id ASC;', [businessId]);\n        // Stream results back one row at a time\n        query.on('row', function (row) {\n          var result = {\n            photoId: row.photoid,\n            photoUrl: row.photourl,\n            id: row.id,\n            date: row.photodate,\n            userId: row.userid,\n            userName: row.username,\n            userFollowers: row.userfollowers,\n            userReviews: row.userreviews\n          };\n          results.push(result);\n        });\n        // After all data is returned, close connection and return results\n        query.on('end', function () {\n          callback(results);\n        });\n      });\n    }\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kYXRhYmFzZS9pbmRleC5qcz9jZDI4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBnID0gcmVxdWlyZSgncGcnKTtcblxubW9kdWxlLmV4cG9ydHMuZ2V0QnlJZCA9IChyZWRpcywgYnVzaW5lc3NJZCwgY2FsbGJhY2spID0+IHtcbiAgcmVkaXMuZ2V0KGJ1c2luZXNzSWQsIChlcnJvciwgcmVwbHkpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgIH0gZWxzZSBpZiAocmVwbHkpIHtcbiAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UocmVwbHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29ubmVjdGlvblN0cmluZyA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCB8fCAncG9zdGdyZXM6Ly9wb3N0Z3JlczpzdHVkZW50QGxvY2FsaG9zdDo1NDMyL2tlbHAnO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgLy8gR2V0IGEgUG9zdGdyZXMgY2xpZW50IGZyb20gdGhlIGNvbm5lY3Rpb24gcG9vbFxuICAgICAgcGcuY29ubmVjdChjb25uZWN0aW9uU3RyaW5nLCAoZXJyLCBjbGllbnQsIGRvbmUpID0+IHtcbiAgICAgICAgLy8gSGFuZGxlIGNvbm5lY3Rpb24gZXJyb3JzXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNRTCBRdWVyeSA+IFNlbGVjdCBEYXRhXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gY2xpZW50LnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHBob3Rvc1ZpZXcgd2hlcmUgaWQ9KCQxKSBPUkRFUiBCWSBpZCBBU0M7JywgW2J1c2luZXNzSWRdKTtcbiAgICAgICAgLy8gU3RyZWFtIHJlc3VsdHMgYmFjayBvbmUgcm93IGF0IGEgdGltZVxuICAgICAgICBxdWVyeS5vbigncm93JywgKHJvdykgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgICBwaG90b0lkOiByb3cucGhvdG9pZCxcbiAgICAgICAgICAgIHBob3RvVXJsOiByb3cucGhvdG91cmwsXG4gICAgICAgICAgICBpZDogcm93LmlkLFxuICAgICAgICAgICAgZGF0ZTogcm93LnBob3RvZGF0ZSxcbiAgICAgICAgICAgIHVzZXJJZDogcm93LnVzZXJpZCxcbiAgICAgICAgICAgIHVzZXJOYW1lOiByb3cudXNlcm5hbWUsXG4gICAgICAgICAgICB1c2VyRm9sbG93ZXJzOiByb3cudXNlcmZvbGxvd2VycyxcbiAgICAgICAgICAgIHVzZXJSZXZpZXdzOiByb3cudXNlcnJldmlld3MsXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFmdGVyIGFsbCBkYXRhIGlzIHJldHVybmVkLCBjbG9zZSBjb25uZWN0aW9uIGFuZCByZXR1cm4gcmVzdWx0c1xuICAgICAgICBxdWVyeS5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRhdGFiYXNlL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCI/NDY1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/* no static exports found */
/* all exports used */
/*!**************************!*\
  !*** external "cluster" ***!
  \**************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"cluster\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNsdXN0ZXJcIj9jMDNjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsdXN0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjbHVzdGVyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/* no static exports found */
/* all exports used */
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIj84OWQ1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/* no static exports found */
/* all exports used */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/* no static exports found */
/* all exports used */
/*!***************************!*\
  !*** external "newrelic" ***!
  \***************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"newrelic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm5ld3JlbGljXCI/MDE1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXdyZWxpY1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5ld3JlbGljXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/* no static exports found */
/* all exports used */
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm9zXCI/NDliYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9zXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/* no static exports found */
/* all exports used */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/* no static exports found */
/* all exports used */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCI/M2M2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCI/NDFiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/* no static exports found */
/* all exports used */
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWRpc1wiP2JjZWIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWRpc1wiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/* no static exports found */
/* all exports used */
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === \"function\" && Symbol.for && Symbol.for(\"react.element\") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();\n\nvar cluster = __webpack_require__(/*! cluster */ 3);\n\nif (cluster.isMaster) {\n  // Count the machine's CPUs\n\n  var cpuCount = __webpack_require__(/*! os */ 7).cpus().length;\n\n  // Create a worker for each CPU\n  for (var i = 0; i < cpuCount; i += 1) {\n    cluster.fork();\n  }\n} else {\n  var nr = __webpack_require__(/*! newrelic */ 6);\n  var express = __webpack_require__(/*! express */ 5);\n  var cors = __webpack_require__(/*! cors */ 4);\n  var app = express();\n  var bodyParser = __webpack_require__(/*! body-parser */ 2);\n  var path = __webpack_require__(/*! path */ 8);\n  var db = __webpack_require__(/*! ../database/index.js */ 1);\n\n  var _require = __webpack_require__(/*! react-dom/server */ 10),\n      renderToString = _require.renderToString;\n\n  var React = __webpack_require__(/*! react */ 9);\n  var PhotoGallery = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"../client/src/components/PhotoGallery\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n      _ref = _jsx(PhotoGallery, {});\n  var redisClient = __webpack_require__(/*! redis */ 11).createClient;\n  var Html = __webpack_require__(/*! ../client/src/Html.jsx */ 0);\n\n  var redis = redisClient(6379, 'localhost');\n\n  app.use(express.static(path.join(__dirname, '../client/public')));\n\n  app.get('/', function (req, res, next) {\n    var markup = renderToString(_ref);\n    res.send('\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <title>SSR with RR</title>\\n      </head>\\n\\n      <body>\\n        <div id=\"app\">' + markup + '</div>\\n      </body>\\n    </html>\\n  ');\n  });\n\n  app.use(bodyParser.json());\n  app.use(function (req, res, next) {\n    console.log(req.url, req.method);\n    next();\n  });\n  app.use(cors());\n\n  app.get('/api/photo/:id', function (req, res) {\n    db.getById(redis, req.params.id, function (results) {\n      res.json(results);\n    });\n  });\n  app.listen(3003, function () {\n    return console.log(\"I am listening to Dylan's Channel: localhost:3003\");\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(exports, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2VydmVyL2luZGV4LmpzPzA4NjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2x1c3RlciA9IHJlcXVpcmUoJ2NsdXN0ZXInKTtcblxuaWYgKGNsdXN0ZXIuaXNNYXN0ZXIpIHtcbiAgLy8gQ291bnQgdGhlIG1hY2hpbmUncyBDUFVzXG5cbiAgY29uc3QgY3B1Q291bnQgPSByZXF1aXJlKCdvcycpLmNwdXMoKS5sZW5ndGg7XG5cbiAgLy8gQ3JlYXRlIGEgd29ya2VyIGZvciBlYWNoIENQVVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNwdUNvdW50OyBpICs9IDEpIHtcbiAgICBjbHVzdGVyLmZvcmsoKTtcbiAgfVxufSBlbHNlIHtcbiAgY29uc3QgbnIgPSByZXF1aXJlKCduZXdyZWxpYycpO1xuICBjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuICBjb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpO1xuICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG4gIGNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuICBjb25zdCBkYiA9IHJlcXVpcmUoJy4uL2RhdGFiYXNlL2luZGV4LmpzJyk7XG4gIGNvbnN0IHsgcmVuZGVyVG9TdHJpbmcgfSA9IHJlcXVpcmUoJ3JlYWN0LWRvbS9zZXJ2ZXInKTtcbiAgY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuICBjb25zdCBQaG90b0dhbGxlcnkgPSByZXF1aXJlKCcuLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUGhvdG9HYWxsZXJ5Jyk7XG4gIGNvbnN0IHJlZGlzQ2xpZW50ID0gcmVxdWlyZSgncmVkaXMnKS5jcmVhdGVDbGllbnQ7XG4gIGNvbnN0IEh0bWwgPSByZXF1aXJlKCcuLi9jbGllbnQvc3JjL0h0bWwuanN4Jyk7XG4gIFxuICBjb25zdCByZWRpcyA9IHJlZGlzQ2xpZW50KDYzNzksICdsb2NhbGhvc3QnKTtcblxuICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9jbGllbnQvcHVibGljJykpKTtcblxuICBhcHAuZ2V0KCcvJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgICA8UGhvdG9HYWxsZXJ5IC8+XG4gICAgKVxuICAgIHJlcy5zZW5kKGBcbiAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8dGl0bGU+U1NSIHdpdGggUlI8L3RpdGxlPlxuICAgICAgPC9oZWFkPlxuXG4gICAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBpZD1cImFwcFwiPiR7bWFya3VwfTwvZGl2PlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgYClcbiAgfSlcblxuICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXEudXJsLCByZXEubWV0aG9kKTtcbiAgICBuZXh0KCk7IFxuICB9KTtcbiAgYXBwLnVzZShjb3JzKCkpO1xuXG4gIGFwcC5nZXQoJy9hcGkvcGhvdG8vOmlkJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgZGIuZ2V0QnlJZChyZWRpcywgcmVxLnBhcmFtcy5pZCwgKHJlc3VsdHMpID0+IHtcbiAgICAgIHJlcy5qc29uKHJlc3VsdHMpO1xuICAgIH0pO1xuICB9KTtcbiAgYXBwLmxpc3RlbigzMDAzLCAoKSA9PiBjb25zb2xlLmxvZyhcIkkgYW0gbGlzdGVuaW5nIHRvIER5bGFuJ3MgQ2hhbm5lbDogbG9jYWxob3N0OjMwMDNcIikpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZXJ2ZXIvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/* no static exports found */
/* all exports used */
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwZ1wiPzdkOTgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwZ1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ })
/******/ ]);