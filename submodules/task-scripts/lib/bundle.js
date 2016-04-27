const path = require('path');
const browserify = require('browserify');
const createBundler = require('./createBundler');

module.exports = function(opts) {
  return function() {
    const options = Object.assign({}, {
      entries: opts.src,
      debug: true
    });

    var b = browserify(options);
    return createBundler(b, opts);
  }
};