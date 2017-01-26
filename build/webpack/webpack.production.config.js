/*
  Configures webpack to build the site for production deployment.

  This file imports the webpack config factory and extends it to set production
  tasks such as minification to enabled. Thus, changes to the debug build also apply here unless
  this configuration actively undoes them.
*/
const webpack = require('webpack');
const PostCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');

let build = require('./webpack.factory')();

// production specific configuration
module.exports = build.map(config => {
  if (config.workflow === 'test'
    || config.workflow === 'static') {
    return config;
  }

  config.devtool = 'source-map';

  // add production flag to build environment
  // libraries can key off this to import versions without debug info
  // (e.g. react turns off warnings in the console and gets much smaller because of this)
  config.plugins.unshift(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  );

  // add css minification
  if (config.workflow === 'browser') {
    config.plugins.push(
      new PostCssPipelineWebpackPlugin({
        suffix: undefined,
        pipeline: [
          require('cssnano')
        ]
      })
    );
  }

  // uglify JS
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    })
  );

  return config;
});
