# Workflows

Workflows define partial webpack configurations for different types of tasks.  These try to be fairly generic, so entry files are not defined. Workflows should be required in the webpack config, merging entry files using `webpack-merge`.


## Example

This will create a usable webpack configuration.

```js
const merge = require('webpack-merge');
const buildWorkflow = require('./build');

module.exports = merge(buildWorkflow, {
	entry: {
		styleguide: source('styleguide/styleguide.jsx'),
		bundle: source('bundle.jsx')
	}
});
```

