import React from 'react';
import styles from './Icon.css';

const Icon = ({
	className = '',
	name,
	size = 'default',
	...attrs
}) => (
	<svg className={`icon icon--${size} icon--${name} ${className}`} {...attrs}>
		<use xlinkHref={'#' + name} />
	</svg>
);

Icon.propTypes = {
	className: React.PropTypes.string,
	name: React.PropTypes.string.isRequired,
	size: React.PropTypes.string
}

export default Icon;
