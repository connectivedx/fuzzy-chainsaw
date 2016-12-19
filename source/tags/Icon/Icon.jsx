import React from 'react';
import styles from './Icon.css';

const Icon = ({
  className = '',
  size = 'default',
  name,
  ...attrs
}) => (
  <svg className={`icon icon--${size} icon--${name} ${className}`} {...attrs}>
    <use xlinkHref={'#' + name} />
  </svg>
);

Icon.propTypes = {
  className: React.PropTypes.string,
  size: React.PropTypes.string,
  name: React.PropTypes.string.isRequired
}

export default Icon;
