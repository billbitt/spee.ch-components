"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rootSaga = require("./rootSaga");

var _show_uri = require("./show_uri");

// import { watchHandleShowPageUri } from './show_uri';
// import { watchNewAssetRequest } from './show_asset';
// import { watchNewChannelRequest, watchUpdateChannelClaims } from './show_channel';
// import { watchFileIsRequested } from './file';
// import { watchPublishStart } from './publish';
var _default = {
  rootSaga: _rootSaga.rootSaga,
  handleShowPageUri: _show_uri.handleShowPageUri
};
exports.default = _default;