'use strict';

var gulp  = require('gulp'),
	requireDir = require('require-dir'),
	runSequence = require('run-sequence'),
	config = require('./gulp/configuration');

var tasks = requireDir('./gulp/tasks');

/* development tasks */
gulp.task('default', function (cb) {
	config.setenv('dev');
	runSequence('images-watch', 'scss-watch', 'js-watch', 'html-watch', cb);
});

/* production tasks */
gulp.task('release', function (cb) {
	config.setenv('release');
	runSequence('images-release', 'scss-release', 'js-release', 'html-release', cb);
});

/* deployment tasks */
gulp.task('deploy', ['release'], function() {
	runSequence('publish');
});
