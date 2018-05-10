'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CommentBox = require('./CommentBox.jsx');

var _CommentBox2 = _interopRequireDefault(_CommentBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('span', {
  className: 'modal-underbar-left'
}, void 0, '   Browse All ');

var _ref2 = _jsx('span', {
  className: 'modal-underbar-right'
}, void 0, ' Share   ');

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _jsx('div', {
        className: 'modal',
        onClick: function onClick() {
          return _this2.props.handleClose();
        }
      }, void 0, _jsx('span', {
        className: 'close cursor',
        onClick: function onClick() {
          return _this2.props.handleClose();
        }
      }, void 0, 'Close  \xD7'), _jsx('div', {
        className: 'modal-photo',
        onClick: function onClick(event) {
          return event.stopPropagation();
        }
      }, void 0, _jsx('a', {
        className: 'modal-prev',
        onClick: function onClick() {
          return _this2.props.previousPhoto(_this2.props.selectedPhoto);
        }
      }), _jsx('img', {
        className: 'modal-selectedphoto',
        src: this.props.selectedPhoto.photoUrl
      }), _jsx('div', {
        className: 'modal-underbar',
        onClick: function onClick(event) {
          return event.stopPropagation();
        }
      }, void 0, _ref, _jsx('span', {
        className: 'modal-underbar-middle'
      }, void 0, ' ', this.props.modalIndex + 1, ' of ', this.props.totalNumberOfPics), _ref2), _jsx('a', {
        className: 'modal-next',
        onClick: function onClick() {
          return _this2.props.nextPhoto(_this2.props.selectedPhoto);
        }
      })), _jsx('div', {
        className: 'modal-comment',
        onClick: function onClick(event) {
          return event.stopPropagation();
        }
      }, void 0, _jsx(_CommentBox2.default, {
        photo: this.props.selectedPhoto
      })));
    }
  }]);

  return Modal;
}(_react2.default.Component);

exports.default = Modal;