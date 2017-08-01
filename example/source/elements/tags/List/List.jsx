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
  tagName: PropTypes.tagName,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['unordered', 'ordered', 'blank']),
  children: PropTypes.node.isRequired
};


export const List__item = FcUtils.createBasicComponent({
  name: 'List__item',
  defaultProps: {
    tagName: 'li'
  }
});


export default Object.assign(List, {
  Item: List__item
});
