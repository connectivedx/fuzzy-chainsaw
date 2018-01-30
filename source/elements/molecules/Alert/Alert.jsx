export const Alert = (props) => {
  const {
    tagName: Tag,
    className,
    level,
    variant,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Alert',
    `Alert--${level}-level`,
    `Alert--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      <div className="Alert__body">
        {children}
      </div>
    </Tag>
  );
};

Alert.defaultProps = {
  tagName: 'div',
  level: 'page',
  variant: 'default'
};

Alert.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  level: PropTypes.oneOf(['page', 'form', 'field']),
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'error', 'information']),
  children: PropTypes.node
};


export default Alert;
