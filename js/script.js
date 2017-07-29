/* JavaScript for index.html on iamravitejag.github.io */
/* Last Update: 29 July 2017. */

$(document).ready(function() {
	$('#resume_date').hide();
	$('#resume').mouseenter(function() {
		$('#resume_date').show();
	});
	$('#resume').mouseleave(function() {
		$('#resume_date').hide();
	});
});