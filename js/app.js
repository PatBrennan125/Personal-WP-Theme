jQuery(document).ready(function($){

	$( ".nav-toggle" ).click(function() {
  $(this).toggleClass("open");
  $("nav").fadeToggle(100);

  return false;
});

});
