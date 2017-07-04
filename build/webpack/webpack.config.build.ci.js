/*
  Configures webpack to build all elements of the site.

  This file imports the basic configuration of actions (e.g. webpack.tests.js),
  and decorates them with path configurations and other project-specific setups.

  Note that configurations defined here are imported and further extended by webpack.production.config.js,
  meaning that changes here apply to debug and production builds unless they are undone in the production file.

  Where possible, favor making changes in webpack configuration from here as opposed
  to the shared configurations to keep it easy to apply upgrades.
*/
const webpack = require('webpack');
const merge = require('webpack-merge');

const { source, sourceAll } = require('../lib/path-helpers');
const buildWorkflow = require('./workflow/build');

const { entries } = require(source('fc-config')); // eslint-disable-line


const modify = (config) => {
  config.plugins = config.plugins.slice(1);
  return config;
};


module.exports = modify(merge(buildWorkflow, {
  entry: sourceAll(entries.ci),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.CI_MODE': true
    })
  ]
}));
