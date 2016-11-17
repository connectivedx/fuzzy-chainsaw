import React from 'react';
import styles from './FormFieldset.css';
import FormLabel from '../FormLabel/FormLabel';

const notEmptyRE = /\w/;
const buildLegend = (tagName, text, level) => ( (notEmptyRE.test(text)) ? <FormLabel tagName={tagName} level={level}>{text}</FormLabel> : '' );

export default ({
	className = '',
	tagName = 'fieldset',
	legendTag = 'legend',
	legendText = '',
	legendWeight = '3',
	children
}) => {
	const Tag = tagName;

	return (
		<Tag className={"form-fieldset " + className}>
			{buildLegend(legendTag, legendText, legendWeight)}
			{children}
		</Tag>
	);
}