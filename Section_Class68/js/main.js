(function ($) {
	"use strict";

	jQuery(document).ready(function($){



		//Masonry init
		$(".portfolio-item").masonry();

		//Portfolio item animate
		$(".single-portfolio-item").hover(function() {
			$(".single-portfolio-item-tablecell p").removeClass("animated fadeInUp");
			$(this).find(".single-portfolio-item-tablecell p").addClass("animated fadeInUp");
		});
		$(".single-portfolio-item").hover(function() {
			$(".single-portfolio-item-tablecell h3").removeClass("animated slideInDown");
			$(this).find(".single-portfolio-item-tablecell h3").addClass("animated slideInDown");
		});

		//off canvas menu init
		$(".menu-triger").on("click", function() {
			$(".off-canvas-menu, .off-canvas-overlay").addClass("canvas");
		});
		$(".close-btn, .off-canvas-overlay").on("click", function() {
			$(".off-canvas-menu, .off-canvas-overlay").removeClass("canvas");
		});

		//footer height
		var fheight = $("footer").outerHeight();
		$(".portfolio-items-section").css({
			"margin-bottom": fheight + "px",
		});


		//smart menu
		$(".header").headroom();








	});
	jQuery(window).load(function(){



	});

}(jQuery));