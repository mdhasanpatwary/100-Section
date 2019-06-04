

(function($){
	'use strict';

	$(document).ready(function() {


		
		$('.product-area').masonry();

		$('.slider-area').owlCarousel({
			autoplay: false,
			loop: true,
			dots: true,
			items: 1,

		});
		$('.slider').owlCarousel({
			autoplay: true,
			loop: true,
			dots: false,
			items: 1,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]

		});

		$('.logo-carousel').owlCarousel({
		
			lazyLoad:true,
			loop:true,
			autoplay:true,
			autoplayTimeout:5000,
			margin:10,
			autoplayHoverPause:true,
			responsive: {
              0: {
                items: 1
              },
              280: {
                items: 1
              },
              320: {
                items: 2
              },
              640: {
                items: 3
              },
              960: {
                items: 4
              },
              1200: {
                items: 5
              }
            }

		});



		//for off-canvas
		$('.toggle-icon').on('click', function() {

			$(".off-canvas-menu, .off-canvas-overlay").addClass("active");
			return false;
			
		});

		$('.close, .off-canvas-overlay').on('click', function() {

			$(".off-canvas-menu, .off-canvas-overlay").removeClass("active");

		});

		//for search area
		$('.search').on('click', function() {

			$('.section-search, .off-canvas-overlay').addClass('active');

		});

		$('.search-box i.fa-close, .off-canvas-overlay').on('click', function() {

			$('.section-search, .off-canvas-overlay').removeClass('active');

		});



		/* ======= Pre Loader ======= */
		$('#loading').fadeOut();









	});

})(jQuery);

	