import React from 'react';
import styles from './FormNumber.css';
import uniqueid from 'lodash.uniqueid';
import {FormField, FormField_Label, FormField_Control, FormField_Error} from '../FormField/FormField';
import FormLabel from '../FormLabel/FormLabel';

export const FormNumberField = ({
	type = 'number',
	id = uniqueid('form-number_'),
	className = '',
	labelText = 'Enter Value',
	...attrs
}) => (
	<FormField variant="number" className={className}>
		<FormField_Label>
			<FormLabel htmlFor={id}>{labelText}</FormLabel>
		</FormField_Label>
		<FormField_Control>
			<FormNumber type={type} id={id} {...attrs} />
		</FormField_Control>
	</FormField>
);

FormNumberField.propTypes = {
	type: React.PropTypes.string,
	id: React.PropTypes.string,
	className: React.PropTypes.string,
	labelText: React.PropTypes.string
};

export const FormNumber = ({
	type = "number",
	className = '',
	id = uniqueid('form-number_'),
	value = 0,
	...attrs
}) => {
	if (type === 'range') {
		const outputId = `${id}-result`;
		attrs.max = attrs.max || 10;
		attrs.step = attrs.step || 1;

		return (
			<div className={`form-number form-number--${type} ${className}`} onInput={`${outputId}.value=${id}.value`}>
				<input type={type} className={`form-number__control form-number__control--${type}`} defaultValue={value} {...attrs} />
				<output htmlFor={id} id={outputId}>{value}</output>
			</div>
		);
	}
	else {
		return (
			<div className={`form-number form-number--${type} ${className}`}>
				<input type={type} className={`form-number__control form-number__control--${type}`} defaultValue={value} {...attrs} />
			</div>
		);
	}
}

FormNumber.propTypes = {
	type: React.PropTypes.string,
	id: React.PropTypes.string,
	className: React.PropTypes.string,
	value: React.PropTypes.number
};

export default FormNumber;