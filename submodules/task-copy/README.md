# task-copy

Task for copying files or full directories.

## Usage

```js
const gulp = require("gulp");
const copy = require("task-copy");

gulp.task("copy-assets-directory", copy({
	src: "source/assets",
	dest: "dist/assets"
}));

gulp.task("copy-file", copy({
	src: "source/cool-file.md",
	dest: "dist"
}));
```

## Options

___src___ _String_.  Source directory or file glob to select files to be copied.

___dest___ _String_.  Directory used for outputing copied files.

## Installation

```
$ npm install task-copy --save-dev
```

## License

MIT
