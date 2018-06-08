# Color Swatch Generation

## Post-CSS configuration:
The configuration for automatically generating the Color Swatches is located in `./build/webpack/lib/postcss-plugins.js`.
Fuzzy Chainsaw uses the postcss-export-vars NPM module to process the `colors.css` file and create the JSON data used by the React component.
You can find the documentation for that plugin [here](https://github.com/nahody/postcss-export-vars).

```
// postcss-plugins.js

const exportVars = require('postcss-export-vars');
...

const standard = [
  exportVars({
    file: './source/styleguide/components/SgColorSwatch/SgColorSwatch__variables',
    type: 'json',
    match: ['--color']
  }),
  mixins(),
  nested(),
...
```
Here is the configuration included in the current Fuzzy Chainsaw config files. 
`file` refers to the destination, `type` the output format, and `match` is an array of prefixes targeted by the module.
If you want to alter the prefixes associated with the project color variables, and you want them included inside the Color
Swatches page, be sure to have your changes here in this configuration as well.

## Color Naming Conventions
Using this module does enforce naming conventions for project colors. 

Prefix all project colors inside `./source/elements/variables/colors.css` with '--color'.

In order for the plugin to not capture the color variables used by the Styleguide, prefix all Styleguide colors inside
`./styleguide/variables/colors.css` with '--sg-color'.

## WCAG 2.0 Standard Tests
The SgColorSwatch measures contrast ratios against the 'AA', and 'AAA' standards of WCAG 2.0. 
By default both of these tests are displayed inside the component in browser.

The tests contrast '--color-text--primary' and '--color-text--secondary' against all variables prefixed with '--color'.

The way that this component is build currently strictly enforces the '--color-text--primary' and '--color-text--secondary' values to be present.
They are defaulted to '--color-black' and '--color-white'.

Inside the react file the contrast tests target these two values here:
```
// SgColorSwatch.jsx

...

/* contrast tests */
const contrastPrimary = getContrast(obj.hex, colorVars.colorTextPrimary);
const contrastSecondary = getContrast(obj.hex, colorVars.colorTextSecondary);
...
```

In order to add additional text color variables to be tested, a new `const contrastTertiary` would need to be created and passed
into the React component as a prop where appropriate. 
