import Dom from 'react-dom';
import { getModule } from './static';

const module = getModule(location.pathname.replace(/\.html/, ''));

document.title = module.pageTitle;

Dom.render(
  module.Component,
  document.querySelector('#dev-entry')
);
