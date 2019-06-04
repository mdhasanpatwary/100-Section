(function ($) {
	"use strict";

	jQuery(document).ready(function(){
		
		$(".slider-item").owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: true,
            items: 1,
            animateOut: 'fadeOut',
        });


	});
	jQuery(window).load(function(){



	});

}(jQuery)); 