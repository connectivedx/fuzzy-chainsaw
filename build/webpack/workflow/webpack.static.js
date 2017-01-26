/*
  Configures how static site elements (e.g. JSX -> HTML templates) are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note that the styleguide (webpack.styleguide.js) shares this base configuration, so keep in mind alterations here also apply there.

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/
const path = require('path');
const glob = require('glob');

const webpack = require('webpack');
const StaticGeneratorPlugin = require('static-generator-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackMerge = require('webpack-merge');
const SharedConfig = require('./webpack.shared')

module.exports = ({
  entry = {},
  locals = {},
  outputPath ='dist',
  publicPath = './dist/',
  outputScript = '/tmp/bundle.js',
}) => {
  return webpackMerge(
    SharedConfig({
      entry,
      outputPath,
      publicPath,
      outputScript
    }),
    {
      workflow: 'static',
      output: {
        libraryTarget: 'umd'
      },
      module: {
        loaders: [
          {
            test: /\.(gif|svg)$/i,
            loaders: [
              'file?context=./source/&name=/assets/images/content/[name]-[md5:hash:hex:8].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
          },
          { test: /\.(jpe?g|png)$/i,
            loaders: [
              'responsive?name=/assets/images/content/[name]-[md5:hash:hex:8].',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
          },
          {
            test: /\.md$/,
            loader: 'html!markdown-loader'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.(css|woff|woff2|eot|ttf|cs|cshtml)$/,
            loader: 'null-loader'
          }
        ]
      },
      plugins: Object.keys(entry).map(key => (
        new StaticGeneratorPlugin(key, locals)
      )).concat([
        new CopyWebpackPlugin([
          { from: 'source/vendor', to: 'assets/vendor' }
        ])
      ])
    }
  );
}
