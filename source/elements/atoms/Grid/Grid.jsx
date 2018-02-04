export const Grid = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Grid',
    `Grid--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Grid.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

Grid.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'fit', 'fill']),
  children: PropTypes.node
};

export const Grid__Column = (props) => {
  const {
    tagName: Tag,
    size,
    order,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Grid__Column',
    `Grid__Column--size-${size}`,
    (order) && `Grid__Column--order-${order}`
  ]);

  return (
    <Tag className={classStack} {...attrs} />
  );
};

Grid__Column.defaultProps = {
  tagName: 'div'
};

Grid__Column.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  size: PropTypes.string,
  order: PropTypes.string
};

export default Grid;
