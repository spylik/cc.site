var env = 'development';
var config = module.exports = {};

var paths = {
	js: ['src/js/**/*.js'],
	
	images: ['src/images/**/*.jpg', 'src/images/**/*.gif', 'src/images/**/*.png']
};

config.set = function (environment) {
    'use strict ';
    env = environment;
};

config.get = function () {
	'use strict';
	return env;
}
