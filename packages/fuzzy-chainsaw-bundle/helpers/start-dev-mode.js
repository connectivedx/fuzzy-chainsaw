import assign from 'object.assign';
import { selectListing } from 'fuzzy-chainsaw-render/lib/render-helpers';

// shim object.assign for ie11
assign.shim();

export default ({ appRoot, framework, archive, themes }) => {
  const { isFileRenderable, getOutputName, renderComponent: render } = framework.render;

  const modules = selectListing(archive.pages, { isFileRenderable, getOutputName });
  const module = modules[`${location.pathname.replace(/\.html/, '').substr(1)}.html`];

  // mock a server render
  document.querySelector(appRoot).innerHTML = render(module);
  document.title = module.pageTitle;

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
