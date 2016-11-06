/*
  Configures webpack to build all elements of the site.

  This file imports the basic configuration of actions (e.g. webpack.tests.js),
  and decorates them with path configurations and other project-specific setups.

  Note that configurations defined here are imported and further extended by webpack.production.config.js,
  meaning that changes here apply to debug and production builds unless they are undone in the production file.

  Where possible, favor making changes in webpack configuration from here as opposed
  to the shared configurations to keep it easy to apply upgrades.
*/

const path = require('path');
const pkg = require('./package.json')
const dirs = pkg.directories;


/*
 *
 * IMPORT SHARED WEBPACK CONFIGURATIONS
 *
 */

const staticConfig = require('./build/webpack.static');
const styleguideConfig = require('./build/webpack.styleguide');
const browserConfig = require('./build/webpack.browser');
const testsConfig = require('./build/webpack.tests');


/*
 *
 * HELPER FUNCTIONS
 *
 */

const baseOutput = require('./build/lib/base-output');
const {
  pages,
  components,
  tags,
  styleguides
} = require('./build/lib/file-collections');


/*
 *
 * CREATE WEBPACK CONFIGURATIONS
 * The shared base configurations imported earlier are augmented with paths and specific details here.
 *
 */

const renderPages = staticConfig(baseOutput({
  entry: dirs.source + 'RenderPage.jsx',
  locals: { components, tags },
  paths: pages.map(page => `${page}.html`),
}));

const renderStyleguide = styleguideConfig(baseOutput({
  entry: dirs.source + 'RenderStyleguide.jsx',
  locals: { components, tags },
  paths: styleguides.map(page => `styleguide/${page}.html`)
}));

const styleguideBundle = browserConfig(baseOutput({
  entry: dirs.source + 'styleguide.jsx',
  outputScript: '/assets/styleguide.js',
  outputStyle: '/assets/styleguide.css'
}));

const browserScript = browserConfig(baseOutput({
  entry: dirs.source + 'main.jsx',
  outputScript: '/assets/bundle.js'
}));

const browserStyle = browserConfig(baseOutput({
  entry: dirs.source + 'style.jsx',
  outputStyle: '/assets/bundle.css'
}));

const componentTests = testsConfig(baseOutput({
  entry: dirs.source + 'tests.jsx',
  outputScript: '/tmp/tests.js',
  reporter: 'tap-min'
}))


/*
 *
 * EXPORT ALL CONFIGURATIONS
 * Consumers of this config (e.g. gulp) will pass these to webpack for execution.
 *
 */
module.exports = [
  browserScript,
  browserStyle,
  renderStyleguide,
  styleguideBundle,
  renderPages,
  componentTests
];
