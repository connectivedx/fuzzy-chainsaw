import Icon from 'Tags/Icon/Icon';

const Brand = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Brand',
    `Brand--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      <Icon name="close" className="Brand__icon" />
      {
        variant === 'default' &&
        <span className="Brand__label">
          GenericBrand
        </span>
      }
    </Tag>
  );
};

Brand.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

Brand.propTypes = {
  tagName: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'compact']),
  className: PropTypes.string
};


export default Brand;
