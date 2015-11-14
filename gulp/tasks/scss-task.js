var gulp =	require('gulp'),
	rename = require('gulp-rename'),
	runSequence = require('run-sequence'),
	debug = require('gulp-debug'),
	sass = require('gulp-sass'),
	eol = require('gulp-eol'),
	gulpif = require('gulp-if'),
	minify = require('gulp-minify-css'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	rm = require('gulp-rm'),
	config = require('../configuration');

gulp.task('scss', function(){
	// clean before go release
	if(config.getenv() == "rel"){
		gulp.src([
				config.destFolders.css+'**/*.css',
				config.destFolders.css+'**/*.css.map',
			], {read: false})
			.pipe(rm({async: false}));
	}
	// clean before go release
	
	gulp.src(config.targets.scss)
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
		.pipe(gulpif(config.getenv() == "rel", rename({ 
			extname: '.min.css'
		})))
		.pipe(gulpif(config.getenv() == "dev", sourcemaps.write('maps')))
		.pipe(gulp.dest(config.destFolders.css));
});

gulp.task('watch-scss', function(){

});

