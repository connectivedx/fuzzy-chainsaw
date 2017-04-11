const webpack = require('webpack');
const StatsPlugin = require('stats-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const { dest } = require('../../lib/path-helpers');

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
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
    filename: '[name]-[hash].dll.js',
    library: '[name]_dll',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader?cacheDirectory=true',
        exclude: /node_modules\/(?!(get-own-enumerable-property-symbols|stringify-object)\/)/
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new CleanWebpackPlugin(['assets/dlls'], { root: dest() }),
    new webpack.DllPlugin({
      path: dest('assets/dlls/[name]-manifest.json'),
      name: '[name]_dll'
    }),
    new StatsPlugin('dll-stats.json', {
      chunkModules: true,
      exclude: [/node_modules/]
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  stats: {
    quiet: true
  }
};
