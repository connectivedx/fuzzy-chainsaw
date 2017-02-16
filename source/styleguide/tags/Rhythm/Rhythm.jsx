import React from 'react';

const Rhythm = ({
  tagName = 'div',
  className = '',
  size = 'default',
  deep = false,
  children,
  ...attrs
}) => {
  const Tag = tagName;
  const baseClass = deep ? 'sg-rhythm--deep-' : 'sg-rhythm--';

  return (
    <Tag className={`${baseClass}${size} ${className}`} {...attrs}>
      {children}
    </Tag>
  );
};

Rhythm.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  size: React.PropTypes.string,
  deep: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.boolean
  ]),
  children: React.PropTypes.node.isRequired
};

export default Rhythm;
