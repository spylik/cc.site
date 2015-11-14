var env = 'dev';
var config = module.exports = {};

config.targets = {
	js: ['src/js/**/*.js'],
	scss: ['src/scss/**/*.scss'],
	images: ['src/images/**/*.jpg', 'src/images/**/*.gif', 'src/images/**/*.png']
};

config.destFolders = {
	js: 'dest/static/js/',
	css: 'dest/static/css/',
	images: 'dest/static/images/'
}

config.setenv = function (environment) {
    'use strict ';
    env = environment;
};

config.getenv = function () {
	'use strict';
	return env;
}
