import React from 'react';
import styles from './FormHidden.css';

export default ({
	className = '',
	value = ''
}) => (
	<input type="hidden" className={"form-hidden " + className} value={value} />
)
