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

var _DescriptionBar = require('./DescriptionBar.jsx');

var _DescriptionBar2 = _interopRequireDefault(_DescriptionBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Photo = function (_React$Component) {
  _inherits(Photo, _React$Component);

  function Photo(props) {
    _classCallCheck(this, Photo);

    var _this = _possibleConstructorReturn(this, (Photo.__proto__ || Object.getPrototypeOf(Photo)).call(this, props));

    _this.state = {
      hovered: false
    };
    return _this;
  }

  _createClass(Photo, [{
    key: 'mouseOnPic',
    value: function mouseOnPic() {
      this.setState({
        hovered: true
      });
    }
  }, {
    key: 'mouseLeavePic',
    value: function mouseLeavePic() {
      this.setState({
        hovered: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.hovered === true) {
        return _jsx('span', {
          className: 'picture',
          onMouseEnter: function onMouseEnter() {
            return _this2.mouseOnPic();
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.mouseLeavePic();
          },
          onClick: function onClick() {
            return _this2.props.handleOpen(_this2.props.photo);
          }
        }, void 0, _jsx('img', {
          height: '250',
          width: '250',
          src: this.props.photo.photoUrl,
          className: 'image'
        }), _jsx(_DescriptionBar2.default, {
          photo: this.props.photo
        }));
      } else {
        return _jsx('span', {
          className: 'picture',
          onMouseEnter: function onMouseEnter() {
            return _this2.mouseOnPic();
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.mouseLeavePic();
          },
          onClick: function onClick() {
            return _this2.props.handleOpen(_this2.props.photo);
          }
        }, void 0, _jsx('img', {
          height: '220',
          width: '220',
          src: this.props.photo.photoUrl,
          className: 'image'
        }));
      }
    }
  }]);

  return Photo;
}(_react2.default.Component);

exports.default = Photo;