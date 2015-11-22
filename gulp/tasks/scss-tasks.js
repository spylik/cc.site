var gulp =	require('gulp'),
//	rename = require('gulp-rename'),
	debug = require('gulp-debug'),
	sass = require('gulp-sass'),
	gulpif = require('gulp-if'),
	minify = require('gulp-minify-css'),
	sourcemaps = require('gulp-sourcemaps'),
	rm = require('gulp-rm'),
	rev = require('gulp-rev'),
	watch = require('gulp-watch'),
	config = require('../configuration');


gulp.task('scss', function(){
	// clean before go release
	if(config.getenv() == "rel"){
		gulp.src(config.patternsForClean.css, {read: false})
			.pipe(rm({async: false}));
	}
	// clean before go release

	gulp.src(config.targets.scss)
		.pipe(gulpif(config.getwatch() == "true", watch(config.targets.scss)))
		.pipe(debug())
		.pipe(gulpif(config.getenv() == "dev", sourcemaps.init())) 
		.pipe(sass())
		.on('error', function(err) {
			sass.logError(err);
			process.exit(2);
		})
		// options from minify directly pass to https://github.com/jakubpawlowicz/clean-css
		.pipe(gulpif(config.getenv() == "rel", minify({
			compatibility: 'ie8'
		})))
//		.pipe(gulpif(config.getenv() == "rel", rename({ 
//			extname: '.min.css'
//		})))
		.pipe(gulpif(config.getenv() == "rel", rev()))
		.pipe(gulpif(config.getenv() == "dev", sourcemaps.write('maps')))
		.pipe(gulp.dest(config.destFolders.css))
		.pipe(gulpif(config.getenv() == "rel", rev.manifest({
			merge: true
		}))) 
		.pipe(gulp.dest(config.revFolders.css));
});
