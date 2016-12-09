import React from 'react';

// things we'll want for richtext css
import Rhythm from '../Rhythm/Rhythm';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

import styles from './RichText.css';

const RichText = ({
  tagName = 'div',
  className = '',
  variant = 'default',
  children,
  ...attrs
}) => {
  const Tag = tagName;
  return (
    <Tag className={`rich-text rich-text--${variant} ${className}`} {...attrs}>
      {children}
    </Tag>
  );
}

RichText.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  variant: React.PropTypes.string
};


export default RichText;
