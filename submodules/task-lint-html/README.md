# task-lint-html

Task for linting html files

## Usage

```js
const gulp = require("gulp");
const lintHtml = require("task-lintHtml");

gulp.task("lint-html", lintHtml({
	src: "source/assets",
	lintOpts: {
		'inline-style-disabled': true
	}
}));
```

## Options

___src___ _String_.  Source glob of html files to lint.

___lintOpts___ _Object_.  Rules configuration for [HTMLHint](https://github.com/yaniswang/HTMLHint/wiki/Rules)

## Installation

```
$ npm install task-lint-html --save-dev
```

## License

MIT
