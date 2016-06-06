const pick = require('lodash/pick');
const getFilename = require('./getFilename');

const PluginName = require('../package.json').name

const hbOptKeys = [
  'handlebars',
  'partials', 'helpers', 'decorators', 'data',
  'parsePartialName', 'parseHelperName',
  'parseDecoratorName', 'parseDataName'
];

module.exports = function getOptions(options) {
  var opts = Object.assign({}, options);
  opts.hb = Object.assign({ }, {
    parseHelperName: getFilename,
    parsePartialName: getFilename,
    parseDecoratorName: getFilename,
    parseDataName: getFilename
  }, pick(options, hbOptKeys));

  if (opts.src === undefined) {
    throw new Error(PluginName + ': options.src is not defined');
  }

  if (opts.dest === undefined) {
    throw new Error(PluginName + ': options.dest is not defined');
  }

  return opts;
};
