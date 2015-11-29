var gulp =	require('gulp'),
	debug = require('gulp-debug'),
	awspublish = require('gulp-awspublish'),
	config = require('../configuration');

// publish to amazon S3 routine
gulp.task('publish', function(){
	// create a new publisher using S3 options
	// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property

	var publisher = awspublish.create({
		params: {
			Bucket: config.awsBucket
		}
	});

	// define custom headers
	var headers = {
		'Cache-Control': 'max-age=315360000, no-transform, public'
	};

	return gulp.src(config.destFolders.css+"**/*.css")
		.pipe(debug())
		// gzip, Set Content-Encoding headers and add .gz extension
		//.pipe(awspublish.gzip({ ext: '.gz' }))

		// publisher will add Content-Length, Content-Type and headers specified above 
		// If not specified it will set x-amz-acl to public-read by default 
		.pipe(publisher.publish(headers))

		// create a cache file to speed up consecutive uploads
		.pipe(publisher.cache())
		
		// print upload updates to console
		.pipe(awspublish.reporter());
});


