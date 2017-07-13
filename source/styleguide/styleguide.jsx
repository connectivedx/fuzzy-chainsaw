import styles from '@styleguide/styleguide.css'; // eslint-disable-line

// browser Javascript
import Dom from 'react-dom';
import SgNav from '@sg-components/SgNav/SgNav';
import SgExample from '@sg-components/SgExample/SgExample.Container';
import SgStyleguide from '@sg-components/SgStyleguide/SgStyleguide.Container';


const ui = {
  nav: document.querySelector('.SgNav'),
  styleguide: document.querySelector('.SgStyleguide'),
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


if (ui.styleguide) {
  init();
}
