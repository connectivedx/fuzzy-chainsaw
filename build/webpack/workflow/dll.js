/*
  Webpack configuration to precompile
  vendor modules before main bundle
*/

const webpack = require('webpack');
const StatsPlugin = require('stats-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const { source, dest } = require('../../lib/path-helpers');

const { outputFormats } = require(source('fc-config')); // eslint-disable-line


module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  node: {
    fs: 'empty'
  },
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
    'react/lib/ReactContext': true
  },
  output: {
    path: dest('assets/dlls'),
    filename: outputFormats.dll,
    library: '[name]_dll',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules\/(?!(get-own-enumerable-property-symbols|stringify-object)\/)/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['assets/dlls'], { root: dest() }),
    new webpack.DllPlugin({
      path: dest('assets/dlls/[name]-manifest.json'),
      name: '[name]_dll'
    }),
    new StatsPlugin('dll-stats.json', {
      chunkModules: true,
      exclude: [/node_modules/]
    }),
    new WebpackNotifierPlugin({
      title: 'FC Dll'
    })
  ],
  stats: {
    quiet: true,
    hash: false,
    version: false,
    modules: false
  }
};
