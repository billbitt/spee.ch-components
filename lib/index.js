"use strict";

var _app = _interopRequireDefault(require("./app"));

var _reducers = _interopRequireDefault(require("./reducers"));

var _sagas = _interopRequireDefault(require("./sagas"));

var _actions = _interopRequireDefault(require("./actions"));

var _AboutPage = _interopRequireDefault(require("./pages/AboutPage"));

var _ErrorPage = _interopRequireDefault(require("./pages/ErrorPage"));

var _HomePage = _interopRequireDefault(require("./pages/HomePage"));

var _LoginPage = _interopRequireDefault(require("./pages/LoginPage"));

var _ShowPage = _interopRequireDefault(require("./pages/ShowPage"));

var _AssetDisplay = _interopRequireDefault(require("./containers/AssetDisplay"));

var _AssetInfo = _interopRequireDefault(require("./containers/AssetInfo"));

var _AssetTitle = _interopRequireDefault(require("./containers/AssetTitle"));

var _ChannelClaimsDisplay = _interopRequireDefault(require("./containers/ChannelClaimsDisplay"));

var _ChannelCreateForm = _interopRequireDefault(require("./containers/ChannelCreateForm"));

var _ChannelLoginForm = _interopRequireDefault(require("./containers/ChannelLoginForm"));

var _ChannelSelect = _interopRequireDefault(require("./containers/ChannelSelect"));

var _Dropzone = _interopRequireDefault(require("./containers/Dropzone"));

var _FourOhFourPage = _interopRequireDefault(require("./pages/FourOhFourPage"));

var _NavBar = _interopRequireDefault(require("./containers/NavBar"));

var _PublishDetails = _interopRequireDefault(require("./containers/PublishDetails"));

var _PublishDisabledMessage = _interopRequireDefault(require("./containers/PublishDisabledMessage"));

var _PublishMetadataInputs = _interopRequireDefault(require("./containers/PublishMetadataInputs"));

var _PublishStatus = _interopRequireDefault(require("./containers/PublishStatus"));

var _PublishThumbnailInput = _interopRequireDefault(require("./containers/PublishThumbnailInput"));

var _PublishTitleInput = _interopRequireDefault(require("./containers/PublishTitleInput"));

var _PublishTool = _interopRequireDefault(require("./containers/PublishTool"));

var _PublishUrlInput = _interopRequireDefault(require("./containers/PublishUrlInput"));

var _ShowAssetDetails = _interopRequireDefault(require("./containers/ShowAssetDetails"));

var _ShowAssetLite = _interopRequireDefault(require("./containers/ShowAssetLite"));

var _ShowChannel = _interopRequireDefault(require("./containers/ShowChannel"));

var _ActiveStatusBar = _interopRequireDefault(require("./components/ActiveStatusBar"));

var _AssetPreview = _interopRequireDefault(require("./components/AssetPreview"));

var _ExpandingTextArea = _interopRequireDefault(require("./components/ExpandingTextArea"));

var _GAListener = _interopRequireDefault(require("./components/GAListener"));

var _InactiveStatusBar = _interopRequireDefault(require("./components/InactiveStatusBar"));

var _Logo = _interopRequireDefault(require("./components/Logo"));

var _NavBarChannelOptionsDropdown = _interopRequireDefault(require("./components/NavBarChannelOptionsDropdown"));

var _ProgressBar = _interopRequireDefault(require("./components/ProgressBar"));

var _PublishPreview = _interopRequireDefault(require("./components/PublishPreview"));

var _PublishUrlMiddleDisplay = _interopRequireDefault(require("./components/PublishUrlMiddleDisplay"));

var _SEO = _interopRequireDefault(require("./components/SEO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// app, reducers, sagas, actions
// containers
// components
// can it be a function and pass in the config like this?,
// or should all the configs just come from the store (assuming the initial config can be used to config the store)?
module.exports = {
  App: _app.default,
  Reducers: _reducers.default,
  Sagas: _sagas.default,
  // includes all the sagas
  Actions: _actions.default,
  // includes all the actions
  AboutPage: _AboutPage.default,
  ErrorPage: _ErrorPage.default,
  HomePage: _HomePage.default,
  LoginPage: _LoginPage.default,
  ShowPage: _ShowPage.default,
  AssetDisplay: _AssetDisplay.default,
  AssetInfo: _AssetInfo.default,
  AssetTitle: _AssetTitle.default,
  ChannelClaimsDisplay: _ChannelClaimsDisplay.default,
  ChannelCreateForm: _ChannelCreateForm.default,
  ChannelLoginForm: _ChannelLoginForm.default,
  ChannelSelect: _ChannelSelect.default,
  Dropzone: _Dropzone.default,
  FourOhFourPage: _FourOhFourPage.default,
  NavBar: _NavBar.default,
  PublishDetails: _PublishDetails.default,
  PublishDisabledMessage: _PublishDisabledMessage.default,
  PublishMetadataInputs: _PublishMetadataInputs.default,
  PublishStatus: _PublishStatus.default,
  PublishThumbnailInput: _PublishThumbnailInput.default,
  PublishTitleInput: _PublishTitleInput.default,
  PublishTool: _PublishTool.default,
  PublishUrlInput: _PublishUrlInput.default,
  ShowAssetDetails: _ShowAssetDetails.default,
  ShowAssetLite: _ShowAssetLite.default,
  ShowChannel: _ShowChannel.default,
  ActiveStatusBar: _ActiveStatusBar.default,
  AssetPreview: _AssetPreview.default,
  ExpandingTextArea: _ExpandingTextArea.default,
  GAListener: _GAListener.default,
  InactiveStatusBar: _InactiveStatusBar.default,
  Logo: _Logo.default,
  NavBarChannelOptionsDropdown: _NavBarChannelOptionsDropdown.default,
  ProgressBar: _ProgressBar.default,
  PublishPreview: _PublishPreview.default,
  PublishUrlMiddleDisplay: _PublishUrlMiddleDisplay.default,
  SEO: _SEO.default
};