
$(document).ready(function() {
    /* change section display */
    $('nav a').click(function(e) {
		var activeClass = $('section.sectionShow');
		var hideClass = $($(this).attr("href"));
		$(this).parents().find('.active').removeClass('active')
		activeClass.fadeOut();
		activeClass.addClass("sectionHide");
		activeClass.removeClass("sectionShow");
		$(this).parent().addClass('active');
		hideClass.removeClass("sectionHide");
		hideClass.addClass("sectionShow");
		hideClass.fadeIn();
		
    });
});


function initGoogleMap() {

	var styleArray = [
	{
		featureType: 'all',
		elementType: 'all',
		stylers: [
			{hue: '#ff1a00'},
			{saturation: '-100'},
			{lightness: '33'},
			{gamma: 0.6}
		]
	}
	];

	var map = new google.maps.Map(document.getElementById('map'), {
	center: new google.maps.LatLng(23.559200, 120.465990),
	scrollwheel: false,
	styles: styleArray,
	zoom: 14
	});
}