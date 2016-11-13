import React from 'react';
import styles from './FormInput.css';
import defaultPlaceholders from './FormInput.config.js';
import uniqueid from 'lodash.uniqueid';

const typeRE = /\b(text|search|url|tel|email|password)\b/;

function enforceType(type) {
	return (typeRE.test(type)) ? type : 'text';
}

function scrubAttrs(type, attrs) {
	if (type !== 'email') {
		attrs.multiple = undefined;
	}
	if (/\b(url|tel|email)\b/.test(type)) {
		attrs.inputMode = undefined;
	}
	if (type === 'password') {
		attrs.list = undefined;
	}

	return attrs;
}

export default ({
	type = 'text',
	value = '',
	id = uniqueid('form-input_'),
	className = '',
	name,
	autoComplete,
	inputMode,
	list,
	maxLength,
	multiple,
	minLength,
	pattern,
	placeholder,
	readOnly,
	required,
	size
}) => {
	let attrs;

	type = enforceType(type);
	placeholder = placeholder || defaultPlaceholders[type];

	attrs = scrubAttrs(type, {value, name, id, placeholder, autoComplete, inputMode, list, maxLength, multiple, minLength, pattern, readOnly, required, size});

	return ( <input type={type} className={"form-input form-input--" + type + " " + className} {...attrs} /> );
};