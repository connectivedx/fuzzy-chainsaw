// import css first
import styles from '@styleguide/styleguide.css'; // eslint-disable-line

// component modules
import SgExample from '@sg-components/SgExample/SgExample.Container';
import SgStyleguide from '@sg-components/SgStyleguide/SgStyleguide.Container';
import SgToggleButton from '@sg-components/SgToggleButton/SgToggleButton.Container';
import SgPageShell from '@sg-components/SgPageShell/SgPageShell.Container';

const ui = {
  styleguide: document.querySelector('.SgStyleguide'),
  examples: Array.prototype.slice.call(document.querySelectorAll('.SgExample')),
  toggles: Array.prototype.slice.call(document.querySelectorAll('.SgToggleButton')),
  shell: document.querySelector('.SgPageShell')
};

const init = () => {
  // Readme toggle
  SgStyleguide(ui.styleguide);
  SgPageShell(ui.shell);

  // Example tabsets
  ui.examples.forEach(SgExample);

  // Toggle buttons
  ui.toggles.forEach((el) => {
    SgToggleButton(el);
  });
};

if (ui.styleguide) {
  init();
}
