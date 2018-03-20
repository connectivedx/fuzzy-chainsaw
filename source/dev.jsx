import Dom from 'react-dom';
import assign from 'object.assign';

import { getModule } from './static';
import { themes } from './fc-config';


// shim object.assign for ie11
assign.shim();

const docRoot = document.querySelector('html');

const {
  pageTitle,
  theme,
  htmlClass,
  bodyClass,
  Component
} = getModule(window.location.pathname.replace(/\.html/, ''));

// mock a server render
Dom.render(Component, document.querySelector('.root'));
document.title = pageTitle;

// get module theme property or first theme in fc config
if (themes.length > 0) {
  const themeId = theme || themes[0].id;
  docRoot.classList.add(`Theme--${themeId}`);
}

if (htmlClass) {
  docRoot.classList.add(htmlClass);
}

if (bodyClass) {
  document.querySelector('body').classList.add(bodyClass);
}
