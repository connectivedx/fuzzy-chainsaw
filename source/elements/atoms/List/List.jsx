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
      case 'title':
        return 'dt';
      case 'description':
        return 'dd';
      default:
        return 'li';
    }
  };

  const Tag = tagName || getTagName();
  const classStack = FcUtils.createClassStack([
    'List__item',
    `List__item--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

List__item.defaultProps = {
  variant: 'li'
};

List__item.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['unordered', 'ordered', 'blank']),
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
      case 'description':
        return 'dl';
      default:
        return 'ul';
    }
  };

  const Tag = tagName || getTagName();
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
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['unordered', 'ordered', 'blank']),
  children: PropTypes.node.isRequired
};


export default List;
