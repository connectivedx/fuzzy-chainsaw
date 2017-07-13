const pick = (dict, keys) =>
  keys.reduce((obj, key) => {
    obj[key] = dict[key];
    return obj;
  }, {});


// dll libraries
module.exports.dlls = {
  // modules required for regular bundle
  vendor: [
    'dom-select'
  ],

  // modules required for styleguide
  styleguide: [
    'react',
    'react-dom/server',
    'prop-types',
    'react-modal',
    'minimatch',
    'pretty',
    'prismjs',
    'react-element-to-jsx-string',
    'slugify'
  ],

  // modules required for tests
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
  bundle: 'bundle.jsx',
  'bundle-generic': 'bundle-generic.css.jsx' // generic theme css file
};

// defines the standard bundle entries
const bundles = ['bundle', 'bundle-generic'];

// export sets of entries for different
module.exports.entries = {
  static: pick(entries, ['static']),
  build: pick(entries, ['styleguide', ...bundles]),
  dev: pick(entries, ['devScript', 'styleguide', ...bundles]),
  production: pick(entries, ['styleguide', ...bundles]),
  ci: pick(entries, [...bundles])
};

// define the output formats for
// different file types
module.exports.outputFormats = {
  dll: '[name]-[hash].js',
  js: '[name]-[hash].js',
  css: '[name]-[hash].css',
  fonts: '[name]-[md5:hash:hex:8].[ext]',
  images: '[name]-[md5:hash:hex:8].[ext]',
  favIconPrefix: 'favicon-[hash:8]-'
};

// This function sorts entry files before
// they are injected into the skeleton
module.exports.outputSort = (a, b) => {
  const A = a.names[0];
  const B = b.names[0];

  if (A === 'devScript') return -1;
  if (A === 'styleguide' && B !== 'bundle') return 1;
  if (A === 'styleguide' && (B.indexOf('bundle-') !== -1)) return -1;
  if (A === 'bundle' && (B.indexOf('bundle-') !== -1)) return -1;
  if (A === 'bundle' && (B.indexOf('bundle-') === -1)) return 1;
  return 0;
};

// define themes and theme metadata
module.exports.themes = [{
  id: 'generic',
  name: 'Generic'
}];

// define additional postcss plugins to
// add to the standard plugins
module.exports.postcssPlugins = {
  build: [],
  production: []
};
