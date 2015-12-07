var gulp =	require('gulp'),
	debug = require('gulp-debug'),
	awspublish = require('gulp-awspublish'),
	awspublishRouter = require('gulp-awspublish-router'),
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

	return gulp.src(config.destFolders.root+"**/*")
		.pipe(debug())
		.pipe(awspublishRouter({
        	cache: {
                // cache for 5 minutes by default
                cacheTime: 300
            },
			routes: {
				"^(?:.+)\\.(?:js|css|svg|ttf)$": {
					key: "$&",
					gzip: true,
					cacheTime: 630720000 // 20 years
				},
				"^(?:.+)\\.(?:jpg|gif|png)$": {
					key: "$&",
					cacheTime: 630720000 // 20 years
				},
				"^(?:.+)\\.(?:html)$": {
					key: "$&",
					cacheTime: 300 // 5 minutes for html
				},
				// pass-through for anything that wasn't matched by routes above, to be uploaded with default options
				"^.+$": "$&"
			}
		}))
		.pipe(publisher.publish())
		.pipe(publisher.sync())
		// create a cache file to speed up consecutive uploads
		.pipe(publisher.cache())
		
		// print upload updates to console
		.pipe(awspublish.reporter())
});


