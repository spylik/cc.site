var gulp =	require('gulp'),
	debug = require('gulp-debug'),
	rm = require('gulp-rm'),
	rev = require('gulp-rev'),
	watch = require('gulp-watch'),
	config = require('../configuration');

// clean routine
gulp.task('images-clean', function(){
    return gulp.src(config.patternsForClean.images, {read: false})
	.pipe(debug({title: 'images-clean:'}))
    .pipe(rm());
});

// watch routine
gulp.task('images-watch', ['images-clean'], function(){
	gulp.src(config.targets.images)
		.pipe(watch(config.targets.images))
		.pipe(debug({title: 'images-watch:'}))
		.pipe(gulp.dest(config.destFolders.images));
});

// release routine
gulp.task('images-release',['images-clean'], function(){
	return gulp.src(config.targets.images)
		.pipe(debug({title: 'images-release:'}))
		.pipe(rev())
		.pipe(gulp.dest(config.destFolders.images))
		.pipe(rev.manifest({
			merge: true
		})) 
		.pipe(gulp.dest(config.revFolders.images));
});
