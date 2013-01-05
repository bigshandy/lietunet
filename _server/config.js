var fs = require('fs');

// One day in msec
var day = 1000 * 60 * 60 * 24;

module.exports = {
	debug: false,
	basePath: fs.realpathSync(__dirname + '/../_site/'),
	port: 8080,

	gzipMime: /javascript|text|json/,
	maxAge: day * 7
};

