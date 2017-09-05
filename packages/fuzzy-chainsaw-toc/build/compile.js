const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const juice = require('juice');
const dot = require('dot');


const source = (...args) => path.resolve(__dirname, '..', 'source', ...args);
const dest = (...args) => path.resolve(__dirname, '..', 'dist', ...args);


// get raw template and css
const template = fs.readFileSync(source('index.dot')).toString();
const css = fs.readFileSync(source('style.css')).toString();

// inject css into raw template
const inlinedTemplate = juice.inlineContent(template, css);

// compile raw template into function
const compiledTemplate = dot.template(inlinedTemplate);

// create dist folder if it doesn't exist
mkdirp.sync(dest());

// save to file
fs.writeFileSync(dest('template.js'), compiledTemplate.toString());
