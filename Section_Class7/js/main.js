(function ($) {
	"use strict";

	jQuery(document).ready(function(){

		$(".slider").owlCarousel({
			items: 4,
			autoplay: true,
			loop: true,
			margin: 30,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", " <i class='fa fa-long-arrow-right'></i>"]
		});








	});









	jQuery(window).load(function(){



	});

}(jQuery));





		$(".toggle-icon").on("click", function() {

			$(".off-canvas-menu").addClass("active");
			$(".total-wrap").addClass("active");

		});





