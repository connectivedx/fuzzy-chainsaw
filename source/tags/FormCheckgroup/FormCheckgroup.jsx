import React from 'react';
import styles from './FormCheckgroup.css';
import uniqueid from 'lodash.uniqueid';
import FormFieldset from '../FormFieldset/FormFieldset';
import FormCheck from '../FormCheck/FormCheck';

const createOption = (setName, type, variant, {value = '', checkName, label = '', className = '', id = uniqueid('form-checkgroup__control_'), required}) => {
	const name = checkName || setName;
	const attrs = {name, type, value, variant, id, required};
	return (
		<div key={uniqueid().toString()} className={"form-checkgroup__item form-checkgroup__item--" + type}>
			<FormCheck {...attrs} className={"form-checkgroup__control" + className} />
			<label htmlFor={id} className={"form-checkgroup__label"}>{label}</label>
		</div>
	);
};

export default ({
	className = '',
	checks = false,
	type = 'checkbox',
	variant = 'cssIcons',
	name = uniqueid('form-checkgroup_'),
	tagName,
	legendTag,
	legendText
}) => {
	const children = (Array.isArray(checks)) ? checks.map( (check)=>(createOption(name, type, variant, check)) ) : '';
	const fieldsetProps = {tagName, legendTag, legendText};

	return (
		<FormFieldset className={`form-checkgroup form-checkgroup--${type} ${className}`} {...fieldsetProps}>
			{children}
		</FormFieldset>
	);
}
