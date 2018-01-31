// import css first
import styles from '@styleguide/styleguide.css'; // eslint-disable-line

// npm modules
import Dom from 'react-dom';

// component modules
import SgNav from '@sg-molecules/SgNav/SgNav';
import SgExample from '@sg-molecules/SgExample/SgExample.Container';
import SgStyleguide from '@sg-molecules/SgStyleguide/SgStyleguide.Container';
import SgTableOfContents from '@sg-atoms/SgTableOfContents/SgTableOfContents.Container';

const ui = {
  nav: document.querySelector('.SgNav'),
  styleguide: document.querySelector('.SgStyleguide'),
  catalog: document.querySelector('[data-is-catalog="true"]'),
  examples: Array.prototype.slice.call(document.querySelectorAll('.SgExample'))
};


const init = () => {
  // Table of contents
  Dom.render(<SgNav />, ui.nav);

  // Readme toggle
  SgStyleguide(ui.styleguide);

  // Example tabsets
  ui.examples.forEach(SgExample);
};

if (ui.catalog) {
  SgTableOfContents(document.body);
}

if (ui.styleguide) {
  init();
}
