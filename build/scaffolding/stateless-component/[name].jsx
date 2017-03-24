import React from 'react';


export const {{name}} = ({
  tagName = 'div',
  className = '',
  variant = 'default',
  children,
  ...attrs
}) => {
  const Tag = tagName;
  return (
    <Tag className={`{{className}} {{className}}--${variant} ${className}`} {...attrs}>
      {children}
    </Tag>
  );
};

{{name}}.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  variant: React.PropTypes.oneOf(['default']),
  children: React.PropTypes.node
};


export default {{name}};
