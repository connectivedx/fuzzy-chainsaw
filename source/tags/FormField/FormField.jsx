import React from 'react';
import styles from './FormField.css';


export const FormField_Label = ({
	tagName = 'div',
	className = '',
	align,
	children,
	...attr
}) => {
	const Tag = tagName;

	if (align !== undefined) {
		className = `form-field__label--${align} ${className}`;
	}

	return (
		<Tag className={`form-field__label ${className}`} {...attr}>
			{children}
		</Tag>
	);
};

export const FormField_Error = ({
	tagName = 'div',
	className = '',
	align,
	children,
	...attr
}) => {
	const Tag = tagName;

	if (align !== undefined) {
		className = `form-field__error--${align} ${className}`;
	}

	return (
		<Tag className={`form-field__error ${className}`} {...attr}>
			{children}
		</Tag>
	);
};

export const FormField_Control = ({
	tagName = 'div',
	className = '',
	children,
	...attr
}) => {
	const Tag = tagName;

	return (
		<Tag className={`form-field__control ${className}`} {...attr}>
			{children}
		</Tag>
	);
};

export const FormField = ({
	tagName = 'div',
	variant = 'default',
	className = '',
	children,
	...attr
}) => {
	const Tag = tagName;

	return (
		<Tag className={`form-field form-field--${variant} ${className}`} {...attr}>
			{children}
		</Tag>
	);
};

FormField.propTypes = {
	variant: React.PropTypes.string,
	className: React.PropTypes.string
};


export default FormField;
