/*
  Configures PostCSS plugins for all webpack builds.
*/

const postcss = require('postcss');

// standard
const nested = require('postcss-nested');
const cssnext = require('postcss-cssnext');
const responsiveType = require('postcss-responsive-type');
const extend = require('postcss-extend');
const discardEmpty = require('postcss-discard-empty');
const removeRoot = require('postcss-remove-root');
const mixins = require('postcss-mixins');

// build
const mqpacker = require('css-mqpacker');

// linting
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');

// production
const selectorMerge = require('postcss-merge-selectors');
const cssnano = require('cssnano');

// dev
const cssImport = require('postcss-import');
const colorsExport = require('./colors-export');

// setup resolver for postcss-import
const ResolverFactory = require('enhanced-resolve/lib/ResolverFactory');
const NodeJsInputFileSystem = require('enhanced-resolve/lib/NodeJsInputFileSystem');
const CachedInputFileSystem = require('enhanced-resolve/lib/CachedInputFileSystem');

const { source, styleguide } = require('../../lib/path-helpers');
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
  mixins(),
  nested(),
  colorsExport(['colors.css'], ['--color-'], {
    dest: styleguide('molecules/SgColorSwatch/SgColorSwatch__Colors.json')
  }),  
  cssnext({
    features: {
      nesting: false
    }
  }),
  responsiveType(),
  extend(),
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
  selectorMerge(),
  cssnano()
];
