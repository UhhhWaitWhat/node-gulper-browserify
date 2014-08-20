var browserify = require('gulp-browserify');
var es = require('event-stream');
var path = require('path');

module.exports = function(index, glob) {
	return {
		name: 'browserify',
		output: 'scripts',
		glob: glob,
		streamer: function(input) {
			var file;
			var map = es.map(function(nfile, callback) {
				if(nfile.path.replace(process.cwd()+path.sep, '') === index) {
					file = nfile;
				}

				if(file) {
					callback(null, file);
				} else {
					callback();
				}
			});

			return input.pipe(map).pipe(browserify());
		}
	};
};