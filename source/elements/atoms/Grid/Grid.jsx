export const Grid = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
    hSpace,
    vSpace,
    count,
    size,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Grid',
    `Grid--${variant}`,
    className
  ]);

  const styleStack = {
    '--h-space': hSpace,
    '--v-space': vSpace,
    '--count': count,
    '--size': size
  };

  return (
    <Tag className={classStack} style={styleStack} {...attrs}>
      {children}
    </Tag>
  );
};

Grid.defaultProps = {
  tagName: 'div',
  variant: 'default',
  hSpace: '16px',
  vSpace: '16px',
  count: '12',
  size: '10rem'
};

Grid.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'fit', 'fill']),
  hSpace: PropTypes.string,
  vSpace: PropTypes.string,
  count: PropTypes.string,
  size: PropTypes.string,
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
    'Grid__Column'
  ]);

  const styleStack = {};

  /* Column Sizes */
  styleStack['--size'] = size;

  /* Column Orders */
  if (Grid__Column.defaultProps.order !== order) {
    styleStack['--order'] = order;
  }

  return (
    <Tag className={classStack} style={styleStack} {...attrs} />
  );
};

Grid__Column.defaultProps = {
  tagName: 'div',
  size: '12',
  order: '0'
};

Grid__Column.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  size: PropTypes.string,
  order: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default Grid;
