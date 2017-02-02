import React from 'react';
import styles from './Image.css';

export const Image = ({
  tagName = 'img',
  className = '',
  variant = 'default',
  src = {},
  children,
  ...attrs
}) => {
  const Tag = tagName;
  return (
    <Tag
      className={`image image--${variant} ${className}`}
      {...(typeof src === 'string' ? { src } : src)} // normalized responize-loader/image-loader
      {...attrs} />
  );
}

Image.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  variant: React.PropTypes.oneOf(['default', 'auto']),
  src: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
};


export default Image;
