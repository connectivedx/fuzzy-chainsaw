export const Grid__item = (props) => {
  const {
    tagName: Tag,
    span,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Grid__item',
    `Grid__item--span-${span}`
  ]);

  return (
    <Tag className={classStack} {...attrs} />
  );
};

Grid__item.defaultProps = {
  tagName: 'div',
  span: 'twelve'
};

Grid__item.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  span: PropTypes.oneOf(['twelve', 'eleven', 'ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one'])
};

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
  variant: PropTypes.oneOf(['default', 'auto-fit', 'auto-fill', '2-up', '3-up', '4-up']),
  children: PropTypes.node
};


export default Grid;
