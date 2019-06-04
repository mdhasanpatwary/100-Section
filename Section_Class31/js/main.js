(function ($) {
	"use strict";

	jQuery(document).ready(function(){
        
        var s = skrollr.init({
            render: function(data){
                //debugging - log the current position,
                //console.log(data.curTop);
            }
        });
		
        
        
		$(".megnific-icon").magnificPopup({
			type: 'video',
		});
		


	});
	jQuery(window).load(function(){



	});

}(jQuery));