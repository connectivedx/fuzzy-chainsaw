export const Icon = (props) => {
  const {
    className,
    size,
    variant,
    name,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'icon',
    `icon--${name}`,
    `icon--${size}`,
    `icon--${variant}`,
    className
  ]);

  return (
    <svg className={classStack} {...attrs}>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

Icon.defaultProps = {
  size: 'normal',
  variant: 'default'
};

Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'small', 'large', 'wide']),
  variant: PropTypes.oneOf(['default', 'dark', 'light']),
  name: PropTypes.string.isRequired
};


export default Icon;
