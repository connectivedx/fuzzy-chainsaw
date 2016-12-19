import React from 'react';
import styles from './Button.css';

const Button = ({
  tagName = 'button',
  className = '',
  variant = 'default',
  href,
  children,
  ...attrs
}) => {
  if (href) {
    return <a href={href} className={`button button--${variant} button--link ${className}`} {...attrs}>{children}</a>;
  } else {
    const Tag = tagName;
    return <Tag className={`button button--${variant} ${className}`} {...attrs}>{children}</Tag>
  }
};

Button.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  variant: React.PropTypes.string,
  href: React.PropTypes.string
}

export default Button;
