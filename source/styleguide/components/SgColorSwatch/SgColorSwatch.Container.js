import chroma from 'chroma-js';

/* NOTE that HSL support scaffolding is here, but this component does not yet support recieving an HSL format. */

const createObject = (value) => {
  const colorObject =
    {
      hex: '',
      rgb: { r: '', g: '', b: '' },
      hsl: { h: '', s: '', l: '' }
    };

  /* hex codes */
  if (value.charAt(0) === '#') {
    colorObject.hex = value;
    /* create rest of the obj */

    const rgb = chroma(value).rgb();
    colorObject.rgb.r = rgb[0];
    colorObject.rgb.g = rgb[1];
    colorObject.rgb.b = rgb[2];

    const hsl = chroma(value).hsl();
    colorObject.hsl.h = hsl[0];
    colorObject.hsl.s = hsl[1];
    colorObject.hsl.l = hsl[2];

  /* rbg colors */
  } else if (value.substr(0, 3) === 'rgb') {
    const rgb = value.substring(4, (value.length - 1)).split(', ');
    colorObject.rgb.r = rgb[0];
    colorObject.rgb.g = rgb[1];
    colorObject.rgb.b = rgb[2];

    if (rgb[3]) {
      colorObject.rgb.a = rgb[3];

      const tempHex = chroma(parseInt(rgb[0], 10), parseInt(rgb[1], 10), parseInt(rgb[2], 10)).hex();

      const alphaHex = ((rgb[3] * 255).toFixed() / 1).toString(16);

      if (alphaHex < 10) {
        const prependedAlpha = `0${alphaHex}`;
        colorObject.hex = (chroma(tempHex) + prependedAlpha);
      } else {
        colorObject.hex = (chroma(tempHex) + alphaHex);
      }
    } else {
      colorObject.hex = chroma(parseInt(rgb[0], 10), parseInt(rgb[1], 10), parseInt(rgb[2], 10)).hex();
    }

    const hsl = chroma(colorObject.hex).hsl();
    colorObject.hsl.h = hsl[0];
    colorObject.hsl.s = hsl[1];
    colorObject.hsl.l = hsl[2];

  /* hsl colors */
  } else if (value.substr(0, 2) === 'hsl') {
    /* todo hsl */
  }

  return colorObject;
};

const getContrast = (color1, color2) => chroma.contrast(color1, color2);

const runWCAGTest = (ratio, size, level) => {
  switch (level) {
    case 'A':
      if (size === 'large' && ratio > 3) {
        return 'PASS';
      } else if (size === 'normal' && ratio > 4.5) {
        return 'PASS';
      }
      return 'FAIL';

    case 'AA':
      if (size === 'large' && ratio > 3) {
        return 'PASS';
      } else if (size === 'normal' && ratio > 4.5) {
        return 'PASS';
      }
      return 'FAIL';

    case 'AAA':
      if (size === 'large' && ratio > 4.5) {
        return 'PASS';
      } else if (size === 'normal' && ratio > 7) {
        return 'PASS';
      }
      return 'FAIL';

    default:
      if (size === 'large' && ratio > 3) {
        return 'PASS';
      } else if (size === 'normal' && ratio > 4.5) {
        return 'PASS';
      }
      return 'FAIL';
  }
};


module.exports = { createObject, getContrast, runWCAGTest };
