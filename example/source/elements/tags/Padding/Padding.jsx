export const Padding = (props) => {
  const {
    tagName: Tag,
    className,
    size,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Padding',
    `Padding--${size}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Padding.defaultProps = {
  tagName: 'div',
  size: 'default'
};

Padding.propTypes = {
  tagName: FcUtils.PropTypes.tagName,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'extra-large',
    'large',
    'medium-large',
    'medium',
    'medium-small',
    'small',
    'extra-small'
  ]),
  children: PropTypes.node
};

Padding.pageType = 'layout';


export default Padding;
