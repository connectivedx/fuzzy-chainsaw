// import css before other
// files to preserve ordering
import '@source/bundle.css';

// import FC deps
import '@tags/Icon/IconSet';
import '@lib/theme-handler';
import '@lib/offline-runtime';

// import npm modules
import select from 'dom-select';

// program
const rootEl = select('.root'); // eslint-disable-line

// remove no-js class
rootEl.classList.remove('no-js');
