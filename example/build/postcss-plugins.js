/*
  Configures PostCSS plugins for webpack builds.
*/

const postcss = require('postcss');


// linting
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');

module.exports.linting = () => [
  stylelint(),
  reporter()
];


// standard
const nested = require('postcss-nested');
const cssnext = require('postcss-cssnext');
const extend = require('postcss-extend');
const discardEmpty = require('postcss-discard-empty');
const removeRoot = require('postcss-remove-root');

module.exports.standard = () => [
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

module.exports.dev = (fcBuildConfig, factoryOptions) => {
  const { pathHelpers } = fcBuildConfig;

  return [
    ...module.exports.linting(fcBuildConfig, factoryOptions),
    cssImport({
      resolve: createResolver({
        alias: factoryOptions.alias,
        modules: [pathHelpers.source(), 'node_modules']
      })
    }),
    ...module.exports.standard(fcBuildConfig, factoryOptions)
  ];
};


// build
const mqpacker = require('css-mqpacker');

module.exports.build = (fcBuildConfig, factoryOptions) => [
  postcss.plugin('fix-escaping-error', () => (css) => {
    css.walkRules((rule) => {
      rule.selector = rule.selector.replace(/\\--/gi, '--');
    });
  }),
  ...module.exports.standard(fcBuildConfig, factoryOptions),
  mqpacker({
    sort: true
  })
];

// production
const cssnano = require('cssnano');

module.exports.production = () => [
  cssnano()
];
