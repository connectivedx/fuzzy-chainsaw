/*
	Configures PostCSS plugins for all webpack builds.

	The settings here map to the `postcss` property on the webpack configuration.
	These plugins apply to all webpack configurations for both the site and styleguide.
*/

const cssnext = require('postcss-cssnext');
const colorAlpha = require('postcss-color-alpha');
const extend = require('postcss-extend');
const discardEmpty = require('postcss-discard-empty');
const removeRoot = require('postcss-remove-root');
const mqpacker = require("css-mqpacker")


module.exports = [
  cssnext(),
  colorAlpha(),
  extend(),
  discardEmpty(),
  removeRoot(),
  mqpacker({ sort: true })
];
