"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ExpandingTextArea = _interopRequireDefault(require("../../components/ExpandingTextArea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var PublishMetadataInputs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PublishMetadataInputs, _React$Component);

  function PublishMetadataInputs(props) {
    var _this;

    _classCallCheck(this, PublishMetadataInputs);

    _this = _possibleConstructorReturn(this, (PublishMetadataInputs.__proto__ || Object.getPrototypeOf(PublishMetadataInputs)).call(this, props));
    _this.toggleShowInputs = _this.toggleShowInputs.bind(_assertThisInitialized(_this));
    _this.handleInput = _this.handleInput.bind(_assertThisInitialized(_this));
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PublishMetadataInputs, [{
    key: "toggleShowInputs",
    value: function toggleShowInputs() {
      this.props.onToggleMetadataInputs(!this.props.showMetadataInputs);
    }
  }, {
    key: "handleInput",
    value: function handleInput(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      this.props.onMetadataChange(name, value);
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(event) {
      var name = event.target.name;
      var selectedOption = event.target.selectedOptions[0].value;
      this.props.onMetadataChange(name, selectedOption);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        id: "publish-details",
        className: "row row--padded row--no-top row--wide"
      }, this.props.showMetadataInputs && _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "row row--no-top"
      }, _react.default.createElement("div", {
        className: "column column--3 column--med-10 align-content-top"
      }, _react.default.createElement("label", {
        htmlFor: "publish-license",
        className: "label"
      }, "Description:")), _react.default.createElement("div", {
        className: "column column--7 column--sml-10"
      }, _react.default.createElement(_ExpandingTextArea.default, {
        id: "publish-description",
        className: "textarea textarea--primary textarea--full-width",
        rows: 1,
        maxLength: 2000,
        style: {
          maxHeight: 200
        },
        name: "description",
        placeholder: "Optional description",
        value: this.props.description,
        onChange: this.handleInput
      }))), _react.default.createElement("div", {
        className: "row row--no-top"
      }, _react.default.createElement("div", {
        className: "column column--3 column--med-10"
      }, _react.default.createElement("label", {
        htmlFor: "publish-license",
        className: "label"
      }, "License:")), _react.default.createElement("div", {
        className: "column column--7 column--sml-10"
      }, _react.default.createElement("select", {
        type: "text",
        name: "license",
        id: "publish-license",
        className: "select select--primary",
        onChange: this.handleSelect
      }, _react.default.createElement("option", {
        value: " "
      }, "Unspecified"), _react.default.createElement("option", {
        value: "Public Domain"
      }, "Public Domain"), _react.default.createElement("option", {
        value: "Creative Commons"
      }, "Creative Commons")))), _react.default.createElement("div", {
        className: "row row--no-top"
      }, _react.default.createElement("div", {
        className: "column column--3"
      }, _react.default.createElement("label", {
        htmlFor: "publish-nsfw",
        className: "label"
      }, "Mature:")), _react.default.createElement("div", {
        className: "column column--7"
      }, _react.default.createElement("input", {
        className: "input-checkbox",
        type: "checkbox",
        id: "publish-nsfw",
        name: "nsfw",
        value: this.props.nsfw,
        onChange: this.handleInput
      })))), _react.default.createElement("button", {
        className: "button--secondary",
        onClick: this.toggleShowInputs
      }, this.props.showMetadataInputs ? 'less' : 'more'));
    }
  }]);

  return PublishMetadataInputs;
}(_react.default.Component);

var _default = PublishMetadataInputs;
exports.default = _default;