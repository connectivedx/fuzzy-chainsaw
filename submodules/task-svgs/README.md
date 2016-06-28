# task-scripts

Gulp task using [`svg-sprite`](https://github.com/jkphl/svg-sprite) to generate SVG sprites and related styles for use inline with your HTML or from a stylesheet.

## Usage

```js
const gulp = require('gulp');
const task = require('task-svgs');

gulp.task('svgs', task({
	src: 'source/svgs',
	dest: 'dist/assets/svg',
	name: 'icons.svg',
	meta: 'source/svgs/meta.yaml',
	css: false,
	sass: false,
	saveOriginal: false
}));

```

## Options

___src *___ String.  The source directory for your SVGs.

___dest *___ String.  Location(s) of the output files.

___name *___ String.  The output filename. Defaults to `icons.svg`.

___meta___ String or False. String path to a `.yaml` file defining title and descriptions of each individual SVG. These will be injected into the resulting sprite(s) for better accessibility support. [More information](https://github.com/jkphl/svg-sprite/blob/master/docs/meta-data.md). Keys in the yaml file match the SVG file’s name.

___css___ Boolean. Enables or disables the generation of a CSS stylesheet and an SVG sprite with nested `<svg>` elements and `<view>` elements, allowing for the use in stylesheets or in the browser.

___sass___ Boolean. Enables or disables the same results as the `css` options, but the resulting stylesheet is `.scss` instead.

___saveOriginals___ Boolean.  Enables or disables moving original source files to destination.

___*___ required

## Installation

```
$ npm install task-svg --save-dev
```

## License

MIT
