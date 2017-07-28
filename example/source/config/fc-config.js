const pick = (dict, ...keys) =>
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

  // modules required for tests
  tests: [
    'tape',
    'enzyme'
  ]
};

// define entry points relative to source
const entries = {
  pages: 'pages.jsx',
  elements: 'elements.jsx',
  dev: 'dev.jsx',
  bundle: 'bundle.jsx',
  'bundle-generic': 'bundle-generic.jsx' // generic theme bundle
};

// defines the standard bundle entries
const bundles = ['bundle', 'bundle-generic'];

// export sets of entries for different proccesses
module.exports.entries = {
  pages: pick(entries, 'pages'),
  elements: pick(entries, 'elements'),
  build: pick(entries, 'pages', 'elements', ...bundles),
  dev: pick(entries, 'dev', ...bundles),
  ci: pick(entries, ...bundles)
};

// defined the output directories
// for different file types
module.exports.outputDirectories = {
  assets: 'assets',
  css: 'assets',
  js: 'assets',
  dll: 'assets/dlls',
  images: 'assets/images',
  favIcons: 'assets/favicons',
  fonts: 'assets/fonts',
  svgs: 'assets/svgs',
  static: 'assets/static'
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

  if (A === 'dev') return -1;
  if (A === 'bundle' && (B.indexOf('bundle-') !== -1)) return -1;
  if (A === 'bundle' && (B.indexOf('bundle-') === -1)) return 1;
  return 0;
};

// define themes and theme metadata
module.exports.themes = [{
  id: 'generic',
  name: 'Generic'
}];
