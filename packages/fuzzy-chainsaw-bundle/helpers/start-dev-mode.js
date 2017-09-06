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
      renderComponentDev = _framework$render.renderComponentDev,
      NotFoundComponent = _framework$render.NotFoundComponent;
  var _framework$utils = framework.utils,
      isFileRenderable = _framework$utils.isFileRenderable,
      getOutputName = _framework$utils.getOutputName;


  var modules = selectListing(archive.pages, { isFileRenderable: isFileRenderable, getOutputName: getOutputName });

  var render = function render(locationPath) {
    var modulePath = normalizePath(locationPath);
    var module = modules[modulePath];

    if (!module) {
      // 404, no module found
      module = NotFoundComponent;
    }

    document.title = module.pageTitle;
    renderComponentDev(appRoot, module, { modulePath: modulePath });

    // get module theme property or first theme in fc config
    if (themes && themes.length > 0) {
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

  // mock a server render
  render(location.pathname);

  if (!history.state) {
    history.replaceState({ href: location.pathname }, null, location.pathname);
  }

  // take over links to other pages
  document.addEventListener('click', function (ev) {
    if (ev.target.tagName.toUpperCase() === 'A') {
      var href = ev.target.getAttribute('href');

      if (href && href.indexOf('styleguide.html') !== 0) {
        ev.preventDefault();

        render(href);
        history.pushState({ href: href }, null, href);
      }
    }
  });

  window.addEventListener('popstate', function (ev) {
    render(history.state.href);
  });
};