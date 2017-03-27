import Dom from 'react-dom';
import { getModule } from './static';

const { pageTitle, Component } = getModule(location.pathname.replace(/\.html/, ''));

document.title = pageTitle;

Dom.render(
  Component,
  document.querySelector('#dev-entry')
);
