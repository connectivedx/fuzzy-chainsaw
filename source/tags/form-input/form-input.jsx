import React from 'react';
import styles from './form-input.css';

export default (obj) => {
	let placeholder, attrs = {};
	let className = obj.className || '';

	Object.assign(attrs, obj, {
		type: obj.type || 'text',
		id: obj.id || Date.now(),
		value: obj.value || '',
	});

	attrs.name = obj.name || attrs.id;

	delete attrs.className;

	if (attrs.placeholder !== undefined && attrs.placeholder === false) {
		delete attrs.placeholder;
	}
	else {
		attrs.placeholder = 'Enter ' + attrs.type;
	}

	return (
		<input className={`form-input form-input--${attrs.type} ${className}`} {...attrs} />
	)
}