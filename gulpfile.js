'use strict';

var gulp  = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

var config = require('./gulp/configuration');

var tasks = requireDir('./gulp/tasks');

/* development tasks */
gulp.task('default', function (cb) {
	config.setenv('dev');
	runSequence(['images-watch', 'scss-watch', 'html-watch'], cb);
});

/* production tasks */
gulp.task('release', function (cb) {
	config.setenv('release');
	return runSequence('images-release', 'scss-release', 'html-release', cb);
});

/* deployment tasks */
gulp.task('deploy', ['release'], function() {
	return runSequence('publish');
});


