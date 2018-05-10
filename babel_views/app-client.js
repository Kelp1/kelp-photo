"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _home = require("./pages/home");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  _reactDom2.default.hydrate(_react2.default.createElement(_home2.default, MyApp.initialState), document.getElementById("PhotoGallery"));
}; // src/app-client.js