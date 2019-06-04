
/*
		var webcoach = 'This is a String';
		alert(webcoach);
		var webcoach= 10;
		alert(webcoach); 


function getAddition(firstNumber,secondNumber){
var result;
result = firstNumber + secondNumber;
return result;
}
var myResult = getAddition(10,20);
alert(myResult);


function add(fNo,sNo,tNo) {
	var result;
	result = fNo + sNo + tNo;
	return result;
}

var myResult = add('MD_', 'Hasan ', 'Patwary');
alert(myResult);






		var x = 10;
		var y = 5;

		output = x + y;
		document.write('+=x : ' + output + '<br/>');
		output = x - y;
		document.write('+=x : ' + output + '<br/>');
		output = x * y;
		document.write('+=x : ' + output + '<br/>');
		output = x * y;
		document.write('+=x : ' + output + '<br/>');
		output = x % y;
		document.write('+=x : ' + output + '<br/>');
		output = x + y;
		document.write('+=x : ' + output + '<br/>');
		

*/



(function ($) {
	"use strict";

	jQuery(document).ready(function(){

		$(".menu-trigar").on("click", function() {
			$(".main-menu nav").toggle().css({
				"display": "block",
				"opacity": 1,
				"visibility": "visible"
			});
		});



	});
	jQuery(window).load(function(){



	});

}(jQuery));