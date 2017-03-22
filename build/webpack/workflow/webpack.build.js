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
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const StatsPlugin = require('stats-webpack-plugin');

const { directories: dirs } = require(path.resolve(pkgpath.self(), 'package.json'));
const BrowserConfig = require('./webpack.browser');


/*
 *
 * CREATE WEBPACK CONFIGURATIONS
 * The shared base configurations imported earlier are augmented with paths and specific details here.
 *
 */

module.exports = ({
  entry,
  publicPath = './dist/',
  outputPath = 'dist',
  outputScript = '/tmp/bundle.js',
  outputStyle = '/tmp/bundle.css'
}) => (
  webpackMerge(
    BrowserConfig({
      entry,
      publicPath,
      outputPath,
      outputScript,
      outputStyle
    }),
    {
      plugins: [
        new StatsPlugin('stats.json', {
          chunkModules: true,
          exclude: [/node_modules/]
        }),
        new webpack.DllReferencePlugin({
          context: path.resolve(pkgpath.self()),
          manifest: require(path.resolve(pkgpath.self(), dirs.dest, 'assets/dlls/vendor-manifest.json'))
        })
      ]
    }
  )
);
