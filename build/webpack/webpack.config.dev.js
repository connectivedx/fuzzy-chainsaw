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
const devConfig = require('./workflow/webpack.dev');


/*
 *
 * CREATE WEBPACK CONFIGURATION
 * The shared base configurations imported earlier are augmented with paths and specific details here.
 *
 */

module.exports = devConfig({
  entry: {
    devScript: [
      'webpack-dev-server/client?http://localhost:8080/',
      path.resolve(dirs.source, 'dev.jsx')
    ],
    styleguide: path.resolve(dirs.source, 'styleguide/styleguide.jsx'),
    styles: path.resolve(dirs.source, 'styles.jsx'),
    scripts: path.resolve(dirs.source, 'scripts.jsx')
  },
  outputPath: path.resolve(pkgpath.self(), dirs.dest),
  outputScript: '/assets/[name].js',
  outputStyle: '/assets/[name].css'
});