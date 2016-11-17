import React from 'react';
import styles from './Button.css';

const Button = ({
	tagName = 'button',
	type = 'default',
	href,
	className = '',
	children
}) => {
	if (href) {
		return <a href={href} className={`button button--${type} button--link ${className}`}>{children}</a>;
	} else {
		const Tag = tagName;
		return <Tag className={`button button--${type} ${className}`}>{children}</Tag>
	}
};

Button.propTypes = {
	tagName: React.PropTypes.string,
	type: React.PropTypes.string,
	href: React.PropTypes.string,
	className: React.PropTypes.string,
	href: React.PropTypes.string
}

export default Button;
