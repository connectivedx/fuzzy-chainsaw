/*
  Configures how unit test files are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note: Tests are compiled with babel and written to a temporary folder, executed, and then deleted after the build (by post-clean)

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/
const path = require('path');
const pkgpath = require('packpath');
const webpackMerge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const TapWebpackPlugin = require('tap-webpack-plugin');

const sharedConfig = require('./webpack.shared');

module.exports = (
  webpackMerge(
    sharedConfig,
    {
      output: {
        filename: '/tmp/tests.js'
      },
      target: 'node',
      node: {
        fs: 'empty'
      },
      externals: [
        nodeExternals({
          whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i]
        })
      ],
      module: {
        loaders: [
          {
            test: /\.(css|md|json|jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,
            loader: 'null-loader'
          }
        ]
      },
      plugins: [
        new TapWebpackPlugin({
          resolver: path.resolve(pkgpath.self(), 'node_modules/.bin/tap-min')
        })
      ]
    }
  )
);
