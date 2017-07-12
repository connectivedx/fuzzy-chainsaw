import Dom from 'react-dom/server';
import { getModule } from './static';
import { themes } from './fc-config';

const { pageTitle, theme, Component } = getModule(location.pathname.replace(/\.html/, ''));

// mock a server render
document.querySelector('.root').innerHTML = Dom.renderToStaticMarkup(Component);
document.title = pageTitle;

// get module theme property or first theme in fc config
if (themes.length > 0) {
  const themeId = theme || themes[0].id;
  document.querySelector('html').className = `Theme--${themeId}`;
}
