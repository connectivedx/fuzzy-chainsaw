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

  if (typeof src === 'string') {
    return (
      <img
        alt={alt}
        src={src.toString()}
        className={classStack}
        {...attrs}
      />
    );
  }

  return (
    <img
      className={classStack}
      alt={alt}
      {...{
        src: src.src,
        srcSet: src.srcset,
        width: src.width,
        height: src.height
      }}
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
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired
};


export default Image;
