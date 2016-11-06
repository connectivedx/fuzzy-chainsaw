/* 
	Configures PostCSS plugins for all webpack builds.

	The settings here map to the `postcss` property on the webpack configuration.
	These plugins apply to all webpack configurations for both the site and styleguide.
*/

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