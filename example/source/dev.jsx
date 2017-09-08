import startDevMode from 'fuzzy-chainsaw-bundle/helpers/start-dev-mode';
import framework from 'fuzzy-chainsaw-framework-react';


document.addEventListener('DOMContentLoaded', () => {
  startDevMode({
    appRoot: document.querySelector('.root'),
    framework,
    archive: global.archive
  });
});
