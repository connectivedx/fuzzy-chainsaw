import React from 'react';
import styles from './Rhythm.css';

const Rhythm = ({
  tagName = 'div',
  className = '',
  size = 'default',
  deep = false,
  children,
  ...attrs
}) => {
  const Tag = tagName;
  const baseClass = deep ? 'rhythm--deep-' : 'rhythm--';

  return (
    <Tag className={`${baseClass}${size} ${className}`} {...attrs}>
      {children}
    </Tag>
  )
};

Rhythm.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  size: React.PropTypes.string,
  deep: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ])
};

export default Rhythm;
