import React from 'react';
import styles from './FormNumber.css';
import uniqueid from 'lodash.uniqueid';

export default ({
	type = "number",
	className = '',
	value = 0,
	id = uniqueid('form-number_'),
	placeholder = '0',
	name,
	autoComplete,
	list,
	max,
	min,
	readOnly,
	required,
	step
}) => {
	let attrs = (type === 'number') ? {value, id, name, placeholder, autoComplete, list, max, min, readOnly, required, step} :  {value, id, autoComplete, list, max, min, step};

	return ( <input type={type} className={"form-number form-number--" + type + " " + className} {...attrs} /> );
}
