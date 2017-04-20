import Icon from 'Tags/Icon/Icon';

const Brand = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    ...attrs
  } = props;

  const classStack = Rucksack.createClassName([
    'brand',
    Rucksack.createVariants('brand--', variant),
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      <Icon name="close" className="brand__icon" />
      {
        variant === 'full'
        ? <span className="brand__label">
            GenericBrand
          </span>
        : undefined
      }
    </Tag>
  );
};

Brand.defaultProps = {
  tagName: 'div',
  variant: 'full'
};

Brand.propTypes = {
  tagName: React.PropTypes.string,
  variant: React.PropTypes.string,
  className: React.PropTypes.string
};


export default Brand;
