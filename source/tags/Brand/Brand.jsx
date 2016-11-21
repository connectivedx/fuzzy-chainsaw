import React from 'react';
import styles from './Brand.css';
import Icon from '../Icon/Icon';

const Brand = ({
  variant = 'full',
  className = '',
  children,
  ...attrs
}) => {
  return (
    <div className={`brand brand--${variant} ${className}`} {...attrs}>
      <Icon name="close" className="brand__icon" />
      { variant === 'full'
        ? <span className="brand__label">
            GenericBrand
          </span>
        : undefined }
    </div>
  );
};

Brand.propTypes = {
  className: React.PropTypes.string,
  variant: React.PropTypes.string
};


export default Brand;
