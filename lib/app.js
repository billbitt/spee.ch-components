"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _dynamicImport = require("./utils/dynamicImport");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customizedApp = function customizedApp(_ref) {
  var customPages = _ref.customPages;

  var HomePage = (0, _dynamicImport.dynamicImport)('HomePage', customPages) || require('./pages/HomePage').default;

  var AboutPage = (0, _dynamicImport.dynamicImport)('AboutPage', customPages) || require('./pages/AboutPage').default;

  var LoginPage = (0, _dynamicImport.dynamicImport)('LoginPage', customPages) || require('./pages/LoginPage').default;

  var ShowPage = (0, _dynamicImport.dynamicImport)('ShowPage', customPages) || require('./pages/ShowPage').default;

  var FourOhFourPage = (0, _dynamicImport.dynamicImport)('pages/FourOhFourPage', customPages) || require('./pages/FourOhFourPage').default;

  return function () {
    return _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/",
      component: HomePage
    }), _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/about",
      component: AboutPage
    }), _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/login",
      component: LoginPage
    }), _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/:identifier/:claim",
      component: ShowPage
    }), _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/:claim",
      component: ShowPage
    }), _react.default.createElement(_reactRouterDom.Route, {
      component: FourOhFourPage
    }));
  };
};

var _default = customizedApp;
exports.default = _default;