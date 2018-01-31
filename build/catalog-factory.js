/*
  This provides a factory that returns a gulp task
  for building catalog mode.
*/

const fs = require('fs');
const git = require('gulp-git');
const path = require('path');

const { source } = require('./lib/path-helpers');

const dirs = (p) => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());
const categories = ['elements/atoms/', 'elements/molecules/', 'elements/organisms/'];

const cloneCatalog = (src, dest) => git.clone(src, {args: dest}, (err) => {
  if (err) throw err;

  //Walk categories
  let i = categories.length;
  while (i--) {

    //Collect element path
    const categoryPath = dest + '/' + categories[i];
    let j = dirs(categoryPath).length;

    //Loop over elements within categories
    while (j--) {
      //Get categorie element's name
      const elementName = dirs(categoryPath)[j];
      //Get current path
      const from = categoryPath + elementName;
      //Get new path
      const to = dest.split('catalog')[0] + categories[i] + '@' + elementName;
      //Skip duplicates
      if (fs.existsSync(to.replace('@', ''))) return;

      //Use fs.rename to move elements from current location to new location
      fs.rename(from, to, function(err) {
          if ( err ) console.log('ERROR: ' + err);
      });
    }
  }
});

module.exports = ({ src, dest }) => () => {
  return cloneCatalog(src, dest);
};
