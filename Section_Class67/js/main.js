



(function ($) {
	"use strict";

	jQuery(document).ready(function(){



		//data tabke init
		$('#table_id').DataTable();


		//Wow js activation
		new WOW().init();


		//MailChimp Activation
		$('.mailchimp-form').ajaxChimp({
			url: 'http://selfemployed.us20.list-manage.com/subscribe/post?u=a7d93173e183fa565f383d4c5&amp;id=babccf1800',
		});


		//Home Page Slider Activation
		var topSlider = $('.slider-area');
		topSlider.owlCarousel({
			autoplay: false,
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			dots: true,
			items: 1,
			dotsData: true
		});

		// Listen to owl events:
		topSlider.on('translate.owl.carousel', function(event) {
		   $('.single-slide-content h6').removeClass('animated bounceIn');
		   $('.single-slide-content h1').removeClass('animated zoomIn');
		});

		topSlider.on('translated.owl.carousel', function(event) {
		   $('.single-slide-content h6').addClass('animated bounceIn');
		   $('.single-slide-content h1').addClass('animated zoomIn');
		});

		//popUp video play btn
		 $('.video-play-btn').magnificPopup({type:'video'});


		//Featured project Slider Activation
		$(".feature-project").owlCarousel({
			autoplay: false,
			loop: true,
			dots: true,
			items: 1,
			autoplay: true
		});


		//circle progressbar active for web
		 $('#web-progress').circleProgress({
		    value: .9,
		    size: 200,
		    thickness: 2,
		    emptyFill: '#ddd',
		    fill: {
		      gradient: ["red", "orange"]
		    }
		  }).on('circle-animation-progress', function(event, progress) {
		    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
		  });
		 //circle progressbar active for graphic
		 $('#graphic-progress').circleProgress({
		    value: .8,
		    size: 200,
		    thickness: 2,
		    emptyFill: '#ddd',
		    fill: 'orange'
		  }).on('circle-animation-progress', function(event, progress) {
		    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
		  });
		 //circle progressbar active for seo
		 $('#seo-progress').circleProgress({
		    value: .7,
		    size: 200,
		    thickness: 2,
		    emptyFill: '#ddd',
		    fill: 'red'
		  }).on('circle-animation-progress', function(event, progress) {
		    $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
		  });


			//YT Player Activation
			$('#video').YTPlayer({
			    fitToBackground: true,
			    videoId: 'LSmgKRx5pBo'
			});


			Template.templateName.onRendered(function() {
			  this.$('body').vide('should');
			});

			//flip box init
			






	});
	jQuery(window).load(function(){
		


	});

}(jQuery));
















