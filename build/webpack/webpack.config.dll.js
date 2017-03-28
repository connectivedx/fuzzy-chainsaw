const webpack = require('webpack');
const StatsPlugin = require('stats-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { dest } = require('../lib/path-helpers');

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    vendor: [
      'react',
      'react-dom'
    ],
    styleguide: [
      'react-modal',
      'pretty-data',
      // 'react-element-to-jsx-string',
      'react-syntax-highlighter',
      'slugify'
    ]
  },
  output: {
    path: dest('assets/dlls'),
    filename: '[name]-[hash].dll.js',
    library: '[name]_dll',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(['assets/dlls'], {
      // root: dest()
    }),
    new webpack.DllPlugin({
      path: dest('assets/dlls/[name]-manifest.json'),
      name: '[name]_dll'
    }),
    new StatsPlugin('dll-stats.json', {
      chunkModules: true,
      exclude: [/node_modules/]
    })
  ],
  stats: {
    quiet: true
  }
};
