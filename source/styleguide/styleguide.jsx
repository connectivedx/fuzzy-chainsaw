// import css first
import styles from '@styleguide/styleguide.css'; // eslint-disable-line

// component modules
import SgExample from '@sg-components/SgExample/SgExample.Container';
import SgStyleguide from '@sg-components/SgStyleguide/SgStyleguide.Container';


const ui = {
  styleguide: document.querySelector('.SgStyleguide'),
  examples: Array.prototype.slice.call(document.querySelectorAll('.SgExample'))
};


const init = () => {
  // Readme toggle
  SgStyleguide(ui.styleguide);

  // Example tabsets
  ui.examples.forEach(SgExample);
};


if (ui.styleguide) {
  init();
}
