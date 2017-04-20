export const Image = ({
  className = '',
  variant = 'default',
  alt = '',
  src = { },
  ...attrs
}) => {
  if (typeof src === 'string') {
    return <img alt={alt} src={src.toString()} className={`image image--${variant} ${className}`} />;
  }

  const imageData = {
    src: src.src,
    srcSet: src.srcset,
    width: src.width,
    height: src.height
  };

  return (
    <img
      className={`image image--${variant} ${className}`}
      alt={alt}
      {...imageData}
      {...attrs}
    />
  );
};

Image.propTypes = {
  className: React.PropTypes.string,
  variant: React.PropTypes.oneOf(['default', 'auto']),
  alt: React.PropTypes.string.isRequired,
  src: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
};


export default Image;
