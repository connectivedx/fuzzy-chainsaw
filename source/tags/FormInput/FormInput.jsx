import React from 'react';
import styles from './FormInput.css';

// "Text" types: text, search | url, telephone |
const textType = (type, placeholder, {
	className,
	value,
	autoComplete,
	list,
	maxLength,
	minLength,
	name,
	pattern,
	size,
	readOnly,
	required
}) => {
	let props = {type, value, className, placeholder, autoComplete, list, maxLength, minLength, name, pattern, size, readOnly, required};

	return ( <FormInput {...props} /> );
};

export const FormInputText = (props) => {
	return textType('text', (props.placeholder || 'Enter text'), props);
};
export const FormInputSearch = (props) => {
	return textType('search', (props.placeholder || 'Search'), props);
};
export const FormInputUrl = (props) => {
	return textType('url', (props.placeholder || 'Enter a valid URL'), props);
};
export const FormInputTel = (props) => {
	return textType('tel', (props.placeholder || 'Enter a telephone number'), props);
};
export const FormInputEmail = (props) => {
	return textType('email', (props.placeholder || 'Enter email'), props);
};
export const FormInputPassword = (props) => {
	let scrubbed = Object.assign({}, props, {list: undefined});
	
	return textType('password', undefined, props);
};
export const FormInputHidden = (props) => {
	return ( <FormInput type="hidden" value={props.value} /> );
};

export const FormInput = (props) => {
	let attrs = Object.assign({}, props, {
			className: "form-input form-input--" + (props.type || 'text') + ' ' + (props.className || ''),
			id: props.id || Date.now(),
			value: props.value || ''
		});

	return ( <input {...attrs} /> );
};

export default FormInput;

