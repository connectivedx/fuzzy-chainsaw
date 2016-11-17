import React from 'react';
import styles from './FormLabel.css';
import Heading from '../Heading/Heading';

export default ({
	className = '',
	tagName = 'label',
	headingLevel = '4',
	children,
	...attrs
}) => {
	if (tagName === 'label') {
		return (
			<label className={"form-label form-label--default" + className} {...attrs}>{children}</label>
		);
	}
	else {
		return (
			<Heading className={"form-label form-label--legend" + className} tagName={tagName} level={headingLevel} {...attrs}>
				{children}
			</Heading>
		);
	}
}
