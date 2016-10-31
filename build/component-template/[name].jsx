import React from 'react';
import styles from './{{name}}.css';

export default ({
	className = '',
	children
}) => (
	<div className={"{{className}} " + className}>
		{children}
	</div>
)
