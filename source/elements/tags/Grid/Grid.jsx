export const Grid__item =
  FcUtils.createBasicComponent({
    name: 'Grid__item',
    defaultProps: {
      tagName: 'div'
    }
  });

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
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'auto-fit', '2-up', '3-up', '4-up']),
  children: PropTypes.node
};


export default Grid;
