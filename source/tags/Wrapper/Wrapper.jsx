import React from 'react';
import styles from './Wrapper.css';

const Wrapper = ({
  tagName = 'div',
  size = 'default',
  className = '',
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
  size: React.PropTypes.string,
  className: React.PropTypes.string
};

export default Wrapper;
