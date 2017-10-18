import Dom from 'react-dom';
import assign from 'object.assign';

import { getModule } from './static';
import { themes } from './fc-config';


// shim object.assign for ie11
assign.shim();

const {
  pageTitle,
  theme,
  htmlClass,
  bodyClass,
  Component
} = getModule(location.pathname.replace(/\.html/, ''));

// mock a server render
Dom.render(Component, document.querySelector('.root'));
document.title = pageTitle;

// get module theme property or first theme in fc config
if (themes.length > 0) {
  const themeId = theme || themes[0].id;
  document.querySelector('html').classList.add(`Theme--${themeId}`);
}

if (htmlClass) {
  document.querySelector('html').classList.add(htmlClass);
}

if (bodyClass) {
  document.querySelector('body').classList.add(bodyClass);
}
