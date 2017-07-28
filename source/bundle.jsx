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
const html = select('html');

// remove no-js class
html.classList.remove('no-js');
