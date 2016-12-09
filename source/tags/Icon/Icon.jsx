import React from 'react';
import styles from './Icon.css';

const Icon = ({
  className = '',
  variant = 'default',
  name,
  ...attrs
}) => (
  <svg className={`icon icon--${variant} icon--${name} ${className}`} {...attrs}>
    <use xlinkHref={'#' + name} />
  </svg>
);

Icon.propTypes = {
  className: React.PropTypes.string,
  variant: React.PropTypes.string,
  name: React.PropTypes.string.isRequired
}

export default Icon;
