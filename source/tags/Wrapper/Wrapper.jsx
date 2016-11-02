import React from 'react';
import styles from './Wrapper.css';

export default ({
	className = '',
	size = 'default',
	children
}) => {
	return (
		<div className={'wrapper wrapper--' + size}>
			{children}
		</div>
	)
};
