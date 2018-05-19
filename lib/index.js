'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTinymce = require('react-tinymce');

var _reactTinymce2 = _interopRequireDefault(_reactTinymce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TinyMCEInput = function TinyMCEInput(_ref) {
  var id = _ref.id,
      disabled = _ref.disabled,
      label = _ref.label,
      name = _ref.name,
      _ref$input = _ref.input,
      value = _ref$input.value,
      _onChange = _ref$input.onChange,
      config = _ref.config;
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
  addField: _react.PropTypes.bool.isRequired,
  addLabel: _react.PropTypes.bool.isRequired,
  input: _react.PropTypes.object,
  label: _react.PropTypes.string,
  options: _react.PropTypes.object,
  source: _react.PropTypes.string,
  config: _react.PropTypes.object
};

TinyMCEInput.defaultProps = {
  addField: true,
  addLabel: true,
  options: {},
  record: {}
};

exports.default = TinyMCEInput;
module.exports = exports['default'];