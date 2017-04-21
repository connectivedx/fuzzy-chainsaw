const RichText = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'rich-text',
    `rich-text--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

RichText.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

RichText.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default RichText;
