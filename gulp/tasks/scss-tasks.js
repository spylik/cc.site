var gulp =	require('gulp'),
	debug = require('gulp-debug'),
	rm = require('gulp-rm'),
	sass = require('gulp-sass'),
	minify = require('gulp-minify-css'),
	sourcemaps = require('gulp-sourcemaps'),
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector'),
	watch = require('gulp-watch'),
	config = require('../configuration');

// clean routine
gulp.task('css-clean', function(cb){
    gulp.src(config.patternsForClean.css, {read: false})
    .pipe(rm({async: false}));
    cb();
});


// watch routine
gulp.task('scss-watch', ['css-clean'], function(){
	gulp.src(config.targets.scss)
		.pipe(debug())
		.pipe(watch(config.targets.scss))
		.pipe(sourcemaps.init()) 
		.pipe(sass())
		.on('error', function(err) {
			sass.logError(err);
			process.exit(2);
		})
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest(config.destFolders.css));
});

// release routine
gulp.task('scss-release', ['css-clean'], function(cb){
	gulp.src([config.revFolders.root + "**/rev-manifest.json", config.targets.scss])
		.pipe(debug())
		.pipe(revCollector({
			replaceReved: true,
			dirReplacements: {
			}
		}))
		.pipe(sass())
		.on('error', function(err) {
			sass.logError(err);
			process.exit(2);
		})
		// options from minify directly pass to https://github.com/jakubpawlowicz/clean-css
		.pipe(minify({
			compatibility: 'ie8'
		}))
		.pipe(rev())
		.pipe(gulp.dest(config.destFolders.css))
		.pipe(rev.manifest({
			merge: true
		}))
		.pipe(gulp.dest(config.revFolders.css));
	cb();	
});
