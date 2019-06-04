(function ($) {
	"use strict";

	jQuery(document).ready(function(){

		
		$('.slide').owlCarousel({
			autoplay: true,
			loop: true,
			nav: false,
			items: 1,
			dots: true,
		});

		$('.menu-icon').on('click', function() {
			$('.off-canvas, .off-canvas-overlay').addClass('active');
		});
		$('.fa-close, .off-canvas-overlay').on('click', function() {
			$('.off-canvas, .off-canvas-overlay').removeClass('active');
		});


	});
	jQuery(window).load(function(){



	});

}(jQuery));