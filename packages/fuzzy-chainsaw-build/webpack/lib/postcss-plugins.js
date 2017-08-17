/*
  Configures PostCSS plugins for webpack builds.
*/

const postcss = require('postcss');


// linting
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');

const linting = () => [
  stylelint(),
  reporter()
];


// standard
const nested = require('postcss-nested');
const cssnext = require('postcss-cssnext');
const extend = require('postcss-extend');
const mixins = require('postcss-mixins');
const discardEmpty = require('postcss-discard-empty');
const removeRoot = require('postcss-remove-root');

const standard = () => [
  mixins(),
  nested(),
  cssnext({
    features: {
      nesting: false
    }
  }),
  extend(),
  discardEmpty(),
  removeRoot()
];


// dev
const cssImport = require('postcss-import');
const createResolver = require('postcss-import-webpack-resolver');

const dev = (fcBuildConfig, factoryOptions) => {
  const { pathHelpers } = fcBuildConfig;

  return [
    ...linting(fcBuildConfig, factoryOptions),
    cssImport({
      resolve: createResolver({
        alias: factoryOptions.alias,
        modules: [pathHelpers.source(), 'node_modules']
      })
    }),
    ...standard(fcBuildConfig, factoryOptions)
  ];
};


// build
const mqpacker = require('css-mqpacker');

const build = (fcBuildConfig, factoryOptions) => [
  postcss.plugin('fix-escaping-error', () => (css) => {
    css.walkRules((rule) => {
      rule.selector = rule.selector.replace(/\\--/gi, '--');
    });
  }),
  ...standard(fcBuildConfig, factoryOptions),
  mqpacker({
    sort: true
  })
];

// production
const cssnano = require('cssnano');

const production = () => [
  cssnano()
];

module.exports = {
  linting,
  standard,
  dev,
  build,
  production
};
