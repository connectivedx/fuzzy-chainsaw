# task-scripts

Gulp task for compiling and watching JavaScript into a single bundled file using [Browserify](http://browserify.org/) and [Watchify](https://github.com/substack/watchify).

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

___entries *___ String or String Array.  The Browserify entries used to start compilation.

___dest *___ String or String Array.  Location(s) of output file.

___name *___ String.  The output filename.

___debug___ Boolean. Enables or disables Browserify debug mode.

___watch___ Boolean. Set to try to run task using Watchify transform.

___gulpPlugins___ Stream Array.  A List of configured Gulp plugins that are given to Browserify on each rebundle.

___browserSync___ BrowserSync Server.  A Browsersync server made with the `browserSync.create()` function.


___*___ required

## Installation

```
$ npm install task-scripts --save-dev
```

## License

MIT
