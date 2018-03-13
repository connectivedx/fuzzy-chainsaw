/*
  Configures webpack to build all elements of the site.
*/

const webpackMerge = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');

const ciBuildWorkflow = require('./build.ci');

const { source } = require('../../lib/path-helpers');

const { enableNotifier } = require(source('fc-config')); // eslint-disable-line

const plugins = enableNotifier ? [
  new WebpackNotifierPlugin({
    title: 'FC Build'
  })
] : [];

module.exports = (
  webpackMerge(
    ciBuildWorkflow,
    {
      plugins
    }
  )
);
