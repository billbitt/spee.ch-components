"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _dynamicImport = require("./utils/dynamicImport");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import LoginPage from './pages/LoginPage';
// import ShowPage from './pages/ShowPage';
// import FourOhFourPage from './containers/FourOhFourPage';
var customizedApp = function customizedApp(siteConfig) {
  console.log(siteConfig);

  var HomePage = (0, _dynamicImport.dynamicImport)('pages/HomePage', siteConfig) || require('./pages/HomePage');

  var AboutPage = (0, _dynamicImport.dynamicImport)('pages/AboutPage', siteConfig) || require('./pages/AboutPage');

  var LoginPage = (0, _dynamicImport.dynamicImport)('pages/LoginPage', siteConfig) || require('./pages/LoginPage');

  var ShowPage = (0, _dynamicImport.dynamicImport)('pages/ShowPage', siteConfig) || require('./pages/ShowPage');

  var FourOhFourPage = (0, _dynamicImport.dynamicImport)('pages/FourOhFourPage', siteConfig) || require('./pages/FourOhFourPage');

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