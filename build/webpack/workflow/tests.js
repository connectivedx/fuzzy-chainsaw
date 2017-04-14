/*
  Configures how unit test files are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note: Tests are compiled with babel and written to a temporary folder, executed, and then deleted after the build (by post-clean)

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
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
      ]
    }
  )
);
