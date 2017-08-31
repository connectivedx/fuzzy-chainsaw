/* eslint-disable */

require('fuzzy-chainsaw-bundle/helpers/shim');

var _require = require('fuzzy-chainsaw-render/lib/render-helpers'),
    selectListing = _require.selectListing;

module.exports = function (_ref) {
  var appRoot = _ref.appRoot,
      framework = _ref.framework,
      archive = _ref.archive,
      themes = _ref.themes;
  var _framework$render = framework.render,
      isFileRenderable = _framework$render.isFileRenderable,
      getOutputName = _framework$render.getOutputName,
      render = _framework$render.renderComponent;


  var modules = selectListing(archive.pages, { isFileRenderable: isFileRenderable, getOutputName: getOutputName });
  var module = modules[location.pathname.replace(/\.html/, '').substr(1) + '.html'];

  // mock a server render
  document.querySelector(appRoot).innerHTML = render(module);
  document.title = module.pageTitle;

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