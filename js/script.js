$(document).ready(function(){

	$('#slides').superslides({

		animation:'fade',
		play:'6000',
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer", "Web Developer", "Student"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false

	});



});