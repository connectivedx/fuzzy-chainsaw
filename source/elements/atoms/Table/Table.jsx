export const Table__head =
  FcUtils.createBasicComponent({
    name: 'table__head',
    defaultProps: {
      tagName: 'thead'
    }
  });

export const Table__foot =
  FcUtils.createBasicComponent({
    name: 'table__foot',
    defaultProps: {
      tagName: 'tfoot'
    }
  });

export const Table__body =
  FcUtils.createBasicComponent({
    name: 'table__body',
    defaultProps: {
      tagName: 'tbody'
    }
  });

export const Table__row =
  FcUtils.createBasicComponent({
    name: 'table__row',
    defaultProps: {
      tagName: 'tr'
    }
  });

export const Table__header =
  FcUtils.createBasicComponent({
    name: 'table__header',
    defaultProps: {
      tagName: 'th'
    }
  });

export const Table__data =
  FcUtils.createBasicComponent({
    name: 'table__data',
    defaultProps: {
      tagName: 'td'
    }
  });

export const Table = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'table',
    `table--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      <table className="table__root rich-text">
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
  variant: PropTypes.oneOf(['default', 'auto', 'inline-data', 'responsive']),
  children: PropTypes.node
};


export default Table;
