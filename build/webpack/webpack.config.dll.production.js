const webpackMerge = require('webpack-merge');

const dllProductionWorkflow = require('./workflow/dll.production');

module.exports = webpackMerge(dllProductionWorkflow, {
  entry: {
    vendor: [
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
