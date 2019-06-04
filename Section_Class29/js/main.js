(function ($) {
	"use strict";

	jQuery(document).ready(function(){
        
       $(".isotope-title ul li").on("click", function() {
           
           $(".isotope-title ul li").removeClass("active");
           $(this).addClass("active");
           
           var selector = $(this).attr("data-filter");
           $(".items-lists").isotope({
               filter: selector
           });
           
       });
        
		
        jQuery('.items-lists').isotope();

	});
	jQuery(window).load(function(){


	});

}(jQuery));