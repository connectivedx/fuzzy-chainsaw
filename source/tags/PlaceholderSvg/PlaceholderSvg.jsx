export const PlaceholderSvg = (props) => {
  const {
    width,
    height,
    text,
    imgColor,
    textColor,
    fontFamily,
    fontSize,
    fontWeight
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      style={{
        height: `${height}px`,
        maxWidth: '100%',
        textTransform: 'uppercase',
        width: `${width}px`
      }}
    >
      <rect
        fill={imgColor}
        width="100%"
        height="100%"
      />
      <text
        fill={textColor}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        x="50%"
        y="50%"
        textAnchor="middle"
      >
        {text}
      </text>
    </svg>
  );
};

PlaceholderSvg.defaultProps = {
  width: 500,
  height: 250,
  text: 'FPO',
  imgColor: '#ccc',
  textColor: '#fff',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'bold'
};

PlaceholderSvg.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  text: PropTypes.string,
  imgColor: PropTypes.string,
  textColor: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string
};

export default PlaceholderSvg;
