"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishDisabledMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PublishDisabledMessage, _React$Component);

  function PublishDisabledMessage() {
    _classCallCheck(this, PublishDisabledMessage);

    return _possibleConstructorReturn(this, (PublishDisabledMessage.__proto__ || Object.getPrototypeOf(PublishDisabledMessage)).apply(this, arguments));
  }

  _createClass(PublishDisabledMessage, [{
    key: "render",
    value: function render() {
      var message = this.props.message;
      console.log('this.props.message:', message);
      return _react.default.createElement("div", {
        className: "row dropzone--disabled row--tall flex-container--column flex-container--center-center"
      }, _react.default.createElement("p", {
        className: "text--disabled"
      }, "Publishing is currently disabled."), _react.default.createElement("p", {
        className: "text--disabled"
      }, message));
    }
  }]);

  return PublishDisabledMessage;
}(_react.default.Component);

var _default = PublishDisabledMessage;
exports.default = _default;