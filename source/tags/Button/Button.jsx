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
  let classStack = Rucksack.createClassName([
    'button',
    Rucksack.createVariants('button--', variant),
    className
  ]);

  if (href) {
    Tag = 'a';
    classStack = Rucksack.createClassName([classStack, 'button--link']);
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
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  variant: React.PropTypes.string,
  href: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

export default Button;
