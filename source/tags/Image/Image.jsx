export const Image = ({
  tagName = 'img',
  className = '',
  variant = 'default',
  src = { },
  ...attrs
}) => {
  const Tag = tagName;
  let srcData = { src };

  if (typeof src !== 'string') {
    const { src: srcsrc, srcSet } = src;
    srcData = { src: srcsrc, srcSet };
  }

  return (
    <Tag
      className={`image image--${variant} ${className}`}
      {...srcData} // normalized responize-loader/image-loader
      {...attrs}
    />
  );
};

Image.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  variant: React.PropTypes.oneOf(['default', 'auto']),
  src: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
};


export default Image;
