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
const productionConfig = require('./workflow/webpack.production');
const staticConfig = require('./workflow/webpack.static');


/*
 *
 * CREATE WEBPACK CONFIGURATION
 * The shared base configurations imported earlier are augmented with paths and specific details here.
 *
 */

module.exports = [
  productionConfig({
    entry: {
      styleguide: path.resolve(pkgpath.self(), dirs.source, 'styleguide/styleguide.jsx'),
      styles: path.resolve(pkgpath.self(), dirs.source, 'styles.jsx'),
      scripts: path.resolve(pkgpath.self(), dirs.source, 'scripts.jsx')
    },
    outputPath: path.resolve(pkgpath.self(), dirs.dest),
    outputScript: '/assets/[name]-[hash].js',
    outputStyle: '/assets/[name]-[hash].css'
  }),
  staticConfig({
    entry: {
      static: path.resolve(pkgpath.self(), dirs.source, 'static.jsx')
    },
    outputPath: path.resolve(pkgpath.self(), dirs.dest),
    outputScript: '/assets/[name]-[hash].js',
    outputStyle: '/assets/[name]-[hash].css'
  })
];
