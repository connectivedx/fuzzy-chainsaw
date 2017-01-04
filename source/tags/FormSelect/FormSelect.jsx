import React from 'react';
import styles from './FormSelect.css';
import Icon from '../Icon/Icon';
import uniqueid from 'lodash.uniqueid';
import {FormField, FormField_Label, FormField_Control} from '../FormField/FormField';
import FormLabel from '../FormLabel/FormLabel';

function buildOptGroup({label, disabled, options}) {
	const attrs = {label, disabled};
	const content = buildOptions(options, disabled);

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

export const FormSelectField = ({
	variant = 'default',
	className = '',
	id = uniqueid('form-select_'),
	labelText = '',
	...attrs
}) => (
	<FormField variant={`select-${variant}`} className={className}>
		<FormField_Label variant={`select-${variant}`}>
			<FormLabel htmlFor={id}>{labelText}</FormLabel>
		</FormField_Label>
		<FormField_Control variant={`select-${variant}`}>
			<FormSelect variant={variant} id={id} {...attrs} />
		</FormField_Control>
	</FormField>
);

export const FormSelect = ({
	variant = 'default',
	className = '',
	value = '',
	options = [],
	id = uniqueid('form-select_'),
	children = <option value="">Default</option>,
	...attrs
}) => {
	let icon = <Icon className="form-select__icon" name="chevron-down" />;

	if (variant === 'multiple') {
		icon = '';
		attrs.multiple = true;
		if (typeof value === 'string') {
			attrs.defaultValue = value.split(',');
		}
	}
	children = options.length ? buildOptions(options) : children;

	return (
		<div className={`form-select form-select--${variant} ${className}`}>
			<select className={`form-select__control form-select__control--${variant}`} defaultValue={value} {...attrs} >
				{children}
			</select>
			{icon}
		</div>
	);
};

export default FormSelect;