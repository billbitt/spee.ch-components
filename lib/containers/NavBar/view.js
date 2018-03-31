"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Logo = _interopRequireDefault(require("../../components/Logo"));

var _NavBarChannelOptionsDropdown = _interopRequireDefault(require("../../components/NavBarChannelOptionsDropdown"));

var _request = _interopRequireDefault(require("../../utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var VIEW = 'VIEW';
var LOGOUT = 'LOGOUT';

var NavBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    var _this;

    _classCallCheck(this, NavBar);

    _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));
    _this.checkForLoggedInUser = _this.checkForLoggedInUser.bind(_assertThisInitialized(_this));
    _this.logoutUser = _this.logoutUser.bind(_assertThisInitialized(_this));
    _this.handleSelection = _this.handleSelection.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NavBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // check to see if the user is already logged in
      this.checkForLoggedInUser();
    }
  }, {
    key: "checkForLoggedInUser",
    value: function checkForLoggedInUser() {
      var _this2 = this;

      var params = {
        credentials: 'include'
      };
      (0, _request.default)('/user', params).then(function (_ref) {
        var data = _ref.data;

        _this2.props.onChannelLogin(data.channelName, data.shortChannelId, data.channelClaimId);
      }).catch(function (error) {
        console.log('/user error:', error.message);
      });
    }
  }, {
    key: "logoutUser",
    value: function logoutUser() {
      var _this3 = this;

      var params = {
        credentials: 'include'
      };
      (0, _request.default)('/logout', params).then(function () {
        _this3.props.onChannelLogout();
      }).catch(function (error) {
        console.log('/logout error', error.message);
      });
    }
  }, {
    key: "handleSelection",
    value: function handleSelection(event) {
      var value = event.target.selectedOptions[0].value;

      switch (value) {
        case LOGOUT:
          this.logoutUser();
          break;

        case VIEW:
          // redirect to channel page
          this.props.history.push("/".concat(this.props.channelName, ":").concat(this.props.channelLongId));
          break;

        default:
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var siteDescription = this.props.siteDescription;
      return _react.default.createElement("div", {
        className: "row row--wide nav-bar"
      }, _react.default.createElement("div", {
        className: "row row--padded row--short flex-container--row flex-container--space-between-center"
      }, _react.default.createElement(_Logo.default, null), _react.default.createElement("div", {
        className: "nav-bar--center"
      }, _react.default.createElement("span", {
        className: "nav-bar-tagline"
      }, siteDescription)), _react.default.createElement("div", {
        className: "nav-bar--right"
      }, _react.default.createElement(_reactRouterDom.NavLink, {
        className: "nav-bar-link link--nav",
        activeClassName: "link--nav-active",
        to: "/",
        exact: true
      }, "Publish"), _react.default.createElement(_reactRouterDom.NavLink, {
        className: "nav-bar-link link--nav",
        activeClassName: "link--nav-active",
        to: "/about"
      }, "About"), this.props.channelName ? _react.default.createElement(_NavBarChannelOptionsDropdown.default, {
        channelName: this.props.channelName,
        handleSelection: this.handleSelection,
        defaultSelection: this.props.channelName,
        VIEW: VIEW,
        LOGOUT: LOGOUT
      }) : _react.default.createElement(_reactRouterDom.NavLink, {
        id: "nav-bar-login-link",
        className: "nav-bar-link link--nav",
        activeClassName: "link--nav-active",
        to: "/login"
      }, "Channel"))));
    }
  }]);

  return NavBar;
}(_react.default.Component);

var _default = (0, _reactRouterDom.withRouter)(NavBar);

exports.default = _default;