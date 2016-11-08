import React from 'react';
import styles from './Icon.css';

export default ({
	className = '',
	name,
	size = 'default'
}) => {
	let Tag;

	if (name) {
		return (
			<svg className={`icon icon--${size} icon--${name} ${className}`}>
			  <use xlinkHref={'#' + name} />
			</svg>
		);
	}
}
