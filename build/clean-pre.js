const del = require('del');
const { dest } = require('./libs/path-helpers');

module.exports = () => (
  del([
    dest('**/*.html'),
    dest('*.json'),
    dest('assets/*.{js,js.map,css,css.map}'),
    dest('assets/images/**'),
    dest('assets/fonts/**'),
    dest('assets/svgs/*')
  ], {
    force: true
  })
);
