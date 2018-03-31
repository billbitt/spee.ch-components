"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SEO = _interopRequireDefault(require("../../components/SEO"));

var _ErrorPage = _interopRequireDefault(require("../../pages/ErrorPage"));

var _NavBar = _interopRequireDefault(require("../NavBar"));

var _ChannelClaimsDisplay = _interopRequireDefault(require("../ChannelClaimsDisplay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowChannel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ShowChannel, _React$Component);

  function ShowChannel() {
    _classCallCheck(this, ShowChannel);

    return _possibleConstructorReturn(this, (ShowChannel.__proto__ || Object.getPrototypeOf(ShowChannel)).apply(this, arguments));
  }

  _createClass(ShowChannel, [{
    key: "render",
    value: function render() {
      var channel = this.props.channel;

      if (channel) {
        var name = channel.name,
            longId = channel.longId,
            shortId = channel.shortId;
        return _react.default.createElement("div", null, _react.default.createElement(_SEO.default, {
          pageTitle: name,
          channel: channel
        }), _react.default.createElement(_NavBar.default, null), _react.default.createElement("div", {
          className: "row row--tall row--padded"
        }, _react.default.createElement("div", {
          className: "column column--10"
        }, _react.default.createElement("h2", null, "channel name: ", name), _react.default.createElement("p", {
          className: 'fine-print'
        }, "full channel id: ", longId), _react.default.createElement("p", {
          className: 'fine-print'
        }, "short channel id: ", shortId)), _react.default.createElement("div", {
          className: "column column--10"
        }, _react.default.createElement(_ChannelClaimsDisplay.default, null))));
      }

      ;
      return _react.default.createElement(_ErrorPage.default, {
        error: 'loading channel data...'
      });
    }
  }]);

  return ShowChannel;
}(_react.default.Component);

;
var _default = ShowChannel;
exports.default = _default;