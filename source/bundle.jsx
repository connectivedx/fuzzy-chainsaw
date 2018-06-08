// import css before other
// files to preserve ordering
import '@source/bundle.css';

// import FC deps
import '@atoms/Icon/IconSet';
import '@lib/theme-handler';
import '@lib/offline-runtime';
import Tracking from '@lib/analytics-tracking';

// import npm modules
import select from 'dom-select';

// program
const html = select('html');

// remove no-js class
html.classList.remove('no-js');

// setup tracking
global.Tracker = new Tracking({
  vendors: [
    {
      type: 'GoogleTagManager',
      id: 'GTM-PWT8RKN'
    },
    {
      type: 'AdobeAnalytics',
      username: '',
      sharedSecret: '',
      environment: ''
    }
  ]
});
