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
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PostCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  build: buildPipeline,
  linting: lintingPipeline
} = require('../lib/postcss-plugins.js');
const skeletonConfig = require('../lib/skeleton-html-config.js');
const browserWorkflow = require('./browser');

/*
 *
 * CREATE WEBPACK CONFIGURATIONS
 * The shared base configurations imported earlier are augmented with paths and specific details here.
 *
 */

module.exports = (
  webpackMerge(
    browserWorkflow,
    {
      resolveLoader: {
        alias: {
          'prefix-variables-loader': path.resolve(__dirname, '../lib/prefix-variables-loader')
        }
      },
      module: {
        preLoaders: [
          {
            test: /\.css$/,
            loader: 'postcss-loader' // linting
          }
        ],
        loaders: [
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css-loader?-minimize&sourceMap')
          },
          {
            test: /\.css$/,
            loader: 'prefix-variables-loader',
            exclude: /variables/
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin('/assets/[name]-[hash].css'),
        new PostCssPipelineWebpackPlugin({
          suffix: undefined,
          pipeline: buildPipeline
        }),
        new HtmlWebpackPlugin(Object.assign({}, skeletonConfig, {
          filename: '_skeleton.styleguide.html',
          mode: 'styleguide'
        })),
        new HtmlWebpackPlugin(Object.assign({}, skeletonConfig, {
          filename: '_skeleton.html',
          mode: 'page',
          excludeChunks: ['styleguide']
        }))
      ],
      postcss: lintingPipeline
    }
  )
);