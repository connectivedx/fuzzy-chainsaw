import Dom from 'react-dom/server';
import { getModule } from './static';

const { pageTitle, Component } = getModule(location.pathname.replace(/\.html/, ''));

// mock a server render
document.querySelector('.root').innerHTML = Dom.renderToStaticMarkup(Component);
document.title = pageTitle;
