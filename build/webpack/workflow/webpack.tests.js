/*
  Configures how unit test files are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note: Tests are compiled with babel and written to a temporary folder, executed, and then deleted after the build (by post-clean)

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/

const webpackMerge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const SharedConfig = require('./webpack.shared');

module.exports = ({
  entry,
  outputPath = 'dist',
  publicPath = './dist/',
  outputScript = '/tmp/bundle.js'
}) => (
  webpackMerge(
    SharedConfig({
      entry,
      outputPath,
      publicPath,
      outputScript
    }),
    {
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
      }
    }
  )
);
