const fs = require('fs');
const postcss = require('postcss');
const startCase = require('lodash.startcase');

/* Converts variable property to camelcase JSON key */
const getPropName = (string) => {
  let name = string.split('-').filter(String);
  let i = name.length;

  while (i--) {
    if (i === 0) {
      name[i] = name[i].toString().toLowerCase();
    } else {
      name[i] = startCase(name[i].toString());
    }
  }

  return name.join('');
};

/* Resolves a variable value*/
const getVariable = (css, variable) => {
  let result;

  css.walkRules((rules) => {
    rules.walkDecls((decl) => {
      if (!decl.prop.match(variable.match(/[^var(](.*)[^)]/)[0])) return;
      result = decl.value;
    });
  });

  return result;
};

module.exports = postcss.plugin('colors-export', (files, filters, options) =>
  (css) => {

    options = options || {
      dest: ''
    };

    /* Collects our results */
    let jsonObject = {};

    /* Walk CSS Stream */
    css.walkRules((rules) => {
      let i = files.length;
      while (i--) {
        if (!rules.source.input.from.match(files[i])) return; /* filter for requested files */
        rules.walkDecls((decl) => {
          let j = filters.length;
          while (j--) {
            if (!decl.prop.match(filters[j])) return; /* filter for requested property */

            if (decl.value.match('var')) {
              jsonObject[getPropName(decl.prop)] = getVariable(css, decl.value); /* if color value is a variable */
            } else {
              jsonObject[getPropName(decl.prop)] = decl.value; /* if color value is not a variable */
            }
          }
        });
      }
    });

    /* Save JSON collection */
    fs.writeFileSync(options.dest, JSON.stringify(jsonObject), 'utf8');

    /* Set saved file's timestamp back 60 second to combat webpack-dev-server build loops */
    const now = Date.now() / 1000;
    const then = now - 60;
    fs.utimesSync(options.dest, then, then, (err) => { 
      if (err) throw err 
    });
  }
);