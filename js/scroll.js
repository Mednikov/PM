$(document).ready(function(){

	$(".scroll").click(function(event){
		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top-76; //65 - высота фиксированного меню
		$('html, body').animate({scrollTop:target_top}, 1000);
	});

	// $(".f-scroll").click(function(event){
	// 	event.preventDefault();
	// 	var full_url = this.href;
	// 	var parts = full_url.split("#");
	// 	var trgt = parts[1];
	// 	var target_offset = $("#"+trgt).offset();
	// 	var target_top = target_offset.top-76-20; //65 - высота фиксированного меню
	// 	$('html, body').animate({scrollTop:target_top}, 1000);
	// });

});