import React from 'react';
import styles from './FormCheckgroup.css';

export default ({
	className = '',
	children
}) => (
	<div className={"form-checkgroup " + className}>
		{children}
	</div>
)
