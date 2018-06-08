export const SgPageWrapper = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgPageWrapper',
    `SgPageWrapper--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

SgPageWrapper.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

SgPageWrapper.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'large'])
};

export default SgPageWrapper;
