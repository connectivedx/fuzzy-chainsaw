/*
  Configures how assets served by the browser (e.g. CSS, JS, images) are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note that this configuration is used by all asset generation (both for dist and styleguide), so changes apply in both places.

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/
const path = require('path');
const pkgpath = require('packpath');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserConfig = require('./webpack.browser');

const { directories: dirs } = require(path.resolve(pkgpath.self(), 'package.json'));
const { dev: devPipeline } = require('./postcss-plugins.js');

const stats = {
  chunks: false,
  children: false,
  colors: true,
  reasons: true
};

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
      resolveLoader: {
        alias: {
          'remove-tilde-loader': path.resolve(__dirname, '../lib/remove-tilde-loader'),
          'prefix-variables-loader': path.resolve(__dirname, '../lib/prefix-variables-loader')
        }
      },
      module: {
        loaders: [
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
          },
          {
            test: /\.css$/,
            loader: 'prefix-variables-loader',
            exclude: /variables/
          },
          {
            test: /\.css$/,
            loader: 'remove-tilde-loader'
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve(__dirname, '../../templates/dev.html'),
          inject: false
        }),
        new webpack.DllReferencePlugin({
          context: path.resolve(pkgpath.self()),
          manifest: require(path.resolve(pkgpath.self(), dirs.dest, 'assets/dlls/vendor-manifest.json'))
        })
      ],
      stats,
      devServer: {
        historyApiFallback: {
          rewrites: [{ from: /.*\.html/, to: '/index.html' }]
        },
        publicPath: '/',
        contentBase: dirs.dest,
        stats
      },
      postcss: devPipeline
    }
  )
);
