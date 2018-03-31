"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _HomePage = _interopRequireDefault(require("./pages/HomePage"));

var _AboutPage = _interopRequireDefault(require("./pages/AboutPage"));

var _LoginPage = _interopRequireDefault(require("./pages/LoginPage"));

var _ShowPage = _interopRequireDefault(require("./pages/ShowPage"));

var _FourOhFourPage = _interopRequireDefault(require("./containers/FourOhFourPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  // console.log(siteConfig);
  // import HomePage from './pages/HomePage';
  // import { dynamicImport } from './utils/dynamicImport';
  // const HomePage = dynamicImport('pages/HomePage', config); // || require('./pages/HomePage').default;
  // const AboutPage = dynamicImport('pages/AboutPage', config); // || require('./pages/AboutPage').default;
  return _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _HomePage.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/about",
    component: _AboutPage.default
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