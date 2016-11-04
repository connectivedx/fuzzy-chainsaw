import React from 'react';
import styles from './button.css';

export default ({
	tagName = 'button',
	type = 'default',
	href,
	className = '',
	children
}) => {

	if (href) {
		return <a href={href} className={`button button--${type} button--link ${className}`}>{children}</a>;
	} else {
		const Tag = tagName;
		return <Tag className={`button button--${type} ${className}`}>{children}</Tag>
	}
};