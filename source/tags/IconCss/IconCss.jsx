import React from 'react';
import styles from './IconCss.css';

export default ({
	tagName = 'span',
	className = '',
	iconName = '',
	children
}) => {
	const Tag = tagName;

	return (
		<Tag className={`icon-css icon-css--${iconName} ${className}`}>
			{children}
		</Tag>
	);
}