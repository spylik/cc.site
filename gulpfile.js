'use strict';

var gulp  = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

var config = require('./gulp/configuration');

var tasks = requireDir('./gulp/tasks');

/* development tasks */
gulp.task('default', function (task) {
	config.setenv('dev');
	runSequence(['images-watch'], ['scss-watch'], ['html-watch'], task);
});

/* production tasks */
gulp.task('release', function (task) {
	config.setenv('release');
	runSequence(['images-release'], ['scss-release'], ['html-release'], task);
});

