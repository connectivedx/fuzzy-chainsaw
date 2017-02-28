/*
  Configures how assets served by the browser (e.g. CSS, JS, images) are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note that this configuration is used by all asset generation (both for dist and styleguide), so changes apply in both places.

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/
const path = require('path');

const webpackMerge = require('webpack-merge');
const BrowserConfig = require('./webpack.browser');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({
  entry,
  outputPath = 'dist',
  publicPath = './dist/',
  outputScript = '/tmp/bundle.js',
  outputStyle = '/tmp/bundle.css'
}) => (
  webpackMerge(
    BrowserConfig({
      entry,
      outputPath,
      publicPath,
      outputScript,
      outputStyle
    }),
    {
      workflow: 'dev',
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve(__dirname, '../templates/dev.html'),
          inject: false
        })
      ]
    }
  )
);

