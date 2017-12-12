// import css first
import styles from '@styleguide/styleguide.css'; // eslint-disable-line

// component modules
import SgExample from '@sg-components/SgExample/SgExample.Container';
import SgHeader from '@sg-components/SgHeader/SgHeader.Container';
import SgNav from '@sg-tags/SgNav/SgNav.Container';
import SgStyleguide from '@sg-components/SgStyleguide/SgStyleguide.Container';


const ui = {
  styleguide: document.querySelector('.SgStyleguide'),
  examples: Array.prototype.slice.call(document.querySelectorAll('.SgExample')),
  nav: document.querySelector('.SgNav'),
  header: document.querySelector('.SgHeader')
};


const init = () => {
  // Readme toggle
  SgStyleguide(ui.styleguide);

  // Nav sticking
  SgNav(ui.nav);

  // Nav opening
  SgHeader(ui.header);

  // Example tabsets
  ui.examples.forEach(SgExample);
};


if (ui.styleguide) {
  init();
}
