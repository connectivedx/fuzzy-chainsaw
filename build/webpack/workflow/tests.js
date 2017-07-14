/*
  Configures how unit test files are processed by webpack.
*/

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const sharedWorkflow = require('./shared');


module.exports = (
  webpackMerge(
    sharedWorkflow,
    {
      devtool: 'cheap-eval-source-map',
      node: {
        fs: 'empty'
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      module: {
        rules: [
          {
            test: /\.(css|md|json|jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,
            use: 'null-loader'
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('test')
        })
      ],
      stats: {
        hash: false,
        version: false,
        modules: false,
        color: true
      }
    }
  )
);
