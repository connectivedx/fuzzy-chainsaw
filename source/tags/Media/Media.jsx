import React from 'react';
import styles from './Media.css';


export const Media_Figure = ({
  tagName = 'div',
  className = '',
  align,
  children,
  ...attrs
}) => {
  const Tag = tagName;

  if (align !== undefined) {
    className = `media__figure--${align} ` + className;
  }

  return (
    <Tag className={`media__figure ${className}`} {...attrs}>
      {children}
    </Tag>
  );
};

Media_Figure.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  align: React.PropTypes.string
}


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
  align: React.PropTypes.string
}


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
}

Media.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  align: React.PropTypes.string
}


export default Media;
