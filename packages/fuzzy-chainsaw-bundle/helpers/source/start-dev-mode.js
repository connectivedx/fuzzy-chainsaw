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
  const { isFileRenderable, getOutputName, renderComponentDev, NotFoundComponent } = framework.render;

  const modules = selectListing(archive.pages, { isFileRenderable, getOutputName });

  const render = (locationPath) => {
    const modulePath = normalizePath(locationPath);
    let module = modules[modulePath];

    console.log(modulePath);

    if (!module) {
      // 404, no module found
      module = NotFoundComponent;
    }

    document.title = module.pageTitle;
    renderComponentDev(appRoot, module, { modulePath })

    // get module theme property or first theme in fc config
    if (themes && themes.length > 0) {
      const themeId = module.theme || themes[0].id;
      document.querySelector('html').classList.add(`Theme--${themeId}`);
    }

    if (module.htmlClass) {
      document.querySelector('html').classList.add(module.htmlClass);
    }

    if (module.bodyClass) {
      document.querySelector('body').classList.add(module.bodyClass);
    }
  }

  // mock a server render
  render(location.pathname);

  if (!history.state) {
    history.replaceState({ href: location.pathname }, null, location.pathname);
  }

  // take over links to other pages
  document.addEventListener('click', (ev) => {
    if (ev.target.tagName.toUpperCase() === 'A') {
      const href = ev.target.getAttribute('href');

      if (href && href.indexOf('/styleguide') !== 0) {
        ev.preventDefault();

        render(href);
        history.pushState({ href }, null, href);
      }
    }
  });

  window.addEventListener('popstate', (ev) => {
    render(history.state.href);
  });
};
