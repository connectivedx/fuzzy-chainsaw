const Wrapper = (props) => {
  const {
    tagName: Tag,
    className,
    size,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Wrapper',
    `Wrapper--${size}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Wrapper.defaultProps = {
  tagName: 'div',
  size: 'default'
};

Wrapper.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['narrow', 'default', 'wide']),
  children: PropTypes.node.isRequired
};

export default Wrapper;
