export const Link = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Link',
    `Link--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Link.defaultProps = {
  tagName: 'a',
  variant: 'default'
};

Link.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'cta']),
  href: PropTypes.string.isRequired,
  children: PropTypes.node
};


export default Link;
