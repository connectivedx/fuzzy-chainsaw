# task-scripts

Task for compiling and watching javascript into a single bundled file.

## Usage

```js
const gulp = require("gulp");
const scripts = require("task-scripts");

const scriptOpts = {
  entries: ["source/main.js"]
  dest: "dist/assets"
  name: 'bundle.js'
};

gulp.task('scripts', scripts.bundle(scriptOpts));
gulp.task('scripts-watch', scripts.watch(scriptOpts));

```

## Options

___entries___ String or String Array.

___dest___ String or String Array.

___name___ String.

___debug___ Boolean.

___watch___ Boolean.


## Installation

```
$ npm install task-scripts --save-dev
```

## License

MIT
