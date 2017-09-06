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

const minimatch = require('minimatch')

const filterByAttributes = (match) => (filename, module) => {
  const arr = Object.keys(match)
    .map((key) => ({ key, value: match[key] }))
    .map(({ key, value }) => {
      if (typeof value === 'function') {
        return value(module[key]);
      } else {
        return module[key] === value;
      }
    });

  return arr.indexOf(false) === -1;
};


const filterByPath = (filePattern) => (filename) =>
  minimatch(filename, filePattern);



module.exports = {
  filterByAttributes,
  filterByPath
};
