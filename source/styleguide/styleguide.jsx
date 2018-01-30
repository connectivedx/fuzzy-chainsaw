// import css first
import styles from '@styleguide/styleguide.css'; // eslint-disable-line

// icon set
import '@sg-atoms/SgIcon/SgIconSet';

// component modules
import SgExpander from '@sg-atoms/SgExpander/SgExpander.Container';
import SgNavigation from '@sg-organisms/SgNavigation/SgNavigation.Container';
import SgPageShell from '@sg-molecules/SgPageShell/SgPageShell.Container';
import SgTableOfContents from '@sg-molecules/SgTableOfContents/SgTableOfContents.Container';
import SgExample from '@sg-organisms/SgExample/SgExample.Container';
import SgStyleguide from '@sg-organisms/SgStyleguide/SgStyleguide.Container';

const ui = {
  examples: Array.prototype.slice.call(document.querySelectorAll('.SgExample')),
  root: document.querySelector('.SgStyleguide__root'),
  shell: document.querySelector('.SgPageShell'),
  styleguide: document.querySelector('.SgStyleguide'),
  toggles: Array.prototype.slice.call(document.querySelectorAll('.SgToggleButton')),
  menu: document.querySelector('.SgTableOfContents')
};

const init = () => {
  // styleguide bits
  SgStyleguide(ui.styleguide);

  // Example tabsets
  ui.examples.forEach(SgExample);
};

const shellInit = () => {
  // shell
  SgPageShell(ui.shell);
};

if (ui.menu) {
  SgNavigation(ui.menu);
  SgTableOfContents(ui.menu);
}

if (ui.styleguide) {
  init();
}

if (ui.shell) {
  shellInit();
}

if (ui.root) {
  // SgExpander (needed globally)
  SgExpander(ui.root);
}
