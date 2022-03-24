 $(document).ready(function() {
	$(window).scroll(function() {
 		if ($(this).scrollTop() > 100) {
 			$("#GoTop").fadeIn();
 		} else {
 			$("#GoTop").fadeOut();
 		}
 	});

 	$("GoTop").click(function(){
 		$("html, body").animate({
 				scrollTop: 0
 			},
 			600
 		);
 	});
 });
