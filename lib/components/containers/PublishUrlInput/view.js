"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _request = _interopRequireDefault(require("../../utils/request"));

var _PublishUrlMiddleDisplay = _interopRequireDefault(require("../../components/PublishUrlMiddleDisplay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var PublishUrlInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PublishUrlInput, _React$Component);

  function PublishUrlInput(props) {
    var _this;

    _classCallCheck(this, PublishUrlInput);

    _this = _possibleConstructorReturn(this, (PublishUrlInput.__proto__ || Object.getPrototypeOf(PublishUrlInput)).call(this, props));
    _this.handleInput = _this.handleInput.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PublishUrlInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          claim = _props.claim,
          fileName = _props.fileName;

      if (!claim) {
        this.setClaimName(fileName);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var claim = _ref.claim,
          fileName = _ref.fileName;

      // if a new file was chosen, update the claim name
      if (fileName !== this.props.fileName) {
        return this.setClaimName(fileName);
      } // if the claim has updated, check its availability


      if (claim !== this.props.claim) {
        this.validateClaim(claim);
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput(event) {
      var value = event.target.value;
      value = this.cleanseInput(value); // update the state

      this.props.onClaimChange(value);
    }
  }, {
    key: "cleanseInput",
    value: function cleanseInput(input) {
      input = input.replace(/\s+/g, '-'); // replace spaces with dashes

      input = input.replace(/[^A-Za-z0-9-]/g, ''); // remove all characters that are not A-Z, a-z, 0-9, or '-'

      return input;
    }
  }, {
    key: "setClaimName",
    value: function setClaimName(fileName) {
      var fileNameWithoutEnding = fileName.substring(0, fileName.lastIndexOf('.'));
      var cleanClaimName = this.cleanseInput(fileNameWithoutEnding);
      this.props.onClaimChange(cleanClaimName);
    }
  }, {
    key: "validateClaim",
    value: function validateClaim(claim) {
      var _this2 = this;

      if (!claim) {
        return this.props.onUrlError('Enter a url above');
      }

      (0, _request.default)("/api/claim/availability/".concat(claim)).then(function () {
        _this2.props.onUrlError(null);
      }).catch(function (error) {
        _this2.props.onUrlError(error.message);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          claim = _props2.claim,
          loggedInChannelName = _props2.loggedInChannelName,
          loggedInChannelShortId = _props2.loggedInChannelShortId,
          publishInChannel = _props2.publishInChannel,
          selectedChannel = _props2.selectedChannel,
          urlError = _props2.urlError;
      return _react.default.createElement("div", {
        className: "column column--10 column--sml-10"
      }, _react.default.createElement("div", {
        className: "input-text--primary span--relative"
      }, _react.default.createElement("span", {
        className: "url-text--secondary"
      }, "spee.ch / "), _react.default.createElement(_PublishUrlMiddleDisplay.default, {
        publishInChannel: publishInChannel,
        selectedChannel: selectedChannel,
        loggedInChannelName: loggedInChannelName,
        loggedInChannelShortId: loggedInChannelShortId
      }), _react.default.createElement("input", {
        type: "text",
        id: "claim-name-input",
        className: "input-text",
        name: "claim",
        placeholder: "your-url-here",
        onChange: this.handleInput,
        value: claim
      }), claim && !urlError && _react.default.createElement("span", {
        id: "input-success-claim-name",
        className: "info-message--success span--absolute"
      }, "\u2713"), urlError && _react.default.createElement("span", {
        id: "input-success-channel-name",
        className: "info-message--failure span--absolute"
      }, "\u2716")), _react.default.createElement("div", null, urlError ? _react.default.createElement("p", {
        id: "input-error-claim-name",
        className: "info-message--failure"
      }, urlError) : _react.default.createElement("p", {
        className: "info-message"
      }, "Choose a custom url")));
    }
  }]);

  return PublishUrlInput;
}(_react.default.Component);

var _default = PublishUrlInput;
exports.default = _default;