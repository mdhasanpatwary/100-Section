(function ($) {
	"use strict";

	jQuery(document).ready(function($){

		//HOMEPAGE SLIDER ACTIVE
		$(".homepage-slider").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			nav: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			dots: false,
		});

		/*
		//SERVICE SECTION ADD CLASS
		$(".single-service-box").mousemove(function() {
			$(".single-service-box").removeClass("hover");
			$(this).addClass("hover");
		});
		*/

		//CLIENT CAROUSEL ACTIVE
		$(".client-carousel-area").owlCarousel({
			items: 3,
			loop: true,
			autoplay: true,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			dots: false,
			margin: 30,
			responsive: {
              0: {
                items: 1
              },
              280: {
                items: 1
              },
              320: {
                items: 1
              },
              640: {
                items: 2
              },
              960: {
                items: 2
              },
              1200: {
                items: 3
              }
            }
		});


		//TOOLTIP INIT
		 $('[data-toggle="tooltip"]').tooltip();




		 //OFF CANVAS MENU INIT
		 $(".menu").on("click", function() {
			$(".off-canvas-menu, .overlay").addClass("active");
		});

		$(".icon, .overlay").on("click", function() {
			$(".off-canvas-menu, .overlay").removeClass("active");
		});
		


	});
	jQuery(window).load(function(){



	});

}(jQuery));