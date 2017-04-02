export const List_Item = ({
  className = '',
  children,
  ...attrs
}) => (
  <li className={`list__item ${className}`} {...attrs}>{children}</li>
);

List_Item.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};


export const List = ({
  tagName,
  className = '',
  variant = 'unordered',
  children,
  ...attrs
}) => {
  const Tag = tagName || variant === 'ordered' ? 'ol' : 'ul';

  return (
    <Tag className={`list list--${variant} ${className}`} {...attrs}>
      {children}
    </Tag>
  );
};

List.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  variant: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};


export default List;
