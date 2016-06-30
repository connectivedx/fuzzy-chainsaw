const path = require('path');
const del = require('del');
const gulp = require('gulp');
const images = require('../submodules/task-images');
const dirs = require('../package.json').directories;

gulp.task('images', images({
  src: dirs.images,
  dest: dirs.destImages
}));

gulp.task('images-watch', () => {
	var watcher = gulp.watch(dirs.images + '**/*.{jpg,gif,png}', ['images']);

	// to ensure deleting images from source is also picked up on watch
	// adapted from the gulp recipe here:
	// https://github.com/gulpjs/gulp/blob/master/docs/recipes/handling-the-delete-event-on-watch.md
	watcher.on('change', (event) => {
		if (event.type === 'deleted') {
			var filePathFromSrc = path.relative(path.resolve(dirs.images), event.path);
			var destFilePath = path.resolve(dirs.destImages, filePathFromSrc);

			del.sync(destFilePath);
		}
	});
});
