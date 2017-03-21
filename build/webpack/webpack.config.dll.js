const webpack = require('webpack');

const path = require('path');
const pkgpath = require('packpath');

const { directories: dirs } = require(path.resolve(pkgpath.self(), 'package.json'));

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    vendor: [
      'js-beautify',
      'pretty-data',
      'react',
      'react-dom',
      'react-element-to-jsx-string',
      'react-syntax-highlighter',
      'slugify'
    ]
  },
  output: {
    path: path.join(pkgpath.self(), dirs.dlls),
    filename: '[name].dll.js',
    library: '[name]_lib'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(pkgpath.self(), dirs.dlls, '[name]-manifest.json'),
      name: '[name]_lib'
    })
  ]
};
