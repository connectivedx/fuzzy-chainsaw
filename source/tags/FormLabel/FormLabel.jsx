import React from 'react';
import styles from './FormLabel.css';
import Heading from '../Heading/Heading';

export default ({
	tagName = 'label',
	variant = 'default',
	className = '',
	headingLevel = '4',
	children,
	...attrs
}) => {
	if (tagName === 'label') {
		return (
			<label className={`form-label form-label--${variant} ${className}`} {...attrs}>{children}</label>
		);
	}
	else {
		return (
			<Heading className={`form-label form-label--legend form-label--${variant} ${className}`} tagName={tagName} level={headingLevel} {...attrs}>
				{children}
			</Heading>
		);
	}
}
