 /*GoTop Function*/
 $(document).ready(function() {
	$(window).scroll(function() {
 		if ($(this).scrollTop() > 100) {
 			$("#GoTop").fadeIn();
 		} else {
 			$("#GoTop").fadeOut();
 		}
 	});

 	$("#GoTop").click(function(){
 		$("html, body").animate({
 				scrollTop: 0
 			},
 			600
 		);
 	});
 });
/*Hover show menu*/
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}