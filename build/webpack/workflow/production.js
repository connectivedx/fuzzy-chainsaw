/*
  Configures the webpack production behavior
*/

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const PostCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');

const { production: postcssPipeline } = require('../lib/postcss-plugins.js');
const buildWorkflow = require('./build');


module.exports = webpackMerge(
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
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        output: {
          comments: false
        }
      })
    ]
  }
);
