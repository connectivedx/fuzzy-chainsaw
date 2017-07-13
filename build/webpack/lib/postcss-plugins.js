/*
  Configures PostCSS plugins for all webpack builds.

  The settings here map to the `postcss` property on the webpack configuration.
*/
const postcss = require('postcss');

// standard
const nested = require('postcss-nested');
const cssnext = require('postcss-cssnext');
const extend = require('postcss-extend');
const discardEmpty = require('postcss-discard-empty');
const removeRoot = require('postcss-remove-root');

// dev
const cssImport = require('postcss-import');

// build
const mqpacker = require('css-mqpacker');

// linting
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');

// production
const cssnano = require('cssnano');

const { source } = require('../../lib/path-helpers');

const { postcssPlugins } = require(source('fc-config')); // eslint-disable-line

// setup resolver for postcss-import
const path = require('path');
const ResolverFactory = require('enhanced-resolve/lib/ResolverFactory');
const NodeJsInputFileSystem = require('enhanced-resolve/lib/NodeJsInputFileSystem');
const CachedInputFileSystem = require('enhanced-resolve/lib/CachedInputFileSystem');

const { resolve } = require('../workflow/shared');


const fileSystem = new CachedInputFileSystem(new NodeJsInputFileSystem(), 60000);
const resolver = ResolverFactory.createResolver({
  alias: resolve.alias,
  extensions: ['.css'],
  modules: [source(), 'node_modules'],
  useSyncFileSystemCalls: true,
  fileSystem
});


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
    resolve: (id, basedir) => resolver.resolveSync({}, basedir, id)
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
