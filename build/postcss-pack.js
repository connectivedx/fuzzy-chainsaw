const cssnext = require('postcss-cssnext');
const colorAlpha = require('postcss-color-alpha');
const cssimport = require('postcss-import');
const discardEmpty = require('postcss-discard-empty');

module.exports = [
  cssimport(), // for importing global variables/custom-selectors
  cssnext({
    warnForDuplicates: false
  }),
  colorAlpha(),
  discardEmpty()
];