var gulp =	require('gulp'),
//	rename = require('gulp-rename'),
	debug = require('gulp-debug'),
	gulpif = require('gulp-if'),
	rev = require('gulp-rev'),
	watch = require('gulp-watch'),
	rm = require('gulp-rm'),
	config = require('../configuration');

gulp.task('images', function(){
	// clean before go release
	if(config.getenv() == "rel"){
		gulp.src(config.patternsForClean.images, {read: false})
			.pipe(rm({async: false}));
	}
	// clean before go release

	gulp.src(config.targets.images)
//		.pipe(gulpif(config.getwatch() == "true", watch(config.targets.images)))
		.pipe(debug())
		.pipe(gulpif(config.getenv() == "rel", rev()))
		.pipe(gulp.dest(config.destFolders.images))
		.pipe(gulpif(config.getenv() == "rel", rev.manifest({
			merge: true
		}))) 
		.pipe(gulp.dest(config.revFolders.images));
});
