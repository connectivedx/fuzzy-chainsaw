const del = require('del');
const { dest } = require('./libs/path-helpers');

module.exports = () => (
  del([
    dest('tmp')
  ], { force: true })
);
