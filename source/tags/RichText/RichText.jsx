const RichText = ({
  tagName = 'div',
  className = '',
  variant = 'default',
  children,
  ...attrs
}) => {
  const Tag = tagName;
  return (
    <Tag className={`rich-text rich-text--${variant} ${className}`} {...attrs}>
      {children}
    </Tag>
  );
};

RichText.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  variant: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

export default RichText;
