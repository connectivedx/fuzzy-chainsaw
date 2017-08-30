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

const filterByAttributes = (match) => (filename, module) => {
  return true;
};

const filterByPath = (match) => (filename, module) => {
  return true;
};

module.exports = {
  filterByAttributes,
  filterByPath
};
