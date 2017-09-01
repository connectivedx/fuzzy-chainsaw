import startDevMode from 'fuzzy-chainsaw-bundle/helpers/start-dev-mode';
import framework from 'fuzzy-chainsaw-framework-react';

import * as archive from './archive';
import { themes } from '../build/project-config';

startDevMode({
  appRoot: document.querySelector('.root'),
  framework,
  archive,
  themes
});
