'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {}, void 0, _jsx('img', {
  className: 'comment-userprofile',
  src: 'https://s3-us-west-1.amazonaws.com/welp-icons/userProfile.png',
  height: '50',
  width: '50'
}));

var _ref2 = _jsx('img', {
  className: 'comment-follwers',
  src: 'https://s3-us-west-1.amazonaws.com/welp-icons/followers.png',
  height: '20',
  width: '25'
});

var _ref3 = _jsx('img', {
  className: 'comment-reviews',
  src: 'https://s3-us-west-1.amazonaws.com/welp-icons/reviews.png',
  height: '20',
  width: '25'
});

var _ref4 = _jsx('span', {
  className: 'comment-elite'
}, void 0, '   Elite \'18 ');

var _ref5 = _jsx('div', {
  className: 'comment-sentence'
}, void 0, 'This is a comment');

var _ref6 = _jsx('div', {
  className: 'comment-question'
}, void 0, 'Was this photo ...?');

var _ref7 = _jsx('div', {
  className: 'comment-helpful'
}, void 0, _jsx('button', {}, void 0, ' Helpful  '), _jsx('button', {}, void 0, ' Not Helpful '));

var CommentBox = function (_React$Component) {
  _inherits(CommentBox, _React$Component);

  function CommentBox() {
    _classCallCheck(this, CommentBox);

    return _possibleConstructorReturn(this, (CommentBox.__proto__ || Object.getPrototypeOf(CommentBox)).apply(this, arguments));
  }

  _createClass(CommentBox, [{
    key: 'render',
    value: function render() {
      return _jsx('div', {
        className: 'comment'
      }, void 0, _jsx('div', {
        className: 'commentblock1'
      }, void 0, _ref, _jsx('div', {
        className: 'commentblock2'
      }, void 0, _jsx('div', {}, void 0, _jsx('span', {
        className: 'comment-username'
      }, void 0, this.props.photo.userName)), _jsx('div', {}, void 0, _ref2, _jsx('span', {}, void 0, this.props.photo.userFollowers), _ref3, _jsx('span', {}, void 0, this.props.photo.userReviews, '   '), _ref4))), _ref5, _jsx('div', {
        className: 'comment-date'
      }, void 0, (0, _moment2.default)('' + this.props.photo.date).format('LL')), _ref6, _ref7);
    }
  }]);

  return CommentBox;
}(_react2.default.Component);

exports.default = CommentBox;