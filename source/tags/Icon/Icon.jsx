export const Icon = ({
  className = '',
  size = 'normal',
  variant = 'default',
  name,
  ...attrs
}) => (
  <svg className={`icon icon--${size} icon--${name} icon--${variant} ${className}`} {...attrs}>
    <use xlinkHref={`#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  className: React.PropTypes.string,
  size: React.PropTypes.string,
  variant: React.PropTypes.string,
  name: React.PropTypes.string.isRequired
};

export default Icon;
