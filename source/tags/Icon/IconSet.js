const getAssetPath = () => {
  // get an element that references assets
  const el = document.querySelector('[src*="assets/"]')

  // get the prefix of the asset path
  if (el) {
    const src = el.getAttribute('src')
    const prefix = src.substr(0, src.indexOf('assets/'))
    return prefix;
  }

  return undefined;
}

// store orginal baseUrl
const originalBaseUrl = global.baseUrl;

// set the baseUrl for svgstore
global.baseUrl = getAssetPath();

// require icons
const __svg__ = { path: './assets/**/*.svg', name: '/assets/svgs/iconset.svg' };
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

// restore the original baseUrl
if (originalBaseUrl) {
  window.baseUrl = originalBaseUrl;
}
