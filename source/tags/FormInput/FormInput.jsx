import React from 'react';
import styles from './FormInput.css';
import defaultPlaceholders from './FormInput.config.js';
import uniqueid from 'lodash.uniqueid';

export const FormInputField = ({
	type = 'text',
export const FormInput = ({
	type = 'text',
	value = '',
	id = uniqueid('form-input_'),
	className = '',
	placeholder = defaultPlaceholders[type],
	...restAttrs
}) => {
	const defaultValue = value;

	const attrs = {defaultValue, id, placeholder};

	return ( <input type={type} className={`form-input form-input--${type} ${className}`} {...attrs} {...restAttrs} /> );
};

export default FormInput;