import React from 'react';
import styles from './Button.css';

const Button = ({
	tagName = 'button',
	variant = 'default',
	href,
	className = '',
	children
}) => {
	if (href) {
		return <a href={href} className={`button button--${variant} button--link ${className}`}>{children}</a>;
	} else {
		const Tag = tagName;
		return <Tag className={`button button--${variant} ${className}`}>{children}</Tag>
	}
};

Button.propTypes = {
	tagName: React.PropTypes.string,
	variant: React.PropTypes.string,
	href: React.PropTypes.string,
	className: React.PropTypes.string,
	href: React.PropTypes.string
}

export default Button;
