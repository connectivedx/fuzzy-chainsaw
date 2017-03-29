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

const sharedConfig = require('./webpack.shared');
const { dest } = require('../../lib/path-helpers');

module.exports = (
  webpackMerge(
    sharedConfig,
    {
      module: {
        loaders: [
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            loader: 'file?context=./source/&name=/assets/fonts/[name]-[md5:hash:hex:8].[ext]'
          },
          {
            test: /\.json$/,
            loader: 'json'
          },
          {
            test: /\.md$/,
            loader: 'null'
          },
          {
            test: /\.(gif|svg)$/i,
            loaders: [
              'file?context=./source/&name=/assets/images/css/[name]-[md5:hash:hex:8].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
          },
          {
            test: /\.(jpe?g|png)$/i,
            loaders: [
              'file?name=/assets/images/css/[name]-[md5:hash:hex:8].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
          }
        ]
      },
      plugins: [
        new webpack.DllReferencePlugin({
          context: path.resolve(pkgpath.self()),
          manifest: require(dest('assets/dlls/vendor-manifest.json'))
        }),
        new webpack.DllReferencePlugin({
          context: path.resolve(pkgpath.self()),
          manifest: require(dest('assets/dlls/styleguide-manifest.json'))
        })
      ]
    }
  )
);
