
$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".halu").slideToggle("medium");

	$('nav ul li.mati').each(function(index, el) {
		var haluID = el.id.split('_')[1];
		$('.halu#' + haluID).hide();
	});
});

$('nav').delegate('.mati', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.halu:visible').fadeOut('medium', function() {
		$('.halu#' + pilihIsi).fadeIn('medium');
	});

	var $this = $(this);
	$this.removeClass('mati').addClass("hidup");
    $this.siblings().addClass('mati').removeClass('hidup');

    });
});