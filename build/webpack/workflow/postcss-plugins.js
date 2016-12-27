/*
	Configures PostCSS plugins for all webpack builds.

	The settings here map to the `postcss` property on the webpack configuration.
	These plugins apply to all webpack configurations for both the site and styleguide.
*/

const postcss = require('postcss');
const cssnext = require('postcss-cssnext');
const url = require('postcss-url');
const colorAlpha = require('postcss-color-alpha');
const extend = require('postcss-extend');
const discardEmpty = require('postcss-discard-empty');
const removeRoot = require('postcss-remove-root');
const mqpacker = require('css-mqpacker');

module.exports = [
  postcss.plugin('fix-escaping-error', (opts) => (css, result) => {
    css.walkRules(rule => {
      rule.selector = rule.selector.replace(/\\--/gi, '--');
    });
  }),
  cssnext(),
  colorAlpha(),
  extend(),
  discardEmpty(),
  removeRoot(),
  mqpacker({
    sort: true
  }),
  url({
    url: urlStr => urlStr.replace('/assets/', './')
  })
];
