# task-lint-styles

Task bunde for linting css stylesheets.

## Usage

```js
const gulp = require("gulp");
const lint = require("task-lint-styles").lint;

gulp.task("lint-styles", lint({
	src: "my-styles/**/*.css"
	rules: {
		"block-no-empty": true
	}
}));
```

## Options

___src___ _String_. `gulp.src` source global of files to feed stylelint.

___rules___ _Object_. A plain object with stylelint rules to override globally. All rules can be found on the [stylelint](http://stylelint.io/user-guide/rules) website.

## Installation

```
$ npm install task-lint-styles --save-dev
```

## License

MIT
