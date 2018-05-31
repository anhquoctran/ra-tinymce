'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTinymce = require('react-tinymce');

var _reactTinymce2 = _interopRequireDefault(_reactTinymce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TinyMCEInput = function TinyMCEInput(_ref) {
  var id = _ref.id,
      disabled = _ref.disabled,
      label = _ref.label,
      name = _ref.name,
      _ref$input = _ref.input,
      input = _ref$input === undefined ? {} : _ref$input,
      config = _ref.config;

  var _input$value = input.value,
      value = _input$value === undefined ? "" : _input$value,
      _input$onChange = input.onChange,
      _onChange = _input$onChange === undefined ? function () {} : _input$onChange;

  return _react2.default.createElement(_reactTinymce2.default, {
    id: id,
    content: value,
    config: _extends({
      skin: false,
      theme: 'modern'
    }, config),
    onChange: function onChange(e) {
      _onChange(e.target.getContent());
    }
  });
};

TinyMCEInput.propTypes = {
  addField: _propTypes2.default.bool.isRequired,
  addLabel: _propTypes2.default.bool.isRequired,
  input: _propTypes2.default.object,
  label: _propTypes2.default.string,
  options: _propTypes2.default.object,
  source: _propTypes2.default.string,
  config: _propTypes2.default.object
};

TinyMCEInput.defaultProps = {
  addField: true,
  addLabel: true,
  options: {},
  record: {}
};

exports.default = TinyMCEInput;
module.exports = exports['default'];