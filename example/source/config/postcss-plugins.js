/*
  Configures PostCSS plugins for all webpack builds.
*/

const postcss = require('postcss');

// standard
const nested = require('postcss-nested');
const cssnext = require('postcss-cssnext');
const extend = require('postcss-extend');
const discardEmpty = require('postcss-discard-empty');
const removeRoot = require('postcss-remove-root');

// build
const mqpacker = require('css-mqpacker');

// linting
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');

// production
const cssnano = require('cssnano');

// dev
const cssImport = require('postcss-import');
const createResolver = require('postcss-import-webpack-resolver');

// setup resolver for postcss-import
const { source } = require('../../lib/path-helpers');
const { resolve } = require('../workflow/shared');

const { postcssPlugins } = require(source('fc-config')); // eslint-disable-line

module.exports.linting = [
  stylelint(),
  reporter()
];


const standard = [
  nested(),
  cssnext({
    features: {
      nesting: false
    }
  }),
  extend(),
  ...postcssPlugins.build,
  discardEmpty(),
  removeRoot()
];


module.exports.dev = [
  ...module.exports.linting,
  cssImport({
    resolve: createResolver({
      alias: resolve.alias,
      modules: [source(), 'node_modules']
    })
  }),
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
  })
];


module.exports.production = [
  ...postcssPlugins.production,
  cssnano()
];
