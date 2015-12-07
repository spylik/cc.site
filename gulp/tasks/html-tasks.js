var gulp =	require('gulp'),
	debug = require('gulp-debug'),
	rm = require('gulp-rm'),
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	config = require('../configuration');

// clean routine
gulp.task('html-clean', function(cb){
	gulp.src(config.patternsForClean.html, {read: false})
	.pipe(rm({async: false}));
	cb();
});

// watch routine
gulp.task('html-watch', ['html-clean'], function(){
	gulp.src(config.targets.html)
		.pipe(debug())
		.pipe(watch(config.targets.html))
		.pipe(gulp.dest(config.destFolders.html));
	cb();
});

// release routine
gulp.task('html-release', ['html-clean'], function(cb){
    return gulp.src([config.revFolders.root + "**/rev-manifest.json", config.targets.html])
        .pipe(debug())
		.pipe(revCollector({
		    replaceReved: true,
		    dirReplacements: {
		    }
		}))
		.pipe(gulp.dest(config.destFolders.html));
	cb();
});

