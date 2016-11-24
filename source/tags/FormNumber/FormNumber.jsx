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

// FormInputField.propTypes = {
// 	type: React.PropTypes.string,
// 	id: React.PropTypes.string,
// 	className: React.PropTypes.string,
// 	labelText: React.ProtoTypes.string
// };

export const FormNumber = ({
	type = "number",
	className = '',
	id = uniqueid('form-number_'),
	value = 0,
	...attrs
}) => (
	<input type={type} className={`form-number form-number--${type} ${className}`} defaultValue={value} {...attrs} />
);

// FormField.propTypes = {
// 	type: React.PropTypes.string,
// 	id: React.PropTypes.string,
// 	className: React.PropTypes.string,
// 	value: React.ProtoTypes.number
// };

export default FormNumber;