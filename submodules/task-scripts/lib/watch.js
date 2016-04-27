const path = require('path');
const watchify = require('watchify');
const browserify = require('browserify');
const createBundler = require('./createBundler');

module.exports = function(opts) {
  return function() {
    const options = Object.assign({}, {
      entries: opts.src,
      debug: true
    });

    var b = watchify(browserify(options)); 
    return createBundler(b, opts);
  }
}