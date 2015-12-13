var gulp =	require('gulp'),
	debug = require('gulp-debug'),
	rm = require('gulp-rm'),
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch'),
	saveLicense = require('uglify-save-license'),
	config = require('../configuration');

// clean routine
gulp.task('js-clean', function(){
    return gulp.src(config.patternsForClean.js, {read: false})
	.pipe(debug({title: 'js-clean:'}))
    .pipe(rm());
});

// watch routine
gulp.task('js-watch', ['js-clean'], function(){
	gulp.src(config.targets.js)
		.pipe(watch(config.targets.js))
		.pipe(debug({title: 'js-watch:'}))
		.pipe(gulp.dest(config.destFolders.js));
});

// release routine
gulp.task('js-release',['js-clean'], function(){
	return gulp.src(config.targets.js)
		.pipe(debug({title: 'js-release:'}))
        .pipe(revCollector({
            replaceReved: true,
            dirReplacements: {
            }
        }))
		.pipe(uglify({
			preserveComments: saveLicense
		}))
		.pipe(rev())
		.pipe(gulp.dest(config.destFolders.js))
		.pipe(rev.manifest({
			merge: true
		})) 
		.pipe(gulp.dest(config.revFolders.js));
});
