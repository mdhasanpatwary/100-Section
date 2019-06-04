(function ($) {
	"use strict";

	jQuery(document).ready(function($){
        
       
        $(".menu-list li").on("click", function() {
            
            $(".menu-list li").removeClass("active");
            $(this).addClass("active");
            
            var selector = $(this).attr("data-filter");
            
            $(".project-list").isotope({
                filter: selector,
            });
            
        });
        
		
		$(".project-list").isotope();


	});
	jQuery(window).load(function(){



	});

}(jQuery));