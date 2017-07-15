/*
  This provides helpers for staticly rendering
  react components into html markup
*/

const Dom = require('react-dom/server');

const renderComponent = ({ template, module }) =>
  template.toString()
    .replace('{{title}}', module.pageTitle)
    .replace('{{htmlClass}}', module.htmlClass ? module.htmlClass : '')
    .replace('{{bodyClass}}', module.bodyClass ? module.bodyClass : '')
    .replace('{{theme}}', module.theme ? `Theme--${module.theme}` : '')
    .replace('{{output}}', Dom.renderToStaticMarkup(module.Component));

const processUnprefixedContext = (key) => {
  const full = key.substr(0, key.indexOf('.jsx')).substr(1);
  return {
    outputPath: `${full.substr(1)}.html`,
    moduleName: full
  };
};

const processPrefixedContext = (prefix) => (key) => {
  const full = key.substr(0, key.indexOf('.jsx')).substr(1);
  const name = full.substr(full.lastIndexOf('/'));

  return {
    outputPath: `${prefix}${name}.html`,
    moduleName: `/${prefix}${name}`
  };
};

const getContextKeys = (context) =>
  context.keys()
    .filter((key) => key.indexOf('.test.jsx') === -1)
    .filter((key) => key.indexOf('.example.jsx') === -1)
    .filter((key) => key.indexOf('.md') === -1);


const getContextList = (context, prefix = false) =>
  getContextKeys(context)
    .map(
      prefix
        ? processPrefixedContext(prefix)
        : processUnprefixedContext
    );


module.exports = {
  renderComponent,
  processUnprefixedContext,
  processPrefixedContext,
  getContextKeys,
  getContextList
};
