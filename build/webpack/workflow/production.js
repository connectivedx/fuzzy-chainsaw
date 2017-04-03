/*
  Configures how assets served by the browser (e.g. CSS, JS, images) are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note that this configuration is used by all asset generation (both for dist and styleguide), so changes apply in both places.

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const PostCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');

const { production: postcssPipeline } = require('../lib/postcss-plugins.js');
const buildWorkflow = require('./build');


const production = webpackMerge(
  buildWorkflow,
  {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new PostCssPipelineWebpackPlugin({
        suffix: undefined,
        pipeline: postcssPipeline
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      })
    ]
  }
);


module.exports = production;
