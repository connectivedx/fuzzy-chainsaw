/*
  This task deletes old files before a webpack bundle
*/

const del = require('del');
const { dest, source } = require('./lib/path-helpers');


module.exports = () => (
  del([
    source('catalog/'),
    source('elements/**/@*'),
    dest('**/*.html'),
    dest('*.json'),
    dest('assets/*.{js,js.map,css,css.map}'),
    dest('assets/fonts/**'),
    dest('assets/images/**'),
    dest('assets/offline/**'),
    dest('assets/svgs/*'),
    dest('assets/static/*')
  ], {
    force: true
  })
);
