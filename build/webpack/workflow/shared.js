/*
  Defines the shared webpack config used by all workflows.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
*/
const path = require('path');
const pkgpath = require('packpath');
const webpack = require('webpack');
const SvgStorePlugin = require('webpack-svgstore-plugin');

const { directories } = require(path.resolve(pkgpath.self(), 'package.json')); // eslint-disable-line
const { source, dest, baseUrl } = require('../../lib/path-helpers');

let vendorManifest;
let styleguideManifest;

try {
  vendorManifest = require(dest('assets/dlls/vendor-manifest.json')); // eslint-disable-line
  styleguideManifest = require(dest('assets/dlls/styleguide-manifest.json')); // eslint-disable-line
} catch (e) {
  // let failures happen
}

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Source: source(),
      Vendor: source('vendor'),
      Vars: source('variables'),
      Tags: source('tags'),
      Components: source('components'),
      Pages: source('pages'),
      Styleguide: source('styleguide'),
      SgVars: source('styleguide/variables'),
      SgTags: source('styleguide/tags'),
      SgComponents: source('styleguide/components')
    }
  },
  output: {
    path: dest(),
    publicPath: baseUrl,
    filename: 'assets/[name]-[hash].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.resolve(pkgpath.self()),
      manifest: vendorManifest
    }),
    // sometime styleguide won't be required
    styleguideManifest ? new webpack.DllReferencePlugin({
      context: path.resolve(pkgpath.self()),
      manifest: styleguideManifest
    }) : undefined,
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(baseUrl)
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      Rucksack: 'fuzzy-rucksack'
    }),
    new SvgStorePlugin()
  ].filter((a) => a)
};
