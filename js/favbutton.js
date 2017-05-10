var btn = $( ".fav" );
$(".fav").click( function() {
	btn.addClass("shrink");
	setTimeout( function() {
		btn.removeClass("shrink"); }, 2000);
});


$(.comics).click(function(){
$(this).toggleclass('Fav');
});