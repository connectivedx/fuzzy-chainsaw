/* eslint-disable */

require('fuzzy-chainsaw-bundle/helpers/shim')
const { selectListing } = require('fuzzy-chainsaw-render/lib/render-helpers');


const normalizePath = (path) => {
  const isFile = path.indexOf('.html') !== -1;
  const isFolder = path.substr(-1) === '/';
  let assetPath;

  if (isFile) {
    assetPath = path;
  } else if (isFolder) {
    assetPath = `${path}index.html`;
  } else {
    assetPath = `${path}.html`;
  }

  return assetPath.substr(1);
};


module.exports = ({ appRoot, framework, archive, themes }) => {
  const { isFileRenderable, getOutputName, renderComponent: render } = framework.render;

  const modulePath = normalizePath(location.pathname);
  const modules = selectListing(archive.pages, { isFileRenderable, getOutputName });
  const module = modules[modulePath];


  // mock a server render
  if (module) {
    document.querySelector(appRoot).innerHTML = render(module);
    document.title = module.pageTitle;
  } else {
    // 404, no module found
    document.querySelector(appRoot).innerHTML = `<h1>Not Found</h1><code>${modulePath}</code>`;
    document.title = '404';
  }


  // get module theme property or first theme in fc config
  if (themes.length > 0) {
    const themeId = module.theme || themes[0].id;
    document.querySelector('html').classList.add(`Theme--${themeId}`);
  }

  if (module.htmlClass) {
    document.querySelector('html').classList.add(module.htmlClass);
  }

  if (module.bodyClass) {
    document.querySelector('body').classList.add(module.bodyClass);
  }
};
