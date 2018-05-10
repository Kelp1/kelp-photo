'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Photo = require('./Photo.jsx');

var _Photo2 = _interopRequireDefault(_Photo);

var _Modal = require('./Modal.jsx');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = require('query-string');

var _ref = _jsx('span', {}, void 0, _jsx('img', {
  height: '220',
  width: '660',
  src: 'https://s3-us-west-1.amazonaws.com/welp-icons/0Pictures.png',
  className: 'emptypage'
}));

var _ref2 = _jsx('span', {}, void 0, _jsx('img', {
  height: '220',
  width: '440',
  src: 'https://s3-us-west-1.amazonaws.com/welp-icons/1Pictures.png',
  className: 'emptypage'
}));

var _ref3 = _jsx('span', {}, void 0, _jsx('img', {
  height: '220',
  width: '220',
  src: 'https://s3-us-west-1.amazonaws.com/welp-icons/2Pictures.png',
  className: 'emptypage'
}));

var PhotoGallery = function (_React$Component) {
  _inherits(PhotoGallery, _React$Component);

  function PhotoGallery(props) {
    _classCallCheck(this, PhotoGallery);

    var _this = _possibleConstructorReturn(this, (PhotoGallery.__proto__ || Object.getPrototypeOf(PhotoGallery)).call(this, props));

    _this.state = {
      photos: [],
      currentPhotos: [],
      showModal: false,
      selectedPhoto: [],
      index: 0,
      modalIndex: 0,
      totalNumberOfPics: 0
    };
    _this.handleOpen = _this.handleOpen.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.previousPhoto = _this.previousPhoto.bind(_this);
    _this.nextPhoto = _this.nextPhoto.bind(_this);
    _this.sliderNext = _this.sliderNext.bind(_this);
    _this.sliderPrevious = _this.sliderPrevious.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    return _this;
  }

  _createClass(PhotoGallery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var parsed = queryString.parse(location.search);
      this.getPhotos(Number(parsed.id));
    }
  }, {
    key: 'getPhotos',
    value: function getPhotos(id) {
      var _this2 = this;

      _jquery2.default.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:3003/api/photo/' + id,
        dataType: 'json',
        contentType: 'application/json',
        success: function success(results) {
          var restaurantPhotos = [];
          for (var i = 0; i < results.length; i++) {
            restaurantPhotos.push(results[i]);
          }
          var firstThreePhotos = restaurantPhotos.slice(0, 3);
          _this2.setState({
            photos: restaurantPhotos,
            currentPhotos: firstThreePhotos,
            totalNumberOfPics: restaurantPhotos.length
          });
        },
        error: function error(_error) {
          console.log('get request error');
        }
      });
    }
  }, {
    key: 'handleOpen',
    value: function handleOpen(photo) {
      var index = this.state.photos.indexOf(photo);
      this.setState({
        showModal: true,
        selectedPhoto: photo,
        modalIndex: index
      });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({
        showModal: false,
        selectedPhoto: []
      });
    }
  }, {
    key: 'previousPhoto',
    value: function previousPhoto() {
      var previousOne = void 0;
      if (this.state.modalIndex === 0) {
        previousOne = this.state.photos[this.state.photos.length - 1];
      } else {
        previousOne = this.state.photos[this.state.modalIndex - 1];
      }
      var newModalIndex = this.state.modalIndex - 1;
      if (newModalIndex === -1) {
        newModalIndex = this.state.totalNumberOfPics - 1;
      }
      this.setState({
        selectedPhoto: previousOne,
        modalIndex: newModalIndex
      });
    }
  }, {
    key: 'nextPhoto',
    value: function nextPhoto() {
      var nextOne = void 0;
      if (this.state.modalIndex === this.state.photos.length - 1) {
        nextOne = this.state.photos[0];
      } else {
        nextOne = this.state.photos[this.state.modalIndex + 1];
      }
      var newModalIndex = this.state.modalIndex + 1;
      if (newModalIndex === this.state.totalNumberOfPics) {
        newModalIndex = 0;
      }
      this.setState({
        selectedPhoto: nextOne,
        modalIndex: newModalIndex
      });
    }
  }, {
    key: 'sliderNext',
    value: function sliderNext() {
      if (this.state.index < this.state.photos.length - 3) {
        var nextThree = this.state.photos.slice(this.state.index + 1, this.state.index + 4);
        this.setState({
          index: this.state.index + 1,
          currentPhotos: nextThree
        });
      }
    }
  }, {
    key: 'sliderPrevious',
    value: function sliderPrevious() {
      if (this.state.index > 0) {
        var previousThree = this.state.photos.slice(this.state.index - 1, this.state.index + 2);
        this.setState({
          index: this.state.index - 1,
          currentPhotos: previousThree
        });
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      if (event.keyCode === 27) {
        this.handleClose();
      } else if (event.keyCode === 37) {
        this.previousPhoto();
      } else if (event.keyCode === 39) {
        this.nextPhoto();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _jsx('div', {
        className: 'wrapper'
      }, void 0, _jsx('div', {
        className: 'intro',
        tabIndex: 0,
        onKeyDown: this.handleKeyPress
      }, void 0, this.state.totalNumberOfPics >= 3 && _jsx('a', {
        className: 'photo-gallery-prev',
        onClick: function onClick() {
          return _this3.sliderPrevious();
        }
      }), this.state.currentPhotos.map(function (photo) {
        return _jsx(_Photo2.default, {
          photo: photo,
          handleOpen: _this3.handleOpen,
          totalNumberOfPics: _this3.state.totalNumberOfPics,
          emptyPage: _this3.state.emptyPage
        }, photo.photoId);
      }), this.state.totalNumberOfPics >= 3 && _jsx('a', {
        className: 'photo-gallery-next',
        onClick: function onClick() {
          return _this3.sliderNext();
        }
      }), this.state.totalNumberOfPics === 0 && _ref, this.state.totalNumberOfPics === 1 && _ref2, this.state.totalNumberOfPics === 2 && _ref3, this.state.showModal && _jsx(_Modal2.default, {
        selectedPhoto: this.state.selectedPhoto,
        handleClose: this.handleClose,
        previousPhoto: this.previousPhoto,
        nextPhoto: this.nextPhoto,
        modalIndex: this.state.modalIndex,
        totalNumberOfPics: this.state.totalNumberOfPics
      })));
    }
  }]);

  return PhotoGallery;
}(_react2.default.Component);

exports.default = PhotoGallery;