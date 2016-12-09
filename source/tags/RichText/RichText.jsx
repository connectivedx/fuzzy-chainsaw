import React from 'react';

// things we'll want for richtext css
import Rhythm from '../Rhythm/Rhythm';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

import styles from './RichText.css';

const RichText = ({
  className = '',
  variant = 'default',
  children,
  ...attrs
}) => (
  <div className={`rich-text rich-text--${variant} ${className}`} {...attrs}>
    {children}
  </div>
);

RichText.propTypes = {
  className: React.PropTypes.string,
  variant: React.PropTypes.string
};


export default RichText;
