import React from 'react';
import styles from './Form.css';

const Form = ({
	tagName = 'form',
	variant = 'default',
	className = '',
	children,
	...attrs
}) => {
	const Tag = tagName;

	return (
		<Tag className={`form form--${variant} ${className}`} {...attrs}>
			{children}
		</Tag>
	);
};

Form.propTypes = {
	tagName: React.PropTypes.string,
	variant: React.PropTypes.string,
	className: React.PropTypes.string
};


export default Form;
