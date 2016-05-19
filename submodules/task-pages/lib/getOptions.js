const pick = require('lodash/pick');
const getFilename = require('./getFilename');

const PluginName = require('../package.json').name

const hbOptKeys = [
  'handlebars',
  'partials',' helpers', 'decorators', 'data',
  'parseHelperName', 'parsePartialName',
  'parseDecoratorName', 'parseDataName'
];

module.exports = function getOptions(conf) {
  var opts = Object.assign(
    {},
    conf,
    { hb: Object.assign({ }, {
        parseHelperName: getFilename,
        parsePartialName: getFilename,
        parseDecoratorName: getFilename,
        parseDataName: getFilename
      }, pick(conf, hbOptKeys)) }
  );

  if (opts.src === undefined) {
    throw new Error(PluginName + ': options.src is not defined');
  }

  if (opts.dest === undefined) {
    throw new Error(PluginName + ': options.dest is not defined');
  }

  return opts;
};
