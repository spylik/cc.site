var gulp  = require('gulp');
var debug = require('gulp-debug');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

var tasks = requireDir('./gulp/tasks');

var configuration = require('./gulp/configuration');

/* development tasks */
gulp.task('default', function (task) {
	configuration.set('development');
	runSequence(['scss'], ['watch-scss'], task);
});

/* deployment tasks */
gulp.task('release', function (task) {
	configuration.set('release');
});

