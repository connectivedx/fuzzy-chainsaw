const dopl = require('dopl');

module.exports = ({
  name,
  dest
}) => {
  const componentName =
    name
      .split('-')
      .map(part => part.substr(0, 1).toUpperCase() + part.substr(1))
      .join('');

  return dopl({
    name,
    output: dest,
    src: __dirname + '/component-template',
    data: {
      componentName
    }
  });
}
