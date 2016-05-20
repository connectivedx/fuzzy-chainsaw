# task-pages

Task for compiling handlebars templates into static html pages.

## Usage

```js
const gulp = require("gulp");
const pages = require("task-pages");

gulp.task("pages", pages({
	partials: "components/**/*.hbs",
	data: "data/**/*.json",
	src: "pages/**/*.hbs",
	dest: "dist"
}));
```

## Options

___src___ _String_.  Source glob of templates to pass to the compiler.

___dest___ _String_.  Directory used for outputing compiled pages.

___handlebars___ _Handlebars Instance_.  An instance of handlebars can be passed as an option if you want to use built-in configuration methods instead of wax.

A number of options are availble for handlebars via [handlebars-wax](https://github.com/shannonmoeller/handlebars-wax) for including partials, helpers, data and such. Better documentation can be found on the handlebars-wax repo, but these options are available to use:

- ___partials___
- ___helpers___
- ___decorators___
- ___data___
- ___parseHelperName___
- ___parsePartialName___
- ___parseDecoratorName___
- ___parseDataName___

## Installation

```
$ npm install task-pages --save-dev
```

## License

MIT
