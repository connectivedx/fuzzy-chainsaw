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
  size: 'medium'
};

Wrapper.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired
};

Wrapper.pageType = 'layout';


export default Wrapper;
