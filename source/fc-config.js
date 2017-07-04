const pick = (dict, keys) =>
  keys.reduce((obj, key) => {
    obj[key] = dict[key];
    return obj;
  }, {});

// dll libraries
module.exports.dlls = {
  // client libs
  vendor: [
    'react'
  ],
  styleguide: [
    'react-dom/server',
    'prop-types',
    'react-modal',
    'minimatch',
    'pretty',
    'prismjs',
    'react-element-to-jsx-string',
    'slugify'
  ],
  tests: [
    'tape',
    'enzyme'
  ]
};

// define entry points
const entries = {
  static: 'static.jsx',
  devScript: 'dev.jsx',
  styleguide: 'styleguide/styleguide.jsx',
  bundle: 'bundle.jsx'
};

const bundles = ['bundle'];

module.exports.entries = {
  static: pick(entries, ['static']),
  build: pick(entries, ['styleguide', ...bundles]),
  dev: pick(entries, ['devScript', 'styleguide', ...bundles]),
  production: pick(entries, ['styleguide', ...bundles]),
  ci: pick(entries, [...bundles])
};

module.exports.outputFormats = {
  dll: '[name]-[hash].js',
  js: '[name]-[hash].js',
  css: '[name]-[hash].css',
  fonts: '[name]-[md5:hash:hex:8].[ext]',
  images: '[name]-[md5:hash:hex:8].[ext]',
  favIconPrefix: 'favicon-[hash:8]-'
};

module.exports.outputSort = (a, b) => {
  const aName = a.names[0];
  const bName = b.names[0];

  if (aName === 'devScript') return -1;
  if (aName === 'styleguide' && bName !== 'bundle') return 1;
  if (aName === 'bundle' && (bName.indexOf('bundle.*') !== -1)) return 0;
  if (aName === 'bundle' && (bName.indexOf('bundle.*') !== -1)) return 1;
  return 0;
};


module.exports.themes = [{
  id: 'generic',
  name: 'Generic'
}];
