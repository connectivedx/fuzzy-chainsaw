const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const dllConfig = require('./webpack.config.dll.js');

module.exports = webpackMerge(
  dllConfig,
  {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      })
    ]
  }
);
