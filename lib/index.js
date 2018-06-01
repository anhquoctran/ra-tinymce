'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TinyMCEInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTinymce = require('react-tinymce');

var _reactTinymce2 = _interopRequireDefault(_reactTinymce);

var _raCore = require('ra-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var sanitizeRestProps = function sanitizeRestProps(_ref) {
	var alwaysOn = _ref.alwaysOn,
	    basePath = _ref.basePath,
	    component = _ref.component,
	    defaultValue = _ref.defaultValue,
	    formClassName = _ref.formClassName,
	    initializeForm = _ref.initializeForm,
	    input = _ref.input,
	    isRequired = _ref.isRequired,
	    label = _ref.label,
	    locale = _ref.locale,
	    meta = _ref.meta,
	    options = _ref.options,
	    optionText = _ref.optionText,
	    optionValue = _ref.optionValue,
	    record = _ref.record,
	    resource = _ref.resource,
	    allowEmpty = _ref.allowEmpty,
	    source = _ref.source,
	    textAlign = _ref.textAlign,
	    translate = _ref.translate,
	    translateChoice = _ref.translateChoice,
	    rest = _objectWithoutProperties(_ref, ['alwaysOn', 'basePath', 'component', 'defaultValue', 'formClassName', 'initializeForm', 'input', 'isRequired', 'label', 'locale', 'meta', 'options', 'optionText', 'optionValue', 'record', 'resource', 'allowEmpty', 'source', 'textAlign', 'translate', 'translateChoice']);

	return rest;
};

var TinyMCEInput = exports.TinyMCEInput = function (_React$Component) {
	_inherits(TinyMCEInput, _React$Component);

	function TinyMCEInput() {
		_classCallCheck(this, TinyMCEInput);

		return _possibleConstructorReturn(this, (TinyMCEInput.__proto__ || Object.getPrototypeOf(TinyMCEInput)).apply(this, arguments));
	}

	_createClass(TinyMCEInput, [{
		key: 'handleBlur',
		value: function handleBlur(eventOrValue) {
			this.props.onBlur(eventOrValue);
			this.props.input.onBlur(eventOrValue);
		}
	}, {
		key: 'handleFocus',
		value: function handleFocus(event) {
			this.props.onFocus(event);
			this.props.input.onFocus(event);
		}
	}, {
		key: 'handleChange',
		value: function handleChange(eventOrValue) {
			this.props.onChange(eventOrValue);
			this.props.input.onChange(eventOrValue);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    className = _props.className,
			    input = _props.input,
			    isRequired = _props.isRequired,
			    label = _props.label,
			    meta = _props.meta,
			    options = _props.options,
			    resource = _props.resource,
			    source = _props.source,
			    type = _props.type,
			    config = _props.config,
			    rest = _objectWithoutProperties(_props, ['className', 'input', 'isRequired', 'label', 'meta', 'options', 'resource', 'source', 'type', 'config']);

			if (typeof meta === 'undefined') {
				throw new Error("The TinyMCEInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component for details.");
			}
			var touched = meta.touched,
			    error = meta.error;

			var value = input.value || "";

			return _react2.default.createElement(_reactTinymce2.default, _extends({
				margin: 'normal',
				type: type,
				label: _react2.default.createElement(_raCore.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }),
				error: !!(touched && error),
				helperText: touched && error,
				className: className,
				init: _extends({}, config),
				content: value
			}, options, input, sanitizeRestProps(rest), {
				onBlur: function onBlur(event) {
					return _this2.handleBlur(event);
				},
				onFocus: function onFocus(event) {
					return _this2.handleFocus(event);
				},
				onChange: function onChange(event) {
					return _this2.handleChange(event);
				}
			}));
		}
	}]);

	return TinyMCEInput;
}(_react2.default.Component);

;

TinyMCEInput.propTypes = {
	className: _propTypes2.default.string,
	input: _propTypes2.default.object,
	isRequired: _propTypes2.default.bool,
	label: _propTypes2.default.string,
	meta: _propTypes2.default.object,
	name: _propTypes2.default.string,
	onBlur: _propTypes2.default.func,
	onChange: _propTypes2.default.func,
	onFocus: _propTypes2.default.func,
	options: _propTypes2.default.object,
	resource: _propTypes2.default.string,
	source: _propTypes2.default.string,
	config: _propTypes2.default.object
};

TinyMCEInput.defaultProps = {
	onBlur: function onBlur() {},
	onChange: function onChange() {},
	onFocus: function onFocus() {},
	options: {},
	config: {}
};

exports.default = (0, _raCore.addField)(TinyMCEInput);