import Icon from '@tags/Icon/Icon';

export const SgToggleButton = (props) => {
  const {
    tagName: Tag,
    className,
    id,
    primeAsset,
    secondAsset,
    size,
    variant,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgToggleButton',
    className
  ]);

  return (
    <Tag
      className={classStack}
      data-prime-asset={primeAsset}
      data-second-asset={secondAsset}
      id={id}
      variant={variant}
      {...attrs}
    >
      <Icon
        className="SgToggleButton__icon"
        name={primeAsset}
        size={size}
      />
    </Tag>
  );
};

SgToggleButton.defaultProps = {
  tagName: 'div',
  size: 'normal'
};

SgToggleButton.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  id: PropTypes.string.isRequired,
  primeAsset: PropTypes.string.isRequired,
  secondAsset: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default SgToggleButton;
