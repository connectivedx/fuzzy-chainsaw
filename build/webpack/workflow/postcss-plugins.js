/*
  Configures PostCSS plugins for all webpack builds.

  The settings here map to the `postcss` property on the webpack configuration.
*/
const postcss = require('postcss');

// standard
const cssnext = require('postcss-cssnext');
const colorAlpha = require('postcss-color-alpha');
const extend = require('postcss-extend');
const discardEmpty = require('postcss-discard-empty');
const removeRoot = require('postcss-remove-root');

// dev
const cssImport = require('postcss-import');

// build
const mqpacker = require('css-mqpacker');
const url = require('postcss-url');

// linting
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');

// production
const cssnano = require('cssnano');


module.exports.linting = [
  stylelint(),
  reporter()
];

const standard = [
  cssnext(),
  colorAlpha(),
  extend(),
  discardEmpty(),
  removeRoot()
];

module.exports.dev = [
  ...module.exports.linting,
  cssImport(),
  ...standard
];

module.exports.build = [
  postcss.plugin('fix-escaping-error', () => (css) => {
    css.walkRules((rule) => {
      rule.selector = rule.selector.replace(/\\--/gi, '--');
    });
  }),
  ...standard,
  mqpacker({
    sort: true
  }),
  url({
    url: urlStr => urlStr.replace('/assets/', './')
  })
];

module.exports.production = [
  cssnano()
];
