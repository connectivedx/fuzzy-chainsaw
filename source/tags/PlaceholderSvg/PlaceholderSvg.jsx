import React from 'react';
import styles from './PlaceholderSvg.css';

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
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
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
        x='50%'
        y='50%'
        textAnchor='middle'>
          {text}
        </text>
    </svg>
  );
}

PlaceholderSvg.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  text: React.PropTypes.string,
  imgColor: React.PropTypes.string,
  textColor: React.PropTypes.string,
  fontFamily: React.PropTypes.string,
  fontSize: React.PropTypes.string,
  fontWeight: React.PropTypes.string
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

export default PlaceholderSvg;
