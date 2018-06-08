import chroma from 'chroma-js';

const createObject = (value) => {
  /*
    NOTE that HSL support scaffolding is exists in this function.
    However this component does not yet support recieving an HSL format.
  */
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

    [colorObject.rgb.r, colorObject.rgb.g, colorObject.rgb.b] = chroma(value).rgb();
    [colorObject.hsl.h, colorObject.hsl.s, colorObject.hsl.l] = chroma(value).hsl();

  /* rbg colors */
  } else if (value.substr(0, 3) === 'rgb') {
    const rgb = value.substring(4, (value.length - 1)).split(', ');
    [colorObject.rgb.r, colorObject.rgb.g, colorObject.rgb.b] = rgb;

    if (rgb[3]) {
      [colorObject.rgb.a] = [rgb[3]];

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

    [colorObject.hsl.h, colorObject.hsl.s, colorObject.hsl.l] = chroma(colorObject.hex).hsl();

    /* hsl colors */
  } else if (value.substr(0, 2) === 'hsl') {
    /* todo hsl */
  }

  return colorObject;
};

/* Gets the contrast ratio between two colors */
const getContrast = (color1, color2) => chroma.contrast(color1, color2);

/*
  ratio: contrast ratio returned by 'getContrast' above
  size: text size for the test. WCAG traditionally tests 14pt and 18pt font for 'normal' and 'large' respectively
  level: the level of the test (e.g 'A', 'AA', or 'AAA')
*/
const runWCAGTest = (ratio, size, level) => {
  switch (level) {
    /* fun fact, 'A' WCAG standard does not have a contrast ratio criteria. */
    case 'A':
      return 'PASS';

    case 'AA':
      if (size === 'large' && ratio > 3) {
        return 'PASS';
      } else if (size === 'large--bold' && ratio > 3) {
        return 'PASS';
      } else if (size === 'normal' && ratio > 4.5) {
        return 'PASS';
      }
      return 'FAIL';

    case 'AAA':
      if (size === 'large' && ratio > 4.5) {
        return 'PASS';
      } else if (size === 'large--bold' && ratio > 4.5) {
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

/* Binds the events to UI controls for color accessibility testing. */
const SgColorInit = (el) => {
  const level = el.querySelector('.SgColorSwatch__controls--level');
  const weight = el.querySelector('.SgColorSwatch__controls--weight');

  const double = el.querySelectorAll('.SgColorSwatch__accessibility--double');
  const triple = el.querySelectorAll('.SgColorSwatch__accessibility--triple');
  const normal = el.querySelectorAll('.SgColorSwatch__accessibility__badge--normal');
  const largeBold = el.querySelectorAll('.SgColorSwatch__accessibility__badge--large--bold');
  const large = el.querySelectorAll('.SgColorSwatch__accessibility__badge--large');

  const search = el.querySelector('.SgColorSwatch__search');

  let i = double.length;
  let j = largeBold.length;

  while (i--) {
    triple[i].style.display = 'none';
  }

  while (j--) {
    largeBold[j].style.display = 'none';
    large[j].style.display = 'none';
  }

  const churn = () => {
    const weightSelector = el.querySelectorAll(weight.options[weight.options.selectedIndex].value);
    const levelSelector = el.querySelectorAll(level.options[level.options.selectedIndex].value);

    let m = weightSelector.length;
    while (m--) {
      normal[m].style.display = 'none';
      largeBold[m].style.display = 'none';
      large[m].style.display = 'none';
      weightSelector[m].removeAttribute('style');
    }

    let l = levelSelector.length;
    while (l--) {
      double[l].style.display = 'none';
      triple[l].style.display = 'none';
      levelSelector[l].removeAttribute('style');
    }
  };

  level.addEventListener('change', () => {
    churn();
  });

  weight.addEventListener('change', () => {
    churn();
  });

  search.addEventListener('keyup', (e) => {
    const query = e.target.value;
    const colors = document.querySelectorAll('.SgColorSwatch');
    let o = colors.length;
    // unable to consolidate to single loop
    if (query.length === 0) {
      while (o--) {
        colors[o].style.display = '';
      }
    } else {
      while (o--) {
        if (!colors[o].dataset.colorName.toLowerCase().match(query.toLowerCase())) {
          colors[o].style.display = 'none';
        } else {
          colors[o].style.display = '';
        }
      }
    }
  });
};

module.exports = {
  createObject,
  getContrast,
  runWCAGTest,
  SgColorInit
};
