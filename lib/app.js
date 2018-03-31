"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _dynamicImport = require("./utils/dynamicImport");

var _LoginPage = _interopRequireDefault(require("./pages/LoginPage"));

var _ShowPage = _interopRequireDefault(require("./pages/ShowPage"));

var _FourOhFourPage = _interopRequireDefault(require("./containers/FourOhFourPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = (0, _dynamicImport.dynamicImport)('pages/HomePage') || require('./pages/HomePage').default;

var AboutPage = (0, _dynamicImport.dynamicImport)('pages/AboutPage') || require('./pages/AboutPage').default;

var App = function App() {
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
    component: _LoginPage.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/:identifier/:claim",
    component: _ShowPage.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/:claim",
    component: _ShowPage.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    component: _FourOhFourPage.default
  }));
};

var _default = App;
exports.default = _default;