/*
 *
 * Basic Node.js HTTP server, with some sane performance optimizations.
 *
 * Uses Connect to start a HTTP server, static middleware to serve
 * static content from the Jekyll-generated _site directory. Also
 * adds gzip compression and 404 page support. Possibly later E-Tags.
 *
 * Created by Janne Enberg.
 */

// Load requirements
var connect = require('connect');
var gzip = require('connect-gzip');
var fs = require('fs');

// Load config
var config = require('./config.js');

/**
 * Simple 404 handler
 */
var handle404 = function(request, response, next) {

	// Read the 404.html file from the _site folder
	fs.readFile(config.basePath + '404.html', function(err, html) {

		// If not found, skip to the next possible handler
		if (err) {
			next(err);
			return;
		}

		// Send some basic headers
		response.writeHead('404', 'Not found', {
			'Content-Type': 'text/html; charset=UTF-8'
		});

		// And serve the content
		response.end(html);
	});
};


// Create the server
var app = connect()

	// Logger
//	.use(connect.logger('dev'))

	// Gzip compression
	.use(gzip.gzip({matchType: /text|javascript|json/}))

	// Static files
	.use(connect.static(config.basePath, config.staticOptions))

	// Finally a 404 handler
	.use(handle404)

	// Oh and don't forget to listen
	.listen(config.port);

