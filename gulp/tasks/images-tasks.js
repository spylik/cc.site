var gulp =	require('gulp'),
	debug = require('gulp-debug'),
	rm = require('gulp-rm'),
	rev = require('gulp-rev'),
	watch = require('gulp-watch'),
	config = require('../configuration');

// clean routine
gulp.task('images-clean', function(cb){
    gulp.src(config.patternsForClean.images, {read: false})
    .pipe(rm({async: false}));
    cb();
});

// watch routine
gulp.task('images-watch', ['images-clean'], function(){
	gulp.src(config.targets.images)
		.pipe(debug())
		.pipe(watch(config.targets.images))
		.pipe(gulp.dest(config.destFolders.images));
});

// release routine
gulp.task('images-release', ['images-clean'], function(cb){
	gulp.src(config.targets.images)
		.pipe(debug())
		.pipe(rev())
		.pipe(gulp.dest(config.destFolders.images))
		.pipe(rev.manifest({
			merge: true
		})) 
		.pipe(gulp.dest(config.revFolders.images));
	cb();
});
