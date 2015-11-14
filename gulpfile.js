'use strict';

var gulp  = require('gulp');
var debug = require('gulp-debug');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

var tasks = requireDir('./gulp/tasks');

var config = require('./gulp/configuration');

/* development tasks */
gulp.task('default', function (task) {
	config.setenv('dev');
	runSequence(['scss'], task);
});

/* production tasks */
gulp.task('rel', function (task) {
	config.setenv('rel');
	runSequence(['scss'], task);
});

