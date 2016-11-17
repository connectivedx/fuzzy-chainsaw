/*
	Configures PostCSS plugins for all webpack builds.

	The settings here map to the `postcss` property on the webpack configuration.
	These plugins apply to all webpack configurations for both the site and styleguide.
*/

// file plugins are applied to each individual css file
const cssnext = require('postcss-cssnext');
const colorAlpha = require('postcss-color-alpha');
const cssimport = require('postcss-import');
const discardEmpty = require('postcss-discard-empty');

// bundle plugins are applied to the compiled css file
const extend = require('postcss-extend');


module.exports = {
  filePlugins: [
    cssimport(), // for importing global variables/custom-selectors
    cssnext({
      warnForDuplicates: false
    }),
    colorAlpha(),
    discardEmpty()
  ],
  bundlePlugins: [
    extend()
  ]
};
