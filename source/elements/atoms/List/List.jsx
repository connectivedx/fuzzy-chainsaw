export const List__item = (props) => {
  const {
    tagName,
    className,
    variant,
    children,
    ...attrs
  } = props;

  const getTagName = () => {
    switch (variant) {
      case 'term':
        return 'dt';
      case 'description':
        return 'dd';
      case 'item':
      default:
        return 'li';
    }
  };

  const Tag = tagName || getTagName();
  const classStack = FcUtils.createClassStack([
    'list__item',
    `list__item--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

List__item.defaultProps = {
  variant: 'item'
};

List__item.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['item', 'description', 'term']),
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

  const getTagName = () => {
    switch (variant) {
      case 'ordered':
        return 'ol';
      case 'definition':
        return 'dl';
      case 'unordered':
      default:
        return 'ul';
    }
  };

  const Tag = tagName || getTagName();
  const classStack = FcUtils.createClassStack([
    'list',
    `list--${variant}`,
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
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['unordered', 'ordered', 'blank', 'definition']),
  children: PropTypes.node.isRequired
};


export default List;
