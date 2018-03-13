/*
  Webpack configuration to precompile vendor
  modules before the main bundle
*/

const webpackMerge = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');

const ciConfig = require('./dll.ci');

const { source } = require('../../lib/path-helpers');

const { enableNotifier } = require(source('fc-config')); // eslint-disable-line

const plugins = enableNotifier ? [
  new WebpackNotifierPlugin({
    title: 'FC Dll'
  })
] : [];

module.exports = webpackMerge(
  ciConfig,
  {
    plugins
  }
);
