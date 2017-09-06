const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const juice = require('juice');
const dot = require('dot');

const postcss = require('postcss');
const cssnext = require('postcss-cssnext');
const nested = require('postcss-nested');

const source = (...args) => path.resolve(__dirname, '..', 'source', ...args);
const dest = (...args) => path.resolve(__dirname, '..', 'dist', ...args);


// magically pass options through via config(variableName)
const replaceCssVariables = (styles) =>
  styles.replace(/config\(([^)]+)\)/g, "'+(it.config.$1?it.config.$1:'')+'");


// get raw template and css
const template = fs.readFileSync(source('index.dot')).toString();
const css = fs.readFileSync(source('style.css')).toString();

const plugins = [
  cssnext,
  nested
];

postcss(plugins)
  .process(css)
  .then((res) => {
    // inject css into raw template
    const inlinedTemplate = juice.inlineContent(template, res.css);

    // compile raw template into function
    const compiledTemplate = dot.template(inlinedTemplate);

    // create dist folder if it doesn't exist
    mkdirp.sync(dest());

    // replace config(varName) in template string
    const configurableTemplate = replaceCssVariables(compiledTemplate.toString());

    // add common js export so we can require it
    const output = `module.exports = ${configurableTemplate}`;

    // save to file
    fs.writeFileSync(dest('template.js'), output);
  })
  .catch((err) => {
    throw new Error(err);
  });
