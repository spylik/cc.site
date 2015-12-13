var gulp =	require('gulp'),
	debug = require('gulp-debug'),
	rm = require('gulp-rm'),
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	config = require('../configuration');

// clean routine
gulp.task('html-clean', function(){
	return gulp.src(config.patternsForClean.html, {read: false})
	.pipe(debug({title: 'html-clean:'}))
	.pipe(rm());
});

// watch routine
gulp.task('html-watch', ['html-clean'], function(){
	gulp.src(config.targets.html)
		.pipe(watch(config.targets.html))
		.pipe(debug({title: 'html-watch:'}))
		.pipe(gulp.dest(config.destFolders.html));
});

// release routine
gulp.task('html-release', ['html-clean'], function(){
	return gulp.src([config.revFolders.root + "**/rev-manifest.json"].concat(config.targets.html))
        .pipe(debug({title: 'html-release:'}))
		.pipe(revCollector({
		    replaceReved: true,
		    dirReplacements: {
		    }
		}))
		.pipe(gulp.dest(config.destFolders.html));
});

