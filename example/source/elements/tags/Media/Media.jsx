export const Media__figure = (props) => {
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

Media__figure.defaultProps = {
  tagName: 'div'
};

Media__figure.propTypes = {
  tagName: PropTypes.tagName,
  className: PropTypes.string,
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  children: PropTypes.node.isRequired
};


export const Media__body =
  FcUtils.createBasicComponent({
    name: 'Media__body'
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
  tagName: PropTypes.tagName,
  className: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node.isRequired
};


export default Object.assign(Media, {
  Figure: Media__figure,
  Body: Media__body
});
