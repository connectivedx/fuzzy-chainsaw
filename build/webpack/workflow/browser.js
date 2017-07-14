/*
  Configures how assets served by the browser (e.g. CSS, JS, images) are processed by webpack.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this config.

  Paths and such are passed down from the webpack.config.js, this only configures the actions webpack will perform.
*/

const webpackMerge = require('webpack-merge');
const SvgStorePlugin = require('webpack-svgstore-plugin');

const sharedWorkflow = require('./shared');
const { source } = require('../../lib/path-helpers');

const { outputFormats } = require(source('fc-config')); // eslint-disable-line


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
              name: `assets/fonts/${outputFormats.fonts}`
            }
          },
          {
            test: /\.json$/,
            use: 'json-loader'
          },
          {
            test: /\.md$/,
            use: [
              'html-loader',
              'markdown-loader'
            ]
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  context: './source/',
                  name: `assets/images/${outputFormats.images}`
                }
              },
              {
                loader: 'image-webpack-loader',
                query: {
                  bypassOnDebug: true,
                  gifsicle: {
                    interlaced: false
                  },
                  optipng: {
                    optimizationLevel: 7
                  },
                  svgo: {
                    plugins: [
                      { cleanupAttrs: true },
                      { cleanupEnableBackground: true },
                      { cleanupIDs: true },
                      { cleanupListOfValues: true },
                      { collapseGroups: true },
                      { convertTransform: true },
                      { minifyStyles: true },
                      { removeAttrs: true },
                      { removeComments: true },
                      { removeDesc: true },
                      { removeDimensions: true },
                      { removeDoctype: true },
                      { removeEditorNSData: true },
                      { removeEmptyAttrs: true },
                      { removeEmptyContainers: true },
                      { removeEmptyText: true },
                      { removeHiddenElems: true },
                      { removeMetadata: true },
                      { removeNonInheritableGroupAttrs: true },
                      { removeRasterImages: true },
                      { removeUnknownsAndDefaults: true },
                      { removeUnusedNS: true },
                      { removeUselessDefs: true },
                      { removeUselessStrokeAndFill: true },
                      { removeXMLNS: true },
                      { removeXMLProcInst: true },
                      { sortAttrs: true },
                      { removeViewBox: false }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new SvgStorePlugin()
      ]
    }
  )
);
