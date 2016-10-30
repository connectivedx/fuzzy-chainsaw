import React from 'react';
import styles from './{{name}}.css';

export default ({
	className = '',
	children
}) => (
	<div className={"{{name}} " + className}>
		{children}
	</div>
)
