/*
  Configures webpack to build all elements of the site.
*/

const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PostCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const skeletonConfig = require('../lib/skeleton-html-config.js');
const browserWorkflow = require('./browser');
const { source, baseUrl } = require('../../lib/path-helpers');
const {
  build: buildPipeline,
  linting: lintingPipeline
} = require('../lib/postcss-plugins.js');

const { outputFormats } = require(source('fc-config')); // eslint-disable-line


module.exports = (
  webpackMerge(
    browserWorkflow,
    {
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
          }
        ]
      },
      plugins: [
        new ProgressBarPlugin(),
        new ExtractTextPlugin(`assets/${outputFormats.css}`),
        new PostCssPipelineWebpackPlugin({
          suffix: undefined,
          pipeline: buildPipeline
        }),
        new FaviconsWebpackPlugin({
          logo: source('favicon.png'),
          prefix: `assets/favicons/${outputFormats.favIconPrefix}`,
          persistentCache: false,
          icons: {
            android: false,
            appleIcon: false,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: false,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
          }
        }),
        new CopyWebpackPlugin([{
          from: source('static'),
          to: 'assets/static'
        }], {
          ignore: ['README.md']
        }),
        new OfflinePlugin({
          publicPath: baseUrl,
          excludes: [
            '**/_*',
            '**/.*',
            '**/*.map'
          ],
          ServiceWorker: {
            output: 'assets/offline/sw.js'
          },
          AppCache: false
        }),
        new HtmlWebpackPlugin(Object.assign({}, skeletonConfig, {
          filename: '_skeleton.html',
          baseUrl
        }))
      ]
    }
  )
);
