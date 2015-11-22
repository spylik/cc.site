var env = 'dev';

var config = module.exports = {};

config.tempFolder = 'tmp/'

// folder where we keep original files
config.targets = {
	js: ['src/js/**/*.js'],
	scss: ['src/scss/**/*.scss'],
	images: ['src/images/**/*.jpg', 'src/images/**/*.gif', 'src/images/**/*.png'],
	html: ['src/html/**/*.html']
};

// folders where we will keep compiled files
config.destFolders = {
	js: 'dest/static/js/',
	css: 'dest/static/css/',
	images: 'dest/static/images/',
	html: ['dest/']
}

// pattern for clean up compiled folders
config.patternsForClean = {
	js: [config.destFolders.js+'**/*.js'],
	css: [config.destFolders.css+'**/*.css', config.destFolders.css+'**/*.map'],
	images: [config.destFolders.images+'**/*.jpg', config.destFolders.images+'**/*.gif', config.destFolders.images+'**/*.png'],
	html: [config.destFolders.html+'**/*.html']
}

// folders where we will keep revision manifests
config.revFolders = {
	js: config.tempFolder+'rev/js/',
	css: config.tempFolder+'rev/css/',
	images: config.tempFolder+'rev/images/',
	html: config.tempFolder+'rev/html/',
}


// set and get global env variable
config.setenv = function (param) {
    'use strict ';
    env = param;
};
config.getenv = function () {
	'use strict';
	return env;
}

// set and get glovel watch variable
config.setwatch = function(param) {
    'use strict ';
    watch = param;
}
config.getwatch = function () {
	'use strict';
	return watch;
}
