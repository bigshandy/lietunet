(function($) {
	"use strict";

	// Wait for the document to be ready
	$(document).ready(function() {

		// Get the email element, if present
		var $email = $('.email');

		// Make sure it was found before doing anything
		if ($email.length) {
			// Parse the email address
			var emailAddress = $email.text().replace('.no.spam.please', '');

			// Wrap it in a mailto: -link
			var $link = $('<a class="email"></a>').attr('href', 'mailto:' + emailAddress).text(emailAddress);

			// And replace the span with the link
			$email.replaceWith($link);
		}

		// Now check if we happen to need the 404-page magic
		// .. start by fetching the flash video object
		var $flash = $('.not-found-video object, .not-found-video embed');
		if ($flash.length) {
			// Calculate the original aspect ratio
			var originalRatio = $flash.width() / $flash.height();

			// Get the containing element
			var $container = $flash.parent().parent();

			// Function to resize the video with correct aspect ratio
			var resize = function() {
				var width = $container.width();
				$flash.width(width);
				$flash.height(width / originalRatio);
			};

			// Do it now
			resize();

			// And also do it on resize
			$(window).resize(resize);
		}
	});

})(window.jQuery);


