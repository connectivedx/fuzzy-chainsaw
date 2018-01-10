export const Table__head =
  FcUtils.createBasicComponent({
    name: 'Table__head',
    defaultProps: {
      tagName: 'thead'
    }
  });

export const Table__foot =
  FcUtils.createBasicComponent({
    name: 'Table__foot',
    defaultProps: {
      tagName: 'tfoot'
    }
  });

export const Table__body =
  FcUtils.createBasicComponent({
    name: 'Table__body',
    defaultProps: {
      tagName: 'tbody'
    }
  });

export const Table__row =
  FcUtils.createBasicComponent({
    name: 'Table__row',
    defaultProps: {
      tagName: 'tr'
    }
  });

export const Table__header =
  FcUtils.createBasicComponent({
    name: 'Table__header',
    defaultProps: {
      tagName: 'th'
    }
  });

export const Table__data =
  FcUtils.createBasicComponent({
    name: 'Table__data',
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
  variant: PropTypes.oneOf(['default', 'auto', 'inline-data', 'responsive']),
  children: PropTypes.node
};


export default Table;
