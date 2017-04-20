export const Heading = (props) => {
  const {
    tagName,
    className,
    variant,
    level,
    children,
    ...attrs
} = props;
  let Tag = tagName || 'h1';
  let delevel = level || 1;

  if (level !== undefined && tagName === undefined) {
    Tag = `h${level}`;
    delevel = level;
  } else if (level === undefined && tagName !== undefined) {
    Tag = tagName;
  }

  const classStack = Rucksack.createClassName([
    'heading',
    Rucksack.createVariants('heading--', variant),
    Rucksack.createVariants('heading--h', delevel),
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Heading.defaultProps = {
  variant: 'default'
};

Heading.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  variant: React.PropTypes.string,
  level: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};


export default Heading;
