import React from 'react';
import styles from './rhythm.css';

export default ({
	className = '',
	size = 'default',
	deep = false,
	children
}) => {
	const type = deep ? 'rhythm-deep' : 'rhythm';

	return (
		<div className={`${type} rhythm--${size} ${className}`}>
			{children}
		</div>
	)
};