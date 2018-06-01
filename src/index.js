import React from 'react';
import PropTypes from 'prop-types';
import TinyMCE from 'react-tinymce';
import { addField, FieldTitle } from 'ra-core';

const sanitizeRestProps = ({
	alwaysOn,
	basePath,
	component,
	defaultValue,
	formClassName,
	initializeForm,
	input,
	isRequired,
	label,
	locale,
	meta,
	options,
	optionText,
	optionValue,
	record,
	resource,
	allowEmpty,
	source,
	textAlign,
	translate,
	translateChoice,
	...rest
}) => rest;



export class TinyMCEInput extends React.Component {
	handleBlur(eventOrValue) {
		this.props.onBlur(eventOrValue);
		this.props.input.onBlur(eventOrValue);
	}

	handleFocus(event) {
		this.props.onFocus(event);
		this.props.input.onFocus(event);
	}

	handleChange(eventOrValue) {
		this.props.onChange(eventOrValue);
		this.props.input.onChange(eventOrValue);
	};

	render() {
		const {
			className,
			input,
			isRequired,
			label,
			meta,
			options,
			resource,
			source,
			type,
			config,
			...rest
		} = this.props;
		if (typeof meta === 'undefined') {
			throw new Error(
				"The TinyMCEInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component for details."
			);
		}
		const { touched, error } = meta;
		const value = input.value || "";

		return <TinyMCE
			margin="normal"
			type={type}
			label={<FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />}
			error={!!(touched && error)}
			helperText={touched && error}
			className={className}
			config={{...config}}
			content={value}
			{...options}
			{...input}
			{...sanitizeRestProps(rest)}
			onBlur={event=>this.handleBlur(event)}
			onFocus={event=>this.handleFocus(event)}
			onChange={event=>this.handleChange(event)}
		/>;
	}
};

TinyMCEInput.propTypes = {
	className: PropTypes.string,
	input: PropTypes.object,
	isRequired: PropTypes.bool,
	label: PropTypes.string,
	meta: PropTypes.object,
	name: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	options: PropTypes.object,
	resource: PropTypes.string,
	source: PropTypes.string,
	config: PropTypes.object
};

TinyMCEInput.defaultProps = {
	onBlur: () => {},
	onChange: () => {},
	onFocus: () => {},
	options: {},
	config: {}
};

export default addField(TinyMCEInput);