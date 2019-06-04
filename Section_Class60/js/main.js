(function ($) {
	"use strict";

	jQuery(document).ready(function(){

		$(window).scroll(function() {    
		    var scroll = $(window).scrollTop();

		     //>=, not <=
		    if (scroll >= 520) {
		        //clearHeader, not clearheader - caps H
		        $(".header").addClass("is-sticky");
		    } else {
		    	 $(".header").removeClass("is-sticky");
		    }
		});


	});
	jQuery(window).load(function(){



	});

}(jQuery));