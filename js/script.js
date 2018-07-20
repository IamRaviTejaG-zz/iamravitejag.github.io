/* JavaScript/jQuery for index.html on iamravitejag.github.io */
/* Last Update: 21 July 2018. */

$(document).ready(function() {
	$('#resumedate').hide();
	$('#gsoc-archive').hide();
	$('#gssoc-abbr').hide();
	$('#resume').mouseenter(function() {
		$('#resumedate').fadeIn(200);
	});
	$('#resume').mouseleave(function() {
		$('#resumedate').fadeOut(200);
	});
	$('#gsoc-2018-blog').mouseenter(function() {
		$('#gsoc-archive').fadeIn(200);
	});
	$('#gsoc-2018-blog').mouseleave(function() {
		$('#gsoc-archive').fadeOut(200);
	});
	$('#gssoc-2018-blog').mouseenter(function() {
		$('#gssoc-abbr').fadeIn(200);
	});
	$('#gssoc-2018-blog').mouseleave(function() {
		$('#gssoc-abbr').fadeOut(200);
	});
});
