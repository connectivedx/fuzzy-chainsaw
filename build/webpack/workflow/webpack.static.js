/*
  Configures webpack to build all elements of the site.

  This file imports the basic configuration of actions (e.g. webpack.tests.js),
  and decorates them with path configurations and other project-specific setups.

  Note that configurations defined here are imported and further extended by webpack.production.config.js,
  meaning that changes here apply to debug and production builds unless they are undone in the production file.

  Where possible, favor making changes in webpack configuration from here as opposed
  to the shared configurations to keep it easy to apply upgrades.
*/
const webpackMerge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const StatsPlugin = require('stats-webpack-plugin');

const browserConfig = require('./webpack.browser');

/*
 *
 * CREATE WEBPACK CONFIGURATIONS
 * The shared base configurations imported earlier are augmented with paths and specific details here.
 *
 */

module.exports = (
  webpackMerge(
    browserConfig,
    {
      module: {
        loaders: [
          {
            test: /\.css$/,
            loader: 'null-loader'
          }
        ]
      },
      externals: [
        nodeExternals({
          whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i]
        })
      ],
      plugins: [
        new StatsPlugin('static-stats.json', {
          chunkModules: true,
          exclude: [/node_modules/]
        })
      ]
    }
  )
);
