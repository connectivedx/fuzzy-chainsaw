import { Icon } from '@tags';


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

  const Label = variant === 'default' && (
    <span className="Brand__label">
      GenericBrand
    </span>
  );

  return (
    <Tag className={classStack} {...attrs}>
      <Icon name="close" className="Brand__icon" />
      {Label}
    </Tag>
  );
};

Brand.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

Brand.propTypes = {
  tagName: FcUtils.PropTypes.tagName,
  variant: PropTypes.oneOf(['default', 'compact']),
  className: PropTypes.string
};


export default Brand;
