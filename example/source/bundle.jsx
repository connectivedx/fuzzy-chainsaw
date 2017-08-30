// import css before other
// files to preserve ordering
import '@source/bundle.css';

// import FC helpers
import 'fuzzy-chainsaw-bundle/helpers/theme-handler';
import 'fuzzy-chainsaw-bundle/helpers/offline-runtime';

// Ajax IconSet svg
import '@tags/Icon/IconSet';

// import npm modules
import select from 'dom-select';


// program
const rootEl = select('.root'); // eslint-disable-line

// remove no-js class
rootEl.classList.remove('no-js');
