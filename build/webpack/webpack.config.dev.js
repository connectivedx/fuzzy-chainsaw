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
const pkgpath = require('packpath');

const { directories: dirs } = require(path.resolve(pkgpath.self(), 'package.json'));


/*
 *
 * IMPORT SHARED WEBPACK WORKFLOWS
 *
 */
const devConfig = require('./workflow/webpack.dev');
const testsConfig = require('./workflow/webpack.tests');


/*
 *
 * CREATE WEBPACK CONFIGURATIONS
 * The shared base configurations imported earlier are augmented with paths and specific details here.
 *
 */
const devBundles = devConfig({
  entry: {
    devScript: path.resolve(dirs.source, 'RenderDev.jsx'),
    styleguide: path.resolve(dirs.source, 'styleguide/styleguide.jsx'),
    styles: path.resolve(dirs.source, 'styles.jsx'),
    scripts: path.resolve(dirs.source, 'scripts.jsx')
  },
  outputPath: path.resolve(pkgpath.self(), dirs.dest),
  outputScript: '/assets/[name].js',
  outputStyle: '/assets/[name].css'
});

const componentTests = testsConfig({
  entry: path.resolve(dirs.source, 'tests.jsx'),
  outputPath: path.resolve(pkgpath.self(), dirs.dest),
  outputScript: '/tmp/tests.js',
  reporter: path.resolve(pkgpath.self(), 'node_modules', '.bin', 'tap-min')
});


/*
 *
 * EXPORT ALL CONFIGURATIONS
 * Consumers of this config (e.g. gulp) will pass these to webpack for execution.
 * Note that the export is a factory function (to avoid sharing the same config object across requires),
 * so call it after you require it.
 *
 */
module.exports = [
  devBundles,
  componentTests
];
