(function ($) {
	"use strict";

	jQuery(document).ready(function($){




		//testion jquery section

		$("#show").click(function() {
			$(".box").show(3000);
		});
		$("#hide").click(function() {
			$(".box").hide(3000);
		});
		$("#toggle").click(function() {
			$(".box").toggle(3000);
		});
		$("#fadein").click(function() {
			$(".box").fadeIn(3000);
		});
		$("#fadeout").click(function() {
			$(".box").fadeOut(3000);
		});
		$("#fadeto").click(function() {
			$(".box").fadeTo(3000, .3);
		});
		$("#fadetoggle").click(function() {
			$(".box").fadeToggle(3000);
		});
		$("#slideup").click(function() {
			$(".box").slideUp(3000);
		});
		$("#slidedown").click(function() {
			$(".box").slideDown(3000);
		});
		$("#slidetoggle").click(function() {
			$(".box").slideToggle(3000);
		});
		$("#slideto").click(function() {
			$(".box").slideTo(3000, 40);
		});
		$("#stop").dblclick(function() {
			$(".box, .golok").stop(1000);
		});
		$("#animate").click(function() {
			$(".golok").css({
				background: "red",
				width: 300 + "px",
				height: 300 + "px",
				right: 0,
			}).slideUp(2000).slideDown(2000).animate({left: 0},2000).fadeOut(2000).fadeIn(3000);
			setTimeout(function(){ $(".golok").css("right", "0"); },2000);
		});

		$(".top").click(function() {
			$("html,body").animate( {
				scrollTop: 0
			},5000);
		});



		$(".para").mouseover(function() {
			$(this).stop().animate( {
				width: "350px"
			},300);
		});
		$(".para").mouseout(function() {
			$(this).stop().animate( {
				width: 300 + "px"
			},300);
		});


		//concatenate
		$("#concatenet").click(function() {
			alert("para2 text is: "+$(".para2").text());
		});

		$("#show_html").click(function() {
			alert("big html: "+$(".footer-menu").html());
		});

		$("#showval").click(function() {
			alert("The value is: "+$("#neme").val());
		});

		$("#showtext").click(function() {
			alert($(".para2").text());
		});


		//attrubute change
		$("#name1").click(function() {
			$("#neme").val("md hasan patwary");
		});

		$("#dep").click(function() {
			$(".dep").html("<strong>English</strong>");
		});

		$("#skill").click(function() {
			$(".skill").text("html, css, jQuery, php");
		});


		$("#link").click(function() {
			$(".link").attr({
				href: "http://youtube.com",
				title: "youtube"
			});
		});

		$("#s_link").click(function() {
			alert($(".link").attr("href"));
		});





		//append, prepend, after and before
		$("#append").click(function() {
			$(".append").append( 564645676545647);
		});

		$("#prepend").click(function() {
			$(".prepend").prepend( 564645676545647);
		});

		$("#after").click(function() {
			$(".after span").after( 564645676545647);
		});

		$("#before").click(function() {
			$(".before").before( 564645676545647);
		});

		$("#remove").click(function() {
			$(".appenddiv").remove();
		});

		$("#empty").click(function() {
			$(".appenddiv").empty();
		});




		//height dimention area
		$("#all").click(function() {
			var dimention = "";
			dimention += "h2 width is: "+$(".dimention h2").width()+" px"+"<br />";
			dimention += "h2 height is: "+$(".dimention h2").height()+" px"+"<br />";
			dimention += "h2 inner width is: "+$(".dimention h2").innerWidth()+" px"+"<br />";
			dimention += "h2 inner height is: "+$(".dimention h2").innerHeight()+" px"+"<br />";
			dimention += "h2 outer width is: "+$(".dimention h2").outerWidth()+" px"+"<br />";
			dimention += "h2 outer height is: "+$(".dimention h2").outerHeight()+" px"+"<br />";
			dimention += "h2 outer height true is: "+$(".dimention h2").outerWidth(true)+" px"+"<br />";
			dimention += "h2 outer height true is: "+$(".dimention h2").outerHeight(true)+" px"+"<br />";
			$(".display").html(dimention);
		});
		$("#height").click(function() {
			var dimention = "";
			dimention += "h2 width is: "+$(".dimention h2").width()+" px"+"<br />";
			dimention += "h2 height is: "+$(".dimention h2").height()+" px"+"<br />";
			$(".display").html(dimention);
		});
		$("#innerheight").click(function() {
			var dimention = "";
			dimention += "h2 inner width is: "+$(".dimention h2").innerWidth()+" px"+"<br />";
			dimention += "h2 inner height is: "+$(".dimention h2").innerHeight()+" px"+"<br />";
			$(".display").html(dimention);
		});
		$("#outerheight").click(function() {
			var dimention = "";
			dimention += "h2 outer width is: "+$(".dimention h2").outerWidth()+" px"+"<br />";
			dimention += "h2 outer height is: "+$(".dimention h2").outerHeight()+" px"+"<br />";
			$(".display").html(dimention);
		});
		$("#outerheighttrue").click(function() {
			var dimention = "";
			dimention += "h2 outer height true is: "+$(".dimention h2").outerWidth(true)+" px"+"<br />";
			dimention += "h2 outer height true is: "+$(".dimention h2").outerHeight(true)+" px"+"<br />";
			$(".display").html(dimention);
		});


	/*
		$("#animate").click(function() {
			$(".box").toggle().animate({
				width: 100 + "%",
				height: 100 + "px"
			},3000);
		});
	*/



	//Form validation area
	$("#submitbtn").click(function(e) {
		var isValid = true;
		$("input[type='text']#required, input[type='email']#required").each(function() {

			if($(this).val() == '') {
				isValid = false;
				$(this).css({
					border: "1px solid red",
					background: "#f5c7bf"
				});
			} else {
				$(this).css({
					border: "",
					background: ""
				});
			}

		});

		if (isValid == false) {
			e.preventDefault();
		} else {
			clear();
			document.getElementById("msg-s").innerHTML = "You have sucessfully submited.";
			return false;
		}
	});


	//jQuery text field datePicker
	$("#Picker").datepicker({
		showOn: "both",
		buttonText: "show date",
		dateFormat: "dd/mm/yy",
		changeMonth: true,
		changeYear: true,
	});



	//xml and ajax function init
	xmlajax();

	//xml and ajax auto update function init
	autoload();


	//add remove class conditionaly
	var classHandle = true;
	$("#uibtn").click(function() {
		if(classHandle) {
			$("#addremoveclass").addClass('add', 5000, "easeInOutQuart");
		} else {
			$("#addremoveclass").removeClass('add', 5000, "easeInOutQuart", function() {
				$("#addremoveclass p:nth-child(2)").hide(2000);
				$("#addremoveclass p:nth-child(2)").show(2000, "swing", function() {
					$("#addremoveclass p:nth-child(2)").animate({
						"color": "red",
						"background-color": "green",
						"font-size": "18px"
					}, 3000, "swing", function() {
						$("#addremoveclass p:nth-child(2)").animate({
							"color": "#333",
							"background-color": "#ddd",
							"font-size": "14px",
							"padding": "20px 10px"
						}, 2000, "easeInOutQuart");
					});
				});
			});
		}
		classHandle = !classHandle;
	});


	//jQuery-ui tab init
	$("#tabs").tabs();


	//auto complete field
	var alltech = ["html", "css", "jQuery", "java", "python", "ruby", "php", "wordpress", "node.js", "javaScript", "sass", "json", "xml", "ajax", "react.js", "angular.js", "view.js", "c", "perl"];
	$("#autocomplete").autocomplete({
		source: alltech,
		autoFocus: true,
		minLength: 1,
		delay: 500

	});


	//jquery-Ui effect
	$(".effect-btn").on("click", function() {
		$(".ui-effect-box").toggle({
			effect: "explode",
			easing: "easeInExpo",
			pieces: 500,
			duration: 5000,
			delay: 2000
		});
	});
	$(".stop-btn").click(function() {
		$(".ui-effect-box").stop();
	});

	//jquery-ui accordion init
	$("#accordion").accordion({
		collapsible: true
	});


	//Jquery-UI Spinner/ text feild Number
	$("#Spinner").spinner({
		min: -50,
		max: 50,
		step: 5,
	});

















	});
	jQuery(window).load(function(){



	});

}(jQuery));

//input value clear function
function clear() {
	$("#forom :input[type=text], #forom :input[type=email]").each(function() {
		$(this).val("");
	});
}


//xml and ajax function
function xmlajax() {
	$.ajax({
		url: "text.xml",
		dataType: "xml",
		success: function(data) {
			$("ul.xmls").children().remove();
			$(data).find("employe").each(function() {
				var alldata = '<li>Name: '+$(this).find("name").text()+'</li><li>Skill: '+$(this).find("skill").text()+'</li><li>Company: '+$(this).find("company").text()+'</li><li>Product: '+$(this).find("product").text()+'</li>';
				$("ul.xmls").append(alldata);
			});
			$(data).find("employer").each(function() {
				var alldata = '<li>zender: '+$(this).find("zender").text()+'</li><li>brother: '+$(this).find("brother").text()+'</li><li>father: '+$(this).find("father").text()+'</li>';
				$("ul.xmls").append(alldata);
			});
		},

		error: function() {
			$("ul.xmls").children().remove();
			$("ul.xmls").append("<h5>xml not found</h5>");
		}

	});
}

//xml and ajax auto update function
function autoload() {
	setTimeout(function() {
		xmlajax();
		autoload();
	}, 100);
}


