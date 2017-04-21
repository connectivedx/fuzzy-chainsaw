export const Button = (props) => {
  const {
    tagName,
    className,
    variant,
    href,
    children,
    ...attrs
  } = props;

  let Tag = tagName;
  let classStack = FcUtils.createClassStack([
    'button',
    `button--${variant}`,
    className
  ]);

  if (href) {
    Tag = 'a';
    classStack = FcUtils.createClassStack([classStack, 'button--link']);
    attrs.href = href;
  }

  return (
    <Tag className={classStack} {...attrs}>{children}</Tag>
  );
};

Button.defaultProps = {
  tagName: 'button',
  variant: 'default'
};

Button.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'link', 'cta', 'full']),
  href: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button;
