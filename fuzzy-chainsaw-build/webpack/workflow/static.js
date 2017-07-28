/*
  Configures webpack to create a bundle
  that will be used to render static html
*/

const webpackMerge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const browserWorkflow = require('./browser');


module.exports = (
  webpackMerge(
    browserWorkflow,
    {
      output: {
        filename: 'tmp/[name].js'
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: 'null-loader'
          }
        ]
      },
      externals: [
        nodeExternals({
          whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i]
        })
      ]
    }
  )
);
