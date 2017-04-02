const { source, dest } = require('../../lib/path-helpers');

const dllStats = require(dest('assets/dlls/dll-stats.json')); // eslint-disable-line

module.exports = {
  dllStats,
  template: source('skeleton.html'),
  inject: true,
  chunksSortMode: (a) => {
    if (a.names[0] === 'devScript') return -1;
    if (a.names[0] === 'bundle') return 1;
    return 0;
  }
};
