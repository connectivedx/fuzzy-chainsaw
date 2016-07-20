# task-images

Gulp task for copying and, on production builds, minifying images.

## Usage

```js
const path = require('path');
const del = require('del');
const gulp = require('gulp');
const images = require('../submodules/task-images');
const dirs = require('../package.json').directories;

gulp.task('images', images({
  src: 'source/images',
  dest: 'dist/assets/images'
}));

gulp.task('images-watch', () => {
	var watcher = gulp.watch('source/images' + '**/*.{jpg,gif,png}', ['images']);

	// to ensure deleting images from source is also picked up on watch
	// adapted from the gulp recipe here:
	// https://github.com/gulpjs/gulp/blob/master/docs/recipes/handling-the-delete-event-on-watch.md
	watcher.on('change', (event) => {
		if (event.type === 'deleted') {
			var filePathFromSrc = path.relative(path.resolve('source/images'), event.path);
			var destFilePath = path.resolve('dist/assets/images', filePathFromSrc);

			del.sync(destFilePath);
		}
	});
});

```

## Options

___src *___ String.  The source directory for your images.

___dest *___ String.  The location of output files.

___*___ required

## Installation

```
$ npm install task-images --save-dev
```

## License

MIT
