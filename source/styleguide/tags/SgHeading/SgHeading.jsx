export const SgHeading = (props) => {
  const {
    tagName,
    className,
    weight,
    level,
    children,
    ...attrs
  } = props;

  const Tag = tagName || level || 'h1';
  const classStack = FcUtils.createClassStack([
    'SgHeading',
    `SgHeading--${weight}`,
    `SgHeading--${level}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

SgHeading.defaultProps = {
  weight: 'bold',
  level: 'h1'
};

SgHeading.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  weight: PropTypes.oneOf(['bold', 'medium', 'thin']),
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node.isRequired
};


export default SgHeading;
