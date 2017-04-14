/*
  Configures how assets served by the browser (e.g. CSS, JS, images) are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note that this configuration is used by all asset generation (both for dist and styleguide), so changes apply in both places.

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/
const path = require('path');
const pkgpath = require('packpath');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const skeletonConfig = require('../lib/skeleton-html-config.js');
const browserWorkflow = require('./browser');
const { dev: devPipeline } = require('../lib/postcss-plugins.js');
const { baseUrl } = require('../../lib/path-helpers');

const { directories } = require(path.resolve(pkgpath.self(), 'package.json')); // eslint-disable-line

const stats = {
  chunks: false,
  children: false,
  colors: true,
  reasons: true
};

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
            use: 'prefix-variables-loader',
            exclude: /variables/
          },
          {
            test: /\.css$/,
            use: 'remove-tilde-loader'
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('dev')
        }),
        new HtmlWebpackPlugin(Object.assign({}, skeletonConfig, {
          filename: 'index.html',
          mode: 'dev',
          baseUrl
        })),
        new webpack.HotModuleReplacementPlugin()
      ],
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

