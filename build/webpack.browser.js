/*
  Configures how assets served by the browser (e.g. CSS, JS, images) are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note that this configuration is used by all asset generation (both for dist and styleguide), so changes apply in both places.

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/
const path = require('path');
const glob = require('glob');
const match = require('minimatch');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PostPostCSS = require('./webpack-post-postcss-plugin');

module.exports = ({
  devtool = 'cheap-module-eval-source-map',
  entry = '.js',
  outputPath = path.resolve(__dirname, 'dist'),
  publicPath = './dist/',
  outputScript = '/tmp/bundle.js',
  outputStyle = '/tmp/bundle.css',
}) => ({
  devtool: devtool,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: entry,
  output: {
    path: outputPath,
    filename: outputScript
  },
  publicPath: publicPath,
  module: {
    loaders: [
      {
        test: /\.jsx|js?$/,
        loader: 'babel?cacheDirectory=true',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?context=./source/&name=/assets/images/css/[name]-[md5:hash:hex:8].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        loader: 'file?context=./source/&name=/assets/fonts/[name]-[md5:hash:hex:8].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.md$/,
        loader: 'null'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(outputStyle),
    new PostPostCSS(require('./postcss-plugins.js'))
  ]
});
