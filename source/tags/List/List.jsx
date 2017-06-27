export const List_Item = (props) => {
  const {
    className,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'List__item',
    className
  ]);

  return (
    <li className={classStack} {...attrs}>
      {children}
    </li>
  );
};

List_Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};


export const List = (props) => {
  const {
    tagName,
    className,
    variant,
    children,
    ...attrs
  } = props;

  const Tag = tagName || variant === 'ordered' ? 'ol' : 'ul';
  const classStack = FcUtils.createClassStack([
    'List',
    `List--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

List.defaultProps = {
  variant: 'unordered'
};

List.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['unordered', 'ordered', 'blank']),
  children: PropTypes.node.isRequired
};


export default List;
