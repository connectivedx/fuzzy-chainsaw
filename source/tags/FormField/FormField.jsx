import React from 'react';
import styles from './FormField.css';


const FormField = ({
	id = uniqueid('form-input_'),
	className = '',
	children
}) => (
	<div className={`form-input-field form-input-field--${variant} ${className}`}>
		{children}
	</div>
);

FormField.propTypes = {
	variant: React.PropTypes.string,
	className: React.PropTypes.string
};


export default FormField;
