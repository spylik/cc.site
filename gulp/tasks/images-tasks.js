var gulp =	require('gulp'),
	debug = require('gulp-debug'),
	rm = require('gulp-rm'),
	clean = function(){
		gulp.src(config.patternsForClean.images, {read: false})
			.pipe(rm({async: false}));
	},
	rev = require('gulp-rev'),
	watch = require('gulp-watch'),
	config = require('../configuration');

// watch routine
gulp.task('images-watch', function(){
	clean();
	gulp.src(config.targets.images)
		.pipe(debug())
		.pipe(watch(config.targets.images))
		.pipe(gulp.dest(config.destFolders.images));
});

// release routine
gulp.task('images-release', function(){
	clean();
	gulp.src(config.targets.images)
		.pipe(debug())
		.pipe(rev())
		.pipe(gulp.dest(config.destFolders.images))
		.pipe(rev.manifest({
			merge: true
		})) 
		.pipe(gulp.dest(config.revFolders.images));
});


