"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProgressBar = _interopRequireDefault(require("../../components/ProgressBar"));

var _request = _interopRequireDefault(require("../../utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var ChannelCreateForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChannelCreateForm, _React$Component);

  function ChannelCreateForm(props) {
    var _this;

    _classCallCheck(this, ChannelCreateForm);

    _this = _possibleConstructorReturn(this, (ChannelCreateForm.__proto__ || Object.getPrototypeOf(ChannelCreateForm)).call(this, props));
    _this.state = {
      error: null,
      channel: '',
      password: '',
      status: null
    };
    _this.handleChannelInput = _this.handleChannelInput.bind(_assertThisInitialized(_this));
    _this.handleInput = _this.handleInput.bind(_assertThisInitialized(_this));
    _this.createChannel = _this.createChannel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ChannelCreateForm, [{
    key: "cleanseChannelInput",
    value: function cleanseChannelInput(input) {
      input = input.replace(/\s+/g, '-'); // replace spaces with dashes

      input = input.replace(/[^A-Za-z0-9-]/g, ''); // remove all characters that are not A-Z, a-z, 0-9, or '-'

      return input;
    }
  }, {
    key: "handleChannelInput",
    value: function handleChannelInput(event) {
      var value = event.target.value;
      value = this.cleanseChannelInput(value);
      this.setState({
        channel: value
      });

      if (value) {
        this.updateIsChannelAvailable(value);
      } else {
        this.setState({
          error: 'Please enter a channel name'
        });
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput(event) {
      var name = event.target.name;
      var value = event.target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "updateIsChannelAvailable",
    value: function updateIsChannelAvailable(channel) {
      var _this2 = this;

      var channelWithAtSymbol = "@".concat(channel);
      (0, _request.default)("/api/channel/availability/".concat(channelWithAtSymbol)).then(function () {
        _this2.setState({
          'error': null
        });
      }).catch(function (error) {
        _this2.setState({
          'error': error.message
        });
      });
    }
  }, {
    key: "checkIsChannelAvailable",
    value: function checkIsChannelAvailable(channel) {
      var channelWithAtSymbol = "@".concat(channel);
      return (0, _request.default)("/api/channel/availability/".concat(channelWithAtSymbol));
    }
  }, {
    key: "checkIsPasswordProvided",
    value: function checkIsPasswordProvided(password) {
      return new Promise(function (resolve, reject) {
        if (!password || password.length < 1) {
          return reject(new Error('Please provide a password'));
        }

        resolve();
      });
    }
  }, {
    key: "makePublishChannelRequest",
    value: function makePublishChannelRequest(username, password) {
      var params = {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        credentials: 'include'
      };
      return new Promise(function (resolve, reject) {
        (0, _request.default)('/signup', params).then(function (result) {
          return resolve(result);
        }).catch(function (error) {
          reject(new Error("Unfortunately, we encountered an error while creating your channel. Please let us know in Discord! ".concat(error.message)));
        });
      });
    }
  }, {
    key: "createChannel",
    value: function createChannel(event) {
      var _this3 = this;

      event.preventDefault();
      this.checkIsPasswordProvided(this.state.password).then(function () {
        return _this3.checkIsChannelAvailable(_this3.state.channel);
      }).then(function () {
        _this3.setState({
          status: 'We are publishing your new channel.  Sit tight...'
        });

        return _this3.makePublishChannelRequest(_this3.state.channel, _this3.state.password);
      }).then(function (result) {
        _this3.setState({
          status: null
        });

        _this3.props.onChannelLogin(result.channelName, result.shortChannelId, result.channelClaimId);
      }).catch(function (error) {
        if (error.message) {
          _this3.setState({
            'error': error.message,
            status: null
          });
        } else {
          _this3.setState({
            'error': error,
            status: null
          });
        }

        ;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, !this.state.status ? _react.default.createElement("form", {
        id: "publish-channel-form"
      }, _react.default.createElement("div", {
        className: "row row--wide row--short"
      }, _react.default.createElement("div", {
        className: "column column--3 column--sml-10"
      }, _react.default.createElement("label", {
        className: "label",
        htmlFor: "new-channel-name"
      }, "Name:")), _react.default.createElement("div", {
        className: "column column--6 column--sml-10"
      }, _react.default.createElement("div", {
        className: "input-text--primary flex-container--row flex-container--left-bottom span--relative"
      }, _react.default.createElement("span", null, "@"), _react.default.createElement("input", {
        type: "text",
        name: "channel",
        id: "new-channel-name",
        className: "input-text",
        placeholder: "exampleChannelName",
        value: this.state.channel,
        onChange: this.handleChannelInput
      }), this.state.channel && !this.state.error && _react.default.createElement("span", {
        id: "input-success-channel-name",
        className: "info-message--success span--absolute"
      }, "\u2713"), this.state.error && _react.default.createElement("span", {
        id: "input-success-channel-name",
        className: "info-message--failure span--absolute"
      }, "\u2716")))), _react.default.createElement("div", {
        className: "row row--wide row--short"
      }, _react.default.createElement("div", {
        className: "column column--3 column--sml-10"
      }, _react.default.createElement("label", {
        className: "label",
        htmlFor: "new-channel-password"
      }, "Password:")), _react.default.createElement("div", {
        className: "column column--6 column--sml-10"
      }, _react.default.createElement("div", {
        className: "input-text--primary"
      }, _react.default.createElement("input", {
        type: "password",
        name: "password",
        id: "new-channel-password",
        className: "input-text",
        placeholder: "",
        value: this.state.password,
        onChange: this.handleInput
      })))), this.state.error ? _react.default.createElement("p", {
        className: "info-message--failure"
      }, this.state.error) : _react.default.createElement("p", {
        className: "info-message"
      }, "Choose a name and password for your channel"), _react.default.createElement("div", {
        className: "row row--wide"
      }, _react.default.createElement("button", {
        className: "button--primary",
        onClick: this.createChannel
      }, "Create Channel"))) : _react.default.createElement("div", null, _react.default.createElement("p", {
        className: "fine-print"
      }, this.state.status), _react.default.createElement(_ProgressBar.default, {
        size: 12
      })));
    }
  }]);

  return ChannelCreateForm;
}(_react.default.Component);

var _default = ChannelCreateForm;
exports.default = _default;