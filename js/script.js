/* JavaScript/jQuery for index.html on iamravitejag.github.io */
/* Last Update: 17 March 2018. */

$(document).ready(function() {
	$('#resumedate').hide();
	$('#resume').mouseenter(function() {
		$('#resumedate').fadeIn(200);
	});
	$('#resume').mouseleave(function() {
		$('#resumedate').fadeOut(200);
	});
});
