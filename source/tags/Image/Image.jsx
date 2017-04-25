export const Image = (props) => {
  const {
    className,
    variant,
    alt,
    src,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Image',
    `Image--${variant}`,
    className
  ]);

  return (
    <img
      alt={alt}
      src={src}
      className={classStack}
      {...attrs}
    />
  );
};

Image.defaultProps = {
  variant: 'default'
};

Image.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'auto']),
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};


export default Image;
