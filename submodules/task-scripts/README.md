# task-scripts

Task for compiling and watching javascript into a single bundled file using browserify and watchify.

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

___entries *___ String or String Array.  The browserify entries used to start compilation.

___dest *___ String or String Array.  Location(s) of outputted file.

___name *___ String.  The outputted filename.

___debug___ Boolean. Enables or disables Browserify debug mode

___watch___ Boolean. Set to try to run task using watchify transform.

___gulpPlugins___ Stream Array.  A List of configured gulp plugins that are given to browserify on each rebundle.

___*___ required

## Installation

```
$ npm install task-scripts --save-dev
```

## License

MIT
