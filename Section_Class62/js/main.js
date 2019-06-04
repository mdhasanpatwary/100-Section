(function ($) {
	"use strict";

	jQuery(document).ready(function($){

		
	$('.full-width').on('click', function() {

			
			$('.wrap > div').addClass('container-fluid');
			$('.wrap > div').removeClass('container');

			return false;
	});
	$('.boxed-width').on('click', function() {

			
			
			$('.wrap > div').addClass('container');
			$('.wrap > div').removeClass('container-fluid');

			return false;
	});


	});
	jQuery(window).load(function(){



	});

}(jQuery));