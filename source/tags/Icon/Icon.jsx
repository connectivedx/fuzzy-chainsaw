import React from 'react';
import styles from './Icon.css';

export default ({
	className = '',
	name,
	size = 'default',
	...attrs
}) => {
	let Tag;

	if (name) {
		return (
			<svg className={`icon icon--${size} icon--${name} ${className}`} {...attrs}>
			  <use xlinkHref={'#' + name} />
			</svg>
		);
	}
}
