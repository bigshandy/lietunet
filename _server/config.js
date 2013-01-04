
// One day in msec
var day = 1000 * 60 * 60 * 24;

module.exports = {
	basePath: __dirname + '/../_site/',
	port: 8080,

	staticOptions: {
		maxAge: day * 7
	}
};

