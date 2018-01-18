/* JavaScript for index.html on iamravitejag.github.io */
/* Last Update: 18 January 2018. */

$(document).ready(function() {
	$('#resume_date').hide();
	$('#resume').mouseenter(function() {
		$('#resume_date').fadeIn(200);
	});
	$('#resume').mouseleave(function() {
		$('#resume_date').fadeOut(200);
	});
});
