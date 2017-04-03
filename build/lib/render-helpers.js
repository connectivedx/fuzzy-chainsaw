const Dom = require('react-dom/server');


const getOutputRelativity = (outputPath) => {
  const depth = outputPath.split('/').slice(1).map(() => '..');
  if (depth.length) return depth.join('/');
  return '.';
};

const makeAbsolutePathRelative = (output, baseHref) =>
  output
    .replace(/src="\//gi, `src="${baseHref}/`)
    .replace(/href="\//gi, `href="${baseHref}/`)
    .replace(/url="\//gi, `url="${baseHref}/`)
    .replace(/url\(\//gi, `url(${baseHref}/`)
    .replace(/url\("\//gi, `url("${baseHref}/`);

const renderComponent = ({ template, module }) =>
  template.toString()
    .replace('{{title}}', module.pageTitle)
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
    .filter((key) => key.indexOf('.example.jsx') === -1);

const getContextList = (context, prefix = false) =>
  getContextKeys(context)
    .map(
      prefix
        ? processPrefixedContext(prefix)
        : processUnprefixedContext
    );


module.exports = {
  getOutputRelativity,
  makeAbsolutePathRelative,
  renderComponent,
  processUnprefixedContext,
  processPrefixedContext,
  getContextKeys,
  getContextList
};
