const webpackMerge = require('webpack-merge');

const dllWorkflow = require('./workflow/dll');

module.exports = webpackMerge(dllWorkflow, {
  entry: {
    vendor: [
      'fuzzy-rucksack',
      'react',
      'react-dom',
      'prop-types'
    ],
    styleguide: [
      'react-dom/server',
      'react-modal',
      'pretty',
      'prismjs',
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
