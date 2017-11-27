export const Alert = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Alert',
    `Alert--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      <div className="Alert-body">
        {children}
      </div>
    </Tag>
  );
};

Alert.defaultProps = {
  tagName: 'div',
  variant: 'default'
};

Alert.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'error', 'information']),
  children: PropTypes.node
};


export default Alert;
