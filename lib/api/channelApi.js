"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannelData = getChannelData;
exports.getChannelClaims = getChannelClaims;

var _request = _interopRequireDefault(require("../utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChannelData(host, id, name) {
  if (!id) id = 'none';
  var url = "".concat(host, "/api/channel/data/").concat(name, "/").concat(id);
  return (0, _request.default)(url);
}

;

function getChannelClaims(host, longId, name, page) {
  if (!page) page = 1;
  var url = "".concat(host, "/api/channel/claims/").concat(name, "/").concat(longId, "/").concat(page);
  return (0, _request.default)(url);
}

;