import React from 'react';
import styles from './Wrapper.css';

const Wrapper = ({
  tagName = 'div',
  className = '',
  size = 'default',
  children,
  ...attrs
}) => {
  const Tag = tagName;
  return (
    <Tag className={`wrapper wrapper--${size} ${className}`} {...attrs}>
      {children}
    </Tag>
  )
};

Wrapper.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  size: React.PropTypes.string
};

export default Wrapper;
