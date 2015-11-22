'use strict';

var gulp  = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

var config = require('./gulp/configuration');

var tasks = requireDir('./gulp/tasks');

/* development tasks */
gulp.task('default', function (task) {
	config.setenv('dev');
	config.setwatch('true');
//	runSequence(['scss'], ['watch-scss'], task);
	runSequence(['images'], ['scss'], task);
});

/* production tasks */
gulp.task('rel', function (task) {
	config.setenv('rel');
	config.setwatch('false');
	runSequence(['images'], ['scss'], task);
});

