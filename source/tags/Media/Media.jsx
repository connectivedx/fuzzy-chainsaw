export const Media_Figure = (props) => {
  const {
    tagName: Tag,
    className,
    align,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Media__figure',
    align && `Media__figure--${align}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Media_Figure.defaultProps = {
  tagName: 'div'
};

Media_Figure.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  children: PropTypes.node.isRequired
};


export const Media_Body =
  FcUtils.createBasicComponent({
    name: 'Media_Body'
  });


export const Media = (props) => {
  const {
    tagName: Tag,
    className,
    align,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Media',
    align && `Media--${align}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Media.defaultProps = {
  tagName: 'div'
};

Media.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node.isRequired
};


export default Media;
