/* eslint-disable */

// {
//   title: String,
//   context: Context,
//   filter: Function,
//   groups: [{
//     title: String,
//     filter: function
//   }]
// }

var minimatch = require('minimatch');

var filterByAttributes = function filterByAttributes(match) {
  return function (filename, module) {
    var arr = Object.keys(match).map(function (key) {
      return { key: key, value: match[key] };
    }).map(function (_ref) {
      var key = _ref.key,
          value = _ref.value;

      if (typeof value === 'function') {
        return value(module[key]);
      } else {
        return module[key] === value;
      }
    });

    return arr.indexOf(false) === -1;
  };
};

var filterByPath = function filterByPath(filePattern) {
  return function (filename) {
    return minimatch(filename.substr(2), filePattern);
  };
};

module.exports = {
  filterByAttributes: filterByAttributes,
  filterByPath: filterByPath
};