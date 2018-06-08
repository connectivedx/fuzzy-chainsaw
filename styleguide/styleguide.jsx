// import css first
import styles from '@styleguide/styleguide.css'; // eslint-disable-line

// icon set
import '@sg-atoms/SgIcon/SgIconSet';

// component modules
import SgExpander from '@sg-atoms/SgExpander/SgExpander.Container';
import SgNavigation from '@sg-organisms/SgNavigation/SgNavigation.Container';
import SgTableOfContents from '@sg-molecules/SgTableOfContents/SgTableOfContents.Container';
import SgIconSearch from '@sg-molecules/SgIconSwatch/SgIconSwatch.Container';
import { SgColorInit } from '@sg-molecules/SgColorSwatch/SgColorSwatch.Container';
import SgExample from '@sg-organisms/SgExample/SgExample.Container';
import SgStyleguide from '@sg-organisms/SgStyleguide/SgStyleguide.Container';

const ui = {
  examples: Array.prototype.slice.call(document.querySelectorAll('.SgExample')),
  root: document.querySelector('.SgStyleguide__root'),
  shell: document.querySelector('.SgPageShell'),
  styleguide: document.querySelector('.SgStyleguide'),
  toggles: Array.prototype.slice.call(document.querySelectorAll('.SgToggleButton')),
  menu: document.querySelector('.SgTableOfContents'),
  iconSearch: document.querySelector('.SgIconSwatch__search'),
  colorSearch: document.querySelector('.SgColorSwatch__search')
};

const init = () => {
  // styleguide bits
  SgStyleguide(ui.styleguide);

  // Example tabsets
  ui.examples.forEach(SgExample);
};

if (ui.menu) {
  SgNavigation(ui.menu);
  SgTableOfContents(ui.menu);
}

if (ui.styleguide) {
  init();
}

if (ui.iconSearch) {
  SgIconSearch(ui.iconSearch);
}

if (ui.colorSearch) {
  SgColorInit(ui.shell);
}

if (ui.root) {
  // SgExpander (needed globally)
  SgExpander(ui.root);
}
