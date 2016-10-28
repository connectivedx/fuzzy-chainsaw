import React from 'react';
import FormInput from '../form-input/form-input.jsx';
import styles from './form-checkbox.css';

export default ({
	className = '',
	id = Date.now(),
	value = '',
	defaultChecked = false,
	name = false
}) => {
	let attrs;
	attrs = {type: 'checkbox', placeholder: false, defaultChecked, id, name, value};

	return (
		<FormInput  {...attrs}></FormInput>
	)
}