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
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
// const OfflinePlugin = require('offline-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const skeletonConfig = require('../lib/skeleton-html-config.js');
const browserWorkflow = require('./browser');
const { source, baseUrl } = require('../../lib/path-helpers');
const {
  build: buildPipeline,
  linting: lintingPipeline
} = require('../lib/postcss-plugins.js');


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
        rules: [
          {
            test: /\.css$/,
            enforce: 'pre',
            loader: 'postcss-loader', // linting
            options: {
              plugins: lintingPipeline
            }
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract('css-loader?-minimize&sourceMap')
          },
          {
            test: /\.css$/,
            use: 'prefix-variables-loader',
            exclude: /variables/
          }
        ]
      },
      plugins: [
        new ProgressBarPlugin(),
        new ExtractTextPlugin('assets/[name]-[hash].css'),
        new PostCssPipelineWebpackPlugin({
          suffix: undefined,
          pipeline: buildPipeline
        }),
        new WebpackNotifierPlugin({
          title: 'FC Build'
        }),
        new FaviconsWebpackPlugin({
          logo: source('favicon.png'),
          prefix: 'assets/favicons/[hash:8]-',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
          }
        }),
        new CopyWebpackPlugin([{
          from: source('vendor'),
          to: 'assets/vendor'
        }], {
          ignore: ['README.md']
        }),
        // new OfflinePlugin({
        //   excludes: [
        //     '**/_*',
        //     '**/.*',
        //     '**/*.map'
        //   ],
        //   ServiceWorker: {
        //     output: 'assets/offline/sw.js'
        //   },
        //   AppCache: {
        //     directory: 'assets/offline/'
        //   }
        // }),
        new HtmlWebpackPlugin(Object.assign({}, skeletonConfig, {
          filename: '_skeleton.styleguide.html',
          mode: 'styleguide',
          baseUrl
        })),
        new HtmlWebpackPlugin(Object.assign({}, skeletonConfig, {
          filename: '_skeleton.html',
          excludeChunks: ['styleguide'],
          mode: 'page',
          baseUrl
        }))
      ]
    }
  )
);
