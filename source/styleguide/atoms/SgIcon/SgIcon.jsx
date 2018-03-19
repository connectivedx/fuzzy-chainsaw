export const SgIcon = (props) => {
  const {
    className,
    size,
    variant,
    name,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'SgIcon',
    `SgIcon--${name}`,
    `SgIcon--${size}`,
    `SgIcon--${variant}`,
    className
  ]);

  return (
    <svg className={classStack} {...attrs}>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

SgIcon.defaultProps = {
  size: 'normal',
  variant: 'default'
};

SgIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'small', 'large', 'wide']),
  variant: PropTypes.oneOf(['default', 'dark', 'light']),
  name: PropTypes.string.isRequired
};


export default SgIcon;
