var gulp =	require('gulp'),
	debug = require('gulp-debug'),
	rm = require('gulp-rm'),
    clean = function(){
        gulp.src(config.patternsForClean.html, {read: false})
            .pipe(rm({async: false}));
    },
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	config = require('../configuration');

// watch routine
gulp.task('html-watch', function(){
	clean(),
	gulp.src(config.targets.html)
		.pipe(debug())
		.pipe(watch(config.targets.html))
		.pipe(gulp.dest(config.destFolders.html));
});

// release routine
gulp.task('html-release', function(){
    clean(),
    gulp.src([config.revFolders.root + "**/rev-manifest.json", config.targets.html])
        .pipe(debug())
        .pipe(revCollector({
            replaceReved: true,
            dirReplacements: {
            }
        }))
		.pipe(gulp.dest(config.destFolders.html))
});

