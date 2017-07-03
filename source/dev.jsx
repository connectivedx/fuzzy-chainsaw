import Dom from 'react-dom/server';
import { getModule } from './static';

const { pageTitle, theme, Component } = getModule(location.pathname.replace(/\.html/, ''));

// mock a server render
document.querySelector('.root').innerHTML = Dom.renderToStaticMarkup(Component);
document.querySelector('html').className = `${theme || 'generic'}-theme`;
document.title = pageTitle;

