const webpack = require('webpack');
const { dest } = require('../libs/path-helpers');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    vendor: [
      'pretty-data',
      'react',
      'react-dom',
      'react-element-to-jsx-string',
      'react-syntax-highlighter',
      'slugify'
    ]
  },
  output: {
    path: dest('assets/dlls'),
    filename: '[name].dll.js',
    library: '[name]_dll',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DllPlugin({
      path: dest('assets/dlls/[name]-manifest.json'),
      name: '[name]_dll'
    })
  ]
};
