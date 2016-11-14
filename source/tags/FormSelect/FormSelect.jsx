import React from 'react';
import styles from './FormSelect.css';
import Icon from '../Icon/Icon'
import uniqueid from 'lodash.uniqueid';


function buildOptGroup({label, disabled, options}) {
	let attrs = {label, disabled};
	let content = buildOptions(options, disabled);

	return ( <optgroup key={(uniqueid().toString())} {...attrs}>{content}</optgroup> );
}

function buildOptions(options, disabled) {
	return ( options.map((option) => {
		if ( option.options ) {
			return ( buildOptGroup(option) );
		}
		else {
			option.disabled = (disabled) ? 'disabled' : option.disabled;
			return ( <option key={(uniqueid().toString())} {...option}>{option.label}</option> );
		}
	}) );
}

export default ({
	variant = 'default',
	className = '',
	value = '',
	options = [],
	id = uniqueid('form-select_'),
	autoFocus,
	disabled,
	form,
	required,
	size,
	children = <option value="">Default</option>
}) => {
	let icon = <Icon className="form-select__icon" name="chevron-down" />;
	let defaultValue = value;
	let attrs = {defaultValue, id, autoFocus, disabled, form, required, size};

	if (variant === 'multiple') {
		icon = '';
		attrs.multiple = true;
		if (typeof value === 'string') {
			attrs.defaultValue = value.split(',');
		}
	}
	children = options.length ? buildOptions(options) : children;

	return (
		<div className={"form-select form-select--" + variant + " " + className}>
			<select className={"form-select__control form-select__control--" + variant} {...attrs} >
				{children}
			</select>
			{icon}
		</div>
	);
}
