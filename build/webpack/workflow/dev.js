/*
  Configures webpack form development
*/

const path = require('path');
const pkgpath = require('packpath');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const skeletonConfig = require('../lib/skeleton-html-config.js');
const browserWorkflow = require('./browser');
const stats = require('../lib/webpack-stats');
const { dev: devPipeline } = require('../lib/postcss-plugins.js');
const { source, baseUrl } = require('../../lib/path-helpers');

const { directories } = require(path.resolve(pkgpath.self(), 'package.json')); // eslint-disable-line

const { enableNotifier } = require(source('fc-config')); // eslint-disable-line

const notifierPlugin = enableNotifier ? [
  new WebpackNotifierPlugin({
    title: 'FC Dev'
  })
] : [];

module.exports = (
  webpackMerge(
    browserWorkflow,
    {
      devtool: 'inline-source-map',
      resolveLoader: {
        alias: {
          'remove-tilde-loader': path.resolve(__dirname, '../lib/remove-tilde-loader'),
          'prefix-variables-loader': path.resolve(__dirname, '../lib/prefix-variables-loader')
        }
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: devPipeline
                }
              }
            ]
          },
          {
            test: /\.css$/,
            loader: 'prefix-variables-loader',
            include: [
              source('elements')
            ],
            options: {
              path: '@vars/index.css'
            }
          },
          {
            test: /\.css$/,
            loader: 'prefix-variables-loader',
            include: [
              source('styleguide')
            ],
            options: {
              path: '@sg-vars/index.css'
            }
          },
          {
            test: /\.css$/,
            use: 'remove-tilde-loader'
          }
        ]
      },
      plugins: notifierPlugin.concat([
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('dev')
        }),
        new HtmlWebpackPlugin(Object.assign({}, skeletonConfig, {
          filename: 'index.html',
          mode: 'dev',
          baseUrl
        })),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
          from: source('static'),
          to: 'assets/static'
        }], {
          ignore: ['README.md']
        })
      ]),
      stats,
      devServer: {
        historyApiFallback: {
          rewrites: [{ from: /.*\.html/, to: '/index.html' }]
        },
        publicPath: '/',
        contentBase: directories.dest,
        stats,
        hot: true
      }
    }
  )
);

