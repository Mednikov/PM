$(function () { 

	var vidSize = function(){
		$myWidth = $(window).width();  //Browser width
		$myHeight = $(window).height();  //Browser height
		$myRatio = $myWidth/$myHeight;  //
		$vidRatio = 1920/1080;

		console.log($myWidth);
		console.log($myHeight);
		console.log($myRatio);
		console.log($vidRatio);

		if ($myRatio > $vidRatio) {
			$('.video-holder').css("width", $myWidth + "px");
			$('.video-holder').css("height", "auto");
			$top = (($myWidth/$vidRatio) - $myHeight)/2;
			$('.video-holder').css("top", "-" + $top + "px");
			$('.video-holder').css("left", 0);
			$('#header').css("height", $myHeight + "px");
		} else {
			$('.video-holder').css("height", $myHeight + "px");
			$('.video-holder').css("width", $myHeight*$vidRatio + "px");
			$left = (($myHeight*$vidRatio) - $myWidth)/2;
			$('.video-holder').css("left", "-" + $left + "px");
			$('.video-holder').css("top", 0);
			$('#header').css("height", $myHeight + "px");
		};

	};


	vidSize();

	$(window).resize(function (){
		vidSize();
	});


	

/*$myHeight = ((Math.ceil($myHeight/5))*96)/100;
			$myMargin = ((Math.ceil($myHeight/5))*10)/100;
			$("#grid .movie-card").css("height", $myHeight + "px");
			$("#grid .movie-filter").css("height", $myHeight + "px");
			$("#grid .movie-card").css("width", $myHeight + "px");
			$("#grid .movie-filter").css("width", $myHeight + "px");
			$("#grid .movie-card-big").css("width", ($myHeight*3)+( (((Math.ceil($myHeight/5))*10)/100)*4 ) + "px");

			$("#grid .movie-card").css("margin", $myMargin + "px");
			$("#grid .movie-filter").css("margin", $myMargin + "px");
			$("#grid .movie-card-big").css("margin", $myMargin + "px");*/

	



/*

	$(".movie-filter-btn").click(function(){
		$('#test').addClass('movie-filter-big');
		$('#test').addClass('movie-filter-big');
	});	

	$(".close").click(function(){
		$('#test').removeClass('movie-filter-big');
	});	
	
*/

});
