export const SgHeader = (props) => {
  const {
    tagName: Tag,
    className,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgHeader',
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

SgHeader.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

SgHeader.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  children: PropTypes.node
};


export default SgHeader;
