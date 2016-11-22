import React from 'react';
import styles from './FormInput.css';
import defaultPlaceholders from './FormInput.config.js';
import uniqueid from 'lodash.uniqueid';
import FormLabel from '../FormLabel/FormLabel';

export const FormInputField = ({
	type = 'text',
	variant = 'default',
	id = uniqueid('form-input_'),
	className = '',
	labelText = defaultPlaceholders[type],
	...restAttrs
}) => (
	<div className={`form-input-field form-input-field--${variant} ${className}`}>
		<FormLabel htmlFor={id}>{labelText}</FormLabel>
		<FormInput type={type} id={id} {...restAttrs} />
	</div>
);

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