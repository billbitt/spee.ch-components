"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootSaga = rootSaga;

var _effects = require("redux-saga/effects");

var _show_uri = require("./show_uri");

var _show_asset = require("./show_asset");

var _show_channel = require("./show_channel");

var _file = require("./file");

var _publish = require("./publish");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _show_uri.watchHandleShowPageUri)(), (0, _show_asset.watchNewAssetRequest)(), (0, _show_channel.watchNewChannelRequest)(), (0, _show_channel.watchUpdateChannelClaims)(), (0, _file.watchFileIsRequested)(), (0, _publish.watchPublishStart)()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}