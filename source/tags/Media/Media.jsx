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
  align: PropTypes.oneOf([]),
  children: PropTypes.node.isRequired
};


export const Media_Body = (props) => {
  const {
    tagName: Tag,
    className = '',
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Media__body',
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Media_Body.defaultProps = {
  tagName: 'div'
};

Media_Body.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node.isRequired
};


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
    `Media--${align}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Media.defaultProps = {
  tagName: 'div',
  align: 'top'
};

Media.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node.isRequired
};


export default Media;
