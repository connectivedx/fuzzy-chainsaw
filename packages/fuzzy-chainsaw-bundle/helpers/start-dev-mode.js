/* eslint-disable */

require('fuzzy-chainsaw-bundle/helpers/shim');

var _require = require('fuzzy-chainsaw-render/lib/render-helpers'),
    selectListing = _require.selectListing;

var normalizePath = function normalizePath(path) {
  var isFile = path.indexOf('.html') !== -1;
  var isFolder = path.substr(-1) === '/';
  var assetPath = void 0;

  if (isFile) {
    assetPath = path;
  } else if (isFolder) {
    assetPath = path + 'index.html';
  } else {
    assetPath = path + '.html';
  }

  return assetPath.substr(1);
};

module.exports = function (_ref) {
  var appRoot = _ref.appRoot,
      framework = _ref.framework,
      archive = _ref.archive,
      themes = _ref.themes;
  var _framework$render = framework.render,
      isFileRenderable = _framework$render.isFileRenderable,
      getOutputName = _framework$render.getOutputName,
      render = _framework$render.renderComponent;


  var modulePath = normalizePath(location.pathname);
  var modules = selectListing(archive.pages, { isFileRenderable: isFileRenderable, getOutputName: getOutputName });
  var module = modules[modulePath];

  // mock a server render
  if (module) {
    document.querySelector(appRoot).innerHTML = render(module);
    document.title = module.pageTitle;
  } else {
    // 404, no module found
    document.querySelector(appRoot).innerHTML = '<h1>Not Found</h1><code>' + modulePath + '</code>';
    document.title = '404';
  }

  // get module theme property or first theme in fc config
  if (themes.length > 0) {
    var themeId = module.theme || themes[0].id;
    document.querySelector('html').classList.add('Theme--' + themeId);
  }

  if (module.htmlClass) {
    document.querySelector('html').classList.add(module.htmlClass);
  }

  if (module.bodyClass) {
    document.querySelector('body').classList.add(module.bodyClass);
  }
};