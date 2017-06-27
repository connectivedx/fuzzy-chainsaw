const SgRhythm = (props) => {
  const {
    tagName: Tag,
    className,
    size,
    deep,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    deep
      ? `SgRhythm--deep-${size}`
      : `SgRhythm--${size}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

SgRhythm.defaultProps = {
  tagName: 'div',
  size: 'default',
  deep: false
};

SgRhythm.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small', 'large']),
  deep: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default SgRhythm;
