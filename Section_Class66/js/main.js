(function ($) {
	"use strict";

	jQuery(document).ready(function(){


		/* CountDown Timer Activation*/
		 $('#getting-started').countdown('2019/02/14', function(event) {
		    $(this).html(event.strftime('<span class="countdown-wrap"><span class="single-countdown">%w <br/><span>weeks</span></span><span class="single-countdown">%d <br/><span>days</span></span><span class="single-countdown">%-H <br/><span>Hours</span></span><span class="single-countdown">%M <br/><span>Minute</span></span><span class="single-countdown">%S <br/><span>Second</span></span></span>'));
		  });


	 	/* Bar Filler Activation*/
		$(document).ready(function(){
			$('#bar1').barfiller();		
		});
		/* Bar Filler Activation*/
		$(document).ready(function(){
			$('#bar2').barfiller();		
		});
		/* Bar Filler Activation*/
		$(document).ready(function(){
			$('#bar3').barfiller();		
		});
		/* Bar Filler Activation*/
		$(document).ready(function(){
			$('#bar4').barfiller();		
		});


	});


	jQuery(window).load(function(){



	});

}(jQuery));


