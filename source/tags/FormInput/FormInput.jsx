import React from 'react';
import styles from './FormInput.css';

export const FormInputText = ({
	autocomplete,
	list,
	maxlength,
	minlength,
	name,
	pattern,
	size,
	readonly,
	required,
	placeholder = 'Enter Text',
	value = ''
}) => (
	let opts = {...autocomplete, list, maxlength, minlength, name, pattern, size, readonly, required};

	<FormInput type="text" placeholder={placeholder} value={value} {...opts} />
);

export default FormInput(obj) => {
	let attrs = Object.assign({}, obj, {
			className: "form-input form-input--" + (obj.type || 'text') + ' ' + (obj.className || ''),
			id: obj.id || Date.now()
		});

	return ( <input {...attrs} /> );
}

