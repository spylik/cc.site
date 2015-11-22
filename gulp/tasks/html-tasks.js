var gulp =	require('gulp'),
//	rename = require('gulp-rename'),
	debug = require('gulp-debug'),
	gulpif = require('gulp-if'),
	rev = require('gulp-rev'),
	watch = require('gulp-watch'),
	config = require('../configuration');

gulp.task('html', function(){
	// clean before go release
	if(config.getenv() == "rel"){
		gulp.src([
				config.destFolders.html+'**/*.html'
			], {read: false})
			.pipe(rm({async: false}));
	}
	// clean before go release

	gulp.src(config.targets.scss)
		.pipe(gulpif(config.getwatch() == "true", watch(config.targets.html)))
		.pipe(debug())
		.pipe(gulpif(config.getenv() == "rel", rev()))
		.pipe(gulp.dest(config.destFolders.html))
		.pipe(gulpif(config.getenv() == "rel", rev.manifest({
			merge: true
		}))) 
		.pipe(gulp.dest(config.revFolders.html));
});
