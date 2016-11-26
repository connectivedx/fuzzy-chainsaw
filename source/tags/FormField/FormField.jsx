import React from 'react';
import styles from './FormField.css';


export const FormField_Label = ({
	tagName = 'div',
	variant = 'default',
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
		<Tag className={`form-field__label form-field__label--${variant} ${className}`} {...attr}>
			{children}
		</Tag>
	);
};

export const FormField_Error = ({
	tagName = 'div',
	variant = 'default',
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
		<Tag className={`form-field__error form-field__error--${variant} ${className}`} {...attr}>
			{children}
		</Tag>
	);
};

export const FormField_Control = ({
	tagName = 'div',
	variant = 'default',
	className = '',
	children,
	...attr
}) => {
	const Tag = tagName;

	return (
		<Tag className={`form-field__control form-field__control--${variant} ${className}`} {...attr}>
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
