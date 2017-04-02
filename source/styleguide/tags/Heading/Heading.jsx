export const Heading = ({
  tagName,
  className = '',
  variant = 'default',
  level,
  children,
  ...attrs
}) => {
  let Tag = tagName || 'h1';
  let delevel = level || 1;

  if (level !== undefined && tagName === undefined) {
    Tag = `h${level}`;
    delevel = level;
  } else if (level === undefined && tagName !== undefined) {
    Tag = tagName;
  }

  return (
    <Tag className={`sg-heading sg-heading--${variant} sg-heading--h${delevel} ${className}`} {...attrs}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  variant: React.PropTypes.string,
  level: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};


export default Heading;
