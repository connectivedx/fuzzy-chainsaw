import React from 'react';

export const Media_Figure = ({
  tagName = 'div',
  className = '',
  align,
  children,
  ...attrs
}) => {
  const Tag = tagName;
  let tagClass = className;

  if (align !== undefined) {
    tagClass = `media__figure--${align} ${className}`;
  }

  return (
    <Tag className={`media__figure ${tagClass}`} {...attrs}>
      {children}
    </Tag>
  );
};

Media_Figure.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  align: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};


export const Media_Body = ({
  tagName = 'div',
  className = '',
  children,
  ...attrs
}) => {
  const Tag = tagName;
  return (
    <Tag className={`media__body ${className}`} {...attrs}>
      {children}
    </Tag>
  );
};

Media_Body.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  align: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};


export const Media = ({
  tagName = 'div',
  className = '',
  align = 'top',
  children,
  ...attrs
}) => {
  const Tag = tagName;
  return (
    <Tag className={`media media--${align} ${className}`} {...attrs}>
      {children}
    </Tag>
  );
};

Media.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  align: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};


export default Media;
