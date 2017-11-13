export const Table = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Table',
    `Table--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      <table className="Table__root RichText">
        {children}
      </table>
    </Tag>
  );
};

Table.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

Table.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'auto', 'preferences', 'responsive']),
  children: PropTypes.node
};


export default Table;
