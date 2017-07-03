export const Button = (props) => {
  const {
    tagName,
    className,
    width,
    variant,
    href,
    children,
    ...attrs
  } = props;

  let Tag = tagName;
  let classStack = FcUtils.createClassStack([
    'Button',
    `Button--${variant}`,
    `Button--${width}`,
    className
  ]);

  if (href) {
    Tag = 'a';
    classStack = FcUtils.createClassStack([classStack, 'Button--link']);
    attrs.href = href;
  }

  return (
    <Tag className={classStack} {...attrs}>{children}</Tag>
  );
};

Button.defaultProps = {
  tagName: 'button',
  variant: 'default',
  width: 'auto'
};

Button.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  width: PropTypes.oneOf(['auto', 'full']),
  variant: PropTypes.oneOf(['default', 'link', 'cta']),
  href: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button;
