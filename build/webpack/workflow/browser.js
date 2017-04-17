/*
  Configures how assets served by the browser (e.g. CSS, JS, images) are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
  Note that this configuration is used by all asset generation (both for dist and styleguide), so changes apply in both places.

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/

const webpackMerge = require('webpack-merge');
const SvgStorePlugin = require('webpack-svgstore-plugin');
const OfflinePlugin = require('offline-plugin');

const sharedWorkflow = require('./shared');

module.exports = (
  webpackMerge(
    sharedWorkflow,
    {
      module: {
        rules: [
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            loader: 'file-loader',
            options: {
              context: './source/',
              name: 'assets/fonts/[name]-[md5:hash:hex:8].[ext]'
            }
          },
          {
            test: /\.json$/,
            use: 'json-loader'
          },
          {
            test: /\.md$/,
            use: 'null-loader'
          },
          {
            test: /\.(gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  context: './source/',
                  name: 'assets/images/css/[name]-[md5:hash:hex:8].[ext]'
                }
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true,
                  optimizationLevel: 7,
                  interlaced: false
                }
              }
            ]
          },
          {
            test: /\.(jpe?g|png)$/i,
            loader: 'advanced-image-loader',
            options: {
              name: 'assets/images/css/[name]-[width]-[md5:hash:hex:8]',
              srcset: [480, 720, 1280, 1920],
              quality: 90
            }
          }
        ]
      },
      plugins: [
        new OfflinePlugin(),
        new SvgStorePlugin()
      ]
    }
  )
);
