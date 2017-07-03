import styles from 'Styleguide/styleguide.css'; // eslint-disable-line

// browser Javascript
import Dom from 'react-dom';
import SgNav from 'SgComponents/SgNav/SgNav';
import SgExample from 'SgComponents/SgExample/SgExample.Container';
import SgStyleguide from 'SgComponents/SgStyleguide/SgStyleguide.Container';


const init = () => {
  const ui = {
    nav: document.querySelector('.SgNav'),
    styleguide: document.querySelector('.SgStyleguide__section--readme'),
    examples: Array.prototype.slice.call(document.querySelectorAll('.SgExample'))
  };

  // Table of contents
  Dom.render(<SgNav />, ui.nav);

  // Readme toggle
  SgStyleguide(ui.styleguide);

  // Example tabsets
  ui.examples.forEach(SgExample);
};


if (document.querySelector('.SgStyleguide')) {
  init();
}
