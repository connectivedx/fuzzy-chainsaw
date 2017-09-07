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
const functions = require('postcss-functions');

const standard = (config) => {
  const { pathHelpers } = config;

  return [
    functions({
      glob: pathHelpers.source('variables/functions', '*.js')
    }),
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
};


// dev
const cssImport = require('postcss-import');
const createResolver = require('postcss-import-webpack-resolver');

const dev = (config, factoryOptions) => {
  const { pathHelpers } = config;

  return [
    ...linting(config, factoryOptions),
    cssImport({
      resolve: createResolver({
        alias: factoryOptions.alias,
        modules: [pathHelpers.source(), 'node_modules']
      })
    }),
    ...standard(config, factoryOptions)
  ];
};


// build
const mqpacker = require('css-mqpacker');

const build = (config, factoryOptions) => [
  postcss.plugin('fix-escaping-error', () => (css) => {
    css.walkRules((rule) => {
      rule.selector = rule.selector.replace(/\\--/gi, '--');
    });
  }),
  ...standard(config, factoryOptions),
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
