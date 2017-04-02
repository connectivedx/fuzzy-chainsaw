import Icon from 'Tags/Icon/Icon';

const Brand = ({
  tagName = 'div',
  className = '',
  variant = 'full',
  ...attrs
}) => {
  const Tag = tagName;

  return (
    <Tag className={`brand brand--${variant} ${className}`} {...attrs}>
      <Icon name="close" className="brand__icon" />
      { variant === 'full'
        ? <span className="brand__label">
            GenericBrand
          </span>
        : undefined }
    </Tag>
  );
};

Brand.propTypes = {
  tagName: React.PropTypes.string,
  variant: React.PropTypes.string,
  className: React.PropTypes.string
};


export default Brand;
