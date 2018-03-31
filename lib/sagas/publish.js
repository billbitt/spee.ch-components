"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchPublishStart = watchPublishStart;

var _effects = require("redux-saga/effects");

var actions = _interopRequireWildcard(require("../constants/publish_action_types"));

var publishStates = _interopRequireWildcard(require("../constants/publish_claim_states"));

var _publish = require("../actions/publish");

var _publish2 = require("../selectors/publish");

var _channel = require("../selectors/channel");

var _site = require("../selectors/site");

var _validate = require("../utils/validate");

var _publish3 = require("../utils/publish");

var _publish4 = require("../channels/publish");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(publishFile),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(watchPublishStart);

function publishFile(action) {
  var history, _ref, publishInChannel, selectedChannel, file, claim, metadata, thumbnailChannel, thumbnailChannelId, thumbnail, urlError, _ref2, loggedInChannel, _ref3, host, publishMetadata, publishFormData, publishChannel, _ref4, loadStart, progress, load, success, error;

  return regeneratorRuntime.wrap(function publishFile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          history = action.data.history;
          _context.next = 3;
          return (0, _effects.select)(_publish2.selectPublishState);

        case 3:
          _ref = _context.sent;
          publishInChannel = _ref.publishInChannel;
          selectedChannel = _ref.selectedChannel;
          file = _ref.file;
          claim = _ref.claim;
          metadata = _ref.metadata;
          thumbnailChannel = _ref.thumbnailChannel;
          thumbnailChannelId = _ref.thumbnailChannelId;
          thumbnail = _ref.thumbnail;
          urlError = _ref.error.url;
          _context.next = 15;
          return (0, _effects.select)(_channel.selectChannelState);

        case 15:
          _ref2 = _context.sent;
          loggedInChannel = _ref2.loggedInChannel;
          _context.next = 19;
          return (0, _effects.select)(_site.selectSiteState);

        case 19:
          _ref3 = _context.sent;
          host = _ref3.host;
          _context.prev = 21;
          (0, _validate.validateChannelSelection)(publishInChannel, selectedChannel, loggedInChannel);
          _context.next = 30;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](21);
          _context.next = 29;
          return (0, _effects.put)((0, _publish.updateError)('channel', _context.t0.message));

        case 29:
          return _context.abrupt("return", _context.sent);

        case 30:
          ; // validate publish parameters

          _context.prev = 31;
          (0, _validate.validatePublishParams)(file, claim, urlError);
          _context.next = 40;
          break;

        case 35:
          _context.prev = 35;
          _context.t1 = _context["catch"](31);
          _context.next = 39;
          return (0, _effects.put)((0, _publish.updateError)('publishSubmit', _context.t1.message));

        case 39:
          return _context.abrupt("return", _context.sent);

        case 40:
          // create metadata
          publishMetadata = (0, _publish3.createPublishMetadata)(claim, file, metadata, publishInChannel, selectedChannel);

          if (thumbnail) {
            // add thumbnail to publish metadata
            publishMetadata['thumbnail'] = (0, _publish3.createThumbnailUrl)(thumbnailChannel, thumbnailChannelId, claim, host);
          } // create form data for main publish


          publishFormData = (0, _publish3.createPublishFormData)(file, thumbnail, publishMetadata); // make the publish request

          _context.next = 45;
          return (0, _effects.call)(_publish4.makePublishRequestChannel, publishFormData);

        case 45:
          publishChannel = _context.sent;

        case 46:
          if (!true) {
            _context.next = 74;
            break;
          }

          _context.next = 49;
          return (0, _effects.take)(publishChannel);

        case 49:
          _ref4 = _context.sent;
          loadStart = _ref4.loadStart;
          progress = _ref4.progress;
          load = _ref4.load;
          success = _ref4.success;
          error = _ref4.error;

          if (!error) {
            _context.next = 59;
            break;
          }

          _context.next = 58;
          return (0, _effects.put)((0, _publish.updatePublishStatus)(publishStates.FAILED, error.message));

        case 58:
          return _context.abrupt("return", _context.sent);

        case 59:
          if (!success) {
            _context.next = 63;
            break;
          }

          _context.next = 62;
          return (0, _effects.put)((0, _publish.clearFile)());

        case 62:
          return _context.abrupt("return", history.push("/".concat(success.data.claimId, "/").concat(success.data.name)));

        case 63:
          if (!loadStart) {
            _context.next = 66;
            break;
          }

          _context.next = 66;
          return (0, _effects.put)((0, _publish.updatePublishStatus)(publishStates.LOAD_START, null));

        case 66:
          if (!progress) {
            _context.next = 69;
            break;
          }

          _context.next = 69;
          return (0, _effects.put)((0, _publish.updatePublishStatus)(publishStates.LOADING, "".concat(progress, "%")));

        case 69:
          if (!load) {
            _context.next = 72;
            break;
          }

          _context.next = 72;
          return (0, _effects.put)((0, _publish.updatePublishStatus)(publishStates.PUBLISHING, null));

        case 72:
          _context.next = 46;
          break;

        case 74:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[21, 25], [31, 35]]);
}

;

function watchPublishStart() {
  return regeneratorRuntime.wrap(function watchPublishStart$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(actions.PUBLISH_START, publishFile);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

;