const webpackMerge = require('webpack-merge');

const dllWorkflow = require('./workflow/dll');

module.exports = webpackMerge(dllWorkflow, {
  entry: {
    vendor: [
      'react'
    ],
    styleguide: [
      'react-dom/server',
      'react-modal',
      'pretty',
      'prismjs',
      'react-dom',
      'prop-types',
      'react-element-to-jsx-string',
      'slugify',
      'lodash.startcase'
    ],
    tests: [
      'tape',
      'enzyme'
    ]
  }
});
