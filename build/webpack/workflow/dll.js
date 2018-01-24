/*
  Webpack configuration to precompile vendor
  modules before the main bundle
*/

const webpackMerge = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');

const ciConfig = require('./dll.ci');

module.exports = webpackMerge(
  ciConfig,
  {
    plugins: [
      new WebpackNotifierPlugin({
        title: 'FC Dll'
      })
    ]
  }
);
