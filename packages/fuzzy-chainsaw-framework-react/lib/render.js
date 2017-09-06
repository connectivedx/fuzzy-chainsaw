const React = require('react');
// const PropTypes = require('prop-types');
const ReactDom = require('react-dom');
const ReactDomServer = require('react-dom/server');


module.exports.renderComponent = (Component) =>
  ReactDomServer.renderToStaticMarkup(React.createElement(Component));


module.exports.renderComponentDev = (el, Component, props) =>
  ReactDom.render(React.createElement(Component, props), el);


const NotFoundComponent = (props) =>
  React.createElement('div', null,
    React.createElement('p', null, `Page not found: ${props.modulePath}`), // eslint-disable-line
    React.createElement('a', { href: '/' }, 'Home Page')
  );

NotFoundComponent.pageTitle = 'Page Not Found';


module.exports.NotFoundComponent = NotFoundComponent;
