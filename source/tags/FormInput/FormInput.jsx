import React from 'react';
import styles from './FormInput.css';
import uniqueid from 'lodash.uniqueid';
import defaultPlaceholders from './FormInput.config.js';
import {FormField, FormField_Label, FormField_Control, FormField_Error} from '../FormField/FormField';
import FormLabel from '../FormLabel/FormLabel';

export const FormInputField = ({
	type = 'text',
	id = uniqueid('form-input_'),
	className = '',
	labelText = defaultPlaceholders[type],
	...attrs
}) => (
	<FormField variant="input">
		<FormField_Label>
			<FormLabel htmlFor={id}>{labelText}</FormLabel>
		</FormField_Label>
		<FormField_Control>
			<FormInput type={type} id={id} {...attrs} />
		</FormField_Control>
	</FormField>
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