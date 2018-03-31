"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProgressBar = _interopRequireDefault(require("../../components/ProgressBar"));

var _asset_display_states = require("../../constants/asset_display_states");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AssetDisplay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AssetDisplay, _React$Component);

  function AssetDisplay() {
    _classCallCheck(this, AssetDisplay);

    return _possibleConstructorReturn(this, (AssetDisplay.__proto__ || Object.getPrototypeOf(AssetDisplay)).apply(this, arguments));
  }

  _createClass(AssetDisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props$asset$claimDat = this.props.asset.claimData,
          name = _props$asset$claimDat.name,
          claimId = _props$asset$claimDat.claimId;
      this.props.onFileRequest(name, claimId);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          status = _props.status,
          error = _props.error,
          _props$asset$claimDat2 = _props.asset.claimData,
          name = _props$asset$claimDat2.name,
          claimId = _props$asset$claimDat2.claimId,
          contentType = _props$asset$claimDat2.contentType,
          fileExt = _props$asset$claimDat2.fileExt,
          thumbnail = _props$asset$claimDat2.thumbnail;
      return _react.default.createElement("div", {
        id: "asset-display-component"
      }, status === _asset_display_states.LOCAL_CHECK && _react.default.createElement("div", null, _react.default.createElement("p", null, "Checking to see if Spee.ch has your asset locally...")), status === _asset_display_states.UNAVAILABLE && _react.default.createElement("div", null, _react.default.createElement("p", null, "Sit tight, we're searching the LBRY blockchain for your asset!"), _react.default.createElement(_ProgressBar.default, {
        size: 12
      }), _react.default.createElement("p", null, "Curious what magic is happening here? ", _react.default.createElement("a", {
        className: "link--primary",
        target: "blank",
        href: "https://lbry.io/faq/what-is-lbry"
      }, "Learn more."))), status === _asset_display_states.ERROR && _react.default.createElement("div", null, _react.default.createElement("p", null, "Unfortunately, we couldn't download your asset from LBRY.  You can help us out by sharing the below error message in the ", _react.default.createElement("a", {
        className: "link--primary",
        href: "https://discord.gg/YjYbwhS",
        target: "_blank"
      }, "LBRY discord"), "."), _react.default.createElement("i", null, _react.default.createElement("p", {
        id: "error-message"
      }, error))), status === _asset_display_states.AVAILABLE && function () {
        switch (contentType) {
          case 'image/jpeg':
          case 'image/jpg':
          case 'image/png':
            return _react.default.createElement("img", {
              className: "asset",
              src: "/".concat(claimId, "/").concat(name, ".").concat(fileExt),
              alt: name
            });

          case 'image/gif':
            return _react.default.createElement("img", {
              className: "asset",
              src: "/".concat(claimId, "/").concat(name, ".").concat(fileExt),
              alt: name
            });

          case 'video/mp4':
            return _react.default.createElement("video", {
              className: "asset video",
              controls: true,
              poster: thumbnail
            }, _react.default.createElement("source", {
              src: "/".concat(claimId, "/").concat(name, ".").concat(fileExt)
            }), _react.default.createElement("p", null, "Your browser does not support the ", _react.default.createElement("code", null, "video"), " element."));

          default:
            return _react.default.createElement("p", null, "Unsupported file type");
        }
      }());
    }
  }]);

  return AssetDisplay;
}(_react.default.Component);

;
var _default = AssetDisplay;
exports.default = _default;