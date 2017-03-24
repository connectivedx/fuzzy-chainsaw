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
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PostCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');

const { directories: dirs } = require(path.resolve(pkgpath.self(), 'package.json'));
const BrowserConfig = require('./webpack.browser');
const {
  build: buildPipeline,
  linting: lintingPipeline
} = require('./postcss-plugins.js');

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
      resolveLoader: {
        alias: {
          'prefix-variables-loader': path.resolve(__dirname, '../lib/prefix-variables-loader')
        }
      },
      module: {
        // preLoaders: [
        //   {
        //     test: /\.css$/,
        //     loader: 'postcss-loader' // linting
        //   }
        // ],
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
        new webpack.DllReferencePlugin({
          context: path.resolve(pkgpath.self()),
          manifest: require(path.resolve(pkgpath.self(), dirs.dest, 'assets/dlls/vendor-manifest.json'))
        }),
        new ExtractTextPlugin(outputStyle),
        new PostCssPipelineWebpackPlugin({
          suffix: undefined,
          pipeline: buildPipeline
        }),
        new StatsPlugin('build-stats.json', {
          chunkModules: true,
          exclude: [/node_modules/]
        })
      ],
      postcss: lintingPipeline
    }
  )
);
