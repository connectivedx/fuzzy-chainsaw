import React from 'react';
import styles from './{{name}}.css';

const {{name}} ({
	className = '',
	variant = 'default',
	children,
	...attrs
}) => (
	<div className={`{{className}} {{className}}-${variant} ${className}`} {...attrs}>
		{children}
	</div>
);

{{name}}.propTypes = {
	className: React.PropTypes.string,
	variant: React.PropTypes.string
};

export default {{name}};
