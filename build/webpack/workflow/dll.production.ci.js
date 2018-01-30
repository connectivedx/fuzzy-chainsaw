/*
  Webpack configuration to precompile
  vendor modules before main bundle
  in production mode
*/

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const ciConfig = require('./dll.ci');


module.exports = webpackMerge(
  ciConfig,
  {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        output: {
          comments: false
        }
      })
    ]
  }
);
